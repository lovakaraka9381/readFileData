const fs = require('fs');
const path = require('path');
const { errorHandler, successHandler } = require('../helpers/common')

const readFile = async (req, res) => {
    const filePath = path.join(__dirname, 'sample.txt')
    // const filePath = 'sample.txt';
    const readStream = fs.createReadStream(filePath, 'utf8');
    readStream.on('data', (chunk) => {
        console.log(chunk);
    })
    readStream.on('end', async () => {
        const fileData = await fileInfo(filePath);
        successHandler(res, 200, fileData);
    })
    readStream.on('error', (error) => {
        errorHandler(res, 500, error)
    })

}

const fileInfo = async (filePath) => {
    let fileInfo = {};
    fileInfo.fileName = path.basename(filePath);
    fileInfo.filePath = filePath;
    return fileInfo;
}
module.exports = {
    readFile
}