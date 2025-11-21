enum Motor {
    //% block="DC1"
    dc1 = 0x1,
    //% block="DC2"
    dc2 = 0x2,
    //% block="Stepper
    stepper1 = 0x3
}

enum Servo {
    //% block="S0"
    S0 = 0x1,
    //% block="S1"
    S1 = 0x2,
    //% block="S2"
    S2 = 0x3,
}

let PWMA = AnalogPin.P16;
let AIN1 = DigitalPin.P14;
let AIN2 = DigitalPin.P15;
let PWMB = AnalogPin.P8;
let BIN1 = DigitalPin.P13;
let BIN2 = DigitalPin.P12;
let S0_PIN = AnalogPin.P0;
let S1_PIN = AnalogPin.P1;
let S2_PIN = AnalogPin.P2;
