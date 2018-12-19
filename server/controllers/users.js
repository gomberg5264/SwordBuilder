const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.model('User');

module.exports = {
    registerUser: (req, res) => {
        User.find({ email: req.body.email }, (err, result) => {
            if (result.length) {
                res.json({ error: "A user with this name already exists" })
            }
            else {
                let user = new User();
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.email = req.body.email;
                user.address = req.body.address;
                let salt = bcrypt.genSaltSync(10);
                let hasPw = bcrypt.hashSync(req.body.password, salt);
                user.password = hasPw;
                user.save((error) => {
                    if (error) {
                        res.json(error);
                    }
                    else {
                        req.session.user = user._id;
                        req.session.userName = user.firstName + user.lastName;
                        res.json({ message: "Success" })
                    }
                });
            }
        });
    },

    loginUser: (req, res) => {
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                res.json(err);
            }
            else {
                if (user === null) {
                    res.error({ error: "There is no account associated with this e-mail address" })
                }
                else {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        req.session.user = user._id;
                        req.session.userName = user.firstName + user.lastName;
                        res.json({ message: "Success" });
                    }
                }
            }
        });
    },

    updateUser: (req, res) => {
        User.find({ email: req.body.email }, function (err, result) {
            if ((result.length > 0) && (result[0]._id != req.params.id)) {
                res.json({error:"This e-mail adress is already in use."})
            }
            User.updateOne({_id:req.params.id},req.body,(error,raw)=>{
                if (error){
                    res.json(error)
                }
                else {
                    res.json(raw);
                }
            });
        });
    },

    logOut: (req, res) => {
        req.session.destroy();
        res.json({ message: "Logged out" })
    }
}