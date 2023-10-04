// function displayNextImage() {
//     x = (x === images.length - 1) ? 0 : x + 1;
//     document.getElementById("img").src = images[x];
// }
// function changeImage() {
//     setInterval(displayNextImage, 5000);
// }

// var images = [], x = -1;
// images[0] = "./src/img/ba1.jpg";
// images[1] = "./src/img/ba2.jpg";
// images[2] = "./src/img/ba3.jpg";

//------------------------------------------------------------------------------------------------------------------------------------------------

// window.onload = function changeImage() {
//     setInterval(displayNextImage, 5000);
// }

// function displayNextImage() {
//     x = (x === images.length - 1) ? 0 : x + 1;
//     document.getElementById("img").src = images[x];
// }

// var images = [], x = -1;
// images[0] = "./src/img/ba1.jpg";
// images[1] = "./src/img/ba2.jpg";
// images[2] = "./src/img/ba3.jpg";

//------------------------------------------------------------------------------------------------------------------------------------------------



window.onload = function () {
    var backgroundImg=["./src/img/ba2.jpg", "./src/img/ba3.jpg", "./src/img/honolulu.jpg","./src/img/ba1.jpg"]
    var backHonolulu =["./src/img/honolulu2.jpg", "./src/img/honolulu.jpg","./src/img/honolulu3.webp","./src/img/honolulu3.webp",]

    var images = [], x = -1;
    images[0] = "./src/img/honolulu2.jpg";
    images[1] = "./src/img/honolulu4.jpg";
    images[2] = "./src/img/honolulu3.jpg";
    images[3] = "./src/img/honolulu.jpg";
    

    setInterval(changeImage, 5000);
    function changeImage() {   
        var i = Math.floor((Math.random() * 4));
      
      // document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
      // document.getElementsByClassName("showcase").style.backgroundImage = "url('"+backgroundImg[i]+"')";

        document.getElementById("img").style.backgroundImage = "url('"+backgroundImg[i]+"')";

        // document.getElementById("honolulu").src = "url('"+backHonolulu[i]+"')";
        // document.getElementById("honolulu").style.backgroundImage = "url('"+backHonolulu[i]+"')";

        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("honolulu").src = images[x];  
        
        


      
    }
  }
