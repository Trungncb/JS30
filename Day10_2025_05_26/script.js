const images = [
  "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg",
  "https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg",
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20phong%20c%E1%BA%A3nh%20%C4%91%E1%BA%B9p/anh-phong-canh-dep-17.jpg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

function showSlide(index) {
  slide.src = images[index];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
