new Vue({
  el: '#app',
  data: {
    title:'Becoming a Vue Phoenix',
    showName: false,
    showAge: true,
    name:'Thomas',
    url:'https://www.youtube.com',
    classes:['one','two'],
    wage:10,
    coords:{
      x:0,
      y:0
    },
    items:['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
    people:[
      { name:'Crystal', age:34, belt:'yellow'},
      { name:'Joachim', age:41, belt:'blue'},
      { name:'Thierry', age:39, belt:'black'}
    ]
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
    },
    toggleName(){
      this.showName = !this.showName
    },
    toggleAge(){
      this.showAge = !this.showAge                                 // note the importance of sequence on the SPA, if and then else-if  !!!
    }
  }
})