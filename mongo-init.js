// mongo-init.js
db.createUser({
    user: "admin",
    pwd: "admin123",
    roles: [{ role: "root", db: "admin" }]
});

// Switch to my-db database
db = db.getSiblingDB('my-db');
// create 'users' collection in current database
db.createCollection('users');

// Switch to user-accounts database
// db = db.getSiblingDB('user-accounts');
// // create 'users' collection in current database
// db.createCollection('users');

// Switch to sample database
// db = db.getSiblingDB('sample');
// // create 'users' collection in current database
// db.createCollection('users');

// // Create the users collection


// Create any other collections or perform other initialization here if needed
