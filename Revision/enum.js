var exampe;
(function (exampe) {
    exampe[exampe["active"] = 0] = "active";
    exampe[exampe["deactie"] = 1] = "deactie";
    exampe[exampe["normal"] = 2] = "normal";
    exampe[exampe["undefined"] = 3] = "undefined";
})(exampe || (exampe = {}));
console.log(exampe.active);
