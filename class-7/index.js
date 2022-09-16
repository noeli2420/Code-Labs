let colors = ['red','blue','purple']

function changeBackgroundColor(){
    let randomNumber = Math.floor(Math.random() * 3);
    document.body.style.backgroundColor = colors[randomNumber]
}