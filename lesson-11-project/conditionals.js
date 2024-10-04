const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('What is your name? ', (name) =>{

    console.log(`Welcome ${name}`);

        rl.question('Please enter your age: ', (age) =>{

            age = parseInt(age);

            rl.question("Please enter your country of residence: ", (country) => {
                const countriesWithMandatoryVoting = ["Brazil", "Australia", "Belgium"];
                const countriesWithNoVoting = ["Qatar", "Bahrain", "North Korea"];
                const votingAge = 18;

                if (age >= votingAge) {
                    if (countriesWithMandatoryVoting.includes(country)) {
                        console.log(`${country} is a country where you would have to vote`);
                    } else if (countriesWithNoVoting.includes(country)) {
                        console.log(`${country} is a country with no voting`);
                    } else {
                        console.log(`You can vote in ${country}`);
                    }
                } else {
                    console.log("You are not old enough to vote");
                }

                rl.close();
            });
        });
    });


