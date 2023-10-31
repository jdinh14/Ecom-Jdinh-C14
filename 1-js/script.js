const r2HGrad = {
    name: 'Jerry Dinh',
    highSchool: 'Independence High School',
    skills: 'Leadership skills.',
    cheer: function() {
        console.log("Row Row Fight the Power");
    }
};

console.log(r2HGrad);
r2HGrad.cheer(); //call method

//

const favoriteRecipe = {
    title: 'Instant Ramen',
    servings: 1,
    ingredients: [
        'dry noodles',
        'hot water',
        'flavor packet'
    ]
};

console.log(favoriteRecipe.title);
console.log(favoriteRecipe.servings);
console.log(favoriteRecipe.ingredients.join(', '));