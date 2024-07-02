const MarqueeItem = ({ content, bgColor }) => {
  return (
    <div
      className={`${bgColor} inline-flex items-center justify-center rounded-3xl p-3 text-white md:rounded-[64px] md:px-6 md:py-5`}
    >
      <div className="text-xl font-semibold uppercase leading-6 tracking-tighter md:text-5xl md:leading-[58.8px]">
        {content}
      </div>
    </div>
  );
};

export default MarqueeItem;
