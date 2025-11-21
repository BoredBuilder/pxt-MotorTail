# pxt-MotorTail

BoredBuilder

![BBLogo](images/logo.jpg)

# MotorTail Documentation
![Image of the MotorTail](images/CoverView.jpg)

## Introduction
This add-on board splits out the connctions on the microbit card to a breadboard interface and adds a dual H-Bridge function to control two DC motors or one bipolar stepper motor. Additionally, everything can be powered by a single 6-12V source. The source can even be connected backwards since the input powerside has RPP (reverse polarity protection). This feature is discussed on [(Desing Conciderations)](Design.md##Reverse Polarity Protection) for futher clarity.

![Image of the Adafruit DragonTail](images/DragonTail.png)
## Inspritation
The [DragonTail](https://www.adafruit.com/product/3695) (Purchace Link) aspect was taken from adafruit's purely GPIO implemtation. I thought this was a better way to make the gpio pins more accesable than the unique card interface that the microbit uses so I implemented it. Along with exposing the GPIO's though and easy to use bread board interface it also has a side connector for a bread board's power rails perfect for addional boards like Oleds, gyros, etc... That is just an example as the microbit already has an gyro but I digress.

![Image of the Popcicle Bot](images/PopcicleBot.png)
## Simple Usecase
Here is one of the simple robots that you can make. It uses popcikle sticks as the frame. In order to tie the front end together I 3d modeled a faceplate to hold it all together and added a sliding feature so it can glide across smooth surfaces. In hindsight this siding feature is a little too sharp and doesn't allow for movement accross carpet or other rough surfaces. A ball like many other robots use is far better. 

![Image of the input ports](images/Ports.jpg)
## Inputs
The MotorTail has both a DC barrel jack and a screw terminal for accecible power input. The 6-12V pins oposite to the input side should not be used for power input as they are on the already filtered side of the reverse polarity protection and power switch. These pins are only used to power accesories and it was just convient to put them close to the motor driver within the PCB design.
# MakeCode Commands

## Driving DC Motor

## Driving Stepper Motor

## Driving Servo Motors