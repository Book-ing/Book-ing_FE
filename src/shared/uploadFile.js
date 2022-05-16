// image file 업로드 함수
import AWS from "aws-sdk";

const S3_BUCKET = process.env.AWS_BUCKET;
const REGION = "ap-northeast-2";
// const IDENTITY_POOL_ID = process.env.AWS_IDENTITY_POOL_ID;

AWS.config.update({
  region: REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.AWS_IDENTITY_POOL_ID,
  }),
});

export const uploadFile = async (file) => {
  const params = {
    Body: file,
    Key: file.name + Date.now(),
    Bucket: S3_BUCKET,
    ACL: "public-read",
  };

  const upload = new AWS.S3.ManagedUpload({
    params,
  });

  const { Location } = await upload.promise();
  return Location;
};
