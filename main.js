const img_src = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
      let num = -1;
 
      function slide_time() {
        if (num === 2) {
          num = 0;
        } else {
          num++;
        }
        document.getElementById("slide_img").src = img_src[num];
      }
 
setInterval(slide_time, 5000);