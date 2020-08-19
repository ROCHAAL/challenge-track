(function(exports) { // code is wrapped in the module pattern.

    
    function testsNoteHasText() { // equivalent to it description
        var note = new Note("text"); // equivalent like a class
        assert.isTrue(note.text === "text");
        
    }
    function testsNoteCanShowText(){ 
        var note = new Note("message")
        assert.isTrue(note.showText() === "message");
        
       
    }
    function testsNoteListHasList(){
        var notelist = new NoteList(); // no use of the camelCase in variables like this
        notelist.createNote("First Note");
        assert.isTrue(notelist.list.length === 0);

        
    }

    testsNoteHasText(); // it runs the text  in the browser 
    testsNoteCanShowText(); 
    testsNoteListHasList();
})(this);
  

