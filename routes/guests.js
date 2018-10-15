var express = require('express');
var router = express.Router();

var Guest = require('../models/guest');

router.get('/', function (req, res, next) {
    Guest.find()
        .exec(function(err, guests) {
            if(err) {
                return res.status(500).json({
                    title:'an error occurred',
                    error: err
                });
            }
            return res.status(200).json({
                message: 'Success',
                guests: guests
            });
        });
});

router.post('/', function (req, res, next) {
    var guest = new Guest({
        name: req.body.name,
        isAttending: req.body.isAttending,
        email: req.body.email,
        numberOfGuests: req.body.numberOfGuests,
        guestNames: req.body.guestNames,
        mealChoice: req.body.mealChoice,
        guestMealChoice: req.body.guestMealChoice,
        songSuggestion: req.body.songSuggestion,
        dietaryRestrictions: req.body.dietaryRestrictions
    });
    guest.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                title:'an error occurred',
                error: err
            });
        }
        return res.status(201).json({
            message: 'message saved',
            guest: result
        });
    });
});
//
// router.patch('/:id', function(req, res, next) {
//     Message.findById(req.params.id, function(err, message) {
//         if(err) {
//             return res.status(500).json({
//                 title:'an error occurred',
//                 error: err
//             });
//         }
//         if(!message) {
//             return res.status(500).json({
//                 title:'no message found',
//                 error: {message: 'message not found'}
//             });
//         }
//         message.content = req.body.content;
//         message.save(function(err, result) {
//             if(err) {
//                 return res.status(500).json({
//                     title:'an error occurred',
//                     error: err
//                 });
//             }
//             return res.status(200).json({
//                 message: 'message updated',
//                 obj: result
//             });
//         });
//     })
// });
//
// router.delete('/:id', function(req, res, next) {
//     Message.findById(req.params.id, function(err, message) {
//         if(err) {
//             return res.status(500).json({
//                 title:'an error occurred',
//                 error: err
//             });
//         }
//         if(!message) {
//             return res.status(500).json({
//                 title:'no message found',
//                 error: {message: 'message not found'}
//             });
//         }
//         message.remove(function(err, result) {
//             if(err) {
//                 return res.status(500).json({
//                     title:'an error occurred',
//                     error: err
//                 });
//             }
//             return res.status(200).json({
//                 message: 'message deleted',
//                 obj: result
//             });
//         });
//     })
// });

module.exports = router;