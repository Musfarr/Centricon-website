import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      id: 1,
      title: 'AI & Machine Learning',
      icon: '🤖',
      shortDesc: 'Intelligent solutions powered by cutting-edge AI technology',
      fullDesc: 'Our AI and Machine Learning services help businesses leverage the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions. We specialize in custom ML models, natural language processing, computer vision, and predictive analytics.',
      features: [
        'Custom ML model development',
        'Natural Language Processing',
        'Computer Vision solutions',
        'Predictive Analytics',
        'AI Integration & Deployment',
      ],
    },
    {
      id: 2,
      title: 'Software Development',
      icon: '💻',
      shortDesc: 'Custom software solutions tailored to your needs',
      fullDesc: 'We build scalable, secure, and high-performance software applications that drive business growth. Our full-stack development team creates custom solutions using the latest technologies and best practices.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
      ],
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      icon: '☁️',
      shortDesc: 'Scalable cloud infrastructure and migration services',
      fullDesc: 'Transform your business with our comprehensive cloud services. We help organizations migrate to the cloud, optimize infrastructure, and build cloud-native applications that scale with your business.',
      features: [
        'Cloud Migration Services',
        'AWS, Azure, GCP Solutions',
        'Cloud Architecture Design',
        'Serverless Applications',
        'Cloud Security & Compliance',
      ],
    },
    {
      id: 4,
      title: 'Data Analytics',
      icon: '📊',
      shortDesc: 'Transform data into actionable insights',
      fullDesc: 'Unlock the full potential of your data with our advanced analytics services. We help businesses collect, process, and analyze data to drive informed decision-making and strategic growth.',
      features: [
        'Business Intelligence Dashboards',
        'Data Warehousing',
        'Real-time Analytics',
        'Data Visualization',
        'Big Data Processing',
      ],
    },
    {
      id: 5,
      title: 'DevOps & Automation',
      icon: '⚙️',
      shortDesc: 'Streamline deployment and continuous integration',
      fullDesc: 'Accelerate your development lifecycle with our DevOps services. We implement CI/CD pipelines, infrastructure as code, and automated testing to improve efficiency and reliability.',
      features: [
        'CI/CD Pipeline Implementation',
        'Infrastructure as Code',
        'Container Orchestration (Kubernetes)',
        'Automated Testing',
        'Monitoring & Logging',
      ],
    },
    {
      id: 6,
      title: 'Technology Consulting',
      icon: '💡',
      shortDesc: 'Expert guidance for digital transformation',
      fullDesc: 'Navigate the complex technology landscape with our strategic consulting services. We provide expert guidance on technology strategy, digital transformation, and innovation.',
      features: [
        'Technology Strategy & Planning',
        'Digital Transformation Consulting',
        'Architecture Review & Assessment',
        'Technology Stack Selection',
        'Innovation Workshops',
      ],
    },
  ];

  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
  ];

  const caseStudies = [
    {
      title: 'AI-Powered Customer Service',
      client: 'Global Retail Chain',
      result: '60% reduction in response time',
      description: 'Implemented an AI chatbot solution that handles 10K+ customer inquiries daily.',
    },
    {
      title: 'Cloud Migration & Optimization',
      client: 'Financial Services Company',
      result: '45% cost reduction',
      description: 'Migrated legacy infrastructure to AWS, improving scalability and reducing costs.',
    },
    {
      title: 'Custom ERP Solution',
      client: 'Manufacturing Corporation',
      result: '80% process efficiency gain',
      description: 'Built a custom ERP system that streamlined operations across 5 facilities.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-gradient"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
          >
            Comprehensive technology solutions to drive your business forward
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-dark-lighter p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.shortDesc}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-primary font-medium flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-dark-lighter border border-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-5xl mb-4">{selectedService.icon}</div>
                <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-300 mb-6 text-lg">{selectedService.fullDesc}</p>
            <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
            <ul className="space-y-2 mb-6">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-full"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}

      {/* Technologies */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-16 text-white"
            >
              Technologies We <span className="text-gradient">Master</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <p className="text-sm text-gray-300">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-16 text-white"
            >
              Success <span className="text-gradient">Stories</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-dark-lighter p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{study.title}</h3>
                  <p className="text-primary font-medium mb-3">{study.client}</p>
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 mb-4">
                    <p className="text-primary-light font-semibold">{study.result}</p>
                  </div>
                  <p className="text-gray-400">{study.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our services can help transform your business
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  Contact Us Today
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
