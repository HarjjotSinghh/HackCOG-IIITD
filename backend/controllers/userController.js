const { User } = require('../models/UserModel');

const addUser = (req, res) => {
    try {
        // res.send("hello");
        console.log(req.body);
        if (!req.body.userName) {
            return res.status(500).json({ message: 'Username not provided in the request body' });
        };

        const user = new User({
            setup_complete: false,
            setup_started: true,
            email: req.body.email,
            userName: req.body.userName
        });
        user.save();
        res.send("added user successfully");
        return res.status(201).json({ message: 'User added successfully', user: user });
    } catch (error) {
        console.error(error);
        console.log(error.message);
        return res.status(500).json({ message: 'Error Adding User', error: error.message });
    };
};

const tryUser =  (req, res) => {
    try {
        res.send("hello");
    } catch (error) {
        console.error(error);
        res.send("error");
        return res.status(500).json({ message: 'Error Finding User', error: error.message });
    };
}

const fetchUser = async (req, res) => {
    try {
        if (!req.body.username) {
            return res.status(500).json({ message: 'Username not provided in the request body' });
        }

        const findUser = await User.find({ username: req.body.username });

        if (findUser.length === 0) {
            return res.status(500).json({ message: 'Error finding user: User not found' });
        }

        return res.status(201).json({ message: 'User found successfully', user: findUser[0] });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error Finding User', error: error.message });
    };
};

module.exports = {fetchUser, addUser, tryUser};