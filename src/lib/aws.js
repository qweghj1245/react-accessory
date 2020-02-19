const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',   
  region: 'ap-northeast-1',
});

const uploadImage = (userId, cb) => {
  const key = `${userId}/${uuid()}.jpg`;
  s3.getSignedUrl('putObject', {
    Bucket: 'react-accessory-bucket',
    ContentType: 'image/jpeg',
    Key: key,
  }, (err, url) => {
    cb({ key, url });
  });
}

export { s3, uploadImage };