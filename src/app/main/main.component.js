export default function mainComponent() {
    return {
        controller: mainComponentCtrl,
        template: require('./main.component.html'),
        bindings: {
            title: '@'
        }
    };
}

mainComponentCtrl.$inject = ['dummyService'];

function mainComponentCtrl(dummyService) {
    let $ctrl = this;
    $ctrl.externalData = {};
    $ctrl.$onInit = init;

    function init() {
        dummyService.fetchExternal()
            .then(function (data) {
                $ctrl.externalData = data;
            })
    }
}
