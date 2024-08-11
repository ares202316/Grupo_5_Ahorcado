<?php
// Configuración de la base de datos
$host = 'localhost';
$db = 'hangman';
$user = 'user';
$pass = 'password';

try {
    // Conectar a la base de datos usando PDO
    $pdo = new PDO("pgsql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Ejecutar la consulta
    $stmt = $pdo->query("SELECT * FROM example_table");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Hangman Game PHP</title>
</head>
<body>
    <h1>Welcome to Hangman! php</h1>
    <a href="{% url 'juego' %}">Play Hangman</a> <!-- 'juego' debe coincidir con el nombre de la URL -->

    <h2>Table Data:</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Example Column</th>
        </tr>
        <?php foreach ($rows as $row): ?>
            <tr>
                <td><?php echo htmlspecialchars($row['id']); ?></td>
                <td><?php echo htmlspecialchars($row['example_column']); ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
