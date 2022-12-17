const input = document.querySelector("#text-input");
const keys = document.querySelectorAll(".keyboard-key");
const capsKey = document.querySelector('.keyboard-key-caps');
const shiftKey = document.querySelector('.keyboard-key-shift');
let isCapsOn = false;
let isShiftOn = false;
  
  const backspace = document.querySelector(".keyboard-key-backspace");
  backspace.addEventListener("click", ()=>{
    input.value = input.value.substring(0, input.value.length - 1);
  });
  
  const enter = document.querySelector(".keyboard-key-enter");
  enter.addEventListener("click", () => {
    input.value += "\n";
  });

shiftKey.addEventListener('click', () => {
  isShiftOn = !isShiftOn;
});

  setInterval(function() {
      if (isShiftOn) {
    onetext.textContent = onetext.textContent = '!';
    twotext.textContent = twotext.textContent = '\\';
    threetext.textContent = threetext.textContent = '#';
    fourtext.textContent = fourtext.textContent = '$';
    fivetext.textContent = fivetext.textContent = '%';
    sixtext.textContent = sixtext.textContent = '^';
    seventext.textContent = seventext.textContent = '&';
    eighttext.textContent = eighttext.textContent = '*';
    ninetext.textContent = ninetext.textContent = '(';
    zerotext.textContent = zerotext.textContent = ')';
    dashtext.textContent = dashtext.textContent = '_';
    colontext.textContent = colontext.textContent = ';';
    rbrackettext.textContent = rbrackettext.textContent = '{';
    lbrackettext.textContent = lbrackettext.textContent = '}';
    commatext.textContent = commatext.textContent = '<';
    periodtext.textContent = periodtext.textContent = '>';
    apostrophetext.textContent = apostrophetext.textContent = '"';
    slashtext.textContent = slashtext.textContent = '?';
    attext.textContent = attext.textContent = '+';
  } else {
    onetext.textContent = onetext.textContent = '1';
    twotext.textContent = twotext.textContent = '2';
    threetext.textContent = threetext.textContent = '3';
    fourtext.textContent = fourtext.textContent = '4';
    fivetext.textContent = fivetext.textContent = '5';
    sixtext.textContent = sixtext.textContent = '6';
    seventext.textContent = seventext.textContent = '7';
    eighttext.textContent = eighttext.textContent = '8';
    ninetext.textContent = ninetext.textContent = '9';
    zerotext.textContent = zerotext.textContent = '0';
    dashtext.textContent = dashtext.textContent = '-';
    colontext.textContent = colontext.textContent = ':';
    rbrackettext.textContent = rbrackettext.textContent = '[';
    lbrackettext.textContent = lbrackettext.textContent = ']';
    commatext.textContent = commatext.textContent = ',';
    periodtext.textContent = periodtext.textContent = '.';
    apostrophetext.textContent = apostrophetext.textContent = "'";
    slashtext.textContent = slashtext.textContent = '/';
    attext.textContent = attext.textContent = '@';
  }
  }, 500);
                          
  setInterval(function() {
      if (isShiftOn || isCapsOn) {
    qtext.textContent = qtext.textContent.toUpperCase();
    wtext.textContent = wtext.textContent.toUpperCase();
    etext.textContent = etext.textContent.toUpperCase();
    rtext.textContent = rtext.textContent.toUpperCase();
    ttext.textContent = ttext.textContent.toUpperCase();
    ytext.textContent = ytext.textContent.toUpperCase();
    utext.textContent = utext.textContent.toUpperCase();
    itext.textContent = itext.textContent.toUpperCase();
    otext.textContent = otext.textContent.toUpperCase();
    ptext.textContent = ptext.textContent.toUpperCase();
    atext.textContent = atext.textContent.toUpperCase();
    stext.textContent = stext.textContent.toUpperCase();
    dtext.textContent = dtext.textContent.toUpperCase();
    ftext.textContent = ftext.textContent.toUpperCase();
    gtext.textContent = gtext.textContent.toUpperCase();
    htext.textContent = htext.textContent.toUpperCase();
    jtext.textContent = jtext.textContent.toUpperCase();
    ktext.textContent = ktext.textContent.toUpperCase();
    ltext.textContent = ltext.textContent.toUpperCase(); 
    ztext.textContent = ztext.textContent.toUpperCase();
    xtext.textContent = xtext.textContent.toUpperCase();
    ctext.textContent = ctext.textContent.toUpperCase();
    vtext.textContent = vtext.textContent.toUpperCase();
    btext.textContent = btext.textContent.toUpperCase();
    ntext.textContent = ntext.textContent.toUpperCase();
    mtext.textContent = mtext.textContent.toUpperCase();
    } else {
    qtext.textContent = qtext.textContent.toLowerCase();
    wtext.textContent = wtext.textContent.toLowerCase();
    etext.textContent = etext.textContent.toLowerCase();
    rtext.textContent = rtext.textContent.toLowerCase();
    ttext.textContent = ttext.textContent.toLowerCase();
    ytext.textContent = ytext.textContent.toLowerCase();
    utext.textContent = utext.textContent.toLowerCase();
    itext.textContent = itext.textContent.toLowerCase();
    otext.textContent = otext.textContent.toLowerCase();
    ptext.textContent = ptext.textContent.toLowerCase();
    atext.textContent = atext.textContent.toLowerCase();
    stext.textContent = stext.textContent.toLowerCase();
    dtext.textContent = dtext.textContent.toLowerCase();
    ftext.textContent = ftext.textContent.toLowerCase();
    gtext.textContent = gtext.textContent.toLowerCase();
    htext.textContent = htext.textContent.toLowerCase();
    jtext.textContent = jtext.textContent.toLowerCase();
    ktext.textContent = ktext.textContent.toLowerCase();
    ltext.textContent = ltext.textContent.toLowerCase();
    ztext.textContent = ztext.textContent.toLowerCase();
    xtext.textContent = xtext.textContent.toLowerCase();
    ctext.textContent = ctext.textContent.toLowerCase();
    vtext.textContent = vtext.textContent.toLowerCase();
    btext.textContent = btext.textContent.toLowerCase();
    ntext.textContent = ntext.textContent.toLowerCase();
    mtext.textContent = mtext.textContent.toLowerCase();
}
}, 500);

capsKey.addEventListener('click', () => {
  isCapsOn = !isCapsOn;
});
  
  const one = document.querySelector(".keyboard-key-1");
  const onetext = document.querySelector(".keyboard-text-1");
  one.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "1";
      } else {
     if (isShiftOn) {
       input.value += "!";
     } else {
    input.value += "1";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const two = document.querySelector(".keyboard-key-2");
  const twotext = document.querySelector(".keyboard-text-2");
  two.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "2";
      } else {
     if (isShiftOn) {
       input.value += "\\";
     } else {
    input.value += "2";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const three = document.querySelector(".keyboard-key-3");
  const threetext = document.querySelector(".keyboard-text-3");
  three.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "3";
      } else {
     if (isShiftOn) {
       input.value += "#";
     } else {
    input.value += "3";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const four = document.querySelector(".keyboard-key-4");
  const fourtext = document.querySelector(".keyboard-text-4");
  four.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "4";
      } else {
     if (isShiftOn) {
       input.value += "$";
     } else {
    input.value += "4";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const five = document.querySelector(".keyboard-key-5");
const fivetext = document.querySelector(".keyboard-text-5");
  five.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "5";
      } else {
     if (isShiftOn) {
       input.value += "%";
     } else {
    input.value += "5";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const six = document.querySelector(".keyboard-key-6");
const sixtext = document.querySelector(".keyboard-text-6");
  six.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "6";
      } else {
     if (isShiftOn) {
       input.value += "^";
     } else {
    input.value += "6";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const seven = document.querySelector(".keyboard-key-7");
const seventext = document.querySelector(".keyboard-text-7");
  seven.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "7";
      } else {
     if (isShiftOn) {
       input.value += "&";
     } else {
    input.value += "7";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const eight = document.querySelector(".keyboard-key-8");
const eighttext = document.querySelector(".keyboard-text-8");
  eight.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "8";
      } else {
     if (isShiftOn) {
       input.value += "*";
     } else {
    input.value += "8";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const nine = document.querySelector(".keyboard-key-9");
const ninetext = document.querySelector(".keyboard-text-9");
  nine.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "9";
      } else {
     if (isShiftOn) {
       input.value += "(";
     } else {
    input.value += "9";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const zero = document.querySelector(".keyboard-key-0");
const zerotext = document.querySelector(".keyboard-text-0");
  zero.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "0";
      } else {
     if (isShiftOn) {
       input.value += ")";
     } else {
    input.value += "0";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const dash = document.querySelector(".keyboard-key-dash");
const dashtext = document.querySelector(".keyboard-text-dash");
  dash.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "-";
      } else {
     if (isShiftOn) {
       input.value += "_";
     } else {
    input.value += "-";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const q = document.querySelector(".keyboard-key-q");
  const qtext = document.querySelector(".keyboard-text-q");
  q.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "Q";
   } else {
     if (isShiftOn) {
       input.value += "Q";
     } else {
    input.value += "q";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const w = document.querySelector(".keyboard-key-w");
  const wtext = document.querySelector(".keyboard-text-w");
  w.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "W";
   } else {
     if (isShiftOn) {
       input.value += "W";
     } else {
    input.value += "w";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const e = document.querySelector(".keyboard-key-e");
  const etext = document.querySelector(".keyboard-text-e");
  e.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "E";
   } else {
     if (isShiftOn) {
       input.value += "E";
     } else {
    input.value += "e";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const r = document.querySelector(".keyboard-key-r");
  const rtext = document.querySelector(".keyboard-text-r");
  r.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "R";
      } else {
     if (isShiftOn) {
       input.value += "R";
     } else {
    input.value += "r";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const t = document.querySelector(".keyboard-key-t");
  const ttext = document.querySelector(".keyboard-text-t");
  t.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "T";
      } else {
     if (isShiftOn) {
       input.value += "T";
     } else {
    input.value += "t";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const y = document.querySelector(".keyboard-key-y");
  const ytext = document.querySelector(".keyboard-text-y");
  y.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "Y";
      } else {
     if (isShiftOn) {
       input.value += "Y";
     } else {
    input.value += "y";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const u = document.querySelector(".keyboard-key-u");
  const utext = document.querySelector(".keyboard-text-u");
  u.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "U";
     } else {
     if (isShiftOn) {
       input.value += "U";
     } else {
    input.value += "u";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const i = document.querySelector(".keyboard-key-i");
  const itext = document.querySelector(".keyboard-text-i");
  i.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "I";
      } else {
     if (isShiftOn) {
       input.value += "I";
     } else {
    input.value += "i";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const o = document.querySelector(".keyboard-key-o");
  const otext = document.querySelector(".keyboard-text-o");
  o.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "O";
      } else {
     if (isShiftOn) {
       input.value += "O";
     } else {
    input.value += "o";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const p = document.querySelector(".keyboard-key-p");
  const ptext = document.querySelector(".keyboard-text-p");
  p.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "P";
      } else {
     if (isShiftOn) {
       input.value += "P";
     } else {
    input.value += "p";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  //const enter = document.querySelector(".keyboard-key-enter");
  //enter.addEventListener("click", () => {
  //  input.value += "p";
  //});

  const a = document.querySelector(".keyboard-key-a");
  const atext = document.querySelector(".keyboard-text-a");
  a.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "A";
      } else {
     if (isShiftOn) {
       input.value += "A";
     } else {
    input.value += "a";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const s = document.querySelector(".keyboard-key-s");
  const stext = document.querySelector(".keyboard-text-s");
  s.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "S";
     } else {
     if (isShiftOn) {
       input.value += "S";
     } else {
    input.value += "s";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const d = document.querySelector(".keyboard-key-d");
  const dtext = document.querySelector(".keyboard-text-d");
  d.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "D";
    } else {
     if (isShiftOn) {
       input.value += "D";
     } else {
    input.value += "d";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const f = document.querySelector(".keyboard-key-f");
  const ftext = document.querySelector(".keyboard-text-f");
  f.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "F";
     } else {
     if (isShiftOn) {
       input.value += "F";
     } else {
    input.value += "f";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const g = document.querySelector(".keyboard-key-g");
  const gtext = document.querySelector(".keyboard-text-g");
  g.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "G";
    } else {
     if (isShiftOn) {
       input.value += "G";
     } else {
    input.value += "g";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const h = document.querySelector(".keyboard-key-h");
  const htext = document.querySelector(".keyboard-text-h");
  h.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "H";
    } else {
     if (isShiftOn) {
       input.value += "H";
     } else {
    input.value += "h";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const j = document.querySelector(".keyboard-key-j");
  const jtext = document.querySelector(".keyboard-text-j");
  j.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "J";
     } else {
     if (isShiftOn) {
       input.value += "J";
     } else {
    input.value += "j";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const k = document.querySelector(".keyboard-key-k");
  const ktext = document.querySelector(".keyboard-text-k");
  k.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "K";
      } else {
     if (isShiftOn) {
       input.value += "K";
     } else {
    input.value += "k";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const l = document.querySelector(".keyboard-key-l");
  const ltext = document.querySelector(".keyboard-text-l");
  l.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "L";
    } else {
     if (isShiftOn) {
       input.value += "L";
     } else {
    input.value += "l";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const colon = document.querySelector(".keyboard-key-colon");
  const colontext = document.querySelector(".keyboard-text-colon");
  colon.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += ":";
      } else {
     if (isShiftOn) {
       input.value += ";";
     } else {
    input.value += ":";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const rbracket = document.querySelector(".keyboard-key-rbracket");
  const rbrackettext = document.querySelector(".keyboard-text-rbracket");
  rbracket.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "[";
      } else {
     if (isShiftOn) {
       input.value += "{";
     } else {
    input.value += "[";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const lbracket = document.querySelector(".keyboard-key-lbracket");
  const lbrackettext = document.querySelector(".keyboard-text-lbracket");
  lbracket.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "]";
      } else {
     if (isShiftOn) {
       input.value += "}";
     } else {
    input.value += "]";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

const z = document.querySelector(".keyboard-key-z");
  const ztext = document.querySelector(".keyboard-text-z");
  z.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "Z";
    } else {
     if (isShiftOn) {
       input.value += "Z";
     } else {
    input.value += "z";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const x = document.querySelector(".keyboard-key-x");
  const xtext = document.querySelector(".keyboard-text-x");
  x.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "X";
    } else {
     if (isShiftOn) {
       input.value += "X";
     } else {
    input.value += "x";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const c = document.querySelector(".keyboard-key-c");
  const ctext = document.querySelector(".keyboard-text-c");
  c.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "C";
    } else {
     if (isShiftOn) {
       input.value += "C";
     } else {
    input.value += "c";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const v = document.querySelector(".keyboard-key-v");
  const vtext = document.querySelector(".keyboard-text-v");
  v.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "V";
    } else {
     if (isShiftOn) {
       input.value += "V";
     } else {
    input.value += "v";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const b = document.querySelector(".keyboard-key-b");
  const btext = document.querySelector(".keyboard-text-b");
  b.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "B";
     } else {
     if (isShiftOn) {
       input.value += "B";
     } else {
    input.value += "b";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const n = document.querySelector(".keyboard-key-n");
  const ntext = document.querySelector(".keyboard-text-n");
  n.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "N";
     } else {
     if (isShiftOn) {
       input.value += "N";
     } else {
    input.value += "n";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const m = document.querySelector(".keyboard-key-m");
  const mtext = document.querySelector(".keyboard-text-m");
  m.addEventListener("click", () => {
   if (isCapsOn) {
    input.value += "M";
   } else {
     if (isShiftOn) {
       input.value += "M";
     } else {
    input.value += "m";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const comma = document.querySelector(".keyboard-key-comma");
  const commatext = document.querySelector(".keyboard-text-comma");
  comma.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += ",";
      } else {
     if (isShiftOn) {
       input.value += "<";
     } else {
    input.value += ",";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const period = document.querySelector(".keyboard-key-period");
  const periodtext = document.querySelector(".keyboard-text-period");
  period.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += ".";
      } else {
     if (isShiftOn) {
       input.value += ">";
     } else {
    input.value += ".";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const apostrophe = document.querySelector(".keyboard-key-apostrophe");
  const apostrophetext = document.querySelector(".keyboard-text-apostrophe");
  apostrophe.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "'";
      } else {
     if (isShiftOn) {
       input.value += '"';
     } else {
    input.value += "'";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const slash = document.querySelector(".keyboard-key-slash");
  const slashtext = document.querySelector(".keyboard-text-slash");
  slash.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "/";
      } else {
     if (isShiftOn) {
       input.value += "?";
     } else {
    input.value += "/";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const at = document.querySelector(".keyboard-key-at");
  const attext = document.querySelector(".keyboard-text-at");
  at.addEventListener("click", () => {
  if (isCapsOn) {
    input.value += "@";
      } else {
     if (isShiftOn) {
       input.value += "+";
     } else {
    input.value += "@";
     }
   }
   if (isShiftOn) {
    isShiftOn = !isShiftOn;
   }
  });

  const space = document.querySelector(".keyboard-key-space");
  space.addEventListener("click", () => {
    input.value += " ";
  });
