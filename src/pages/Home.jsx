import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import privacy from "../images/privacy.png";
import check from "../images/check.png";
import metamask from "../images/metamask-icon.png";
import secure from "../images/secure.png";
import avatar from "../images/avatar.png";
import MarqueeAnimation from "../components/Morquee";
import Card from "../components/Card";
import GccBenefits from "../components/GccBenefits";
import GccPresale from "../components/GccPresale";
import ZigzagDivs from "../components/ZigzagDivs";

const Home = () => {
  return (
    <>
      <div className="elem--container">
        <Navbar />
        <div class="container mt-3">
          <div class="row">
            <div class="col md-8 left--container">
              <div className="subtitle--wrapper">
                <h4 className="text">GLOBAL CRYPTO COMMUNITY</h4>
              </div>
              <div className="title">
                <div className="wrap--word">
                  <h3 className="word">
                    Privacy-Focused,
                    <img
                      src={privacy}
                      alt=""
                      style={{ height: "58px", width: "58px" }}
                    />
                    Community-Driven
                  </h3>
                </div>
              </div>

              <div className="para--container mt-3">
                <p>
                  Discover a world of exclusive benefits when you join the GCC
                  community. As a member, you ll gain access to a plethora of
                  opportunities that empower your crypto journey while
                  prioritizing your privacy and security.
                </p>
              </div>

              <div className="list--container">
                <div className="list">
                  <img
                    src={check}
                    alt="check_image"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  />
                  <p>Top Performing ICO's</p>
                </div>
                <div className="list">
                  <img
                    src={check}
                    alt="check_image"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  />
                  <p>Best Rewards on Staking</p>
                </div>
                <div className="list">
                  <img
                    src={check}
                    alt="check_image"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  />
                  <p>Stunning Rewards</p>
                </div>
                <div className="list">
                  <img
                    src={check}
                    alt="check_image"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  />
                  <p>Defi-Ecosystem</p>
                </div>
                <div className="list d-flex">
                  <img
                    src={check}
                    alt="check_image"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  />
                  <p>Privacy Protected</p>
                </div>
              </div>

              <div className="widget--container d-flex align-items-center mt-4">
                <div>
                  <a href="" className="wallet">
                    Connect Wallet Now
                  </a>
                </div>
                <div className="widget--image">
                  <img
                    src={metamask}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <div className="widget--image">
                  <img
                    src={secure}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
              </div>
            </div>

            <div class="col md-4 right--container">
              <div className="avatar--container">
                <div className="avatar">
                  <img src={avatar} alt="avatar_image" />
                </div>
                <div className="avatar--text">
                  <h5>Here are best ICO's</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeAnimation/>
      <Card/>
      <GccBenefits/>
      <GccPresale/>
      <ZigzagDivs/>
    </>
  );
};

export default Home;
