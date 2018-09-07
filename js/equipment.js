"use strict";

console.log("equip.js connected");

const equip = {
  templateUrl: 'templates/equipment.html',

  controller: ["PhotoService", "$timeout", function(PhotoService, $timeout) {
    const vm = this;
    vm.equip = data[0];
    console.log(vm.equip);
    vm.clickedItem;
    let equipPopUp = document.querySelector("#equipCard_popUp");

    vm.equipPopShow = (item) => {
      console.log(item);
      vm.clickedItem = item;
      angular.element(equipPopUp).css("display", "flex").addClass("animated fadeIn");
      //remove animation class so that it can later be re-animated out
      $timeout(function(){
        angular.element(equipPopUp).removeClass("animated fadeIn");
      }, 1000)
    }

    vm.equipPopHide = () => {
      vm.clickedItem = {};
      console.log(vm.clickedItem);

      angular.element(equipPopUp).addClass("animated fadeOut");
      //remove the animation class again to allow for future animation
      $timeout(function(){
        angular.element(equipPopUp).css("display", "none");
        angular.element(equipPopUp).removeClass("animated fadeOut");
      }, 1000)

    }

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
  .component("equip", equip);