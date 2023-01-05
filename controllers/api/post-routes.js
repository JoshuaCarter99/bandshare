const router = require('express').Router();
const { Post, Tag, PostTag } = require('../../models');
const cloudinary = require('cloudinary');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  const postData = await Post.findAll({
    include: [{
      model: Tag,
      through: PostTag,
    }],
  });
  return res.json(postData);
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/upload', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    Post.create({
      song_name: req.body.song_name,
      user_id: req.session.user_id,
      audio_file: req.body.audio_file,
    });
    Tag.create({
      tag_name: req.body.tag_name,
    })
    // PostTag.create({

    // })

    .then((postData) => {
      req.session.save(() => {
      req.session.user_id = postData.id;
      req.session.username = postData.username;
      req.session.logged_in = true;
      req.session.tag_name = postData.tag_name;  
      });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  //post create needs user ID from req.session,user_id
  //tag create
  //posttag create
  //in try catch

  res.json(req.body);

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
