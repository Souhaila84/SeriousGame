<?php

namespace PHPUnit\Doctrine\Instantiator\Exception;

include_once('../Model/DataAccessWrite.php');

use DataAccessWrite;
use PHPUnit\Framework\TestCase;

class DataAccessWriteTest extends TestCase
{

    public function testPrepareSql(){
        //On crée un nouvel objet DataAccess, cela va appeler le constructeur et preparer toutes les requettes
        $this->assertInstanceOf(DataAccessWrite::class, DataAccessWrite::getInstance());
    }

}
