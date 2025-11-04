const orak = {
    hetfo: {
        '1': 'matek',
        '2': "töri",
        '3': "tesi",
        '4': "fizika",
        '5': "irodalom"
    },
    kedd: {
        '1': 'matek',
        '2': "töri",
        '3': "tesi",
        '4': "fizika",
        '5': "irodalom"
    },
    szerda: {
        '1': 'matek',
        '2': "töri",
        '3': "tesi",
        '4': "fizika",
        '5': "irodalom"
    },
    csütörtök: {
        '1': 'matek',
        '2': "töri",
        '3': "tesi",
        '4': "fizika",
        '5': "irodalom"
    },
    péntek: {
        '1': 'matek',
        '2': "töri",
        '3': "tesi",
        '4': "fizika",
        '5': "irodalom"
    }
}

for (const nap in orak){
    console.log(`${nap}:`)
    for (const ora in nap){
        console.log(`${ora}.${nap[ora]}`)
    }
}