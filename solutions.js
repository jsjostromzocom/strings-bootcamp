function repeat(text, repetitions){
  let output = "";
  for(let i = 0; i < repetitions; i++){
    output += text;
  }
  return output;
}

function containsChar(text, character){
  for(let char of text){
    if(char == character){
      return true;
    }
  }
  return false;
}

function indexOfChar(text, character){
  for(let i = 0; i < text.length; i++){
    const char = text[i]
    if(char == character){
      return i;
    }
  }
  return -1;
}

function startsWith(text, character){
  return text[0] == character
}

function endsWith(text, character){
  return text[text.length - 1] == character
}

function reverse(text){
  let output = "";
  for(let i = text.length-1; i >= 0; i-=1){
    output += text[i];
  }
  return output;
}

function removeChar(text, character){
  let output = "";
  for(let currentCharacter of text){
    if(currentCharacter != character){
      output += currentCharacter;
    }
  }
  return output;
}

function replaceChar(text, replacee, replacer){
  let output = "";
  for(let currentCharacter of text){
    if(currentCharacter == replacee){
      output += replacer;
    }else{
      output += currentCharacter;
    }
  }
  return output;
}

function substring(text, start, stop){
  let output = "";
  for(let i = start; i <= stop; i++){
    output += text[i]
  }
  return output;
}

function contains(str, otherString){
  for(let i = 0; i < str.length; i++){
    const sub = substring(str, i, i + otherString.length - 1);
    if(sub == otherString){
      return true;
    }
  }
  return false;
}

function remove(str, otherString){
  let output = "";
  for(let i = 0; i < str.length; i++){
    const sub = substring(str, i, i + otherString.length - 1);
    if(sub != otherString){
      output += str[i];
    }else{
      i += otherString.length - 1;
    }
  }
  return output;
}

function replace(str, replacee, replacer){
  let output = "";
  for(let i = 0; i < str.length; i++){
    const sub = substring(str, i, i + replacee.length - 1);
    if(sub != replacee){
      output += str[i];
    }else{
      output += replacer;
      i += replacee.length - 1;
    }
  }
  return output;
}

function encrypt(str){
  const consonants = "bcdfghjklmnpqrstvxyz";
  const consonantsUpperCase = "BCDFGHJKLMNPQRSTVXYZ";
  let output = "";
  for(const character of str){
    if(containsChar(consonants, character)){
      output += character + "o" + character
    }else if(containsChar(consonantsUpperCase, character)){
      output += character + "O" + character
    }else{
      output += character;
    }
  }
  return output;
}

function decrypt(str){
  const consonants = "bcdfghjklmnpqrstvxyzBCDFGHJKLMNPQRSTVXYZ";
  let output = "";
  for(let i = 0; i < str.length; i++){
    const character = str[i];
    if(containsChar(consonants, character)){
      i += 2;
    }
    output += character;
  }
  return output;
}