<?php

$host = $_ENV['DB_HOST'] ?? "127.0.0.1";
$db = $_ENV['DB_NAME'] ?? "vue_project";
$user = $_ENV['DB_USER'] ?? "root";
$pass = $_ENV['DB_PASS'] ?? "password123";

$pdo = new PDO(
    "mysql:host={$host};
    dbname={$db};
    charset=utf8mb4",
    $user,
    $pass,
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

