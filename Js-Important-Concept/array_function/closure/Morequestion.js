
//Question 4- closue video from 18 mint

//Question 5- how would you use a closure to create a private counter
function counter() {
    var _counter = 0;
    function add(increment) {
        _counter += increment
    }

    function retrive() {
        return 'Counter = ' + _counter;
    }

    return {
        add, retrive
    }
}

const c = counter();
c.add(5)
c.add(10);
console.log(c.retrive())

//Question 6- what is module pattern ? -- READ MORE
var module = (function () {
    function privateMethod() {
        console.log("Private")
    }

    return {
        publicMethod: function () {
            console.log("public")
        }
    };
})();

module.publicMethod()
module.privateMethod()
