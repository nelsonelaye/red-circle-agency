window.addEventListener("mousemove", function (e) {
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  const X = e.clientX;
  const Y = e.clientY;

  // cursorDot.style.left = `${X}px`;
  // cursorDot.style.top = `${Y}px`;

  cursorOutline.style.left = `${X}px`;
  cursorOutline.style.top = `${Y}px`;
});
