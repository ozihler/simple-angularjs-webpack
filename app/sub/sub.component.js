export default function subComponent() {
    return {
        controller: subComponentController,
        template: require('./sub.component.html'),
        bindings: {
            name: '@'
        }
    };
}

subComponentController.$inject = [];

function subComponentController() {
    let $ctrl = this;
    $ctrl.$onInit = init;

    function init() {
        console.log("Subcomponent initialised");
    }
}
