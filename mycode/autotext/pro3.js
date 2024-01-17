const text1=document.getElementById('text')
const speed1=document.getElementById('speed')
const text='Somebody Loves Programming'
let idx=1
let speed=150/speed1.value
writeText()
function writeText(){
    text1.innerText=text.slice(0,idx)
    idx++
    if(idx>text.length){
        idx=1
    }
    setTimeout(writeText,speed)
}
function resetForm(){
    document.getElementById("speed").speed();
}
speed1.addEventListener('input',(e)=> speed=300/e.target.value);
