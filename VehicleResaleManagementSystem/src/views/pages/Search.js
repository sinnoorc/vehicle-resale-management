import React from "react";

// reactstrap components
import {
  Input, InputGroup, InputGroupAddon,
  InputGroupText
} from "reactstrap";

// core components
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function UserReg() {

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [search,setSearch]=React.useState('')
  const [data, setData] = React.useState([]);
  
  const [filter, setFilter] = React.useState([]);

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
    React.useEffect(() => {
    async function dataFetch() {
       const data= await  axios({
  method: 'get',
  url: 'http://localhost:9000/vehicle',

       });
      console.log(data)
      setData(data.data)
      setFilter(data.data)
    }
    dataFetch()
    
  }, []);
console.log(data,'data')
  return (
    <>
      <IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        {/* <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/blurred-image-1.jpg") + ")"
          }}
        ></div> */}
         <InputGroup style={{ marginTop:"100px" }} className={"no-border input-lg" +(firstFocus ? " input-group-focus" : "")}
                    ><InputGroupAddon addonType="prepend">
                     <InputGroupText> <i className="RegName"></i></InputGroupText>
                    </InputGroupAddon>
                      <Input
                        placeholder="Search ..."
            type="text"
            onChange={async(event) => {
              setSearch(event.target.value)
              const result = [...filter]
              console.log(result.filter(({ OwnDis }) =>  OwnDis.toLowerCase().includes(event.target.value.toLowerCase())   ))
             const resultant= await result.filter(({ OwnDis }) =>  OwnDis.toLowerCase().includes(event.target.value.toLowerCase())      )
              
              setData(resultant)
            }}
            value={search}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
        </InputGroup>
        <div style={{ display:'flex',alignItems:'center',gap:'20px',width:'100vw' }}>
          
          {data.length>0?data?.map((item,idx) => (
            <div key={idx} style={{ display:'flex',justifyContent:"center",flexDirection:"column",alignItems:'center',background:"white",color:"black",padding:'10px' }}>

            <div>
               {item.OwnAd1}
              </div>
             <div>
               {item.OwnDis}
              </div>
             <div>
              {item.OwnEmail}
              </div> 
             <div>
              {item.OwnName}
              </div> 
             <div>
              {item.OwnPhno}
              </div> 
             <div>
              {item.Ownad2}
              </div> 
             <div>
              {item.VehiBrand}
              </div> 
             <div>
              {item.VehiFuel}
              </div> 
             <div>
              {item.VehiLocation}
              </div> 
             <div>
              
              </div> {item.VehiNo}
             <div>
              {item.VehiOwn}
              </div> 
              </div>
          )):"empty"}
        </div>

      </div>
    </>
  );
}

export default UserReg;
