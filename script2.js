let arr = ["a","b","c","d"]
function checkTextInArr(arr,item){
    if(arr.includes(item)){
        return true
    } else {
        return false
    }
}

console.log(checkTextInArr(arr,"d"))

function addItemInArr (text, method){
    if(method === 'end'){
        arr.push (text)
    } else if(method=== 'start'){
        arr.unshift (text)
     }else{
        alert('method eror')
     }
    
} 
console.log(arr)
addItemInArr('test','start')
console.log(arr)

function changeText (text, s){
 let textArr = text.split('')
    let result = ''
    for (let i = 0; i < textArr.length;i++){
        result += textArr[i]+ s

    }
     return result
}
console.log(changeText('test', '0'))


