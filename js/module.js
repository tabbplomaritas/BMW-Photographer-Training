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
      .otherwise({ redirectTo : "/home" })
  });