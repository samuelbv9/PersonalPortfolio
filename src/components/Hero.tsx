import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:sbechar@umich.edu', label: 'Email' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/samuel-bechar-2878ab1a9',
    label: 'LinkedIn',
  },
  { icon: Github, href: 'https://github.com/samuelbv9', label: 'GitHub' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] pt-24 pb-16 flex items-center overflow-hidden">
      {/* Enhanced Dark Mode Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-white dark:from-blue-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-transparent via-blue-100/30 to-transparent dark:from-transparent dark:via-blue-900/10 dark:to-transparent"></div>

        {/* Animated shapes with improved dark mode */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full mix-blend-overlay dark:mix-blend-color-dodge filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-blue-200/40 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full mix-blend-overlay dark:mix-blend-color-dodge filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 backdrop-blur-sm"
            >
              👋 Welcome to my portfolio
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Samuel Bechar
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A developer and student pursuing business ventures and exciting
              side projects.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-first md:order-last"
          >
            <div className="relative w-full h-[300px] sm:h-[400px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="samuel_portfolio_headshot.png"
                  alt="Developer workspace"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
