<?php

namespace service;

use DataAccessWrite;

class UserInsertion
{

    public function deleteSession($userId){
        return (DataAccessWrite::getInstance()->deleteSession($userId) != false);
    }

    public function insertSession($token, $userId){
        return (DataAccessWrite::getInstance()->insertSession($token,$userId) != false);
    }

    public function insertAccount($pseudo, $email, $hash){
        return (DataAccessWrite::getInstance()->insertNewAccount($pseudo,$email,$hash) != false);
    }

    public function writeGameComment($id,$comment,$commentRate){
        return(DataAccessWrite::getInstance()->writeGameComment($id,$comment,$commentRate) != false);
    }

    public function updatePlayerTime($timeValue,$id){
        return(DataAccessWrite::getInstance()->updatePlayerTime($timeValue,$id) != false);
    }

    public function setProgressLvl($id, $lvl){
        return (DataAccessWrite::getInstance()->setProgressLvl($id,$lvl) != false);
    }
}