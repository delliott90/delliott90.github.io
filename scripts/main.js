var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/IMG_0268.jpg') {
        myImage.setAttribute('src', 'images/IMG_0172.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/IMG_0268.jpg');
    }
}

var myButton = document.querySelector('button');
var myGreeting = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name');
    // set the localStorage variable 'name' to myName
    localStorage.setItem('name', myName);
    myGreeting.textContent = 'Welcome ' + myName + ' to the';
}

// Initialization code that runs when page first loads.
if (!localStorage.getItem('name')){
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myGreeting.textContent = 'Welcome ' + storedName + ' to the';
}

myButton.onclick = function(){
    setUserName();
}