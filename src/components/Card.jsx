import React from "react";
import "../styles/card.css";
import { FaArrowRight } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div
        style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div class="ova-heading-2 template1">
          <div class="sub-title-wrapper">
            <h4 class="sub-title">We Stand For</h4>
          </div>
          <h2 class="title">
            Educate, empower, <span class="title-word">and</span> engage
          </h2>
        </div>

        <div className="card--container">
          <div
            className="card"
            style={{
              width: "26rem",
              backgroundColor: "#F6EBFF",
              border: "none",
              borderRadius: "18px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Token-Powered Ecosystem</h5>
              <p className="card-subtitle mb-2 text-body-secondary card-para">
                GCC token holders enjoy voting rights on crucial decisions and
                exclusive access to airdrops. Earn GCC tokens as rewards for
                active participation, completing tasks, and through multiple
                airdrop opportunities.
              </p>
              <div className="arrow-icon">
                <a href="">Get Details Now</a>
                <FaArrowRight color="#04D493" />
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "26rem",
              backgroundColor: "#F3EFE9",
              border: "none",
              borderRadius: "18px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Rewarding Network Participation</h5>
              <p className="card-subtitle mb-2 text-body-secondary card-para">
                Participate in discussions, share your views and collaborate
                with like-minded individuals. Gain access to a plethora of
                benefits, including airdrops, ICOs, staking programs, and
                cuttingedge DeFi solutions.
              </p>
              <div className="arrow-icon">
                <a href="">Get Details Now</a>
                <FaArrowRight color="#04D493" />
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "26rem",
              backgroundColor: "#F3EFE9",
              border: "none",
              borderRadius: "18px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Rewarding Network Participation</h5>
              <p className="card-subtitle mb-2 text-body-secondary card-para">
                Participate in discussions, share your views and collaborate
                with like-minded individuals. Gain access to a plethora of
                benefits, including airdrops, ICOs, staking programs, and
                cuttingedge DeFi solutions.
              </p>
              <div className="arrow-icon">
                <a href="">Get Details Now</a>
                <FaArrowRight color="#04D493" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
