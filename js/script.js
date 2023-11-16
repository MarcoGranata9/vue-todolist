const {createApp} = Vue

createApp ({
    data() {
        return {
            todoElem: "",
            todoArray: [],
        }
    },
    methods: {
        addTodo: function() {
            this.todoArray.push(this.todoElem)
            this.todoElem = ""
        },
        removeTodo: function(index) {
            this.todoArray.splice(index, 1)
        }
    }
}).mount("#app")