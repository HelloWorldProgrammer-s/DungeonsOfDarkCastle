//			     Функция рандома
//	Я в душе не знаю, как она работает, я спёр этот кусок из интернета

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let cube = document.querySelector(".cube");

//               Бросаем кубик
// Знаю, кастыль, но я задрался нормально реализовывать
function ThrowCube(){
    
    // Передаём переменной рандомное число от 2 до 12
    let num = getRandomIntInclusive(2, 12);

    //                               / \
    // Меняем кубик в зависимости от  |

    cube.style.backgroundImage = 'url("images/cubes/cube'.concat(num, '.png"');
}

// Вызов функции
ThrowCube();