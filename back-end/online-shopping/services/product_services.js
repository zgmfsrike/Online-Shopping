const path = require("path");

// Check File Type

module.exports = {
  checkfile: function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      console.log("Error: Images Only!");
    }
  },
  h: function hello() {
    return "GELLO";
  },
  validate: arr => {
    if (arr.category && arr.name && arr.detail && arr.price && arr.quantity) {
      console.log("VALID");
    } else {
      console.log("ANY NULL VALUE");
    }
  }
};
