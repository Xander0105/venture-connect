const RolesSection = () => (
  <section id="roles" className="bg-white py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">A Platform for Every Stakeholder</h2>
        <p className="text-gray-600 mt-2">Designed to empower every player in the venture ecosystem.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">For Entrepreneurs</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Showcase your business ideas to a curated investor network.</li>
            <li>Get expert guidance from seasoned business advisors.</li>
            <li>Connect with bankers for financial products and services.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">For Investors</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Browse opportunities tailored to your investment thesis.</li>
            <li>Utilize advanced filters to find the perfect match.</li>
            <li>Conduct due diligence with integrated communication tools.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg md:col-span-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">For Bankers & Business Advisors</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Provide financial products and loan details to growing businesses.</li>
            <li>Offer consultation and expert guidance to entrepreneurs.</li>
            <li>Expand your network and build valuable relationships.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default RolesSection;
