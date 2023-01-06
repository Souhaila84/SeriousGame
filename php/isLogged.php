<?php 
    // Get the token from the request header or cookie
    
    include 'config.php'; // including DB connexion 
    
    $request_id = isset($_COOKIE['id_user']) ? $_COOKIE['id_user'] : '';

    $isExistSql = "SELECT sessionToken FROM session WHERE idUser = $request_id";
    $resultIsExist = mysqli_query($bdd, $isExistSql);

    if($resultIsExist->num_rows == 1){
        $userToken = $resultIsExist->fetch_row()[0];
    }
    $request_token = isset($_COOKIE['login_token']) ? $_COOKIE['login_token'] : '';

    $isLogged = $request_token == $userToken; // test if is connected
?>