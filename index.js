//functions

function colorChange(){
    var cells = document.querySelectorAll('.cell');
    cells.forEach(e => {
        e.replaceWith(e.cloneNode(true))
    });
    var cells = document.querySelectorAll('.cell');
    cells.forEach(e => {
        e.addEventListener(method.value,()=>{
            e.style.backgroundColor = colors.value;
        });
    });
};

function createGrid(num){
    while(mainGrid.firstChild){
        mainGrid.removeChild(mainGrid.lastChild);
    }
    for (let i = 1; i<=num ; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <=num ; j++) {
            var cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        };
        mainGrid.appendChild(row);
    };
    colorChange();
};

function changeSize(){
    var size = prompt('Choose size from 1 to 100: ');
    while (size>100||size<1) {
        if (size==undefined) {
            return;
        }
        size = prompt('Not valid! Choose size from 1 to 100: ')
    };
    createGrid(parseInt(size));
};

//method change
const method = document.querySelector('#method');

//create initial gridS
const mainGrid = document.querySelector('.main-grid');
createGrid(16);

//change button size
const sizeChange = document.querySelector('#size-change');
sizeChange.addEventListener('click',()=>{
    changeSize();
});

//color change
const colors = document.querySelector('#color-input');
colors.addEventListener('change',colorChange());



