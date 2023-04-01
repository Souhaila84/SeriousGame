var comment= document.getElementById("submitComment");
comment.addEventListener("click", function(){

    const commentArea = document.getElementById("commentInput");
    const commentValue = commentArea.value;

    const allSelectedStars = document.getElementsByClassName("fa fa-star editable checked");
    const ratingValue = parseInt(allSelectedStars[allSelectedStars.length - 1].id);

    const ajaxData = {
        "commentValue": commentValue,
        "ratingValue": ratingValue
    };

    $.ajax({
        url: '../php/gameCommentHandler.php',
        type : "POST",
        data : ajaxData,
        async: false,
        success: function(data){
            $('#comments').prepend(data);
        }
    });

    commentArea.value = "";
    changeStar(0);
});
