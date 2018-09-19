"use strict";
console.log("module connected");

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/home", {
        template: "<home></home>"
      })
      .when("/equip", {
        template: "<equip></equip>"
      })
      .when("/studio", {
        template: "<studio></studio>"
      })
      .when("/workflow", {
        template: "<workflow></workflow>"
      })
      .when("/dealership", {
        template: "<dealership></dealership>"
      })
      .otherwise({ redirectTo : "/home" })
  });