import dialogConfig from "../components/dialog/index.vue"
class Dialog {
    constructor(Vue, options) {
        this.options = options;
        this. DialogClass = Vue.extend(dialogConfig);
        Dialog.DialogComponent = this.getDialogComponent();
        this.open();
    }
}

new Dialog()

