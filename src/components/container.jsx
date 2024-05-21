import Cards from './card' 
import '../assets/Container.css'
function Container(props){
    return(
        <div className="card-container">

        <div className="title">{props.title}</div>
        <div className="wrapper">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
        </div>
    )

}

export default Container