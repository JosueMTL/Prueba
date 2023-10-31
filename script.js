function generateCombinations() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }

    const combinations = getCombinations(name);
    const passwordList = document.getElementById("password");
    const numberOfCombinations = combinations.length;

    passwordList.innerHTML = ''; // Limpiamos el contenido anterior

    // Mostrar el número de combinaciones
    const countMessage = document.createElement('p');
    countMessage.textContent = `Número de maneras posibles: ${numberOfCombinations}`;
    passwordList.appendChild(countMessage);

    combinations.forEach(combination => {
        const listItem = document.createElement('li');
        const password = combination; // No se incluye el nombre original
        listItem.textContent = password;
        passwordList.appendChild(listItem);
    });
}

function getCombinations(input) {
    const combinations = [];

    function swap(inputArray, index1, index2) {
        const temp = inputArray[index1];
        inputArray[index1] = inputArray[index2];
        inputArray[index2] = temp;
    }

    function permutate(inputArray, start) {
        if (start === inputArray.length) {
            combinations.push(inputArray.join(''));
            return;
        }

        for (let i = start; i < inputArray.length; i++) {
            swap(inputArray, start, i);
            permutate(inputArray.slice(), start + 1);
        }
    }

    const nameArray = input.split('');
    permutate(nameArray, 0);

    return combinations;
}
