const arr = [];
let i = 0;
let j = 0;
str1 = prompt('Введите 1-ый элемент массива:');
str2 = prompt('Введите 2-ой элемент массива:');
str3 = prompt('Введите 3-ий элемент массива:');

const arr1 = [str1, str2, str3];

//alert(arr1);

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length <= 2) {
        arr[j] = arr1[i];
        j++
    };
}
alert(arr);