"use strict";

console.log("home.js connected");

const home = {
  templateUrl: 'templates/home.html',

  controller: ["PhotoService", function(PhotoService) {
    const vm = this;
    console.log("controller is a go");
    let toggler = document.querySelector(".collapse");
    let nav = document.querySelector(".navbar-collapse");
    let navLink = document.querySelectorAll(".nav-link");

    vm.hideNav = () => {
      console.log("hidenav");

      angular.element(nav).removeClass("show");
    }
  }



  ]
}

angular
  .module("app")
  .component("home", home);