export default function Button({ title, className }) {
  return (
    <button
      className={`${className} hover-effect text-description border border-myDark bg-myLight px-2 py-1 font-semibold uppercase dark:border-myLight dark:bg-myDarker`}
    >
      {title}
    </button>
  );
}
