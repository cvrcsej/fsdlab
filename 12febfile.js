const fs = require('fs');
const path = require('path')

const dirPath = path.join(__dirname, "Test_Directory");

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("Directory created:", dirPath);
}

fs.writeFileSync(path.join(dirPath, "hello.txt"), "welcome to CVR COLLEGE OF ENGINEERING");
const config = { version: "1.0.0", author: "Pooja" }
fs.writeFileSync(path.join(dirPath, 'config.json'), JSON.stringify(config, null, 2));
console.log('Files created inside test_directory.');