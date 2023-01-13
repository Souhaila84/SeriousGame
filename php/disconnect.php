<?php
    setCookie("id_user","", time() - 3600);
    unset($_COOKIE["id_user"]);
    setCookie("login_token","", time() - 3600);
    unset($_COOKIE["login_token"]);
?>