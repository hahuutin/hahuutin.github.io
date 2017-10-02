window.onload = () => {
  const themes = ['#FEDA00', '#FF5733', '#C70039', '#900C3F', '#581845'];
  const index = Math.floor(Math.random() * themes.length);
  document.body.style.setProperty('--main-color', themes[index]);
}