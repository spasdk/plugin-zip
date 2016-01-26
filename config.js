/**
 * Base configuration for pack gulp task.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path     = require('path'),
    extend   = require('extend'),
    config   = require('spa-gulp/config'),
    profiles = {};


// main
profiles.default = extend(true, {}, config, {
    // array of file globs to process
    // see format in https://github.com/isaacs/node-glob
    source: [
        path.join(config.target, '**', '*'),
        '!' + path.join(config.target, '**', 'develop.*'),
        '!' + path.join(config.target, '**', 'readme.md')
    ],

    // intended output file name
    target: '${name}.${version}.release.zip',

    // use compression for output file
    compress: true,

    // info channels
    notifications: {
        popup: {
            info: {icon: path.join(__dirname, 'media', 'info.png')},
            warn: {icon: path.join(__dirname, 'media', 'warn.png')},
            fail: {icon: path.join(__dirname, 'media', 'fail.png')}
        }
    }
});


profiles.develop = extend(true, {}, profiles.default, {
    source: [
        path.join(config.target, '**', '*'),
        '!' + path.join(config.target, 'index.html'),
        '!' + path.join(config.target, '**', 'release.*'),
        '!' + path.join(config.target, '**', 'readme.md')
    ],

    target: '${name}.${version}.${profile}.zip'
});


// public
module.exports = profiles;
