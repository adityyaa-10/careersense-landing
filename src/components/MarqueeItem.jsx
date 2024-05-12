
const MarqueeItem = ({ content, bgColor }) => {
    return (
        <div className={`${bgColor} inline-flex text-white rounded-[64px] justify-center items-center px-6 py-5`}>
            <div className="tracking-tighter text-5xl leading-[58.8px] font-semibold uppercase">{content}</div>
        </div>
    )
}

export default MarqueeItem
