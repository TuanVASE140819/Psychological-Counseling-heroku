import React from "react";

const PersonForm = () => {
  return (
    
      <div className="container_personform">
        <header className="header_personform">
        <h4>Điền vào thông tin chi tiết của đối tác</h4></header>
        <form action="#">
          <div className="form_first">
            <div className="details_personal">
              <span className="title">Người 1</span>
              <div className="fields">
                <div className="input-field">
                  <label>Họ và tên</label>
                  <input type="text" placeholder="Nhập tên của bạn" required />
                </div>
                <div className="input-field">
                  <label>Giới tính</label>
                  <select required>
                    <option disabled selected>
                    Chọn giới tính
                    </option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Ngày sinh</label>
                  <input type="date" placeholder="Nhập ngày sinh" required />
                </div>
                <div className="input-field">
                  <label>Nhập nơi sinh</label>
                  <input
                    type="text"
                    placeholder="Nhập nơi sinh"
                    required
                  />
                </div>
              </div>
            </div>
            {/* <div class="details ID">
              <button class="nextBtn">
                  <span class="btnText">Next</span>
                  <i class="uil uil-navigator"></i>
              </button>
          </div> */}
          </div>
          <div className="clear" />
          <div className="form_second">
          <div className="details_personal">
              <span className="title">Người 2</span>
              <div className="fields">
                <div className="input-field">
                  <label>Họ và tên</label>
                  <input type="text" placeholder="Nhập tên của bạn" required />
                </div>
                <div className="input-field">
                  <label>Giới tính</label>
                  <select required>
                    <option disabled selected>
                    Chọn giới tính
                    </option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Ngày sinh</label>
                  <input type="date" placeholder="Nhập ngày sinh" required />
                </div>
                <div className="input-field">
                  <label>Nhập nơi sinh</label>
                  <input
                    type="text"
                    placeholder="Nhập nơi sinh"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="horoscop_bottom">
          <h4>Match Horoscope</h4>
        </div>
      </div>
    
  );
};

export default PersonForm;
