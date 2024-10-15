import React from "react";
import SliderContainer from "../../Components/Slide/SliderContainer";

function Home() {
  return (
    <div>
      <div className='homebg'>
        <div className='container-wrapper'>
          <div className='left-section'>
            <h1>
              Unlock Your <br />
              <span className='highlight-text'>Brand Potential</span>
            </h1>
            <p className='subtext'>
              Generate <span className='bold-text'>500%</span> More revenue with
              us.
            </p>
            <button className='cta-button'>Get Started Now</button>
          </div>
          <div className='right-section'>
            <img src='/../images/marketing.png' alt='Marketing Campaign' />
          </div>
        </div>
      </div>
      <div className='frame2'>
        <h2 className='services-header'>Top Notch Services</h2>
        <p className='services-subheader'>
          Elevate your online presence with our comprehensive social media
          service
        </p>
        <div className='container-wrapper'>
          <div className='services-grid'>
            <div className='service-card'>
              <img
                src='/path/to/seo-icon.png'
                alt='SEO'
                className='service-icon'
              />
              <h3>Search Engine Optimization</h3>
              <p>
                Ophanim offers industry-proven SEO solutions tailored to your
                needs and keeps you at the top of the game. Our SEO experts have
                the expertise to increase your website traffic and enhance
                revenue.
              </p>
            </div>
            <div className='service-card'>
              <img
                src='/path/to/smo-icon.png'
                alt='SMO'
                className='service-icon'
              />
              <h3>Social Media Optimization</h3>
              <p>
                Increase your online visibility and connect with your target
                audience faster through social media platforms. Ophanim offers
                unparalleled SMO services that guarantee increased traffic,
                leads, and sales at a competitive rate.
              </p>
            </div>
            <div className='service-card'>
              <img
                src='/path/to/ppc-icon.png'
                alt='PPC'
                className='service-icon'
              />
              <h3>Pay Per Click</h3>
              <p>
                Gain immediate and consistent traffic and leads by implementing
                optimized advertising campaigns. Ophanim's Pay-per-click
                marketing services will enable you to achieve immediate
                visibility on Google Ads.
              </p>
            </div>
            <div className='service-card'>
              <img
                src='/path/to/orm-icon.png'
                alt='ORM'
                className='service-icon'
              />
              <h3>Online Reputation Management</h3>
              <p>
                Boost your revenue by enhancing your online image and building
                customer trust. By proactively managing your online reputation,
                you can increase trust, leads, and sales.
              </p>
            </div>
            <div className='service-card'>
              <img
                src='/path/to/ecommerce-seo-icon.png'
                alt='ECommerce SEO'
                className='service-icon'
              />
              <h3>ECommerce SEO</h3>
              <p>
                Enhance your revenue by leveraging eCommerce SEO services to
                connect with customers worldwide. Increase rankings, traffic,
                and sales for your online store.
              </p>
            </div>
            <div className='service-card'>
              <img
                src='/path/to/content-marketing-icon.png'
                alt='Content Marketing'
                className='service-icon'
              />
              <h3>Content Marketing</h3>
              <p>
                Google presents visitors with the most pertinent content based
                on their search intent. By providing high-quality content
                relevant to your audience, your business can enhance engagement
                and conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SliderContainer />
    </div>
  );
}

export default Home;
