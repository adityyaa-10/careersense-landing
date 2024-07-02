const EachCharacter = ({ char, hover }) => {
  let bgColorClass = `bg-[#161B32] ${hover}`;

  if (char === "") {
    bgColorClass = "";
  }

  return (
    <div className="ml-3 flex cursor-pointer justify-center">
      <div
        className={`h-14 w-14 md:h-20 md:w-20 ${bgColorClass} flex items-center justify-center rounded-md text-white`}
      >
        <p className="text-2xl font-semibold leading-8">{char}</p>
      </div>
    </div>
  );
};

export default EachCharacter;
