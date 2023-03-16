<?php

class DataAccessRead {

    private $PDOInstance = null;

    private static $instanceRead = null;

    const DEFAULT_SQL_HOST = "mysql-enqueteroquette.alwaysdata.net";
    const DEFAULT_SQL_DTB = "enqueteroquette_db";

    const READ_SQL_USER = '289405_readOnly'; // user with read only perms
    const READ_SQL_PASS = '%read0!%';

    private $readGameCommStatement;

    private $userPseudoFromIdStatement;

    private $isLoggedStatement;

    private $userIdFromMailStatement;

    private $userPasswordFromIdStatement;

    private $progressLvlFromIdStatement;

    private $isEmailExistStatement;

    private $isPseudoExistStatement;

    private $bestGameTimesStatement;

    private $commGeneratedStatement;

    private function __construct()
    {
        $this->PDOInstance = new PDO('mysql:dbname=' . self::DEFAULT_SQL_DTB . ';host=' . self::DEFAULT_SQL_HOST, self::READ_SQL_USER, self::READ_SQL_PASS);

        //preparing all the queries
        $this->readGameCommStatement = $this->PDOInstance->prepare("SELECT pseudo, libellé FROM user, commentaire WHERE user.id = commentaire.id");

        $this->userPseudoFromIdStatement = $this->PDOInstance->prepare("SELECT pseudo FROM user WHERE id = ?");

        $this->isLoggedStatement = $this->PDOInstance->prepare("SELECT sessionToken FROM session WHERE idUser = ?");

        $this->userIdFromMailStatement = $this->PDOInstance->prepare("SELECT id FROM user WHERE email = ?");

        $this->userPasswordFromIdStatement = $this->PDOInstance->prepare("SELECT password FROM user WHERE id = ?");

        $this->progressLvlFromIdStatement = $this->PDOInstance->prepare("SELECT nv_progression AS lvl FROM user WHERE id = ?");

        $this->isEmailExistStatement = $this->PDOInstance->prepare("SELECT pseudo, email, password FROM user WHERE email = ?");

        $this->isPseudoExistStatement = $this->PDOInstance->prepare("SELECT pseudo, email, password FROM user WHERE pseudo = ?");

        $this->bestGameTimesStatement = $this->PDOInstance->prepare("SELECT pseudo, bestTime FROM user WHERE bestTime IS NOT NULL ORDER BY bestTime LIMIT 5");

        $this->commGeneratedStatement = $this->PDOInstance->prepare("SELECT libelle, pseudo FROM commGenere ORDER BY rand()");
    }
    //static fabric method for limit connexions to the DB
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

    public function isEmailExist($email){
        $statement = $this->isEmailExistStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute(array($email));
        return $statement;
    }

    public function isPseudoExist($pseudo){
        $statement = $this->isPseudoExistStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute(array($pseudo));
        return $statement;
    }

    public function bestGameTimes(){
        $statement = $this->bestGameTimesStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute();
        return $statement;
    }

    public function commGenerated(){
        $statement = $this->commGeneratedStatement;
        $statement->setFetchMode(PDO::FETCH_OBJ);
        $statement->execute();
        return $statement;
    }
}
