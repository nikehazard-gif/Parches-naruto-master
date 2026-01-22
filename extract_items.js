import fs from 'fs';

try {
    console.log("Reading db.json and sorting items...");
    const data = fs.readFileSync('./db.json', 'utf8');
    const db = JSON.parse(data);

    if (!db.TArticle) {
        console.log("Error: Could not find 'TArticle' section.");
    } else {
        // 1. First, we create the list of objects
        const sortedArticles = db.TArticle.sort((a, b) => {
            // This sorts the IDs numerically: 14100001, 14100002, etc.
            return a.ID - b.ID;
        });

        // 2. Then, we format them into the "ID Name" string
        const itemList = sortedArticles.map(item => {
            const name = item.data && item.data.Name ? item.data.Name : "Unknown Name";
            return `${item.ID} ${name}`;
        });

        fs.writeFileSync('./Item_List_Updated.txt', itemList.join('\n'));
        console.log(`Success! Sorted and extracted ${itemList.length} items.`);
    }
} catch (err) {
    console.error("An error occurred:", err.message);
}