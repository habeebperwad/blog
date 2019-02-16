---
layout: post
title: Week 3&colon; Computational Basics – Numerical computation and optimization, Introduction to Machine Learning packages
permalink: nptel--mlesa--w03
date: 2019-02-16 20:42:00.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
category: Education
tags: [nptel, sub-page]
---


* How machine store numbers
    * Machine only stores numbers to a finite precision 
    * The floating point format: &plusmn;S &times; b<sup>^e</sup>
    * For a 64-bit storage scheme IEEE standard: 1-bit sign, 11-bits signed exponent, 52-bits mantissa
    * Underflow and overflow


* **Conditional number**
    * The condition number of a function with respect to an argument measures how much the output value of the function can change for a small change in the input argument.
    * For symmetric matrices, condition number is the ratio of the largest to smallest eigenvalue.
    * cond(A)= &#124;&#124;A&#124;&#124; &#124;&#124;A<sup>-1</sup>&#124;&#124; &nbsp; &nbsp; A should be square non-singular matrix.


* **Derivative**
  * The derivative of a function of a real variable measures the sensitivity to change of the function value with respect to a change in its argument.
  * Partial derivative of a function of several variables is its derivative with respect to one of those variables, with the others held constant.


* **Gradient**
  * The gradient is a multi-variable generalization of the derivative. While a derivative can be defined on functions of a single variable, for functions of several variables, the gradient takes its place. The gradient is a vector-valued function, as opposed to a derivative, which is scalar-valued. 
  * The gradient of a function &#402;, denoted as &#8711;&#402;, is the collection of all its partial derivatives into a vector.


* **Hessian**
  * It is the gradient of the gradient.
  * It is a square matrix of second-order partial derivatives of a scalar-valued function.


* **Jacobian**
  * the Jacobian matrix is the matrix of all first-order partial derivatives of a vector-valued function.


* **Taylor Series**
  * A Taylor series is a representation of a function as an infinite sum of terms that are calculated from the values of the function's derivatives at a single point. 
  * A function can be approximated by using a finite number of terms of its Taylor series.


* **Optimization**
  * The general optimization task is to maximize or minimize a function f(x) by varying x.
  * The function f(x) is called objective function, cost function or loss function.
  * Any maximization problem can be written as minimization of -f(x).

* **Unconstrained problem**
  * Find x that minimizes f(x) with x &#8714; &#8477;
  * Any local extremum will have the property f &#8242;(x)=0
  * Such points are called stationary points or critical points
  * The stationary points may be a (local) minimum, maximum or saddle point.
  * If f &#8242;&#8242;(x)>0, it is a local minimum.
  * If f &#8242;&#8242;(x)<0,it is a local maximum.
  * If f &#8242;&#8242;(x)=0, it could be a saddle point.
  * The absolute lowest/highest level of f(x) is called the global maximum/minimum 

* **Optimization - Multivariate x**
  * Since x is now a vector quantity, we need to evaluate the gradient.
  * The type of critical point is decided by the nature of the Hessian.
  * If H is positive definite, it is a local minimum.
  * If H is negative definite, it is a local maximum.
  * If H is indefinite(neither p.d or n.d), then it is a saddle point.

* **Constrained optimization**
  * The general constrained optimization task is to maximize or minimize a function f(x) by varying x given certain constraints on x.
  * All constraints can be converted to two types of constraints:
     * Equality constraints
     * Inequality constraints
  * Canonical form of optimization problems.

* **Generalized Lagrange function**
  * It is a strategy for finding the local maxima and minima of a function subject to equality constraints.

* **Gradient Descent**
  * Gradient descent is a first-order iterative optimization algorithm for finding the minimum of a function. To find a local minimum of a function using gradient descent, one takes steps proportional to the negative of the gradient of the function at the current point. 
  * It is possible to gradient descent algorithm to:
    * Diverge
    * Oscillate witoutdiverging or converging
    * Converge slowly
    * Converge rapidly
  * When should iteration stop?

* **Gradient Descent Procedure**
  1. Decide on learning rate(&alpha;), stopping precision and stopping criteria.
  2. Make an initial guess for w = w<sup>0</sup>
  3. Calculate w<sup>k+1</sup> = w<sup>k</sup> - &alpha; &#8711;J
  4. If stopping criteria not satisfied, go to step 3
  5. Stop

* Packages/Tools
  * Python
  * Scikit-Learn
  * Tensorflow
  * Keras
  * PyTorch
  * Caffe
  * Google Colab
  * MATLAB

### Assignment Tips
----

* **Question 1**: The first question is smiliar to the example shown in the [video lecture](https://youtu.be/D4zMKh3krPc?t=628)
  The python code for the example problem is given below. Try to run in google [colab](https://colab.research.google.com/).

{% highlight python %}
-----------------------------------------------------------
import numpy as np

def J(w):
    return w[0]**2 + w[1]**2 + 4 

def gradientJ(w):
    return 2*w # same as [2*w[0], 2*w[1]]

w = np.array([3, 4])
alpha = 0.1

print("%-2s %-16s %-16s %-7s %-16s" 
      % ("k", "w", "gradient w", "J(w)", "new w"))
print("-----------------------------------------------------------")

for k in range(32):
    print("%02d %-16s %-16s %05.2f " 
          % (k, np.round(w,4), np.round(gradientJ(w),4), J(w)), end="")
    w = w - alpha * gradientJ(w)   
    print(" %-16s" % (np.round(w,4)))
-----------------------------------------------------------
{% endhighlight %}
Output:
{% highlight text %}
-----------------------------------------------------------
k  w                gradient w       J(w)    new w           
-----------------------------------------------------------
00 [3 4]            [6 8]            29.00  [2.4 3.2]       
01 [2.4 3.2]        [4.8 6.4]        20.00  [1.92 2.56]     
02 [1.92 2.56]      [3.84 5.12]      14.24  [1.536 2.048]   
03 [1.536 2.048]    [3.072 4.096]    10.55  [1.2288 1.6384] 
... 
29 [0.0046 0.0062]  [0.0093 0.0124]  04.00  [0.0037 0.005 ] 
30 [0.0037 0.005 ]  [0.0074 0.0099]  04.00  [0.003 0.004]   
-----------------------------------------------------------
{% endhighlight %}

* **Question 2 and 3**: It is always better to cross verify your answer. Use [minimum-function](https://www.dcode.fr/minimum-function) 
(Here f(x)=(x)^2+(y)^2-+4*x-6*y-7 with respect to x,y) to verify whether your gradient descent algorithm implementation is correct or not.


* **Question 7 to 10**:
  The objective function here is mean square error (divided by 2 for simplifying derivative). 
  There are two ways to cross verify your gradient descent implemenatation; using [normal equation](http://mlwiki.org/index.php/Normal_Equation) and [linear regression (scikit-learn)](https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html)   

{% highlight python %}
-----------------------------------------------------------
import numpy as np
from numpy import linalg as LA
x = np.array([
    [1, 0],
    [1, 0.25],
    [1, 0.5],
    [1, 0.75],
    [1, 1.00]
]) # adding 1 in every inputs in order to accomodate bias/intercept.

y = np.array([
    [0.88822],
    [1.2165],
    [1.3171],
    [1.7930],
    [1.9826]
])
# normal equation
wAccordingToNormalEquation = LA.inv(x.T.dot(x)).dot(x.T).dot(y)

print("W according to normal equation: %s " % wAccordingToNormalEquation)

from sklearn.linear_model import LinearRegression
lr = LinearRegression()
lr.fit(x[:,1:],y) # Remove all 1's added for accomodating bias/intercept
wAccordingToLinearRegression = lr.intercept_,lr.coef_
print("W according to linear equation: %s %s" % wAccordingToLinearRegression)
-----------------------------------------------------------
{% endhighlight %}
Output:
{% highlight text %}
-----------------------------------------------------------
W according to normal equation: [[0.886432] [1.106104]] 
W according to linear equation: [0.886432] [[1.106104]]
-----------------------------------------------------------
{% endhighlight %}

### Reference list
----
* [Gradient Descent and Linear Regression](https://spin.atomicobject.com/2014/06/24/gradient-descent-linear-regression/)

* Video: [Gradient descent by 3Blue1Brown](https://youtu.be/IHZwWFHWa-w?t=321)  
 


    
