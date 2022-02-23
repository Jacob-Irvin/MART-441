
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var blankImagePath = "images/blank.jpeg";
var actualImages = new Array();
    
function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    } 
}

function createRandomImageArray()
{
    var actualImagePath = ["images/jordan 1", "images/jordan 2.jpeg", "images/jordan 3", "images/jordan 4", "images/jordan 5", "images/jordan 6", "images/jordan 7", "images/jordan 8", "images/jordan 9", "images/jordan 10", ];
    var count = [0,0];
    while(actualImages.length < 10)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }    
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];

        
    
}
