import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="max-w-screen-lg mx-auto py-10">
      <nav className="flex justify-between items-center text-[#e34635]">
        <div className="flex text-center gap-2">
        <img src="https://cdn0.iconfinder.com/data/icons/thin-home-living/57/thin-285_bear_animal_foot_steps-512.png" alt="" className="h-[40px] w-[40px]  "/>
        <h1 className="text-3xl font-bold">NLINE</h1></div>
        <ul className="flex items-center gap-10">
          <li className="font-semibold ">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold ">
          about
          </li>
          <li className="font-semibold">
            contact
          </li>
          <li className="font-semibold ">
            <Link to="/animals">animals</Link>
          </li>
         
          <li>
        <Link to="/form"> <button className="bg-[#e34635] px-7 py-2 text-white rounded">
              Register now
            </button></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
