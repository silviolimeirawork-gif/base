<template>
    <div class="container">
        <h1 class="mb-5">Dropdowns</h1>
    </div>
    <br><hr>
    <!-- Single Button -->
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Dropdown</button>
        <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-item">Item 1</a></li>
            <li><a href="#" class="dropdown-item">Item 2</a></li>
            <li><a href="#" class="dropdown-item">Item 3</a></li>
        </ul>
    </div>
    <br><hr>
    <!-- Split Button -->
    <div class="btn btn-group">
        <button class="btn btn-danger">Action</button>
        <button class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
            <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-item">Item 1</a></li>
            <li><a href="#" class="dropdown-item">Item 2</a></li>
            <li><a href="#" class="dropdown-item">Item 3</a></li>
        </ul>
    </div>
    <br><hr>
    <!-- Dark Dropdown -->
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Dropdown</button>
        <ul class="dropdown-menu dropdown-menu-dark">
            <li><a href="#" class="dropdown-item">Item 1</a></li>
            <li><a href="#" class="dropdown-item">Item 2</a></li>
            <li><a href="#" class="dropdown-item">Item 3</a></li>
        </ul>
    </div>
    <br><hr>
    <!-- Dropup -->
    <div class="btn-group dropup">
        <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">Dropup</button>
        <ul class="dropdown-menu dropdown-menu-dark">
            <li><a href="#" class="dropdown-item">Item 1</a></li>
            <li><a href="#" class="dropdown-item">Item 2</a></li>
            <li><a href="#" class="dropdown-item">Item 3</a></li>
        </ul>
    </div>
    <br><hr>
    <!-- Navbar with Dowpdown -->
    <nav class="navbar navbar-expand-md bg-light">
        <div class="container">
            <a href="#" class="navbar-brand">Navbar</a>
            <button 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                class="navbar-toggler"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown">Dropdown</a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a href="#" class="dropdown-item">Item 1</a></li>
                            <li><a href="#" class="dropdown-item">Item 2</a></li>
                            <li><a href="#" class="dropdown-item">Item 3</a></li>
                        </ul>                        
                    </li>


                </ul>
            </div>
        </div>
    </nav>



</template>