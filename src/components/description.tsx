// export function Description() {
//     return (
//         <div className="bg-[#222323] p-8 flex flex-col md:flex-row items-center justify-center w-full h-full px-6 md:px-16">
//             <div className="md:w-1/3 flex justify-center md:justify-center mb-6 md:mb-0 md:mr-8">
//                 <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden flex justify-center items-center">
//                     {/* Placeholder for photo */}
//                     <img src="images/leeamhair.png" alt="Jericho" className="object-cover w-full h-full" />
//                 </div>
//             </div>
//             <div className="w-full max-w-lg text-center md:text-left flex flex-col justify-center items-center md:items-start mt-4 md:mt-0">
//                 <p className="mt-2 text-lg md:text-xl lg:text-2xl font-semibold text-white leading-relaxed">
                    // Hi, I'm Jericho Huelar, a 3rd year undergraduate student majoring in Software Engineering at the University of Calgary.
                    // <br/>
                    // <br/>
                    // In my spare time, I love to play video games such as Rocket League and League of Legends. I also love to watch football every week with my favourite team being the <span className="text-[#c59c00]">Baltimore</span> <span className="text-[#50458f]">Ravens</span> 😊
//                 </p>
//             </div>
//         </div>
//     );
// }


export function Description() {
    return (
      <div className="bg-[#222323] pl-4 pr-4">
        <div className="grid items-center justify-center w-full max-w-[1300px] lg:h-[50vh] md:h-[60vh] h-full pb-2 px-6 mx-auto md:grid-cols-3 gap-4">
        <div className="flex justify-center mt-8 md:mt-0 md:col-span-1">
            <img
              src="/images/leeamhair.png"
              alt="Personal Photo"
              className="w-64 h-64 rounded-full object-cover object-[center top] scale-110 shadow-lg"
            />
          </div>
            <div className="md:col-span-2 text-center md:text-left">
                <h2 className="mt-2 text-4xl pb-4 font-bold text-transparent bg-clip-text  bg-gradient-to-t from-[#C8AA6E] to-[#1D428A] md:text-5xl">
                <span className="AD">Jericho Huelar</span>
                </h2>
                
                <p className="mt-2   text-lg font-semibold text-white leading-relaxed md:text-xl">
                    Hi, I&apos;m a 3rd year undergraduate student majoring in Software Engineering at the University of Calgary.
                        <br/>
                        <br/>
                    In my spare time, I love to play video games such as Rocket League and League of Legends. I also love to watch football every week with my favourite team being the <span className="text-[#c59c00]">Baltimore</span> <span className="text-[#50458f]">Ravens</span> 😊
                </p>
            </div>
        </div>
      </div>
    );
  }
  