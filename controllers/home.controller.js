// home.controller.js
const { readFeatures, readNews } = require('../helpers/read-products');

// exports.index = (req, res) => {
//   const errors = req.query.errors;
//   res.render("home", {
//     title: "Once Once",
//     errors,
//     success_msg: req.query.success,
//   });
// };

exports.index = function(req, res) {
  console.log('entró al controlador de home');
  const features = readFeatures();
  const news = readNews();
  res.render('home', { title: 'Once Once', features, news, req });
};

