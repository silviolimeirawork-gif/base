<template>
    <div class="container">
        <h1 class="mb-5">Bootstrap Sandbox | Toasts</h1>
    </div>
    <button @click="notify" id="toastBtn" class="btn btn-primary">Show Toast</button>
    <div class="toast-container postition-fixed button-0 end-0 p-3">
        <div class="toast" id="myToast">
            <div class="toast-body text-bg-danger">
                Hello World! This a Toast Message!
            </div>
        </div>
    </div>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; // Import CSS in component if not in main.js

const notify = () => {
    
  toast.warning('Hello World! This a Toast Message!', {
    position: 'top-right', // Optional: override default position
    // You can add other options here
  });
  // Other types are: toast.info, toast.warn, toast.error, toast.default
};


</script>
