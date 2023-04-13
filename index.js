let puzzle = [  [ 8,9,5,   7,4,2,   1,3,6 ],
                [ 2,7,1,   9,6,3,   4,8,5 ],
                [ 4,6,3,   5,8,1,   7,9,2 ],

                [ 9,3,4,   6,1,7,   2,5,8 ],
                [ 5,1,7,   2,3,8,   9,6,4 ],
                [ 6,8,2,   4,5,9,   3,7,1 ],

                [ 1,5,9,   8,7,4,   6,2,3 ],
                [ 7,4,6,   3,2,5,   8,1,9 ],
                [ 3,2,8,   1,9,6,   5,4,7 ]];








function getRow(puzzle,myRow){
    return puzzle[myRow];
}

function getColumn(puzzle, myCol) {
    let column = [];
    for (let i = 0; i < puzzle.length; i++) {
      let row = puzzle[i];
      column.push(row[myCol]);
    }
    return column;
}
    
function getSection(puzzle, x, y) {
    let section = [];
    for (let row = y * 3; row < y * 3 + 3; row++){
      section.push(...puzzle[row].slice(x * 3, x * 3 + 3));
    }
    return section;
}

function includes1to9(myArr) {
    const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return myNums.every(num => myArr.includes(num));
}

function sudokuIsValid(puzzle) {
    for (let i = 0; i < 9; i++){
      if (!includes1to9(getRow(puzzle, i)) || !includes1to9(getColumn(puzzle, i)) || !includes1to9(getSection(puzzle, i % 3, Math.floor(i / 3)))){
         return false;
      }
    }
    return true;
}

function isSame(puzzle1, puzzle2) {
    return JSON.stringify(puzzle1) === JSON.stringify(puzzle2);
}
  
commit test