<script>
document.addEventListener('DOMContentLoaded', function () {
  // Auto-hide flash messages with fade-out
  const message = document.getElementById('flash-message');
  if (message) {
    setTimeout(() => {
      message.style.transition = "opacity 0.5s ease";
      message.style.opacity = "0";
      setTimeout(() => {
        message.style.display = "none";
      }, 500);
    }, 4000);
  }

  // Elements for inputs and their weighted display spans
  const weights = {
    mid_exam: 0.3,
    final_exam: 0.4,
    assignment: 0.2,
    quiz: 0.1
  };

  const inputs = ['mid_exam', 'final_exam', 'assignment', 'quiz'].map(id => document.getElementById(id));
  const weightedSpans = ['mid_weighted', 'final_weighted', 'assignment_weighted', 'quiz_weighted'].map(id => document.getElementById(id));
  const totalGradeSpan = document.getElementById('totalGrade');
  const gradeLabel = document.getElementById('gradeLabel');

  function calculateGrade() {
    let total = 0;
    inputs.forEach((input, i) => {
      const val = parseFloat(input.value) || 0;
      const weightedVal = val * Object.values(weights)[i];
      weightedSpans[i].textContent = weightedVal.toFixed(2);
      total += weightedVal;
    });
    totalGradeSpan.textContent = total.toFixed(2);

    let letter = "-";
    if (!isNaN(total)) {
      if (total >= 92) letter = "A+";
      else if (total >= 85) letter = "A";
      else if (total >= 75) letter = "B+";
      else if (total >= 65) letter = "B";
      else if (total >= 50) letter = "C";
      else letter = "F";
    }
    gradeLabel.textContent = letter;
  }

  inputs.forEach(input => input.addEventListener('input', calculateGrade));
  calculateGrade(); // initial calculation on page load
});
</script>
