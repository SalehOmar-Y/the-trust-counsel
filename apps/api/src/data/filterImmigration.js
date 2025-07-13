const fs = require('fs');

const raw = fs.readFileSync('./solicitors.json', 'utf8');  // same folder
const data = JSON.parse(raw);

const immigrationOnly = data.filter(item => item.category && item.category.toLowerCase() === 'immigration');

fs.writeFileSync('./immigrationOnly.json', JSON.stringify(immigrationOnly, null, 2));

console.log(`✔ Done. Found ${immigrationOnly.length} immigration solicitors.`);
