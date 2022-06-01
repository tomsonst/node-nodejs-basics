export const parseEnv = () => {
  let resultArr = [];
  console.log(process.env)

  for(let key in process.env){
    if(key.slice(0, 4) === 'RSS_'){
      resultArr.push(`${key}=${process.env[key]}`);
    }
  }

  console.log(resultArr.join('; '));
};