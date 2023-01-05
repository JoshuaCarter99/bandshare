module.exports = {
  format_date: (date) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${months[new Date(date).getMonth()]} ${new Date(
      date
    ).getDate()}, ${new Date(date).getFullYear()}`;
  },

  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },

  format_url: (url) => {
  // Split the URL into parts
  const parts = url.split("upload/");
  // Insert the waveform flag and other options between "upload/" and the rest of the URL
  parts.splice(1, 0, "upload/h_50,w_500,fl_waveform,co_darkgray,b_transparent/");
  // Rejoin the parts to get the image URL
  let imageUrl = parts.join("");
  // Replace the file extension with "png"
  imageUrl = imageUrl.replace(/\.[^/.]+$/, ".png");
  return imageUrl;
  },
};
