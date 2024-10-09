import Navbar from "./Navbar";


const Herosec = () => {
    return (
        <div>
            <div id="herosection">
                <div className="container-fluid">
                    <Navbar/>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                               <div className="title-wrap">
                                 <h1>Discover.Learn.Enjoy</h1>
                                 <span>Platform for creatives around the world </span>
                                  <div className="search-wrap">
                                  <input type="search" placeholder="Search anything" />
                                  <button className="btn"><span>search</span></button>
                                 </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herosec;