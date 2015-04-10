var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
var fs = require('fs');

    var map=function(lines, parser) {
        if(!lines || !parser) return undefined;
        var dataList = [];
        lines.forEach(function(line) {
            dataList.push(parser.parse(line));
        });

        return dataList;

};console.log(map());
