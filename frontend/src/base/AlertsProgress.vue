
<template>
    <div class="container">
        <h1 class="mb-5">Alerts & Progress Bars</h1>
        <!-- Alerts -->
        <div class="alert alert-primary" role="alert">
            This is a primary alert!
        </div>
        <div class="alert alert-secondary" role="alert">
            This is a secondary alert!
        </div>
        <div class="alert alert-success" role="alert">
            This is a success alert!
        </div>
        <div class="alert alert-danger" role="alert">
            This is a danger alert!
        </div>
        <div class="alert alert-warning" role="alert">
            This is a warning alert!
        </div>
        <div class="alert alert-info" role="alert">
            This is a info alert!
        </div>
        <div class="alert alert-light" role="alert">
            This is a light alert!
        </div>
        <div class="alert alert-dark" role="alert">
            This is a dark alert!
        </div>
        <br><hr>
        <!----> Alert with link -->
        <div class="alert alert-info">
            This is a info link alert!
            <a href="$" class="alert-link">Example link</a>
        </div>
        <br><hr>
        <!-- Additional Content -->
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well Done</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad quasi laboriosam optio molestias qui eligendi alias a, ullam et nisi esse explicabo magni quibusdam, magnam maiores doloribus molestiae consequatur!</p>
            <hr>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <br><hr>
        <!-- Dismissing -->
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <button class="btn-close" data-bs-dismiss="alert"></button>
            Somenthing went wrong!
        </div>

        <br><hr>
        <!-- Progress bar -->
        <div class="progress mb-4" role="progressbar">
            <div class="progress-bar bg-success" style="width:25%" 
            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>

        <br><hr>
        <!-- Stripes -->
        <div class="progress mb-4" role="progressbar" 
        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped sucess" 
        style="width:50%">50%</div>
        </div>

        <br><hr>
        <!-- Animated Stripes -->
        <div class="progress mb-4" role="progressbar"
        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped 
            progress-bar-animated bg-warning"
            style="width:50%"></div>
        </div>
    </div>

</template>