
const fruitsNode = document.querySelector('#fruits');

const fruits = ['Arandanos', 'Ciruela', 'Fresa', 'Mamoncillo', 'Manzana', 'Melon', 'Mora', 'Pera', 'Piña', 'Sandia', 'Uchuva', 'Uvas'];

function handleInit() {

    if(fruitsNode.classList.contains('hide')){
        fruitsNode.classList.remove('hide');
    } else {
        fruitsNode.classList.add('hide');
    }


}

let index = 0; 

while(index < fruits.length){

    fruitsNode.insertAdjacentHTML('beforeend', `

        <div> 
            <img src="assets/images/${fruits[index]}.jpeg" class="picture" alt="imagen de ${fruits[index]}">
            <h3 class="fruit-name">ID #${index}. "${fruits[index]}"</h3>
        </div>

    `);

    index++;
}

