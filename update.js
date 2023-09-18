const fs = require('fs');

// 檢查是否提供了外部參數
if (process.argv.length < 3) {
  console.error('請提供要添加的參數。');
  process.exit(1);
}

// 讀取外部參數
const parameterToAdd = process.argv[2];

// 讀取 README.md 文件的內容
fs.readFile('README.md', 'utf8', (err, data) => {
  if (err) {
    console.error('無法讀取 README.md 文件。', err);
    process.exit(1);
  }

  // 將參數添加到文件的末尾
  const updatedContent = `${data}\n新參數: ${parameterToAdd}\n`;

  // 寫入更新後的內容回到 README.md 文件
  fs.writeFile('README.md', updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('無法寫入 README.md 文件。', err);
      process.exit(1);
    }

    console.log(`成功將參數 "${parameterToAdd}" 添加到 README.md 文件。`);
  });
});
