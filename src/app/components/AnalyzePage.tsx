import { useState } from 'react';
import { Download, FileDown, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

type AuditStatus = 'idle' | 'running' | 'completed';

interface ConflictRow {
  similarity: number;
  priorityUrl: string;
  conflictingUrl: string;
  systemAction: string;
}

export default function AnalyzePage() {
  const [domain, setDomain] = useState('');
  const [status, setStatus] = useState<AuditStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState<ConflictRow[]>([]);

  const mockResults: ConflictRow[] = [
    { similarity: 94.3, priorityUrl: '/news/election-security-concerns', conflictingUrl: '/politics/voting-system-vulnerabilities', systemAction: '301 redirect' },
    { similarity: 89.7, priorityUrl: '/blog/seo-best-practices-2026', conflictingUrl: '/resources/ultimate-seo-guide', systemAction: 'consolidate' },
    { similarity: 87.2, priorityUrl: '/analysis/climate-policy-framework', conflictingUrl: '/opinion/environmental-legislation-impact', systemAction: '301 redirect' },
    { similarity: 84.5, priorityUrl: '/tech/ai-regulation-challenges', conflictingUrl: '/policy/artificial-intelligence-governance', systemAction: 'canonical tag' },
    { similarity: 82.1, priorityUrl: '/business/startup-funding-trends', conflictingUrl: '/economy/venture-capital-landscape', systemAction: 'consolidate' },
    { similarity: 79.8, priorityUrl: '/health/mental-wellness-strategies', conflictingUrl: '/lifestyle/psychological-health-tips', systemAction: '301 redirect' },
    { similarity: 77.3, priorityUrl: '/education/online-learning-evolution', conflictingUrl: '/technology/digital-education-platforms', systemAction: 'canonical tag' },
  ];

  const steps = [
    '[1/4] Discovering URLs (Stealth Browser)...',
    '[2/4] Scrape Content...',
    '[3/4] Vectorizing with SBERT...',
    '[4/4] Generating Conflict Roadmap...',
  ];

  const runAudit = () => {
    if (!domain.trim()) return;

    setStatus('running');
    setCurrentStep(0);
    setProgress(0);

    const totalSteps = 4;
    const stepDuration = 1500;

    for (let i = 0; i < totalSteps; i++) {
      setTimeout(() => {
        setCurrentStep(i);
        setProgress(((i + 1) / totalSteps) * 100);

        if (i === totalSteps - 1) {
          setTimeout(() => {
            setStatus('completed');
            setResults(mockResults);
          }, stepDuration);
        }
      }, i * stepDuration);
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
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-white border-none cursor-pointer hover:bg-[#1a1a1a] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
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

              <div className="space-y-3 sm:space-y-4 font-mono text-[11px] sm:text-[13px] mb-6 sm:mb-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border transition-all ${
                      index === currentStep
                        ? 'border-black bg-black text-white'
                        : index < currentStep
                        ? 'border-[#E5E7EB] text-[#6B7280]'
                        : 'border-[#E5E7EB] text-[#9CA3AF]'
                    }`}
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center text-[10px] sm:text-[11px] flex-shrink-0 ${
                      index === currentStep
                        ? 'border-white text-white'
                        : index < currentStep
                        ? 'border-black bg-black text-white'
                        : 'border-[#E5E7EB]'
                    }`}>
                      {index < currentStep ? '✓' : index + 1}
                    </div>
                    <span className="break-words">{step}</span>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-[#E5E7EB] h-3 border border-[#E5E7EB]">
                  <div
                    className="bg-black h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[11px] text-[#6B7280] font-mono">
                    0%
                  </span>
                  <span className="text-[14px] text-black font-mono" style={{ fontWeight: 600 }}>
                    {Math.round(progress)}%
                  </span>
                  <span className="text-[11px] text-[#6B7280] font-mono">
                    100%
                  </span>
                </div>
              </div>
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
                  setProgress(0);
                  setCurrentStep(0);
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
