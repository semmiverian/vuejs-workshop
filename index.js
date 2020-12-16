const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      newTodo: '',
      todos: [],
      users: [],
      staticUsers: [],
      findUser: ''
    }
  },
  methods: {
    decrementCounter() {
      this.counter--
    },
    incrementCounter() {
      this.counter++
    },
    addTodo() {
      this.todos.push(this.newTodo)
    },
    deleteTodo(selectedIndex) {
      this.todos = this.todos.filter((todo, index) => index !== selectedIndex)
    }
  },
  computed: {
    todosCount() {
      return this.todos.length
    }
  },
  watch: {
    findUser(value) {
      if (value === '') {
        this.users = this.staticUsers
      } else {
        this.users = this.staticUsers.filter(
          (user) =>
            user.name.first.toLowerCase().includes(value.toLowerCase()) ||
            user.name.last.toLowerCase().includes(value.toLowerCase())
        )
      }
    }
  },
  async mounted() {
    const data = await fetch('https://randomuser.me/api/?results=10').then((res) => res.json())
    this.users = data.results
    this.staticUsers = data.results
  }
})

app.mount('#app')
