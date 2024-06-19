import styles from "./header.css";
import logo from "../../assets/LOGO.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return(
      <div className="Header container-fluid">
        <div className="background-header row align-items-center d-flex justify-content-between align-items-center">
          <div className="col-2 col-sm-2"> 
            <div className="logo"><a href="#"><img src={logo} alt="logo shop"></img></a></div>
          </div>
          <div className="search col-8 col-sm-7">  
          {/* d-none d-sm-block */}
            <div className="input-group rounded ">
              <input type="search" class="form-control " placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0 " id="search-addon">
                  <i style={{width: "30px"}} className="fas fa-search"></i>
                </span>
            </div>
          </div>
          <div className="col-2 col-sm-2">
            <div className="card-and-user d-flex justify-content-center align-items-center">
              <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
              <a href="#"><i className="fa-solid fa-user"></i>         </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Header;  