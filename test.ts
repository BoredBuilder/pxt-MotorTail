// tests go here; this will not be compiled when this package is used as a library

//Control motor A forward and set speed
MotorTail.MotorRun(Motor.dc1, Dir.forward, 0)

//Stop motor
MotorTail.MotorStop(Motor.dc2)

//Turn the steering gear S0 to the starting position
MotorTail.ServosTurnZero(Servo.S0)

//Turn the steering gear S0 to the maximum position
MotorTail.ServosTurnFull(Servo.S0)

//Stop Servo
MotorTail.ServoStop(Servo.S0)

//Servo Turn Angle
MotorTail.ServoTurnAngle(Servo.S1, 180)
