var x, y, z;
x = 5;
y = 7;
z = x + y;

console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B

console.log(C);

function SumNPrint(x1, x2)
{
    var x3 = x1 + x2;
    console.log(x3);
}


SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z)
{
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array)
{
    for (var i = 0; i < array.length; i++)
    {
        if (array[i] == "Banana")
        {
            alert("Found Banana at index " + i);
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(array)
{
    array.forEach(function(item, index) 
    {
        if (item == "Banana") 
        {
            alert("Found Banana at index " + index + " using forEach");
        }
    });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2);

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var greeting;
    
    if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else if ((h < 24 && h >= 20) || (h >= 0 && h < 5)) {
        greeting = "Good night";
    }

    console.log(greeting);

    // Check if we're on index.html
    var currentPath = window.location.pathname;
    if (currentPath) {
        if (currentPath.includes("index.html") || 
            currentPath.endsWith("/") || 
            currentPath === "" ||
            currentPath.endsWith("/benedictnema-lab3")) {
            
            var greetingElement = document.querySelector("h2[attribute='main']");
            if (greetingElement) {
                greetingElement.innerHTML = greeting + ", my name is Ben";
            }
        } else {
            console.log(greeting);
        }
    } else {
        
        console.log(greeting);
    }
}

$(document).ready(function() {
    $("#readMore").click(function() {
        $("#shortBio").hide();
        $("#longBio").show();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function() {
        $("#shortBio").show();
        $("#longBio").hide();
        $("#readMore").show();
        $("#readLess").hide();
    });
})


document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        var isValid = true;

        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message = document.getElementById("message");

        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");
        var messageError = document.getElementById("messageError");
        var formError = document.getElementById("formError");

        if (!name.checkValidity()) {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        if (!email.checkValidity()) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (!message.checkValidity()) {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        if (!isValid) {
            formError.textContent = "Please fill out the form correctly so I can get back to you :)"; // Added this line
            event.preventDefault();
        } else {
            formError.textContent = "";
        }
    });
});



function showList() {
    var list = document.getElementById("funList");
    var button = document.querySelector("button[onclick='showList()']");
    if (list && button) {
        list.style.display = "block";
        button.style.display = "none";
    }
}

greetingFunc();

function addYear() {
    var d = new Date();
    var year = d.getFullYear();
    var copyYearElement = document.getElementById("copy-year");
    if (copyYearElement) {
        copyYearElement.innerHTML = year;
    }
}

addYear();

