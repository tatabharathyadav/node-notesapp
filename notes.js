//const { readFileSync } = require('fs');
const fs=require('fs');
const chalk = require('chalk')
const getNotes=function()
{
    return 'your notes...'
}
const addNotes=function(title,body)
{
    const notes=loadNotes();
    const duplicatenotes=notes.filter(function(note)
    {
        return note.title === title;
    })
    //or
    const duplicatenote=notes.find((note) => note.title === title);
    if(!duplicatenote)
    {
    notes.push(
        {
            title: title,
            body: body
        }
    )
    
    saveNotes(notes);
    console.log('new note added');
    }
    else{
        console.log("Note title taken");
    }
}

const saveNotes=function(notes)
{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes=function()
{
    try
    {
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return [];
    }

}









const removeNotes=function(title)
{
    const notes=loadNotes();
    
    const notesToKeep=notes.filter(function(note)
    {
        return note.title !== title;
    })
    if(notes.length>notesToKeep.length)
    {
        console.log(chalk.green.bold.inverse('Note removed'))
        saveNotes(notesToKeep);
    }
    else{
        console.log(chalk.red.bold.inverse('No note found'))
    }

}



const listNotes = () =>
{
    const notes=loadNotes();
    console.log(chalk.inverse("your notes:"));
    notes.forEach((note)=>
    {
        console.log(note.title);
    }
    )
}

const readNotes = (title) =>
{
    const notes=loadNotes();
    const note=notes.find((note) => note.title === title);
    if(note)
    {
        console.log(chalk.inverse.green("found!"));
        console.log('title:'+note.title);
        console.log('body:'+note.body);

    }
    else{
        console.log(chalk.inverse.red("not found:"));

    }


}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes

}




//for debugging we open chrome://inspect
//in that we debug the code