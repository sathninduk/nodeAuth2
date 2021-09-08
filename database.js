var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://coduza:xsi0xKjtMEs3O19Q@cluster0.z662u.mongodb.net/nodebase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});


var conn = mongoose.connection;
conn.on('connected', function () {
    console.log('successfully connected to the cloud database');
});
conn.on('disconnected', function () {
    console.log('successfully disconnected from the cloud database');
})

conn.on('error', console.error.bind(console, 'database connection error:'));
module.exports = conn;