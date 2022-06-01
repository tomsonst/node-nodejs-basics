import fs from 'fs';

export const read = async () => {
    const readedFile = fs.createReadStream('src/streams/files/fileToRead.txt');

    readedFile.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
};