import React from "react";


const ProcessSection = () => (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="display-4 mb-3">Our Process</h1>
          <p className="text-muted mb-4">
            How Ophanim Works: A Step-by-Step Guide.
            <br className="d-none d-md-block" />
            We understand the problem first, then make it go away....
          </p>
          
          <div className="d-flex justify-content-center gap-3 mb-4">
            <button className="btn btn-warning px-4 py-2 rounded-pill">
              SEO Work
            </button>
            <button className="btn btn-link text-dark text-decoration-none">
              Creative Work
            </button>
          </div>
        </div>
      </div>
  
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="text-center p-3">
            <div className="bg-warning bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center" style={{width:"80px", borderRadius:"20px", height:"80px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warning">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <h2 className="h4 mb-3">Tackling Problems</h2>
            <p className="text-muted">
              We listen to our clients problems and devise the most suitable strategy for their 
              business growth. We also provide a report regarding the current issues the business is facing.
            </p>
          </div>
        </div>
  
        <div className="col-12 col-md-4">
          <div className="text-center p-3">
            <div className="bg-warning bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center" style={{width:"80px", borderRadius:"20px", height:"80px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warning">
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.92 12.446a1 1 0 0 1 -.813.493h-1.5a1 1 0 0 1 -1 -1v-2a1 1 0 0 0 -1 -1h-3a1 1 0 0 0 -1 1v2a1 1 0 0 1 -1 1h-1.5a1 1 0 0 1 -.813 -.493a7.5 7.5 0 0 1 7.92 -12.446" />
                <path d="M12 8v3" />
                <path d="M12 14h.01" />
              </svg>
            </div>
            <h2 className="h4 mb-3">Brainstorming</h2>
            <p className="text-muted">
              We target the problem and define essential parameters to solve it. We then send you 
              reports for feedback and discussion, keeping the process moving in the desired direction.
            </p>
          </div>
        </div>
  
        <div className="col-12 col-md-4">
          <div className="text-center p-3">
            <div className="bg-warning bg-opacity-25 p-3 d-inline-flex  mb-3 align-items-center justify-content-center" style={{width:"80px", borderRadius:"20px", height:"80px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warning">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h2 className="h4 mb-3">Engineered Approach</h2>
            <p className="text-muted">
              We have the ability to achieve goals through a well-designed procedure that avoids 
              any last minute problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default ProcessSection;