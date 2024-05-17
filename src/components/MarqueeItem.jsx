
const MarqueeItem = ({ content, bgColor }) => {
    return (
        <div className={`${bgColor} inline-flex text-white rounded-3xl md:rounded-[64px] justify-center items-center  p-3 md:px-6 md:py-5`}>
            <div className="tracking-tighter text-xl md:text-5xl leading-6 md:leading-[58.8px] font-semibold uppercase">{content}</div>
        </div>
    )
}

export default MarqueeItem
