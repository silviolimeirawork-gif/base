<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="container">
        <h1 class="mb-5">Cards</h1>
        <!-- Basic Text Card -->
        <div class="card" style="width: 25rem">
          <h5 class="card-title">Card Title</h5>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
          </div>
        </div> 
        <br />
        <!-- Card With Image -->
        <div class="card" style="width: 25rem">
          <img src="https://picsum.photos/200" class="card-img-top" alt="">
          <h5 class="card-title">Card Title</h5>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
          </div>
        </div> 
        <br />
        <!-- Header & Footer -->
        <div class="card" style="width: 25rem">
          <div class="card-header">
            Card Header
          </div>
          <div class="card-body">
            <img src="https://picsum.photos/200" class="card-img-top" alt="">
            <h5 class="card-title">Card Title</h5>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
            </div>
          </div>
          <div class="card-footer">
            Card Footer
          </div>
        </div> 
        <br />
        <!-- Grid Columns & Colors -->
        <div class="row">
          <div class="col-md-3">
            <div class="card text-bg-primary">
              <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <div class="card-body">
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
                </div>
              </div>
            </div> 
          </div>
          <div class="col-md-3">
            <div class="card text-bg-danger">
              <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <div class="card-body">
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
                </div>
              </div>
            </div> 
          </div>
          <div class="col-md-3">
            <div class="card text-bg-dark">
              <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <div class="card-body">
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
                </div>
              </div>
            </div> 
          </div>
          <div class="col-md-3">
            <div class="card text-bg-warning">
              <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <div class="card-body">
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <br>
        <!-- Card Group -->
        <div class="card-group">
          <div class="card" style="width: 25rem">
            <img src="https://picsum.photos/200" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
            </div>
          </div> 
          <div class="card" style="width: 25rem">
            <img src="https://picsum.photos/200" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
            </div>
          </div> 
          <div class="card" style="width: 25rem">
            <img src="https://picsum.photos/200" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias dolor minus architecto velnemo laboriosam aut temporibus ratione optio.</p>
            </div>
          </div> 
        </div> 

        <br>
        <!-- Placeholders -->
        <div class="card" style="width: 18rem">
          <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7 m-1"></span>
                <span class="placeholder col-4 m-1"></span>
                <span class="placeholder col-4 m-1"></span>
                <span class="placeholder col-6 m-1"></span>
                <span class="placeholder col-8 m-1"></span>
              </p>
              <a href="" class="btn btn-primary disabled placeholder col-6"></a>
          </div>
        </div>
    </div>
</template>

<style scoped>
</style>
