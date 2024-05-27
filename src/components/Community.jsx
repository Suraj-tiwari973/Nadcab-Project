import React from "react";
import "../styles/community.css";

const Community = () => {
  return (
    <>
      <div className="community-container">
        <div className="community-elem-container">
          <div className="community-elem">
            <div class="community-subtitle-wrapper">
              <h4 class="community-subtitle">Connect Wallet Now</h4>
            </div>
            <h2 class="community-title">
              Be a <span class="community-word">Part</span> Of Global Crypto
              Community
            </h2>
            <p className="community-description">
              Chat with Chatsonic that is GPT-4 powered from the comfort of your
              couch or while traveling. Let Chatsonic be your personal
              assistant!
            </p>
          </div>
          <div className="community-button-container">
            <div class="community-button">
              <a href="#" class="community-url-button">
                Connect Wallet Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
