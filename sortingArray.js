let arr=[1, 2, 99, 9, 8,7, 6, 0, 5, 4, 3];

function sortArrays(arr)
{
         let length = arr.length;
           for (let j = 0; j < length - 1; j++) {
               if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                j = -1;
            }
        }
        return arr;
}

console.log(sortArrays(arr))