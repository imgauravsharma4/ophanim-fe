import React from "react";
import Post from "../../assests/images/mainImage.svg";
import article from "../../assests/images/article.svg";
import NewsCard from "../../Components/NewsCard/NewsCard";

const ViewArticle = () => {
  return (
    <div>
      <div className="container">
        <div>
          <div className="text-center mb-5 position-relative">
            <img src={Post} alt="seo ranking" className="img-fluid" />
          </div>
          <div>
            <div>
              <h3
                className="position-absolute article-sub-heading"
              >
                5 Efficient Rules How to Organize
                <br /> Your Working Place
              </h3>
            </div>

            <p className=" position-absolute article-sub-heading1">Relationship tips couples therapists are giving all the time</p>
            <div className="position-absolute article-sub-heading2">
              <p style={{fontSize:"20px"}}>by Joanna Wellick</p>
              <span style={{fontSize:"16px", marginTop:"5px"}}>2 minute read</span>
              <span style={{fontSize:"16px",marginTop:"5px"}}>views</span>
            </div>
          </div>
          <div className="row">
            <div className="w-25% col-2" style={{ height: "83px" }}>
              <p>966</p>
              <p>Shares</p>
            </div>
            <div className="col-8">
              <div className="p-width">
                <p className="p-article">
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus lorem. Adipiscing veni amet
                  luctus enim sem libero tellus viverra venenatis aliquam.
                  Commodo natoque quam pulvinar elit.
                </p>
                <h2 className="p-heading">Eu ridiculus fringilla aenean</h2>
                <p>
                  Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
                  pretium metus nullam quam aenean sociis quis sem neque vici
                  libero. Venenatis nullam fringilla pretium magnis aliquam nunc
                  vulputate integer augue ultricies cras. Eget viverra feugiat
                  cras ut. Sit natoque montes tempus ligula eget vitae pede
                  rhoncus maecenas consectetuer commodo condimentum aenean.
                </p>
              </div>

              <div className="p-width">
                <p>=</p>
                <span>
                  Quis adipiscing ligula donec ullamcorper tellus. Id odio
                  vulputate aliquam nullam vitae tincidunt semper etiam quam
                  donec quis.
                </span>
                <p>Donec Massa Integer</p>
              </div>
              <div className="p-width">
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
                  <li>Mollis lorem vitae varius.</li>
                  <li>
                    Felis laoreet justo aenean curabitur donec consequat sit
                    nascetur tellus dapibus.
                  </li>
                  <li>
                    Maecenas imperdiet vitae vidi vel parturient eleifend mollis
                    eu libero.
                  </li>
                  <li>
                    Dictum libero felis feugiat fringilla sed etiam vel sem
                    nullam elit vitae eu.{" "}
                  </li>
                  <li>
                    Felis nec eget curabitur sapien nisi aliquam pretium donec
                    dapibus feugiat. Faucibus enim venenatis mus semper.
                  </li>
                </ol>
                <p>
                  Enim dapibus ante sapien eleifend dis vulputate quis viverra
                  ultricies vitae eros. Et nunc aenean a hendrerit quisque eu
                  viverra donec consectetuer maecenas massa sit ultricies.
                  Tellus ante quis vici elementum etiam.
                </p>
              </div>
              <div p-width>
                <h2>Faucibus nullam luctus felis pretium donec</h2>
                <p>
                  Amet tempus viverra ut libero nascetur id veni ridiculus
                  rhoncus. Dis donec cras ultricies. Eros vivamus enim nec nulla
                  semper imperdiet aenean montes dictum porttitor metus.
                </p>
                <div className="mb-5">
                  <img src={article} alt="seo ranking"  className="img-fluid" />
                </div>
                <div className="mb-5">
                  <img src={article} alt="seo ranking"  className="img-fluid" />
                </div>
                <div className="p-width">
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

                <div className="p-width">
                  <ol>
                    <li>Ultricies sit semper leo dolor maecenas.</li>
                    <li>
                      Magnis nam penatibus justo nec quis eget amet venenatis
                      integer rutrum eleifend commodo tincidunt.
                    </li>
                    <li>Aenean nunc pretium lorem ullamcorper leo.</li>
                    <li>Nec arcu ullamcorper lorem mus eu.</li>
                    <li>Elit natoque mollis quisque.</li>
                  </ol>
                </div>
                <div className="p-width">
                  Sit dis sed ante integer ullamcorper vel donec tellus a. Nisi
                  vici vulputate elit quis adipiscing aenean imperdiet justo
                  varius. Vel eget luctus a sem pede sit metus nulla maecenas.
                  Etiam eleifend curabitur lorem. Viverra faucibus sem ultricies
                  vitae etiam quam id feugiat in tellus vici ut. Tellus quam
                  varius commodo luctus aliquam nec amet nullam quis viverra sit
                  fringilla consectetuer.
                </div>
                <div className="p-width" style={{ marginBottom: "20px" }}>
                  <h2>Tincidunt veni tellus orci aenean consectetuer</h2>
                  <p>
                    Sociis consequat adipiscing sit curabitur donec sem luctus
                    cras natoque vulputate dolor eget dapibus. Nec vitae eros
                    ullamcorper laoreet dapibus mus ac ante viverra. A aenean
                    sit augue curabitur et parturient nisi sed enim. Nulla nec
                    quis sit quisque sem commodo ultricies neque. Lorem eget
                    venenatis dui ante luctus ultricies tellus montes. Quis in
                    sapien tempus.
                  </p>
                  <div className="mb-5">
                    <img src={article} alt="seo ranking"  className="img-fluid" />
                  </div>
                  <p>Ut pede leo libero cum ridiculus</p>
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
                <div className="p-width" style={{ marginBottom: "20px" }}>
                  <p>Eu ridiculus fringilla</p>
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
          <div>
            <h2>You May Also Like</h2>
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewArticle;
