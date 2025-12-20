const poemRules = {
  'Four-way, Four-corner Red-character Reading': {
    description: "This method reads the perimeter of an 8x8 block of characters, starting from one of the four corners of the grid. Valid starting cells are (0,0), (0,28), (28,0), and (28,28).",
    isValidStart: (row, col) => {
        return (row === 0 && col === 0) || (row === 0 && col === 28) ||
               (row === 28 && col === 0) || (row === 28 && col === 28);
    },
    getPath: (row, col) => {
        if (row === 0 && col === 0) { // Top-Left
            return [
                { start: [0, 0], direction: 'right', length: 7 }, { start: [0, 7], direction: 'down', length: 7 },
                { start: [7, 7], direction: 'left', length: 7 }, { start: [7, 0], direction: 'up', length: 7 }
            ];
        }
        if (row === 0 && col === 28) { // Top-Right
            return [
                { start: [0, 28], direction: 'down', length: 7 }, { start: [7, 28], direction: 'left', length: 7 },
                { start: [7, 21], direction: 'up', length: 7 }, { start: [0, 21], direction: 'right', length: 7 }
            ];
        }
        if (row === 28 && col === 0) { // Bottom-Left
            return [
                { start: [28, 0], direction: 'up', length: 7 }, { start: [21, 0], direction: 'right', length: 7 },
                { start: [21, 7], direction: 'down', length: 7 }, { start: [28, 7], direction: 'left', length: 7 }
            ];
        }
        if (row === 28 && col === 28) { // Bottom-Right
            return [
                { start: [28, 28], direction: 'left', length: 7 }, { start: [28, 21], direction: 'up', length: 7 },
                { start: [21, 21], direction: 'right', length: 7 }, { start: [21, 28], direction: 'down', length: 7 }
            ];
        }
    }
  },
  'Central Well-style Red-character Reading': {
      description: "This method reads a 28-character poem from the central part of the grid, starting from the character '钦' at (7, 21).",
      isValidStart: (row, col) => row === 7 && col === 21,
      getPath: (row, col) => [
          { start: [7, 21], direction: 'up', length: 7 }, { start: [8, 21], direction: 'down', length: 7 },
          { start: [21, 21], direction: 'left', length: 7 }, { start: [21, 8], direction: 'right', length: 7 }
      ]
  },
  'Black-character Reading': {
      description: "This method generates a poem by reading from the black-colored characters. The only valid starting cell is '嗟' at (1, 27).",
      isValidStart: (row, col) => row === 1 && col === 27,
      getPath: (row, col) => [
          { start: [1, 27], direction: 'left', length: 6 }, { start: [2, 22], direction: 'down', length: 5 },
          { start: [6, 22], direction: 'right', length: 6 }, { start: [1, 22], direction: 'down', length: 5 }
      ]
  },
  'Blue-character Reading': {
      description: "This method generates a poem by reading from the blue-colored characters. Valid starting cells are at (1, 13) and (1, 16).",
      isValidStart: (row, col) => row === 1 && (col === 13 || col === 16),
      getPath: (row, col) => {
          if (col === 13) return [{ start: [1, 13], direction: 'right', length: 4 }];
          if (col === 16) return [{ start: [1, 16], direction: 'right', length: 4 }];
      }
  },
  'Purple-character Reading': {
      description: "This method generates a poem from the purple-colored characters, starting from the character '岁' at (8, 26).",
      isValidStart: (row, col) => row === 8 && col === 26,
      getPath: (row, col) => [
          { start: [8, 26], direction: 'left', length: 5 }, { start: [9, 22], direction: 'down', length: 4 },
          { start: [13, 22], direction: 'right', length: 5 }, { start: [8, 22], direction: 'down', length: 4 }
      ]
  },
  'Yellow-character Reading': {
      description: "This method generates a poem from the yellow-colored characters. Valid starting cells are in column 13, from row 11 to 13.",
      isValidStart: (row, col) => (row >= 11 && row <= 13) && col === 13,
      getPath: (row, col) => [{ start: [row, 13], direction: 'right', length: 3 }]
  },
  '7x7 Cross-line Reading': {
      description: "This method reads a 7-character poem horizontally from a valid starting character. For this implementation, valid starting cells are in the top 7 rows and first 22 columns.",
      isValidStart: (row, col) => {
          return row >= 0 && row < 7 && col >= 0 && col < 22;
      },
      getPath: (row, col) => {
          return [{ start: [row, col], direction: 'right', length: 7 }];
      }
  }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = poemRules;
}
