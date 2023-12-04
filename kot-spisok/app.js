const { createApp } = Vue

  createApp({
    data() {
      return {
        list: [],
        item:''
      }
    },
    methods:{
        add_list(){
            this.list.push(this.item);
            console.log(this.list);
        },
        deleteItem(index) {
                this.list.splice(index, 1);
         }
     }
  }).mount('#app')