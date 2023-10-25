console.log("welcome to spotify");
//Initialize the Variables
let songIndex=0;
let audioElement = new Audio('songs/mehram.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let currentSongName=document.getElementById('currentSong');
let songs=[
    {songName:'Mehram (Kahani2)',filePath:'songs/mehram.mp3',Tpath:"covers/mehram.jpg"},
    {songName:'Nindiya (Sarbjit)',filePath:'songs/Nindiya (Sarbjit).mp3',Tpath:"covers/nindiya.jpg"},
    {songName:'Dil Hamara La ilaaj',filePath:'songs/la-ilaaj.mp3',Tpath:"covers/lailaaj.jpg"},
    {songName:'Baatien kuch ankahi si',filePath:'songs/Baatein-Kuch-Ankahee-Si.mp3',Tpath:"covers/bateinkuchankahisi.jpg"},
    {songName:'Pehli Dafa',filePath:'songs/pehlidafa.mp3',Tpath:"covers/pehlidafa.jpg"},
    {songName:'Mera Mann Kehne Laga',filePath:'songs/Mera Mann Kehne Laga.mp3',Tpath:"covers/meramann.jpeg"},
   ]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].Tpath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    makeAllplays();
}
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

        })
}



// Add a separate event listener for each individual song play/pause button
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      // Pause the current song if it's playing
      if (!audioElement.paused && songIndex === parseInt(e.target.id) - 1) {
        audioElement.pause();
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        makeAllplays(); // Remove the 'fa-pause-circle' class from all other buttons
        // Update the main play/pause button
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        

      } else {
        // Play the selected song
        makeAllplays(); // Remove the 'fa-pause-circle' class from all other buttons
        songIndex = parseInt(e.target.id) - 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        currentSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
      }
    });
  });
  
  
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=songs[songIndex].filePath;
    currentSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 5
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=songs[songIndex].filePath;
    currentSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Playing.classList.remove('fa-play-circle');
    Playing.classList.add('fa-pause-circle');

})
// Add event listener for the 'backwardButton'
document.getElementById('backward').addEventListener('click', () => {
    // Decrease the currentTime by 10 seconds
    audioElement.currentTime -= 5;
  });
  
  // Add event listener for the 'forwardButton'
  document.getElementById('forward').addEventListener('click', () => {
    // Increase the currentTime by 10 seconds
    audioElement.currentTime += 5;
  });

  const aboutButton= document.getElementById('aboutbtn');
  const closeButton = document.getElementById('closebtn');
  const aboutSec = document.getElementById('aboutSec');
  
  // Add a click event listener to the close button
  closeButton.addEventListener('click', () => {
    aboutSec.style.display = 'none';
  });
  aboutButton.addEventListener('click', () => {
    aboutSec.style.display = 'Block';
    

  });