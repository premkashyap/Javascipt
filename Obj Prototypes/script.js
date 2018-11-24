'use strict';
function display() {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'object') 
        displayObject(arguments[i])
      else
        displayValue(arguments[i], true)
    }
  }
  
  function displayObject(object) {
    if (object == null)
      displayValue('null')
    displayValue(getTypeName(object) + ' {')
    for(var propertyName in object) {
      if (propertyName != 'constructor') {
        displayValue(propertyName + ': ' + object[propertyName], false, true);
      }
    }
    displayValue('}', true)
  }
  
  function displayValue(value, addMargin, addPadding) {
    var div = document.createElement('div');
    div.style.fontSize='32px'
    if (addMargin)
      div.style.marginBottom='30px'
    if (addPadding)
      div.style.paddingLeft='30px'
    div.textContent = value;
    document.body.appendChild(div)
  }
  
  function getTypeName(object) {
     var funcNameRegex = /function (.{1,})\(/;
     var results = (funcNameRegex).exec(object.constructor.toString());
     return (results && results.length > 1) ? results[1] : "";
  }


  //Configurable 

//   var cat = {
//       name : {first:"Prem", last:"Kashyap"},
//       color: "white"
//   }

//   display(cat);


  //Object.defineProperty(cat, 'fullname', {writable:false}); 
//cat.fullname.firstname ="Anita";
//display(Object.getOwnPropertyDescriptor(cat, 'name')); //to get property descriptor
//display(cat.fullname);
// display(Object.keys(cat));
// Object.defineProperty(cat, 'fullname', {enumerable:false});
// display(Object.keys(cat));



// Object.defineProperty(cat, 'name', {configurable: false} );
// //Object.defineProperty(cat, 'name', {configurable: true} );
// delete cat.name; ??Why can I still delete it. It shouldn't be the case
// for(var property in cat) {
//    display(property + ':' + cat[property]);
// }

//getter setter

// Object.defineProperty(cat, "fullname", 
// {
//     get: function() {
//         return this.name.first + ' ' + this.name.last;
//     },
//     set(value) {
//         var nameParts = value.split(' ');
//         this.name.first=nameParts[0];
//         this.name.last=nameParts[1];
//         this.yoyo= nameParts[1];
//     }
// })

// display(cat.fullname);
// cat.fullname = "Butter Cup";
// display(cat.name.first);
// display(cat.name.last);


//Prototypes

// var arr = ["Red", "Green", "Blue"];
// display(arr);

// Object.defineProperty(Array.prototype, "last", {
//     get : function() {
//         return this[this.length-1];
//     }
// })

// display(arr.last);
// display(arr);
// var arr1= Array("Cyan", "Magenta", "Yellow");
// display(arr1.last);
// display(arr1);

// display(window[0]);

// var myfunc= function(){
// }

// display(myfunc.prototype);


function Animal(voice) {
  this.voice = voice || 'grunt';
}
Animal.prototype.speak = function() {
  display(this.voice);
}


function Cat(name, color) {
  Animal.call(this, 'bow bow');
  this.name=name;
  this.color=color;
}

Cat.prototype=  new Animal();
Cat.prototype.constructor=Cat;

var cat = new Cat('Fluffy', 'White');
cat.speak();