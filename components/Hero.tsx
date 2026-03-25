import portfolioData from '@/data/portfolio.json'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-primary">{personal.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-text-secondary mb-6">
          {personal.title}
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-8 max-w-2xl mx-auto">
          {personal.tagline}
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <FiGithub size={28} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <FiLinkedin size={28} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <FiMail size={28} />
          </a>
        </div>

        <a
          href="#projects"
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}
