## WebWork-Formatter
### Online tool to covert standard complex mathematical equations into a format which is acceptable by the online assignment system, WebWork 

WeBWorK is an online homework delivery system primarily used for mathematics and science. It allows students to complete their homework over the web, and receive instantaneous feedback as to the correctness of their responses. 

Entering an equation as a response to a question can be challenging, particularly when dealing with lengthy and intricate formulas. For the average user, the meticulous conversion of their answer into a complex format not only consumes unnecessary time but also increases the likelihood of inputting an incorrect response. This, in turn, compels the user to invest additional time in rechecking the format, despite the assessment focusing solely on mathematical proficiency.

### eg.

Equation that needs to be inputed: $\sqrt{3x-1}+(1+x)^2$

Acceptable WebWork version of the equation: sqrt(3x-1)+((1+x)**2)

### A more complex eg. 

Equation that needs to be inputed: $42x((3x^2+7)^6)((-7x^2+4)^{10}) - 140x((-7x^2+4)^9)(3x^2+7)^7$

Acceptable WebWork version of the equation: (42x(((((3x^2)+7)^6))))((-7(x^2)+4)^10)-140x((-7(x^2)+4)^9)((3(x^2)+7)^7)

![image](https://github.com/mste33/WebWork-Formatter/assets/93059695/5da128ab-cea2-4748-9ebe-a3e40d4d61e0)


## WebWork Format Key

+	Addition.
-	Subtraction.
*	Multiplication can also be indicated by a space or jutaposition, e.g. 2x, 2 x or 2*x, also 2(3+4).
/	Division.
^ or **	Exponentiation; e.g. 3^2 or 3**2.
(	Left parenthesis - used for grouping expressions.
)	Right parenthesis - used for grouping expressions.
pi	This gives π, e.g. cos(π) is -1.
e	This gives the constant e, or roughly 2.71828182845905, e.g. ln(e) is 1.
E	Scientific Notation. For example, 2.1E2 gives 210 and 2.1E-2 gives .021.
abs( )	The absolute value function.
sqrt( )	The square root function. Note: Sometimes WeBWorK does not allow sqrt( ). In those cases, try ( )^(1/2).
exp( )	The exponential function. exp(x) is the same as e^x
log( ) or ln( )	The natural logarithm function (base e).
logten( )	The logarithm function, base 10.
abs( )	The absolute value function.
fact( )	The factorial function (only non-negative integer input allowed).
cos( )	The cosine function (uses radians).
sin( )	The sine function (uses radians).
tan( )	The tangent function (uses radians).
sec( )	The secant function (uses radians).
csc( )	The cosecant function (uses radians).
cot( )	The cotangent function (uses radians).
arccos( ) or acos( )	The arc-cosine function.
arcsin( ) or asin( )	The arc-sine function.
arctan( ) or atan( )	The arc-tangent function.
