import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const mapTable = {
    "font": "karthika",
    "map": {
        "ം": "w",
        "ഃ": "x",
        "അ": "A",
        "ആ": "B",
        "ഇ": "C",
        "ഈ": "Cu",
        "ഉ": "D",
        "ഊ": "Du",
        "ഋ": "E",
        "ഌ": "p",
        "എ": "F",
        "ഏ": "G",
        "ഐ": "sF",
        "ഒ": "H",
        "ഓ": "Hm",
        "ഔ": "Hu",
        "ക": "I",
        "ഖ": "J",
        "ഗ": "K",
        "ഘ": "L",
        "ങ": "M",
        "ച": "N",
        "ഛ": "O",
        "ജ": "P",
        "ഝ": "Q",
        "ഞ": "R",
        "ട": "S",
        "ഠ": "T",
        "ഡ": "U",
        "ഢ": "V",
        "ണ": "W",
        "ത": "X",
        "ഥ": "Y",
        "ദ": "Z",
        "ധ": "[",
        "ന": "\\",
        "പ": "]",
        "ഫ": "^",
        "ബ": "_",
        "ഭ": "`",
        "മ": "a",
        "യ": "b",
        "ര": "c",
        "റ": "d",
        "ല": "e",
        "ള": "f",
        "ഴ": "g",
        "വ": "h",
        "ശ": "i",
        "ഷ": "j",
        "സ": "k",
        "ഹ": "l",
        "ാ": "m",
        "ി": "n",
        "ീ": "o",
        "ു": "p",
        "ൂ": "q",
        "ൃ": "r",
        "െ": "s",
        "േ": "t",
        "ൈ": "ss",
        "ൊ": "sm",
        "ോ": "tm",
        "ൌ": "su",
        "്‌": "v",
        "്": "v",
        "ൗ": "u",
        "്യേ": "ty",
        "്യെ": "sy",
        "ക്ക": "¡",
        "ക്ല": "¢",
        "ക്ഷ": "£",
        "ഗ്ഗ": "¤",
        "ഗ്ല": "¥",
        "ങ്ക": "¦",
        "ങ്ങ": "§",
        "ച്ച": "¨",
        "ഞ്ച": "©",
        "ഞ്ഞ": "ª",
        "ട്ട": "«",
        "ണ്‍": "¬",
        "ണ്ട": "ï",
        "ണ്ണ": "®",
        "ത്ത": "¯",
        "ത്ഥ": "°",
        "ദ്ദ": "±",
        "ദ്ധ": "²",
        "ന്‍": "³",
        "ൻ": "³",
        "ന്ത": "´",
        "ന്ദ": "µ",
        "ന്ന": "¶",
        "ന്മ": "·",
        "പ്പ": "¸",
        "പ്ല": "¹",
        "ബ്ബ": "º",
        "ബ്ല": "»",
        "മ്പ": "¼",
        "മ്മ": "½",
        "മ്ല": "Ÿ",
        "യ്യ": "¿",
        "ർ‌": "À",
        "ർ‍": "À",
        "ർ": "À",
        "ര്‍": "À",
        "റ്റ": "ä",
        "ല്‍": "Â",
        "ൽ": "Â",
        "ല്ല": "Ã",
        "ള്‍": "Ä",
        "ൾ": "Ä",
        "ള്ള": "Å",
        "വ്വ": "Æ",
        "ശ്ല": "Ç",
        "ശ്ശ": "È",
        "സ്ല": "É",
        "സ്സ": "Ê",
        "ഹ്ല": "Ë",
        "സ്റ്റ": "Ì",
        "ഡ്ഡ": "Í",
        "ക്ട": "Î",
        "ബ്ധ": "Ï",
        "ബ്ദ": "Ð",
        "ച്ഛ": "Ñ",
        "ഹ്മ": "Ò",
        "ഹ്ന": "Ó",
        "ന്ധ": "Ô",
        "ത്സ": "Õ",
        "ജ്ജ": "Ö",
        "ണ്മ": "×",
        "സ്ഥ": "Ø",
        "ന്ഥ": "Ù",
        "ജ്ഞ": "Ú",
        "ത്ഭ": "Û",
        "ഗ്മ": "Ü",
        "ശ്ച": "Ý",
        "ണ്ഡ": "Þ",
        "ത്മ": "ß",
        "ക്ത": "à",
        "ഗ്ന": "á",
        "ന്റ": "â",
        "ഷ്ട": "ã",
        "്യ": "y",
        "്വ": "z",
        "്ര": "{",
        "-": "þ"
    }
};

  function unicode2ascii(strText) {
    let ascii_text = "";
    for (let index = 0; index < strText.length;) {
      let found = false;
      for (let lenChar = 3; lenChar > 0; lenChar--) {
        const chUnicode = strText.substring(index, index + lenChar);
        if (mapTable.map[chUnicode]) {
          ascii_text += mapTable.map[chUnicode];
          index += lenChar;
          found = true;
          break;
        }
      }
      if (!found) {
        ascii_text += strText[index];
        index++;
      }
    }
    return ascii_text;
  }

  const handleConvert = () => {
    const convertedText = unicode2ascii(inputText);
    setOutputText(convertedText);
  };

  const handleCopy = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText);
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Unicode to ASCII Converter</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <label className="block text-lg font-medium text-gray-700 mb-2">Enter Unicode</label>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          rows="5"
          placeholder="Type unicode here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
          onClick={handleConvert}
        >
          Convert to ASCII
        </button>
        <label className="block text-lg font-medium text-gray-700 mt-6 mb-2">Converted ASCII Text</label>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          rows="5"
          placeholder="Converted ASCII text will appear here..."
          value={outputText}
          readOnly
        ></textarea>
        <button
          className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all mt-4"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}

export default App;
