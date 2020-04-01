new Vue({
  el: '#app',
  data: {
    title:'Becoming a Vue Phoenix',
    name:'Thomas',
    url:'https://www.youtube.com',
    classes:['one','two']
  },
  methods: {
    greet(time){
      return `Hello and good ${time} ${this.name}.`   // Unlike with React, not this.data.name !! Vue goes straight to the top !!
    }
  }
})