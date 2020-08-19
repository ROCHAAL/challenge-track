(function(exports){ // code is in a filed called note-list-model.js
    function NoteList(){ //use the constructor to define a note list model object.
       this.list = [] // store an array of note model.
    };// module we captalize the first letter of each word
    
    NoteList.prototype.createNote = function() {
        return this.text
    }

    
    exports.NoteList = NoteList; 
})(this);


