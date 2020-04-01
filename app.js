new Vue({
  el: '#app',
  data: {
    title:'Becoming a Vue Phoenix',
    name:'Thomas',
    url:'https://www.youtube.com',
    classes:['one','two'],
    wage:10,
    coords:{
      x:0,
      y:0
    }
  },
  methods: {
    greet(time){
      return `Hello and good ${time} ${this.name}.`   // Unlike with React, not this.data.name !! Vue goes straight to the top !!
    },
    changeWage(amount){
      this.wage += amount
    },
    logEvent(e){
      console.log(e)
    },
    logCoords(e){
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    },
    updateName(e){
      console.log(e.target.value)
      this.name = e.target.value ? e.target.value : 'Dirk'         // Three names ! hahaa            //notice keypress is always one behind keyup !!
    },
    logMessage(){
      console.log(`MADE YOU CLICK...`)
    }
  }
})