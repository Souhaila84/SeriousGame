<?php

class DataAccessWrite {

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

    private $insertNewAccountStatement;

    private $updatePlayerTimeStatement;

    private function __construct()
    {
        $this->PDOInstance = new PDO('mysql:dbname=' . self::DEFAULT_SQL_DTB . ';host=' . self::DEFAULT_SQL_HOST, self::WRITE_SQL_USER, self::WRITE_SQL_PASS);

        $this->writeGameCommentStatement = $this->getPdo()->prepare("INSERT INTO commentaire(id, libellé) VALUES(?, ?);");

        $this->deleteSessionStatement = $this->getPdo()->prepare("DELETE FROM session WHERE idUser = ?");

        $this->insertSessionStatement = $this->getPdo()->prepare("INSERT INTO session(sessionToken, idUser) VALUES(?, ?)");

        $this->setProgressLvlStatement = $this->getPdo()->prepare("UPDATE user SET nv_progression = ? WHERE id = ?");

        $this->insertNewAccountStatement = $this->getPdo()->prepare("INSERT INTO user(pseudo, email, password) VALUES(?, ?, ?)");

        $this->updatePlayerTimeStatement = $this->getPdo()->prepare("UPDATE user SET bestTime=? WHERE id=? AND (bestTime > ? OR bestTime IS NULL)");
    }
    //static fabric method for limit connexions to the DB
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

    public function insertNewAccount($pseudo, $email, $hash){
        $statement = $this->insertNewAccountStatement;
        $statement->execute(array($pseudo,$email,$hash));
        return $statement;
    }

    public function updatePlayerTime($timeValue, $id){
        $statement = $this->updatePlayerTimeStatement;
        $statement->execute(array($timeValue,$id,$timeValue));
        return $statement;
    }
}
