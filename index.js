// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 기본 페이지에 "Hello, World!" 표시
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
