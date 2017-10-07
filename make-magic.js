window.onload = () => {
  // Random set of color + css variables
  const themes = [
    ['#FF8360', '#fff'],
    ['#7DCE82', '#fff'],
    ['#3CDBD3', '#fff'],
    ['#00FFF5', '#fff'],
  ];
  const index = Math.floor(Math.random() * themes.length);
  const theme = themes[index];
  document.body.style.setProperty('--main-color', theme[0]);
  document.body.style.setProperty('--text-color', theme[1]);

  // Animated element when enter the page
  document.body.classList.add('animated');
}
