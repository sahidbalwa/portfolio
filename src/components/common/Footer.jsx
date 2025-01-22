import { Github, Linkedin, Mail, MailboxIcon, MapPin, Phone } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-950 dark:bg-gray-950 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-amber-500 hover:text-amber-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>balwasahid@gmail.com</span>
              </div>
              <div className="flex items-center text-amber-500 hover:text-amber-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 7623001476</span>
              </div>
              <div className="flex items-center text-amber-500 dark:text-gray-400 hover:text-amber-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Ahemdabad, Gujarat / Mumbai, Maharastra</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Experience</h3>
            <ul className="space-y-2 text-amber-500">
              <li>Frontend Developer - Windkooky (4-Month, Intership)</li>
              <li>I have hands-on experience in building projects using a variety of technologies and programming languages. My expertise includes front-end development with HTML, CSS, JavaScript, and frameworks like React.js, along with styling libraries such as Tailwind CSS. On the back-end, I have worked with Node.js and Express.js, integrating databases like MongoDB and Supabase for seamless data management. Additionally, I have created interactive and animated websites using tools like Locomotive Scroll, Swiper, and RemixIcon. My projects span diverse areas, including social media platforms, job portals, and responsive static websites, showcasing my ability to combine creativity with technical proficiency.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100  mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Linkedin className='text-gray-200' />
              <a
                href="https://www.linkedin.com/in/sahid-balwa/"
                className="font-semibold text-amber-500 hover:text-amber-600"
              >
                LinkedIn
              </a>
              <Github className=" text-gray-200" />
              <a
                href="https://www.github.com/sahidbalwa/"
                className="font-semibold text-amber-500 hover:text-amber-600"
              >
                 GitHub
              </a>
              <Mail className='text-gray-200'/>
              <a
                href="mailto:balwasahid@gmail.com"
                className="font-semibold text-amber-500 hover:text-amber-600"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-100">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved by Sahid Balwa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer