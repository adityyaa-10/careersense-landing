
const MarqueeItem = ({ content }) => {
    return (
        <div className="bg-green-400 w-full text-white rounded-[64px] flex flex-none justify-center items-center px-4 py-4">
            <div className="tracking-tighter text-5xl leading-[87.5%] font-semibold uppercase">{content}</div>
        </div>
    )
}

export default MarqueeItem
