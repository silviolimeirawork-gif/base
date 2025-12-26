<template>
    <div class="container">
        <h1>Breadcrumbs & Pagination</h1>

        <!--Breadcrumb -->
        <nav arial-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">About</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="#">Staff</a></li>
            </ol>
        </nav>
        <!--Dividers -->
        <br><hr>
        <nav style="--bs-breadcrumb-divider: '>'" arial-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">About</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="#">Staff</a></li>
            </ol>
        </nav>
        <!-- Pagination -->
        <nav aria-label="page navigation">
            <ul class="pagination">
                <li class="page-item"><a href="#" class="page-link">Previous</a></li>
                <li class="page-item"><a href="#" class="page-link">1</a></li>
                <li class="page-item active"><a href="#" class="page-link">2</a></li>
                <li class="page-item"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link" arial-label="Next">&raquo;</a></li>
            </ul>
        </nav> 

        <br><hr>

        <nav aria-label="page navigation">
            <ul class="pagination">
                <li class="page-item disabled"><a href="#" class="page-link">Previous</a></li>
                <li class="page-item active"><a href="#" class="page-link">1</a></li>
                <li class="page-item"><a href="#" class="page-link">2</a></li>
                <li class="page-item"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link" arial-label="Next">&raquo;</a></li>
            </ul>
        </nav> 

        <!-- Sizing -->
        <br><hr>
        <nav aria-label="page navigation">
            <ul class="pagination pagination-sm">
                <li class="page-item disabled"><a href="#" class="page-link">Previous</a></li>
                <li class="page-item active"><a href="#" class="page-link">1</a></li>
                <li class="page-item"><a href="#" class="page-link">2</a></li>
                <li class="page-item"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link" arial-label="Next">&raquo;</a></li>
            </ul>
        </nav> 

        <!-- Sizing - Larger -->
        <br><hr>
        <nav aria-label="page navigation">
            <ul class="pagination pagination-lg">
                <li class="page-item disabled"><a href="#" class="page-link">Previous</a></li>
                <li class="page-item active"><a href="#" class="page-link">1</a></li>
                <li class="page-item"><a href="#" class="page-link">2</a></li>
                <li class="page-item"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link" arial-label="Next">&raquo;</a></li>
            </ul>
        </nav> 

        <!-- Alignment -->
        <br><hr>
        <nav aria-label="page navigation">
            <ul class="pagination pagination-lg justify-content-center">
                <li class="page-item disabled"><a href="#" class="page-link">Previous</a></li>
                <li class="page-item active"><a href="#" class="page-link">1</a></li>
                <li class="page-item"><a href="#" class="page-link">2</a></li>
                <li class="page-item"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link" arial-label="Next">&raquo;</a></li>
            </ul>
        </nav> 
</div>
</template>
