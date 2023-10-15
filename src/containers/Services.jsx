// COMPONENTS
import { ServiceCard, SectionHeading } from "../components";

// IMAGES
import Work6 from "../assets/Automatic-Gate.png";
import Work7 from "../assets/Automotive-4.jpeg";
import Work8 from "../assets/Electrical-analysis.jpeg";
import Work9 from "../assets/Matlab.jpeg";
import Work10 from "../assets/PCB-design.jpeg";
import Work11 from "../assets/Graphic-design.jpeg";


const Services = () => {
  return (
    <article
      id="services"
      className=" relative w-full bg-slate-100 py-16 service rounded-b-lg b"
    >
      <SectionHeading subTitle="Services" title="Featured services" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center px-5 sm:px-10 md:px-15 rounded-b-lg">
        <ServiceCard
          image={Work6}
          heading="Mechanical Design"
          body="Designing mechanical parts such as gears, shafts, etc."
        />
        <ServiceCard
          image={Work7}
          heading="Automotive"
          body="Performing general check-ups and repairs of a vehicle's fluid levels, brake pads, windshield wipers, engine parts, and other components."
        />
        <ServiceCard
          image={Work8}
          heading="Electrical Analysis"
          body=" Finding all the currents and voltages in a network of connected components.  "
        />
        <ServiceCard
          image={Work9}
          heading="Matlab and Simulink analysis"
          body="Designing mechanical parts such as gears, shafts, etc."
        />
        <ServiceCard
          image={Work11}
          heading="Graphic Design"
          body="Performing general check-ups and repairs of a vehicle's fluid levels, brake pads, windshield wipers, engine parts, and other components."
        />
        <ServiceCard
          image={Work10}
          heading="PCB Design"
          body=" Finding all the currents and voltages in a network of connected components.  "
        />


       
      </section>
    </article>
  );
};

export default Services;
