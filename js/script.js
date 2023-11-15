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
        }
    }
}).mount("#app")