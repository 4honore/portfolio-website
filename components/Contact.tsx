import portfolioData from '@/data/portfolio.json'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="py-20 px-4 bg-background-light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-text-secondary mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <div className="flex justify-center gap-8 mb-8">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors"
          >
            <FiGithub size={32} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors"
          >
            <FiLinkedin size={32} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors"
          >
            <FiMail size={32} />
            <span className="text-sm">Email</span>
          </a>
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors"
        >
          Send Message
        </a>
      </div>
    </section>
  )
}
