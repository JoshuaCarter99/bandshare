const api_key = '449562749791661';
const cloud_name = 'dlvmcylti';

document.querySelector("#upload-form").addEventListener("submit", async function (e) {
  e.preventDefault()

  // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
  const signatureResponse = await axios.get("/get-signature")

  const data = new FormData()
  data.append("file", document.querySelector("#file-field").files[0])
  data.append("api_key", api_key)
  data.append("signature", signatureResponse.data.signature)
  data.append("timestamp", signatureResponse.data.timestamp)

  const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: function (e) {
      console.log(e.loaded / e.total)
    }
  })
  console.log(cloudinaryResponse.data)

  // send the image info back to our server
  const photoData = {
    public_id: cloudinaryResponse.data.public_id,
    version: cloudinaryResponse.data.version,
    signature: cloudinaryResponse.data.signature
  }

  axios.post("/do-something-with-photo", photoData)
})

// const widget = cloudinary.createUploadWidget(
//   {
//     cloudName: 'dlvmcylti',
//     uploadPreset: 'soundByte'
//   }
//   )




// function showUploadWidget() {
//   cloudinary.openUploadWidget(
//     {
//       cloudName: 'dlvmcylti',
//       uploadPreset: 'soundByte',
//       sources: ['local'],
//       googleApiKey: '449562749791661',
//       showAdvancedOptions: true,
//       cropping: false,
//       multiple: false,
//       defaultSource: 'local',
//       styles: {
//         palette: {
//           window: '#10173a',
//           sourceBg: '#20304b',
//           windowBorder: '#7171D0',
//           tabIcon: '#79F7FF',
//           inactiveTabIcon: '#8E9FBF',
//           menuIcons: '#CCE8FF',
//           link: '#72F1FF',
//           action: '#5333FF',
//           inProgress: '#00ffcc',
//           complete: '#33ff00',
//           error: '#cc3333',
//           textDark: '#000000',
//           textLight: '#ffffff',
//         },
//         fonts: {
//           default: null,
//           "'IBM Plex Sans', sans-serif": {
//             url: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans',
//             active: true,
//           },
//         },
//       },
//     },
//     (err, info) => {
//       if (!err) {
//         console.log('Upload Widget event - ', info);
//       }
//     }
//   );
// }
// document.getElementById('cloudinaryUpload').addEventListener('click', showUploadWidget() )




// var myWidget = cloudinary.createUploadWidget({
//   cloudName: 'dlvmcylti', 
//   uploadPreset: 'soundByte'}, (error, result) => { 
//     if (!error && result && result.event === "success") { 
//       console.log('Done! Here is the image info: ', result.info); 
//     }
//   }
// )

// document.getElementById("cloudinaryUpload").addEventListener("click", function(){
//   console.log('click');
//     myWidget.open();
//   }, false);