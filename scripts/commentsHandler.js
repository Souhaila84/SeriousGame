var comment= document.getElementById("submitComment");
comment.addEventListener("click", function(){
        
    var commentValue = document.getElementById("commentInput").value;
    var ajaxData = {
        "commentValue" : commentValue
    }
    
    $.ajax({
        url: '/index.php/gameCommentHandler',
        type : "POST",
        data : ajaxData,
        success: function(data){
            $('#comments').prepend(data);
        }
    });

});
