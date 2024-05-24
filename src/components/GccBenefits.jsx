import React from "react";
import "../styles/gccBenefits.css";
import benefitImg from "../images/benefitImage.png";

const GccBenefits = () => {
  return (
    <>
      <div
        class="container mt-5 benefit--container"
        style={{ maxWidth: "100%" }}
      >
        <div
          class="row"
          style={{
            maxWidth: "1300px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <div class="col-md-6 benefit--image--container mt-5">
            <div className="benefit--image" >
              <img
                src={benefitImg}
                alt="benefit_section_image"
                width={390}
                height={390}
              />
            </div>
          </div>

          <div class="col-md-6 benefit--elements mt-5">
            <div class="sub-title-wrapper">
              <h4 class="sub-title">Connect Wallet To</h4>
            </div>
            <h2 class="title">
              Unlock the <span class="word">Benefits</span> of GCC
            </h2>
            <div class="elementor-widget-container">
              <p>
                <span style={{ fontWeight: 400 }}>
                  Global Crypto Community (GCC) is a secure online community
                  where you can connect with other crypto enthusiasts using your
                  digital wallet (like MetaMask or Trust Wallet) – privacy
                  guaranteed. Here, you’ll find tons of opportunities to grow
                  your crypto knowledge and holdings. Participate in airdrops,
                  which are basically free crypto giveaways, or invest in new
                  projects through ICOs (Initial Coin Offerings). You can even
                  earn rewards through staking programs and explore innovative
                  DeFi (Decentralized Finance) solutions.
                </span>
              </p>
            </div>

            <div class="ova-icon-list">
              <div class="content-icon-list column2">
                <div class="item">
                  <i class="fas fa-check"></i>
                  <h3 class="title">Stunning ICO's</h3>
                </div>
                <div class="item">
                  <i class="fas fa-check"></i>
                  <h3 class="title">Higher Staking Reward</h3>
                </div>
                <div class="item">
                  <i class="fas fa-check"></i>
                  <h3 class="title">Community Driven</h3>
                </div>
                <div class="item">
                  <i class="fas fa-check"></i>
                  <h3 class="title">Airdrops Advantages </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GccBenefits;
