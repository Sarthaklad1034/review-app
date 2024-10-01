const reviewEmitter = require('./reviewEmitter');

const reviews = [];

reviewEmitter.on('newReview', (review) => {
    reviews.push(review);
    console.log('New review added:', review);
});

function addReview(review) {
    reviewEmitter.emit('newReview', review);
}

function getReviews() {
    return reviews;
}

module.exports = { addReview, getReviews };