import styles from './footer.css';
import logoZalo from "../../assets/zalo.webp";
function Footer(){
    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <h6 className="footer-title d-flex justify-content-center align-items-center">ĐỊA CHỈ LIÊN HỆ</h6> 
                        <h6><b>Cần thơ</b></h6>
                        <p><i class="fa-solid fa-location-dot"></i> Hẻm 6, đường Trần Vĩnh Kiết, phường An Bình, quận Ninh Kiều, TP Cần Thơ</p>
                        <h6><b>Đồng Tháp</b></h6>
                        <p><i class="fa-solid fa-location-dot"></i> Ấp Tân Hòa, xã An Hiệp, huyện Châu Thành, tỉnh Đồng Tháp</p>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-title d-flex justify-content-center align-items-center">THÔNG TIN LIÊN HỆ</h6>
                        <div className="info-contact"><h6><b>Tên:</b> <span className='my-name'>Hồ Hữu Thuận</span></h6></div> 
                        <div className="info-contact"><h6><b><i class="fa-solid fa-phone"></i> Số điện thoại:</b> <span>0345492751</span></h6></div>
                        <div className="info-contact"><h6><img src={logoZalo}></img><b> Zalo:</b> <span>0345492751</span></h6></div>
                        <div><h6>
                            <b><i class="facebook fa-brands fa-facebook"></i> Facebook:</b> 
                            <a href="https://www.facebook.com/nhan.thien.73594/" target="_blank">
                            <span> Hữu Thuận </span></a> <i class="hand fa-solid fa-hand-point-left"></i>
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-title d-flex justify-content-center align-items-center">CÁC TRANG THÔNG TIN</h6>
                        <ul>
                            <li><h6><a href="#" target="_blank">Hướng dẫn mua hàng</a></h6></li>
                            <li><h6><a href="#" target="_blank">Hướng dẫn thanh toán</a></h6></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-title d-flex justify-content-center align-items-center">CÁC TRANG CHÍNH SÁCH</h6>
                        <ul>
                            <li><h6><a href="#" target="_blank">Chính sách bảo hành - Đổi trả sản phẩm</a></h6></li>
                            <li><h6><a href="#" target="_blank">Chính sách đặt hàng</a></h6></li>
                            <li><h6><a href="#" target="_blank">Chính sách bảo mật thông tin</a></h6></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="btn-backtop d-flex justify-content-center align-items-center"><a href="home"><i class="fa-solid fa-arrow-up"></i></a></div>
        </div>
    );
}
export default Footer;