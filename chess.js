let queen = {
   x: 4, y: 0   // this is default current position of queen that is 4,4 ==> e4
};


function play() {
    console.log("hi");
    let direction = document.getElementById("direction").value;
    let step = document.getElementById("steps").value;
    // console.log(n);
    //edconsole.log("QUEEN'S CURRENT POSITION" + " " + board[queen.x][queen.y]);
    move(direction, step);
}


function move(direction, step) {

    switch (direction) {
        case 'N': {
           queen.x=queen.x-step;
        
            if (queen.x < 0)
                console.log("OUT OF BOUNDARY");
            else
               
                console.log("QUEEN MOVED TO THE POSITION" + " " + board[queen.x][queen.y]);

            

            break;

        }
        case 'S': {
            queen.x = queen.x + step;
            if (queen.x > 8)
                console.log("OUT OF BOUNARY");
            else
                console.log("QUEEN MOVED TO THE POSITION" + " " + board[queen.x][queen.y]);
            break;

        }

        case 'E': {
            queen.y = queen.y + step;
            if (queen.y > 8)
                console.log("OUT OF BOUNDAR");
            else
                console.log("QUEEN MOVED TO THE POSITION" + " " + board[queen.x][queen.y]);
            break;
        }
        case 'W': {
            queen.y = queen.y - step;
            if (queen.y < 0)
                console.log("OUT OF BOUNDARY");
            else
                console.log("QUEEN MOVED TO THE POSITION" + " " + board[queen.x][queen.y]);
            break;
        }
        case 'SW': {
            queen.x = queen.x + step;
            queen.y = queen.y - step;
            if (queen.x > 8 && queen.y < 0)
                console.log("OUT OF BOUNDARY");
            else
                console.log("QUEEN MOVED TO THE POSITION" + " " + board[queen.x][queen.y]);
            break;
        }
        case 'NW': {
            queen.x = queen.x - step;
            queen.y = queen.y - step;
            if (queen.x < 0 && queen.y < 0)

                console.log("OUT OF BOUNDARY");
            else
                console.log("QUEEN MOVED TO THE POSITION" + " " + board[queen.x][queen.y]);
            break;

        }
        case 'SE': {
            queen.x = queen.x + step;
            queen.y = queen.y + step;
            if (queen.x > 8 && queen.y > 8)
                console.log("OUT OF BOUNDARY");
            else
                console.log("QUEEN MOVED TO THE POSITION" + " " + board[queen.x][queen.y]);
            break;
        }
        case 'NE': {
            queen.x = queen.x - step;
            queen.y = queen.y + step;
            if (queen.x > 8 && y > 8)
                console.log("OUT OF BOUDARY");
            else
                console.log("QUEEN MOVED TO THE POSITION" + " " + board[queen.x][queen.y]);
            break;
        }
    }
}

var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];