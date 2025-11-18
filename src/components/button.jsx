export default function Button({ label, redirectUrl }) {
  return (
    <button 
      className=""
      onClick={() => window.location.href = redirectUrl}
    >
      {label}
    </button>
  );
}