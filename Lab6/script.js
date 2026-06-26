(function() {
    let levels = [];
    let currentMatrix = [];
    let initialMatrix = [];
    let moves = 0;
    let isGameOver = false;

    const gridElement = document.getElementById("grid");
    const movesElement = document.getElementById("movesCount");
    const newGameBtn = document.getElementById("newGameBtn");
    const restartBtn = document.getElementById("restartBtn");

    function fetchLevels() {
        fetch("levels.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                levels = data;
                startNewGame();
            });
    }

    function cloneMatrix(matrix) {
        let clone = [];
        for (let i = 0; i < matrix.length; i++) {
            let row = [];
            for (let j = 0; j < matrix[i].length; j++) {
                row.push(matrix[i][j]);
            }
            clone.push(row);
        }
        return clone;
    }

    function startNewGame() {
        let randomIndex = Math.floor(Math.random() * levels.length);
        initialMatrix = cloneMatrix(levels[randomIndex]);
        currentMatrix = cloneMatrix(initialMatrix);
        moves = 0;
        isGameOver = false;
        updateUI();
    }

    function restartGame() {
        currentMatrix = cloneMatrix(initialMatrix);
        moves = 0;
        isGameOver = false;
        updateUI();
    }

    function toggleCell(row, col) {
        if (isGameOver) return;

        currentMatrix[row][col] = currentMatrix[row][col] === 1 ? 0 : 1;

        if (row > 0) {
            currentMatrix[row - 1][col] = currentMatrix[row - 1][col] === 1 ? 0 : 1;
        }
        if (row < 4) {
            currentMatrix[row + 1][col] = currentMatrix[row + 1][col] === 1 ? 0 : 1;
        }
        if (col > 0) {
            currentMatrix[row][col - 1] = currentMatrix[row][col - 1] === 1 ? 0 : 1;
        }
        if (col < 4) {
            currentMatrix[row][col + 1] = currentMatrix[row][col + 1] === 1 ? 0 : 1;
        }

        moves++;
        updateUI();
        checkWin();
    }

    function updateUI() {
        gridElement.innerHTML = "";
        movesElement.textContent = moves;

        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                let cell = document.createElement("div");
                cell.className = "cell " + (currentMatrix[row][col] === 1 ? "on" : "off");
                
                cell.addEventListener("click", function() {
                    toggleCell(row, col);
                });
                
                gridElement.appendChild(cell);
            }
        }
    }

    function checkWin() {
        let allOff = true;
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (currentMatrix[row][col] === 1) {
                    allOff = false;
                }
            }
        }

        if (allOff) {
            isGameOver = true;
            setTimeout(function() {
                alert("Game over! You solved it in " + moves + " moves.");
            }, 100);
        }
    }

    newGameBtn.addEventListener("click", startNewGame);
    restartBtn.addEventListener("click", restartGame);

    fetchLevels();
})();