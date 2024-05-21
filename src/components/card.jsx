import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/Card.css'
function Cards(props) {
  // console.log(props.product);
  const product = props && props.product
  return (
    <Card style={{ width: '15rem'}} >
      <i className='fa fa-heart'></i>
      <Card.Img variant="top" src={product.image}  width={250} height={280} className='card__image'/>
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
        <Card.Title className='card__title'>{product.title}</Card.Title>
        <Card.Text className='card__description text'>
          {product.description}
          <span className="fade"></span>

        </Card.Text>
        <Card.Title className='card__price '>
          {product.price} so'm
          

        </Card.Title>
        <Button  className='card__button'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;