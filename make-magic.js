console.log("%c😁Hello World...!!! %cYou're curious about my site, right? Feel free to explore it! I hope you find something useful👏", "color: #fff; font-size: 30px; background: red", "color: #fff; font-size: 18px; background: blue");


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
