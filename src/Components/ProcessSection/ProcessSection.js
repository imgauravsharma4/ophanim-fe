import React from 'react';
const ProcessSection = () => (
  <>
    <div>
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
        <div
          style={{
            background: '#FFF9F0',
            padding: '12px',
            width: 'fit-content',
            margin: '0 auto',
            borderRadius: '1000px',
          }}
        >
          <ul
            className="nav nav-pills  justify-content-center"
            id="pills-tab"
            role="tablist"
          >
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
                  color: '#061C3D',
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
                style={{ color: '#42526B' }}
              >
                Creative Work
              </button>
            </li>
          </ul>
        </div>

        <div
          className="tab-content"
          id="pills-tabContent"
          style={{
            marginTop: '50px',
            background: `url('data:image/svg+xml,%3Csvg%20width%3D%221000%22%20height%3D%22500%22%20viewBox%3D%220%200%201700%20700%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M313.61%20129.386C275.567%20249.368%20289.326%20616.761%20648.709%201126.47C1097.94%201763.61%201045.61%201656.83%201287.51%201909.71%22%20stroke%3D%22url%28%23paint0_linear_86_4087%29%22%20stroke-width%3D%22850%22%20stroke-dasharray%3D%2210%205%22%20%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear_86_4087%22%20x1%3D%22974.701%22%20y1%3D%221669.3%22%20x2%3D%221299.06%22%20y2%3D%221305.37%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23FFC700%22%20%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23FAFAFA%22%20stop-opacity%3D%220.64%22%20%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E') no-repeat center center`,
            backgroundSize: 'cover',
            padding: '20px',
          }}
        >
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
                    className="p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      borderRadius: '20px',
                      height: '80px',
                      backgroundColor: '#FFEDB7',
                    }}
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
                    We listen to our clients' problems and devise the most
                    suitable strategy for their business growth. We also provide
                    a report regarding the current issues the business is
                    facing.
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-md-5 d-flex align-items-center justify-content-end pt-5"
                style={{
                  position: 'absolute',
                  left: '0',
                }}
              >
                <div>
                  <svg width="210" height="11" viewBox="0 0 210 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M9 5.5H200.5" stroke="#282828" stroke-dasharray="5 10" />
                    <circle cx="204.5" cy="5.5" r="5.5" fill="#FFC20E" />
                    <circle cx="5.5" cy="5.5" r="5.5" fill="#FFC20E" />
                  </svg>

                </div>

              </div>
              <div className="col-12 col-md-4">
                <div className="text-center p-3">
                  <div
                    className="p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      borderRadius: '20px',
                      height: '80px',
                      backgroundColor: '#FFEDB7',
                    }}
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
                    We listen to our clients' problems and devise the most
                    suitable strategy for their business growth. We also provide
                    a report regarding the current issues the business is
                    facing.
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-md-8 d-flex align-items-center justify-content-center pt-5"
                style={{
                  position: 'absolute',
                  right: '2rem',
                }}
              >
                <div>
                  <svg width="210" height="11" viewBox="0 0 210 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M9 5.5H200.5" stroke="#282828" stroke-dasharray="5 10" />
                    <circle cx="204.5" cy="5.5" r="5.5" fill="#FFC20E" />
                    <circle cx="5.5" cy="5.5" r="5.5" fill="#FFC20E" />
                  </svg>

                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="text-center p-3">
                  <div
                    className="p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      borderRadius: '20px',
                      height: '80px',
                      backgroundColor: '#FFEDB7',
                    }}
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
                    We listen to our clients' problems and devise the most
                    suitable strategy for their business growth. We also provide
                    a report regarding the current issues the business is
                    facing.
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
                    style={{
                      width: '80px',
                      borderRadius: '20px',
                      height: '80px',
                    }}
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
                    Our creative team designs innovative strategies tailored to
                    your unique business goals. We collaborate to bring fresh
                    perspectives to your challenges.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="text-center p-3">
                  <div
                    className="bg-info bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      borderRadius: '20px',
                      height: '80px',
                    }}
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
                    Our creative team designs innovative strategies tailored to
                    your unique business goals. We collaborate to bring fresh
                    perspectives to your challenges.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="text-center p-3">
                  <div
                    className="bg-info bg-opacity-25 p-3 d-inline-flex mb-3 align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      borderRadius: '20px',
                      height: '80px',
                    }}
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
    </div>
  </>
);

export default ProcessSection;
