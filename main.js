// Question 1
function replaceWith(str, charReplace, replaceWith){
    let result = ""
    for(var i =0; i < str.length; i++){
        if(str[i] === charReplace){
            result += replaceWith;
    } else{
    result += str[i];
    }
    }
    return result;
    }
// Question 2
function expand(arr, number){
    let result =[]
    for(let i = 0; i< number; i++){
    result.push(arr)
    }
    return result.flat()
    }
// Question 3
function acceptNumbersOnly(){
    for(var i = 0; i < arguments.length; i++){
        if(arguments[i] === NaN){
            return false;
}
        if(arguments[i] !== Number(arguments[i])){
            return false;
}
}
return true
}
// Question 4
function mergeArrays(arr1, arr2){
    var newArr = arr1. concat(arr2)
    return newArr.sort();
}
// Question 5
function mergeObjects(obj1, obj2){
    var newObj = {...obj1, ...obj2}
        return newObj;
    }
    var obj1= {
        name: "Foo",
        num: 33
    }
    var obj2 = {
        test: "thing",
        num: 55
    }
