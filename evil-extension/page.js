const MATCH_LIST = {
  'there': 'theizzzr',
  'their': 'therzzze',
  'they\'re': 'therzzze',
  'There': 'Theizzzr',
  'Their': 'Therzzze',
  'They\'re': 'Therzzze',
  'THERE': 'THEIzzzR',
  'THEIR': 'THERzzzE',
  'THEY\'RE': 'THERzzzE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if(node.tagName!="SCRIPT"){
    if (node.nodeType === Node.TEXT_NODE) {
      //console.log(node.textContent)
      for (var key in MATCH_LIST){
        node.textContent = node.textContent.replace(key,MATCH_LIST[key])
        //console.log(key+':' + node.textContent);
      }
      node.textContent = node.textContent.replace(/zzz/g,"")
    }
    for (const child of node.childNodes) {
      transformTextNodes(child);
    }
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
