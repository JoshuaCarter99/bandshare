function showUploadWidget() {
  cloudinary.openUploadWidget(
    {
      cloudName: 'dlvmcylti',
      uploadPreset: '<upload preset>',
      sources: ['local'],
      googleApiKey: '449562749791661',
      showAdvancedOptions: true,
      cropping: false,
      multiple: false,
      defaultSource: 'local',
      styles: {
        palette: {
          window: '#10173a',
          sourceBg: '#20304b',
          windowBorder: '#7171D0',
          tabIcon: '#79F7FF',
          inactiveTabIcon: '#8E9FBF',
          menuIcons: '#CCE8FF',
          link: '#72F1FF',
          action: '#5333FF',
          inProgress: '#00ffcc',
          complete: '#33ff00',
          error: '#cc3333',
          textDark: '#000000',
          textLight: '#ffffff',
        },
        fonts: {
          default: null,
          "'IBM Plex Sans', sans-serif": {
            url: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans',
            active: true,
          },
        },
      },
    },
    (err, info) => {
      if (!err) {
        console.log('Upload Widget event - ', info);
      }
    }
  );
}
