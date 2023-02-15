<?php

class ConnexionDBRead {

    private $PDOInstance = null;

    private static $instanceRead = null;

    const DEFAULT_SQL_HOST = "mysql-enqueteroquette.alwaysdata.net";
    const DEFAULT_SQL_DTB = "enqueteroquette_db";

    const READ_SQL_USER = '289405_a'; // ATTENTION CHANGER LES LOG ICI C4EST ROOT 
    const READ_SQL_PASS = '%Admin0!';

    private $readGameCommStatement;

    private $userPseudoFromIdStatement;

    private $isLoggedStatement;

    private $userIdFromMailStatement;

    private $userPasswordFromIdStatement;

    private $progressLvlFromIdStatement;

    private function __construct()
    {
        $this->PDOInstance = new PDO('mysql:dbname=' . self::DEFAULT_SQL_DTB . ';host=' . self::DEFAULT_SQL_HOST, self::READ_SQL_USER, self::READ_SQL_PASS);

        //preparing all the queries
        $this->readGameCommStatement = $this->PDOInstance->prepare("SELECT pseudo, libellé FROM user, commentaire WHERE user.id = commentaire.id");

        $this->userPseudoFromIdStatement = $this->PDOInstance->prepare("SELECT pseudo FROM user WHERE id = ?");

        $this->isLoggedStatement = $this->PDOInstance->prepare("SELECT sessionToken FROM session WHERE idUser = ?");

        $this->userIdFromMailStatement = $this->PDOInstance->prepare("SELECT id FROM user WHERE email = ?");

        $this->userPasswordFromIdStatement = $this->PDOInstance->prepare("SELECT password FROM user WHERE id = ?");

        $this->progressLvlFromIdStatement = $this->PDOInstance->prepare("SELECT nv_progression AS lvl FROM `user` WHERE id = ?");
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

    public function userPseudoFromId($id){
        $statement = $this->userPseudoFromIdStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute(array($id));
        return $statement;
    }

    public function isLogged(){
        $request_id = $_COOKIE['id_user'] ?? ''; // the id to test
        $statement = $this->isLoggedStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute(array($request_id));

        if($statement->rowCount() == 1){
            $userToken = $statement->fetch()->sessionToken;
        }
        $request_token = $_COOKIE['login_token'] ?? '';

        return (empty($request_token) ? false : $request_token == $userToken); // test if is connected
    }

    public function userIdFromMail($mail){
        $statement = $this->userIdFromMailStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute(array($mail));
        return $statement;
    }

    public function userPasswordFromId($id){
        $statement = $this->userPasswordFromIdStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute(array($id));
        return $statement;
    }

    public function progressLvlFromId($id){
        $statement = $this->progressLvlFromIdStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute(array($id));
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

    private $writeGameCommentStatement;

    private $deleteSessionStatement;

    private $insertSessionStatement;

    private $setProgressLvlStatement;

    private function __construct()
    {
        $this->PDOInstance = new PDO('mysql:dbname=' . self::DEFAULT_SQL_DTB . ';host=' . self::DEFAULT_SQL_HOST, self::WRITE_SQL_USER, self::WRITE_SQL_PASS);

        $this->writeGameCommentStatement = $this->getPdo()->prepare("INSERT INTO commentaire(id, libellé) VALUES(?, ?);");

        $this->deleteSessionStatement = $this->getPdo()->prepare("DELETE FROM session WHERE idUser = ?");

        $this->insertSessionStatement = $this->getPdo()->prepare("INSERT INTO session(sessionToken, idUser) VALUES(?, ?)");

        $this->setProgressLvlStatement = $this->getPdo()->prepare("UPDATE user SET nv_progression = ? WHERE id = ?");
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

    public function writeGameComment($id, $comment){
        $statement = $this->writeGameCommentStatement;
        $statement->execute(array($id, $comment));

        return $statement;
    }

    public function deleteSession($id){
        $statement = $this->deleteSessionStatement;
        $statement->execute(array($id));
        return $statement;
    }

    public function insertSession($token, $id){
        $statement = $this->insertSessionStatement;
        $statement->execute(array($token,$id));
        return $statement;
    }

    public function setProgressLvl($id, $lvl){
        $statement = $this->setProgressLvlStatement;
        $statement->execute(array($lvl,$id));
        return $statement;
    }
}

?>