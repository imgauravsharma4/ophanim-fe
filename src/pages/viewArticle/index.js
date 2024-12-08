import React from "react";
import article from "../../assests/images/article.svg";
import NewsCard from "../../Components/NewsCard/NewsCard";
import VectorImg from "../../assests/images/Vector.svg";
import Tick from "../../assests/images/tick.svg";
import social3 from "../../assests/images/social3.svg";

const ViewArticle = () => {
  return (
    <div>
      <div className='container'>
        <div>
          <div className='hero-container'>
            <div className='hero-section position-relative'>
              <div className='hero-bg'></div>

              <div className='hero-content'>
                <div className='tags-container mb-4'>
                  <span className='tag'>Aenean Eleifend</span>
                  <span className='tag'>Aenean Eleifend</span>
                  <span className='tag'>Aliquam</span>
                </div>

                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-lg-8'>
                      <h1 className='hero-title mb-3'>
                        5 Efficient Rules How to Organize Your Working Place
                      </h1>
                      <p className='hero-subtitle mb-4'>
                        Relationship tips couples therapists are giving all the
                        time
                      </p>
                      <div className='hero-meta'>
                        <span className='author'>by Joanna Wellick</span>
                        <span className='read-time'>2 minute read</span>
                        <span className='views'>13k views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div
              className='w-25% col-2'
              style={{ height: "83px", paddingTop: "100px" }}
            >
              <p className='left-no'>966</p>
              <p>Shares</p>
              <div className='d-flex flex-column'>
                <div>
                  {" "}
                  <img
                    src={social3}
                    width={50}
                    alt='img'
                    className='img-fluid'
                  />
                  <span>528</span>
                </div>
                <img src={social3} width={50} alt='img' className='img-fluid' />
                <div>
                  {" "}
                  <img
                    src={social3}
                    width={50}
                    alt='img'
                    className='img-fluid'
                  />
                  <span>528</span>
                </div>
                <img src={social3} width={50} alt='img' className='img-fluid' />
              </div>
            </div>
            <div className='col-8'>
              <div>
                <p className='p-article' style={{ paddingTop: "100px" }}>
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus lorem. Adipiscing veni amet
                  luctus enim sem libero tellus viverra venenatis aliquam.
                  Commodo natoque quam pulvinar elit.
                </p>
                <h2 className='p-heading' style={{ paddingTop: "50px" }}>
                  Eu ridiculus fringilla aenean
                </h2>
                <p style={{ paddingTop: "20px" }}>
                  Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
                  pretium metus nullam quam aenean sociis quis sem neque vici
                  libero. Venenatis nullam fringilla pretium magnis aliquam nunc
                  vulputate integer augue ultricies cras. Eget viverra feugiat
                  cras ut. Sit natoque montes tempus ligula eget vitae pede
                  rhoncus maecenas consectetuer commodo condimentum aenean.
                </p>
              </div>
              <div className='container py-4'>
                <hr className='my-0' />

                <div className='row align-items-center py-3'>
                  <div className='col-auto text-center'>
                    <img
                      className='img-fluid'
                      src={VectorImg}
                      alt='vector img'
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>

                  <div className='col'>
                    <p
                      className='mb-1 fw-normal'
                      style={{ fontSize: "16px", lineHeight: "1.5" }}
                    >
                      Quis adipiscing ligula donec ullamcorper tellus. Id odio
                      vulputate aliquam nullam vitae tincidunt semper etiam quam
                      donec quis.
                    </p>
                    <p className='mb-0 text-muted' style={{ fontSize: "14px" }}>
                      Donec Massa Integer
                    </p>
                  </div>
                </div>

                <hr className='my-0' />
              </div>

              <div style={{ paddingTop: "50px" }}>
                <p>
                  Ut eu sem aenean imperdiet. Hendrerit penatibus sem adipiscing
                  aliquet consequat nec orci nascetur. Etiam massa quam dolor
                  aenean maecenas sociis tellus consectetuer. In sit donec massa
                  integer nisi mus viverra odio ultricies ridiculus. Sapien sem
                  lorem. Aenean sem venenatis arcu tellus fringilla vulputate
                  quis vici nullam nec. Cum quam veni lorem elit aliquet pede in
                  enim. Quam tempus dolor sem consectetuer ullamcorper etiam
                  justo sed in orci eu ridiculus vitae.
                </p>
                <ol>
                  <li> 1. Mollis lorem vitae varius.</li>
                  <li>
                    2. Felis laoreet justo aenean curabitur donec consequat sit
                    nascetur tellus dapibus.
                  </li>
                  <li>
                    3. Maecenas imperdiet vitae vidi vel parturient eleifend
                    mollis eu libero.
                  </li>
                  <li>
                    4. Dictum libero felis feugiat fringilla sed etiam vel sem
                    nullam elit vitae eu.{" "}
                  </li>
                  <li>
                    5. Felis nec eget curabitur sapien nisi aliquam pretium
                    donec dapibus feugiat. Faucibus enim venenatis mus semper.
                  </li>
                </ol>
                <p>
                  Enim dapibus ante sapien eleifend dis vulputate quis viverra
                  ultricies vitae eros. Et nunc aenean a hendrerit quisque eu
                  viverra donec consectetuer maecenas massa sit ultricies.
                  Tellus ante quis vici elementum etiam.
                </p>
              </div>
              <div style={{ paddingTop: "50px" }}>
                <h2>Faucibus nullam luctus felis pretium donec</h2>
                <p style={{ paddingTop: "20px" }}>
                  Amet tempus viverra ut libero nascetur id veni ridiculus
                  rhoncus. Dis donec cras ultricies. Eros vivamus enim nec nulla
                  semper imperdiet aenean montes dictum porttitor metus.
                </p>
                <div className='mb-5' style={{ paddingTop: "20px" }}>
                  <img src={article} alt='seo ranking' className='img-fluid' />
                </div>
                <div className='mb-5'>
                  <img src={article} alt='seo ranking' className='img-fluid' />
                </div>
                <div>
                  <p>
                    Sit dis sed ante integer ullamcorper vel donec tellus a.
                    Nisi vici vulputate elit quis adipiscing aenean imperdiet
                    justo varius. Vel eget luctus a sem pede sit metus nulla
                    maecenas. Etiam eleifend curabitur lorem. Viverra faucibus
                    sem ultricies vitae etiam quam id feugiat in tellus vici ut.
                    Tellus quam varius commodo luctus aliquam nec amet nullam
                    quis viverra sit fringilla consectetuer.
                  </p>
                </div>

                <div>
                  <ol>
                    {[
                      "Ultricies sit semper leo dolor maecenas.",
                      "Magnis nam penatibus justo nec quis eget amet venenatis integer rutrum eleifend commodo tincidunt.",
                      "Aenean nunc pretium lorem ullamcorper leo.",
                      "Nec arcu ullamcorper lorem mus eu.",
                      "Elit natoque mollis quisque.",
                    ].map((text, index) => (
                      <div className='tick-para' key={index}>
                        <img src={Tick} alt='tick' className='img-fluid' />
                        <li>{text}</li>
                      </div>
                    ))}
                  </ol>
                </div>

                <div style={{ paddingTop: "20px" }}>
                  Sit dis sed ante integer ullamcorper vel donec tellus a. Nisi
                  vici vulputate elit quis adipiscing aenean imperdiet justo
                  varius. Vel eget luctus a sem pede sit metus nulla maecenas.
                  Etiam eleifend curabitur lorem. Viverra faucibus sem ultricies
                  vitae etiam quam id feugiat in tellus vici ut. Tellus quam
                  varius commodo luctus aliquam nec amet nullam quis viverra sit
                  fringilla consectetuer.
                </div>
                <div style={{ paddingTop: "50px" }}>
                  <h2>Tincidunt veni tellus orci aenean consectetuer</h2>
                  <p style={{ paddingTop: "30px" }}>
                    Sociis consequat adipiscing sit curabitur donec sem luctus
                    cras natoque vulputate dolor eget dapibus. Nec vitae eros
                    ullamcorper laoreet dapibus mus ac ante viverra. A aenean
                    sit augue curabitur et parturient nisi sed enim. Nulla nec
                    quis sit quisque sem commodo ultricies neque. Lorem eget
                    venenatis dui ante luctus ultricies tellus montes. Quis in
                    sapien tempus.
                  </p>
                  <div style={{ paddingTop: "20px" }}>
                    <img
                      src={article}
                      alt='seo ranking'
                      className='img-fluid'
                    />
                  </div>
                  <p style={{ color: "#ADADAD", paddingTop: "10px" }}>
                    Ut pede leo libero cum ridiculus
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    Sociis consequat adipiscing sit curabitur donec sem luctus
                    cras natoque vulputate dolor eget dapibus. Nec vitae eros
                    ullamcorper laoreet dapibus mus ac ante viverra. A aenean
                    sit augue curabitur et parturient nisi sed enim. Nulla nec
                    quis sit quisque sem commodo ultricies neque. Lorem eget
                    venenatis dui ante luctus ultricies tellus montes. Quis in
                    sapien tempus.
                  </p>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <p className='heading-bottom'>Eu ridiculus fringilla</p>
                  <p>
                    Nam dictum vitae penatibus ligula id sem eget ante faucibus
                    feugiat nascetur vel. Pretium vitae mus rhoncus sit maecenas
                    quam felis orci adipiscing. Aenean parturient eget quam. Leo
                    vel lorem sociis phasellus arcu dolor. Dis donec eu pede.
                  </p>
                  <p>
                    Venenatis ante veni nullam ridiculus penatibus vidi eu
                    consectetuer integer. Vulputate ipsum lorem nascetur
                    rhoncus. Aliquam vitae elit blandit enim eget laoreet.
                    Dapibus leo sociis quis nulla adipiscing amet integer sem
                    ullamcorper in maecenas eu imperdiet.
                  </p>
                  <p>
                    Ante blandit amet ultricies ut in nam massa rhoncus. Eget eu
                    massa nisi quis viverra dapibus aliquam. Id ridiculus lorem
                    ut amet dis orci tellus etiam aenean pellentesque.
                  </p>
                  Maecenas tempus aenean nulla viverra neque vel nec cras justo
                  sapien condimentum ut varius. Blandit sem etiam vel nullam
                  vulputate sociis amet varius dolor. Vitae a ut. Etiam rhoncus
                  ante sit. Nisi nullam donec dui eu phasellus a elementum elit
                  faucibus nec. Eros eu pulvinar pede luctus sit aenean lorem.
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "400px" }}>
            <NewsCard show={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewArticle;
