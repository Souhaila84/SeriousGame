var comment= document.getElementById("submitComment");
comment.addEventListener("click", function(){
    var commentBoxValue = document.getElementById("commentInput").value;
    
    //creating commentBox
    var commentBox = document.createElement("li");
    var profile = document.createElement("div");
    profile.classList.add("profile");
    var profilePicture = document.creeateElement("img");
    profilePicture.src = " INSERT SRC ";
    var profileName = document.creeateElement("p");
    profileName.text = "name";
    
    //appendind childs
    commentBox.appendChild(document.createTextNode(commentBoxValue));
    document.getElementById("comments").appendChild(li);
});
