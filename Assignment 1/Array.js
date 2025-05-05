// -------------------Concat function in Array

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


// -------------------len function in Array

Array.prototype.myLength = function() {
    let count = 0;
    while (this[count] !== undefined) {
        count++;
    }
    return count;
}

// console.log(arr1.myLength());


// -------------------push function in Array
Array.prototype.myPush = function() {
    allargument = arguments;
    array = this;
    for (i = 0; i < allargument.length; i++) {
        array[array.length] = allargument[i];
    }
}

// arr1.push(arr2);
// console.log(arr1);


// -------------------pop function in Array

Array.prototype.myPop = function() {
    if (this.length === 0) {
        return undefined;
    }
    const last = this[this.length-1];
    this.length = this.length - 1;
    return last;
}

// console.log(arr1.myPop());

// -------------------shift function in Array

Array.prototype.myShift = function() {
    const first = this[0];
    for (i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }
    this.length = this.length - 1;
    return first;
}

// array1 = [1, 2, 3, 4, 5];
// console.log(array1.myShift());

//-------------------unshift function in Array
Array.prototype.myUnshift = function() {
    allargument = arguments;
    array = this;
    for (i = array.length - 1; i >= 0; i--) {
        array[i + allargument.length] = array[i];
    }
    for (i = 0; i < allargument.length; i++) {
        array[i] = allargument[i];
    }
    return array.length;
}

// array1 = [1, 2, 3, 4, 5];
// console.log(array1.myUnshift(6, 7, 8));

//-------------------slice function in Array
Array.prototype.mySlice = function(start, end) {
    const newArray = [];
    if (start < 0) {
        start = this.length + start;
    }
    if (end < 0) {
        end = this.length + end;
    }
    for (i = start; i < end; i++) {
        newArray.push(this[i]);
    }
    return newArray;
}

// array1 = [1, 2, 3, 4, 5];
// console.log(array1.mySlice(0, 1));

//-------------------map function in Array
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
} 



//-------------------filter function in Array  
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}