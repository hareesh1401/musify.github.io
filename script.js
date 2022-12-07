// variable declarations ---------------->

let playCardBtn=document.querySelectorAll(".play")
let loadPage = document.querySelector(".loadPage")
let prograssBar = document.querySelector(".prograss-bar")
let prograss = document.querySelector(".prograss")
let searchInput=document.querySelector(".searchGroup")
let cancelIcon=document.querySelector(".cancelIcon")
let nextPlay=document.querySelector(".NextPlay")
let prevPlay=document.querySelector(".PrevPlay")
let thumbnail=document.getElementById("thumbnail");
let artist= document.getElementById("artist");
let title=document.getElementById("title");
let audio=document.getElementById("audio")
let playMusicBTN = document.getElementById("playSong")
let timeStart = document.getElementById("timeStart")
let timeEnd = document.getElementById("timeEnd")
let playIcon=document.getElementById("play-icon")
let selectedbtn=playCardBtn[0]
let songIndex=0,song;

// Start page loader ------------->

let startPage =()=>loadPage.style.display="none";

// Search section toggle ----------->

let showSearch = ()=>{
    searchInput.classList.toggle("active")
    cancelIcon.classList.toggle("fa-close")
    cancelIcon.classList.toggle("fa-magnifying-glass")
}

// song section array of objects----------->

let songs=[
    {
        id:0,
        thumbnail:"./Image/thumbnail2.jpg",
        title:"Hymn For The Weekend",
        artist:"Cold Play",
        audio:"songs/Coldplay - Hymn For The Weekend (Official Video)_160k.mp3",
        iconName:"",

    },
    {
        id:1,
        thumbnail:"./Image/thumbnail3.jpg",
        title:"Ocean Eyes",
        artist:"Billie Eilish",
        audio:"songs/Billie Eilish - Ocean Eyes (Official Music Video)_160k.mp3", 
        iconName:"",   
    },
    {
        id:2,
        thumbnail:"./Image/thumbnail4.jpg",
        title:"Sun Flower",
        artist:"Spider Man",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:3,
        thumbnail:"./Image/thumbnail5.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:4,
        thumbnail:"./Image/thumbnail6.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:5,
        thumbnail:"./Image/thumbnail7.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:6,
        thumbnail:"./Image/thumbnail8.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:7,
        thumbnail:"./Image/thumbnail9.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:8,
        thumbnail:"./Image/thumbnail10.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:9,
        thumbnail:"./Image/thumbnail11.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:10,
        thumbnail:"./Image/thumbnail12.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
    {
        id:11,
        thumbnail:"./Image/thumbnail13.jpg",
        title:"Sun Flower",
        artist:"Billie Eilish",
        audio:"songs/Sunflower.mp3",
        iconName:"",   
    },
];

// Small Cards to Play or Pause the song------------------->

    function playAudio(songId){ 
        song = songs.find(function(song){
            return song.id==songId; 
        })
        thumbnail.src=song.thumbnail;
        artist.innerHTML=song.artist;
        title.innerHTML=song.title;
        audio.src=song.audio;
        songIndex = songId;
// select 1 more songs while playing another song-------------->
        if(selectedbtn==playCardBtn[songId]){
            !playMusicBTN.classList.contains("ctrl-btn")?btnPlay():btnPause();
            }else{
            btnPause()
            selectedbtn=playCardBtn[songId];
            btnPlay()
                }
         }

// <-------------------Control Pannel Music Changer----------------------->


// (1) Next button to play song ------------>

nextPlay.addEventListener("click",function(){
    if(audio.pause){
    selectedbtn=playCardBtn[songIndex]
    btnPlay()
    playAudio(songIndex)
    }
    btnPause() 
    selectedbtn=playCardBtn[songIndex+=1]
    playAudio(songIndex)
    btnPlay()
})


// (2) Play Pause button Changer --------------->

    playMusicBTN.addEventListener("click",()=>{
        !playMusicBTN.classList.contains("ctrl-btn")?btnPlay():btnPause();
    })

// (3) Pervious button to play song ---------------->

prevPlay.addEventListener("click",()=>{
    btnPause() 
    selectedbtn=playCardBtn[songIndex-=1]
    playAudio(songIndex)
    btnPlay()
})

// button play changer ------------------>

function btnPlay(){
    
        playMusicBTN.classList.add("ctrl-btn")
        selectedbtn.classList.add("ctrl-btn")
        selectedbtn.children[1].innerHTML="PAUSE"
        selectedbtn.children[0].classList.replace("fa-play","fa-pause");
        playIcon.classList.replace("fa-play","fa-pause");
        audio.play();   
}

// button pause changer --------------------------->

function btnPause(){
        playMusicBTN.classList.remove("ctrl-btn")
        selectedbtn.classList.remove("ctrl-btn")
        selectedbtn.children[1].innerHTML="PLAY"
        selectedbtn.children[0].classList.replace("fa-pause","fa-play");
        playIcon.classList.replace("fa-pause","fa-play");
        audio.pause();
}

// Music Progress / Control bar functioning -----------------> 

audio.ontimeupdate=function(e){
    prograss.style.width=Math.floor(audio.currentTime*100/audio.duration)+"%";
// Audio Duration End------------------->
   if(audio.duration){
    let MinDuration = Math.floor(audio.duration/60);
    let SecDuration = Math.floor(audio.duration%60);
    timeEnd.innerText=`${MinDuration}:${SecDuration}`
}
// Current Audio Time-------------------> 
if(audio.currentTime){
    let MincurrentTime = Math.floor(audio.currentTime/60);
    let SeccurrentTime = Math.floor(audio.currentTime%60);
    timeStart.textContent=`${MincurrentTime}:${SeccurrentTime}`
   }
}
    

prograssBar.addEventListener("click",function(e){
    audio.currentTime = (e.offsetX/prograssBar.offsetWidth) * audio.duration; 
})