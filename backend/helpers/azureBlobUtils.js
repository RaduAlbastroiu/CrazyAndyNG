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
  } catch (err) {
    console.log(err);
  }
};

const getListOfBlobs = async () => {
  try {
    let list = await containerClient.listBlobsFlat();
    return list;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const uploadBlob = async (name, data, dataSize) => {
  try {
    const blockBlobClient = containerClient.getContainerClient(name);
    await blockBlobClient.upload(data, dataSize);
  } catch (err) {
    console.log(err);
    return false;
  }
};

const downloadBlob = async (name) => {
  try {
    blockBlobClient = containerClient.getBlockBlobClient(name);

    const downloadBlockBlobResponse = await blockBlobClient.download(0);
    return { data: downloadBlockBlobResponse.readableStreamBody };
  } catch (err) {
    console.log(err);
    return {};
  }
};

const deleteBlob = async (name) => {
  try {
    const blockBlobClient = containerClient.getContainerClient(name);
    await blockBlobClient.delete();
  } catch (err) {
    console.log(err);
    return false;
  }
};

// A helper function used to read a Node.js readable stream into a string
async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on('data', (data) => {
      chunks.push(data.toString());
    });
    readableStream.on('end', () => {
      resolve(chunks.join(''));
    });
    readableStream.on('error', reject);
  });
}

module.exports.initBlobClient = initBlobClient;
module.exports.getListOfBlobs = getListOfBlobs;
module.exports.uploadBlob = uploadBlob;
module.exports.downloadBlob = downloadBlob;
module.exports.deleteBlob = deleteBlob;
