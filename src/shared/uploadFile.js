// image file 업로드 함수
import AWS from "aws-sdk";

const S3_BUCKET = process.env.REACT_APP_BUCKET
const REGION = process.env.REACT_APP_REGION
const IDENTITY_POOL_ID = process.env.REACT_APP_AWS_IDENTITY_POOL_ID

AWS.config.update({
  region: REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IDENTITY_POOL_ID,
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
