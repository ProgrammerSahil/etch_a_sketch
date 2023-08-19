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
            rowContainer.appendChild(row);
        }
    }
}


window.onload = function(){

    createGrid(32);


    
}