exports.success = (res, result) => res.json({success: true, result})

exports.failed = (res, message) => res.status(400).json({success: false, message})