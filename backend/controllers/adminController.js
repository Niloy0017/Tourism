const tourmodel = require('../models/tourModel');
const bcrypt = require('bcrypt');
const adminmodel = require('../models/adminModel');
const jwt = require('jsonwebtoken');

class admin {
    static async adminregister(req, res) {
        try {
            const { name, email, password } = req.body;

            let salt = bcrypt.genSaltSync(10);
            let hashpass = bcrypt.hashSync(password, salt);

            let newuser = new adminmodel({ name, email, password: hashpass });
            newuser = await newuser.save();

            res.status(201).json({ message: 'new user registered' });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while registering user' });
        }
    }

    static async adminlogin(req, res) {
        try {
            const { email, password } = req.body;

            let mailexist = await adminmodel.findOne({ email });
            if (!mailexist) {
                return res.status(201).json({ message: 'email does not exist' });
            }

            let passmatch = bcrypt.compareSync(password, mailexist.password);
            if (!passmatch) {
                return res.status(201).json({ message: 'password does not match' });
            }

            let token = jwt.sign({ id: mailexist.id }, process.env.SECRET_KEY, { expiresIn: '1d' });

            res.status(201).json({ message: 'admin login successful', token });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while admin login' })
        }
    }

    static async createtour(req, res) {
        try {
            const { id, name, tagline, info, image1, image2, image3, image4, image5, image6, price, duration,
                startdate, tourplan } = req.body;
            const creator = req.id;

            let newtour = new tourmodel({
                id, name, tagline, info, image1, image2, image3, image4, image5, image6, price, duration, startdate,
                tourplan, creator
            });
            newtour = await newtour.save();

            let updateadmin = await adminmodel.updateOne({ _id: creator }, {
                $push: {
                    tours: newtour._id
                }
            })

            res.status(201).json({ message: 'new tour creation successfull', newtour, updateadmin });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while creating tour' })
        }
    }

    static async getalltour(req, res) {
        try {
            let tour = await tourmodel.find();
            if (!tour) {
                res.status(201).json({ message: 'all tours does not exist' })
            }

            res.status(201).json({ message: 'all tours find successful', tour });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while getting all tours' });
        }
    }

    static async editour(req, res) {
        try {
            const { id, name, tagline, info, image1, image2, image3, image4, image5, image6, price,
                duration, startdate, tourplan } = req.body;

            const tourid = req.params.id;

            let tourupdate = await tourmodel.updateOne({ _id: tourid }, {
                $set: {
                    id, name, tagline, info, image1, image2, image3, image4, image5, image6, price,
                    duration, startdate, tourplan
                }
            })

            res.status(201).json({ message: 'tour updated successfully', tourupdate })
        }
        catch (error) {
            res.status(404).json({ message: 'error while editing tour' });
            console.log(error);
        }
    }

    static async deletetour(req, res) {
        try {
            const id = req.params.id;

            let tour = await tourmodel.findOne({ _id: id });
            let creatorid = tour.creator;
            console.log('creatorid : ',creatorid)

            let creatorupdate = await adminmodel.updateOne({ _id: creatorid }, {
                $pull: {
                    tours: tour._id
                }
            })

            let tourdelete = await tourmodel.deleteOne({ _id : id });

            res.status(201).json({ message: 'tour deleted successfully', tourdelete, creatorupdate })
        }
        catch (error) {
            res.status(404).json({ message: 'error while deleting tour' });
            console.log(error)
        }
    }
}

module.exports = admin;