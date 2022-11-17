
import React,{useState} from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { Link, NavLink } from 'react-router-dom';

function VehicleReg() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    // event.preventDefault();
    alert(`Form Submitted ✅ `);
  }
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
    
  }, []);
  return (
    <><IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image"
          style={{backgroundImage: "url(" + require("assets/img/VehiReg.jpg") + ")"
          }}></div>
        <div className="content">
          
          <Col className="ml-auto mr-auto" md="6">
            <Card className="card-login card-plain">
              <Form action="../BackEnd/routers/aliens" className="form" method="post" onSubmit={handleSubmit}>
              <h3><b>Register your vehicle</b></h3>
              <Container >
              
                  <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                     ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="OwnName"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                      placeholder="Owner Name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegAddress1"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Address line 1"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegAddress2"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Address line 2"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="District" ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="select"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      >
                       
                      <option selected value="Dis" style={{color: "black"}}>District</option>
                      <option value="tvm" style={{color: "black"}}>Thiruvananthapuram</option>
                      <option value="klm" style={{color: "black"}}>Kollam</option>
                      <option value="Pathanamthitta" style={{color: "black"}}>Pathanamthitta</option>
                      <option value="Alappuzha" style={{color: "black"}}>Alappuzha</option>
                      <option value="Kottayam" style={{color: "black"}}>Kottayam</option>
                      <option value="Idukki" style={{color: "black"}}>Idukki</option>
                      <option value="Ernakulam" style={{color: "black"}}>Ernakulam</option>
                      <option value="Thrissur" style={{color: "black"}}>Thrissur</option>
                      <option value="Palakkad" style={{color: "black"}}>Palakkad</option>
                      <option value="Malapuram" style={{color: "black"}}>Malapuram</option>
                      <option value="Kozhikode" style={{color: "black"}}>Kozhikode</option>
                      <option value="Wayanad" style={{color: "black"}}>Wayanad</option>
                      <option value="Kannur" style={{color: "black"}}>Kannur</option>
                      <option value="Kasargod" style={{color: "black"}}>Kasargod</option>
                    </Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegPhno"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Phone Number"
                        type="Text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegEmail"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Email ID"
                        type="Text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="VehiType"></i></InputGroupText>
                    </InputGroupAddon> <div>
                    <input type="radio" value="Car" name="VehiType" /> Car
                    <input type="radio" value="Bike" name="VehiType" /> Bike</div>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="VehiNo"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Number"
                        type="Text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="VehiBrand"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Brand"
                        type="Text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="VehiModel"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Model"
                        type="Text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="VehiLocation"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Location"
                        type="Text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    
                    <InputGroup className={"no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="Ownership" ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="select"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      >
                      
                      <option selected value="Ownership" style={{color: "black"}} >Vehicle ownership</option>
                      <option value="first" style={{color: "black"}}>First</option>
                      <option value="second" style={{color: "black"}}>Second</option>
                      <option value="third" style={{color: "black"}}>Third</option>
                      
                    </Input>
                    </InputGroup>
                    
                    
                    <InputGroup className={"no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="Fuel" ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="select"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      >
                      
                      <option selected value="Fuel" style={{color: "black"}} >Fuel type</option>
                      <option value="petrol" style={{color: "black"}}>Petrol</option>
                      <option value="diesel" style={{color: "black"}}>Diesel</option>
                      <option value="electric" style={{color: "black"}}>Electric</option></Input>
                    </InputGroup></Container>
                <CardFooter className="text-center">
                {/*<NavLink
              className="changeowner"
              activeClassName="is-active"
              to="/ThankYou" tag={Link}
              exact
        >*/}
	            
                <Button
                 type="submit"
                    block
                    className="btn-round"
                    color="info"
                   
                    size="lg"
                  >Get Started
                  </Button>{/*</NavLink>*/}
                  </CardFooter>
                  </Form>
              </Card>
            </Col>
          
        </div>
      </div>
      
    </>
  );
}

export default VehicleReg;
