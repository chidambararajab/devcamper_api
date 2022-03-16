const asyncHandler = require("../middlewares/async");
const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/ErrorResponse");

/**
 * @desc   Get all bootcamps
 * @route  GET /api/v1/bootcamps
 * @access Public
 */
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find();
  res.status(201).json({
    success: true,
    count: bootcamp.length,
    data: bootcamp,
  });
});

/**
 * @desc   Get Single bootcamps
 * @route  GET /api/v1/bootcamps/:id
 * @access Public
 */
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp Not Found with id of ${req.params.id}`, 400)
    );
  }

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

/**
 * @desc   Create bootcamps
 * @route  POST /api/v1/bootcamps
 * @access Private
 */
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

/**
 * @desc   Update bootcamps
 * @route  PUT /api/v1/bootcamps/:id
 * @access Private
 */
exports.updateBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp Not Found with id of ${req.params.id}`, 400)
    );
  }

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

/**
 * @desc   DELETE bootcamps
 * @route  DELETE /api/v1/bootcamps/:id
 * @access Private
 */
exports.deleteBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp Not Found with id of ${req.params.id}`, 400)
    );
  }

  res.status(201).json({
    success: true,
    data: {},
  });
});
