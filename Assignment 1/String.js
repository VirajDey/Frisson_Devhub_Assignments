//-------------------index function in string
String.prototype.index = function (str) {
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


//-------------------at function in string
String.prototype.at = function (index) {
    let str = this;
    if (index < 0) {
        index = str.length + index;
    }
    return str[index];
}