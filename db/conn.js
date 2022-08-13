const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(
  "mongodb+srv://molrik19:ha!jreQm4H8M@n@cluster0.97ocrib.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("recipes");
        console.log("Successfully connected to MongoDB.");
      }
      
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
