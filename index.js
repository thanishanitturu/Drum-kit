var n=document.querySelectorAll(".drum").length
for(var i=0;i<n;i++){
document.querySelectorAll("button")[i].addEventListener("click",handle_click)
}
function handle_click()
{
    var n=this.innerHTML
    sound(n)
    buttonAnimation(n)
}
document.addEventListener("keypress",function(event)
{
    sound(event.key)
    buttonAnimation(event.key)
})
function sound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom_1= new Audio("sounds/tom-1.mp3");
            tom_1.play();
        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
        case "k":
            var tom_3= new Audio("sounds/tom-3.mp3");
            tom_3.play();
        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
        default:
            break;
    }
}

function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    },500);
    
}





