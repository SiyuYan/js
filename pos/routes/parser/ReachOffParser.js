/**
 * Created by Administrator on 2015/4/9.
 */
var fs = require('fs');
var readline = require('readline');
var ReachOff=require ('../promotion/ReachOff.js');
var rl = readline.createInterface({
    input: fs.createReadStream('../resources/reach_off_promotion.txt'),
    output: process.stdout,
    terminal: false
});
function convert() {
    rl.on('line', function (line) {
        if (!line) return undefined;
        reachoffArray=[];
        reachoffArray.push(line.split(":")[0], new ReachOff(parseFloat(line.split(":")[1]),parseFloat(line.split(":")[2])));
        console.log(reachoffArray);
        return reachoffArray;
    });
}
convert();