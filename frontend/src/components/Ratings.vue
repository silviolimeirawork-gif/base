<template>
    <div class="container">
        <div class="card bg-light border-0 shadow-lg rounded-4 mt-5">
            <div class="card-body">
                <!-- Top Row -->
                <div class="row p-5">
                    <div class="col-7">
                        <h2 class="fw-bold">
                            What others think about the product
                        </h2>
                    </div>
                    <div class="col-5">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="display-5 fw-semibold text-center">
                                    <i class="text-warning"><font-awesome-icon :icon="['fas', 'star']" /></i>
                                    <i>4.8</i>
                                </h3>
                                <p class="text-center">Average Rating</p>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Search -->
                 <div class="row px-5">
                    <div class="col-12">
                        <div class="input-group input-group-lg">
                            <span class="input-group-text rounded-start-5">
                                <i class=""><font-awesome-icon :icon="['fas', 'search']" /></i>
                            </span>
                            <input type="text" class="form-control rounded-end-5"
                                placeholder="Search Reviews">
                        </div>
                    </div>
                 </div>
                 <!-- Ratings-->
                <div class="row p-5">
                    <div class="col-12 vstack gap-2">
                        <h5>Reviews</h5>
                        <div class="d-flex align-items-center gap-1">
                            <span>5</span><span class="text-warning"><font-awesome-icon :icon="['fas', 'star']" /></span>
                            <div class="progress ms-3" style="height:10px; width:100%">
                                <div class="progress-bar bg-warning"
                                    style="width:80%"
                                    role="progressbar"
                                    aria-valuenow="80"
                                    aria-min="0"
                                    aria-max="100">
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-1">
                            <span>4</span><span class="text-warning"><font-awesome-icon :icon="['fas', 'star']" /></span>
                            <div class="progress ms-3" style="height:10px; width:100%">
                                <div class="progress-bar bg-warning"
                                    style="width:60%"
                                    role="progressbar"
                                    aria-valuenow="60"
                                    aria-min="0"
                                    aria-max="100">
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-1">
                            <span>3</span><span class="text-warning"><font-awesome-icon :icon="['fas', 'star']" /></span>
                            <div class="progress ms-3" style="height:10px; width:100%">
                                <div class="progress-bar bg-warning"
                                    style="width:20%"
                                    role="progressbar"
                                    aria-valuenow="20"
                                    aria-min="0"
                                    aria-max="100">
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-1">
                            <span>2</span><span class="text-warning"><font-awesome-icon :icon="['fas', 'star']" /></span>
                            <div class="progress ms-3" style="height:10px; width:100%">
                                <div class="progress-bar bg-warning"
                                    style="width:10%"
                                    role="progressbar"
                                    aria-valuenow="10"
                                    aria-min="0"
                                    aria-max="100">
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-1">
                            <span>1</span><span class="text-warning"><font-awesome-icon :icon="['fas', 'star']" /></span>
                            <div class="progress ms-3" style="height:10px; width:100%">
                                <div class="progress-bar bg-warning"
                                    style="width:30%"
                                    role="progressbar"
                                    aria-valuenow="30"
                                    aria-min="0"
                                    aria-max="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Button -->
                <div class="row px-5 pb-4">
                    <div class="col-12">
                        <a href="#" class="btn btn-success btn-lg rounded-5">
                            Write Review
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @media(min-width: 600px) {
        .container {
            width: 600px;
        }
    }
</style>