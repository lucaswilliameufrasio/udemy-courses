const Bootcamp = require('../models/Bootcamp');

module.exports = {
    // @desc    Get all bootcamps
    // @route   GET /api/v1/bootcamps
    // @access  Public
    async getBootcamps(req, res, next) {
        try {
            const bootcamps = await Bootcamp.find();

            res.status(200).json({ success: true, data: bootcamps });
        } catch (err) {
            res.status(400).json({ success: false });
        }
    },

    // @desc    Get single bootcamps
    // @route   POST /api/v1/bootcamps
    // @access  Public
    async getBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.findById(req.params.id);

            if (!bootcamp) {
                return res.status(400).json({ success: false });
            }

            return res.status(200).json({ success: true, data: bootcamp });
        } catch (err) {
            res.status(400).json({ success: false });
        }
    },

    // @desc    Create new bootcamp
    // @route   POST /api/v1/bootcamps
    // @access  Private
    async createBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.create(req.body);

            res.status(201).json({
                success: true,
                data: bootcamp
            });
        } catch (err) {
            res.status(400).json({ success: false });
        }
    },

    // @desc    Update bootcamp
    // @route   PUT /api/v1/bootcamps/:id
    // @access  Private
    async updateBootcamp(req, res, next) {
        const bootcamp = await Bootcamp.findByIdAndUpdate()
    },

    // @desc    Delete bootcamp
    // @route   DELETE /api/v1/bootcamps/:id
    // @access  Private
    deleteBootcamp(req, res, next) {
        return res.status(200).json({ success: true, message: `Delete bootcamp ${req.params.id}` });
    },

}
