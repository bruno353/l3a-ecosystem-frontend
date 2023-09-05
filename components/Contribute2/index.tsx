import SingleTestimonial from './SingleTestimonial'

const testimonialData = [
  {
    id: 1,
    title: 'Team Members',
    buttonName: 'Join the team',
    buttonUrl: 'https://www.greenhouse.com/',
    borderColor: 'from-[#dddddd] to-[#FF64DD]',
    tally: 'Team Members',
    description:
      "Join the team that's creating open infrastructures and promoting open data. We're not just accelerating the Web3 and crypto industry, we're building technologies that counter surveillance capitalism and prevent data and infrastructure monopolies. Help us shape a more transparent and equitable digital future.",
  },
  {
    id: 2,
    title: 'Open Source Developers',
    buttonName: 'View projects',
    buttonUrl: 'https://openmesh.vercel.app/openrd',
    borderColor: 'from-[#e0e2f9] to-[#0be040]',
    tally: 'Open Source Developers',
    description:
      "Play an instrumental role in building a public cloud infrastructure without the middleman. Tackle real-world tech challenges and be part of an open-source solution that's altering how the world manages and interacts with data. Your contributions will aid in our shared vision of an Internet where everyone has equal access to quality, immutable data.",
  },
  {
    id: 3,
    title: 'Blockchain Protocols, Web3 Startups & DAOs',
    buttonName: 'Contact',
    buttonUrl: null,
    borderColor: 'from-[#cfc4ff] to-[#FFCA64]',
    tally: 'Blockchain Protocols, Web3 Startups & DAOs',
    description:
      'Our infrastructure can support your blockchain protocol or Web3 startup. We provide automatic deployment and interconnection of all necessary middleware, OS, and authentication mechanisms, and we install required applications in minutes.',
  },
  {
    id: 4,
    title: 'Open Data Advocates and Academics',
    buttonName: 'Contact',
    buttonUrl: null,
    borderColor: 'from-[#dddddd] to-[#FFCA64]',
    tally: 'Open Data Advocates and Academics',
    description:
      'Help us build ethical and responsible technological frameworks. L3A believes in the importance of public infrastructure that is built and maintained in the best interest of humanity. We also offer research grants for deep academic research on tech and security.',
  },
  {
    id: 5,
    title: 'Community Members',
    buttonName: 'Join Discord',
    buttonUrl: 'https://discord.gg/wYPuxMF7',
    borderColor: 'from-[#dddddd] to-[#FF8181]',
    tally: 'Blockchain Protocol',
    description:
      'Join our vibrant community of passionate individuals and groups supporting open-source technologies. Learn about our open-source governance, our community contributions, and how you can get involved.',
  },
  {
    id: 6,
    title: 'Partnerships',
    buttonName: 'Schedule a call',
    buttonUrl: 'https://calendly.com/kathleen-ragos/30min',
    borderColor: 'from-[#ffc4fe] to-[#0068C9]',
    tally: 'Partnerships',
    description:
      'We believe in the power of collaboration. If you are a Potential Vendor, Service Provider, Open Source Foundation, or Academia, learn about our current tech partners and join us in our mission to decentralize data infrastructure.',
  },
]

const Contribute = ({ scrollIntoView }) => {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[393px] bg-white pb-12 pt-8 md:max-w-[1440px] lg:px-4 lg:pt-0">
      <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {testimonialData.map((testimonial, index) => (
          <div key={testimonial.id} className="m-6">
            <SingleTestimonial
              key={testimonial.id}
              title={testimonial.title}
              tally={testimonial.tally}
              borderColor={testimonial.borderColor}
              description={testimonial.description}
              scrollIntoView={scrollIntoView}
              buttonName={testimonial.buttonName}
              buttonUrl={testimonial.buttonUrl}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contribute
