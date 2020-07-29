// Adds functionality to the buttons in the storyArc folder.

document.getElementById("firstLink").onclick = function() {
    location.href = "story1.html"
};
document.getElementById("secondLink").onclick = function() {
    location.href = "story2.html" 
}; 
document.getElementById("thirdLink").onclick = function() {
    location.href = "story3.html" 
}; 
document.getElementById("lastLink").onclick = function() {
    location.href = "story.html" 
};

// Gives user a message based on their page in the story.

document.getElementById("firstAlert").onclick = function() {
    alert("Twaine hid in their wardrobe but accidently got locked in. Please try again.")
};
