const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b38f7bba3864f71f0884bfc')
    // }).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log('todos count');
    //     console.log(count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    db.collection('Users').find({name: 'Pat'}).count().then((count) => {
        console.log('todos count');
        console.log(count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.close();
});