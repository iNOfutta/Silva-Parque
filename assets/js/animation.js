let shuffle = (el, images) => {
        let rand = Math.floor(Math.random() * images.length - 1) + 1;
        el.src = images[rand];
    }
    //Shuffle image function

let headerImage = document.getElementById("headerImage");

if (headerImage !== null) {
    let images = ["https://ucarecdn.com/f57eefac-1b50-4cc7-998d-ee33d5884e68/", "https://ucarecdn.com/1d0dc9cc-bef0-4f4f-ba2d-7f81504a717b/", "https://ucarecdn.com/cdd1064c-8cc9-4642-9a58-0e7d222dce59/", "https://ucarecdn.com/3d5e91c3-5a71-4517-9667-b3eb2cb6f7b7/"];
    let shuffle = () => {
        let rand = Math.floor(Math.random() * images.length - 1) + 1;
        headerImage.src = images[rand];
    }
    setInterval(shuffle, 4000);
}
//Index n About Images shuffle



let bgImage = document.getElementById("bgImage");
if (bgImage !== null) {
    let imgs = ["https://ucarecdn.com/0f0572a1-ca4d-46d8-ab1a-157116f8c03b/image1.jpg", "https://ucarecdn.com/76a2fe6a-c704-42c1-b935-10cf864f22e7/image2.jpg", "https://ucarecdn.com/2a616a15-d341-444c-8b5e-0a109d6fc97e/image4.jpg", "https://ucarecdn.com/08d3a900-1cb4-4a7c-88d7-936d3c0f3f67/image5.jpg", "https://ucarecdn.com/ad3d73c1-ef89-4ee5-83be-1bade2bbfa11/image8.jpg", "https://ucarecdn.com/de5d39c9-9b74-4937-a90d-fc39f0140fff/image9.jpg"];
    shuffle(bgImage, imgs);
}
//Contact Images shuffle