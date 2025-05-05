//-------------------index function in string
String.prototype.myIndex = function (str) {
    let str1 = this;
    let str2 = str;
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[count]) {
            count++;
        } else {
            count = 0;
        }
        if (count === str2.length) {
            return i - count + 1;
        }
    }
    return -1;
}
// str1 = "Hello world!";
// str2 = "world";
// console.log(str1.myIndex(str2));


//--------------------charAt function in string
String.prototype.myCharAt = function (index) {
    let str = this;
    if (index < 0) {
        index = str.length + index;
    }
    return str[index];
}
// str1 = "Hello world!";
// console.log(str1.myCharAt(1));

//--------------------concat function in string
String.prototype.myConcat = function () {
    let str1 = this;
    let str2 = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        str2 += arguments[i];
    }
    return str1 + str2;
}
// str1 = "Hello";
// str2 = " world!";
// console.log(str1.myConcat(str2, " How are you?"));

//--------------------slice function in string
String.prototype.mySlice = function (start, end) {
    let str = this;
    let result = "";
    if (start < 0) {
        start = str.length + start;
    }
    if (end < 0) {
        end = str.length + end;
    }
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}
// str1 = "Hello world!";
// console.log(str1.mySlice(1, 5));

//--------------------converttolowercase function in string
String.prototype.myToLowerCase = function () {
    let str = this;
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            result += String.fromCharCode(str.charCodeAt(i) + 32);
        } else {
            result += str[i];
        }
    }
    return result;
}
// str1 = "Hello WORLD!";
// console.log(str1.myToLowerCase());

//--------------------converttouppercase function in string
String.prototype.myToUpperCase = function () {
    let str = this;
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            result += String.fromCharCode(str.charCodeAt(i) - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}
// str1 = "Hello WORLD!";  
// console.log(str1.myToUpperCase());


//---------------------split function in string
String.prototype.mySplit = function (separator, limit) {
    if (limit === undefined) {
        limit = this.length;
    }
    let str = this;
    let result = [];
    let current = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === separator) {
            if (current !== "") {
                result.push(current);
                current = "";
                count++;
            }
        } else {
            current += str[i];
        }
        if (count === limit) {
            break;
        }
    }
    if (current !== "") {
        result.push(current);
    }
    return result;
} 
 
// str1 = "Hello world! How are you?";
// console.log(str1.mySplit(" ",2));