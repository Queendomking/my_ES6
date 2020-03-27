var arr=[1,[2,[3,4]]];
flatten(arr);

function flatten(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flatten(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}//循环+递归

function flatten(arr){
    return arr.reduce(function(prev,next){
        console.log(prev);
         return prev.concat(Array.isArray(next)?flatten(next):next);
    },[]);
 }//reduce

 function flatten(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat(...arr);
        console.log(arr);
    }
    return arr;
  }//...扩展运算符