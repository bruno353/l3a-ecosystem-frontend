/* eslint-disable react/no-unescaped-entities */

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[110px] text-[#000000]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="text-[60px] font-normal !leading-[80px] -tracking-wider">
                  Join our ecosystem to build <br />
                  <span className="text-[80px] font-bold">
                    open data infrastructure for{' '}
                  </span>{' '}
                  <br />
                  <span className="text-[80px] font-bold">
                    without a middleman.
                  </span>
                </div>
                <div className="mt-[35px] text-[30px] font-medium !leading-[36px]  -tracking-wider text-[#505050]">
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
