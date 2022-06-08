import React from "react";
import './Menu.css'

function Menu() {
  return (
    <div className="Menu-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Everyday value</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Signature Boxes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Sharing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Promotions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Snakes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Midnight deals</a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              
            </ul>
            <form class="d-flex">
            <i class="bi bi-bag-fill"></i>
             
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu