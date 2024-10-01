const EventEmitter = require('events');

class ReviewEmitter extends EventEmitter {}

const reviewEmitter = new ReviewEmitter();

module.exports = reviewEmitter;