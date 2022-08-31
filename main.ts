input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    pins.analogWritePin(AnalogPin.P1, 400)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    pins.analogWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Diamond)
    pins.analogWritePin(AnalogPin.P1, 1023)
})
