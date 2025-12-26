<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="container">
        <h1 class="mb 5">Bootstrap Grid Columns</h1>
        <div class="row">
          <div class="col bg-light border">1 of 2</div>
          <div class="col bg-light border">2 of 2</div>
        </div>
        <!-- Responsive Grid -->
        <div class="row">
          <div class="col-sm-6 col-lg-3 bg-light border">1 of 4</div>          
          <div class="col-sm-6 col-lg-3 bg-light border">2 of 4</div>          
          <div class="col-sm-6 col-lg-3 bg-light border">3 of 4</div>          
          <div class="col-sm-6 col-lg-3 bg-light border">4 of 4</div>          
        </div> 
        <!-- Row Cols -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
          <div class="col bg-light border">Column</div>
        </div>
        <!-- Nesting -->
        <div class="row">
          <div class="col bg-light border p-3">Column</div>
          <div class="col bg-light border p-3">Column</div>
          <div class="col bg-light border p-3">
            <div class="row">
              <div class="col text-bg-dark">Next</div>
              <div class="col text-bg-dark">Next</div>
            </div>
          </div>
        </div>
        <!-- Gutters -->
        <div class="row g-3">
          <div class="col-md-4">
            <div class="p-3 text-bg-primary">
              Content Item
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 text-bg-primary">
              Content Item
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 text-bg-primary">
              Content Item
            </div>
          </div>
        </div>
        <!-- Offsetting Columns -->
        <div class="row">
          <div class="col-md-4 offset-4">
            <div class="p-3 text-bg-primary">
              Content Item
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 text-bg-primary">
              Content Item
            </div>
          </div>
        </div>
        <!-- Ordering -->
        <div class="row">
          <div class="col bg-light border order-2">Column 1</div>
          <div class="col bg-light border order-4">Column 2</div>
          <div class="col bg-light border order-1">Column 3</div>
          <div class="col bg-light border order-3">Column 4</div>
        </div> 
    </div>

</template>

<style scoped>
</style>
