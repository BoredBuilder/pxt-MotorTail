enum Motor {
    //% block="DC1"
    dc1 = 0x1,
    //% block="DC2"
    dc2 = 0x2,
}

enum Stepper {
	//% block="Stepper"
    stepper = 0x1
}

enum Servo {
    //% block="S0"
    S0 = 0x1,
    //% block="S1"
    S1 = 0x2,
    //% block="S2"
    S2 = 0x3,
}

enum Dir {
    //% block="Forward"
    forward = 0x1,
    //% block="Backward"
    backward = 0x2,
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

//% weight 20% color=#87CEEB icon="\uf1e3"
namespace MotorTail {
    /**
     * Motor Run
     * @param speed [0-16] speed of Motor; eg: 10, 0, 16
     * @param direction 
    */
    //% blockId=MotorDriver_MotorRun block="Motor %m|index %index|speed %speed"
    //% weight=100
    //% speed.min=0 speed.max=16
    export function MotorRun(m: Motor, index: Dir, speed: number): void {
        speed = speed * 64 - 1; // map 0 to 1023
        
    }
}