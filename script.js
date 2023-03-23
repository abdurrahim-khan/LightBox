let popup = document.getElementById("popup");
let current_position = 0;
let img_collection = document.getElementsByClassName("images");

function startLightbox(id) {
    
    current_position = parseInt(id);
    traverse("none");
    popup.classList.remove("initial");
    popup.classList.add("final");
    for(let img of img_collection)
    {
        img.style.display = "none";
    }
    img_collection[id].style.display = "block";

}

function traverse(direction){
    
    if(direction == "forward")
    {
        img_collection[current_position].style.display = "none";
        current_position++;
        img_collection[current_position].style.display = "block";

    }
    else if(direction=="back") {
        img_collection[current_position].style.display = "none";
        current_position--;
        img_collection[current_position].style.display = "block";
    }
    else {

    }
    if(current_position == 0)
    {
        document.getElementById("back").style.display = "none";
        document.getElementById("forward").style.display = "block";
    }
    else if(current_position == 2)
    {
        document.getElementById("forward").style.display = "none";
        document.getElementById("back").style.display = "block";
        
    }
    else {
        document.getElementById("back").style.display = "block";
        document.getElementById("forward").style.display = "block";
    }
}
function stopLightbox() 
{
    popup.classList.remove("final");  
    popup.classList.add("initial"); 
}