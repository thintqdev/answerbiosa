import React from "react";
import "./Introduction.css";
function Introduction() {
  return (
    <div className="Introduction">
      <div className="slogan">
        <h1>Đây là công cụ mà bạn </h1>
        <h1>  muốn hỏi bất cứ điều gì</h1>
      </div>
      <div className="feature">
        <div className="item">
          <img
            src="https://findicons.com/files/icons/730/soft/128/faq.png"
            alt="faq"
          />
          <h3> Ask everything </h3>
        </div>
        <div className="item">
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/128x128/shadow/security_badge.png"
            alt="sercurity"
          />
          <h3> Safe & sercurity</h3>
        </div>
        <div className="item">
          <img src="https://ps.w.org/wp-blog-and-widgets/assets/icon-128x128.png" alt="blog" />
          <h3> Write blog </h3>
        </div>
        {/* <div className="item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Opml-icon-128x128.png"
            alt="wordpress"
          />
          <h3> Wordpress </h3>
        </div> */}
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/3800/3800518.png" alt="community" />
          <h3> A big community </h3>
        </div>
      </div>
    </div>
  );
}
export default Introduction;
