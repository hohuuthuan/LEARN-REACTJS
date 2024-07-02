import styles from "../home/home.css";
import gachmen from "../../assets/LOGO.png";
function Home() {
  return (
    <div className="container">
      <div className="row category">
        <div className="d-flex justify-content-center align-items-center">
          <h3 className="title-home">DANH MỤC</h3>
        </div>
        <div className="category-list">
          <div className="row">
            <div className="items cement col col-md-3 d-flex justify-content-center align-items-center">
              <a href="#">
                <div className="item-title d-flex justify-content-center align-items-center">
                  <h3>XI MĂNG</h3>
                </div>
              </a>
            </div>
            <div className="items sand  col col-md-3 d-flex justify-content-center align-items-center">
              <a href="#">
                <div className="item-title d-flex justify-content-center align-items-center">
                  <h3>CÁT</h3>
                </div>
              </a>
            </div>
            <div className="items stone col col-md-3 d-flex justify-content-center align-items-center">
              <a href="#">
                <div className="item-title d-flex justify-content-center align-items-center">
                  <h3>ĐÁ</h3>
                </div>
              </a>
            </div>
            <div className="items paint col col-md-3 d-flex justify-content-center align-items-center">
              <a href="#">
                <div className="item-title d-flex justify-content-center align-items-center">
                  <h3>SƠN</h3>
                </div>
              </a>
            </div>
          </div>

          <div className="row  mb-5">
            <div className="items wood col col-md-3 d-flex justify-content-center align-items-center">
              <a href="#">
                <div className="item-title d-flex justify-content-center align-items-center">
                  <h3>GỖ</h3>
                </div>
              </a>
            </div>
            <div className="items floor-Tiles col col-md-3 d-flex justify-content-center align-items-center">
              <a href="#">
                <div className="item-title d-flex justify-content-center align-items-center">
                  <h3>GẠCH MEN</h3>
                </div>
              </a>
            </div>
            <div className="items building-brick col col-md-3 d-flex justify-content-center align-items-center">
              <a href="#">
                <div className="item-title d-flex justify-content-center align-items-center">
                  <h3>GẠCH XÂY</h3>
                </div>
              </a>
            </div>
            <div className="items water-tank col col-md-3 d-flex justify-content-center align-items-center">
              <a href="#">
                <div className="item-title d-flex justify-content-center align-items-center">
                  <h3>BỒN NƯỚC</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row hot-products pt-5">
        <div className="d-flex justify-content-center align-items-center">
          <h3 className="title-home">SẢN PHẨM NỔI BẬT</h3>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="hot-products-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary"> See Profile </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="hot-products-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="hot-products-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="hot-products-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="hot-products-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="hot-products-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="hot-products-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="hot-products-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row best-seller pt-5">
        <div className="d-flex justify-content-center align-items-center">
          <h3 className="title-home">SẢN PHẨM BÁN CHẠY</h3>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="best-seller-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="best-seller-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="best-seller-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="best-seller-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="best-seller-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="best-seller-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="best-seller-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-5 d-flex justify-content-center align-items-center">
          <div className="best-seller-list">
            <div className="gach-men">
              <div className="card" style={{ width: "250px" }}>
                <img
                  className="card-img-top" src={gachmen} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
