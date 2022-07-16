import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <h3 class="logo">Edyoda</h3>
            <span class="stories">Stories</span>
          </li>
          <li>
            <div class="dropdown">
              <button onclick="myFunction()" class="dropbtn">
                Explore Categories <i class="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#" class="active">
                  All
                </a>
                <a href="#">Artificial Intelligence</a>
                <a href="#">Cloud Computing</a>
                <a href="#">DevOps</a>
                <a href="#">Programming Languages</a>
                <a href="#">Mobile Application Development</a>
                <a href="#">Technology and Tools</a>
                <a href="#">Get a Job in a Tech Company</a>
                <a href="#">Others</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
