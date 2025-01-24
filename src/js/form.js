{
  const $form = document.querySelector('.intro__form');
  const $input= document.querySelector('.form__input');
  const $message = document.querySelector('.intro__message');
  const $nameOutput = document.querySelector('.name-output');
  let isValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameInput = $input.value.trim();

    if (nameInput === '') {
      alert('Name is required.');
      isValid = false;
    }else {
      isValid = true;
    }

    if (nameInput.length < 3) {
      alert('Name must be at least 3 characters long.');
      isValid = false;
    } else {
      isValid = true;
    }

    if (isValid) {
      $input.value = '';
      $form.style.display = 'none';
      $nameOutput.textContent = nameInput;
      $message.style.display = 'block';
    }

    if (!isValid) {
      return;
    }
  }

  const init = () => {
    $form.addEventListener('submit', handleSubmit);
  }

  init();
}
