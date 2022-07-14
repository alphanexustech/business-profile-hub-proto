const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/angular12-boiler/runtime.js',
        './dist/angular12-boiler/polyfills.js',
        // './dist/angular12-boiler/es2015-polyfills.js',
        // './dist/angular12-boiler/scripts.js',
        './dist/angular12-boiler/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/test-widget.js');
}
build();