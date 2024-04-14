const books=[
    {
        title: 'Book one', genre:'Friction', publish: 1981, 
        edition: 2004, price:800,
    },
    {
        title: 'Book two', genre:'Non-Friction', publish: 1992, 
        edition: 2008,price:900,
    },
    {
        title: 'Book three', genre:'History', publish: 1999, 
        edition: 2007, price:700,
    },
    {
        title: 'Book four', genre:'Non-Friction', publish: 1989, 
        edition: 2010, price:809,
    },
    {
        title: 'Book five', genre:'Science', publish: 2009, 
        edition: 2010, price:899,
    },
    {
        title: 'Book six', genre:'Friction', publish: 1987, 
        edition: 2010, price:900,
    },

    {
        title: 'Book seven', genre:'History', publish: 1986, 
        edition: 1996, price:1889,
    },
    {
        title: 'Book eight', genre:'Science', publish: 2011, 
        edition: 2016, price:999,
    },
    {
        title: 'Book nine', genre:'Non-Friction', publish: 1981, 
        edition: 1989,
        price:800,
    },

]
// const usreBook=books.filter((bk)=> bk.genre === 'History');

const usreBook=books.filter((bk)=>
bk.publish>=2000
);

console.log(usreBook);

let totalPrice=books.filter((items)=> items.publish>=2000).reduce((acc,item)=>acc+item.price ,0);
console.log(totalPrice);