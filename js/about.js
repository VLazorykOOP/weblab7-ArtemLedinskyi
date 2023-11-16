function Handle(element){
    alert('Ми маленька аптека');
}
function pharmacy(element){
    alert('Ця аптека знаходиться на вулиці Аптечна Лілія,17');
}
function dbleclick(element){
    alert('Ні коли не пізно почати лікуватись)');
}
function fordrag(element){
    alert('Ми Вас чекатимемо');
}
function searchNumbers(){
    let input = document.getElementById('inputText').value;

    let regex = /\d+/g;

    let foundNum = input.match(regex);
    
    let result = document.getElementById('result');

    if(foundNum){
        result.innerHTML = 'Знайдені цифри : '+ foundNum.join(', ');
    }else{
        result.innerHTML = 'Цифр було не виявлено.';
    }
}
