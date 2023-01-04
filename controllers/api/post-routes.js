const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
    const postData = await Post.findAll();
    return res.json(postData);
  });

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  
  router.post("/upload", (req, res) => {
    console.log(req.body);

    cloudinary.uploader.upload("", (error, result) => {
      console.log("Result", result);
      console.log("error", error);
      if (error) {
        res.status(500).json(error);
        return;
      }
      console.log(result.url);
      res.status(200).json(result);
    });
  });
  
  module.exports = router;
  
module.exports = router;