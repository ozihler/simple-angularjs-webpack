'use strict';
import angular from 'angular';
import './main/main.module';
import {dummyService} from "./shared/dummy.service";
 // Declare app level module which depends on views, and core components
angular.module('myApp', ['mainModule'])
    .service('dummyService', dummyService);
