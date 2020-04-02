
export default class SubComponent implements ng.IComponentOptions{
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public bindings: any;
    public template: string;

    constructor() {
        this.controller = SubComponentController;
        this.controllerAs = '$ctrl';
        this.template = require('./sub.component.html');
        this.bindings = {name: '@'};
    }
}

class SubComponentController implements  ng.IComponentController  {

    static $inject = [];

    constructor(private name: string) {

    }

    $onInit() {
        console.log("Subcomponent initialised with name " + this.name);
    }
}
