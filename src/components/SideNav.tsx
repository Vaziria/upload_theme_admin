import React from "react"
import TypedLink from "../routes/TypedLink"

export default class SideNav extends React.Component {
  render(): JSX.Element {
    return (
      <div className="col-2">
        <nav className="side-nav mb-1 navbar navbar-expand-lg navbar-dark">
            <nav className="nav mb-4">
              <h2 className="title-bot">Upload Tool</h2>
              <span className="versi">v3.0.25</span>
          </nav>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-4" ng-controller="rootNavController">
            <ul className="list-group list-group-flush ul-navi-custom">
              <a href="/#!/spin" className="list-group-item navi-custom"><i className="fab fa-less"></i> Spin</a>
              
              <a href="/#!/setting" className="list-group-item navi-custom"><i className="fas fa-cloud-download-alt"></i> Setting</a>
              
              <a href="/#!/akun" className="list-group-item navi-custom"><i className="fas fa-users"></i> Akun</a>
              <a href="/#!/product" className="list-group-item navi-custom"><i className="fas fa-cubes"></i> Product</a>
              <a href="/#!/tool" className="list-group-item navi-custom"><i className="fas fa-hammer"></i> Tools</a>
              
              {/* active not implemented */}
              <TypedLink to='/customgrab' params={{}} className="list-group-item navi-custom"><i className="fas fa-cloud-download-alt"></i> Custom Grab</TypedLink>
              
              
              <a href="/#!/categmap" className="list-group-item navi-custom"><i className="fas fa-th-list"></i> Mapper Category</a>
              <a href="/#!/productstat" className="list-group-item navi-custom"><i className="far fa-chart-bar"></i> Detail Product</a>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
