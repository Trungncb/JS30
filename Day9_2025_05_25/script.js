function doianhnen() {
    const value = document.getElementById("backgroundSelect").value;
    let imageUrl = "";
  
    switch (value) {
      case "mountain":
        imageUrl = "https://images.pexels.com/photos/2965773/pexels-photo-2965773.jpeg?cs=srgb&dl=pexels-qhung999-2965773.jpg&fm=jpg";
        break;
      case "beach":
        imageUrl = "https://gcs.tripi.vn/public-tripi/tripi-feed/img/482901wEl/anh-mo-ta.png";
        break;
      case "forest":
        imageUrl = "https://media.istockphoto.com/id/1446199740/vi/anh/con-%C4%91%C6%B0%E1%BB%9Dng-xuy%C3%AAn-qua-m%E1%BB%99t-khu-r%E1%BB%ABng-%C4%91%E1%BA%A7y-%C3%A1nh-n%E1%BA%AFng-m%E1%BA%B7t-tr%E1%BB%9Di.jpg?s=612x612&w=0&k=20&c=PE9fxAPsPn3NXKvMEu5ksInmV5f0PcqjIRIDlD1-IQc=";
        break;
    }
  
    document.body.style.backgroundImage = `url('${imageUrl}')`;
  }
  