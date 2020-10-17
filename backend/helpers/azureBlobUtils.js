const { BlobServiceClient } = require('@azure/storage-blob');

let containerClient = null;

const initBlobClient = () => {
  try {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_BLOB
  );

  containerClient = blobServiceClient.getContainerClient(
    process.env.AZURE_CONTAINER_NAME
  );
  } catch(err) {
    console.log(err);
  }
};

const getListOfBlobs = () => {
  try {
  let list = await containerClient.listBlobsFlat();
  return list;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const uploadBlob = (name, data, dataSize) => {
  try {
  const blockBlobClient = containerClient.getContainerClient(name);
  await blockBlobClient.upload(data, dataSize);
  } catch(err) {
    console.log(err);
    return false;
  }
}

const deleteBlob = (name) => {
  try {
    const blockBlobClient = containerClient.getContainerClient(name);
    await blockBlobClient.delete();
    } catch(err) {
      console.log(err);
      return false;
    }
}

module.exports.initBlobClient = initBlobClient;
module.exports.getListOfBlobs = getListOfBlobs;
module.exports.uploadBlob = uploadBlob;
module.exports.deleteBlob = deleteBlob;