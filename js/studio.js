"use strict";


const studio = {
  templateUrl: 'templates/studio.html',

  controller: ["PhotoService", function(PhotoService) {
    const vm = this;

    vm.carImages = data[1];

    //stops carousel from auto advancing
      $('.carousel').carousel({
        interval: false
    });
  }
  ]
}

angular
  .module("app")
  .component("studio", studio);