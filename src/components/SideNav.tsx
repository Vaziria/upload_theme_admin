import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { Path } from "../routes/path"
import TypedLink from "../routes/TypedLink"

interface MenuItem {
  name: string,
  path: Path,
  icon: string
}

const menuItem: MenuItem[] = [
  {
    name: 'Task',
    path: '/task',
    icon: 'fas fa-tasks'
  },
  {
    name: 'Tool',
    path: '/tool',
    icon: 'fas fa-hammer'
  },
  {
    name: 'Grab',
    path: '/customgrab',
    icon: 'fas fa-cloud-download-alt'
  }, 
  {
    name: 'Category Mapper',
    path: '/categmap',
    icon: 'fas fa-th-list'
  },
  {
    name: 'Detail Product',
    path: '/productstat',
    icon: 'far fa-chart-bar'
  }
] 

class SideNav extends React.Component<RouteComponentProps> {

  renderLink(menu: MenuItem): JSX.Element {
    let clsname = 'list-group-item navi-custom'
    const loc = this.props.location.pathname
    if(loc === menu.path){
      clsname += ' active' 
    }

    return (
      <TypedLink to={menu.path} params={{}} key={menu.path} className={clsname}><i className={menu.icon}></i> { menu.name }</TypedLink>
    )
  }

  render(): JSX.Element {
    return (
      <div className="col-2">
        <nav className="side-nav mb-1 navbar navbar-expand-lg navbar-dark">
            <nav className="nav mb-4">
              <h2 className="title-bot">Upload Tool</h2>
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
              { menuItem.map((menu) => this.renderLink(menu)) }
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(SideNav)

