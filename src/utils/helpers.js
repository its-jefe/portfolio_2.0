// Did not write the first 2

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeWord(string) {
  return string.toUpperCase();
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Assuming I will be writing some helpers below

export function filterRepos(repos) {
  let ret = []
  repos.forEach(repo => {
    // $#@&!
    // might not use this
  });
  return ret;
}

export function customParser(val, index, arrLength) {
  if(index !== arrLength-1){
    return `${val}, `
  }else{
    return `${val}`  }
}

export function string2Array(string) {
  let ret = string.split(",")
  let ret2 = ret.map(r => r.trim())
  return ret2
}