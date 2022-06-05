import cripto from 'crypto';
import fs from 'fs';

export const calculateHash = async () => {
  fs.readFile('src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
    const hash = cripto.createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

calculateHash();