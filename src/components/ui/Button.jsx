const Button = ({ children, className = '', onClick = () => {}, type = 'button', disabled = false }) => (
  <button
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={`px-6 py-3 rounded-lg font-semibold text-white transition-transform transform hover:scale-105 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);

export default Button;
