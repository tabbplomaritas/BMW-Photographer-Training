"use strict";

console.log("home.js connected");

const home = {
  templateUrl: '../templates/home.html',

  controller: ["PhotoService", function(PhotoService) {
    const vm = this;
    console.log("controller is a go");
    let toggler = document.querySelector(".collapse");


    //this is not working yet
    vm.getStarted = () => {
      console.log(toggler);
      $(".collapse").collapse();
    }


  }



  ]
}

angular
  .module("app")
  .component("home", home);