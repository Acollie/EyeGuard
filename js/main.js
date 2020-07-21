
let cool_down_time=20
let screen_time=20*60

let vue=new Vue({
    el: '#app',
    data: {
        timeout:0,
        button_name:"Start",
        stop:false,
        status:1,
    },
    mounted() {

    },
    methods:{
        stop_button:function(){
            this.status=-1;
        },
        start_time:function () {
            this.status=2
            var audio=new Audio('soundeffects/start.mp3');
            audio.play();
            thread()


        },
        cool_down:function(){
            var audio=new Audio('soundeffects/end.mp3');
            audio.play();
            this.status=3
        },
        return_to_screen:function(){
            var audio=new Audio('soundeffects/start.mp3');
            audio.play();
            this.status=1
            this.timeout=1
            console.log("here")
        },
        update_time:function () {
            this.timeout+=1
            console.log(this.timeout);
        }

    },
    computed:{
        time_compute:function () {
            return Math.floor(this.timeout / 60) +" minutes";
        },
        percent:function () {
            return Math.round((this.timeout/(screen_time*60))*100)
        }
    }
});

function thread() {
    if(vue.status===-1){
        vue.status=1
        vue.timeout=1
        return
    }
    if(vue.timeout===screen_time){
        vue.cool_down()
        alert(1)
    }

    if(vue.timeout>=(screen_time+cool_down_time)){
        vue.return_to_screen()
        alert(2)
    }
    setTimeout(function () {
        vue.update_time()
        thread()
    },1000)
}

function alert(mode) {
    if(mode===1){
        new Notification('Eye guard', {
            body: 'Its been 20 minutes'
        })
    }
    if(mode===2){
        new Notification('Eye guard', {
            body: "Let's get back to work"
        })
    }

}
