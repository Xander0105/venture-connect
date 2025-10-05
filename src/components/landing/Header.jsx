import Button from '../ui/Button';

const Header = ({ setActiveComponent }) => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">
        Venture<span className="text-blue-600">Connect</span> India
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
        <a href="#roles" className="text-gray-600 hover:text-blue-600">For Whom?</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      </nav>
      <div className="flex items-center space-x-2">
        <Button onClick={() => setActiveComponent('login')} className="bg-transparent text-blue-600 hover:bg-blue-50">Log In</Button>
        <Button onClick={() => setActiveComponent('register')} className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
      </div>
    </div>
  </header>
);

export default Header;
