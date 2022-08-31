input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 400)
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.AB, function () {
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    basic.showIcon(IconNames.Diamond)
})
