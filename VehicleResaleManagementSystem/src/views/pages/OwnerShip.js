import React from "react";

// reactstrap components
import {
  NavLink,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container><h5 className="black">
            If you sell your car,  it is mandatory to get the ownership of vehicle 
            transferred to the name of the buyer. Vehicle ownership transfer which 
            is generally called the RC transfer is important because it ensures that 
            the vehicle and all legal liabilities related to it are transferred to 
            the buyer. If you are wondering, what needs to be done for the transfer of 
            vehicle ownership, all it takes is an application to the concerned regional 
            transport office (RTO). 
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h3 className="title text-center">Documents Required for Transfer of Ownership of Vehicle in Kerala</h3>
                <h5 className="black">1.Age proof (Optional)</h5>
                <h5 className="black">2.Address Proof (Mandatory)</h5>
                <h5 className="black">3.Auction proceedings (Optional)</h5>
                <h5 className="black">4.Consent from other legal heirs (Optional)</h5>
                <h5 className="black">5.Death Certificate of Owner (Optional)</h5>
                <h5 className="black">6.Form 29-It verifies that the original owner 
                has given to the local RTO all necessary paperwork pertaining to the 
                RC, insurance, and PUC. (Optional)</h5>
                <h5 className="black">7.Form 30- Form 30 lets the RTO know that the transfer 
                of ownership should be done urgently(Optional)</h5>
                <h5 className="black">8.Form 32-in case vehicle purchased or acquired in public auction (Optional)</h5>
                <h5 className="black">9.Legal heir certificate (Optional)</h5>
                <h5 className="black">10.PAN Card (Optional)</h5>
                <h5 className="black">11.Releasing Letter (Optional)</h5>
                <h5 className="black">12.Transfer in case of public auction (Optional)</h5></Col></Row>
                
                <NavLink  href="https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statevalidation/homepage.xhtml"
                  target="_blank">
                    <i className="user_Registration_home"></i><h4>For online application visit Parivahan</h4>
                    
                  </NavLink>
            
                    
                       
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
