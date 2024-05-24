import Image from 'react-bootstrap/Image';

function CarouselImage(props) {
  return <Image src={props.image} fluid alt={props.text} style={{borderRadius: '10px'}} className={props.text}/>
     
}

export default CarouselImage;