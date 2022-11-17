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

function UserReg() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [name, setName] = useState("");
  const [ad1, setAd1] = useState('')
  const[ad2,setAd2]=useState('')
  const[district,setDistrict]=useState('')
  const[phNo,setPhNo]=useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [cPass,setCpass]=useState('')
  
  const handleSubmit = (event) => {
    console.log(event)
    console.log(name,ad1,ad2,district,phNo,email,pass,cPass)
    axios({
  method: 'post',
  url: 'http://localhost:9000/aliens',
  data: {
     name,ad1,ad2,district,phNo,email,pass,cPass
  }
});

    toast.success(`Form Submitted ✅ `);
  }
  
  React.useEffect(() => {
    async function dataFetch() {
       const data= await  axios({
  method: 'get',
  url: 'http://localhost:9000/aliens/63766fedaf1d75c5f70160fa',

       });
      console.log(data)
    }
    dataFetch()
    // document.body.classList.add("login-page");
    // document.body.classList.add("sidebar-collapse");
    // document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    // return function cleanup() {
    //   document.body.classList.remove("login-page");
    //   document.body.classList.remove("sidebar-collapse");
    // };
  }, []);
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
          style={{backgroundImage: "url(" + require("assets/img/UserRegi.jpg") + ")"
          }}></div>
          <div className="content">
          
            <Col className="ml-auto mr-auto" md="6">
              <Card className="card-login card-plain">
                <Form>
                <FormGroup>
                  <h3><b>Register your new Account</b></h3>
                   <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegName"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Name"
                      type="text"
                      value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="RegName"
                        id="RegName"
                        
                      ></Input> 
                      
                    </InputGroup>
                    <InputGroup className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegAddress1"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Address line 1"
                        type="text"
                          value={ad1}
                        onChange={(e) => setAd1(e.target.value)}
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
                             value={ad2}
                        onChange={(e) => setAd2(e.target.value)}
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
                               value={district}
                        onChange={(e) => setDistrict(e.target.value)}
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
                               value={phNo}
                        onChange={(e) => setPhNo(e.target.value)}
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
                              value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                          <i className="Password"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                      type="password"
                  
                              value={pass}
                        onChange={(e) => setPass(e.target.value)}
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
                          <i className="RegConfimpassword"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirm Password"
                      type="password"
                            value={cPass}
                        onChange={(e) => setCpass(e.target.value)}
                        onFocus={() => setLastFocus(true)}

                        onBlur={() => setLastFocus(false)}
                      ></Input>
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

export default UserReg;
