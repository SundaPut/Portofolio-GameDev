import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.johnson@gamedev.com',
      link: 'mailto:alex.johnson@gamedev.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Create <span className="text-neon-green">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-purple mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Ready to bring your game ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-inter">
                I'm always excited to work on new game development projects. 
                Whether you need a gameplay programmer, technical consultant, 
                or full development partner, let's make something amazing together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 bg-dark-700/50 rounded-lg border border-neon-blue/30">
                    <info.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-neon-blue transition-colors duration-200 font-inter"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-inter">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-white mb-4 text-lg">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-dark-700/50 rounded-lg border border-gray-600/30 text-gray-400 ${social.color} transition-all duration-300 hover:border-neon-blue/50`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-4 bg-dark-700/50 border rounded-lg text-white placeholder-gray-400 font-inter transition-all duration-300 focus:outline-none ${
                    focusedField === 'name'
                      ? 'border-neon-blue shadow-lg shadow-neon-blue/25 animate-glow'
                      : 'border-gray-600/30 hover:border-gray-500/50'
                  }`}
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-4 bg-dark-700/50 border rounded-lg text-white placeholder-gray-400 font-inter transition-all duration-300 focus:outline-none ${
                    focusedField === 'email'
                      ? 'border-neon-blue shadow-lg shadow-neon-blue/25 animate-glow'
                      : 'border-gray-600/30 hover:border-gray-500/50'
                  }`}
                  placeholder="Your Email"
                />
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-4 bg-dark-700/50 border rounded-lg text-white placeholder-gray-400 font-inter transition-all duration-300 focus:outline-none ${
                    focusedField === 'subject'
                      ? 'border-neon-blue shadow-lg shadow-neon-blue/25 animate-glow'
                      : 'border-gray-600/30 hover:border-gray-500/50'
                  }`}
                  placeholder="Project Subject"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`w-full px-4 py-4 bg-dark-700/50 border rounded-lg text-white placeholder-gray-400 font-inter transition-all duration-300 focus:outline-none resize-none ${
                    focusedField === 'message'
                      ? 'border-neon-blue shadow-lg shadow-neon-blue/25 animate-glow'
                      : 'border-gray-600/30 hover:border-gray-500/50'
                  }`}
                  placeholder="Tell me about your project ideas..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 font-inter"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;