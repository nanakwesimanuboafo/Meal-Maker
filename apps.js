const menu = {
    _courses : { 
        appetizers:[],
        mains:[],
        desserts: [],
        },

        get appetizers(){
            return this._courses.appetizers;
        },

        get mains(){
            return this._courses.mains;
        },

        get desserts(){
            return this._courses.desserts;
        },

        set appetizers(appetizers){
            this._courses.appetizers = appetizers;
        },

        set mains(mains){
            this._courses.mains = mains;
        },

        set desserts(desserts){
            this._courses.desserts = desserts;
        },

        get courses(){
            return{
                appetizers : this.appetizers,
                mains : this.mains,
                desserts : this.desserts
            };
        },

        addDishToCourse(courseName, dishName, dishPrice){
            const dish = {
                name : dishName,
                price : dishPrice,
            };
            return this._courses[courseName].push(dish);
        },

        getRandomDishFromCourse(courseName){
            const dishes = this._courses[courseName];
            const randomIndex = Math.floor(Math.random()*dishes.length);
            return dishes[randomIndex];
        },

        generateRandomMeal(){
            const appetizer = this.getRandomDishFromCourse('appetizers');
            const main = this.getRandomDishFromCourse('mains');
            const dessert = this.getRandomDishFromCourse('desserts');
            const totalPrice = appetizer.price + main.price + dessert.price;
            return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}  Your total price is ${totalPrice}`
        }
};


menu.addDishToCourse('appetizers', 'Meat Pie', 4.25);
menu.addDishToCourse('appetizers', 'Mashed Kenkey', 6.80);
menu.addDishToCourse('appetizers', 'Gari Soakings', 1.25);


menu.addDishToCourse('mains', 'Fufu', 10.25);
menu.addDishToCourse('mains', 'Banku', 8.20);
menu.addDishToCourse('mains', 'Omo tuo', 4.75);

menu.addDishToCourse('desserts', 'Nkaticake', 2.45);
menu.addDishToCourse('desserts', 'Condense Milk Toffee', 3.70 );
menu.addDishToCourse('desserts', 'Vanilla Ice cream', 5.35 );


const meal = menu.generateRandomMeal();
console.log(meal);
