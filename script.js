// let url = "https://api.imgflip.com/get_memes";

// // Variable that will save all 100 images to an array
// let images;
// let allImages;
// const randomImages = [];

// fetch(url)
// .then(response =>{
//     console.log(response.status)
//     return response.json();
// })
// .then(data=>{
//     // Store image objects in an array
//     images = data.data.memes;
//     console.log("images", images)

//     //let randomImages = [

//     for(let i = 0; i < images.length; i++) {
//         randomImages.push(images[i].url);
//     }

//     getImages(randomImages);

//     // console.log(randomImages)

// })
// .catch(console.err);

// function getImages(attr) {
//     const getImagesIndex = Math.floor(Math.random() * attr.length);
//     console.log(getImagesIndex, "random")
// }
// // console.log(randomImages(), "random")

// var generateBtn = document.querySelector('#generate-btn');

// generateBtn.addEventListener('click', function() {
//         getImages(attr);
// })

var display = document.querySelector(".test");
var img = document.querySelector("#myImg");

let key = "PdkNRVt59jQTuyCn6UBmpXpacH1ulMhA";
let urlMeme =
  "https://api.giphy.com/v1/gifs/search?api_key=PdkNRVt59jQTuyCn6UBmpXpacH1ulMhA&q=gif&limit=100&offset=0&rating=g&lang=en";

fetch(urlMeme)
  .then((response) => {
    console.log(response, "response");
    return response.json();
  })
  .then((data) => {
    data.data.forEach((item) => {
      console.log(item);
      display.innerHTML += `<img src=${item.images.original.url}/><br>`;
    });
    console.log(data, "data");

    async function pullData() {
      var final = await fetch(urlMeme);
      console.log(final);
      var data = await final.json();
      data.data.forEach((item) => {
        display.innerHTML += `<img src=${item.images.original.url}/><br>`;
      });
      console.log(data);
    }
    pullData();
  });
