//const fs=require('fs');

// fs.writeFileSync('notes.txt','My name is bharath.');

// fs.appendFileSync('notes.txt','my sur name is tata.');

// const validator=require('validator');
// console.log(validator.isEmail('tata@gmail.com'));
// console.log(validator.isURL('https://media.io'));

// var chalks = require('chalk');
// console.log(chalks.blue('Hello world!')); 
// console.log(chalks.red('error raa')); 
// console.log(chalks.green('enduku raa')); 
// console.log(chalks.bold.red('error raa bolduu'));
// console.log(chalks.bold.inverse.red('error raa  mchuuu'));



//console.log(process.argv[2]);
//const cmd=process.argv[2];

// if (cmd === "add")
// {
//     console.log("note added");
// } else if (cmd === "remove")
// {
//     console.log("note removed");
// }
//const yargs=require('yargs');//yarg is an command line interface
//console.log(process.argv);

//yargs.version('1.1.0');

//create add command
// yargs.command({
//     command:'add',
//     describe:'add a note',
//     handler: function()
//     {
//         console.log(' note added');
//     }
// })
//remove
// yargs.command({
//     command:'remove',
//     describe:'remove a note',
//     handler: function()
//     {
//         console.log(' note removed');
//     }
// })
//list

// yargs.command({
//     command:'list',
//     describe:'list a note',
//     handler: function()
//     {
//         console.log(' note listed');
//     }
// })

//read
// yargs.command({
//     command:'read',
//     describe:'read a note',
//     handler: function()
//     {
//         console.log(' note readed');
//     }
// })







//add using title and body
//const notes = require('./notes'); 

// yargs.command({
//     command:'add',
//     describe:'add a note',
//     builder:{
//         title:{
//             describe:'note title',
//             demandOption:true,
//             type:'string'
//         },
//         body:{
//             describe:'note body',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler: function(argv)
//     {
        // console.log(' note added');
        // console.log('Title:'+argv.title);
        // console.log('body:'+argv.body);
//         notes.addNote(argv.title,argv.body);
//     }
// })
// console.log(yargs.argv);







const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        notes.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
        },
    handler: function (argv) {
        notes.readNotes(argv.title);
    }
})

yargs.parse()