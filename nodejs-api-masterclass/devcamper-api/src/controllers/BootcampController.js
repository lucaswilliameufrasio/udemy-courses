const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

module.exports = {
    // @desc    Get all bootcamps
    // @route   GET /api/v1/bootcamps
    // @access  Public
    async getBootcamps(req, res, next) {
        try {
            const bootcamps = await Bootcamp.find();

            res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
        } catch (err) {
            next(err);
        }
    },

    // @desc    Get single bootcamps
    // @route   POST /api/v1/bootcamps
    // @access  Public
    async getBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.findById(req.params.id);

            if (!bootcamp) {
                return next(
                    new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
                );
            }

            return res.status(200).json({ success: true, data: bootcamp });
        } catch (err) {
            // res.status(400).json({ success: false });
            next(err);
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
            next(err);
        }
    },

    // @desc    Update bootcamp
    // @route   PUT /api/v1/bootcamps/:id
    // @access  Private
    async updateBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });

            if (!bootcamp) {
                return next(
                    new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
                );
            }

            res.status(200).json({ success: true, data: bootcamp });
        } catch (err) {
            next(err);
        }
    },

    // @desc    Delete bootcamp
    // @route   DELETE /api/v1/bootcamps/:id
    // @access  Private
    async deleteBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

            if (!bootcamp) {
                return next(
                    new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
                );
            }

            res.status(200).json({ success: true, data: {} });
        } catch (err) {
            next(err);
        }
    },

}
