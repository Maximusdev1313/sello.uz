import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './caruselImages';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <CarouselImage text="First slide" image='https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg'/>
        
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second slide" image={'https://e3.365dm.com/23/03/1600x900/skynews-pepsi-cola_6102187.jpg?20230328114227'}/>
      
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" image='https://i.ebayimg.com/images/g/dw0AAOSwYEhjzEJe/s-l1200.webp'/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;