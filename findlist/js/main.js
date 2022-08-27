var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};



function remove() {
  var del = document.getElementById("del");
  del.classList.toggle("view");
  body.classList.toggle("active");
  window.onclick = function (event) {
    if (event.target == del) {
      del.classList.toggle("view");
      body.classList.toggle("active");
    }
  };
}
function show() {
  var alert = document.getElementById("alert");
  alert.classList.toggle("show");
}
function merge() {
  var merge = document.getElementById("merge");
  merge.classList.toggle("view");
  body.classList.toggle("active");
  window.onclick = function (event) {
    if (event.target == merge) {
      merge.classList.toggle("view");
      body.classList.toggle("active");
    }
  };
}
function alert_merge() {
  var alerts = document.getElementById("alert-merge");
  alerts.classList.toggle("show");
}
function copy() {
  var coppy = document.getElementById("copy");
  coppy.classList.toggle("view");
  body.classList.toggle("active");
  window.onclick = function (event) {
    if (event.target == coppy) {
      coppy.classList.toggle("view");
      body.classList.toggle("active");
    }
  };
}
function alert_coppy() {
  var coppy_alert = document.getElementById("alert-coppy");
  coppy_alert.classList.toggle("show");
}
