let url = "https://api.imgflip.com/get_memes";

// Variable that will save all 100 images to an array
<<<<<<< HEAD
//let images = ;
=======
let images;
let allImages;
const randomImages = [];
>>>>>>> 1b7912d4112905d80335c2513056813b3d2abd83

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




let key = "PdkNRVt59jQTuyCn6UBmpXpacH1ulMhA";
let urlMeme = "https://api.giphy.com/v1/gifs/search?api_key=PdkNRVt59jQTuyCn6UBmpXpacH1ulMhA&q=cat&limit=25&offset=0&rating=g&lang=en";

fetch(urlMeme)
.then(response =>{
    console.log(response.status)
    return response.json();
})
.then(data=>{
    console.log(data)
})
.catch(console.err);


