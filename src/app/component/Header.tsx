import Image from "next/image"
import blacklogoImage from "../public/blacklogoImage.png";

const Header = () =>{
return (
<header className="" >


    <nav className='grid-cols-1 sm:grid-cols-3 lg:grid-cols-4'>
     <ul className="display: flex text-lg text-align:center bg-amber-800 justify-evenly font-dark items-start gap-1">
        
        <div className="text-2xl text-amber-300 font-bold text-left hover:bg-amber-100">Faryal Bibi</div>
        <li className="hover:bg-amber-100 rounded-md text-amber-300"><b>Home</b></li>
        <li className=" hover:bg-amber-100 rounded-md text-amber-300"><b>About</b></li>
        <li className=" hover:bg-amber-100 rounded-md text-amber-300"><b>Contact us</b></li>
        <li className=" hover:bg-amber-100 rounded-md text-amber-300"><b>Skills</b></li>
    </ul>   
    </nav>

</header>

)
}
export default Header