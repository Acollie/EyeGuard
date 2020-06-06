
new Vue({
    el: '#app',
    data: {
        timeout:0,
        button_name:"Start",
        stop:false
    },

    methods:{
        stop_button:function(){
            this.stop=true
        },
      start_time:function () {
          this.button_name="stop"
          this.started=true
          if(!this.stop){
              setTimeout(function () {
                  this.start_time()
                  this.timeout+=1
                  console.log(this.timeout)

              }.bind(this), 1000)
          }
      }
    },
    computed:{
        time_compute:function () {
            return Math.floor(this.timeout / 60) +" minutes";
        }
    }
})
