
<template>
    <div class="container">
        <h1 class="mb-5">List Groups & Badges</h1>
        <!-- Simple List Group -->
        <ul class="list-group">
            <li class="list-group-item disabled">Tony Stark</li>
            <li class="list-group-item active">Steve Rogers</li>
            <li class="list-group-item">Bruce Benners</li>
            <li class="list-group-item">Thor Odinson</li>
            <li class="list-group-item">Rick Jones</li>
        </ul>
        <br>
        <!-- Links -->
        <ul class="list-group">
            <li class="list-group-item disabled" href="#">Tony Stark</li>
            <li class="list-group-item active" href="#">Steve Rogers</li>
            <li class="list-group-item" href="#">Bruce Benners</li>
            <li class="list-group-item" href="#">Thor Odinson</li>
            <li class="list-group-item" href="#">Rick Jones</li>
        </ul> 
        <br>
        <!-- Flush Style -->
        <ul class="list-group list-group-flush">
            <li class="list-group-item disabled">Tony Stark</li>
            <li class="list-group-item active">Steve Rogers</li>
            <li class="list-group-item">Bruce Benners</li>
            <li class="list-group-item">Thor Odinson</li>
            <li class="list-group-item">Rick Jones</li>
        </ul> 
        <br>
        <!-- Numbered List -->
        <ol class="list-group list-group-numbered">
            <li class="list-group-item disabled">Tony Starks</li>
            <li class="list-group-item active">Steve Rogers</li>
            <li class="list-group-item">Bruce Benner</li>
            <li class="list-group-item">Rick Jones</li>
        </ol>
        <br>
        <!-- Badbes -->
        <h1>Example heading <span class="badge bg-primary">New</span></h1>
        <h2>Example heading <span class="badge bg-secondary">New</span></h2>
        <h3>Example heading <span class="badge bg-success">New</span></h3>
        <h4>Example heading <span class="badge bg-danger">New</span></h4>
        <h5>Example heading <span class="badge bg-warning">New</span></h5>
        <h6>Example heading <span class="badge bg-info">New</span></h6>
        
        <hr>
        <!-- In Button -->
        <button type="button" class="btn btn-primary">Notifications <span class="badge text-bg-dark">New</span></button>

        <br><hr>
        <!-- Badges in List Group -->
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-betwwen align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Electronics</div>
                    Content for this item
                </div>
                <span class="badge bg-primary rounded-pill">20</span>
            </li>
            <li class="list-group-item d-flex justify-content-betwwen align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Fashion</div>
                    Content for this item
                </div>
                <span class="badge bg-danger rounded-pill">20</span>
            </li>
            <li class="list-group-item d-flex justify-content-betwwen align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Sports</div>
                    Content for this item
                </div>
                <span class="badge bg-success rounded-pill">30</span>
            </li>

        </ul>
        
    </div>    
</template>