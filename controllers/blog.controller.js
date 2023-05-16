// Controller for Boys

exports.index = function(req, res) {
    const errors = req.query.errors;
    res.render("blog", {
      title: "Once Once | Blog",
      errors,
      success_msg: req.query.success,
    });
  };