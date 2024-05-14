import React from "react";

/*const contact = () => {
  return (
    <div className="container-fluid container-xl bg-white py-4">
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15387.057965637681!2d35.3372455!3d-15.3892358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d904e65366a83f%3A0xf1f319d6a0c14cf9!2sUniversity%20of%20Malawi!5e0!3m2!1sen!2smw!4v1715499439802!5m2!1sen!2smw"
          width="100%"
          height="400"
          style={{
            border: 0,
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container mt-4">
        <div className="row row-cols-2 shadow-xl">
          <div className="col">
            <h3>Contact</h3>
          </div>

          <div className="col">
            <h3>Get in Touch with Us</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;*/

const Contact = () => {
  return (
    <div className="container-fluid bg-white py-4">
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15387.057965637681!2d35.3372455!3d-15.3892358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d904e65366a83f%3A0xf1f319d6a0c14cf9!2sUniversity%20of%20Malawi!5e0!3m2!1sen!2smw!4v1715499439802!5m2!1sen!2smw"
          width="100%"
          height="400"
          style={{
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container mt-4">
        <div className="row row-cols-2 g-4 shadow">
          <div className="col">
            <h3 className="text-center">Contact:</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input type="tel" className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>

          <div className="col">
            <h3 className="text-center">Get in Touch with Us:</h3>
            <p>Group four members</p>
            <p>Department of Computer Science,</p>
            <p>University of Malawi, Chancellor College,</p>
            <p>P.O. BOX 280, Zomba, Malawi.</p>
            <p>Phone: +265 99 6467 525</p>
            <p>Email: preciouspraise41@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
