const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");



function pwd(print) {
   return print(process.cwd())
}

function date(print) {
    return print(Date())
}

function echo(print, args) {
    return print(args);
}

function ls(print) {
    fs.readdir('.', (error, files) =>{
        if(error){
            throw new Error(error);
        }
        print(files.join(' '));
    })
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (error, data) =>{
        if(error) {
            throw new Error(error);
        }
        print(data);
    })
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error){
            throw new Error(error);
        }
        print(data.split('\n')[0]);
    })
}

function tail(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error){
            throw new Error(error);
        }
        const line = data.split(' ');
        print(line[line.length - 1])
    })
}

function curl(print, args) {
    const url = `https://${args}`
    utils.request(url, (error, response) =>{
        if(error){
            throw new Error(error);
        }
    
        print(response);
    })
}

module.exports = {
   pwd,
   date,
   echo,
   ls,
   cat,
   head,
   tail,
   curl,
};
