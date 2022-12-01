<?php
  try 
  {
      $bdd = new PDO("mysql:host=localhost;dbname= loginform ;charset=utf8", " root@localhost", "");
  }
  catch(PDOException $e)
  {
      die('Erreur : '.$e->getMessage());
  }
?>