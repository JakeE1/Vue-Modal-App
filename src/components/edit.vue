<template>
  <div id="app">
    Click the values to edit!
    <ul class="todo-list">
        <li v-for="todo in todos" :key="todo">
            <input
                v-if="todo.edit"
                v-model="todo.title"
                @blur="todo.edit = false; $emit('update')"
                @keyup.enter="todo.edit=false; $emit('update')"
                v-focus
            >
            <div v-else>
                <label @click="todo.edit = true;"> {{todo.title}} </label>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
  export default {

  data () {
      return {
        todos: [
      { title: 'one value', edit: false },
      { title: 'one value', edit: false },
      { title: 'otro titulo', edit: false }
    ],
    editedTodo: null,
    message: 'Hello Vue.js!'
  }
  },
  methods: {
    editTodo: function (todo) {
      this.editedTodo = todo
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }}


</script>