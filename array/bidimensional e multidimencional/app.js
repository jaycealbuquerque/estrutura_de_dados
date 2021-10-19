// bidimensional 
let averageTemp = []
averageTemp[0] = [72, 75, 79, 79, 81, 81]


averageTemp[1] = []
averageTemp[1][0] = 81
averageTemp[1][1] = 79
averageTemp[1][2] = 75
averageTemp[1][3] = 75
averageTemp[1][4] = 73
averageTemp[1][5] = 73

console.table(averageTemp)

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j])
    }
  }
}

printMatrix(averageTemp)

// ---------------------------------------------------------------------

const matrix3x3x3 = []
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = []
    for (let z = 0; z < 3; z++)
      matrix3x3x3[i][j][z] = i + j + z

  }
}

console.log(matrix3x3x3)

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.log(matrix3x3x3[i][j][z])
    }
  }
}



