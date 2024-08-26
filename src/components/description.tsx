export function Description() {
    return (
        <div className="bg-[#222323] p-8 flex flex-col md:flex-row items-center justify-center w-full h-full">
            <div className="md:w-1/3 flex justify-center md:justify-center mb-4 md:mb-0">
                <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden flex justify-center items-center">
                    {/* Placeholder for photo */}
                    <img src="path/to/your/photo.jpg" alt="Jericho" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="text-center md:text-left md:flex-grow flex flex-col justify-center items-center md:items-start">
                <p className="mt-2 text-lg font-semibold text-white leading-relaxed md:text-xl">
                    Hi, I'm Jericho Huelar, a 3rd year undergraduate student majoring in Software Engineering at the University of Calgary.
                    <br/>
                    <br/>
                    In my spare time, I love to play video games such as Rocket League and League of Legends. I also love to watch football every week with my favourite team being the <span className="text-[#c59c00]">Baltimore</span> <span className="text-[#50458f]">Ravens</span> 😊
                </p>
            </div>
        </div>
    );
}
