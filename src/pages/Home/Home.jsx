import CarouselDefault from "../../components/Carousel/Carousel";
import MentorCard from "../../components/MentorCard/MentorCard";

const Home =()=>{
    return(
        <div className="bg-white/10 grid gap-10">
            <CarouselDefault/>
            <div className="">
                <MentorCard/>
            </div>
        </div>
    )
}

export default Home;