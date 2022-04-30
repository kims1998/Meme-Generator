let url = "https://api.imgflip.com/get_memes";

// Variable that will save all 100 images to an array
let images;
let allImages;
const randomImages = [];

fetch(url)
.then(response =>{
    console.log(response.status)
    return response.json();
})
.then(data=>{
    // Store image objects in an array
    images = data.data.memes;
    console.log("images", images)

    //let randomImages = [

    for(let i = 0; i < images.length; i++) {
        randomImages.push(images[i].url);
    }

    getImages(randomImages);

    // console.log(randomImages)

})
.catch(console.err);

function getImages(attr) {
    const getImagesIndex = Math.floor(Math.random() * attr.length);
    console.log(getImagesIndex, "random")
}
// console.log(randomImages(), "random")

var generateBtn = document.querySelector('#generate-btn');

generateBtn.addEventListener('click', function() {
        getImages(attr);
})



// let key = "PdkNRVt59jQTuyCn6UBmpXpacH1ulMhA";
// let urlMeme = "https://api.giphy.com/v1/gifs/search?api_key=PdkNRVt59jQTuyCn6UBmpXpacH1ulMhA&q=cat&limit=25&offset=0&rating=g&lang=en";

// fetch(urlMeme)
// .then(response =>{
//     console.log(response.status)
//     return response.json();
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(console.err);


