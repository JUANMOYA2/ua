let NÚMERO = 0
input.onButtonPressed(Button.A, function () {
    NÚMERO = randint(0, 9)
    basic.showNumber(NÚMERO)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
