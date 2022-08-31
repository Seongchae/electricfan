/**
 * <업로드 및 기능 문제 발생 시 해결방안>
 * 
 * 마이크로비트 확장쉴드에 전원연결 후 코드 재업로드
 */
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
