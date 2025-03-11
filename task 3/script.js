const fs = require('fs');

fs.readFile('log.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }

    const lines = data.split('\n');
    const logStats = { INFO: 0, WARNING: 0, ERROR: 0 };
    const errors = [];

    lines.forEach(line => {
        if (line.trim()) {
            const match = line.match(/\[(.*?)\] \[(.*?)\] (.*)/);
            if (match) {
                const [, timestamp, type, message] = match;
                logStats[type]++;

                if (type === 'ERROR') {
                    errors.push(`[${timestamp}] ${message}`);
                }
            }
        }
    });

    console.log('Статистика по логам:');
    console.log(`INFO: ${logStats.INFO}`);
    console.log(`WARNING: ${logStats.WARNING}`);
    console.log(`ERROR: ${logStats.ERROR}`);

    console.log('\nСписок ошибок:');
    errors.forEach(error => console.log(error));
});