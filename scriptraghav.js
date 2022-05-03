// console.log("Welcome to spotify");


// //Initializing index
// let songIndex=0;
// let audioElement=new Audio("songs/1.mp3");
// let masterPlay=document.getElementById('masterPlay');
// let myProgressBar=document.getElementById('myProgressBar');
// let gif=document.getElementById("gif");
// let songItems=Array.from(document.getElementsByClassName('songitem'));
// let mastersongName=document.getElementById('mastersongName');




//  let songs=[
//      {
//          songName:"First",
//          filePath:"songs/1.mp3",
//          coverPath:"covers/1.jpg"
//      },
//      {
//         songName:"Second",
//         filePath:"songs/2.mp3",
//         coverPath:"covers/2.jpg"
//     },
//     {
//         songName:"Third",
//         filePath:"songs/3.mp3",
//         coverPath:"covers/3.jpg"
//     },
//     {
//         songName:"Fourth",
//         filePath:"songs/4.mp3",
//         coverPath:"covers/4.jpg"
//     },
//     {
//         songName:"Five",
//         filePath:"songs/5.mp3",
//         coverPath:"covers/5.jpg"
//     },
//     {
//         songName:"Six",
//         filePath:"songs/6.mp3",
//         coverPath:"covers/6.jpg"
//     },
//     {
//         songName:"Seven",
//         filePath:"songs/7.mp3",
//         coverPath:"covers/7.jpg"
//     },
//     {
//         songName:"Eight",
//         filePath:"songs/8.mp3",
//         coverPath:"covers/8.jpg"
//     },
//     {
//         songName:"Nine",
//         filePath:"songs/9.mp3",
//         coverPath:"covers/9.jpg"
//     },
//     {
//         songName:"Ten",
//         filePath:"songs/10.mp3",
//         coverPath:"covers/10.jpg"
//     },

//  ]
//  songItems.forEach((element,i)=>{
    
//      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;  
//  })
// //Handle play/pause click
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused||audioElement.currentTime<=0)
//     {
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity=1;
//     }
//    else
//     {
        
//         audioElement.pause();
//         masterPlay.classList.remove('fa-circle-pause');
//         masterPlay.classList.add('fa-circle-play');
//         gif.style.opacity=0;

//     }
// })
//  //Listen to events
// audioElement.addEventListener('timeupdate',()=>{
//     console.log('timeupdate');
//     //Update Seekbar
//     let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//     console.log(progress);
//     myProgressBar.value=progress;

// })
// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
// })
// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     
//         element.classList.add('fa-circle-play');
//         element.classList.remove('fa-circle-pause');
//     })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//     makeAllPlays();
//     songIndex=parseInt(e.target.id);
//     mastersongName.innerText=songs[songIndex].songName;
//     e.target.classList.remove('fa-circle-play');
//     e.target.classList.add('fa-circle-pause');
//     audioElement.src=`songs/${songIndex+1}.mp3`;
//     audioElement.currentTime=0;
//     audioElement.play();
//     gif.style.opacity=1;  
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause'); 
//     })
// })


// document.getElementById('previous').addEventListener("click",()=>{
//     if (songIndex<=0)
//     {
//      songIndex=0;
//     }
//     else{
//      songIndex -= 1;
//     }
//     audioElement.src=`songs/${songIndex+1}.mp3`;
//     mastersongName.innerText=songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause'); 
// })
// document.getElementById('next').addEventListener("click",()=>{
//     if (songIndex>=9)
//     {
//      songIndex=0;
//     }
//     else{
//      songIndex += 1;
//     }
//     audioElement.src=`songs/${songIndex+1}.mp3`;
//     mastersongName.innerText=songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause'); 
// })











console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})