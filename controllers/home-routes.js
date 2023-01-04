const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Tag, PostTag } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: ['id', 'song_name', 'user_id', 'audio_file'],
    include: [
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
        through: PostTag,
        as: 'tags',
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })

    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      const postTags = dbPostData.map((post) => {
        post.tags.forEach((tag) => {
          console.log(tag.tag_name);
        });
        return post.get({ plain: true });
      });

      res.render('homepage', {
        posts,
        postTags,
        logged_in: req.session.logged_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', withAuth, (req, res) => {
  console.log(req.session);
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: ['id', 'song_name', 'user_id', 'audio_file'],
    include: [
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
        through: PostTag,
        as: 'tags',
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
  .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      const postTags = dbPostData.map((post) => {
        post.tags.forEach((tag) => {
          console.log(tag.tag_name);
        });
        return post.get({ plain: true });
      });

      res.render('dashboard', {
        posts,
        postTags,
        logged_in: req.session.logged_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;