// Filtrumenq grqery u veradarcnum menak kardacacnery(readStatus true)
const getReadBooks = (books) => {
    return books.filter(book => book.readStatus === true);
};

// Dasavorum enq grqery yst tokosi
const sortByPercent = (books) => {
    // Spread operatory ogtagorcum enq vor chpoxenq skzbnakan array-y
    return [...books].sort((a, b) => b.percent - a.percent);
};

const arr = [
    { book: 'Catcher in the Rye', readStatus: true, percent: 40},
    { book: 'Animal Farm', readStatus: true, percent: 20},
    { book: 'Solaris', readStatus: false, percent: 90 },
    { book: 'The Fall', readStatus: true, percent: 50 },
    { book: 'White Nights', readStatus: false, percent: 60 },
    { book: 'After Dark', readStatus: true, percent: 70 }
];

// Stanum enq menak kardacacnery
const readBooks = getReadBooks(arr);
console.log('Read books:', readBooks);

// Dasavorum enq kardacvac grqery tokosov
const sortedReadBooks = sortByPercent(readBooks);
console.log('Sorted:', sortedReadBooks);
