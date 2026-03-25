import portfolioData from '@/data/portfolio.json'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="py-20 px-4 bg-background-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="text-lg text-text-secondary leading-relaxed">
          <p>{personal.bio}</p>
        </div>
      </div>
    </section>
  )
}
