module.exports = function (callback) {
    var message = 'node' + new Date().toString();

    callback(null,message);
}

//var sharp = require('sharp');

//module.exports = function (result, physicalPath, maxWidth) {
//    sharp(physicalPath)
//        .resize(maxWidth)
//        .pipe(result.stream);
//}