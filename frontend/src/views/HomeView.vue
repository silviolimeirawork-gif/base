<template>
  <div class="container-fluid p-3">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8 mx-auto">

        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Lista de Usuários</h5>
          </div>

          <div class="card-body">
            <div v-if="loading" class="text-center py-4">
              <div class="spinner-border text-primary"></div>
            </div>

            <div v-else class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="u in users" :key="u.id">
                    <td>{{ u.name }}</td>
                    <td>{{ u.email }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const users = computed(() => store.state.user.users)
const loading = computed(() => store.state.user.loading)

onMounted(() => {
  store.dispatch('user/fetchUsers')
})
</script>
