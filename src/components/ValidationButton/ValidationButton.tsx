// Validation Button a generic component reused multiple times
const ValidationButton = ({
  className = "bg-orange-300 py-2 px-6 rounded-2xl drop-shadow-lg text-slate-50",
  onClick,
  text,
}: {
  className?: string;
  onClick?: () => void;
  text: string;
}) => {
  return (
    <section className="p-9 flex flex-col items-center justify-center">
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </section>
  );
};

export default ValidationButton;
