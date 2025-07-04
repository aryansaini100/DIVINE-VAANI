// Hide sections on white background click
document.addEventListener('click', function (event) {
  const isBox = event.target.classList.contains('box');
  const isContent = event.target.closest('.content-section');

  if (!isBox && !isContent) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.classList.remove('active'));
  }
});



