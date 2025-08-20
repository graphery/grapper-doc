function update(evt) {
  evt.preventDefault();
  if (evt.ctrlKey) {
    $.data.circles--;
  } else {
    $.data.circles++;
  }
}