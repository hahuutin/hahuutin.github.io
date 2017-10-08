window.onload = () => {
  // Random set of color + css variables
  const themes = ['#FF8360', '#7DCE82', '#3CDBD3', '#00FFF5', '#FFEA00', '#1565C0'];
  const index = Math.floor(Math.random() * themes.length);
  document.body.style.setProperty('--main-color', themes[index]);

  // Animated element when enter the page
  document.body.classList.add('animated');
}
