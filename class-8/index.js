function addRedSquare() {
    let containerElement =  document.getElementById("container");

    //step 1 create element
    let redSquareElement =  document.createElement("div");
    

    //step 2 style the element
    redSquareElement.style.backgroundColor = "red";
    redSquareElement.style.width = "200px";
    redSquareElement.style.height = "200px";
    redSquareElement.style.marginBottom = '10px';
    console.log(redSquareElement)

    // step 3 add element to our container
    containerElement.appendChild(redSquareElement)



}
function addSquareEverySecond()  {
    setInterval(addRedSquare, 1000)
}
