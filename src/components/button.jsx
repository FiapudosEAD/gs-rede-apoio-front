export default function Button({ label, redirectUrl, onClick, type = "button" }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  return (
    <button 
      type={type}
      className="bg-light-green text-dark-green font-bold text-sm h-7 p-1 md:p-2 md:text-xl md:h-10 items-center rounded-md 
      hover:ease-in-out hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}