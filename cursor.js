<script>
const OPEN_CURSOR =
  "url('https://raw.githubusercontent.com/astridkzn/incredibly-strange-films/main/images/open.png') 16 16, auto";

const CLOSE_CURSOR =
  "url('https://raw.githubusercontent.com/astridkzn/incredibly-strange-films/main/images/close.png') 16 16, auto";

// curseur par défaut
document.body.style.cursor = OPEN_CURSOR;

// ajoute une classe au clic
document.addEventListener("mousedown", () => {
  document.body.style.cursor = CLOSE_CURSOR;
});

// remet le curseur à l'état open quand on relâche
document.addEventListener("mouseup", () => {
  document.body.style.cursor = OPEN_CURSOR;
});
</script>
