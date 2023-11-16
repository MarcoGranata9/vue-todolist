const {createApp} = Vue

createApp ({
    data() {
        return {
            todoElem: {
                text: "",
                done: false
            },
            todoArray: [],
        }
    },
    methods: {
        addTodo: function() {
            this.todoArray.push({...this.todoElem})   
            this.todoElem.text = ""
        },
        removeTodo: function(index) {
            this.todoArray.splice(index, 1)
        },
        lineThroughClick: function(index) {
            this.todoArray[index].done = !this.todoArray[index].done
        }
    }
}).mount("#app")