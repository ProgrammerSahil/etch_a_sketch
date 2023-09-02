function createGrid(size){
    const container = document.querySelector('.container');

    for(let i = 0; i<size; i++){
        let col = document.createElement("div");
        col.classList.add('column');
        container.appendChild(col);
        for(let j = 0; j<size; j++){
            let rowContainer = document.querySelector('.container').lastChild;
            let row = document.createElement("div");
            row.classList.add('row');
            row.id = "box";
            rowContainer.appendChild(row);
        }
    }

}

function reset(size){
    [...document.querySelectorAll('.column')].forEach(function(item){
        item.remove();
    });

    createGrid(size);
}

window.onload = function(){
    createGrid(32);

    [...document.querySelectorAll('.row')].forEach(function(item){
        item.addEventListener('mouseover', function(e){
            item.style.backgroundColor = "red";
        });
    });

}