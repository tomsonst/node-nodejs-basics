import fs from 'fs';

export const write = async () => {
  const writedFile = fs.createWriteStream('src/streams/files/fileToWrite.txt');

    process.stdin.on('data', (chunk) => {
      writedFile.write(chunk);
    });
};

write();