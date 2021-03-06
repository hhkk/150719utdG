// from https://github.com/justinklemm/nodejs-async-tutorial/blob/master/async-each.js
function Item(delay){
    this.delay = delay;
}

Item.prototype.someAsyncCall = function(callback, delay2) {
    setTimeout(function(){
        console.log("Item is done." + delay2);
        //if(typeof callback === "function")
        callback();
    }, this.delay);
};

var items = [];
items.push(new Item(4000));
items.push(new Item(4000));

async = require("async");

// 1st parameter in async.each() is the array of items
async.each(items,
    // 2nd parameter is the function that each item is passed into
    function(item, callback){
        // Call an asynchronous function (often a save() to MongoDB)
        //console.log ('called 2nd param function')
        item.someAsyncCall(function ()
            {
                // Async call is done, alert via callback
                callback();
            },
            item.delay
        );
    },
    // 3rd parameter is the function call when everything is done
    function(err){
        // All tasks are done now
        console.log("Everything is done.");
    }
);
