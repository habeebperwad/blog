---
layout: post
title: Week 2&colon; Mathematical Basics 2 –&nbsp;Probability
permalink: nptel--mlesa--w02
date: 2019-02-10 15:32:00.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
category: Education
tags: [nptel, sub-page]
---

* **Probability**: Mathematical framework for representing uncertainty.
  * Addition law of probability, or the sum rule. 
  * Chain rule, general product rule.

* Sources of uncertainty
  1. Inherent stochasticity in the system being modeled.
  2. Incomplete observability. Even deterministic systems can appear stochastic
when we cannot observe all the variables that drive the behavior of the
system.
  3. When we use a model that must discard some of
the information we have observed, the discarded information results in
uncertainty in the model’s predictions.

* **Frequentist probability**: It is an interpretation of probability; it defines an event's probability as the limit of its relative frequency in a large number of trials.

* **Bayesian probability**: It is an interpretation of the concept of probability, in which, instead of frequency of some phenomenon, probability is interpreted as reasonable expectation representing a state of knowledge or as quantification of a personal belief.

* Random Experiment.
* Sample Space.
* Discrete Random Variable
* Continuous Random Variable

* **Probability Distributions**: It is a mathematical function that provides the probabilities of occurrence of different possible outcomes in an experiment.

* **Probability Mass Function**(pmf): It is a function that gives the probability that a discrete random variable is exactly equal to some value.

* **Probability Density Function**(pdf): It is a function of a continuous random variable, whose integral across an interval gives the probability that the value of the variable lies within the same interval.

* **Bayes' Theorem**: posterior = likelihood×prior/marginal

* **Independent Random Variable**: Two random variables are independent if the realization of one does not affect the probability distribution of the other. 

* **Conditionally Independent**: Two random variables X and Y are conditionally independent given a third random variable Z if and only if they are independent in their conditional probability distribution given Z. P(X,Y&#124;Z) = P(X&#124;Z) * P(Y&#124;Z)

* **Expectation**: You can think of an expected value as a mean, or average, for a probability distribution.
  * Multivariate expectation
  * *Linearity of expectation* is the property that the expected value of the sum of random variables is equal to the sum of their individual expected values, regardless of whether they are independent.
  * The expectation of a constant, c, is the constant. E(c) = c
  * Adding a constant value, c, to each term increases the mean, or expected value, by the constant.
E(X+c) = E(X)+c
  * Multiplying a random variable by a constant value, c, multiplies the expected value or mean by that constant.
E(cX ) = cE(X)
  * The expected value or mean of the sum of two random variables is the sum of the means.   This is also known as the additive law of expectation. E(X+Y) = E(X)+E(Y)
  * E(aX+bY) = aE(X)+bE(Y)  a and b are constants.

* **Variance**: Variance is the expectation of the squared deviation of a random variable from its mean.
  * The variance of a constant is zero. var(c)=0
  * Adding a constant value, c, to a random variable does not change the variance, because the expectation (mean) increases by the same amount.
var(X+c) =var(X)
  * Multiplying a random variable by a constant increases the variance by the square of the constant.
var(cX) = c<sup>2</sup> * var(X)
  * The variance of the sum of two or more random variables is equal to the sum of each of their variances only when the random variables are independent. var(X+Y) = var(X) + var(Y) if X and Y are independent
  * var(X + Y) = var(X) + var(Y) + cov(X,Y) + cov(Y, X) 
  * var(X + Y) = var(X) + var(Y) + 2 * cov(X,Y) if X and Y are not vectors.  

* **Standard Deviation**: It is a measure that is used to quantify the amount of variation or dispersion of a set of data values. A low standard deviation indicates that the data points tend to be close to the mean (also called the expected value) of the set, while a high standard deviation indicates that the data points are spread out over a wider range of values.
The standard deviation of a random variable is the square root of its variance. A useful property of the standard deviation is that, unlike the variance, it is expressed in the same units as the data.

* **Covariance**: It is a measure of the joint variability of two random variables. If the greater values of one variable mainly correspond with the greater values of the other variable, and the same holds for the lesser values, (i.e., the variables tend to show similar behavior), the covariance is positive. In the opposite case, when the greater values of one variable mainly correspond to the lesser values of the other, (i.e., the variables tend to show opposite behavior), the covariance is negative. The sign of the covariance therefore shows the tendency in the linear relationship between the variables. The magnitude of the covariance is not easy to interpret because it is not normalized and hence depends on the magnitudes of the variables. The normalized version of the covariance, the **correlation coefficient**, however, shows by its magnitude the strength of the linear relation.

* **Covariance matrix**: It is a matrix whose element in the i, j position is the covariance between the i-th and j-th elements of a random vector. Because the covariance of the i-th random variable with itself is simply that random variable's variance, each element on the principal diagonal of the covariance matrix is the variance of one of the random variables. Because the covariance of the i-th random variable with the j-th one is the same thing as the covariance of the j-th random variable with the i-th random variable, every covariance matrix is symmetric. 

* How to find variance of a random variable using covariance formula?

* **Independence and Covariance**: Covariance measure whether two random variables have a linear relationship. Independence is about whether the variables have any relationship at all. 


### Reference list
---
* The lessons covered from both the books: deep learning book and PRML.
* [Video: jbstatistics](https://www.youtube.com/user/jbstatistics/playlists)



