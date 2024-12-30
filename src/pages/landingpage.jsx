import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const LandingPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="flex justify-between items-center p-6">
                <h1 className="text-2xl font-bold">Brand</h1>
                <nav className="space-x-4">
                    <a href="#features" className="hover:text-blue-400">Features</a>
                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#contact" className="hover:text-blue-400">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <motion.section
                className="flex-grow flex flex-col justify-center items-center text-center px-6"
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={sectionVariants}
            >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Our Website</h2>
                <p className="text-lg md:text-xl mb-8">
                    Discover amazing features and an incredible user experience.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
                >
                    Get Started
                </motion.button>
            </motion.section>

            {/* Features Section */}
            <motion.section
                id="features"
                className="py-16 bg-gray-800"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={sectionVariants}
            >
                <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    <motion.div
                        className="bg-gray-700 p-6 rounded-md text-center hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h4 className="text-xl font-bold mb-2">Feature 1</h4>
                        <p>Experience seamless functionality with our innovative tools.</p>
                    </motion.div>
                    <motion.div
                        className="bg-gray-700 p-6 rounded-md text-center hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h4 className="text-xl font-bold mb-2">Feature 2</h4>
                        <p>Engage with our intuitive and user-friendly design.</p>
                    </motion.div>
                    <motion.div
                        className="bg-gray-700 p-6 rounded-md text-center hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h4 className="text-xl font-bold mb-2">Feature 3</h4>
                        <p>Enjoy enhanced performance and top-notch security.</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                id="about"
                className="py-16 px-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={sectionVariants}
            >
                <h3 className="text-3xl font-bold mb-6">About Us</h3>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                    We are committed to delivering the best experience for our users by integrating cutting-edge technology with elegant design.
                </p>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                className="py-16 bg-gray-800 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={sectionVariants}
            >
                <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                <form className="max-w-lg mx-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.section>

            {/* Footer */}
            <footer className="py-6 text-center bg-gray-900">
                <p>&copy; 2024 Brand. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
