import mainComponent from "./main.component";
import {dummyService} from "../shared/dummy.service";

angular.module('mainModule', [])
    .component('mainComponent', mainComponent());
