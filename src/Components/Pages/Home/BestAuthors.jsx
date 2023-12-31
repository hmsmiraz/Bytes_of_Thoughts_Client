import { motion } from "framer-motion";
const BestAuthors = () => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 },
      }}
    >
      <div className="text-stone-600">
        <h2 className="text-center font-bold text-3xl pb-5">
          Our Respectful Authors
        </h2>
        <div className="flex flex-col md:flex-row my-10 gap-10 justify-center items-center">
          {/* 1st */}
          <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/PCNXbZy/jhank.jpg"
                alt="authors"
                className="  h-60 w-60 rounded-full"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">Name : Jhankar Mahbub</h2>
              <p>Age: 35 Years</p>
              <p>Profession: Sr. Web Developer</p>
              <p>Tags: Problem Solving/ Languages</p>
            </div>
          </div>
          {/* 2nd */}
          <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/KmvM4xH/sumit.jpg"
                alt="Shoes"
                className="  h-60 w-60 rounded-full"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">Name: Sumit Saha</h2>
              <p>Age: 35 Years</p>
              <p>Profession: Software Engineer</p>
              <p>Tags:Programming/ Motivational</p>
            </div>
          </div>
          {/* 3rd */}
          <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/zGkz0xS/cahyti.webp"
                alt="Shoes"
                className=" h-60 w-60 rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: Chayti Saha</h2>
              <p>Age: 26 Years</p>
              <p>Profession: Senior Web Instructor </p>
              <p>Tags: Framework/ Library</p>
            </div>
          </div>
          {/* 4th 
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/2KTbbtz/slide-3.jpg"
                alt="Shoes"
                className=" h-28 w-28 rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name</h2>
              <p>Age: 35 Years</p>
              <p>Profession: Motivational Speaker</p>
              <p>Tags: Motivation</p>
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default BestAuthors;
