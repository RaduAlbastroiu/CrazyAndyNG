const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');

const UserController = require('./controller');
const UserModel = require('./model');

const userRouter = new Router();
const userController = new UserController(UserModel);

const fileUpload = require('express-fileupload');

userRouter.post(
  '/login',
  [
    check('email', 'Empty email field').not().isEmpty(),
    check('email', 'Please provide valid email').isEmail(),
    check('password', 'Empty password field').not().isEmpty(),
  ],
  validate,
  async (req, res) => {
    try {
      const token = await userController.login(req.body);
      if (token) {
        return res.status(200).json({ token });
      }
      throw 'passwordmismatch';
    } catch (err) {
      if (err === 'password mismatch' || err === 'not found') {
        return res
          .status(403)
          .json({ err: 'Invalid email and password combination' });
      }
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

// TEST AREA

const { BlobServiceClient, BlockBlobClient } = require('@azure/storage-blob');

userRouter.use(fileUpload());

userRouter.post('/image', async (req, res) => {
  console.log(process.env.AZURE_BLOB);
  console.log(req.files);

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_BLOB
  );

  const containerName = 'quickstartqirienri2nre2904';

  const containerClient = blobServiceClient.getContainerClient(containerName);
  //const createContainerResponse = await containerClient.create();

  // UPLOAD BLOB
  /*
  let blobName = 'quickstarttextdfgytre.jpg';

  let blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(
    req.files.image0.data,
    req.files.image0.size
  );
  console.log(
    'Blob was uploaded successfully. requestId: ',
    uploadBlobResponse.requestId
  );

  // LIST BLOBS
  for await (const blob of containerClient.listBlobsFlat()) {
    console.log(blob.name);
  }
  */

  // DOWNLOAD BLOB
  blobName = 'quickstarttextdfgytre.jpg';
  blockBlobClient = containerClient.getBlockBlobClient(blobName);

  const downloadBlockBlobResponse = await blockBlobClient.download(0);
  console.log(downloadBlockBlobResponse.readableStreamBody);

  return res.status(200).send('PNM TEST');
});

module.exports = userRouter;
