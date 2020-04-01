export default function mainComponent() {
    return {
        controller: mainComponentCtrl,
        template: require('./main.component.html')
    };
}

mainComponentCtrl.$inject = [];

function mainComponentCtrl() {
    let ctrl = this;

    ctrl.$onInit = init;

    function init() {
        ctrl.title = "Main Component Works";
    }
}
