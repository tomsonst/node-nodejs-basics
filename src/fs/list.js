import fs from 'fs';

export const list = async () => {
  const folderPath = 'src/fs/files';
  if(fs.existsSync(folderPath)){
    console.log(fs.readdirSync(folderPath, () => {}));
  } else {
    console.error('\x1b[31m%s\x1b[0m', new Error('FS operation failed'));
  }
};