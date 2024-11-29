document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const categoryLists = document.querySelectorAll('.category ul');

  toggleButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
          if (categoryLists[index].style.display === 'none') {
              categoryLists[index].style.display = 'block';
              this.textContent = '-';
          } else {
              categoryLists[index].style.display = 'none';
              this.textContent = '+';
          }
      });
  });

  const questionLinks = document.querySelectorAll('.question-link');
  questionLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetAnswerId = this.getAttribute('data-answer');
          const answers = document.querySelectorAll('.answer-area p');
          answers.forEach(answer => {
              answer.style.display = 'none';
          });
          const targetAnswer = document.getElementById(targetAnswerId);
          if (targetAnswer) {
              targetAnswer.style.display = 'block';
          }
      });
  });
});