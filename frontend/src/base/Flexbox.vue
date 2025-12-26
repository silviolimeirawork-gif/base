<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="container">
        <h1 class="mb-5">Flexbox</h1>
        <!-- Basic Flexbox -->
        <div class="d-flex">
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
        </div> 
        <!-- Flex Column -->
        <div class="d-flex flex-column">
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
        </div> 
        <!-- Using Screen Sizes -->
        <div class="d-flex flex-column flex-md-row">
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
        </div> 
        <!-- Flex Gap -->
        <div class="d-flex flex-wrap">
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
            <div class="text-bg-light p-3">Flex Item</div>
        </div> 
        <!-- Justify Content -->
        <div class="d-flex justify-content-end">
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
        </div>
        <br />
        <div class="d-flex justify-content-around">
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
        </div>
        <br />
        <div class="d-flex justify-content-between">
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
        </div>
        <!-- Align Items -->
        <br />
        <div class="d-flex flex-column align-items-end" style="height: 300px">
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
        </div>
        <br />
        <div class="d-flex flex-column" style="height: 300px">
            <div class="text-bg-dark p-3 align-self-center">Flex Item</div>
            <div class="text-bg-dark p-3 align-self-end">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
        </div>
        <!-- Flex Grow -->
        <br />
        <div class="d-flex">
            <div class="text-bg-primary p-3 flex-grow-1">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
            <div class="text-bg-dark p-3">Flex Item</div>
        </div>

    </div>
</template>

<style scoped>
</style>
