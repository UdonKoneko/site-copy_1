function scrollwindow(elem) {
  var left = document.getElementById(elem).getBoundingClientRect().left;
  var top = document.getElementById(elem).getBoundingClientRect().top;
  window.scrollTo({
    left: left,
    top: top,
    behavior: "smooth",
  });
}
