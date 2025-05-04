// Concat function in Array

Array.prototype.myConcat = function() {
    allargument = arguments;
    array = this;
    for (i = 0; i < allargument.length; i++) {
        if (Array.isArray(allargument[i])) {
            for (j = 0; j < allargument[i].length; j++) {
                array.push(allargument[i][j]);
            }
        } else {
            array.push(allargument[i]);
        }
    }
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arr4 = "hello";

// arr1.myConcat(arr2, arr3, arr4);
// console.log(arr1);


// len function in Array

Array.prototype.myLength = function() {
    let count = 0;
    while (this[count] !== undefined) {
        count++;
    }
    return count;
}

// console.log(arr1.myLength());


// push function in Array
Array.prototype.myPush = function() {
    allargument = arguments;
    array = this;
    for (i = 0; i < allargument.length; i++) {
        array[array.length] = allargument[i];
    }
}

// arr1.push(arr2);
// console.log(arr1);

// pop function in Array

Array.prototype.myPop = function() {
    const last = this[this.length-1];
    this.length = this.length - 1;
    return last;
}

// console.log(arr1.myPop());


