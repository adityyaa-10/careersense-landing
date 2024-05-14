

const Footer = () => {
    return (
        <div className='bg-[#F8E1CB] border-4 h-full border-[#161B32] '>
            <div className='relative h-full flex justify-center min-w-full text-center'>
                <div className="absolute top-0 left-0 right-0 translate-y-[-50%] flex items-center justify-center text-center">
                    <h1 className='bg-white border-4 border-[#161B32] max-w-min md:max-w-full text-[#161B32] px-6 py-4 text-xl tracking-tighter  font-bold rounded-md '>Concept Capers is brought to you by</h1>
                </div>
            </div>

            {/* Content */}

            <div className='px-4 md:px-14 py-4 lg:py-11 w-full text-[#161B32] tracking-tight leading-[70px] border-b-4 border-[#161B32]  '>
                <svg role="img" class="svg-wonder-logo" viewBox="0 0 640 100" preserveAspectRatio="xMinYMin meet" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wondermake"><g transform="translate(625 7) scale(0.53)"><path fill="currentColor" d="M3.58375 1.19086h2.04184L5.9307 19.2797l-2.01838.0234-.32857-18.11224ZM.180664 1.00317 8.91133.885864 8.9348 2.8097l-8.707197.16424-.046939-1.97077ZM11.6001 1.02663l3.0041-.04692L18.6174 16.957h-.5163l3.8725-15.93037h2.9337l.4928 18.27647h-1.9949l-.2581-17.85416h.4224L19.2042 18.2004h-1.7133L13.0552 1.84779l.3051-.02347.2112 17.47878h-1.9714V1.02663Z"></path></g><g transform="translate(5 0)"><path fill="currentColor" d="M577.146 92.908V7.377h35.653l-.34 16.671H594.7v17.215h13.16v15.561H594.7v19.412h17.985v16.671Zm-23.126-.227-13.071-31.734.228 31.734H523.3l-.316-85.53h17.531l.271 35.245 12.685-35.245h19.615l-18.823 44.577 19.366 40.953Zm-53.185 0-1.676-13.818h-13.342l-1.54 13.818h-18.1l11.62-85.53h28.631l12.707 85.53Zm-13.138-30.805h9.378l-4.892-40.183Zm-42.672 30.805-1.631-62.97-9.332 62.97h-16.99l-9.331-62.97-1.631 62.97h-17.441l3.94-85.53h26.638l6.32 58.553 6.3-58.553h26.638l3.964 85.53Zm-78.963 0-8.788-29.786c-1.223.158-2.492.249-3.805.316V92.68h-17.555V7.15c6.909-.34 15.132 0 17.1 0 18.527 0 30.487 9.446 30.487 28.518l-.023-.023c0 10.487-4.1 17.826-11.166 22.311l12.05 34.724Zm-12.594-68.5v22.492c9.241.113 12.933-3.715 12.933-11.235 0-7.182-3.552-11.286-11.743-11.285-.386.004-.783.013-1.19.032Zm-60.094 68.5V7.151H329l-.317 16.671h-17.758v17.214h13.16V56.6h-13.16v19.412h17.985v16.671Zm-54.067 0V7.151h13.16c21.473 0 35.516 13.93 35.516 44.622-.747 29.4-14.021 40.908-35.516 40.908Zm17.555-18.416v.023c9.693-1.562 13.159-9.242 13.159-22.492 0-17.237-3.466-23.739-13.159-24.984Zm-44.4 18.416-14.519-48.179 1.789 48.179h-17.758l-.771-85.53h19.616l14.474 50.716-1.2-50.716h17.668l-.566 85.53Zm-163.334 0-5.64-64.351-7.52 64.351H10.644L0 7.151h19.639l4.824 62.9 7.565-62.9 22.9.226 7.2 62.653 4.1-62.878h18.188l-9.649 85.53Z"></path></g><defs><linearGradient id="--gradient-0"><stop offset="0%" stop-color="#FFF69E"></stop><stop offset="100%" stop-color="#88FFBF"></stop></linearGradient><linearGradient id="--gradient-1"><stop offset="0%" stop-color="#FFFACC"></stop><stop offset="100%" stop-color="#FFAAEE"></stop></linearGradient><linearGradient id="--gradient-2"><stop offset="0%" stop-color="#FFBDEA"></stop><stop offset="100%" stop-color="#BA8FFF"></stop></linearGradient><linearGradient id="--gradient-3"><stop offset="0%" stop-color="#FFE5D2"></stop><stop offset="100%" stop-color="#99DEFF"></stop></linearGradient><linearGradient id="--gradient-4"><stop offset="0%" stop-color="#FEFFC2"></stop><stop offset="100%" stop-color="#FFA284"></stop></linearGradient><linearGradient id="--gradient-5"><stop offset="0%" stop-color="#79FFBD"></stop><stop offset="100%" stop-color="#4DC9FF"></stop></linearGradient><linearGradient id="--gradient-6"><stop offset="0%" stop-color="#FFF690"></stop><stop offset="100%" stop-color="#FF879F"></stop></linearGradient><linearGradient id="--gradient-7"><stop offset="0%" stop-color="#DFFDFF"></stop><stop offset="100%" stop-color="#7DAADE"></stop></linearGradient><linearGradient id="--gradient-8"><stop offset="0%" stop-color="#FDC8E8"></stop><stop offset="100%" stop-color="#9ADBFF"></stop></linearGradient></defs><g transform="translate(90 5) scale(0.53)" fill="url(#--gradient-2)"><path d="m83 78-9-65h26L90 78l39-53 19 19-53 39 65-9v26L95 90l53 39-19 19-39-53 10 65H74l9-65-39 53-19-19 53-39-65 10V74l65 9-53-39 19-19Z" class=""></path></g></svg>
            </div>
            <div className='py-11 w-max mx-auto'>
                <p className='text-center text-[18px] md:text-[28px] leading-[50px] text-[#020617] font-medium tracking-tighter'>
                    A playful, creative studio specialising in design for brand and digital


                </p>
            </div>
        </div>
    )
}

export default Footer
