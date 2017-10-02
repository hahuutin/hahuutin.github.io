// Random set of color + css variables
window.onload = () => {
  const themes = [
    ['#FF8360', '#000'],
    ['#7DCE82', '#000'],
    ['#3CDBD3', '#000'],
    ['#00FFF5', '#000'],
  ];
  const index = Math.floor(Math.random() * themes.length);
  const theme = themes[index];
  document.body.style.setProperty('--main-color', theme[0]);
  document.body.style.setProperty('--text-color', theme[1]);
}
