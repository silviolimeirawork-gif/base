<?php

require_once '../config/database.php';
require_once '../controllers/UserController.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$uri = $_SERVER['REQUEST_URI'];

if (str_contains($uri, '/users')) {
    (new UserController())->index($pdo);
}

