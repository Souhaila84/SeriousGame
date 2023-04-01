<?php

namespace PHPUnit\Doctrine\Instantiator\Exception;

include_once('../Model/DataAccessRead.php');

use DataAccessRead;
use PHPUnit\Framework\TestCase;

class DataAccessReadTest extends TestCase
{

    public function testPrepareSql(){
        //On crée un nouvel objet DataAccess, cela va appeler le constructeur et preparer toutes les requettes
        $this->assertInstanceOf(DataAccessRead::class, DataAccessRead::getInstance());
    }

}
