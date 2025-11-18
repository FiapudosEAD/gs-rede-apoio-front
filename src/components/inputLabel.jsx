export default function InputLabel({ placeholder }) {
  return (
    <input
      type="text"
      className="bg-white font-bold text-dark-green text-md p-2 rounded-md 
      shadow-md border-2 border-dark-green"
      placeholder={placeholder}
    />
  );
}