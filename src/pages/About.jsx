import { motion } from 'framer-motion';

const About = () => {
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

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      bio: '15+ years in tech leadership and AI innovation',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '👨‍💻',
      bio: 'Expert in software architecture and cloud solutions',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      image: '👩‍🔬',
      bio: 'PhD in Machine Learning with 20+ research publications',
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: '👨‍💼',
      bio: 'Full-stack expert with expertise in modern frameworks',
    },
    {
      name: 'Lisa Wang',
      role: 'Product Manager',
      image: '👩‍💻',
      bio: 'Passionate about user-centric product development',
    },
    {
      name: 'James Brown',
      role: 'DevOps Engineer',
      image: '👨‍🔧',
      bio: 'Specialist in cloud infrastructure and automation',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology',
      icon: '💡',
    },
    {
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project',
      icon: '⭐',
    },
    {
      title: 'Collaboration',
      description: 'Working closely with clients to achieve shared goals',
      icon: '🤝',
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and honesty',
      icon: '🛡️',
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
            About Centricon
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
          >
            Pioneering the future of AI and software solutions since 2015
          </motion.p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-8 text-white"
            >
              Our Story
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6"
            >
              Founded in 2015, Centricon emerged from a vision to bridge the gap between cutting-edge technology and practical business solutions. What started as a small team of passionate developers has grown into a leading force in AI and software innovation.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6"
            >
              Over the years, we've helped hundreds of companies transform their operations through intelligent automation, custom software solutions, and strategic technology consulting. Our commitment to excellence and innovation has made us a trusted partner for businesses worldwide.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300"
            >
              Today, we continue to push the boundaries of what's possible, leveraging the latest advancements in artificial intelligence, machine learning, and cloud computing to deliver solutions that drive real business value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div
              variants={itemVariants}
              className="bg-dark p-8 rounded-xl border border-gray-800"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-300 text-lg">
                To empower businesses worldwide with innovative AI and software solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-dark p-8 rounded-xl border border-gray-800"
            >
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To be the global leader in AI-powered business transformation, setting new standards for innovation and excellence in technology solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="text-gradient">Values</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-gradient">Team</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 text-center group"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '8+', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
