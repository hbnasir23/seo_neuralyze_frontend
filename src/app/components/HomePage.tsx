import { useNavigate } from 'react-router';
import { Sparkles, Brain, Shield } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-32 text-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="hidden sm:block absolute top-0 left-1/4 w-px h-32 bg-[#E5E7EB]" />
        <div className="hidden sm:block absolute top-0 right-1/4 w-px h-32 bg-[#E5E7EB]" />

        <div className="relative">
          <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-2 border border-[#E5E7EB]">
            <p className="text-[#6B7280] text-[11px] sm:text-[13px] font-mono tracking-wider uppercase">
              Neural Semantic Analysis Platform
            </p>
          </div>

          <h2
            className="text-black text-[36px] sm:text-[52px] lg:text-[64px] mb-6 sm:mb-8 font-mono tracking-tight"
            style={{ fontWeight: 600, lineHeight: '1.1' }}
          >
            neuralize<br />cannibalization.<br />reclaim rankings.
          </h2>

          <p className="text-[#6B7280] text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
          SEO Neuralyze is a sophisticated framework that leverages SBERT (Sentence-BERT) and vector space mapping to identify semantic intent overlaps across complex news and blog ecosystems. Traditional SEO audits rely on keyword density and manual URL review—an approach that fails at scale. Our neural framework projects every URL into a high-dimensional semantic space, where proximity reveals true intent conflicts invisible to conventional tools. Built for enterprise publishers managing thousands of articles, SEO Neuralyze automatically detects cannibalization patterns where multiple URLs compete for identical search intent, fragmenting authority and diluting rankings. The system employs transformer-based embeddings to understand contextual meaning beyond keywords, mapping content relationships with mathematical precision. Whether you're managing a news portal with 50,000 articles or a blog network with evolving editorial focus, our framework identifies the silent ranking killers that traditional SEO tools miss entirely. By quantifying semantic similarity at the sentence level, we expose conflicts between URLs that share zero keyword overlap but compete for the same user intent—the most dangerous form of cannibalization.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button
              onClick={() => navigate('/analyze')}
              className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 text-[15px] sm:text-[16px] hover:bg-[#1a1a1a] transition-all w-full sm:w-auto"
              style={{ fontWeight: 500 }}
            >
              start neural audit
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-black text-black px-8 sm:px-10 py-3 sm:py-4 text-[15px] sm:text-[16px] bg-transparent hover:bg-black hover:text-white transition-all w-full sm:w-auto"
              style={{ fontWeight: 500 }}
            >
              talk to experts
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white border-t border-[#E5E7EB] py-12 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h3 className="text-black text-[28px] sm:text-[36px] mb-6 sm:mb-8 text-center" style={{ fontWeight: 600 }}>
            built for enterprise news & blogs.
          </h3>
          <p className="text-[#6B7280] text-[14px] sm:text-[16px] leading-relaxed max-w-4xl mx-auto">
            Traditional SEO tools were designed for e-commerce and small business websites—environments with predictable site structures and limited content volume. They fail catastrophically when applied to enterprise news organizations and large-scale blog networks where editorial teams publish hundreds of articles monthly across overlapping topics. Standard cannibalization detection relies on exact keyword matches and URL similarity scores, missing the nuanced semantic conflicts that plague content-heavy sites. A news site might publish "Election Security Concerns" and "Voting System Vulnerabilities" as separate articles—zero keyword overlap, yet both target identical search intent. This is where traditional tools go blind. SEO Neuralyze was architected by Senior SEO Engineers and ML specialists who spent years diagnosing ranking volatility at major publishing houses. We observed that the most damaging cannibalization occurs at the intent level, not the keyword level. Our framework was purpose-built to solve this exact problem: neural semantic analysis that understands context, synonymy, and topical clustering the way search engines actually rank content. We don't just detect obvious duplicates—we map your entire content universe into vector space and identify clusters where multiple URLs are mathematically proven to compete for the same user query.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <h3 className="text-black text-[32px] sm:text-[42px] mb-3 sm:mb-4" style={{ fontWeight: 600 }}>
            The Power Zones
          </h3>
          <p className="text-[#6B7280] text-[14px] sm:text-[16px]">
            Enterprise-grade capabilities built for scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="border border-[#E5E7EB] p-8 hover:border-black transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Brain size={32} className="text-[#E5E7EB]" />
            </div>
            <h4 className="text-black text-[18px] mb-4 font-mono relative z-10" style={{ fontWeight: 600 }}>
              neural intent space mapping
            </h4>
            <p className="text-[#6B7280] text-[14px] leading-relaxed relative z-10">
              SBERT vectorizes content, projecting URLs into a high-dimensional semantic space to find clusters with identical search intent.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#E5E7EB] p-8 hover:border-black transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Shield size={32} className="text-[#E5E7EB]" />
            </div>
            <h4 className="text-black text-[18px] mb-4 font-mono relative z-10" style={{ fontWeight: 600 }}>
              asset firewall
            </h4>
            <p className="text-[#6B7280] text-[14px] leading-relaxed relative z-10">
              Automatically detects and filters out non-content URLs like .png, WordPress uploads, and media attachment pages to focus on pure content strategy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-[#E5E7EB] p-8 hover:border-black transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Sparkles size={32} className="text-[#E5E7EB]" />
            </div>
            <h4 className="text-black text-[18px] mb-4 font-mono relative z-10" style={{ fontWeight: 600 }}>
              stealth browser engine
            </h4>
            <p className="text-[#6B7280] text-[14px] leading-relaxed relative z-10">
              Uses Playwright to emulate real browser behavior, successfully bypassing the WAF and cookie walls of complex media portals like Dawn or The Times.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-white border-t border-[#E5E7EB] py-12 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <h3 className="text-black text-[28px] sm:text-[36px] mb-6 sm:mb-8" style={{ fontWeight: 600 }}>
            reclaim your ranking power.
          </h3>
          <button
            onClick={() => navigate('/analyze')}
            className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 text-[15px] sm:text-[16px] hover:bg-[#1a1a1a] transition-all"
            style={{ fontWeight: 500 }}
          >
            neural analyze
          </button>
        </div>
      </section>
    </div>
  );
}
