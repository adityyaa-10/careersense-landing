const EachCharacter = ({ char, hover }) => {
    let bgColorClass = `bg-[#161B32] ${hover}`;

    if (char === '') {
        bgColorClass = "";
    }

    return (
        <div className="flex justify-center ml-3 cursor-pointer">
            <div className={`w-14 h-14 md:w-20 md:h-20 ${bgColorClass} text-white rounded-md flex justify-center items-center`}>
                <p className="text-2xl font-semibold leading-8">{char}</p>
            </div>
        </div>
    )
}

export default EachCharacter;
