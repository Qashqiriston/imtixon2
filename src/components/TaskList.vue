<template>
    <ol>
      <li
        v-for="task in tasks"
        :key="task.id"
        class="flex items-center justify-between mb-2 p-2 border rounded"
      >
        <span
          :class="{
            'line-through text-gray-500': task.completed,
          }"
          @click="toggleTask(task.id)"
          class="cursor-pointer"
        >
          {{ task.text }}
        </span>
        <button
          @click="removeTask(task.id)"
          class="bg-red-500 text-white px-2 py-1"
        >
          Remove
        </button>
      </li>
    </ol>
  </template>
  
  <script setup>
  const props = defineProps({
    tasks: {
      type: Array,
      required: true
    }
  })
  
  const emit = defineEmits(['toggle-task', 'remove-task'])
  
  const toggleTask = (taskId) => {
    emit('toggle-task', taskId)
  }
  
  const removeTask = (taskId) => {
    emit('remove-task', taskId)
  }
  </script>
  