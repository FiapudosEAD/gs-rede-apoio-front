export default function Button({ label, redirectUrl }) {
  return (
    <button className="">
      {label}
      <a>{redirectUrl}</a>
    </button>
  );
}