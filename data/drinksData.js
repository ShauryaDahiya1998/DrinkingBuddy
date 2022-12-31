import data from './drinks.json'

let cocktailsList = []
data.forEach((item) => {
    
        cocktailsList.push(item);
});

// console.log(cocktailsList)

export default cocktailsList