<?php

namespace service;

include_once ('php/Model/DataAccessRead.php');

use DataAccessRead;

class UserChecking
{

    public function isLogged(){
        $request_id = $_COOKIE['id_user'] ?? ''; // the id to test

        $dataAccess = DataAccessRead::getInstance();

        $statement = $dataAccess->getSessionToken($request_id);
        if($statement->rowCount() == 1){
            $userToken = $statement->fetch()->sessionToken;
        }
        $request_token = $_COOKIE['login_token'] ?? '';

        return (empty($request_token) ? false : $request_token == $userToken); // test if is connected
    }

    // this function verify if user mail already exist
    public function isEmailExist($email){
        $resultIsExist = DataAccessRead::getInstance()->userIdFromMail($email);
        return ($resultIsExist->rowCount() > 0);
    }

    // this function verify if user pseudo already exist
    public function isPseudoExist($pseudo){
        $resultIsExist = DataAccessRead::getInstance()->isPseudoExist($pseudo);
        return ($resultIsExist->rowCount() > 0);
    }

    public function userId($email){
        // BEWARE, the mail must exist in DB
        $resultIsExist = DataAccessRead::getInstance()->userIdFromMail($email);
        return $resultIsExist->fetch()->id;
    }

    public function userPassword($userId){
        // BEWARE, the user must exist in DB
        $getPasswordResult = DataAccessRead::getInstance()->userPasswordFromId($userId);
        return $getPasswordResult->fetch()->password;
    }

    public function pseudoFromID($userId){
        // BEWARE, the user must exist in DB
        $getPseudoResult = DataAccessRead::getInstance()->userPseudoFromId($userId);
        return $getPseudoResult->fetch()->pseudo;
    }

    public function allGameComments(){
        // Getting comments from database
        $resultGameComments = DataAccessRead::getInstance()->readGameComm();

        $allComments = array();

        while ($commentRow = $resultGameComments->fetch()) {
            $pseudo = $commentRow->pseudo;
            $content = $commentRow->libellé;
            $rate = $commentRow->note;
            $allComments[] = array($pseudo,$content,$rate);
        }

        return $allComments;
    }

    public function bestGameTime(){
        $bestsTimes = array(array());

        $resultBestTime = DataAccessRead::getInstance()->bestGameTimes();
        if ($resultBestTime){
            while($row = $resultBestTime->fetch()){
                $seconds = ($row->bestTime / 1000)% 60;
                $minutes = floor(($row->bestTime / 1000) / 60);
                $bestsTimes[] = array($row->pseudo, $minutes, $seconds);
            }
        }

        return $bestsTimes;
    }

    public function progressLvlFromId($id){
        $progressLvl = 0;
        $resultProgressLvl = DataAccessRead::getInstance()->progressLvlFromId($_COOKIE['id_user'] ?? '');
        if ($resultProgressLvl->rowCount() == 1){
            $progressLvl = $resultProgressLvl->fetch()->lvl;
        }

        return $progressLvl;
    }
}