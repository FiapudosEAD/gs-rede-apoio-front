export default function Button({ label, redirectUrl }) {
  return (
    <button 
      className="bg-light-green text-dark-green font-bold text-sm h-7 p-1 md:p-2 md:text-xl md:h-10 items-center rounded-md 
      hover:ease-in-out hover:scale-105 transition-transform duration-200"
      onClick={() => window.location.href = redirectUrl}
    >
      {label}
    </button>
  );
}