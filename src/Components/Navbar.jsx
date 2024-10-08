import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FaCircleUser } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img src="../../public/image/topic-logo.jpg" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/"> <span className='nav-itemSpan'>Home</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/#browsertopic"> <span className='nav-itemSpan'>Browse Topics</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/#howitswork"> <span className='nav-itemSpan'>How Its Works</span></Link>
                        </li>   
                        <li className="nav-item">
                        <Link className="nav-link" to="/#faqs"> <span className='nav-itemSpan'>Faqs</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/#contact"> <span className='nav-itemSpan'>contact</span>
                        </Link>
                        </li> 
                    </ul>
                        <Link to="../Components/loginpage.jsx">
                          <div className="nav-icon-wrap">
                            <FaCircleUser  className="nav-icon"/>
                          </div>
                        </Link>
                    </div>
                </div>
           </nav>
         </BrowserRouter>
     </div>
    );
};

export default Navbar;