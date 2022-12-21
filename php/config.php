
<?php
  try 
  {
      $bdd = new PDO("mysql:host=mysql-enqueteroquette.alwaysdata.net;port=3306;dbname=enqueteroquette_db;charset=utf8", "289405_a", "%Admin0!");
  }
  catch(PDOException $e)
  {
      die('Erreur : '.$e->getMessage());
  }
?>
