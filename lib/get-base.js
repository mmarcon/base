var request = require('request'),
    fs = require('fs'),
    path = require('path'),
    unzip = require('unzip'),
    config = require('./config');

function get(args) {
    var destName = 'base';
    if(args.length === 3) {
        destName = args[2];
    }
    request(config.BASE_REPO).pipe(unzip.Extract({ path: '.' })).on('close', function(){
        fs.renameSync(path.resolve('.', 'base-master'), path.resolve('.', destName));
    });
}

module.exports = {
    get: get
};