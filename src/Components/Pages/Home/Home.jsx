import Slider from "../Shared/Slider";
import BestAuthors from "./BestAuthors";
import CodingCompetitionSection from "./CodingCompetitionSection";
import NewsLetter from "./NewsLetter";
import RecentBlog from "./RecentBlog";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <RecentBlog></RecentBlog>
      <CodingCompetitionSection></CodingCompetitionSection>
      <NewsLetter></NewsLetter>
      <BestAuthors></BestAuthors>
    </div>
  );
};

export default Home;
