document.body.addEventListener("keyup", (e)=>{
	playSound(e.code.toLowerCase());
})
 
document.querySelector(".composer button").addEventListener("click" , ()=>{
	let song = document.querySelector("#input").value;
	if(song !== ""){
		let songArray = song.split("");
		playComposition(songArray);
	}
}) 

function playSound(sound){
	let audioElement = document.querySelector(`#s_${sound}`);
	let keyElement = document.querySelector(`div[data-key="${sound}"]`)


	if(audioElement){
		audioElement.currentTime = 0  ;
		audioElement.play();
	}
	if(keyElement){
		keyElement.classList.add("active")
		setTimeout(()=>{
			keyElement.classList.remove("active")

		},300)
	}
}

function playComposition(array){
	let wait = 0;


	array.map((e)=>{
		setTimeout(()=>{
			playSound(`key${e}`);
		} , wait)
		wait += 300;
		
	})
}