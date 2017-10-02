// Random set of color + css variables
window.onload = () => {
  const themes = [
    ['#FF5733', '#fff'],
    ['#C70039', '#fff'],
    ['#900C3F', '#fff'],
    ['#581845', '#fff'],
  ];
  const index = Math.floor(Math.random() * themes.length);
  const theme = themes[index];
  document.body.style.setProperty('--main-color', theme[0]);
  document.body.style.setProperty('--text-color', theme[1]);
}
