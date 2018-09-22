/*
* This script is executed by Codeship after a deploy to S3
* Its intention is to invalidation the CloudFront distribution
* in order to ensure the latest version of the website
* is delivered to visitors.
* 
*/
const AWS = require('aws-sdk');
const randomstring = require('randomstring');
const moment = require('moment');

// CloudFront requires a unique reference for every invalidation
const reference = `${randomstring.generate(16)}-${moment().format('X')}`;
const access_key_id = process.env.AWS_ACCESS_KEY_ID;
const secret_access_key = process.env.AWS_SECRET_ACCESS_KEY;

if (!access_key_id || !secret_access_key) {
  console.error('Unable to fetch AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY from environment variables.');
  process.exit(1);
}

const cloudfront = new AWS.CloudFront({
  accessKeyId: access_key_id.trim(),
  secretAccessKey: secret_access_key.trim(),
});

const distributionId = process.env.DISTRIBUTION_ID; /* env */

if (!distributionId) {
  console.error('Unable to fetch DISTRIBUTION_ID from environment variables.');
  process.exit(1);
}

const params = {
  DistributionId: distributionId.trim(),
  InvalidationBatch: {
    CallerReference: reference,
    Paths: {
      Quantity: 1,
      Items: ['/'],
    },
  },
};

console.log('Commencing invalidation.');

cloudfront.createInvalidation(params, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Invalidation successful.', data);
  process.exit(0);
});
