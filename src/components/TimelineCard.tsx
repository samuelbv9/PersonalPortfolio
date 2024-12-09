import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

interface TimelineCardProps {
  title: string;
  company: string;
  website: string;
  description: string[];
  isLeft: boolean;
  index: number;
}

export default function TimelineCard({
  title,
  company,
  website,
  description,
  isLeft,
  index,
}: TimelineCardProps) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -100 : 100,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative w-[calc(100%-5rem)] md:w-[40%] ml-20 ${
        isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto'
      } mt-16 md:mt-8`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-visible relative">
        {/* Triangle pointing to timeline - desktop only */}
        <div 
          className={`hidden md:block absolute ${isLeft ? '-right-4' : '-left-4'} transform ${isLeft ? 'translate-x-1/2' : '-translate-x-1/2'}`}
          style={{ top: '2.25rem' }}
        >
          <div 
            className={`w-4 h-4 bg-white dark:bg-gray-800 transform ${isLeft ? 'rotate-45' : '-rotate-45'}`}
            style={{
              boxShadow: isLeft ? '-2px -2px 2px rgba(0,0,0,0.1)' : '2px -2px 2px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              <a 
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 text-base md:text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Building2 className="w-5 h-5 mr-2" />
                <span>{company}</span>
              </a>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              <ul className="space-y-3">
                {description.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 flex-shrink-0" />
                    <span className="leading-relaxed text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}