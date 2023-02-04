import {IoIosCall} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';
import onisanobg from '../images/onisa-logo-no-bg.png';
import {MdEmail} from 'react-icons/md';
function NavBar() {
    return (
        <
            div className ="text-center">
            <nav className ="bg-[#9e1b1d] w-100 p-0  ">
                <div>
                    <img src={onisanobg} alt="onisa logo" className="w-20 mb-10 bg-white p-2  absolute -top-2 left-40 bottom-0" style={{width: "150px"}}/>
                </div>
                <ul className ="flex justify-center text-white">
                    <li className ="flex flex-row  p-2">
                        <p className="px-2">0740767577</p>  <IoIosCall className="text-2xl" />
                    </li>
                    <li className ="flex flex-row  p-2">
                        <p className="px-2">onisa</p>  <AiFillInstagram className="text-2xl"/>
                    </li>
                    <li className ="flex flex-row  p-2">
                       <p className="px-2">info@onisadesigns.com</p>  <MdEmail className="text-2xl" />
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;