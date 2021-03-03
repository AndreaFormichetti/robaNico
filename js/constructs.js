const a = 10;
let b = 1;
let c = 99;

// if (a > b || c != b)
// {
//     console.log("a è maggiore");
// }

// for (let i = 0; i < 10; i++)
// {
//     console.log(i)
// }

// let i = 0;
// while (i < 10)
// {
//     console.log("while")
//     i++;
// }

// do
// {
//     console.log("ciao")
// } while (true)

function test()
{
    let b = 44;
    b += a;
    console.log("function scope:", b);
}

function fattoriale(n)
{
    if (n === 0) return 1;
    return n * fattoriale(n - 1);
}

console.log(fattoriale(5));