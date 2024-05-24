import {useParams} from "react-router-dom"
import Breadcrumbs from '../components/breadcumb'
function ProductsDetail (){
    const item = [
        {link: '#', content: 'Home'},
        {link: 'https://youtube.com', content: 'youtube'},
        {link: 'google.com', content: 'google'},
    ]
    const products = JSON.parse(sessionStorage.getItem('products')) || []
    const productId = useParams()
    let thisProduct = products.find(prod => prod.id === Number(productId.id) )
    console.log( thisProduct, 'prod');
    return(
        <div>
            <h1>ProductsDetail</h1>
            <Breadcrumbs items={item}/>
            
        </div>
    )
}
export default ProductsDetail