import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineCard from './TimelineCard';
import TimelineDot from './TimelineDot';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'Avicenna Medical Systems',
    website: 'https://www.avicenna-medical.com/',
    period: 'June 2021 - November 2021',
    description: [
      'Led revamp of the new company website according to design specifications.',
      'Collaborated with Head of Marketing and Co-Founder to deliver on the companies vision.',
      'Implemented discussed changes and new features into website using HTML, CSS, and Javascript.',
    ],
    logo: 'company_logos/avicenna.jpg',
  },
  {
    title: 'iOS App Developer Intern',
    company: 'Avicenna Medical Systems',
    website: 'https://www.avicenna-medical.com/',
    period: 'May 2022 - January 2022',
    description: [
      "Worked on remote patient monitoring app using health data collected through patient's smart phone/watch.",
      "Worked alongside company CEO, Head of Marketing, and backend developer to develop and pitch the product.",
      "Used Apple's Healthkit and Avicenna API to collect and store patient data.",
      "Used two-factor authentication and patient permission to ensure patient privacy and data security.",
    ],
    logo: 'company_logos/avicenna.jpg',
  },
  {
    title: 'Mobile Software Dev Engineer Intern',
    company: 'Ally Financial',
    website: 'https://www.ally.com',
    period: 'May 2023 - August 2023',
    description: [
      "Created UI components for Metronome design system using SwiftUI on iOS and React Native.",
      "Committed code to git repos using feature branches and Merge Requests using Gitlab.",
      "Ran a research project outlining recommendations for ways to improve Ally Mobile's developer onboarding process.",
      "Gave a final presentation on findings and recommendations from research project to executive leadership.",
    ],
    logo: 'company_logos/ally.jpg',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Rubrik',
    website: 'https://www.rubrik.com',
    period: 'May 2024 - August 2024',
    description: [
      "Developed a more complete multiple approval feature (Quorum Authorization) from a basic two-person rule to support multiple approvers, improving security for potentially destructive actions within Rubrik Security Cloud.",
      "Built full-stack Quorum Authorization feature using Go and Scala for backend, GraphQL and React for frontend, and Python for scripting tasks.",
      "Presented the enhanced feature to leadership, emphasizing its creation in response to federal customer requests, and handed the feature off for production release.",
    ],
    logo: 'company_logos/rubrik.jpeg',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="experience">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Work Experience
        </motion.h2>

        <div ref={ref} className="relative max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="relative space-y-32 md:space-y-24">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <TimelineDot 
                  index={index} 
                  logo={exp.logo}
                  company={exp.company}
                  period={exp.period}
                  isLeft={index % 2 === 0}
                />
                <TimelineCard
                  {...exp}
                  isLeft={index % 2 === 0}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}