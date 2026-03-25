import portfolioData from '@/data/portfolio.json'

export default function Education() {
  const { education } = portfolioData

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-background-light p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-primary">{edu.institution}</p>
                </div>
                <span className="text-text-muted text-sm mt-2 md:mt-0">{edu.period}</span>
              </div>
              <p className="text-text-secondary mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
