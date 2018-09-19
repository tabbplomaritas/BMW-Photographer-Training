"use strict";

const workflow = {
  templateUrl: 'templates/workflow.html',

  controller: ["PhotoService", function(PhotoService) {
    const vm = this;


  }
  ]
}

angular
  .module("app")
  .component("workflow", workflow);