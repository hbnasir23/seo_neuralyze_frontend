import { useState, useRef, useEffect } from 'react';
import { Download, FileDown, Zap, TrendingUp, AlertTriangle, Loader2 } from 'lucide-react';

type AuditStatus = 'idle' | 'running' | 'completed' | 'error';

interface ConflictRow {
  similarity: number;
  priorityUrl: string;
  conflictingUrl: string;
  systemAction: string;
}

export default function AnalyzePage() {
  const [domain, setDomain] = useState('');
  const [status, setStatus] = useState<AuditStatus>('idle');
  const [progressMessage, setProgressMessage] = useState('Initializing...');
  const [errorMsg, setErrorMsg] = useState('');
  const [results, setResults] = useState<ConflictRow[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const runAudit = async () => {
    if (!domain.trim()) return;

    setStatus('running');
    setErrorMsg('');
    setProgressMessage('Launching audit...');
    setResults([]);

    try {
      const postResponse = await fetch(`https://harisbinnasir-seo-neuralize.hf.space/audit?domain=${encodeURIComponent(domain)}`, {
        method: 'POST',
      });
      
      if (!postResponse.ok) {
        throw new Error('Failed to launch audit');
      }

      const postData = await postResponse.json();
      const jobId = postData.job_id;

      intervalRef.current = setInterval(async () => {
        try {
          const getResponse = await fetch(`https://harisbinnasir-seo-neuralize.hf.space/results/${jobId}`);
          if (!getResponse.ok) {
            throw new Error('Failed to fetch results');
          }
          const getData = await getResponse.json();

          if (getData.status === 'running') {
            setProgressMessage(getData.progress || 'Analyzing...');
          } else if (getData.status === 'completed') {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setStatus('completed');
            
            const mappedResults: ConflictRow[] = (getData.conflicts || []).map((c: any) => ({
                similarity: c.similarity,
                priorityUrl: c.url_a,
                conflictingUrl: c.url_b,
                systemAction: c.action
            }));
            setResults(mappedResults);
          } else if (getData.status === 'error') {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setStatus('error');
            setErrorMsg(getData.error || 'An error occurred during the audit');
          }
        } catch (err: any) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setStatus('error');
          setErrorMsg(err.message || 'Error occurred while polling');
        }
      }, 3000);

    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to start audit');
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Input Zone */}
        {status === 'idle' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-black text-[32px] sm:text-[48px] mb-3 sm:mb-4 font-mono" style={{ fontWeight: 600 }}>
                Neural Audit Dashboard
              </h1>
              <p className="text-[#6B7280] text-[14px] sm:text-[16px]">
                Enter your domain to begin semantic conflict analysis
              </p>
            </div>

            <div className="border-2 border-[#E5E7EB] p-6 sm:p-8 hover:border-black transition-all">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="enter root domain (e.g., example.com)"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-[#E5E7EB] text-black text-[14px] sm:text-[16px] placeholder:text-[#9CA3AF] outline-none focus:border-black transition-all"
                />
                <button
                  onClick={runAudit}
                  disabled={!domain.trim()}
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-white border-none cursor-pointer hover:bg-[#1a1a1a] transition-all flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-50"
                  style={{ fontWeight: 500 }}
                >
                  <Zap size={18} />
                  neural audit
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[#E5E7EB]">
                <div className="text-center">
                  <p className="text-[#9CA3AF] text-[10px] sm:text-[12px] uppercase tracking-wider mb-1">
                    Avg. Analysis Time
                  </p>
                  <p className="text-black text-[14px] sm:text-[18px] font-mono" style={{ fontWeight: 600 }}>
                    6-8 sec
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[#9CA3AF] text-[10px] sm:text-[12px] uppercase tracking-wider mb-1">
                    Vector Dimensions
                  </p>
                  <p className="text-black text-[14px] sm:text-[18px] font-mono" style={{ fontWeight: 600 }}>
                    768
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[#9CA3AF] text-[10px] sm:text-[12px] uppercase tracking-wider mb-1">
                    Model
                  </p>
                  <p className="text-black text-[14px] sm:text-[18px] font-mono" style={{ fontWeight: 600 }}>
                    SBERT
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Status Interface */}
        {status === 'running' && (
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-black p-6 sm:p-10 relative">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-black" />
              <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-black" />
              <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-black" />
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-black" />

              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-black text-[20px] sm:text-[32px] mb-2 font-mono break-all" style={{ fontWeight: 600 }}>
                  Processing: {domain}
                </h2>
                <p className="text-[#6B7280] text-[13px] sm:text-[14px]">
                  Neural semantic analysis in progress
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <Loader2 size={48} className="animate-spin text-black" />
                <p className="font-mono text-black text-[14px] sm:text-[16px] text-center">
                  {progressMessage}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="border-2 border-red-500 bg-red-50 p-6 sm:p-10 relative text-center">
              <AlertTriangle size={48} className="text-red-500 mx-auto mb-4" />
              <h2 className="text-red-700 text-[20px] sm:text-[24px] mb-2 font-mono" style={{ fontWeight: 600 }}>
                Audit Failed
              </h2>
              <p className="text-red-600 font-mono text-[14px]">
                {errorMsg}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2 bg-red-600 text-white font-mono text-[14px] hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Results Zone */}
        {status === 'completed' && results.length > 0 && (
          <div className="max-w-7xl mx-auto">
            {/* Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="border border-[#E5E7EB] p-6 hover:border-black transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle size={20} className="text-black" />
                  <h3 className="text-[#9CA3AF] text-[12px] uppercase tracking-wider">
                    Conflicts Found
                  </h3>
                </div>
                <p className="text-black text-[32px] font-mono" style={{ fontWeight: 600 }}>
                  {results.length}
                </p>
              </div>

              <div className="border border-[#E5E7EB] p-6 hover:border-black transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp size={20} className="text-black" />
                  <h3 className="text-[#9CA3AF] text-[12px] uppercase tracking-wider">
                    Avg. Similarity
                  </h3>
                </div>
                <p className="text-black text-[32px] font-mono" style={{ fontWeight: 600 }}>
                  {(results.reduce((acc, r) => acc + r.similarity, 0) / results.length).toFixed(1)}%
                </p>
              </div>

              <div className="border border-[#E5E7EB] p-6 hover:border-black transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Zap size={20} className="text-black" />
                  <h3 className="text-[#9CA3AF] text-[12px] uppercase tracking-wider">
                    Analysis Time
                  </h3>
                </div>
                <p className="text-black text-[32px] font-mono" style={{ fontWeight: 600 }}>
                  6.2s
                </p>
              </div>
            </div>

            {/* Export Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-black text-[20px] sm:text-[24px]" style={{ fontWeight: 600 }}>
                Conflict Roadmap
              </h2>
              <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
                <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-[#E5E7EB] text-black font-mono text-[12px] sm:text-[13px] bg-transparent cursor-pointer hover:border-black hover:bg-black hover:text-white transition-all flex-1 sm:flex-initial">
                  <Download size={14} />
                  <span className="hidden sm:inline">download csv</span>
                  <span className="sm:hidden">csv</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-[#E5E7EB] text-black font-mono text-[12px] sm:text-[13px] bg-transparent cursor-pointer hover:border-black hover:bg-black hover:text-white transition-all flex-1 sm:flex-initial">
                  <FileDown size={14} />
                  <span className="hidden sm:inline">download pdf</span>
                  <span className="sm:hidden">pdf</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="text-left px-3 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-mono uppercase tracking-wider" style={{ fontWeight: 500 }}>
                      Similarity
                    </th>
                    <th className="text-left px-3 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-mono uppercase tracking-wider" style={{ fontWeight: 500 }}>
                      Priority URL
                    </th>
                    <th className="text-left px-3 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-mono uppercase tracking-wider" style={{ fontWeight: 500 }}>
                      Conflicting URL
                    </th>
                    <th className="text-left px-3 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-mono uppercase tracking-wider" style={{ fontWeight: 500 }}>
                      System Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, index) => (
                    <tr key={index} className="border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-black text-[14px] sm:text-[16px] font-mono" style={{ fontWeight: 600 }}>
                            {row.similarity}%
                          </span>
                          <div className="flex-1 bg-[#E5E7EB] h-1.5 max-w-[60px] sm:max-w-[80px]">
                            <div
                              className="bg-black h-full"
                              style={{ width: `${row.similarity}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-black font-mono text-[11px] sm:text-[13px]">{row.priorityUrl}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#6B7280] font-mono text-[11px] sm:text-[13px]">{row.conflictingUrl}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4">
                        <span className="inline-block px-2 sm:px-3 py-1 border border-black text-black text-[10px] sm:text-[12px] font-mono whitespace-nowrap">
                          {row.systemAction}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Reset Button */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  setStatus('idle');
                  setDomain('');
                  setResults([]);
                }}
                className="px-6 sm:px-8 py-3 border-2 border-black text-black text-[13px] sm:text-[14px] cursor-pointer bg-transparent hover:bg-black hover:text-white transition-all"
                style={{ fontWeight: 500 }}
              >
                analyze another domain
              </button>
              <button
                className="px-6 sm:px-8 py-3 bg-black text-white text-[13px] sm:text-[14px] cursor-pointer hover:bg-[#1a1a1a] transition-all"
                style={{ fontWeight: 500 }}
              >
                schedule enterprise demo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
