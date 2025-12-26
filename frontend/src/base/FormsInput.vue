
<template>
    <div class="container">
        <h1 class="mb-5">Forms & Inputs</h1>
        <!-- Basic Form -->
        <form action="">
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="text form-control" />
            </div>
            <div class="mb-3">
                <label for="passwword" class="form-label">Password</label>
                <input type="password" class="text form-control" />
            </div>
            <div class="mb-3">
                <input type="checkbox" class="form-check-input" id="remember"/>
                <label for="remember" class="for-check-label">Remember Me</label>
            </div>
            <input type="submit" value="Login" class="btn btn-primary">
        </form>

        <!-- Other Fields -->
        <br><br>
        <div class="mb-3">
            <select name="" id="" class="form-select">
                <option>Best time to call</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
            </select>
        </div>

        <br><hr>
        <!-- Textarea -->
        <div class="mb-3">
           <textarea class="form-control" placeholder="Message"></textarea>
        </div>

        <br><hr>
        <!-- Switch -->
        <form class="form-check form-switch">
            <input type="checkbox" class="form-check-input">
        </form>

        <br><hr>
        <!-- Inline Checkboxes -->
        <div class="mb-3">
            <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" id="ch1" value="option1" />
                <label for="ch1" class="form-check-label">1</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" id="ch2" value="option2" />
                <label for="ch2" class="form-check-label">2</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" id="ch3" value="option3" />
                <label for="ch3" class="form-check-label">3</label>
            </div>
        </div>

        <br><hr>
        <!-- Toggle Button -->
        <div class="mb-3">
            <input type="checkbox" class="btn-check" id="btn-check"/>
            <label class="btn btn-danger" for="btn-check">Button Toggle</label>
        </div>


        <br><hr>
        <!-- Range -->
        <div class="mb-3">
            <label for="range" class="form-label"></label>
            <input type="range" class="form-range" id="range"/>
        </div> 

        <br><hr>
        <!-- Range Steps-->
        <div class="mb-3">
            <label for="range" class="form-label"></label>
            <input type="range" class="form-range" id="range" min="0" max="5" step="0.5"/>
        </div> 

        <br><hr>
        <!-- Input Groups -->
        <form>
            <div class="input-group mb-3">
                <span class="input-group-text">@</span>
                <input type="email" class="form-control" placeholder="Email" />
            </div>
        </form>

        <br><br>
        <form>
            <div class="input-group">
                <input type="text" class="form-control" />
                <button class="btn btn-outline-secondary">Submit</button>
            </div>
        </form>



    </div>
</template>