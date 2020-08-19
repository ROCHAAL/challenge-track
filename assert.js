(function(exports) {
    
    var assert = { // it is a variable with  this permanent value ?? Where can we call this variable??
        isTrue: function(assertionToCheck) {
        if (!assertionToCheck) { // is the exclamation mark at the beggining making the expression negative??
            throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");

        }
        else {
            return console.log("."); // how can we explain this ? 
        }
    }
};
 exports.assert = assert;
})(this);
