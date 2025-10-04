import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      title: 'AI Development',
      description: 'Cutting-edge artificial intelligence solutions tailored to your business needs.',
      icon: '🤖',
    },
    {
      title: 'Software Solutions',
      description: 'Custom software development that scales with your business growth.',
      icon: '💻',
    },
    {
      title: 'Consultation',
      description: 'Expert guidance to transform your technology infrastructure.',
      icon: '💡',
    },
  ];

  const services = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML models for predictive analytics and automation.',
      icon: '🧠',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: '☁️',
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights.',
      icon: '📊',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications and platforms.',
      icon: '🌐',
    },
    {
      title: 'DevOps',
      description: 'Streamlined deployment and continuous integration.',
      icon: '⚙️',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            AI & Software Solutions for the Future
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Empowering businesses with innovative technology solutions that drive growth and transformation
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59,130,246,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Explore Our Solutions
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
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
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            >
              Why Choose <span className="text-gradient">Centricon</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-dark p-8 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About <span className="text-gradient">Centricon</span>
              </h2>
              <p className="text-gray-300 mb-4 text-lg">
                We are a leading provider of AI and software solutions, dedicated to helping businesses navigate the digital landscape with cutting-edge technology.
              </p>
              <p className="text-gray-400 mb-6">
                Our mission is to empower organizations with intelligent solutions that drive innovation, efficiency, and growth. With a team of experienced developers and AI specialists, we deliver transformative results.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-transparent p-8 rounded-2xl">
                <img
                  src="/logo.png"
                  alt="Centricon"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </Link>
            </motion.div>
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our AI and software solutions can help you achieve your goals
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
