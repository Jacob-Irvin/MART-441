var myViewFinderArray = new Array(); 

class ViewFinder {
    constructor(title, artist, year, description) {
        this.title = title; 
        this.artist = artist; 
        this.year = year; 
        this.description = description
    }

    toString()
    {
        return "Title:" + this.title;
    }

    toString()
    {
        return "Artist:" + this.artist;
    }

    toString()
    {
        return "Year:" + this.year;
    }

    toString()
    {
        return "Description:" + this.description
    }
    get theTitle(){
        return this.title;
    }

    initializeArray() {
        var myViewFinder = new ViewFinder("Messiah")
        var myViewFinder1 = new ViewFinder("Shantel")
        var myViewFinder2 = new ViewFinder("Statement")

        myViewFinderArray.push(myViewFinder); 
        myViewFinderArray.push(myViewFinder1);
        myViewFinderArray.push(myViewFinder2);
    } 

    initializeArray() {
        var myViewFinder = new ViewFinder("Donna Bassin")

        myViewFinderArray.push(myViewFinder); 
    } 

    initializeArray() {
        var myViewFinder = new ViewFinder("2019")
        var myViewFinder1 = new ViewFinder("2020")
        var myViewFinder2 = new ViewFinder("2021")

        myViewFinderArray.push(myViewFinder);
        myViewFinderArray.push(myViewFinder1);
        myViewFinderArray.push(myViewFinder2); 
    } 

    initializeArray() {
        var myViewFinder = new ViewFinder("Equality")
        var myViewFinder1 = new ViewFinder("Acceptence")
        var myViewFinder2 = new ViewFinder("Understanding")

        myViewFinderArray.push(myViewFinder);
        myViewFinderArray.push(myViewFinder1);
        myViewFinderArray.push(myViewFinder2);

    accessInformation()
    {
        var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
        document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString()
    }
}
}

