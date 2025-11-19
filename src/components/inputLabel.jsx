export default function InputLabel({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="bg-white font-bold text-dark-green text-md p-2 rounded-md 
      shadow-md border-2 border-dark-green w-full focus:outline-none focus:border-light-green"
      placeholder={placeholder}
      required
    />
  );
}