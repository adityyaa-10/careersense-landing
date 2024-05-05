const EachCharacter = ({ char, bgColor }) => {
    return (
        <div className="flex justify-center">
            <div className={`w-14 h-14 md:w-20 md:h-20 bg-[#161B32] hover:bg-[#9BD5F5] text-white rounded-md flex justify-center items-center`}>
                <p className="text-2xl font-semibold leading-8">{char}</p>
            </div>
        </div>
    )
}

export default EachCharacter
