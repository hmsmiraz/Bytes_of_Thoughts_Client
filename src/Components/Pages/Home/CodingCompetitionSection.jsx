const CodingCompetitionSection = () => {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-stone-600 font-bold text-4xl text-center">
          You can practice code here:
        </h2>
      </div>
      <div className="flex flex-col md:flex-row mt-5 gap-10 mx-auto justify-center items-center">
        {/* 1st */}
        <div className="card bg-base-100 w-80 shadow-xl">
          <div className="card-body">
          <a href="https://www.hackerrank.com" className="link text-2xl text-center font-bold">HackerRank</a>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/kcBK83v/default.jpg"
              alt="HackerRank"
              className="h-60 w-80"
            />
          </figure>
        </div>
        {/* 2nd */}
        <div className="card bg-base-100 w-80 shadow-xl">
          <div className="card-body">
          <a href="https://codeforces.com" className="link text-2xl text-center font-bold">Codeforces</a>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/nMmy6L7/code.webp"
              alt="Codeforces"
              className="h-60 w-80"
            />
          </figure>
        </div>
        {/* 3rd */}
        <div className="card bg-base-100 w-80 shadow-xl">
          <div className="card-body">
          <a href="https://leetcode.com/" className="link text-2xl text-center font-bold">LeetCode</a>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/RYRTLSw/lettcode.png"
              alt="LeetCode"
              className="h-60 w-80"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CodingCompetitionSection;
