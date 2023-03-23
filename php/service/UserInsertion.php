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
}