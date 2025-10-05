const Textarea = ({ placeholder, value, onChange, id, className = '' }) => (
  <textarea
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 ${className}`}
    required
  />
);

export default Textarea;
