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

function reset(){
    [...document.querySelectorAll('.column')].forEach(function(item){
        item.remove();
    });

    let slider_value = document.getElementById('main_slider').value;
    createGrid(slider_value);
    listen();

}

function listen(){
    [...document.querySelectorAll('.row')].forEach(function(item){
        item.addEventListener('mouseover', function(e){
            item.style.backgroundColor = "red";
        });
    });
}

window.onload = function(){
    createGrid(16);
    listen();
    document.querySelector('.slider_apply').addEventListener('click', () => reset());
}