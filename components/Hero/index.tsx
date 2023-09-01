/* eslint-disable react/no-unescaped-entities */

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[50px] text-[#000000] lg:pt-[110px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="text-[35px] font-normal !leading-[40px] -tracking-wider lg:text-[60px] lg:!leading-[80px]">
                  Join our ecosystem to build <br />
                  <span className="text-[40px] font-bold lg:text-[80px]">
                    open data infrastructure for{' '}
                  </span>{' '}
                  <br />
                  <span className="text-[40px] font-bold lg:text-[80px]">
                    without a middleman.
                  </span>
                </div>
                <div className="mt-[20px] text-[17px] font-medium -tracking-wider text-[#505050] lg:mt-[35px]  lg:text-[30px] lg:!leading-[36px]">
                  No matter your role - developer, user, academic, partner - you{' '}
                  <br />
                  have a part to play in Openmesh's mission. Get involved and{' '}
                  <br />
                  help shape the future of Web 3.0.
                </div>
                {/* <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
                  Join the ecosystem
                </h1>
                <p className="text-body-black mb-12 text-base font-medium !leading-relaxed dark:opacity-90  sm:text-lg md:mb-3 md:text-4xl xl:mb-12">
                  Help build the decentralized data infrastructure and standards
                  across Web3
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
