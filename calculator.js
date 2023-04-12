function displaydata(n){
    result.value+=n
}
function allClear(){
    result.value=""
}
function evalexprsn(){
    result.value=eval(result.value)
}
function backspace(){
    s=result.value
    result.value=s.slice(0,-1)
}