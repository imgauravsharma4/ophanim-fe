import React from "react";

const ProcessSection = () => (

 <>

<div style={{position:"relative"}}>
<div className="container py-5">
  <div className="row text-center mb-5">
      <div className="col-12">
        <h1 className="display-4 mb-3">Our Process</h1>
        <p className="text-muted mb-4">
          How Ophanim Works: A Step-by-Step Guide.
          <br className="d-none d-md-block" />
          We understand the problem first, then make it go away....
        </p>
      </div>
    </div>
    <div style={{
      background: "#FFF9F0",
      padding: "12px",
      width: "fit-content",
      margin: "0 auto",
      borderRadius: "1000px"
    }}>
      <ul className="nav nav-pills  justify-content-center" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-seo-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-seo"
            type="button"
            role="tab"
            aria-controls="pills-seo"
            aria-selected="true"
            style={{
              color: "#061C3D"
            }}
          >
            SEO Work
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-creative-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-creative"
            type="button"
            role="tab"
            aria-controls="pills-creative"
            aria-selected="false"
            style={{ color: "#42526B" }}
          >

            Creative Work
          </button>
        </li>
      </ul>
    </div>


    <div className="tab-content" id="pills-tabContent" style={{marginTop:"50px"}}>
      <div
        className="tab-pane fade show active"
        id="pills-seo"
        role="tabpanel"
        aria-labelledby="pills-seo-tab"
      >
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <div
                className="bg-warning bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                style={{ width: "80px", borderRadius: "20px", height: "80px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-warning"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h2 className="h4 mb-3">Tackling Problems</h2>
              <p className="text-muted">
                We listen to our clients' problems and devise the most suitable strategy for their
                business growth. We also provide a report regarding the current issues the business
                is facing.
              </p>
            </div>


          </div>
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <div
                className="bg-warning bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                style={{ width: "80px", borderRadius: "20px", height: "80px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-warning"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h2 className="h4 mb-3">Tackling Problems</h2>
              <p className="text-muted">
                We listen to our clients' problems and devise the most suitable strategy for their
                business growth. We also provide a report regarding the current issues the business
                is facing.
              </p>
            </div>


          </div>
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <div
                className="bg-warning bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                style={{ width: "80px", borderRadius: "20px", height: "80px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-warning"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h2 className="h4 mb-3">Tackling Problems</h2>
              <p className="text-muted">
                We listen to our clients' problems and devise the most suitable strategy for their
                business growth. We also provide a report regarding the current issues the business
                is facing.
              </p>
            </div>


          </div>
        </div>
      </div>

      <div
        className="tab-pane fade"
        id="pills-creative"
        role="tabpanel"
        aria-labelledby="pills-creative-tab"
      >
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <div
                className="bg-info bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                style={{ width: "80px", borderRadius: "20px", height: "80px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-warning"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h2 className="h4 mb-3">Innovative Ideas</h2>
              <p className="text-muted">
                Our creative team designs innovative strategies tailored to your unique business
                goals. We collaborate to bring fresh perspectives to your challenges.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <div
                className="bg-info bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                style={{ width: "80px", borderRadius: "20px", height: "80px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-warning"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h2 className="h4 mb-3">Innovative Ideas</h2>
              <p className="text-muted">
                Our creative team designs innovative strategies tailored to your unique business
                goals. We collaborate to bring fresh perspectives to your challenges.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <div
                className="bg-info bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                style={{ width: "80px", borderRadius: "20px", height: "80px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-warning"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h2 className="h4 mb-3">Innovative Ideas</h2>
              <p className="text-muted">
                Our creative team designs innovative strategies tailored to your unique business
                goals. We collaborate to bring fresh perspectives to your challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  


  </div>
  <div className="striped-background"></div>
</div>
  </> 
 

);

export default ProcessSection;
