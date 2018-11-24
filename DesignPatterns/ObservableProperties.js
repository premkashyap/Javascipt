var Book = function(name, price) {
    var priceChanging=[], priceChanged= []
    this.name = function(arg) {
        return name;
    }

    this.price = function(arg){
        if(arg !== undefined && price !=arg) {
            for(var i=0;i<priceChanging.length;i++){
                if(!priceChanging[i](this, arg)){
                    return price;
                }
            }
            price = arg;
            for(var i = 0; i< priceChanged.length ; i++) {
                priceChanged[i](this, arg)
            }
        }
        return price;
    }

    this.onPriceChanging = function(callback) {
        priceChanging.push(callback);
    }

    this.onPriceChanged = function(callback) {
        priceChanged.push(callback);
    }
}

var book = new Book("Harry Porter", 350);
book.onPriceChanging(function(book, price) {
    if(price > 1000) {
        console.log("Omg itte mehenga book. kaise kharidunga");
        return false;
    }
    return true;  
});

book.onPriceChanged(function(book, price) {
    console.log("Price of book: " + book.price() + " changed to " + price);
})

console.log('Name of book: ' + book.name());
console.log('Price of book: ' + book.price());

book.price(500);
book.price(2000);