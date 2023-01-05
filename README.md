# 🎹 Sound Byte

![GitHub top language](https://img.shields.io/github/languages/top/JoshuaCarter99/bandshare?color=459c6f)
![GitHub language count](https://img.shields.io/github/languages/count/JoshuaCarter99/bandshare?color=459c6f)
![GitHub](https://img.shields.io/github/license/JoshuaCarter99/bandshare?color=459c6f)

## Description

A simple way to upload your audio files and share with your peers

📱 Visit the deployed site [Sound Byte](https://soundbyte.herokuapp.com/) 📱

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- Install [Node.js](https://nodejs.org/en/)
- Install [MySQL](https://www.mysql.com/)

After you `git clone` open a bash terminal and install the node packages

```
npm i
```

Create a [Cloudinary](https://cloudinary.com/) account to create your own API key

You will then need to create a `.env` file in the root folder of this project with the following content

```
DB_NAME='bandshare_db'
DB_USER='yourUsername'
DB_PASSWORD='yourPassword'

CLOUD_NAME=yourCloudName
CLOUDINARY_API_KEY=yourAPIkey
CLOUDINARY_API_SECRET=yourAPIsecret
```

## Usage

📢 The app will NOT work if you have not followed the installation guide 📢

To run the apps server run the following

```
npm run watch
```

If you wish to add our seed data run the following (not necessary)
 
```
npm run seed
```

Visit `http://localhost:3001/`

You will see the main feed and will have the option to login or view all posts and listen to tracks
In order to post a track you must signup or login

## Credits

- Avatars and song images created using [Boring Avatars](https://github.com/hihayk/boring-avatars-service)
- Database is using [Cloudinary](https://cloudinary.com/)

## License

This project is licensed under the [MIT License](./LICENSE)
