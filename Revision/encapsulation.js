var Encap = /** @class */ (function () {
    function Encap() {
        this.emp_id = 0;
        this.emp_name = "";
        this.emp_status = "";
    }
    Encap.prototype.setemp_id = function (emp_id) {
        this.emp_id = emp_id;
    };
    Encap.prototype.setemp_name = function (emp_name) {
        this.emp_name = emp_name;
    };
    Encap.prototype.setemp_status = function (status) {
        this.emp_status = status;
    };
    Encap.prototype.getemp_id = function () {
        return this.emp_id;
    };
    Encap.prototype.getemp_name = function () {
        return this.emp_name;
    };
    Encap.prototype.getemp_status = function () {
        return this.emp_status;
    };
    return Encap;
}());
var obj = new Encap();
obj.setemp_id(45);
obj.setemp_name("Badri");
obj.setemp_status("Active");
console.log(obj.getemp_id());
console.log(obj.getemp_name());
console.log(obj.getemp_status());
