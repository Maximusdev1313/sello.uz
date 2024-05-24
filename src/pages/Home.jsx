import { useState, useEffect, useMemo } from "react";
import GetApi from "../api/getApi";
import Container from '../components/container'
import ControlledCarousel from '../components/carusel'
import CarouselImage from "../components/caruselImages";
import '../assets/Home.css'
const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const api = useMemo(() => new GetApi(), []); // api retains its identity across renders

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await api.getApis();
      setData(result);
      setIsLoading(false);
      sessionStorage.setItem('products', JSON.stringify(result))
    };

    fetchData();
  }, [api]); // Include api in the dependency array
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="carousel-container">
        <div className="animated">

          <ControlledCarousel />
        </div>
        <CarouselImage image='https://i.ebayimg.com/images/g/dw0AAOSwYEhjzEJe/s-l1200.webp' text='home'/>
      </div>

      <Container title='Mahsulotlar' products={data}/>
    </div>
  );
};

export default Home