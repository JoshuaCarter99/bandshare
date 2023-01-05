var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'dlvmcylti',
    uploadPreset: 'soundByte',
  },
  async (error, result) => {
    if (!error && result && result.event === 'success') {
      // post request
      console.log('Done! Here is the track info: ', result.info);
      const song_name = document.querySelector('#track-name').value.trim();
      const tag_name = document.querySelector('#tag-name').value.trim();
      const audio_file = result.info.secure_url;
      const payLoad = {
        song_name,
        tag_name,
        audio_file,
      };

      const response = await fetch('/api/posts/upload', {
        method: 'post',
        body: JSON.stringify(payLoad),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log('new track added');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
);

document.getElementById('cloudinaryUpload').addEventListener(
  'click',
  function (event) {
    event.preventDefault();
    myWidget.open();
  },
  false
);
