<?php

class ConnexionDBRead {

    private $PDOInstance = null;

    private static $instanceRead = null;

    const DEFAULT_SQL_HOST = "mysql-enqueteroquette.alwaysdata.net";
    const DEFAULT_SQL_DTB = "enqueteroquette_db";

    const READ_SQL_USER = '289405_a'; // ATTENTION CHANGER LES LOG ICI C4EST ROOT 
    const READ_SQL_PASS = '%Admin0!';

    private $readGameCommStatement;

    private function __construct()
    {
        $this->PDOInstance = new PDO('mysql:dbname=' . self::DEFAULT_SQL_DTB . ';host=' . self::DEFAULT_SQL_HOST, self::READ_SQL_USER, self::READ_SQL_PASS);

        //preparing all the queries
        $this->readGameCommStatement = $this->PDOInstance->prepare("SELECT pseudo, libellé FROM user, commentaire WHERE user.id = commentaire.id");
    }

    public static function getInstance()
    {
        if (is_null(self::$instanceRead)) {
            self::$instanceRead = new self();
        }
        return self::$instanceRead;
    }

    public function getPdo(): PDO
    {
        return $this->PDOInstance;
    }

    public function readGameComm(){
        $statement = $this->readGameCommStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute();
        return $statement;
    }
}

class ConnexionDBWrite {

    private $PDOInstance = null;

    private static $instanceWrite = null;

    const DEFAULT_SQL_HOST = "mysql-enqueteroquette.alwaysdata.net";
    const DEFAULT_SQL_DTB = "enqueteroquette_db";

    const WRITE_SQL_USER = '289405_a';
    const WRITE_SQL_PASS = '%Admin0!';

    private function __construct()
    {
        $this->PDOInstance = new PDO('mysql:dbname=' . self::DEFAULT_SQL_DTB . ';host=' . self::DEFAULT_SQL_HOST, self::WRITE_SQL_USER, self::WRITE_SQL_PASS);
    }

    public static function getInstance()
    {
        if (is_null(self::$instanceWrite)) {
            self::$instanceWrite = new self();
        }
        return self::$instanceWrite;
    }

    public function getPdo(): PDO
    {
        return $this->PDOInstance;
    }
}

?>
