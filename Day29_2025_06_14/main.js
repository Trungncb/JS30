document.querySelectorAll('.nut').forEach(button => {
  if (button.textContent.includes('Đặt dịch vụ')) {
    button.addEventListener('click', () => {
      alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ sớm.');
    });
  }
});

const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}