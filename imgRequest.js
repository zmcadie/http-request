const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', (error) => { throw error; })
       .on('response', (response) => {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Response Content Type: ', response.headers['content-type']);
         console.log('Downloading Image')
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', () => { console.log('Image Downloaded') });