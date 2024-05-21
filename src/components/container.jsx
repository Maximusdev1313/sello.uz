import Cards from './card' 
import '../assets/Container.css'
function Container(props){
    // console.log(props.products);
    return(
        <div className="card-container">

        <h6 className="title">{props.title}</h6>
        <div className="wrapper">
            { props.products && props.products.map(product => <Cards product={product} key={product.id}/>)}
            
        </div>
        </div>
    )

}

export default Container