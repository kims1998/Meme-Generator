let url = "https://api.imgflip.com/get_memes";
// Variable that will save all 100 images to an array
let images;

fetch(url)
.then(response =>{
    console.log(response.status)
    return response.json();
})
.then(data=>{
    // Store image objects in an array
    images = [data.data.memes];
    console.log(images)
})
.catch(console.err);


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


