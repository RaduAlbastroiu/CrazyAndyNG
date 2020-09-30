const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');

const productRouter = new Router();

productRouter.get('/all', async (req, res) => {
  try {
    res.status(200).json([
      {
        _id: '507f191e810c19729de860ea',
        Name: 'Televizor Samsung 43TU7072, 108 cm',
        Brand: 'Samsung',
        Price: '1599.99',
        Description: `Calitatea imaginiilor care te impresioneaza, 
        posibila printr-un singur procesor care prelucreaza culoarea,
        optimizeaza raportul de contrast ridicat si controleaza 
        functia HDR. Un design subtire si elegant care te atrage 
        spre cea mai pura imagine. Creat intr-un stil minimalist din 
        toate unghiurile si cu un aspect fara margini care stabileste 
        noi standarde. Vei avea parte de cea mai captivanta experienta 
        cinematografica pe care poti sa o vezi vreodata.`,
        Hashtags: ['TV', '4K', '43in', 'LED'],
        Category: 'TV',
        Images: [''],
      },
      {
        _id: '507f1f77bcf86cd799439011',
        Name: 'Televizor LG, 121 cm',
        Brand: 'LG',
        Price: '1799.99',
        Description: `Calitatea imaginiilor care te impresioneaza, 
        posibila printr-un singur procesor care prelucreaza culoarea,
        optimizeaza raportul de contrast ridicat si controleaza 
        functia HDR.`,
        Hashtags: ['TV', '4K', '48in', 'LED'],
        Category: 'TV',
        Images: [''],
      },
    ]);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.post('', async (req, res) => {
  try {
    res.status(201).json({
      Name: 'Televizor Sony, 121 cm',
      Brand: 'Sony',
      Price: '2199.99',
      Description: `Calitatea imaginiilor care te impresioneaza, 
        posibila printr-un singur procesor care prelucreaza culoarea,
        optimizeaza raportul de contrast ridicat si controleaza 
        functia HDR.`,
      Hashtags: ['TV', '4K', '48in', 'LED'],
      Category: 'TV',
      Images: [''],
    });
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.delete('', async (req, res) => {
  try {
    res.status(200).send('Succesfully deleted');
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = productRouter;
