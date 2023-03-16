<?php

namespace service;

use DataAccessWrite;

class UserInsertion
{

    public static function deleteSession($userId){
        return (DataAccessWrite::getInstance()->deleteSession($userId) != false);
    }

    public static function insertSession($token, $userId){
        return (DataAccessWrite::getInstance()->insertSession($token,$userId) != false);
    }
}