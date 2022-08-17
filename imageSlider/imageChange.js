/*Duplicate code
         document.getElementById("homepageLink").addEventListener("click", function () {
             document.getElementById("homePage").style.display = "block";
             document.getElementById("aboutPage").style.display = "none";
             document.getElementById("aboutPageLink").classList.remove("active");
             document.getElementById("homepageLink").classList.add("active");
 
 
         });
         document.getElementById("aboutPageLink").addEventListener("click", function () {
             document.getElementById("aboutPage").style.display = "block";
             document.getElementById("homePage").style.display = "none";
             document.getElementById("aboutPageLink").classList.add("active");
             document.getElementById("homepageLink").classList.remove("active");
 
 
         }); */

//image slider start

let currentImage = 'image1',
  imageCounter = 1;

document.getElementById('next').addEventListener('click', function () {
  imageCounter += 1;
  if (imageCounter > 3) {
    imageCounter = 1;
  }
  document.getElementById('image' + imageCounter).style.display = 'block';
  document.getElementById(currentImage).style.display = 'none';
  console.log('image' + imageCounter);
  currentImage = 'image' + imageCounter;
});

document.getElementById('previous').addEventListener('click', function () {
  imageCounter -= 1;
  if (imageCounter < 1) {
    imageCounter = 3;
  }
  document.getElementById('image' + imageCounter).style.display = 'block';
  document.getElementById(currentImage).style.display = 'none';
  console.log('image' + imageCounter);
  currentImage = 'image' + imageCounter;
});
