const buttons = document.querySelectorAll('.cell');
const restart = document.querySelector('.js-restart');


var count=1;
var tmp;

buttons.forEach(function(target) {
    target.addEventListener('click', function() {

        //○、×判定
        if(count%2==0){
            tmp='○'


        }else{
            tmp='×'


        }

        //○×表記
        target.innerText=tmp
    

        //couner+1
        count=count+1;
    }, false);

});


restart.addEventListener('click', function() {
    buttons.forEach(function(e) {
        e.innerText="";
    })
});

