const textE1 = document.getElementById('text');
const speakE1 = document.getElementById('speak');

speakE1.addEventListener('click',speakText);
function speakText(){
    window.speechSynthesis.cancel();

    const text = textE1.value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
