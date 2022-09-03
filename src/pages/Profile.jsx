import React, { ref } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Profile () {

  const slides = [
    {
      title: "Machu Picchu",
      subtitle: "Peru",
      description: "Adventure is never far away",
      image:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Chamonix",
      subtitle: "France",
      description: "Let your dreams come true",
      image:
        "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Mimisa Rocks",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Four",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Five",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function useTilt (active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }

      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };

      let el = ref.current;

      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };

      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);

    return ref;
  }

  const initialState = {
    slideIndex: 0
  };

  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };

  function Slide ({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

  }
  return (
    <div className="container">
      <ul className="profile-nav">
        <li>
          <i className="fa fa-home text-black home" />
        </li>
        <li>
          <a href="#" className="profile-address">Sapna's Profile</a>
        </li>
      </ul>
      <div className="card">
        <div className="card-profile row">
          <div className="card-header-profile col-md-3">
            <img src="https://picsum.photos/200" className="picture " />

          </div>
          <div className="card-info-profile col-md-9">
            <div className="d-flex">
              <h4>Sapna</h4>
              <img
                className="card-icon"
                alt="tick icon"
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
              />
            </div>
            <p>Numerology , Tarot</p>
            <p>emglish , Hindi</p>
            <p>Exp: 7 Years</p>
            <p><span className="money">USD 1.91</span>/min</p>
            <div className="card-context d-flex">
              <div className="card-message">
                <i className="fa-solid fa-message text-black"></i>
                <span>40K mins</span>
              </div>
              <div className="card-message">
                <i className="fa-solid fa-message text-black"></i>
                <span>15K mins</span>
              </div>
              <div className="card-message">
                <i className="fa-solid fa-message text-black"></i>
                <span>0 mins</span>
              </div>
            </div>
            <div className="card-button row">
              <div className="card-button-item col-md-5">
                <i className="fa fa-home" />
                <div className="item-info">
                  <h4>Start Chat</h4>
                  <p className="text-primary">Online in 4h 54m</p>
                </div>
              </div>
              <div className="card-button-item col-md-5">
                <i className="fa fa-home" />
                <div className="item-info">
                  <h4>Start Chat</h4>
                  <p className="text-danger">Currently offline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <Slider {...settings}>
          {slides.map((item, index) => {
            return <div className="card-carousel row ml-1" key={index} style={{ position: 'absolute' }}>
              <div className="card-top col-12 text-center" >
                <img src={item.image} alt={item.title} style={{ height: '300px', width: '500px' }} />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom text-center">
                <h3>{item.subtitle}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          })}
        </Slider>

      </div>


    </div >
  );
}
