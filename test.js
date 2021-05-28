
       /*
        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
        */

        //ex1
        let x = "John";
        let y = "Doe";
        console.log(`${x} <> ${y}`); 
        
        //ex2
        let props = 
            {
                name:    "Ismail",
                surname: "Turgul",
                email:   "turgul@web.de"
            }

        //ex3
        delete props.email;

        //ex4
        let array10 = ["hi","this","is","just", "4", "the", "exercise","for","the","homework"]
        
        //ex5
        console.log(array10);
        
        //ex6
        let number100 = []

        for (let start =0; start < 100; start++)
        {
            number100 += Mathfloor(Math.random * 1000)
        }


        const biggestArray = function(array1,array2)
        {
            array1 = [2,4];
            array2 = [1,2,3];
            return Math.max(array1, array2);
        }