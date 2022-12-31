import data from './drinks.json';

let sdata = [];
data.forEach((item) => {
    let str = item.ingredients;
    str = str.split("###")
    sdata.push(str);
})
let ingredients = []
sdata.forEach((items) => {
    let tmp = []
    items.forEach((item) => {
        let str = item.split('#');
        tmp.push(str[0]);
    })
    tmp.filter((item) => item.length>0)
    ingredients.push(tmp)
})

let checker = ['Vodka','Tequila','Whiskey','Rum','Gin','Beer','Wine','Soda','Coca','Lemon']
let IngredientObj = {
    Vodka:[],
    Tequila: [],
    Whiskey: [],
    Rum: [],
    Gin: [],
    Beer:[],
    Wine:[],
    Soda:[],
    Coca: [],
    Lemon: [],
}

checker.forEach((item) => {
    for (let i=0;i<ingredients.length;i++) {
        for(let j=0;j<ingredients[i].length;j++) {
            let tp1 = ingredients[i][j].split(' ');
            let tp = tp1[0].split('-')
            if(tp[0]==item) {
                if(IngredientObj[item] != undefined) {
                    IngredientObj[item].push(i)
                }
            }
        }
    }
})

export default IngredientObj;