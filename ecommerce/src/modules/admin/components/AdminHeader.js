import React from 'react'


const AdminHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <a className="navbar-brand" href="!#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="!#"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  role="buttom"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  MiNombre
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Mi perfil
                  </a>
                  <div className="dropdown-divider">
                    <a className="dropdown-item" href="#">
                      Cerrar sesion
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default AdminHeader
