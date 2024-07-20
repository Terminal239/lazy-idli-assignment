type Props = {
  entry: Entry;
  index: number;
};

const Entry = ({ entry, index }: Props) => {
  const { id, score, username } = entry;
  let top;

  if (index === 0) top = "first";
  else if (index === 1) top = "second";
  else if (index === 2) top = "third";

  return (
    <div
      key={id}
      className={`text-sm md:text-base lg:text-xl font-bold rounded-br-full overflow-hidden flex-shrink-0 text-white flex w-full border bg-black/80 border-gray-700 ${top}`}
    >
      <div className={`flex items-center justify-center`}>
        <span className={`size-[32px] md:size-[36px] inline-flex items-center justify-center rounded-br-[12px] ${index <= 2 ? top + " bg-black" : "bg-white text-black"}`}>
          {index + 1}
        </span>
      </div>
      <div className={`px-4 lg:px-8 flex-1 flex justify-between ${index <= 2 ? "flex flex-col sm:flex-row items-start sm:items-center" : "items-center"}`}>
        {username} {index <= 2 && <span className="text-[10px] -mt-2 sm:mt-0 sm:text-sm md:text-base lg:text-xl">₹{500 * 10 ** (2 - index)}</span>}
      </div>
      <div className="w-[96px] lg:w-[164px] flex items-center">{score}</div>
    </div>
  );
};

export default Entry;
