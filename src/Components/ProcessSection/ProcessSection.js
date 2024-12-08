import React from "react";
import Vector_12 from "../../assests/images/Vector12-flipped.png";
const ProcessSection = () => (
  <section className='section-wrapper vector_12-background'>
    <img src={Vector_12} alt='' className='img-fluid vector_12_img' />
    <div className='container'>
      <div className='row text-center mb-5'>
        <div className='col-12'>
          <h1 className='display-4 mb-3'>Our Process</h1>
          <p className='text-muted mb-4'>
            How Ophanim Works: A Step-by-Step Guide.
            <br className='d-none d-md-block' />
            We understand the problem first, then make it go away....
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#FFF9F0",
          padding: "12px",
          width: "fit-content",
          margin: "0 auto",
          borderRadius: "1000px",
        }}
      >
        <ul
          className='nav nav-pills  justify-content-center'
          id='pills-tab'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link active'
              id='pills-seo-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-seo'
              type='button'
              role='tab'
              aria-controls='pills-seo'
              aria-selected='true'
              style={{
                color: "#061C3D",
              }}
            >
              SEO Work
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-creative-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-creative'
              type='button'
              role='tab'
              aria-controls='pills-creative'
              aria-selected='false'
              style={{ color: "#42526B" }}
            >
              Creative Work
            </button>
          </li>
        </ul>
      </div>

      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          id='pills-seo'
          role='tabpanel'
          aria-labelledby='pills-seo-tab'
        >
          <div className='row g-4'>
            <div className='col-12 col-md-4'>
              <div className='text-center p-3'>
                <div
                  className='p-3 d-inline-flex mb-3 align-items-center justify-content-center'
                  style={{
                    width: "80px",
                    borderRadius: "20px",
                    height: "80px",
                    backgroundColor: "#FFEDB7",
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-warning'
                  >
                    <circle cx='11' cy='11' r='8' />
                    <path d='m21 21-4.3-4.3' />
                  </svg>
                </div>
                <h2 className='h4 mb-3'>Tackling Problems</h2>
                <p className='text-muted'>
                  We listen to our clients' problems and devise the most
                  suitable strategy for their business growth. We also provide a
                  report regarding the current issues the business is facing.
                </p>
              </div>
            </div>
            <div
              className='col-12 col-md-5 d-flex align-items-center justify-content-end pt-5'
              style={{
                position: "absolute",
                left: "0",
              }}
            >
              <div>
                <svg
                  width='210'
                  height='11'
                  viewBox='0 0 210 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.2'
                    d='M9 5.5H200.5'
                    stroke='#282828'
                    strokeDasharray='5 10'
                  />
                  <circle cx='204.5' cy='5.5' r='5.5' fill='#FFC20E' />
                  <circle cx='5.5' cy='5.5' r='5.5' fill='#FFC20E' />
                </svg>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='text-center p-3'>
                <div
                  className='p-3 d-inline-flex mb-3 align-items-center justify-content-center'
                  style={{
                    width: "80px",
                    borderRadius: "20px",
                    height: "80px",
                    backgroundColor: "#FFEDB7",
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-warning'
                  >
                    <circle cx='11' cy='11' r='8' />
                    <path d='m21 21-4.3-4.3' />
                  </svg>
                </div>
                <h2 className='h4 mb-3'>Tackling Problems</h2>
                <p className='text-muted'>
                  We listen to our clients' problems and devise the most
                  suitable strategy for their business growth. We also provide a
                  report regarding the current issues the business is facing.
                </p>
              </div>
            </div>
            <div
              className='col-12 col-md-8 d-flex align-items-center justify-content-center pt-5'
              style={{
                position: "absolute",
                right: "2rem",
              }}
            >
              <div>
                <svg
                  width='210'
                  height='11'
                  viewBox='0 0 210 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.2'
                    d='M9 5.5H200.5'
                    stroke='#282828'
                    strokeDasharray='5 10'
                  />
                  <circle cx='204.5' cy='5.5' r='5.5' fill='#FFC20E' />
                  <circle cx='5.5' cy='5.5' r='5.5' fill='#FFC20E' />
                </svg>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='text-center p-3'>
                <div
                  className='p-3 d-inline-flex mb-3 align-items-center justify-content-center'
                  style={{
                    width: "80px",
                    borderRadius: "20px",
                    height: "80px",
                    backgroundColor: "#FFEDB7",
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-warning'
                  >
                    <circle cx='11' cy='11' r='8' />
                    <path d='m21 21-4.3-4.3' />
                  </svg>
                </div>
                <h2 className='h4 mb-3'>Tackling Problems</h2>
                <p className='text-muted'>
                  We listen to our clients' problems and devise the most
                  suitable strategy for their business growth. We also provide a
                  report regarding the current issues the business is facing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className='tab-pane fade'
          id='pills-creative'
          role='tabpanel'
          aria-labelledby='pills-creative-tab'
        >
          <div className='row g-4'>
            <div className='col-12 col-md-4'>
              <div className='text-center p-3'>
                <div
                  className='bg-info bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center'
                  style={{
                    width: "80px",
                    borderRadius: "20px",
                    height: "80px",
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-warning'
                  >
                    <circle cx='11' cy='11' r='8' />
                    <path d='m21 21-4.3-4.3' />
                  </svg>
                </div>
                <h2 className='h4 mb-3'>Innovative Ideas</h2>
                <p className='text-muted'>
                  Our creative team designs innovative strategies tailored to
                  your unique business goals. We collaborate to bring fresh
                  perspectives to your challenges.
                </p>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='text-center p-3'>
                <div
                  className='bg-info bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center'
                  style={{
                    width: "80px",
                    borderRadius: "20px",
                    height: "80px",
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-warning'
                  >
                    <circle cx='11' cy='11' r='8' />
                    <path d='m21 21-4.3-4.3' />
                  </svg>
                </div>
                <h2 className='h4 mb-3'>Innovative Ideas</h2>
                <p className='text-muted'>
                  Our creative team designs innovative strategies tailored to
                  your unique business goals. We collaborate to bring fresh
                  perspectives to your challenges.
                </p>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='text-center p-3'>
                <div
                  className='bg-info bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center'
                  style={{
                    width: "80px",
                    borderRadius: "20px",
                    height: "80px",
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-warning'
                  >
                    <circle cx='11' cy='11' r='8' />
                    <path d='m21 21-4.3-4.3' />
                  </svg>
                </div>
                <h2 className='h4 mb-3'>Innovative Ideas</h2>
                <p className='text-muted'>
                  Our creative team designs innovative strategies tailored to
                  your unique business goals. We collaborate to bring fresh
                  perspectives to your challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
