import FeatureIcon from '../ui/FeatureIcon';

const FeaturesSection = () => (
  <section id="features" className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Platform Core Features</h2>
        <p className="text-gray-600 mt-2">Everything you need to build, fund, and grow your venture.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FeatureIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197" />
            </svg>
          </FeatureIcon>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-User Roles</h3>
          <p className="text-gray-600">Tailored dashboards and access for Entrepreneurs, Investors, Bankers, and Advisors.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FeatureIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </FeatureIcon>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Proposal Management</h3>
          <p className="text-gray-600">Post, track, and manage business proposals with rich media and version control.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FeatureIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </FeatureIcon>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Intelligent Matching</h3>
          <p className="text-gray-600">Advanced algorithms to connect investors with the right opportunities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FeatureIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </FeatureIcon>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Communication Hub</h3>
          <p className="text-gray-600">Real-time messaging, video conferencing, and secure document sharing.</p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
