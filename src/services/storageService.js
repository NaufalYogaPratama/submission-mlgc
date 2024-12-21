const { Storage } = require("@google-cloud/storage");

const storage = new Storage();
const bucketName = "bucket-submission-naufalyp";
const bucket = storage.bucket(bucketName);

const uploadFile = async (buffer, mimetype, imageId) => {
  const filePath = `uploaded_images/${imageId}`;
  const file = bucket.file(filePath);

  await file.save(buffer, { contentType: mimetype });
  return `https://storage.googleapis.com/${bucket.name}/${filePath}`;
};

module.exports = { uploadFile };
