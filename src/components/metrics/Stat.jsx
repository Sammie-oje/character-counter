function Stat({ bgColor, id, text, onCount }) {
  const statNumber = String(onCount).padStart(2, "0");
  return (
    <div
      className={`p-250 ${bgColor} rounded-12 overflow-hidden relative h-[130px] w-full md:h-full md:px-150 md:py-200 xxl:p-200`}
      id={id}
    >
      <div className="flex flex-col gap-100 h-full justify-center">
        <dt className="text-preset-mobile md:text-preset-1">{statNumber}</dt>
        <dd className="text-preset-3 z-100">{text}</dd>
      </div>
      <figure className="absolute -top-2 -right-15 ">
        <img src={`src/assets/images/pattern-${id}.svg`} alt={`${id}-bg`} />
      </figure>
    </div>
  );
}

export default Stat;
