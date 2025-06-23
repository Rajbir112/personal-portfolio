import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="card mb-3 my-4">
        <video style={{ height: "450px", objectFit: "fill" }} className="card-img-top" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/dh0hjiihw/video/upload/v1750683989/cntzykzcz7zmopbvpmy3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="card-body text-center">
          <h5 className="card-title" style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#2c3e50",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
          }}>iNoteBoook - Store your notes on the cloud</h5>
          <p className="card-text">
            A full-stack cloud-based notebook application built using the <strong>MERN stack</strong>, enabling users to securely create, update, and delete personal notes. This project gave me hands-on experience with essential backend concepts such as <strong>password hashing</strong>, <strong>JWT-based authentication</strong>, <strong>auth tokens</strong>, and <strong>middleware</strong>. On the frontend, I utilized <strong>React Context API</strong> for global state management and performed <strong>API calls</strong> to my own Express and MongoDB-based backend. Building iNotebook was a challenging task that significantly deepened my understanding of full-stack development.
          </p>



          <a href="https://github.com/Rajbir112/inoteBook.git" target="_blank" rel="noopener noreferrer">
            View Source on GitHub
          </a>
        </div>
      </div>

      <div className="card mb-3 my-4">
        <video style={{ height: "450px", objectFit: "fill" }} className="card-img-top" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/dh0hjiihw/video/upload/v1750684155/tiasa4k8drvkhnefyvji.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="card-body text-center">
          <h5 className="card-title" style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#2c3e50",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
          }}>NewsMonkey - Real-time updates that keep your finger on the pulse.</h5>
          <p className="card-text">
            A <strong>real-time news website</strong> built with <strong>React</strong> that fetches and displays the latest headlines from top media sources using <strong>REST APIs</strong>. This was my first React project, where I learned and implemented <strong>API integration</strong>, <strong>state management</strong>, and <strong>component-based architecture</strong>, resulting in a <strong>dynamic</strong> and <strong>responsive</strong> user interface.
          </p>


          <a href="https://github.com/Rajbir112/NewMonkey.git" target="_blank" rel="noopener noreferrer">
            View Source on GitHub
          </a>
        </div>
      </div>

      <div className="card mb-3 my-3">
        <video style={{ height: "450px", objectFit: "fill" }} className="card-img-top" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/dh0hjiihw/video/upload/v1750683505/qvkgrfzjzdho1guttbiw.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="card-body text-center">
          <h5 className="card-title" style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#2c3e50",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
          }}>A landing Page for ck</h5>
          <p className="card-text">
            A <strong>modern</strong> and <strong>responsive landing page</strong> for CK, allowing users to sign up and receive a <strong>$200 shopping coupon</strong>. Built using the <strong>MERN stack</strong> and styled with <strong>Bootstrap</strong>, it features secure <strong>user data handling</strong> with <strong>MongoDB</strong> and delivers a <strong>seamless user experience</strong> through efficient frontend-backend integration.
          </p>

          <a href="https://github.com/Rajbir112/cKlandingpage.git" target="_blank" rel="noopener noreferrer">
            View Source on GitHub
          </a>
        </div>
      </div>





      <p style={{ fontSize: "60px" }}> Many More to Come...</p>


    </>
  )
}

export default Projects
