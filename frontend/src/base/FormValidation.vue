<template>
    <div class="container">

        <h1>Form Validation & Display</h1>
        <form @submit.prevent="handleSubmit" novalidate>
            <div class="mb-3">
                <label class="form-label" for="username">Username</label>
                <input class="form-control" type="text" id="username" v-model="username" 
                @input="validateEmail" placeHolder="Enter a valid username"/>
            </div>
            <div class="mb-3">
                <label class="form-label" for="email">Email</label>
                <input class="form-control" type="email" id="email" v-model="email" 
                @input="validateEmail" placeHolder="Enter a valid email"/>
                <div :class="{'error-message': true}" v-if="emailError">{{ emailError }}</div>
                <div :class="{'input-valid': true}" v-else>{{ "Looks Good" }}</div>
            </div>


            <button type="submit" :disabled="!isFormValid">Submit</button>

        </form>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const username = ref('')
const email = ref('')
const emailError = ref('')

const city = ref('')

const validateEmail = () => {
  if (!email.value) {
    emailError.value = 'Email is required.'
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) { // Basic regex check
    emailError.value = 'Invalid email format.'
  } else {
    emailError.value = ''
  }
}

const isFormValid = computed(() => {
  // Check that initial validation has run (or run it here) and there are no errors
  return email.value !== '' && !emailError.value;
});

const handleSubmit = () => {
  validateEmail(); // Ensure final validation on submit
  if (isFormValid.value) {
    alert('Form submitted successfully!');
    // Handle form submission logic (e.g., API call)
  }
};

</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

/* Style for the input when it is invalid, using the dynamically applied class */
.input-invalid {
  border-color: #dc3545;
  outline-color: #dc3545;
}

.input-valid {
  color: green; /* Red color for error */
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Style for your custom error message element */
.error-message {
  color: #dc3545; /* Red color for error */
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* You can also use native HTML5 pseudo-classes for styling inputs */
input:invalid:not(:placeholder-shown) {
  border-color: #dc3545;
}

input:valid {
  border-color: #28a745; /* Green color for valid */
}
</style>