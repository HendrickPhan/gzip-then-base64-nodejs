const fs = require('fs');
const zlib = require('zlib');

function gzipAndEncodeBase64(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return reject(err);
      }

      zlib.gzip(data, (err, compressedData) => {
        if (err) {
          return reject(err);
        }

        resolve(compressedData.toString('base64'));
      });
    });
  });
}

const filePath = './abc.txt';

gzipAndEncodeBase64(filePath).then(encodedData => {
  console.log(encodedData);
});