import React from "react";
import { Link } from "react-router-dom";

export default function Chat() {
  const arrrCart = [
    {
      img: "https://picsum.photos/200",
      name: "Vũ Anh Tuấn",
      // a: "Vedic, Tarot",
      language: "Gia đình, Kinh doanh, Phong thủy",
      exp: "21 Tuổi",
      time: "Chỉ  từ 5 cua",
      active: false,
    },
    {
      img: "https://picsum.photos/200",
      name: "Vũ Anh Tuấn",
      // a: "Vedic, Tarot",
      language: "Gia đình, Kinh doanh, Phong thủy",
      exp: "21 Tuổi",
      time: "Chỉ  từ 5 cua",
      active: false,
    },
    {
      img: "https://picsum.photos/200",
      name: "Vũ Anh Tuấn",
      // a: "Vedic, Tarot",
      language: "Gia đình, Kinh doanh, Phong thủy",
      exp: "21 Tuổi",
      time: "Chỉ  từ 5 cua",
      active: false,
    },
    {
      img: "https://picsum.photos/200",
      name: "Vũ Anh Tuấn",
      // a: "Vedic, Tarot",
      language: "Gia đình, Kinh doanh, Phong thủy",
      exp: "21 Tuổi",
      time: "Chỉ  từ 5 cua",
      active: true,
    },
    {
      img: "https://picsum.photos/200",
      name: "Vũ Anh Tuấn",
      // a: "Vedic, Tarot",
      language: "Gia đình, Kinh doanh, Phong thủy",
      exp: "21 Tuổi",
      time: "Chỉ  từ 5 cua",
      active: true,
    },
    {
      img: "https://picsum.photos/200",
      name: "Vũ Anh Tuấn",
      // a: "Vedic, Tarot",
      language: "Gia đình, Kinh doanh, Phong thủy",
      exp: "21 Tuổi",
      time: "Chỉ  từ 5 cua",
      active: true,
    },
    {
      img: "https://picsum.photos/200",
      name: "Vũ Anh Tuấn",
      // a: "Vedic, Tarot",
      language: "Gia đình, Kinh doanh, Phong thủy",
      exp: "21 Tuổi",
      time: "Chỉ  từ 5 cua",
      active: false,
    },
  ];
  return (
    <div>
      <div className="chat-header">
        <div className="pay">Số dư khả dụng: 500 cua</div>
        {/* <div className="rechange">Rechange</div> */}
        <div className="filter">
          <i class="fa fa-filter"> </i>
          Lọc
        </div>
        <div className="Soft-by">
          <i class="fa fa-sort-amount-asc"></i>
          Sắp xếp theo
        </div>

        <div class="relative text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm theo tên"
            class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none "
          />
          <img src="https://img.icons8.com/material-outlined/24/000000/search.png" />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-3 mr-4 "
          ></button>
        </div>
      </div>

      <div className="cart">
        {arrrCart.map((item, index) => {
          setTimeout(() => {
            document
              .getElementsByClassName("card-background")[index]
              .classList.remove("loading");
          }, 5000);
          return (
            <div className="card-background loading" key={index}>
              <div className="card-body">
                <div className="card-l ">
                  <img className="image" src={item.img} />
                  <div className="start">
                    <span className="half"> ★ </span>
                    <span className="half"> ★ </span>
                    <span className="half"> ★ </span>
                    <span className="half"> ★ </span>
                    <span className="half"> ★ </span>
                    <div className="text-order">7883 orders</div>
                  </div>
                </div>
                <div className="card-c">
                  <Link to="/Profile">
                    <h5 className=""> {item.name} </h5>
                  </Link>
                  <p className="text-c">{item.language} </p>
                  {/* <p className="text-c"> {item.address} </p> */}
                  <p className="text-c"> {item.exp} </p>
                  <h6 className="text-h6"> {item.time} </h6>
                </div>
                <div className="card-r">
                  <Link to="/Profile">
                    <img
                      className="card-icon"
                      alt="tick icon"
                      src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    />
                  </Link>

                  <div className="card-button">
                    <Link to="/formchat">
                      <button className="button-chat">
                        {item.active ? "Trò chuyện" : "Chờ"}
                      </button>
                    </Link>
                    <p className="text-button"> Wait~10 </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
