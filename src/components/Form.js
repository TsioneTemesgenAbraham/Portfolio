import React, { useState } from "react";
import Instagram from "../assets/instagram-white-icon.svg";
import Facebook from "../assets/facebook-app-round-white-icon.svg";
import Linkedin from "../assets/linkedin-app-white-icon.svg";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="container-contacts">
      <div className="col-cont">
        <h4>Contact</h4>
        <ul className="social-icon">
          <li> <a href="#">
          <img src={Facebook} alt="Icon" />
        </a></li>
          <li><a href="#">
          <img src={Instagram} alt="Icon" />
        </a></li>
          <li><a href="#">
          <img src={Linkedin} alt="Icon" />
        </a></li>
          <button><a href="../assets/Cv.pdf" download="Cv.pdf">Download CV</a></button>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Contact me</h2>

        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>

        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}
