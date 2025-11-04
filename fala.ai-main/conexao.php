<?php

// conexao.php

$host = 'localhost';     // Geralmente 'localhost'
$dbname = 'falaai'; // O nome do seu banco de dados
$user = 'root';          // Usuário padrão do MySQL no XAMPP é 'root'
$pass = '';              // Senha padrão do MySQL no XAMPP é vazia

try {
    // Conexão usando PDO (PHP Data Objects)
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    
    // Configura o PDO para lançar exceções em caso de erro
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    // Em caso de erro na conexão, exibe a mensagem
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}

?>