const express = require('express');
const app = express();  
const port = 7000;
app.get('/FinalTest', (req, res) => {
  res.send('1.ภัคพล ภักดี 6504305001347<br>2.ทิวา เเสงสว่าง 6504305001345<br>3.ชัยวัฒน์ มหาชัย 6504305001325<br>4.ชัยวัฒน์ บุญมา 6504305001357<br>5.ณัฐพล สุขศรี 6504305001328<br>6.สุเมธ ทองสีทอง 6504305001341<br>7.ณรงค์ศักดิ์ ชูพันธ์ 6504305001327<br>8.เด่นพงศ์ บัวทองดี 6504305001344<br>9.วิทกร แก้วอำไพ 6504305001336');
  
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
