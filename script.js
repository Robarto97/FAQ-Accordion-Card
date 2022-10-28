const questions = document.querySelectorAll("li>button");

questions.forEach((question) => {
  question.addEventListener("click", handleClick);
});

function handleClick(e) {
  const question = e.target;
  question.classList.toggle("show");
  question.classList.toggle("rotate");
  question.classList.toggle("bold");
}
