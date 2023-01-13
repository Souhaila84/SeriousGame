var disconnectButton= document.getElementById("disconnectButton");
disconnectButton.addEventListener("click", function(){
    $.ajax({
        url: '../php/disconnect.php',
        type : "POST",
        success: function(data){
            $.ajax({
                 url: '../php/connectButton.php',
                 success: function(data){
                    $('#disconnectButton').replaceWith(data);
                 }
            });
        }
    });
});