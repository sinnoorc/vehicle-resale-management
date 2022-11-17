
// reactstrap components
// import {
// } from "reactstrap";

// core components
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { Toaster } from 'react-hot-toast';


function Index() {
 
  return (
    <>
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

      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
