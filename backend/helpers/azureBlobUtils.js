const { BlobServiceClient } = require('@azure/storage-blob');

const getListOfBlobs = async () => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_BLOB
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.AZURE_CONTAINER_NAME
  );

  let list = await containerClient.listBlobsFlat();
  return list;
};

const uploadBlob = async (name, file) => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_BLOB
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.AZURE_CONTAINER_NAME
  );

  const blockBlobClient = containerClient.getBlockBlobClient(name);
  await blockBlobClient.upload(file.data, file.size);
};

const downloadBlob = async (name) => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_BLOB
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.AZURE_CONTAINER_NAME
  );

  const blockBlobClient = containerClient.getBlockBlobClient(name);
  const downloadBlockBlobResponse = await blockBlobClient.download(0);
  return {
    name: name,
    data: await streamToString(downloadBlockBlobResponse.readableStreamBody),
  };
};

const deleteBlob = async (name) => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_BLOB
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.AZURE_CONTAINER_NAME
  );

  const blockBlobClient = containerClient.getBlockBlobClient(name);
  await blockBlobClient.delete();
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

module.exports.getListOfBlobs = getListOfBlobs;
module.exports.uploadBlob = uploadBlob;
module.exports.downloadBlob = downloadBlob;
module.exports.deleteBlob = deleteBlob;
