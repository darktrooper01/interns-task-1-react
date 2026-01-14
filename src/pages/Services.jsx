import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-title">OUR <br />
      SERVICES</h2>

      <p className="service-txt">
        We offer a range of digital services designed to help brands grow, connect, and stand out in today’s digital world.
      </p>

      <div className="services-container">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            We build fast, responsive, and scalable websites tailored to your
            brand, focusing on performance and seamless user experience.
          </p>
        </div>

        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>
            We design intuitive and visually refined interfaces that are easy
            to use, engaging, and focused on user needs.
          </p>
        </div>

        <div className="service-card">
          <h3>Digital Branding</h3>
          <p>
            We help brands create a strong and consistent digital identity that
            stands out and communicates clearly across platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
