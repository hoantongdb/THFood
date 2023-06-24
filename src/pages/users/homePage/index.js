import { memo } from "react";
import './style.scss';


import img1 from './Image/1.jpg';
// import img2 from './Image/2.jpg';
// import img3 from './Image/3.jpg';
// import img4 from './Image/4.jpg';
// import img5 from './Image/5.jpg';

const HomePage = () => {
    return (
        <div>
            <div className="main-product">
                <div className="main-product_top">
                    Sản phẩm của chúng tôi
                </div>
                <div className="main-product_bottom">
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                            Cá nướng
                        </div>
                        <div className="main-product_bottom_box_3">
                        5.000 Đ
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Thêm vào giỏ hàng</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                            Cá nướng
                        </div>
                        <div className="main-product_bottom_box_3">
                        5.000 Đ
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Thêm vào giỏ hàng</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="main-product_bottom_box">
                        <div className="main-product_bottom_box_1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="main-product_bottom_box-2">
                            Cá nướng
                        </div>
                        <div className="main-product_bottom_box_3">
                        5.000 Đ
                        </div>
                        <div >
                            <button className="main-product_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Thêm vào giỏ hàng</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default memo(HomePage);