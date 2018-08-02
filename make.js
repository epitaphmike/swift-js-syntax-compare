#!/usr/bin/env node
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

const project = 'swift-js-syntax-compare';

require('shelljs/make');
const path = require('path');
const mission = require('mission');

mission.time();

const cirru = data =>
    mission.cirruHtml({
        file: 'index.cirru',
        from: 'cirru/',
        to: './',
        extname: '.html',
        data
    });

target.dev = () => cirru({ inDev: true });

target.watch = function() {
    const station = mission.reload();

    return mission.watch({
        files: ['cirru/', 'code/'],
        trigger(filepath, extname) {
            cirru({ inDev: true });
            return station.reload(project);
        }
    });
};

target.patch = () =>
    mission.bump({
        file: 'package.json',
        options: {
            at: 'patch'
        }
    });
