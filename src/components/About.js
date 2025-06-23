import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: '#0d6efd', fontWeight: '700' }}>
        About Me
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Hi, I'm <strong>Rajbir Singh</strong>, a passionate <strong>3rd year Computer Science Engineering student</strong> at <strong>Jaypee University</strong>. I have a strong enthusiasm for full stack web development and love building clean, efficient, and interactive digital experiences.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            My skill set includes frontend technologies like <strong>React.js, HTML, CSS, and Bootstrap</strong>, along with backend tools like <strong>Node.js, Express.js, and MongoDB</strong>. I’m confident working across the entire stack and enjoy creating complete, scalable web solutions.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            I'm also exploring <strong>Machine Learning</strong> to expand my problem-solving abilities and gain insights into data-driven development. I believe that combining intelligent systems with great user interfaces can create powerful and impactful products.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Beyond coding, I’m constantly looking to learn, experiment with new technologies, and work on projects that challenge me. I value clear communication, clean code, and continuous growth — both technically and personally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


