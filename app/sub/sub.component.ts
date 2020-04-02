export default function subComponent() {
    return {
        controller: SubComponentController,
        template: require('./sub.component.html'),
        bindings: {
            name: '@'
        }
    };
}


class SubComponentController implements ng.IComponentController {

    static $inject = [];

    constructor(private name: string) {

    }

    $onInit() {
        console.log("Subcomponent initialised with name " + this.name);
    }
}
