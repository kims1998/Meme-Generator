let url = "https://api.imgflip.com/get_memes";
// Variable that will save all 100 images to an array
let allImages;
let imageDisplay = document.querySelector("#image-display");
let giphyDisplay = document.querySelector("#giphy-display");
let randomize = document.querySelector("#random-btn");
let getImagesIndex = "";
let eachContainer = "";
let searchMeme = document.querySelector("#search-meme");

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
      let finalRandomImage = randomImage[0];
      imageDisplay.innerHTML = `<img src="${finalRandomImage}" id="random-photo">
        `;
    })
    .catch(console.err);
}

randomize.addEventListener("click", function callImage() {
  randomizeImage();
});

searchMeme.addEventListener("click", function () {
  let searchQuery = document.querySelector(".texts").value;
  console.log(searchQuery, "search");
  let limit = 9;
  let urlMeme =
    "https://api.giphy.com/v1/gifs/search?api_key=PdkNRVt59jQTuyCn6UBmpXpacH1ulMhA&q=" +
    searchQuery +
    "&limit=" +
    limit +
    "&offset=0&rating=g&lang=en";

  fetch(urlMeme)
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data, "GIFSITE")
      let gifImages = [];
      for (let i = 0; i < 9; i++) {
        gifImages.push(data.data[i].url);     
      }
      giphyDisplay.innerHTML += `<img src="${gifImages[0]}"><br>`;
      console.log(gifImages, "here");
    })
    .catch(console.err);

  // generateSelection();
});



    


