import { Link, Outlet } from "react-router";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionE from "./SectionE";
import SectionF from "./SectionF";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <nav
        className="bg-[url('/Images/sectionA.png')] bg-cover 
            h-screen w-full  pt-[30px]">
              <div className="flex fixed">
                <img className="w-[150px] h-[20px] mx-[180px]" src="/logo.png" alt="" />
                <div className="flex gap-3 pl-[120px]">
                  <Link className="text-white hover:underline text-[10px] font-semibold" to="/falcon">FALCON 9</Link>
                  <Link className="text-white hover:underline text-[10px] font-semibold" to="/">FALCON HEAVY</Link>
                  <Link className="text-white hover:underline text-[10px] font-semibold" to="/">DRAON</Link>
                  <Link className="text-white hover:underline text-[10px] font-semibold" to="/">STARSHIP</Link>
                  <Link className="text-white hover:underline text-[10px] font-semibold" to="/">HUMAN SPACEFLIGHT</Link>
                  <Link className="text-white hover:underline text-[10px] font-semibold" to="/">RIDESHARE</Link>
                  <Link className="text-white hover:underline text-[10px] font-semibold" to="/">FALCON 9</Link>
                  <Link className="text-white hover:underline text-[10px] font-semibold" to="/">TOP</Link>
                </div>
              </div>
        

        <div className="text-white mx-[150px] my-[200px]">
          <p>UPCOMING LAUNCH</p>
          <h1 className="font-bold text-2xl mt-4">CRS-25 MISSION</h1>
          <button className="border-2 py-2 px-4 mt-4">REWACH</button>
        </div>
        
      </nav>
      <SectionA />
      <SectionB /> 
      <SectionC />
      <SectionE />
      <SectionF />
      
      <Footer />
    </>
  );
}

export default Layout;

