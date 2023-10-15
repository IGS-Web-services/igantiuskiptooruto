import { SectionHeading } from "../components";

import Hobby1 from "../assets/hike-1.jpg";
import Hobby2 from "../assets/hike-2.jpg";
import Hobby3 from "../assets/hike-3.jpg";
import Hobby4 from "../assets/IEEE.jpg";


import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const featuredHobbies = [
    { _id: 100, image: Hobby1, alt: "Project 1" },
    { _id: 102, image: Hobby2, alt: "Project 2" },
    { _id: 103, image: Hobby3, alt: "Project 3" },
    { _id: 105, image: Hobby4, alt: "Project 5" },

]

const Hobby = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,

                },
            },
        ],
    };
    return (
        <article
            id="hobbies"
            className="backdrop-blur-sm bg-black/40 relative w-full py-16  "
        >

            <div className="w-full py-12 bg-none">
                <div className="container mx-auto">
                    <SectionHeading subTitle="hobbies" title="adventures" className='text-white' />
                   
                    <Slider {...settings} className="flex gap-4  ">
                        {/* Add your project images and descriptions here */}
                        {
                            featuredHobbies.map((project) =>
                            (
                                <div className="px-2">
                                    <img
                                        key={project._id}
                                        src={project.image}
                                        alt={project.alt}
                                        className="mx-auto w-full h-80 sm:h-96  w-auto object-cover rounded-md"
                                    />
                                </div>
                            )


                            )
                        }


                    </Slider>
                </div>
            </div>
        </article>
    );
};

export default Hobby;
