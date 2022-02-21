const buttons = document.querySelectorAll('.cell');
const restart = document.querySelector('.js-restart');
const turnitem = document.querySelectorAll('.turn-item');
const stms=document.querySelector('.js-state-message');

var count=1;
var tmp;
var fin;


buttons.forEach(function(target) {
    
    target.addEventListener('click', function() {
        
        if(target.innerText!="" || fin==1)return;

        //○、×判定
        if(count%2==0){
            tmp='○'
            turnitem[0].classList.remove("active");
            turnitem[1].classList.add("active");
        }else{
            tmp='×'
            turnitem[1].classList.remove("active");
            turnitem[0].classList.add("active");
        }

        //○×表記
        target.innerText=tmp

        //couner+1
        count=count+1;

        if(judge(buttons,tmp)=='win'){
            stms.innerText=tmp+' win!!';
            fin=1;
        }else if(judge(buttons,tmp)=='draw'){
            stms.innerText='draw';
            fin=1;
        }
        



    }, false);
    
});

function judge(buttons,tmp){
    
    const map =new Map();
    var t=0;
    var draw=0;

    map.set("1",[buttons[0].innerText,buttons[1].innerText,buttons[2].innerText]);
    map.set("2",[buttons[3].innerText,buttons[4].innerText,buttons[5].innerText]);
    map.set("3",[buttons[6].innerText,buttons[7].innerText,buttons[8].innerText]);
    map.set("4",[buttons[0].innerText,buttons[3].innerText,buttons[6].innerText]);
    map.set("5",[buttons[1].innerText,buttons[4].innerText,buttons[7].innerText]);
    map.set("6",[buttons[2].innerText,buttons[5].innerText,buttons[8].innerText]);
    map.set("7",[buttons[0].innerText,buttons[4].innerText,buttons[8].innerText]);
    map.set("8",[buttons[2].innerText,buttons[4].innerText,buttons[6].innerText]);


    map.forEach(
        function( value ,key  ){
            if(value.some(value=>value=="")){
                draw=1;
            }
            if(value.every(value=>value!="" && value==tmp)){
                t=1;       
            }
        }
    );
    
    if(t==1)return 'win';
    if(draw==0)return 'draw';
}

restart.addEventListener('click', function() {
    buttons.forEach(function(e) {
        e.innerText="";
    })
    turnitem[1].classList.remove("active");
    turnitem[0].classList.add("active");
});

