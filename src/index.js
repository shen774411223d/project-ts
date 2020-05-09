var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.prototype.close = function (item) {
        console.log(item);
        return item;
    };
    Modal.alert = '123';
    return Modal;
}());
var modal = new Modal();
