import Slider from "../Shared/Slider";
import BestAuthors from "./BestAuthors";
import NewsLetter from "./NewsLetter";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <NewsLetter></NewsLetter>
            <BestAuthors></BestAuthors>
        </div>
    );
};

export default Home;