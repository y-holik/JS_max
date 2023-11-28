// const fs = require('fs');
// const { exit } = require('process');

const { readFile } = require('fs');

// const item_list_filename = 'item-list.json'

// function readingJSON(name) {
//     var data = fs.readFileSync(name, (err, data) => {
//         if (err) {
//             console.log('no file found');
//             exit(1);
//         };
//         if (typeof(data) != 'object') {
//             console.log('not an object');
//             exit(1);
//         } 
//     });
//     return JSON.parse(data);
// }
// var data = readingJSON(item_list_filename);
// console.log(data.sites[0]);


// const res = getRequest(data.sites[0])
// console.log(res);


// async function getRequest(URL) {
//     const responce = await fetch(URL);
//     return responce.json();
// }


const fs = require('fs').promises; // Use fs.promises to use promises with readFileSync

const item_list_filename = 'item-list.json';

async function readingJSON(name) {
    try {
        const data = await fs.readFile(name, 'utf-8');
        const parsedData = JSON.parse(data);

        if (typeof parsedData !== 'object') {
            console.log('Not an object');
            process.exit(1);
        }

        return parsedData;
    } catch (err) {
        console.error('Error reading or parsing JSON file:', err.message);
        process.exit(1);
    }
}

async function getRequest(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error making HTTP request:', error.message);
        process.exit(1);
    }
}

function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

async function main() {
    while (true) {
    const data = await readingJSON(item_list_filename);
    console.log(data.sites[0]);

    // init request
    const res = await getRequest(data.sites[0]);
    // console.log(res);
    const firstPrise = {
        "link": data.sites[0],
        time: Date.now(),
        prise: res.product.price
    }
    const jsonString = JSON.stringify(firstPrise, null, 2)
    fs.writeFile('prices.json', jsonString);

    
    await sleep(2000);
    // wait 9 sec
    const res2 = await getRequest(data.sites[0]);
    const secondPrise = {
        "link": data.sites[0],
        time: Date.now(),
        prise: res2.product.price
    }
    const jsonString2 = JSON.stringify(secondPrise, null, 2)
    // get new data
    if (secondPrise.prise < firstPrise.prise) {
        fs.writeFile('prices.json', jsonString2);
        console.log('prise changed to ' + (firstPrise.prise - secondPrise.prise));
        console.log('now prise is ' + secondPrise.prise);
    }
}
    //compare with old data from prices.json

    // if menshe togda console log

    // rewrite 

}

main(); 


