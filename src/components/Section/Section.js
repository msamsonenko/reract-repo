import './Section.css';
const Section = ({ children, title }) => (
  <section className="Section">
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
