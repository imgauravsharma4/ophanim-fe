import React from "react";

const PortfolioSection = () => (
    <div className="container px-5" style={{ paddingTop: '120px' }}>
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 col-lg-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <h1 className="display-3 fw-semibold m-0" style={{ fontFamily: 'serif' }}>Portfolio</h1>
            <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                 style={{ width: '48px', height: '48px', cursor: 'pointer' }}>
          <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.94873" y="0.806396" width="62" height="62" rx="31" fill="#2C313F"/>
<rect width="50" height="50" rx="25" transform="matrix(1 1.74846e-07 1.74846e-07 -1 6.94873 56.8064)" fill="#FFC20E"/>
<path d="M38.1903 26.5648C38.1903 26.0125 37.7426 25.5648 37.1903 25.5648L28.1903 25.5648C27.638 25.5648 27.1903 26.0125 27.1903 26.5648C27.1903 27.1171 27.638 27.5648 28.1903 27.5648L36.1903 27.5648L36.1903 35.5648C36.1903 36.1171 36.638 36.5648 37.1903 36.5648C37.7426 36.5648 38.1903 36.1171 38.1903 35.5648L38.1903 26.5648ZM27.0103 38.159L37.8974 27.2719L36.4832 25.8577L25.5961 36.7448L27.0103 38.159Z" fill="#2C313F"/>
</svg>

            </div>
          </div>
          <p className="text-secondary fs-5">Take a look at some of our work</p>
        </div>
  
        <div className="col-12 col-lg-8">
          <h2 className="fw-normal lh-base" 
              style={{ 
                fontSize: '32px', 
                color: '#333',
                fontFamily: 'serif'
              }}>
            Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. 
            Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>
      </div>
    </div>
  );
  
  export default PortfolioSection;
