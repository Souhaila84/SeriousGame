<?php

namespace service;

include_once ('php/Model/DataAccessRead.php');
use DataAccessRead;

class CommentChecking
{

    public function readComment(){
        $comment = '';
        $result = DataAccessRead::getInstance()->commGenerated();
        if ($result->rowCount() > 0){
            $comment = $result->fetch();
        }

        return $comment;
    }
}