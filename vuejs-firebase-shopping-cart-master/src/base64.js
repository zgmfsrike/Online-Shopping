var img = new Image();
img.crossOrigin = 'Anonymous';

// The magic begins after the image is successfully loaded
img.onload = function () {
  var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

  canvas.height = img.naturalHeight;
  canvas.width = img.naturalWidth;
  ctx.drawImage(img, 0, 0);

  // Unfortunately, we cannot keep the original image type, so all images will be converted to PNG
  // For this reason, we cannot get the original Base64 string
  var uri = canvas.toDataURL('image/png'),
    b64 = uri.replace(/^data:image.+;base64,/, '');

  console.log(b64); //-> "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg=="
};

// If you are loading images from a remote server, be sure to configure “Access-Control-Allow-Origin”
// For example, the following image can be loaded from anywhere.
var url = '//cdn.static.base64.guru/uploads/images/1x1.gif';
img.src = url;