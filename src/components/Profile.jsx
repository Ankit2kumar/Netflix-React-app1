import React from "react";


class Profile extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
  {/* comment */}
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Bootstrap CSS */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
  <link href="./css/Ankit/styles.css" rel="stylesheet" />
  <link rel="shortcut icon" href="./assets/NetflixN.png" type="image/x-icon" />
  <title>Netflix</title>
  <nav className="navbar navbar-expand-lg navbar-dark" id="navBarId">
    <a className="navbar-brand ml-5" style={{marginLeft: 50}} href="mainpage.html"><img src="./assets/netflix_logo.png" alt height="50px" width="120px" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  </nav>
  <main className="main-content">
    <div className="container mx-auto" style={{width: 593}}>
      <div className="row row1">
        <div className="heading">
          <span><h1>Edit Profile</h1></span>
        </div>
      </div>
      <div className="row p-0 row2">
        <div className="col">
          <hr className="mt-2" />
        </div>
      </div>
      <div className="row row3 mt-3">
        <div className="col-3 d-flex justify-content-end row3Col1">
          <div className="avatar">
            <img className="py-0 img-fluid" src="./assets/avatar.png" alt="Profile Avatar" height="100px" />
          </div>
        </div>
        <div className="col row3Col2">
          <div className="row row3Col2.1">
            <div className="user-name">
              <input type="text" name="profileName" id="profileName" placeholder="Max" />
            </div>
          </div>
          <div className="row row3Col2.2">
            <div className="language-label mt-3">
              <label htmlFor="language" className>Language:</label>
            </div>
          </div>
          <div className="row row3Col2.3">
            <div className="dropdown mt-1">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">German</a></li>
                <li><a className="dropdown-item" href="#">French</a></li>
                <li>
                  <a className="dropdown-item" href="#">Danish</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row row3Col2.4">
            <div className="col">
              <hr className="middleHr" />
            </div>
          </div>
          <div className="row row3Col2.5">
            <label htmlFor="maturitySettings" id="maturitySettings">Maturity Settings:</label>
          </div>
          <div className="row row3Col2.6 mt-2">
            <span>
              <button type="button" id="maturityratings" className="btn btn-secondary">
                ALL MATURITY RATINGS
              </button>
            </span>
          </div>
          <div className="row row3Col2.7 mt-3">
            <label htmlFor="maturity-detail">Show titles of <strong>all maturity ratings</strong> for this
              profile.</label>
          </div>
          <div className="row row3Col2.8 mt-3">
            <span>
              <button type="button" id="edit" className="btn btn-outline-light">
                EDIT
              </button>
            </span>
          </div>
          <div className="row row3Col2.9 mt-3">
            <div className="col"><hr className="middleHr" /></div>
          </div>
          <div className="row mt-2">
            <span className="p-2">Autoplay Controls</span>
            <div className="col-12">
              <input className="form-check-input me-1" type="checkbox" defaultValue />
              <span>Autoplay next episodes in a series on all devices.</span>
            </div>
            <div className="col-12 mt-3">
              <input className="form-check-input me-1" type="checkbox" defaultValue />
              <span className>Autoplay previews while browsing on all devices.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row row4 mt-4">
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row row5 mt-2">
        <div className="col-2">
          <span>
            <button type="button" id="edit" className="btn btn-outline-light w-100">
              SAVE
            </button>
          </span>
        </div>
        <div className="col-5">
          <span><button type="button" id="edit" className="btn btn-outline-light w-100">
              CANCEL
            </button>
          </span>
        </div>
        <div className="col-5">
          <span>
            <button type="button" id="edit" className="btn btn-outline-light w-100">
              DELETE PROFILE
            </button>
          </span>
        </div>
      </div>
    </div>
  </main>
</div>


     );
  }
}
 
export default Profile;

