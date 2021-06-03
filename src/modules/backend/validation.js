const checkTask = (inputName, inputDate, submitButton) => {
  if (inputName.value.length > 2 && (inputDate.value !== null || undefined)) {
    submitButton.disabled = false;
    if (submitButton.classList.contains('disabled')) {
      submitButton.classList.remove('disabled');
      setTimeout(() => { window.location.reload(); }, 100);
      return true;
    }
  } else {
    submitButton.disabled = true;
    submitButton.classList.add('disabled');
    setTimeout(() => { window.location.reload(); }, 100);
    return false;
  }

  setTimeout(() => { window.location.reload(); }, 100);
  return true;
};

export default checkTask;