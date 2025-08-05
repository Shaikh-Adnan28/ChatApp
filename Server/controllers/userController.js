module.exports.register = (req, res, next) => {
    console.log(req.body);  // debug log
    return res.status(201).json({
        msg: "User registered successfully!",
        success: true
    });
};
