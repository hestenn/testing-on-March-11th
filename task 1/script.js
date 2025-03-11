const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }

    const lines = data.split('\n');
    lines.forEach((line, index) => {
        if (line.trim()) { // тут я чекаю, пустая ли строка
            console.log(`${index + 1}: ${line}`);
        }
    });
});