// Create random set of color themes
const themes = [
  '#f14357',
  '#53a2e3',
  '#f4ad49',
  '#6757e2',
  '#69de92',
  '#e7654d',
  '#f04576',
  '#52c7eb',
];
const index = Math.floor(Math.random() * themes.length);
const index_2 = index === 0 ? index + 1 : index - 1;

// Change CSS Variables
document.body.style.setProperty('--main-color', themes[index]);

// Styled Console Log
console.log(
  "
██╗░░██╗███████╗██╗░░░░░██╗░░░░░░█████╗░  ░██╗░░░░░░░██╗░█████╗░██████╗░██╗░░░░░██████╗░
██║░░██║██╔════╝██║░░░░░██║░░░░░██╔══██╗  ░██║░░██╗░░██║██╔══██╗██╔══██╗██║░░░░░██╔══██╗
███████║█████╗░░██║░░░░░██║░░░░░██║░░██║  ░╚██╗████╗██╔╝██║░░██║██████╔╝██║░░░░░██║░░██║
██╔══██║██╔══╝░░██║░░░░░██║░░░░░██║░░██║  ░░████╔═████║░██║░░██║██╔══██╗██║░░░░░██║░░██║
██║░░██║███████╗███████╗███████╗╚█████╔╝  ░░╚██╔╝░╚██╔╝░╚█████╔╝██║░░██║███████╗██████╔╝
╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝░╚════╝░  ░░░╚═╝░░░╚═╝░░░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░",
  `color: #fff; font-size: 30px; background-image: linear-gradient(to right, ${themes[index]}, ${themes[index_2]});`
);
console.log(
  "%cYou're curious about my site, right? Feel free to explore it! I hope you find something useful👏",
  `color: #fff; font-size: 18px; background-color: ${themes[index]}`
);

// Counter line of code (LOC)
function counterLOC(el) {
  const counterEl = document.getElementsByClassName(el);
  for (let i = 0; i < counterEl.length; i++) {
    counterEl[i].setAttribute('data-line', i + 1);
  }
}
counterLOC('js-line-html');
counterLOC('js-line-css');

// Years old
function yearsOld(birthday) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
document.getElementById('years-old').textContent = yearsOld(new Date(1992, 9, 3));
