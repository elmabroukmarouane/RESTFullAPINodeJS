var mysql = require('mysql');
var setting = require('../setting');

exports.executesql = function (sql, callback) {
    var connection = mysql.createConnection(setting.dbconfig);
    connection.connect(function () {
        connection.query(sql, function (error, recordset) {
            if (error)
            {
                callback(null, error);
            } else {
                callback(recordset);
            }
        });
    });
};