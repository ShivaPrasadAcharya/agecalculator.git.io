document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();
  calculateAge();
});

function calculateAge() {
  const birthYear = parseInt(document.getElementById('birthYear').value);
  const birthMonth = parseInt(document.getElementById('birthMonth').value);
  const birthDay = parseInt(document.getElementById('birthDay').value);

  const customYear = parseInt(document.getElementById('customYear').value);
  const customMonth = parseInt(document.getElementById('customMonth').value);
  const customDay = parseInt(document.getElementById('customDay').value);

  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  const customDate = new Date(customYear, customMonth - 1, customDay);

  if (birthDate > customDate) {
    showError('Birth date cannot be after target date');
    return;
  }

  let years = customDate.getFullYear() - birthDate.getFullYear();
  let months = customDate.getMonth() - birthDate.getMonth();
  let days = customDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(customDate.getFullYear(), customDate.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  showResult(`${years} years, ${months} months, ${days} days`);
}

function showResult(result) {
  document.getElementById('error').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('ageResult').textContent = result;
}

function showError(message) {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('error').classList.remove('hidden');
  document.getElementById('errorMessage').textContent = message;
}
