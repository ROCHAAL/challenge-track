
(function(exports) {
    function Note(text){
        this.text = text; // this is working as an instance variable // the first text works as an atrribute.
    };
    Note.prototype.showText = function() { 
        return this.text;
    }

    

    


    exports.Note = Note; 
})(this);

// function :anonymous closure wrap the code and create an eclosed scope around it. 
//export assigns the module to a variable that we can call our modules methods. 