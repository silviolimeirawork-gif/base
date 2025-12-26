<?php

class User {
    public function all($pdo) {
        return $pdo->query("SELECT id, name, email FROM users")
                   ->fetchAll(PDO::FETCH_ASSOC);
    }
}

