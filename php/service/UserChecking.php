<?php

namespace service;

use DataAccessRead;

class UserChecking
{
    public static function isLogged(){
        $request_id = $_COOKIE['id_user'] ?? ''; // the id to test

        $dataAccess = DataAccessRead::getInstance();

        $statement = $dataAccess->getSessionToken($request_id);
        if($statement->rowCount() == 1){
            $userToken = $statement->fetch()->sessionToken;
        }
        $request_token = $_COOKIE['login_token'] ?? '';

        return (empty($request_token) ? false : $request_token == $userToken); // test if is connected
    }

    // this function verify if user already exist
    public static function isExist($email){
        $resultIsExist = DataAccessRead::getInstance()->userIdFromMail($email);
        return ($resultIsExist->rowCount() > 0);
    }

    public static function userId($email){
        // BEWARE, the mail must exist in DB
        $resultIsExist = DataAccessRead::getInstance()->userIdFromMail($email);
        return $resultIsExist->fetch()->id;
    }

    public static function userPassword($userId){
        // BEWARE, the user must exist in DB
        $getPasswordResult = DataAccessRead::getInstance()->userPasswordFromId($userId);
        return $getPasswordResult->fetch()->password;
    }
}