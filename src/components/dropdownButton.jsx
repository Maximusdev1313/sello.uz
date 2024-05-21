
import Dropdown from 'react-bootstrap/Dropdown';
function ButtonDropdown(){
    return(
        <>
        <Dropdown className="d-inline mx-2 ">
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-dark' >
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


        </>
    )
}

export default ButtonDropdown