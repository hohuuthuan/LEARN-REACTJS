import stylr from "../home/home.css"
function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="background-home d-flex justify-content-center align-items-center">
                        <h3 className="title-home">DANH MỤC</h3> 
                    </div>
                    <div className="category-list">
                        <div className="row mt-1">
                            <div className="col-sm-8 offset-sm-2 d-flex justify-content-between align-items-center">
                                <div className="items cement">
                                    <a href="#">
                                        <div className="item-title d-flex justify-content-center align-items-center">
                                            <h3>XI MĂNG</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="items sand">
                                    <a href="#">
                                        <div className="item-title d-flex justify-content-center align-items-center">
                                            <h3>CÁT</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="items stone">
                                    <a href="#">
                                        <div className="item-title d-flex justify-content-center align-items-center">
                                            <h3>ĐÁ</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="items paint">
                                    <a href="#">
                                        <div className="item-title d-flex justify-content-center align-items-center">
                                            <h3>SƠN</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5">
                            <div className="col-sm-8 offset-sm-2 d-flex justify-content-around align-items-center">
                                <div className="items wood">
                                    <a href="#">
                                        <div className="item-title d-flex justify-content-center align-items-center">
                                            <h3>GỖ</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="items floor-Tiles">
                                    <a href="#">
                                        <div className="item-title d-flex justify-content-center align-items-center">
                                            <h3>GẠCH MEN</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="items building-brick">
                                    <a href="#">
                                        <div className="item-title d-flex justify-content-center align-items-center">
                                            <h3>GẠCH XÂY</h3>
                                        </div>
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