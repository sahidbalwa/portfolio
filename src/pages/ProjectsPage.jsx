import { useState } from 'react';
import GradientText from '../hooks/GradientText';
import Button from '../hooks/Button';
import { Link } from 'react-router-dom';

const projects = {
  websites: [
    {
      title: 'Fullstack Job Portal ',
      description: 'A full-featured job portal platform built with React and Node.js for recruiters and job seekers.A full-featured job portal platform built with React and Supabase for recruiters and job seekers.',
      url: 'https://jobbers11.netlify.app/', // Added URL for iframe
      tech: ['React','Supabase', 'Javascript','clerk','tailwindcss','lucide-react'],
      link: 'https://jobbers11.netlify.app/',
    },
    {
      title: 'Fullstack Chat App',
      description: 'An analytics dashboard providing insights into user activity, chat statistics, and engagement trends for Chatty.',
      url: 'http://chatty11.onrender.com/', // Added URL for iframe
      tech: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Socket.IO', 'Zustand','Express','MongoDB'],
      link: 'http://chatty11.onrender.com/',
    },
    {
      title: 'Virtual Reality',
      description: 'A basic, responsive virtual reality website created using React and Tailwind CSS, featuring a static webpage design.',
      url: 'https://virtual-reality11.netlify.app/', // Added URL for iframe
      tech: ['React.js', 'Tailwind CSS','lucide-react','react-dom'],
      link: 'https://virtual-reality11.netlify.app/',
    },
    {
      title: 'Sundown',
      description: 'An engaging animated website built using HTML, CSS, JavaScript, Locomotive Scroll, and Swiper, offering smooth scrolling and interactive content.',
      url: 'https://sundown11.netlify.app/', // Added URL for iframe
      tech: ['HTML','CSS','JAVASCRIPT','Locomotive','Swiper'],
      link: 'https://sundown11.netlify.app/',
    },
    {
      title: 'To Good Co',
      description: 'A smooth-scrolling website built with HTML, CSS, JavaScript, Locomotive Scroll, RemixIcon, and Cloudflare, providing a seamless and interactive user experience.',
      url: 'https://two-good-co11.netlify.app/', // Added URL for iframe
      tech: ['HTML','CSS','JAVASCRIPT','locomotive-scroll','remixicon','cloudflare'],
      link: 'https://two-good-co11.netlify.app/',
    },
    {
      title: 'Rippel',
      description: 'A dynamic social media platform built with React, Node.js, Tailwind CSS, and MongoDB, featuring user profiles, posts, stories, and interactive functionalities like following, liking, and Save etc.',
      url: 'https://github.com/sahidbalwa/ripple', // Added URL for iframe
      tech: ['HTML','tailwindcss','JAVASCRIPT','express','multer','ejs','passport','bcrypt','nodemon','mongoDB','cookie-parser','mongoose'],
      link: 'https://github.com/sahidbalwa/ripple',
    },

  ],
  applications: [
    {
      title: 'Fitness Tracker App',
      description: 'Mobile app for tracking workouts and nutrition',
      url: 'https://www.nike.com', // Added URL for iframe
      tech: ['React Native', 'Firebase', 'Redux'],
      link: '#',
    },
    {
      title: 'Task Management Tool',
      description: 'Desktop application for project management',
      url: 'https://www.trello.com', // Added URL for iframe
      tech: ['Electron', 'React', 'SQLite'],
      link: '#',
    },
  ],
};

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('websites');

  const activeProjects = projects[activeTab] || []; // Ensure it resolves to an array

  return (
    <div className="min-h-screen pt-16 items-center justify-items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-8 justify-self-center">Projects</h1>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('websites')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'websites'
                ? 'bg-amber-500 text-white font-semibold'
                : 'bg-gray-300 dark:bg-gray-800 text-gray-900 font-semibold dark:text-gray-300'
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'applications'
                ? 'bg-amber-500 text-white font-semibold'
                : 'bg-gray-300 dark:bg-gray-800 text-gray-900 font-semibold dark:text-gray-300'
            }`}
          >
            Applications
          </button>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-950/50  backdrop-blur-md  dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <iframe
                src={project.url}
                title={project.title}
                className="w-full h-52"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white  mb-2">
                  {project.title}
                </h3>
                 <p className='text-gray-200 mb-2'>
                {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 dark:bg-gray-700 text-emerald-300   dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a> */}
                <Link to={project.link}>
              <Button></Button>
            </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
