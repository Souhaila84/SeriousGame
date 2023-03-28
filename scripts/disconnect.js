var disconnectButton= document.getElementById("disconnectButton");
disconnectButton.addEventListener("click", function(){
    $.ajax({
        url: '../index.php/disconnect',
        type : "POST",
        success: function(data){
            $.ajax({
                 url: '../index.php/connectButton',
                 success: function(data){
                    $('#disconnectButton').replaceWith(data);
                 }
            });
        }
    });
});