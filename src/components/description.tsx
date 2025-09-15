
export function Description() {
    return (
      <div className="bg-[#121212] px-4 min-h-screen">
        <div className="grid items-center justify-center w-3/4 max-w-[1300px] lg:h-[50vh] md:h-[60vh] h-full pb-2 px-6 mx-auto md:grid-cols-3 gap-4">
          <div className="md:col-span-2 text-center md:text-left pb-4">
            <h2 className="mt-2 text-4xl pb-4 font-bold text-transparent bg-clip-text text-white md:text-5xl">
              Hi 👋
            </h2>
            <p className="mt-2 text-4xl pb-6 font-bold text-transparent text-white bg-clip-text md:text-5xl">
              I&apos;m Jericho Huelar
            </p>
            <p className="mt-2 text-lg pb-4 font-semibold text-white leading-relaxed md:text-xl">
              📌 Calgary, AB
            </p>
            <p className="text-lg font-semibold text-white leading-relaxed md:text-xl">
              University of Calgary
            </p>
            <p className="text-lg font-semibold pb-4 text-white leading-relaxed md:text-xl">
              Software Engineering Student
            </p>
            <div className="flex items-center">
              <a href="https://www.instagram.com/jeric_lyle/">
                  <img
                    src="/images/instagram.png"
                    alt="Instagram Logo"
                    className="h-10"
                  />
              </a>
              <a className="px-5" href="https://www.linkedin.com/in/jericho-huelar-112a04301/">
                <img
                    src="/images/Linkedin.png"
                    alt="Linkedin Logo"
                    className="h-10"
                  />
              </a>
              <a href="https://github.com/jlhuelar">
                <img
                    src="/images/github.png"
                    alt="Github Logo"
                    className="h-10"
                  />
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0 md:col-span-1 pb-4">
            <img
              src="/images/jericho.jpg"
              alt="Personal Photo"
              className="w-64 h-100 rounded-xl object-cover object-[center top] scale-110 shadow-lg"
            />
          </div>
          <div className="md:col-span-3 pt-10 text-lg">
            <p className="pb-8">
              I am a 4th year Software Engineering Student at the University of Calgary. My passions for from a young age sparked my interest in the different and interesting mechanics, visuals, and systems, software applications like video games offers. 
              With that, I chose software engineering and development as it allows me to explore and use software to create innovative and user-centered solutions whether its a full stack application, video game or even more. 
              I&apos;m commited to continous growth technically and personally, always seeking opportunties to improve.
            </p>
            <p className="pb-8 flex justify-center">
              Learn more about me below! 😊
            </p>
          </div>
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: "12px"}} 
            src="https://open.spotify.com/embed/track/4AQSA9Do6uF4a1XkLNok6d?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: "12px"}}  
            src="https://open.spotify.com/embed/track/3Naqjihn2GJjOBZNeenivP?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: "12px"}}  
            src="https://open.spotify.com/embed/track/6phkEy1YzAK1JWZWgwC36v?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe> 
        </div>
      </div>
    );
  }
  