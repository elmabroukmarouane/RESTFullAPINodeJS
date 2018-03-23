var mysql = require('mysql');
var setting = require('../setting');

exports.executesql = function (sql, object, callback) {
    var connection = mysql.createConnection(setting.dbconfig);
    connection.connect(function () {
        if (object)
        {
            connection.query(sql, object, function (error, recordset) {
                if (error) {
                    callback(null, error);
                } else {
                    callback(recordset);
                }
            });
        }   
        else
        {
            connection.query(sql, function (error, recordset) {
                if (error) {
                    callback(null, error);
                } else {
                    callback(recordset);
                }
            });
        }   
    });
};