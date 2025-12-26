<?php

require_once __DIR__ . '/../models/User.php';

class UserController {
    public function index($pdo) {
        $user = new User();
        echo json_encode($user->all($pdo));
    }
}

