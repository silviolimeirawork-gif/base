<template>
    <div class="container">
        <h1 class="mb-5">Carousel</h1>
        <!--Carousel -->
        <div class="carousel slide" id="slider">

            <!-- Indicators -->
            <div class="carousel-indicators">
                <button class="active"
                    data-bs-slide-to="0"
                    data-bs-target="#slider"
                ></button>
                <button class="active"
                    data-bs-slide-to="1"
                    data-bs-target="#slider"
                ></button>

            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152537062/settings_images/18b2741-a50-55da-37bc-c77252583e_modernjs.webp" 
                        alt="" class="d-block w-100" />
                        <div class="carousel-caption d-none d-md-block bg-secondary opacity-75">
                            <h5>Modern JS From The Beggining</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nam nobis repellendus vel et unde saepe sed quae debitis, minus doloremque tempora repellat incidunt? Optio quis eos laudantium doloremque minima?</p>
                        </div>
                </div>
                <div class="carousel-item">
                    <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152537062/settings_images/a6146c8-c550-e60d-83d-da0202f6bd7_258ea558-245b-4906-b8d6-3412e8d6f0a7.jpg" 
                        alt="" class="d-block w-100" />
                        <div class="carousel-caption d-none d-md-block bg-secondary opacity-75">
                            <h5>MERN Stack From Scratch</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nam nobis repellendus vel et unde saepe sed quae debitis, minus doloremque tempora repellat incidunt? Optio quis eos laudantium doloremque minima?</p>
                        </div>
                </div>

            </div>
            <!-- Buttons -->
            <button class="carousel-control-prev"
                data-bs-slide="prev"
                data-bs-target="#slider">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next"
                data-bs-slide="next"
                data-bs-target="#slider">
                <span class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>