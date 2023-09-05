/* eslint-disable react/no-unescaped-entities */

const Hero = ({ scrollIntoView }) => {
  const handleClick = () => {
    scrollIntoView.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[50px] pb-[10px] text-[#000000] lg:pt-[110px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="text-[35px] font-normal !leading-[40px] -tracking-wider lg:text-[40px] xl:text-[60px] xl:!leading-[80px]">
                  Join our ecosystem to build <br />
                  <span className="text-[40px] font-bold lg:text-[45px] xl:text-[80px]">
                    open data infrastructure for{' '}
                  </span>{' '}
                  <br />
                  <span className="text-[40px] font-bold lg:text-[45px] xl:text-[80px]">
                    without a middleman.
                  </span>
                </div>
                <div className="mt-[20px] text-[17px] font-medium -tracking-wider text-[#505050] lg:mt-[35px] lg:text-[20px]  xl:text-[30px] xl:!leading-[36px]">
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
                <div className="mt-[40px] xl:mt-[80px]">
                  <a
                    onClick={handleClick}
                    className=" cursor-pointer rounded-[5px] bg-[#0354EC] py-[9.5px] px-[18px] text-[12px] font-bold !leading-[19px] text-white hover:bg-[#0447c5] lg:text-[16px] xl:text-[18px]"
                  >
                    Join the ecosystem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
