import React from 'react';

const SkillsPage = () => {
  const skills = [
    {
      name: 'HTML5',
      level: 95,
      image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4085627/cover_image/regular_1708x683/01-HTML5_CM-d750fc9cb7c10219f11c708c75450e79.png',
    },
    {
      name: 'CSS',
      level: 85,
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'JavaScript',
      level: 90,
      image: 'https://www.shutterstock.com/image-vector/javascript-programming-language-script-code-260nw-1062509657.jpg',
    },
    {
      name: 'Bootstrap',
      level: 85,
      image: 'https://blog.templatetoaster.com/wp-content/uploads/2021/01/Bootstrap.jpg',
    },
    {
      name: 'MongoDB',
      level: 80,
      image: 'https://media.licdn.com/dms/image/D4D12AQETgv5fMiYEXA/article-cover_image-shrink_720_1280/0/1677609185621?e=2147483647&v=beta&t=4Hu56lmQmUTtVSMFDKfipqVq9U1jo41sIJpib0lQoCo',
    },
    {
      name: 'Express.js',
      level: 75,
      image: 'https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA',
    },
    {
      name: 'React.js',
      level: 80,
      image: 'https://media.licdn.com/dms/image/D4D12AQF26-NZ279EaA/article-cover_image-shrink_600_2000/0/1688018102545?e=2147483647&v=beta&t=Q9aUSt_UHzSqZYyDycri3s2kqVDlPc-YM0ZzlH2yfYc',
    },
    {
      name: 'React Native',
      level: 60,
      image: 'https://www.visual-craft.com/static/86b4a37121c83372d45b5f4878caccf1/8e4fb/React_Native_2_c5ab49be9b.png',
    },
    {
      name: 'Node.js',
      level: 55,
      image: 'https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png',
    },
    {
      name: 'Python',
      level: 65,
      image: 'https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2019/10/Python-programming-india.jpg',
    },
    {
      name: 'Java',
      level: 80,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3S9FqOWEjqGZPQ98L55jzxu9OXbJqwXx_Gw&s',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-inherit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Skills & Expertise</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              {/* Background Image */}
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />

              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center text-white transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <span className="text-sm font-semibold mb-4">{skill.level}%</span>
                <div className="w-3/4 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-400 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
