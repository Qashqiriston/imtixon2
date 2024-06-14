<template>
    <form @submit.prevent="handleSubmit" class="mb-4">
      <input
        v-model="task"
        type="text"
        placeholder="New Task"
        class="border p-4 mr-4"
      />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">Add Todo</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const task = ref('')
  
  const emit = defineEmits(['add-task'])
  
  const handleSubmit = () => {
    if (task.value.trim() === '') return
    emit('add-task', task.value)
    task.value = ''
  }
  </script>
  