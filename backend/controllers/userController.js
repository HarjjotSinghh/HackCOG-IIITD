const { User } = require('../models/UserModel')

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

module.exports = {fetchUser};