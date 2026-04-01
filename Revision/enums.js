var exampe;
(function (exampe) {
    exampe[exampe["active"] = 5] = "active";
    exampe[exampe["deactie"] = 6] = "deactie";
    exampe[exampe["normal"] = 7] = "normal";
    exampe[exampe["undefined"] = 8] = "undefined";
})(exampe || (exampe = {}));
console.log(exampe);
