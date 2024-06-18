import styles from "./header.css";
import logo from "../../assets/logo-shop-electronic-device.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return(
      <div className="Header container-fluid">
        <div className="background-header row align-items-center">
          <div className="col-sm-1 d-none d-md-block">
            <div className="logo"><a href="#"><img src={logo} alt="logo shop"></img></a></div>
          </div>
          <div className="col-sm-5">
            <ul className="ul-nav d-flex mt-3 ">
                <a href="#"><li>Trang chủ </li></a>
                <a href="#"><li>Giới thiệu</li></a>
                <a href="#"><li>Sản phẩm  </li></a>
                <a href="#"><li>Tin tức   </li></a>
                <a href="#"><li>Liên hệ   </li></a>
            </ul>
          </div>
          <div className="search col-sm-4">  
            <div className="input-group rounded">
              <input type="search" class="form-control" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                  <i style={{width: "35px"}} className="fas fa-search"></i>
                </span>
            </div>
          </div>
          <div className="col-sm-2 d-none d-sm-block">
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