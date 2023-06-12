// Controller for Store

exports.index = function(req, res) {
    const errors = req.query.errors;
    res.render("store", {
      title: "Nuestra Tienda",
      errors,
      success_msg: req.query.success,
    });
  };