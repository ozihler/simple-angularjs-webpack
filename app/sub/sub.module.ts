import SubComponent from "./sub.component";
import * as angular from "angular";

angular.module('mainModule')
    .component('subComponent', new SubComponent());
