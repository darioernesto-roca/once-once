// Controller for Leal terms

exports.index = function (req, res) {
    console.log("Entró al controlador de Privacy Policy");
    res.render("privacy-policy", {
      title: "Política de Privacidad",
    });
  };
  
