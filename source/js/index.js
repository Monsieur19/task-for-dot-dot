const allSelect = document.querySelectorAll('.select');

allSelect.forEach((el) => {
  new Choices(el, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
})
 