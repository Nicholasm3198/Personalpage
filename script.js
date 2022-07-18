function importData() {
  let input = document.createElement('input');
  input.type = 'docs/historyofcheese.pdf';
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
  input.click();
  
}