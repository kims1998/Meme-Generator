let url = "https://api.imgflip.com/get_memes";
// Variable that will save all 100 images to an array
let allImages;
let imageDisplay = document.querySelector("#generated-photos");
let randomize = document.querySelector("#random-btn");
let getImagesIndex = "";
let eachContainer = "";

function randomText() {

}

function randomizeImage() {
  fetch(url)
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
        let getImagesIndex = Math.floor(Math.random() * data.data.memes.length);
        let randomImage = [];
        randomImage.push(data.data.memes[getImagesIndex].url);
        let finalRandomImage = randomImage[0]
        imageDisplay.innerHTML = `
        <img src="${finalRandomImage}">
        `;
      }
    )
    .catch(console.err);
}

randomize.addEventListener("click", function callImage(){
  randomizeImage();
  pullData();
});


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
  });
    

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
  

