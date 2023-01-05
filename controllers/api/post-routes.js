const router = require('express').Router();
const { Post } = require('../../models');
const { Tag } = require('../../models');
const { PostTag } = require('../../models');
const cloudinary = require('cloudinary');

router.get('/', async (req, res) => {
    const postData = await Post.findAll();
    return res.json(postData);
});

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
  
router.post("/upload", (req, res) => {
  console.log(req.body);

  //post create needs user ID from req.session,user_id
  //tag create
  //in try catch
    try {
    Post.create({
      song_name: req.body.song_name,
      user_id: req.session.user_id,
      audio_file: req.body.audio_file,
    });
    Tag.create({
      tag_name: req.body.tag_name,
    })
    // .then((postData) => {
    //   req.session.user_id = postData.id;
    //   req.session.username = userData.username;
    //   req.session.logged_in = true;
    // });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
    
  res.json(req.body)

  // cloudinary.uploader.upload("", (error, result) => {
  //   console.log("Result", result);
  //   console.log("error", error);
  //   if (error) {
  //     res.status(500).json(error);
  //     return;
  //   }
  //   console.log(result.url);
  //   res.status(200).json(result);
  // });
});
  
  module.exports = router;
  
module.exports = router;