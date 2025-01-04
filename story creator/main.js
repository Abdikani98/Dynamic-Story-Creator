
document.getElementById('storyForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const place = document.getElementById('place').value.trim();
  const verb = document.getElementById('verb').value.trim();
  const adjective = document.getElementById('adjective').value.trim();
  const noun = document.getElementById('noun').value.trim();

  let isValid = true;

  // Validation: Strings only, no numbers
  const stringRegex = /^[a-zA-Z\s]+$/;

  if (!name || !stringRegex.test(name)) {
    showError('nameError', 'Please enter a valid name (letters only).');
    isValid = false;
  } else {
    clearError('nameError');
  }

  if (!place || !stringRegex.test(place)) {
    showError('placeError', 'Please enter a valid place (letters only).');
    isValid = false;
  } else {
    clearError('placeError');
  }

  if (!verb || !stringRegex.test(verb)) {
    showError('verbError', 'Please enter a valid verb (letters only).');
    isValid = false;
  } else {
    clearError('verbError');
  }

  if (!adjective || !stringRegex.test(adjective)) {
    showError('adjectiveError', 'Please enter a valid adjective (letters only).');
    isValid = false;
  } else {
    clearError('adjectiveError');
  }

  if (!noun || !stringRegex.test(noun)) {
    showError('nounError', 'Please enter a valid noun (letters only).');
    isValid = false;
  } else {
    clearError('nounError');
  }

  if (isValid) {
    const story = `
      Once upon a time, ${name} decided to visit ${place}. It was a ${adjective} day, 
      and everything seemed perfect. Suddenly, ${name} realized they needed to ${verb} 
      to find the legendary ${noun}. The journey was full of twists and turns. Along 
      the way, ${name} faced many challenges but never gave up. Finally, at the end 
      of the day, ${name} found the ${noun} and discovered its magical powers. From 
      that day forward, ${name} became the hero of ${place}, and their story was told 
      for generations.
    `;

    const storyOutput = document.getElementById('storyOutput');
    document.getElementById('story').textContent = story;
    storyOutput.classList.add('show');
  }
});

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearError(elementId) {
  document.getElementById(elementId).textContent = '';
}

document.getElementById('resetButton').addEventListener('click', function () {
  document.getElementById('storyForm').reset();
  const storyOutput = document.getElementById('storyOutput');
  storyOutput.classList.remove('show');
  clearError('nameError');
  clearError('placeError');
  clearError('verbError');
  clearError('adjectiveError');
  clearError('nounError');
});
