import React from "react";
import "../styles/gccPresale.css";

const GccPresale = () => {
  return (
    <>
      <div className="presale--container">
        <div class="container">
          <div class="row">
            <div class="col-md-8 left--div">
              <div className="para--container">
                <p
                  style={{
                    textAlign: "center",
                    paddingLeft: "3%",
                    paddingRight: "3%",
                  }}
                >
                  WE'RE BUILDING A VIBRANT ECOSYSTEM AND YOU HAVE THE EXCLUSIVE
                  OPPORTUNITY TO BE A PART OF IT FROM THE GROUND FLOOR.
                </p>
              </div>

              <div className="gcc--position">
                <div class="sub-title-wrapper">
                  <h4 class="sub-title">Join the GCC crypto presale</h4>
                </div>
                <h2 class="presale--title">
                  GCC <span class="presale--word">Presale:</span> Your Chance to
                  Shape the Future
                </h2>
                <div className="presale--para">
                  <p>
                    Now’s your chance to be a part of something groundbreaking –
                    join the GCC presale and secure your spot in this
                    revolutionary ecosystem. Join effortlessly using your crypto
                    wallet, credit or debit cards, Apple Pay, or Google Pay.
                    Become a valued member of our community and embrace the
                    simplicity of connection today.
                  </p>
                </div>
              </div>
            </div>


            <div class="col-md-4 right--div">
                <div className="counter--container">
                    <h2 className="countdown--title">Pre-sale will Live In</h2>
                    <div className="countdown--box--container">
                        <div className="countdown--box">
                            <div className="count--down--box">7</div>
                            <p className="countdown--lable">Days</p>
                        </div>
                        <div className="countdown--box">
                        <div className="count--down--box">22</div>
                            <p className="countdown--lable">Hours</p>
                        </div>
                        <div className="countdown--box">
                        <div className="count--down--box">34</div>
                            <p className="countdown--lable">Minuts</p>
                        </div>
                        <div className="countdown--box">
                        <div className="count--down--box">59</div>
                            <p className="countdown--lable">Seconds</p>
                        </div>
                    </div>

                </div>

                <div className="counter--text">
                    <p>Pre Sale</p>
                </div>

                <div className="animated--div">
                    <div className="animated--div--back">
                        {""}
                    </div>
                </div>
                <div className="animated--notes">
                    <p>Pre Sale</p>
                    <p>Soft Cap</p>
                    <p>Bonus</p>
                </div>
                <div className="button--container">
                    <a href="" className="wallet">Connect Wallet Now</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GccPresale;
