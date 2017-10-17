window.onload = () => {
  // Random set of color + css variables
  const themes = [
    '#f14357',
    '#53a2e3',
    '#f4ad49',
    '#6757e2',
    '#69de92',
    '#e7654d',
    '#f04576',
    '#52c7eb'
  ];
  const index = Math.floor(Math.random() * themes.length);
  document.body.style.setProperty('--main-color', themes[index]);

  // Animated element when enter the page
  document.body.classList.add('animated');
}
