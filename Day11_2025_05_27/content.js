window.addEventListener('DOMContentLoaded', () => {
  const allLinks = document.querySelectorAll('a.dt-text-black-mine');
  allLinks.forEach(link => {
    if (link.href.includes("truong-hop-khan-cap-thu-tuong-co-the-ap-dung-bien-phap-chua-co-trong-luat")) {
      link.textContent = "UDU vô địch";
      link.style.color = "blue";
    }
  });
  const mainTitle = document.querySelector('h1.title-page.detail');
  if (mainTitle) {
    mainTitle.textContent = "Sinh viên UDU";
  }
});
