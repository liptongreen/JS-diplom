let text = document.getElementById('counter1');
let text1 = document.getElementById('counter2');
let sec = 40;
let min = 49;
let hour = 9;

function timer(){
    setInterval(() => {
        sec--;
        if(sec < 0){
            min--;
            sec = 59;
        } else if(min < 0){
            min = 59;
            hour--;
        }
            if(sec < 10){
                if(min < 10){
                    text.innerHTML = '0' + hour + ':0' + min + ':0' + sec;
                    text1.innerHTML = '0' + hour + ':0' + min + ':0' + sec;
                } else {
                    text.innerHTML = '0' + hour + ':' + min + ':0' + sec;
                    text1.innerHTML = '0' + hour + ':' + min + ':0' + sec;
                }
            } else {
                if (min < 10) {
                    text.innerHTML = '0' + hour + ':0' + min + ':' + sec;
                    text1.innerHTML = '0' + hour + ':0' + min + ':' + sec;
                } else {
                    text.innerHTML = '0' + hour + ':' + min + ':' + sec;
                    text1.innerHTML = '0' + hour + ':' + min + ':' + sec;
                }
            }
        }, 1000);
};
timer();