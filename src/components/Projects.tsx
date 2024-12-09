import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Blitz',
    description:
      'Blitz is an iOS mobile app that allows indecisive couples and or friends to decide on plans. Simply choose your parameters and swipe away like tinder until a match is reached',
    image: 'project_pictures/blitz.jpeg',
    technologies: ['Swift', 'Node.js', 'Firebase', 'Yelp API'],
    notion:
      'https://samuelbechar.notion.site/Blitz-47841c12d67b489eb53b9888e5a9334a?pvs=4',
  },
  {
    title: 'Stir',
    description:
      'Founder of Stir. E-commerce brand/store selling a supplement for coffee consisting of adaptogens and other natural ingredients designed to fuel focus, increase energy, and decrease stress.',
    image: 'project_pictures/stir.jpeg',
    technologies: [
      'Shopify',
      'BixGrow',
      'Fera Reviews',
      'Recurpay',
      'Canva',
    ],
    notion:
      'https://samuelbechar.notion.site/Stir-98309cbf927f43189c0e4e8a4bd2d176',
    website: 'https://www.stircoffeesupp.com',
  },
  {
    title: 'Lux Picnics Ann Arbor',
    description:
      'Co-Founded Lux Picnics Ann Arbor alongside younger brother. Luxury Pop Up Picnic setup company catering to Ann Arbor area. Various different setups and featured on Local 4 news.',
    image: 'project_pictures/luxPicnics.jpeg',
    technologies: ['Business', 'Luxury Picnics', 'Woodworking'],
    notion:
      'https://samuelbechar.notion.site/Lux-Picnics-Ann-Arbor-c6a19506fac44c54b7a98c0feae4fbaf',
    website: 'http://www.luxpicnicsaa.com/',
  },
  {
    title: 'AviTracks',
    description:
      'iPhone application for remote patient monitoring. Connects to users Apple Health which aggregates health measurements and sends the data to Avicenna via API to be viewed by the doctor.',
    image: 'project_pictures/avitracker.jpg',
    technologies: ['Swift', 'HealthKit', 'Avicenna API', 'Two-Factor Auth'],
    notion:
      'https://samuelbechar.notion.site/AviTracks-Portfolio-a8f5561daf694d04830a37effcca882b?pvs=4',
  },
  {
    title: 'Arize',
    description:
      'iOS application that displays in-depth Instagram statistics and allows for content editing and scheduling. Integrates nodejs backend, firebase cloud functions, facebook api, swift frontend, and more.',
    image: 'project_pictures/arize.png',
    technologies: [
      'Swift',
      'Firebase',
      'Node.js',
      'Cloud Functions',
      'Facebook API',
    ],
    notion:
      'https://samuelbechar.notion.site/Arize-Portfolio-5a988f77e66d4e66935bde76766b8892?pvs=4',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.notion}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Notion
                  </a>
                  {project.website && (
                    <a
                      href={project.website}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}