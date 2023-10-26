/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

const Hero4 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 mx-auto w-full max-w-[393px] overflow-hidden bg-white px-4 text-[#000000] lg:max-w-[1000px] 2xl:px-0"
      >
        <div className="flex w-full flex-wrap">
          <div className="w-full">
            <div
              className="wow fadeInUp mx-auto w-full text-center"
              data-wow-delay=".2s"
            >
              <div className="flex w-full flex-col text-center">
                <h1 className="font-regular text-[1.5rem] leading-none tracking-tight lg:text-[3.5rem] 2xl:text-[4.2rem]">
                  Join our ecosystem to build
                </h1>
                <h1 className="text-5xl font-bold leading-none tracking-tighter lg:text-[4.7rem] 2xl:text-[4.9rem] ">
                  open data infrastructure for web3 without a middleman.
                </h1>
              </div>
              <p className="text-body-black mx-auto mb-4 mt-4 w-[273px] text-sm font-medium leading-snug tracking-tight text-[#000000] dark:opacity-90 lg:mb-12 lg:mt-8 lg:w-[850px] lg:text-3xl 2xl:text-[2rem]">
                No matter your role - developer, user, academic, partner - you
                have a part to play in Openmesh's mission. Get involved and help
                shape the future of Web 3.0.
              </p>
            </div>
          </div>
        </div>
        <Image
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }/images/lines/Line3.svg`}
          alt="logo"
          width={100}
          height={20}
          className="mx-auto mb-4 h-20 w-1 lg:mt-5 lg:mb-1 lg:h-52"
        />
        <Image
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }/images/lines/Line3.svg`}
          alt="logo"
          width={100}
          height={20}
          className="mx-auto -mt-7 hidden w-1 xl:block"
        />
      </section>
    </>
  )
}

export default Hero4
