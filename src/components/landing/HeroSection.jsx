import Button from '../ui/Button';

const HeroSection = ({ setActiveComponent }) => (
  <section className="bg-white py-20 md:py-32">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
        Connecting India's Innovators with Visionary Investors
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        A private networking hub for venture-backed company formation, bridging the communication gap in India's investment ecosystem.
      </p>
      <Button onClick={() => setActiveComponent('register')} className="bg-blue-600 hover:bg-blue-700 text-lg">Join the Network</Button>
    </div>
  </section>
);

export default HeroSection;
