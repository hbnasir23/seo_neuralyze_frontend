import { Brain, Shield, Sparkles, Zap, Globe, Lock } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: 'Neural Intent Space Mapping',
      description: 'SBERT vectorizes content, projecting URLs into a high-dimensional semantic space to find clusters with identical search intent.',
      details: [
        'Transformer-based embeddings for contextual understanding',
        '768-dimensional vector space analysis',
        'Cosine similarity scoring for conflict detection',
        'Real-time clustering algorithms',
      ],
    },
    {
      icon: Shield,
      title: 'Asset Firewall',
      description: 'Automatically detects and filters out non-content URLs like .png, WordPress uploads, and media attachment pages to focus on pure content strategy.',
      details: [
        'Intelligent URL pattern recognition',
        'Media file exclusion (.png, .jpg, .pdf, .mp4)',
        'WordPress attachment page filtering',
        'Focus on indexable content only',
      ],
    },
    {
      icon: Sparkles,
      title: 'Stealth Browser Engine',
      description: 'Uses Playwright to emulate real browser behavior, successfully bypassing the WAF and cookie walls of complex media portals like Dawn or The Times.',
      details: [
        'Headless browser automation',
        'JavaScript rendering support',
        'Cookie wall bypass capabilities',
        'WAF-resistant scraping technology',
      ],
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Analysis',
      description: 'Process thousands of URLs in seconds with our optimized parallel processing engine.',
      details: [
        'Concurrent URL processing',
        'Distributed computing architecture',
        'Sub-10 second analysis for most sites',
        'Scalable to 100K+ URLs',
      ],
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Analyze content in any language with multilingual SBERT models trained on 50+ languages.',
      details: [
        'Support for 50+ languages',
        'Cross-language semantic analysis',
        'Unicode-aware text processing',
        'International character support',
      ],
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and security protocols to protect your data and analysis results.',
      details: [
        'End-to-end encryption',
        'SOC 2 Type II compliant',
        'GDPR & CCPA ready',
        'Zero data retention policy',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center">
          <h1
            className="text-black text-[36px] sm:text-[48px] mb-4 sm:mb-6 font-mono"
            style={{ fontWeight: 600, lineHeight: '1.1' }}
          >
            enterprise features.
          </h1>
          <p className="text-[#6B7280] text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Sophisticated capabilities designed for large-scale content operations and enterprise publishers.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="border border-[#E5E7EB] p-6 sm:p-8 hover:border-black transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-black group-hover:bg-[#1a1a1a] transition-colors">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black text-[18px] sm:text-[20px] mb-2" style={{ fontWeight: 600 }}>
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 pl-4">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="text-[#6B7280] text-[13px] sm:text-[14px] flex items-start gap-2">
                      <span className="text-black mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#E5E7EB] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center">
          <h3 className="text-black text-[28px] sm:text-[36px] mb-6" style={{ fontWeight: 600 }}>
            Ready to experience the power?
          </h3>
          <p className="text-[#6B7280] text-[15px] sm:text-[16px] mb-8 max-w-2xl mx-auto">
            Start analyzing your content cannibalization today with our neural semantic framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 text-[15px] sm:text-[16px] hover:bg-[#1a1a1a] transition-all"
              style={{ fontWeight: 500 }}
            >
              start free trial
            </button>
            <button
              className="border-2 border-black text-black px-8 sm:px-10 py-3 sm:py-4 text-[15px] sm:text-[16px] bg-transparent hover:bg-black hover:text-white transition-all"
              style={{ fontWeight: 500 }}
            >
              schedule demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
