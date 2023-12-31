/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'

const Categories2 = () => {
  const categories = [
    {
      image: `${
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
          ? process.env.NEXT_PUBLIC_BASE_PATH
          : ''
      }/images/categories/l3aCore.svg`,
      title: 'Openmesh',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems.The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems.',
    },
    {
      image: `${
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
          ? process.env.NEXT_PUBLIC_BASE_PATH
          : ''
      }/images/categories/dojoSystems.svg`,
      title: 'Transparency & governence',
      description:
        'toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart',
    },
    {
      image: `${
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
          ? process.env.NEXT_PUBLIC_BASE_PATH
          : ''
      }/images/categories/infrastructure.svg`,
      title: 'Openmesh',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. ​ The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models.',
    },
    {
      image: `${
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
          ? process.env.NEXT_PUBLIC_BASE_PATH
          : ''
      }/images/categories/hardware.svg`,
      title: 'Openmesh',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models.',
    },
    {
      image: `${
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
          ? process.env.NEXT_PUBLIC_BASE_PATH
          : ''
      }/images/categories/code.svg`,
      title: 'Openmesh',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models.',
    },
  ]

  return (
    <section
      id="categories"
      className="relative z-10 mx-auto w-full max-w-[393px] bg-white px-8 pb-4 pt-[50px] text-[#1E1E1E] md:max-w-[1440px] md:pt-0 lg:px-4 lg:pb-16"
    >
      <div className="">
        <img
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }/images/categories/info.svg`}
          alt="logo"
          className="mx-auto hidden pl-7 md:block lg:w-[1142px]"
        />
        <Image
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }/images/lines/Line3.svg`}
          alt="logo"
          width={200}
          height={50}
          className="ml-32 hidden w-1 md:ml-[100px] md:block md:w-1 lg:ml-[220px]"
        />
      </div>
      <div className="w-full">
        {categories.map((category, index) => {
          const hasLineSvg = true

          return (
            <>
              <div
                key={category.image}
                className="relative mb-12 items-start rounded-md bg-white text-xs md:mb-0 md:flex lg:ml-16 lg:text-sm"
              >
                <Image
                  src={category.image}
                  alt="logo"
                  width={200}
                  height={50}
                  className="w-full rounded-md md:w-2/5"
                />
                <div className="md:ml-10 md:mr-2">
                  <div className="max-h-[280px]">
                    <h3 className="mt-3 text-2xl font-bold md:mt-0 xl:text-[28px]">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm  !leading-tight md:mt-3 lg:text-[14px]  xl:mt-5 xl:text-[18px]">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
              {hasLineSvg ? (
                <div className="relative items-start rounded-md bg-white  text-xs  md:flex lg:text-sm">
                  <Image
                    src={`${
                      process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                        ? process.env.NEXT_PUBLIC_BASE_PATH
                        : ''
                    }/images/lines/Line3.svg`}
                    alt="logo"
                    width={200}
                    height={50}
                    className="mt-0 mb-5 ml-32 hidden w-1 md:mb-0 md:mt-0 md:ml-[100px] md:block md:w-1  lg:ml-[220px]"
                  />
                </div>
              ) : null}
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Categories2
