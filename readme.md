# _____ _     _____         _____          
# |_   _(_) __|_   _|_ _  __|_   _|__   ___ 
#   | | | |/ __|| |/ _` |/ __|| |/ _ \ / _ \
#   | | | | (__ | | (_| | (__ | | (_) |  __/
#   |_| |_|\___||_|\__,_|\___||_|\___/ \___|

## by Nick Bartlett

### TicTacToe Game Rules:

### - Player designated to go first (p1) selects their desired piece (X, or O)
### - They select a square to place their piece
### - Player 2 (p2) selects a square to place their piece
### - This continues until a player has connected three of their pieces diagonally, vertically
###   or horizontally, or, until all squares are full, which results in a draw

### Additional features of this program:

### - tracks score (wins, losses, draws of either player) (to be implemented)

### How this program is designed: 

### - Game functions are defined in the TicTacToe object
### - board is represented by a 2d array, a magic square is then used to track if a player has
### won based on the property that any row, column, or diagonal sums to the same number