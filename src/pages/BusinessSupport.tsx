import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DirectoryPreview from '../components/business/DirectoryPreview';

export default function BusinessSupport() {
  const navigate = useNavigate();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
              Partner in Faith & Purpose
            </h1>
            <p className="text-xl text-patriot-navy mb-8 max-w-3xl mx-auto">
              Join a community of faith-driven businesses committed to empowering the next generation through Christ-centered education and mentorship.
            </p>
            <button
              onClick={() => navigate('/claim-business')}
              className="bg-patriot-red text-white px-8 py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors flex items-center gap-2 mx-auto"
            >
              Join Our Directory <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Directory Preview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-patriot-navy mb-4">Directory Preview</h2>
            <p className="text-xl text-patriot-blue">See how your business will appear in our community</p>
          </div>
          <DirectoryPreview />
        </div>
      </section>
    </main>
  );
}