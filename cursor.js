const OPEN_CURSOR =
  "url('https://raw.githubusercontent.com/astridkzn/incredibly-strange-films/main/images/open.png') 16 16, auto";

const CLOSE_CURSOR =
  "url('https://raw.githubusercontent.com/astridkzn/incredibly-strange-films/main/images/close.png') 16 16, auto";

// curseur par défaut
document.body.style.cursor = OPEN_CURSOR;

// au clic → close
document.addEventListener("click", () => {
  document.body.style.cursor = CLOSE_CURSOR;
});
