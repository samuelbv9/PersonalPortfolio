import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Brain } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Technical Experience',
    description: ['React', 'Node.js', 'Python', 'Swift', 'Firebase'],
  },
  {
    icon: Rocket,
    title: 'Project Development',
    description: ['App Prototyping', 'End-to-End Projects', 'Debugging & Testing'],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: ['Group Projects', 'Clear Communication', 'Peer Code Reviews'],
  },
  {
    icon: Brain,
    title: 'Learning & Growth',
    description: ['Adapting to New Tools', 'Staying Curious', 'Quick Learner'],
  },
];

const hobbies = [
  'Woodworking & DIY Projects',
  'Fitness & Weight Training',
  'Reading Business & Tech Books',
  'Water polo & Triathlon',
];

export default function Overview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  About Me
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a student at the University of Michigan College of
                    Engineering, pursuing a degree in computer science. With a
                    strong background in mobile app development, I enjoy creating
                    innovative applications while also nurturing my
                    entrepreneurial side through side business ventures.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                      Hobbies & Interests
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {hobbies.map((hobby, index) => (
                        <motion.div
                          key={hobby}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                          className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-700 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <span className="text-blue-600 dark:text-blue-300 text-sm font-medium">
                            {hobby}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-700/50 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {skill.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {skill.description.map((item, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300 text-sm leading-tight"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}