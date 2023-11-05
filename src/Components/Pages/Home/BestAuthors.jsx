

const BestAuthors = () => {
  return (
    <div className="text-stone-600">
      <h2 className="text-center font-bold text-3xl pb-5">Our Respectful Authors</h2>
      <div className="flex flex-col md:flex-row my-10 gap-10 justify-center items-center">
        {/* 1st */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src='https://i.ibb.co/2KTbbtz/slide-3.jpg'
              alt="authors"
              className=" h-28 w-28 rounded-full"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Name</h2>
            <p>Age: 30 Years</p>
            <p>Profession: Software Engineer</p>
            <p>Tags: Problem Solving/ Languages</p>
          </div>
        </div>
        {/* 2nd */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src='https://i.ibb.co/2KTbbtz/slide-3.jpg'
              alt="Shoes"
              className=" h-28 w-28 rounded-full"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Name</h2>
            <p>Age: 27 Years</p>
            <p>Profession: Lecturer</p>
            <p>Tags: Competitive Programming/ Motivational</p>
          </div>
        </div>
        {/* 3rd */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src='https://i.ibb.co/2KTbbtz/slide-3.jpg'
              alt="Shoes"
              className=" h-28 w-28 rounded-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name</h2>
            <p>Age: 25 Years</p>
            <p>Profession: Web Developer</p>
            <p>Tags: Framework/ Library</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestAuthors;
