import React from "react";
class MainPage extends React.Component {
  state = {  }
  render() { 
    return ( <div>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
      <link rel="stylesheet" href="./css/styles.css" />
      <link rel="shortcut icon" href="./assets/NetflixN.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
      <title>Netflix</title>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark" id="navBarId">
        <a className="navbar-brand" href="mainpage.html">
          <img src="./assets/netflix_logo.png" alt height="50px" width="120px" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto d-none d-sm-none d-md-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link" href="#"> Home </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">TV Shows<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My List</a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto d-flex d-sm-flex d-md-flex d-lg-none">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="browse" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Browse
              </a>
              <div className="dropdown-menu rounded-0 customDropDown" aria-labelledby="navbarDropdown">
                <div id="smalltriangle" />
                <a className="dropdown-item text-white" href="#">Home</a>
                <a className="dropdown-item text-white" href="profil.html">TV Shows</a>
                <a className="dropdown-item font-weight-bold text-white" href="settings.html">Moviest</a>
                <a className="dropdown-item font-weight-bold text-white" href="#">Recently Added</a>
                <a className="dropdown-item font-weight-bold text-white" href="#">My List</a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="d-flex flex-row input-hidden" id="searchContainer">
                <a className="btn d-flex align-items-center" data-toggle="collapse" href="#searchfield" role="button" id="lensInSearchBox">
                  <ion-icon className="text-muted" style={{fontSize: 20}} name="search-outline" />
                </a>
                <input className="form-control mr-sm-2 bg-transparent border-0" type="search" id="searchField" placeholder="Title, People, Genres" aria-label="Search" />
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href>KIDS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href>
                <img className="mr-2" src="./assets/media/bell.png" alt width="25px" />
              </a>
            </li>
            <li className="nav-item dropdown" id="SearchDropDown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded" src="./assets/avatar.png" alt width="32px" />
                <span className="caret-down" />
              </a>
              {/* Items */}
              <div className="dropdown-menu dropdown-menu-right rounded-0 customDropDown" id="dropDown" aria-labelledby="navbarDropdown">
                <div id="smalltriangle" />
                <a className="dropdown-item text-white" href="#">
                  <img className="mr-2" src="./assets/Capture.PNG" alt width="32px" />Max
                </a>
                <a className="dropdown-item text-white" href="profil.html">Manage Profiles</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item font-weight-bold text-white" href="settings.html">Account</a>
                <a className="dropdown-item font-weight-bold text-white" href="#">Help Center</a>
                <a className="dropdown-item font-weight-bold text-white" href="#">Sign out from Netflix</a>
              </div>
              {/* end Items */}
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
      {/* Start Mainpage */}
      <div className="movie-gallary m-2 ml-4">
        <h5 className="text-light">Trending now</h5>
        <div id="trendingNow" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" style={{overflow: 'visible'}}>
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media0.webp" alt=" " />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media1.jpg" style={{width: 176}} alt=" " />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media2.webp" style={{width: 176}} alt />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media3.webp" style={{width: 176}} alt=" " />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media4.jpg" style={{width: 176}} alt=" " />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media5.webp" style={{width: 176}} alt />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media0.webp" style={{width: 176}} alt=" " />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media1.jpg" style={{width: 176}} alt=" " />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media2.webp" style={{width: 176}} alt />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media3.webp" style={{width: 176}} alt=" " />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media4.jpg" style={{width: 176}} alt=" " />
                </div>
                <div className="col-sm-6 col-md-2 d-flex">
                  <img className="img-gallary" src="./assets/media/media5.webp" style={{width: 176}} alt />
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#trendingNow" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#trendingNow" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* End Mainpage */}
      {/* start footer */}
      <footer className="page-footer">
        <div className="container flex-column">
          <div className="row social-media">
            <div className="col p-0">
              <ion-icon className="m-1" style={{fontSize: '2rem'}} name="logo-instagram" />
              <ion-icon className="m-1" style={{fontSize: '2rem'}} name="logo-twitter" />
              <ion-icon className="m-1" style={{fontSize: '2rem'}} name="logo-facebook" />
              <ion-icon className="m-1" style={{fontSize: '2rem'}} name="logo-youtube" />
            </div>
          </div>
          <div className="row text-muted">
            <div className="col">
              <ul className="navbar-nav">
                <li className="navbar-item">2</li>
                <li className="navbar-item">3</li>
                <li className="navbar-item">4</li>
                <li className="navbar-item">3</li>
                <li className="navbar-item">
                  <button className="btn btn-outline-secondary text-muted mt-3">
                    Service Code
                  </button>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="navbar-nav">
                <li className="navbar-item">3</li>
                <li className="navbar-item">4</li>
                <li className="navbar-item">4</li>
              </ul>
            </div>
            <div className="col">
              <ul className="navbar-nav">
                <li className="navbar-item">4</li>
                <li className="navbar-item">4</li>
                <li className="navbar-item">4</li>
              </ul>
            </div>
            <div className="col">
              <ul className="navbar-nav">
                <li className="navbar-item">2</li>
                <li className="navbar-item">3</li>
                <li className="navbar-item">4</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
      {/* Option 1: jQuery and Bootstrap Bundle (includes Popper) */}
      --&gt;
    </div>
     );
  }
}
 
export default MainPage;