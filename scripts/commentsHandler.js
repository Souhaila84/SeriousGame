var comment= document.getElementById("submitComment");
comment.addEventListener("click", function(){
        
    const commentValue = document.getElementById("commentInput").value;

    const allSelectedStars = document.getElementsByClassName("fa fa-star checked");
    const ratingValue = parseInt(allSelectedStars[allSelectedStars.length - 1].id);

    const ajaxData = {
        "commentValue": commentValue,
        "ratingValue": ratingValue
    };

    $.ajax({
        url: '../php/gameCommentHandler.php',
        type : "POST",
        data : ajaxData,
        success: function(data){
            $('#comments').prepend(data);
        }
    });

});
