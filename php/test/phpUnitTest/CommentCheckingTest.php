<?php

namespace PHPUnit\Doctrine\Instantiator\Exception\lib;

include_once('../service/CommentChecking.php');

use service\CommentChecking;
use PHPUnit\Framework\TestCase;

class CommentCheckingTest extends TestCase
{

    private $commentChecking;

    /**
     * On crée un objet CommentChecking pour l'utiliser dans les tests
     * @before
     */
    public function setUpCommentChecking(){
        $this->commentChecking = new CommentChecking();
    }

    public function testReadComment()
    {
        $comment = $this->commentChecking->readComment();

        $this->assertIsArray($comment);
        $this->assertTrue(count($comment) == 2);

        $this->assertIsString($comment[0]);
        $this->assertIsString($comment[1]);
    }
}
