export default function subComponent() {
    return {
        controller: SubComponentController,
        template: require('./sub.component.html'),
        bindings: {
            name: '@'
        }
    };
}


class SubComponentController implements ng.IComponentController{

    static $inject = [];

    constructor() {}

    $onInit() {
        console.log("Subcomponent initialised");
    }
}
