import { useState } from 'react';
import { Mail, MessageSquare, Building2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-24 text-center">
          <h1
            className="text-black text-[32px] sm:text-[48px] mb-4 sm:mb-6 font-mono"
            style={{ fontWeight: 600, lineHeight: '1.1' }}
          >
            get in touch.
          </h1>
          <p className="text-[#6B7280] text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Ready to neuralize your content cannibalization? Our team of senior SEO architects is here to help you reclaim your rankings.
          </p>
        </div>
      </section>

      {/* Contact Options + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Cards */}
          <div className="space-y-8">
            {/* Email */}
            <div className="border border-[#E5E7EB] p-6 hover:border-black transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-black text-[16px] mb-2" style={{ fontWeight: 600 }}>
                    Email Us
                  </h3>
                  <p className="text-[#6B7280] text-[13px] mb-2">
                    General inquiries and support
                  </p>
                  <a
                    href="mailto:contact@seoneuralyze.com"
                    className="text-black text-[14px] font-mono hover:underline"
                  >
                    contact@seoneuralyze.com
                  </a>
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="border border-[#E5E7EB] p-6 hover:border-black transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black">
                  <Building2 className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-black text-[16px] mb-2" style={{ fontWeight: 600 }}>
                    Enterprise Sales
                  </h3>
                  <p className="text-[#6B7280] text-[13px] mb-2">
                    For large-scale deployments
                  </p>
                  <a
                    href="mailto:enterprise@seoneuralyze.com"
                    className="text-black text-[14px] font-mono hover:underline"
                  >
                    enterprise@seoneuralyze.com
                  </a>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="border border-[#E5E7EB] p-6 hover:border-black transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-black text-[16px] mb-2" style={{ fontWeight: 600 }}>
                    Technical Support
                  </h3>
                  <p className="text-[#6B7280] text-[13px] mb-2">
                    Integration and API assistance
                  </p>
                  <a
                    href="mailto:support@seoneuralyze.com"
                    className="text-black text-[14px] font-mono hover:underline"
                  >
                    support@seoneuralyze.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 border border-[#E5E7EB] p-6 sm:p-8">
            <h2 className="text-black text-[24px] mb-6" style={{ fontWeight: 600 }}>
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-black text-[14px] mb-2" style={{ fontWeight: 500 }}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-[#E5E7EB] text-black placeholder:text-[#9CA3AF] outline-none focus:border-black transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-black text-[14px] mb-2" style={{ fontWeight: 500 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-[#E5E7EB] text-black placeholder:text-[#9CA3AF] outline-none focus:border-black transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-black text-[14px] mb-2" style={{ fontWeight: 500 }}>
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E5E7EB] text-black placeholder:text-[#9CA3AF] outline-none focus:border-black transition-colors"
                  placeholder="Acme Publishing"
                />
              </div>

              <div>
                <label className="block text-black text-[14px] mb-2" style={{ fontWeight: 500 }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#E5E7EB] text-black placeholder:text-[#9CA3AF] outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell us about your content cannibalization challenges..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 text-[16px] hover:bg-[#1a1a1a] transition-colors"
                style={{ fontWeight: 500 }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="border-t border-[#E5E7EB] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 text-center">
          <h3 className="text-black text-[24px] sm:text-[28px] mb-4" style={{ fontWeight: 600 }}>
            Enterprise-grade support
          </h3>
          <p className="text-[#6B7280] text-[16px] leading-relaxed max-w-3xl mx-auto">
            Our team typically responds within 4 business hours. For urgent technical issues affecting production systems, enterprise customers have access to priority support channels with sub-60-minute response times.
          </p>
        </div>
      </section>
    </div>
  );
}
