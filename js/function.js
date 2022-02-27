const buttons = document.querySelectorAll('.cell');
const restart = document.querySelector('.js-restart');
const turnitem = document.querySelectorAll('.turn-item');
const stms = document.querySelector('.js-state-message');
const piece = {
    batu:'×',
    maru: '○'
};
const cells = new Array(9)
const win_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let count = 1;
let fin;


buttons.forEach(function(target) {
    target.addEventListener('click', function() {
        if(target.innerText != "" || fin === true)return;

        //番号取得
        const index = Number(target.getAttribute('data-key')) - 1;
        
        //○、×判定
        if(count % 2 === 0){
            cells[index] = piece['batu'];
            turnitem[1].classList.remove("active");
            turnitem[0].classList.add("active");
        }else{
            cells[index] = piece['maru'];
            turnitem[0].classList.remove("active");
            turnitem[1].classList.add("active");
        }

        //○×表記
        target.innerText=cells[index];

        if(judge() === true){
            stms.innerText = cells[index]+' win!!';
            fin = true;
        }else if(count == 9){
            stms.innerText = 'draw';
            fin = true;
        }
        
        //couner+1
        count = count+1;


    }, false);
    
});

function judge(){
   return win_patterns.some(pattern => {
       const one   = cells[pattern[0]]
       const two   = cells[pattern[1]]
       const three = cells[pattern[2]]
       
       return one && one === two && one === three
    });
    
}

restart.addEventListener('click', function() {
    buttons.forEach(function(e) {
        e.innerText = "";
    })
        turnitem[1].classList.remove("active");
        turnitem[0].classList.add("active");
        count = 1;
        fin = false;
        cells.length = 0;
        stms.innerText = "starting...";
});
