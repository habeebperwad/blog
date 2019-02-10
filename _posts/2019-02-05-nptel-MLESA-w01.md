---
layout: post
title: Week 1&colon; Mathematical Basics 1 –&nbsp;Introduction&nbsp;to&nbsp;Machine&nbsp;Learning,&nbsp;Linear&nbsp;Algebra
permalink: nptel--mlesa--w01
date: 2019-02-05 23:52:00.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
category: Education
tags: [for-indians, nptel, nptel-mlesa, sub-page]
---

## Overview of Machine Learning
----

* **What is machine learning?** 
* **When is  machine learning useful?**

* **Supervised learning**: It is the machine learning task of learning learning a function that maps an input to an output based on example input-output pairs. It infers a function from labeled training data consisting of a set of training examples. In supervised learning, each example is a pair consisting of an input object (typically a vector) and a desired output value. A supervised learning algorithm analyzes the training data and produces an inferred function, which can be used for mapping new examples. An optimal scenario will allow for the algorithm to correctly determine the class labels for unseen instances. This requires the learning algorithm to generalize from the training data to unseen situations in a "reasonable" way.  

* **Unsupervised learning**: Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses. The most common unsupervised learning method is cluster analysis, which is used for exploratory data analysis to find hidden patterns or grouping in data. 

* **Generative approach**: The idea behind the generate approach is to create a new data, that is somewhat like a given
set of data. For example, if you are shown hundred images of cats, any human being can try at
least and draw in new cat which will not look like the hundred images that you already saw but it
will look somewhat different; It will at least extract key portions of a cat. So such a learning approaches called a generative approach.

* **Semi-supervised learning**: Semi-supervised learning is a class of machine learning tasks and techniques that also make use of unlabeled data for training – typically a small amount of labeled data with a large amount of unlabeled data. Semi-supervised learning falls between unsupervised learning and supervised learning.

* **Self supervised learning**: Where you actually do not have any labelled data at all, but you can kind of figure out some implicit labels, from data using heuristics. An example of this what was called auto encoders.

* **Reinforcement learning**: Reinforcement learning (RL) is an area of machine learning concerned with how software agents ought to take actions in an environment so as to maximize some notion of cumulative reward.

* **Seven steps in machine learning**:
  1. gathering the data
  2. Preparing data
  3. Choosing a model/algorithm
  4. Training
  5. Evaluation
  6. Hyperparameter tuning
  7. Prediction

* **Classification and regression**: Classification is the task of predicting a discrete class label.
Regression is the task of predicting a continuous quantity.

<p>&nbsp;</p>

### Why Linear Algebra? Scalars, Vectors, Tensors
---
  * *Scalar*: single number.
  * *Vector*: in ML, array of numbers.
  * *Matrix*: in ML, 2-D array of numbers.
  * *Tensors*: in ML, array of numbers with dimensions greater than two. 

<p>&nbsp;</p>

### Basic Operations
---
Need some understanding of the following operations:
* Matrix addition
* Broadcasting, special type of matrix addition. 
* Matrix product
* Dot product
* Hadamard product, an element wise multiplication.
* Matrix transpose
* Matrix inverse

<p>&nbsp;</p>

### Norms
---
* **What is norm?**
* **What is 1-norm, 2-norm (euclidean norm), p-norm and max-norm?**

<p>&nbsp;</p>

### Linear Combinations, Span, Linear Independence
---
* **Span**: The span of a set of vectors is the list all of vectors obtainable
by a linear combination of the original vectors.

* **Linearly independent**: A set of vectors is linearly independent if none of these vectors can be written as a linear combination
of the other vectors.

<p>&nbsp;</p>

### Matrix Operations, Special Matrices, Matrix Decompositions 
---
* **Why matrix decomposition or matrix factorization?**
* **What is trace of a matrix?**
* **Determinant of a matrix**

* **Invertibility of a matrix**: A square matrix is invertible if and only of det(A) &ne; 0. This automatically means that the columns of A have to be linearly independent.

* **Special matrices and vectors**
  * *Diagonal* matrix : only diagonal entries are non-zero
  * *Symmetric* matrix : Matrix is equal to its transpose.
  * *Unit* vector: vector with unit "length". Euclidean norm is one.
  * *Orthogonal* vectors: mutually perpendicular
  * *Orthogonal* matrix: Transpose is equal to inverse.

* **What is eigenvalue decomposition?**
* **What singular value decomposition?**


<p>&nbsp;</p>

### Python Tips
---
* [Python Introduction and Linear Algebra, stanford.edu](https://web.stanford.edu/class/cs231a/section/section1.pdf)
* [Matrix or vector norm](https://docs.scipy.org/doc/numpy-1.16.1/reference/generated/numpy.linalg.norm.html?highlight=norm)
* [Matrix product](https://docs.scipy.org/doc/numpy-1.16.1/reference/generated/numpy.dot.html)
* [Matrix eigenvalues](https://docs.scipy.org/doc/numpy-1.16.1/reference/routines.linalg.html#matrix-eigenvalues)
* [Singular Value Decomposition](https://docs.scipy.org/doc/numpy-1.16.1/reference/generated/numpy.linalg.svd.html) 



<p>&nbsp;</p>

### Reference list
---
* Majority of the lessons in this week covered from [deep learning book]().
* [Video: Artificial Intelligence, the History and Future - with Chris Bishop](https://www.youtube.com/watch?v=8FHBh_OmdsM)
* [Book: Introduction to Linear Algebra by Gilbert Strang](http://math.mit.edu/~gs/linearalgebra/)
* [Course: MIT 18.06SC Linear Algebra, Fall 2011 by Gilbert Strang](https://www.youtube.com/watch?v=hNDFwVVKVk0&list=PL221E2BBF13BECF6C)
* [Videos: Essence of linear algebra by 3Blue1Brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) 
