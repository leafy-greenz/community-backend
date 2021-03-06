const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/communities';

mongoose.connect(dbURI, () => {
    useMongoClient: true
});
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
    console.log("Connected to database: " + dbURI);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

require('./routes/user.routes')(app);
require('./routes/tag.routes')(app);
require('./routes/event.routes')(app);
require('./routes/community.routes')(app);
require('./routes/announcement.routes')(app);
require('./routes/question.routes')(app);
require('./routes/answer.routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    })
});

module.exports = app;
