
export function Description() {
    return (
      <div className="bg-[#333333] px-4 min-h-screen">
        <div className="grid items-center justify-center w-full max-w-[1300px] lg:h-[50vh] md:h-[60vh] h-full pb-2 px-6 mx-auto md:grid-cols-3 gap-4">
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="mt-2 text-4xl pb-4 font-bold text-transparent bg-clip-text bg-white md:text-5xl">
              <span>Hi, I&apos;m Jericho Huelar</span>
            </h2>
            <p className="mt-2 text-lg font-semibold text-white leading-relaxed md:text-xl">
              Software engineering student at the University of Calgary.
            </p>
          </div>
          <div className="flex justify-center mt-8 md:mt-0 md:col-span-1">
            <img
              src="/images/jericho.jpg"
              alt="Personal Photo"
              className="w-64 h-64 rounded-full object-cover object-[center top] scale-110 shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  