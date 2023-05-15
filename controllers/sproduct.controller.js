// Controller for Boys

exports.index = function(req, res) {
  const errors = req.query.errors;
  res.render("sproduct", {
    title: "Once Once | Single Product",
    errors,
    success_msg: req.query.success,
  });
};