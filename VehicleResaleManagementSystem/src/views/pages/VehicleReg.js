import React, { useState } from "react";

// reactstrap components
import axios from 'axios';
import {
  Button,
  Card,
  CardFooter, Col, Form,
  FormGroup,
  Input, InputGroup, InputGroupAddon,
  InputGroupText
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import toast, { Toaster } from 'react-hot-toast';

function VehicleReg() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [OwnName, setOwnName] = useState("");
  const [OwnAd1, setOwnAd1] = useState("");
  const [Ownad2, setOwnad2] = useState("");
  const [OwnDis, setOwnDis] = useState("");
  const [OwnPhno, setOwnPhno] = useState("");
  const [OwnEmail, setOwnEmail] = useState("");
  const [VehiType, setVehiType] = useState("");
  
  const [VehiNo, setVehiNo] = useState("");
  const [VehiBrand, setVehiBrand] = useState("");
  const [VehiModel, setVehiModel] = useState("");
  const [VehiLocation, setVehiLocation] = useState("");
  const [VehiOwn, setVehiOwn] = useState("");
  const [VehiFuel, setVehiFuel] = useState("");
  
  const handleSubmit = (event) => {
    console.log(event)
    console.log(OwnName,OwnAd1,Ownad2,OwnDis,OwnPhno,OwnEmail,VehiType,
      VehiNo,VehiBrand,VehiLocation,VehiOwn,VehiFuel)
    axios({
  method: 'post',
  url: 'http://localhost:9000/vehicle',
  data: {
    OwnName,OwnAd1,Ownad2,OwnDis,OwnPhno,OwnEmail,VehiType,
    VehiNo,VehiBrand,VehiLocation,VehiOwn,VehiFuel
  } 
    });
    setOwnName('')
setOwnAd1("")
    toast.success(`Form Submitted ✅ `);
  }
  

  
  return (
    <><IndexNavbar />
        <Toaster
  position="bottom-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>

      <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image"
        style={{backgroundImage: "url(" + require("assets/img/VehiReg.jpg") + ")"}}></div>
          <div className="content">
          <Col className="ml-auto mr-auto" md="6">
              <Card className="card-login card-plain">
                <Form>
                <FormGroup>
                  <h3><b>Register vehicle</b></h3>
                   <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegName"></i></InputGroupText>
                    </InputGroupAddon>
                    
                      <Input
                        style={{color: "black"}}
                        placeholder="Owner Name" 
                        type="text"
                        value={OwnName}
                        onChange={(e) => setOwnName(e.target.value)}
                        name="OwnName"
                        ></Input> 
                      
                        </InputGroup>
                        <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                        ><InputGroupAddon addonType="prepend">
                        <InputGroupText> <i className="RegAddress1"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input
                        placeholder="Address line 1"
                        type="text"
                        value={OwnAd1}
                        onChange={(e) => setOwnAd1(e.target.value)}
                        name="add1"
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
                             value={Ownad2}
                        onChange={(e) => setOwnad2(e.target.value)}
                        name="add2"
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
                               value={OwnDis}
                        onChange={(e) => setOwnDis(e.target.value)}
                        name="OwnDis"
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
                      <option value="Wayanad"style={{color: "black"}}>Wayanad</option>
                      <option value="Kannur"style={{color: "black"}}>Kannur</option>
                      <option value="Kasargod"style={{color: "black"}}>Kasargod</option>
                    </Input>
                    </InputGroup>
                  
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegPhno"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Phone Number"
                        id="phNumber"
                        type="Text"
                               value={OwnPhno}
                        onChange={(e) => setOwnPhno(e.target.value)}
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
                      type="email"
                              value={OwnEmail}
                        onChange={(e) => setOwnEmail(e.target.value)}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="Vehitype"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Type"
                      type="select"
                  
                              value={VehiType}
                        onChange={(e) => setVehiType(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      >
                        <option selected value="Dis" style={{color: "black"}}>Select</option>
                      <option value="car" style={{color: "black"}}>Car</option>
                      <option value="bike" style={{color: "black"}}>Bike</option>
                      </Input>
                    </InputGroup>
                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="VehiNo"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Number"
                      type="text"
                            value={VehiNo}
                        onChange={(e) => setVehiNo(e.target.value)}
                        onFocus={() => setLastFocus(true)}

                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="VehiBrand"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Brand"
                      type="text"
                            value={VehiBrand}
                        onChange={(e) => setVehiBrand(e.target.value)}
                        onFocus={() => setLastFocus(true)}

                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="VehiModel"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Model"
                      type="text"
                            value={VehiModel}
                        onChange={(e) => setVehiModel(e.target.value)}
                        onFocus={() => setLastFocus(true)}

                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="VehiLocation"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Vehicle Location"
                      type="text"
                            value={VehiLocation}
                        onChange={(e) => setVehiLocation(e.target.value)}
                        onFocus={() => setLastFocus(true)}

                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="Ownership"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Ownership"
                      type="select"
                  
                              value={VehiOwn}
                        onChange={(e) => setVehiOwn(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      >
                        <option selected value="Ownership" style={{color: "black"}}>Select</option>
                      <option value="First" style={{color: "black"}}>First</option>
                      <option value="Second" style={{color: "black"}}>Second</option>
                      <option value="third" style={{color: "black"}}>third</option>
                      </Input>
                    </InputGroup>

                    <InputGroup className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="Fuel"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        
                      type="select"
                  
                              value={VehiFuel}
                        onChange={(e) => setVehiFuel(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      >
                        <option selected value="Fuel" style={{color: "black"}}>Fuel</option>
                      <option value="Petrol" style={{color: "black"}}>Petrol</option>
                      <option value="diesel" style={{color: "black"}}>diesel</option>
                      <option value="electric" style={{color: "black"}}>electric</option>
                      </Input>
                    </InputGroup>

                  <CardFooter className="text-center"> 
                <Button
                  type="button"
                    block
                    onClick={handleSubmit}                    className="btn-round"
                    color="info"
              
                    size="lg"
                  >Get Started
                  </Button> 
                  
                   </CardFooter> 
                  </FormGroup>
                
                </Form>
              </Card>
            </Col>
          
        </div>
      </div>
    </>
  );
}

export default VehicleReg;
