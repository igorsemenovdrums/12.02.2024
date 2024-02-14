
const arr = [3, 4, 6, 0, 9, 5, 8, 1, 3, 4];

function removeElement(arr, elem, newElem) {
    
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {

        (arr[i] === elem) ? newArr.push(newElem) : newArr.push(arr[i]);

    }

    return newArr;

}

const result = removeElement(arr, 5, 9);

console.log(result);