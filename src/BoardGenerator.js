export default class BoardGenerator {
    /**
     * Generates row indexes for the game board.
     *
     * @param {number} size
     * @return {Array}
     */
    generateSquaresRows(size) {
        let resultArray = [];
        let newArray = [];
        
        for (let i = 1; i <= size * size; i++) {
            newArray.push(i - 1);
            if (i % size === 0) {
                resultArray.push(newArray);
                newArray = [];
            }
        }

        return resultArray;
    }

    /**
     * Generates columns indexes for the game board.
     *
     * @param {number} size
     * @return {Array}
     */
    generateSquaresColumns(size) {
        let resultArray = [];
        let newArray = [];

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                newArray.push(j * size + i);
            }
            resultArray.push(newArray);
            newArray = [];
        }

        return resultArray;
    }

    /**
     * Generates diagonals indexes for the game board.
     *
     * @param {number} size
     * @return {Array}
     */
    generateSquaresDiagonals(size) {
        let mainDiagonal = [];
        let sideDiagonal = [];
        let squaresRows = this.generateSquaresRows(size);
        let squaresRowsLength = squaresRows.length;

        for (let i = 0; i < squaresRowsLength; i++) {
            mainDiagonal.push(squaresRows[i][i]);
            sideDiagonal.push(squaresRows[i][squaresRowsLength - i - 1]);
        }

        return [mainDiagonal, sideDiagonal];
    }

    /**
     * Generates winner lines indexes for the game board.
     *
     * @param {Number} size
     * @return {Array}
     */
    generateWinnerLines(size) {
        let resultArray = [];

        resultArray.push(this.generateSquaresRows(size));
        resultArray.push(this.generateSquaresColumns(size));
        resultArray.push(this.generateSquaresDiagonals(size));

        return resultArray.flat();
    }
}