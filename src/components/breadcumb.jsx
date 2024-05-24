import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs(props) {
  console.log(props.items);
  return (
    <Breadcrumb>
    {props.items.map((item) =>{

    return  <Breadcrumb.Item href={item.link} key={item.link}>{item.content}</Breadcrumb.Item>
    })}
      
    </Breadcrumb>
  );
}

export default Breadcrumbs;