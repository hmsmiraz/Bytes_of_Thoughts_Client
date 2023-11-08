import Slider from "../Shared/Slider";
import BestAuthors from "./BestAuthors";
import NewsLetter from "./NewsLetter";
import RecentBlog from "./RecentBlog";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <RecentBlog></RecentBlog>
            <NewsLetter></NewsLetter>
            <BestAuthors></BestAuthors>

        </div>
    );
};

export default Home;