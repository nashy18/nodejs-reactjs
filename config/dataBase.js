module.exports = function (config) {

    var databaseProvider = {};
    var mongoClient = require('mongodb').MongoClient;
    var assert = require('assert');
    var uri = config.mongoDb_ConnectionString;

    //var connect = function (callback, res) {
    //    MongoClient.connect(uri, function (err, db) {
    //        console.log("Database Connected : error - " + err);
    //        callback(db);
    //        //db.close();
    //    });
    //}

    databaseProvider.create = function (req, res) {
        mongoClient.connect(uri, function (err, db) {
            // Get the documents collection by passing table name
            var collection = db.collection(req.tableName);
            //do insert operation
            //insertDocuments(db);
            //close connection
            //db.close();
        });
    };


    //var insertDocuments = function (db) {
    //    // Get the documents collection 
    //    var collection = db.collection('documents');
    //    // Insert some documents 
    //    collection.insertMany([
    //      { a: 1 }, { a: 2 }, { a: 3 }
    //    ], function (err, result) {
    //        assert.equal(err, null);
    //        assert.equal(3, result.result.n);
    //        assert.equal(3, result.ops.length);
    //        console.log("Inserted 3 documents into the document collection");
    //        //callback(result);
    //        db.close();
    //    });
    //}

    return mongoClient;
}