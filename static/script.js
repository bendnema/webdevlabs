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


greetingFunc();
