import React from "react";

function HeaderConstantChinese() {
  return (
    <div>
      <div>
        <div className="header-container">
          <div className="header_contain">
            <div className="header_contain_left_side">
              <img
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/200x200/assets/images/horoscope_page/zodiac-signs-banner.webp"
                alt="zodiac"
                // width={500}
                // height={600}
              />
            </div>
            <div className="header_contain_right_side">
              <h1> kundli matchings</h1>
              <h2>Trò chuyện với Astrologer</h2>
              <h2>Miễn Phí</h2>
              <div className="chat-now-buttom">Trò chuyện Ngay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderConstantChinese;
