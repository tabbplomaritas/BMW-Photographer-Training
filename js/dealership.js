"use strict";


const dealership = {
  templateUrl: 'templates/dealership.html',

  controller: ["PhotoService", "$timeout", function(PhotoService, $timeout) {
    const vm = this;

    //scrool to top stuff
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {

    let toTopBtn = document.querySelector(".backToTop");
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          angular.element(toTopBtn).css("display", "block");
      } else {
        angular.element(toTopBtn).css("display", "none");
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  vm.scrollToTop = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }




  }
  ]
}

angular
  .module("app")
  .component("dealership", dealership);