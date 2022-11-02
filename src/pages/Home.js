import Blog from '../components/Blog';
import Carousel from '../components/Events';
import Calendar from '../components/Calendar';

const Home = () => {
    return (
        <>
            <Carousel />
            <Calendar />
            <Blog />
        </>
    )
  };
  
  export default Home;