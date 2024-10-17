


import HomeLayout from "../Layouts/HomeLayout";
import AboutMainImage from "../Assets/Images/AboutMainImage.png";
import { celebrities } from "../Constants/CelebrityData";
import CarouselSlide from "../Components/CarouselSlide";

function AboutUs() {
return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        {/* Main Section */}
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the world. We are offering a platform for aspiring teachers and students to share their skills, creativity, and knowledge to empower and contribute to the growth and wellness of mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              id="test"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
              }}
              alt="About main image"
              className="drop-shadow-2xl"
              src={AboutMainImage}
            />
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel w-full my-16">
            {celebrities && celebrities.map(celebrity => (<CarouselSlide
                                                             { ...celebrity }  
                                                             key={celebrity.slideNumber} 
                                                             totalSlides={celebrities.length}
                                                                
                                                                
                                                        />))}
   </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;

