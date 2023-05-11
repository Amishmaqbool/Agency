import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="">
          <Header/>
        </div>
        <div className="flex-1 pb-[28px]">{children}</div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Layout;