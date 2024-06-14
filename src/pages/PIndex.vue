<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">To Do List</h1>
    <TaskForm @add-task="addTask" />
    <TaskList :tasks="tasks"
      @toggle-task="toggleTask"
      @remove-task="removeTask"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'

const tasks = ref([])

const addTask = (task) => {
  tasks.value.push({ id: Date.now(), text: task, completed: false })
}

const toggleTask = (taskId) => {
  const task = tasks.value.find((t) => t.id === taskId)
  task.completed = !task.completed
}

const removeTask = (taskId) => {
  tasks.value = tasks.value.filter((t) => t.id !== taskId)
}
</script>
