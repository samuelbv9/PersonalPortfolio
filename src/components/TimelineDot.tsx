import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineDotProps {
  index: number;
  logo: string;
  company: string;
  period: string;
  isLeft: boolean;
}

export default function TimelineDot({ index, logo, company, period, isLeft }: TimelineDotProps) {
  return (
    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 flex items-center">
      {/* Left Date (desktop only) */}
      {!isLeft && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
          className="hidden md:flex absolute right-28 whitespace-nowrap"
        >
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{period}</span>
          </div>
        </motion.div>
      )}

      {/* Company Logo */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-white rounded-full shadow-lg border-2 border-blue-200 dark:border-blue-800 overflow-hidden z-10"
      >
        <img
          src={logo}
          alt={company}
          className="w-8 md:w-10 h-8 md:h-10 object-contain"
        />
      </motion.div>

      {/* Right Date (desktop only) */}
      {isLeft && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
          className="hidden md:flex absolute left-28 whitespace-nowrap"
        >
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{period}</span>
          </div>
        </motion.div>
      )}

      {/* Mobile Date (shown above card) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
        className="md:hidden absolute -top-8 left-20 whitespace-nowrap"
      >
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{period}</span>
        </div>
      </motion.div>
    </div>
  );
}