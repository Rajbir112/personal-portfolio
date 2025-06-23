import React from "react";

const Connect = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f1f4f8" }}
    >
      <div className="card p-5 shadow rounded" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center mb-4" style={{ color: "#2c3e50" }}>
          Let's Connect
        </h3>

        <p className="text-center text-muted mb-4">
          I'm always open to new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="d-flex flex-column gap-3">

          
          <div className="d-flex align-items-center">
            <i className="devicon-google-plain colored me-3" style={{ fontSize: "26px" }}></i>
            <span>Email: <strong>rajbr710816@gmail.com</strong></span>
          </div>



          
          <div className="d-flex align-items-center">
            <i className="devicon-linkedin-plain colored me-3" style={{ fontSize: "26px" }}></i>
            <span>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/rajbir-singh-9a2226286/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Linked-in Profile 
              </a>
            </span>
          </div>

          
          <div className="d-flex align-items-center">
            <i className="devicon-github-original colored me-3" style={{ fontSize: "26px" }}></i>
            <span>
              GitHub:{" "}
              <a
                href="https://github.com/Rajbir112"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Github Profile
              </a>
            </span>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Connect;

