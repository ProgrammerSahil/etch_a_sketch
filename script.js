const createGrid = (size) => {
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

const reset = () => {
    [...document.querySelectorAll('.column')].forEach((item) => {
        item.remove();
    });

    let slider_value = document.getElementById('main_slider').value;
    createGrid(slider_value);
    listen();

}

const listen = () => {
    [...document.querySelectorAll('.row')].forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            item.style.backgroundColor = "red";
        });
    });
}

window.onload = () => {
    createGrid(16);
    listen();
    document.querySelector('.slider_apply').addEventListener('click', () => reset());
}