<?php

namespace PHPUnit\Doctrine\Instantiator\Exception;

include_once ('../service/UserChecking.php');

use PHPUnit\Framework\TestCase;
use service\UserChecking;

class UserCheckingTest extends TestCase
{

    private $userChecking;

    /**
     * On crée un objet userChecking pour l'utiliser dans les tests
     * @before
     */
    public function setUpUserChecking(){
        $this->userChecking = new UserChecking();
    }

    public function testAllGameComments()
    {
        $comments = $this->userChecking->allGameComments();

        $this->assertIsArray($comments);
        $this->assertTrue(count($comments) > 0); // on suppose qu'un jeux de données est déja fourni et que la table commentaire n'est pas vide
        $this->assertIsArray($comments[0]); //on vérifie que c'est un tableau de tableau
        $this->assertTrue(count($comments[0]) == 3);

        $this->assertIsString($comments[0][0]);
        $this->assertIsString($comments[0][1]);
        $this->assertIsInt($comments[0][2]);
    }

    public function testBestGameTimes()
    {
        $bestTimes = $this->userChecking->bestGameTimes();

        $this->assertIsArray($bestTimes);
        $this->assertTrue(count($bestTimes) > 0); // on suppose qu'un jeux de donnée est fourni dans la BD
        $this->assertIsArray($bestTimes[0]); //on vérifie que c'est un tableau de tableau
        $this->assertTrue(count($bestTimes[0]) == 3);

        $this->assertIsString($bestTimes[0][0]);
        $this->assertIsInt($bestTimes[0][1]);
        $this->assertIsInt($bestTimes[0][2]);

        //on vérifie qu'il y a bien un ordre croissant
        for ($i = 0; $i <= count($bestTimes) - 2; ++$i) {
            $this->assertTrue($bestTimes[$i][1] <= $bestTimes[$i + 1][1]);
        }

        //on verifie l'unnicité des pseudos, c'est un record personnel
        for ($i = 0; $i <= count($bestTimes) - 2; ++$i) {
            $this->assertFalse($bestTimes[$i][0] === $bestTimes[$i + 1][0]);
        }
    }

    public function testPseudoFromID()
    {
        $this->assertEquals("VeuveuLaFleur", $this->userChecking->pseudoFromID(30));
    }

    public function testIsEmailExist()
    {
        $this->assertTrue($this->userChecking->isEmailExist('alexis.mariotti@laposte.net'));

        //on teste avec une valeur pas conforme au format d'email pour être certain qu'elle n'est pas presente dans le jeu de données
        $this->assertFalse($this->userChecking->isEmailExist('alexis'));
    }

    public function testIsPseudoExist()
    {
        $this->assertTrue($this->userChecking->isPseudoExist("VeuveuLaFleur"));

        $this->assertFalse($this->userChecking->isPseudoExist("a"));
    }

    public function testIsLogged()
    {
        //retire les coockies de connection
        setCookie("id_user","", time() - 3600);
        unset($_COOKIE["id_user"]);
        setCookie("login_token","", time() - 3600);
        unset($_COOKIE["login_token"]);

        $this->assertFalse($this->userChecking->isLogged());
    }

    public function testProgressLvlFromId()
    {
        //le compte avec id 30 est un compte de test et ses valeurs ne seront jamais modifiés
        $this->assertIsInt($this->userChecking->progressLvlFromId(30));
        $this->assertEquals(3,$this->userChecking->progressLvlFromId(30));
    }

    public function testUserId()
    {
        $this->assertEquals(30,$this->userChecking->userId("alexis.mariotti@laposte.net"));

        //on teste avec une valeur pas conforme au format d'email pour être certain qu'elle n'est pas presente dans le jeu de données
        $this->assertNull($this->userChecking->userId("a"));
    }
}
