var comment= document.getElementById("submitComment");
comment.addEventListener("click", function(){
        
    var commentValue = document.getElementById("commentInput").value;
    var ajaxData = {
        "commentValue" : commentValue
    }
    
    $.ajax({
        url: '../php/gameCommentHandler.php',
        type : "POST",
        data : ajaxData,
        success: function(data){
            $('#comments').prepend(data);
        }
    });
    /*
    var isLogged = <?php
                    include '../php/isLogged.php';
                    Print($isLogged); 
                    ?>;
    console.log(isLogged);
    
    if (isLogged){
        if (! document.getElementById("commentInput").value == "" ){

            var commentArea = document.createElement("li");
            commentArea.classList.add("commentArea");
            commentArea.id = commentAreaId;

            var commentBoxValue = document.getElementById("commentInput").value;

            //creating commentBox
            var commentBox = document.createElement("p");
            commentBox.classList.add("commentTexts")
            var profile = document.createElement("div");
            profile.classList.add("profile");

            var profilePicture = document.createElement("img");
            profilePicture.classList.add("profilePicture");
            profilePicture.src = "../images/avatar-default.png";
            var profileName = document.createElement("p");
            profileName.classList.add("profileName");
            profileName.appendChild(document.createTextNode ("name"));

            //appendind childs
            profile.appendChild(profilePicture);
            profile.appendChild(profileName);


            commentBox.appendChild(document.createTextNode(commentBoxValue));
            commentArea.appendChild(profile);
            commentArea.appendChild(commentBox);
            document.getElementById("comments").appendChild(commentArea);
        }
    }
    else{
        
    }*/
});
