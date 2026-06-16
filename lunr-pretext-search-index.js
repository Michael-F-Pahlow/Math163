var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Michael Pahlow   Math Division  Green River College  Auburn, Washington   mpahlow@greenriver.edu        "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Sequences",
  "body": " Sequences   Mathematics is the study of patterns. Patterns can be patterns of shapes, like , a pattern of calculations, like or patterns of .  For Math 163, we will be looking at sequences of numbers and more specifically, what happens with the pattern of numbers in the long run. In other words, we will be taking limits of sequences at .    Sequences   In this section we will look at:     Turning a sequence (pattern) of numbers into a formula.    Explore a few famous sequences.    Take limits of sequences.      Turning a Sequence into a Formula  Many sequences can be defined by a formula using the variable where represent the natural numbers 1, 2, 3, 4,... you can even turn a function into a sequence by replacing the in a function formula with an . For example, is the sequence 1, 4, 9, 16,... We usually use instead of when we write out formulas for sequences.   Example: A Sequence of Fractions  Consider the sequence of fractions:   Notice that the numerator starts at one and the denominator starts at 2. If we use , then we can define . Formulas for sequences are not unique. also generates the terms    A common type of sequence is one that alternates signs from positive to negative. One way to achieve an alternating sign is to multiply by powers of -1, since odd powers of -1 are negative and even powers of -1 are positive.   Example: An Alternating Sequence  Consider the sequence of fractions:   There are three things to note in this sequence. First, the signs alternate, starting with a negative number. Second, the numerator starts at 2 and increases by 1 for each successive term. And third, the denominator contains powers of 3, starting with   Putting these together we can write down the formula for    We saw in the previous example, that a common pattern is powers of a number which creates an exponential factor in our sequence formula. Here is another example with exponential factors.   Example: An Sequence with Exponentials  Consider the sequence   Here again, we have an alternating sign. The numerator consists of powers of 2 and the denominator consists of powers of 3. This sequence starts at 1, which we get from an exponent of zero. Putting the pieces together, we get for    Another operation that is common in sequences and in the infinite series that we will see in the coming sections is the factorial. Factorial is the product of integers starting at 1. (Multiplying by 0 would always give zero, so this is not a very interesting place to start.) The notation for the factorial is !. As an example, . Once you have some practice using factorials, you will start to recognize the pattern.                       and so on      Example: An Sequence with Factorials  Consider the sequence   The numerator is powers of 5 and the denominator is the factorial pattern. A formula for the sequence is    Another common type of pattern is a pattern or either even or odd numbers.   Example: Evan and Odd Numbers  Consider the sequence:   The numerator is made up of consecutive odd numbers and the denominator is made up of consecutive even numbers. We can create a sequence of even numbers by simply doubling the natural numbers. If then . If we then add or subtract 1 to each term in this sequence will give the odd numbers. and . In this example, we want to start at 1 in the numerator. So .     Three Famous Sequences   Arithmetic Sequences  An arithmetic sequence is the sequence version of a linear function. It is characterized by a starting point and a common difference (slope). The common difference is what you always get when you subtractive two successive terms in an arithmetic sequence.  Consider the sequence: 6, 10, 14, 18, ...  The sequence starts at 6 and increases by 4 for each successive term. Note , etc. is the common difference.  A formula for this sequence is if we use     Geometric Sequences  A geometric sequence is the sequence version of an exponential function. It is characterized by a starting point and a common ratio. The common ratio is the constant number you always get when you divide two successive terms.  Consider the sequence:   The sequence starts at 5 and we get each new term by multiplying by , which is the common ratio. A formula for this sequence is for .  Note that if the common ratio is less than one, then the sequence is shrinking toward zero and that if the common ratio were greater than 1, then the sequence is always growing. If the common ratio were 1, then the sequence would be stuck at the starting point.    The Fibonacci Sequence  The Fibonacci sequence is named after Leonardo of Pisa, also known as Fibonacci, and was introduced in his book Liber Abaci in 1202 to model an increasing rabbit population. It is constructed by adding the two previous terms of the series to get the next term of the series. So if the first two terms of the series are and , the next term in the series would be . A few more terms would be 12, 19, 31,... Since successive terms in the series depend on previous terms, this type of sequence is called a recursive sequence.    Here is a video with a few more examples of these sequences (18 minutes).     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on sequences.     Limits of Sequences  An important thing we want to know about infinite sequences is what happens to the sequence as the terms approach infinity.  If where is a real number, then the sequence is called convergent.  If the limit does not exist or approaches infinity, then the sequence is called divergent.  This is similar to convergent or divergent improper integrals that you encountered in Calculus II (Math 152).  For the most part you can calculate these limits at infinity, using the tools you learned in Calculus I for the limits of functions, things like the limit laws, the squeeze theorem, l'Hospital's rule and known long-run behavior of specific functions.   Long-run Behavior of Arctan     This sequence converges since the long-run behavior of the arctan function tends towards     l'Hopital's Rule     This sequence converges since the long-run behavior of a rational function tends towards the ratio of its leading coefficients. Two applications of l'Hopital's rule will produce the same result.    Squeeze Theorem     The limit of this sequence can be found using the squeeze theorem. Since , we can trap the sequence and since tends towards zero, the sequence is also squeezed down to zero.    Limit Laws     Using the limit law that says we can pull the limit inside the square root, we can evaluate the limit inside the square root to get 1\/9 and then take the square root of 1\/9 to get 1\/3.    An Unbounded Sequence     Since the sequence grows without bound, this sequence diverges.   A way of determining if a sequence converges that is unique to sequences is called the bounded-monotonic sequence property. If a sequence is bounded, where all of the terms are trapped between two numbers (similar to the squeeze theorem) and if the sequence is monotonic, meaning that it is always increasing or always decreasing, then that sequence must converge. Think about it for a minute to figure out why this is true.   A Bonunded, Monotonic Sequence  Consider the sequence .  The first few terms of the sequence are if we start the sequence at . The sequence is bounded above by and below by zero. Terms are always getting smaller, so the sequence is monotonically decreasing. Therefore, the sequence must converge. Taking the limit gives zero since the can be written as which is a geometric series with a common ratio less than one.    A Bounded Sequence that Diverges  Consider the sequence   The sequence is clearly bounded by -1 and 1. However, there is no way to find the limit at infinity since the sequence continues to oscillate between -1 and 1 without ever \"settling down\" a single value.    A Non-Montonic Sequence that Converges  Consider the sequence:   Since the sequence oscillates between positive and negative values, the sequence also oscillates between increasing and decreasing, so the sequence is not monotonic. The function is also bounded between some positive and negative values. (-100 and 100 will work.) However, in the long-run, the denominator grows at a faster rate than the numerator and the sequence converges to zero.   Here are a few more videos with further examples.   Some examples of converging or diverging sequences using limits (30 minutes)     Some examples of bounded, monotonic sequences (31 minutes).     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on limits of sequences.    "
},
{
  "id": "section-1-3",
  "level": "2",
  "url": "section-1.html#section-1-3",
  "type": "Objectives",
  "number": "1",
  "title": "Sequences",
  "body": " Sequences   In this section we will look at:     Turning a sequence (pattern) of numbers into a formula.    Explore a few famous sequences.    Take limits of sequences.    "
},
{
  "id": "section-1-4-3",
  "level": "2",
  "url": "section-1.html#section-1-4-3",
  "type": "Example",
  "number": "1.1",
  "title": "Example: A Sequence of Fractions.",
  "body": " Example: A Sequence of Fractions  Consider the sequence of fractions:   Notice that the numerator starts at one and the denominator starts at 2. If we use , then we can define . Formulas for sequences are not unique. also generates the terms   "
},
{
  "id": "section-1-4-5",
  "level": "2",
  "url": "section-1.html#section-1-4-5",
  "type": "Example",
  "number": "1.2",
  "title": "Example: An Alternating Sequence.",
  "body": " Example: An Alternating Sequence  Consider the sequence of fractions:   There are three things to note in this sequence. First, the signs alternate, starting with a negative number. Second, the numerator starts at 2 and increases by 1 for each successive term. And third, the denominator contains powers of 3, starting with   Putting these together we can write down the formula for   "
},
{
  "id": "section-1-4-7",
  "level": "2",
  "url": "section-1.html#section-1-4-7",
  "type": "Example",
  "number": "1.3",
  "title": "Example: An Sequence with Exponentials.",
  "body": " Example: An Sequence with Exponentials  Consider the sequence   Here again, we have an alternating sign. The numerator consists of powers of 2 and the denominator consists of powers of 3. This sequence starts at 1, which we get from an exponent of zero. Putting the pieces together, we get for   "
},
{
  "id": "section-1-4-10",
  "level": "2",
  "url": "section-1.html#section-1-4-10",
  "type": "Example",
  "number": "1.4",
  "title": "Example: An Sequence with Factorials.",
  "body": " Example: An Sequence with Factorials  Consider the sequence   The numerator is powers of 5 and the denominator is the factorial pattern. A formula for the sequence is   "
},
{
  "id": "section-1-4-12",
  "level": "2",
  "url": "section-1.html#section-1-4-12",
  "type": "Example",
  "number": "1.5",
  "title": "Example: Evan and Odd Numbers.",
  "body": " Example: Evan and Odd Numbers  Consider the sequence:   The numerator is made up of consecutive odd numbers and the denominator is made up of consecutive even numbers. We can create a sequence of even numbers by simply doubling the natural numbers. If then . If we then add or subtract 1 to each term in this sequence will give the odd numbers. and . In this example, we want to start at 1 in the numerator. So .  "
},
{
  "id": "section-1-5-2",
  "level": "2",
  "url": "section-1.html#section-1-5-2",
  "type": "Example",
  "number": "1.6",
  "title": "Arithmetic Sequences.",
  "body": " Arithmetic Sequences  An arithmetic sequence is the sequence version of a linear function. It is characterized by a starting point and a common difference (slope). The common difference is what you always get when you subtractive two successive terms in an arithmetic sequence.  Consider the sequence: 6, 10, 14, 18, ...  The sequence starts at 6 and increases by 4 for each successive term. Note , etc. is the common difference.  A formula for this sequence is if we use   "
},
{
  "id": "section-1-5-3",
  "level": "2",
  "url": "section-1.html#section-1-5-3",
  "type": "Example",
  "number": "1.7",
  "title": "Geometric Sequences.",
  "body": " Geometric Sequences  A geometric sequence is the sequence version of an exponential function. It is characterized by a starting point and a common ratio. The common ratio is the constant number you always get when you divide two successive terms.  Consider the sequence:   The sequence starts at 5 and we get each new term by multiplying by , which is the common ratio. A formula for this sequence is for .  Note that if the common ratio is less than one, then the sequence is shrinking toward zero and that if the common ratio were greater than 1, then the sequence is always growing. If the common ratio were 1, then the sequence would be stuck at the starting point.  "
},
{
  "id": "section-1-5-4",
  "level": "2",
  "url": "section-1.html#section-1-5-4",
  "type": "Example",
  "number": "1.8",
  "title": "The Fibonacci Sequence.",
  "body": " The Fibonacci Sequence  The Fibonacci sequence is named after Leonardo of Pisa, also known as Fibonacci, and was introduced in his book Liber Abaci in 1202 to model an increasing rabbit population. It is constructed by adding the two previous terms of the series to get the next term of the series. So if the first two terms of the series are and , the next term in the series would be . A few more terms would be 12, 19, 31,... Since successive terms in the series depend on previous terms, this type of sequence is called a recursive sequence.  "
},
{
  "id": "section-1-5-5",
  "level": "2",
  "url": "section-1.html#section-1-5-5",
  "type": "Figure",
  "number": "1.9",
  "title": "",
  "body": " Here is a video with a few more examples of these sequences (18 minutes).   "
},
{
  "id": "section-1-6-7",
  "level": "2",
  "url": "section-1.html#section-1-6-7",
  "type": "Example",
  "number": "1.10",
  "title": "Long-run Behavior of Arctan.",
  "body": " Long-run Behavior of Arctan     This sequence converges since the long-run behavior of the arctan function tends towards   "
},
{
  "id": "section-1-6-8",
  "level": "2",
  "url": "section-1.html#section-1-6-8",
  "type": "Example",
  "number": "1.11",
  "title": "l’Hopital’s Rule.",
  "body": " l'Hopital's Rule     This sequence converges since the long-run behavior of a rational function tends towards the ratio of its leading coefficients. Two applications of l'Hopital's rule will produce the same result.  "
},
{
  "id": "section-1-6-9",
  "level": "2",
  "url": "section-1.html#section-1-6-9",
  "type": "Example",
  "number": "1.12",
  "title": "Squeeze Theorem.",
  "body": " Squeeze Theorem     The limit of this sequence can be found using the squeeze theorem. Since , we can trap the sequence and since tends towards zero, the sequence is also squeezed down to zero.  "
},
{
  "id": "section-1-6-10",
  "level": "2",
  "url": "section-1.html#section-1-6-10",
  "type": "Example",
  "number": "1.13",
  "title": "Limit Laws.",
  "body": " Limit Laws     Using the limit law that says we can pull the limit inside the square root, we can evaluate the limit inside the square root to get 1\/9 and then take the square root of 1\/9 to get 1\/3.  "
},
{
  "id": "section-1-6-11",
  "level": "2",
  "url": "section-1.html#section-1-6-11",
  "type": "Example",
  "number": "1.14",
  "title": "An Unbounded Sequence.",
  "body": " An Unbounded Sequence     Since the sequence grows without bound, this sequence diverges.  "
},
{
  "id": "section-1-6-13",
  "level": "2",
  "url": "section-1.html#section-1-6-13",
  "type": "Example",
  "number": "1.15",
  "title": "A Bonunded, Monotonic Sequence.",
  "body": " A Bonunded, Monotonic Sequence  Consider the sequence .  The first few terms of the sequence are if we start the sequence at . The sequence is bounded above by and below by zero. Terms are always getting smaller, so the sequence is monotonically decreasing. Therefore, the sequence must converge. Taking the limit gives zero since the can be written as which is a geometric series with a common ratio less than one.  "
},
{
  "id": "section-1-6-14",
  "level": "2",
  "url": "section-1.html#section-1-6-14",
  "type": "Example",
  "number": "1.16",
  "title": "A Bounded Sequence that Diverges.",
  "body": " A Bounded Sequence that Diverges  Consider the sequence   The sequence is clearly bounded by -1 and 1. However, there is no way to find the limit at infinity since the sequence continues to oscillate between -1 and 1 without ever \"settling down\" a single value.  "
},
{
  "id": "section-1-6-15",
  "level": "2",
  "url": "section-1.html#section-1-6-15",
  "type": "Example",
  "number": "1.17",
  "title": "A Non-Montonic Sequence that Converges.",
  "body": " A Non-Montonic Sequence that Converges  Consider the sequence:   Since the sequence oscillates between positive and negative values, the sequence also oscillates between increasing and decreasing, so the sequence is not monotonic. The function is also bounded between some positive and negative values. (-100 and 100 will work.) However, in the long-run, the denominator grows at a faster rate than the numerator and the sequence converges to zero.  "
},
{
  "id": "section-1-6-17",
  "level": "2",
  "url": "section-1.html#section-1-6-17",
  "type": "Figure",
  "number": "1.18",
  "title": "",
  "body": " Some examples of converging or diverging sequences using limits (30 minutes)   "
},
{
  "id": "section-1-6-18",
  "level": "2",
  "url": "section-1.html#section-1-6-18",
  "type": "Figure",
  "number": "1.19",
  "title": "",
  "body": " Some examples of bounded, monotonic sequences (31 minutes).   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "Infinite Series",
  "body": " Infinite Series   In the last section, we looked at infinite sequences, which are patterns of numbers. Now, we turn our attention to infinite series, which is the sum of an infinite sequence. You encountered summations in integral calculus (Math 152), where we take a finite sum and take a limit to turn it into an integral. Here we will take a brief tour of infinite series before we look at two special kinds of series - powers series and Taylor series in the next few sections. We are most interested whether a series converges (adds up to a number) or diverges (adds up to infinity).   Summation Notation   Recall that sums may be written like: or for an infinite sum     Infinite Series   In this section we will look at:     Look at a few famous series.    Determine whether a series converges or diverges using integrals    Look at three other ways to tell if a series converges or diverges      The Geometric and Harmonic Series   Summation Notation   We can write out an infinite series using this compact notation: The sum symbol is the capital Greek letter Sigma which makes the \"s\"-sound for sum. Below the is always the variable for the sum and the starting number. Above the is the ending number or infinity. The after the is a formula like we saw in the last section for a sequence.   A Geometric Series  Consider the series: If we start adding terms, we notice a pattern in the finite (partial) sums:     Taking the limit of this partial sum gives:    Similar to a geometric sequence, a geometric series will converge or diverge depending on the ratio inside the exponent. If the ratio is less than 1, then and if the ration is greater than or equal to one, then the series diverges. Another series that diverges is the harmonic series.   The Harmonic Series  Consider the series:   If we start grouping terms for this series like this: where the sum inside each set of \"( )\" adds up to something greater than 1\/2. So the terms in the harmonic series add up to something greater than  which very slowly adds up to infinity. So the harmonic series must also diverge.     The Integral Test  We already know how to add up something with an infinite amount of terms - the integral. Recall that the limit definition of an integral is: We also have seen that an integral can converge or diverge in the context of improper integrals. So it makes sense that we use our previous knowledge about integrals to determine if an infinite series converge or diverge.   The Integral Test   If is a continuous, positive, decreasing function on ) and , Then:      Here are some examples of the Integral test in action.   Does the series converge or diverge?  Note that function is positive, continuous and decreasing for . The related integral is Here we used a substitution to find the antiderivative. Since the integral diverges, the related series also diverges    Does the series converge or diverge?  Note that function is positive, continuous and decreasing for . The related integral is Which is a number, so the integral converges and the related series converges also. We did not find the value that the series converges to, but we do know that it does converge.   You may have noticed this in Math 152, when talking about improper integrals. For integrals of the form: the integral converges if since by the power rule, stays in the denominator and the limit at infinity tends toward zero. And if then the integral diverges, since the moves to the numerator and the limit at infinity tends toward infinity. These type of series will be the most common type we encounter in future sections. The related series is called a p-series and converges when and diverges when .   Some more examples of the Integral Test (9 minutes).      Three More Tests for Convergence\/Divergence  While there about ten more tests for the convergence or divergence of infinite series. We will look at just three that will also be vital in future sections.   The Divergence Test   For a series with terms , If: This can be used when in the related integral would not be quick and easy to calculate but it is clear that limit at infinity of the terms would tend toward zero.   The Limit Comparison Test   If and are positive sequences. Assume that the following limit exists:      If , then converges if and only is converges.    If and converges, then converges.    If and converges, then converges.     This test can be used when you have a series that is almost a p-series for which we already know when it converges or diverges.   Consider the series:   This series is similar to the series . To use the integral test, we would have to perform a partial fraction decomposition of , which would take some time. However, if we use the limit comparison test with and  and since we know that the p-series converges, we know our series also converges.   Consider the series: This series is similar to the series which we know is a convergent p-series. If we use the limit comparison test with as our p-series and as the series we are considering, then and since we know that the p-series converges, we know our series also converges.   Some more examples of the Integral Test (27 minutes).     The Alternating Series Test   This is also known as the Leibniz test. If is a positive sequence and , then the related series    Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on series.    "
},
{
  "id": "section-2-3",
  "level": "2",
  "url": "section-2.html#section-2-3",
  "type": "Objectives",
  "number": "2",
  "title": "Infinite Series",
  "body": " Infinite Series   In this section we will look at:     Look at a few famous series.    Determine whether a series converges or diverges using integrals    Look at three other ways to tell if a series converges or diverges    "
},
{
  "id": "section-2-4-4",
  "level": "2",
  "url": "section-2.html#section-2-4-4",
  "type": "Example",
  "number": "2.1",
  "title": "A Geometric Series.",
  "body": " A Geometric Series  Consider the series: If we start adding terms, we notice a pattern in the finite (partial) sums:     Taking the limit of this partial sum gives:   "
},
{
  "id": "section-2-4-6",
  "level": "2",
  "url": "section-2.html#section-2-4-6",
  "type": "Example",
  "number": "2.2",
  "title": "The Harmonic Series.",
  "body": " The Harmonic Series  Consider the series:   If we start grouping terms for this series like this: where the sum inside each set of \"( )\" adds up to something greater than 1\/2. So the terms in the harmonic series add up to something greater than  which very slowly adds up to infinity. So the harmonic series must also diverge.  "
},
{
  "id": "section-2-5-3",
  "level": "2",
  "url": "section-2.html#section-2-5-3",
  "type": "Definition",
  "number": "2.3",
  "title": "The Integral Test.",
  "body": " The Integral Test   If is a continuous, positive, decreasing function on ) and , Then:     "
},
{
  "id": "section-2-5-5",
  "level": "2",
  "url": "section-2.html#section-2-5-5",
  "type": "Example",
  "number": "2.4",
  "title": "",
  "body": " Does the series converge or diverge?  Note that function is positive, continuous and decreasing for . The related integral is Here we used a substitution to find the antiderivative. Since the integral diverges, the related series also diverges  "
},
{
  "id": "section-2-5-6",
  "level": "2",
  "url": "section-2.html#section-2-5-6",
  "type": "Example",
  "number": "2.5",
  "title": "",
  "body": " Does the series converge or diverge?  Note that function is positive, continuous and decreasing for . The related integral is Which is a number, so the integral converges and the related series converges also. We did not find the value that the series converges to, but we do know that it does converge.  "
},
{
  "id": "section-2-5-8",
  "level": "2",
  "url": "section-2.html#section-2-5-8",
  "type": "Figure",
  "number": "2.6",
  "title": "",
  "body": " Some more examples of the Integral Test (9 minutes).   "
},
{
  "id": "section-2-6-9",
  "level": "2",
  "url": "section-2.html#section-2-6-9",
  "type": "Example",
  "number": "2.7",
  "title": "",
  "body": " Consider the series:   This series is similar to the series . To use the integral test, we would have to perform a partial fraction decomposition of , which would take some time. However, if we use the limit comparison test with and  and since we know that the p-series converges, we know our series also converges.  "
},
{
  "id": "section-2-6-11",
  "level": "2",
  "url": "section-2.html#section-2-6-11",
  "type": "Figure",
  "number": "2.8",
  "title": "",
  "body": " Some more examples of the Integral Test (27 minutes).   "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "3",
  "title": "Power Series",
  "body": " Power Series   A power series is an infinite polynomial that all of the functions we know and love are equal to. Power series are a foundational part of the study of functions. I have a calculus textbook from the 1950's that covers power series first before it covers limits, derivatives and integrals. ( Calculus by Tomlinson Fort, D. C. Heath and Company, Boston, 1951). Power series are also how a calculator or computer actually calculates function values. When you type <sin(5)> into your calculator, it is not actually actually evaluating the sine function but instead using the related power series for sine to make its calculation! For now, I will introduce a few power series for well-known functions and when they converge and diverge before we look at how we can build a power series from scratch in the next section.    Power Series   In this section we will look at:     Power series of some well-known functions.    Determine the radius of convergence of power series.      Some Well Known Power Series  We will now look at a few examples of some well-known power series and also a couple of examples of how we can use a known power series to find a new power series.   A Geometric Series  One power series we can define easily is a series base on a geometric series. We saw in the last section that If we let and then     Another Geometric Series  We can find other similar series by some factoring and substitution. We try to write a power series as a product of sequence of coefficients times powers of .    A Third Geometric Series       Power Series of  Since a power series is just an infinite polynomial, we can differentiate or integrate a known power series using the power rule to get a new power series. Since      A Power Series from Differentiation  Since:  Note that when differentiating, we change the starting point of our sum from zero to one, since the is a constant in the starting series and becomes zero when we take the derivative and the new series starts at the term.    Power Series of Sine, Cosine and  Three of the most used series are the series for and . We will see in the next section, how to build these series from scratch. for now we define. Note that the derivative of the sine series is the cosine series. Also note if you replace in the exponential series with where is the imaginary number then the sum of the cosine series plus the sine series equals the exponential series! (Euler's formula)    Euler's Formula on Numberphile (22 minutes).      Intervals of Convergence  A key thing we want to know for a power series is where it converges. This is analogous to finding the domain of a function. This is where we need to know a few convergence\/divergence tests from the previous section. When we find the values where a series converges, this interval is known as the interval of convergence. For example, the base geometric series is known to converge when which can also be written as an interval or a trilinear inequality    An Interval of Convergence that Includes Only One Endpoint  Consider the power series: We need to think about what happens when we plug in various values of . If , the resulting series is the harmonic series which is known to converge. If we get an alternating series which converges by the alternating series test. If The result is a geometric-like series which we can use the limit comparison test with a geometric series to show converges. Finally, if the or , then the resulting sequence inside the series would not tend to zero, so it would diverge by the divergence test. Putting this all together gives and interval of convergence of     An Interval of Convergence that Includes Both Endpoints  Consider the power series: Again we can try various values of . If , the resulting series is one where the sequence inside the series is and the series can be shown to converge by the integral test, since . If , the resulting series is an alternating series that converges by the alternating series test. Since the series converges at and , it makes sense that it also converges for values between these two points. Like in the previous example, if is not between 1 and 3, then the resulting series would diverge by the divergence test.    An Infinite Interval of Convergence  Consider the series: For any value of that we choose, we get something that looks like a geometric series over a factorial. If we use the limit comparison test with and , then the limit would always tend to zero because of the factorial in the denominator. So this power series converges for all values of .    An Interval of Convergence that Includes Only One Point  Consider the series: If we let then the resulting series would just be . For any other value of , the resulting series would diverge by the divergence test. So this series only converges for .    Professor Dave Explains Power Series (7 minutes).     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on power series.    "
},
{
  "id": "section-3-3",
  "level": "2",
  "url": "section-3.html#section-3-3",
  "type": "Objectives",
  "number": "3",
  "title": "Power Series",
  "body": " Power Series   In this section we will look at:     Power series of some well-known functions.    Determine the radius of convergence of power series.    "
},
{
  "id": "section-3-4-3",
  "level": "2",
  "url": "section-3.html#section-3-4-3",
  "type": "Example",
  "number": "3.1",
  "title": "A Geometric Series.",
  "body": " A Geometric Series  One power series we can define easily is a series base on a geometric series. We saw in the last section that If we let and then   "
},
{
  "id": "section-3-4-4",
  "level": "2",
  "url": "section-3.html#section-3-4-4",
  "type": "Example",
  "number": "3.2",
  "title": "Another Geometric Series.",
  "body": " Another Geometric Series  We can find other similar series by some factoring and substitution. We try to write a power series as a product of sequence of coefficients times powers of .  "
},
{
  "id": "section-3-4-5",
  "level": "2",
  "url": "section-3.html#section-3-4-5",
  "type": "Example",
  "number": "3.3",
  "title": "A Third Geometric Series.",
  "body": " A Third Geometric Series     "
},
{
  "id": "section-3-4-6",
  "level": "2",
  "url": "section-3.html#section-3-4-6",
  "type": "Example",
  "number": "3.4",
  "title": "Power Series of <span class=\"process-math\">\\(\\arctan(x)\\)<\/span>.",
  "body": " Power Series of  Since a power series is just an infinite polynomial, we can differentiate or integrate a known power series using the power rule to get a new power series. Since    "
},
{
  "id": "section-3-4-7",
  "level": "2",
  "url": "section-3.html#section-3-4-7",
  "type": "Example",
  "number": "3.5",
  "title": "A Power Series from Differentiation.",
  "body": " A Power Series from Differentiation  Since:  Note that when differentiating, we change the starting point of our sum from zero to one, since the is a constant in the starting series and becomes zero when we take the derivative and the new series starts at the term.  "
},
{
  "id": "section-3-4-8",
  "level": "2",
  "url": "section-3.html#section-3-4-8",
  "type": "Example",
  "number": "3.6",
  "title": "Power Series of Sine, Cosine and <span class=\"process-math\">\\(e^x\\)<\/span>.",
  "body": " Power Series of Sine, Cosine and  Three of the most used series are the series for and . We will see in the next section, how to build these series from scratch. for now we define. Note that the derivative of the sine series is the cosine series. Also note if you replace in the exponential series with where is the imaginary number then the sum of the cosine series plus the sine series equals the exponential series! (Euler's formula)  "
},
{
  "id": "section-3-4-9",
  "level": "2",
  "url": "section-3.html#section-3-4-9",
  "type": "Figure",
  "number": "3.7",
  "title": "",
  "body": " Euler's Formula on Numberphile (22 minutes).   "
},
{
  "id": "section-3-5-3",
  "level": "2",
  "url": "section-3.html#section-3-5-3",
  "type": "Example",
  "number": "3.8",
  "title": "An Interval of Convergence that Includes Only One Endpoint.",
  "body": " An Interval of Convergence that Includes Only One Endpoint  Consider the power series: We need to think about what happens when we plug in various values of . If , the resulting series is the harmonic series which is known to converge. If we get an alternating series which converges by the alternating series test. If The result is a geometric-like series which we can use the limit comparison test with a geometric series to show converges. Finally, if the or , then the resulting sequence inside the series would not tend to zero, so it would diverge by the divergence test. Putting this all together gives and interval of convergence of   "
},
{
  "id": "section-3-5-4",
  "level": "2",
  "url": "section-3.html#section-3-5-4",
  "type": "Example",
  "number": "3.9",
  "title": "An Interval of Convergence that Includes Both Endpoints.",
  "body": " An Interval of Convergence that Includes Both Endpoints  Consider the power series: Again we can try various values of . If , the resulting series is one where the sequence inside the series is and the series can be shown to converge by the integral test, since . If , the resulting series is an alternating series that converges by the alternating series test. Since the series converges at and , it makes sense that it also converges for values between these two points. Like in the previous example, if is not between 1 and 3, then the resulting series would diverge by the divergence test.  "
},
{
  "id": "section-3-5-5",
  "level": "2",
  "url": "section-3.html#section-3-5-5",
  "type": "Example",
  "number": "3.10",
  "title": "An Infinite Interval of Convergence.",
  "body": " An Infinite Interval of Convergence  Consider the series: For any value of that we choose, we get something that looks like a geometric series over a factorial. If we use the limit comparison test with and , then the limit would always tend to zero because of the factorial in the denominator. So this power series converges for all values of .  "
},
{
  "id": "section-3-5-6",
  "level": "2",
  "url": "section-3.html#section-3-5-6",
  "type": "Example",
  "number": "3.11",
  "title": "An Interval of Convergence that Includes Only One Point.",
  "body": " An Interval of Convergence that Includes Only One Point  Consider the series: If we let then the resulting series would just be . For any other value of , the resulting series would diverge by the divergence test. So this series only converges for .  "
},
{
  "id": "section-3-5-7",
  "level": "2",
  "url": "section-3.html#section-3-5-7",
  "type": "Figure",
  "number": "3.12",
  "title": "",
  "body": " Professor Dave Explains Power Series (7 minutes).   "
},
{
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Section",
  "number": "4",
  "title": "Taylor Series",
  "body": " Taylor Series   A Taylor series is a power series where the coefficients are determined using the derivatives of a function. This is how we can build a power series from scratch using our knowledge of calculus.    Taylor Series   In this section we will look at:     The idea of a Taylor series.    A few well-known Taylor series.    Building new Taylor series from known Taylor series.      The Idea of Taylor Series  We have already encountered the idea of a Taylor series all the way back in Calculus I (Math 151) when you learned about linear approximation. A linear approximation is a degree 1 Taylor polynomial. As you add terms to the Taylor polynomial you increase the degree of the approximation. Recall that a linear approximation for a function at has the form: The point is called the center of the approximation. We can build a quadratic approximation in a similar way where the quadratic term would be in the form and the constant would involve the second derivative. The constant is actually . The factorial comes from iterations of the power rule. Adding another term for a cubic approximation would add the term . And in general, a Taylor approximation of the degree has the form: Here is a Desmos demonstration for . You can use the n slider on the left to increase the terms in the Taylor approximation and watch as the curve changes to more closely follow the curve for . The c slider changes the center of the approximation, so that if you wanted to approximate for negative values of , it makes sense to move the center to the left. This is what your calculator does when you use the <e^x> button!   Taylor Polynomials for    Note that a Taylor series centered at zero is called a Maclaurin series but I will refer to all series built from derivatives like this a Taylor series.    A Few Well-Known Taylor Series  The Taylor series for centered at zero can be found by taking successive derivatives of and plugging in zero. But since every derivative of is and . This gives us values of 1 for etc. and just leaves the factorial terms in the denominator. So the Taylor polynomial for is and the Taylor Series is   The Taylor series for and can be built in a similar way. Since these trigonometric functions go through the derivative cycle: . And if we center the Taylor series at zero where and , then the coefficients are 1 or -1 for every second term in the series and zero for the other terms. For the 1 and -1 land on the odd terms and for the 1 and -1 land on the even terms so: Both of these series also converge for all values of .  We also already know the Taylor series for the function . This is based on the geometric series. This series converges for .   Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on Taylor Series.     Building New Taylor Series from Known Taylor Series.  Like many things in mathematics, we can use previous work to guide new work. So instead of building a Taylor series from scratch: taking derivatives, plugging in values, writing down some terms and finally writing a formula for the series. We can build some Taylor series from known Taylor series.   Substitution  By substituting for in the Taylor series based on the geometric series gives:     Differentiation  Since:   The power rule!    Antidifferentiation  Since and using our work from Example 4.2      Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on Taylor series.    "
},
{
  "id": "section-4-3",
  "level": "2",
  "url": "section-4.html#section-4-3",
  "type": "Objectives",
  "number": "4",
  "title": "Taylor Series",
  "body": " Taylor Series   In this section we will look at:     The idea of a Taylor series.    A few well-known Taylor series.    Building new Taylor series from known Taylor series.    "
},
{
  "id": "section-4-4-3",
  "level": "2",
  "url": "section-4.html#section-4-4-3",
  "type": "Figure",
  "number": "4.1",
  "title": "",
  "body": " Taylor Polynomials for   "
},
{
  "id": "section-4-6-3",
  "level": "2",
  "url": "section-4.html#section-4-6-3",
  "type": "Example",
  "number": "4.2",
  "title": "Substitution.",
  "body": " Substitution  By substituting for in the Taylor series based on the geometric series gives:   "
},
{
  "id": "section-4-6-4",
  "level": "2",
  "url": "section-4.html#section-4-6-4",
  "type": "Example",
  "number": "4.3",
  "title": "Differentiation.",
  "body": " Differentiation  Since:   The power rule!  "
},
{
  "id": "section-4-6-5",
  "level": "2",
  "url": "section-4.html#section-4-6-5",
  "type": "Example",
  "number": "4.4",
  "title": "Antidifferentiation.",
  "body": " Antidifferentiation  Since and using our work from Example 4.2    "
},
{
  "id": "section-5",
  "level": "1",
  "url": "section-5.html",
  "type": "Section",
  "number": "5",
  "title": "Working with Power Series",
  "body": " Working with Power Series   Power series, Taylor series and Taylor polynomials are all useful tools, since they can replace a function like with a polynomial function. In physics and engineering applications, a Taylor polynomial approximation is often sufficient to produce a useful solution.    Applications   In this section we will look at:     Various applications of Power series and Taylor polynomials      Applications   A Tricky Integral      Evaluating a Limit      A Pendulum Approximation      Calculating a Square Root      Einstein versus Newton      "
},
{
  "id": "section-5-3",
  "level": "2",
  "url": "section-5.html#section-5-3",
  "type": "Objectives",
  "number": "5",
  "title": "Applications",
  "body": " Applications   In this section we will look at:     Various applications of Power series and Taylor polynomials    "
},
{
  "id": "section-5-4-2",
  "level": "2",
  "url": "section-5.html#section-5-4-2",
  "type": "Example",
  "number": "5.1",
  "title": "A Tricky Integral.",
  "body": " A Tricky Integral    "
},
{
  "id": "section-5-4-3",
  "level": "2",
  "url": "section-5.html#section-5-4-3",
  "type": "Example",
  "number": "5.2",
  "title": "Evaluating a Limit.",
  "body": " Evaluating a Limit    "
},
{
  "id": "section-5-4-4",
  "level": "2",
  "url": "section-5.html#section-5-4-4",
  "type": "Example",
  "number": "5.3",
  "title": "A Pendulum Approximation.",
  "body": " A Pendulum Approximation    "
},
{
  "id": "section-5-4-5",
  "level": "2",
  "url": "section-5.html#section-5-4-5",
  "type": "Example",
  "number": "5.4",
  "title": "Calculating a Square Root.",
  "body": " Calculating a Square Root    "
},
{
  "id": "section-5-4-6",
  "level": "2",
  "url": "section-5.html#section-5-4-6",
  "type": "Example",
  "number": "5.5",
  "title": "Einstein versus Newton.",
  "body": " Einstein versus Newton    "
},
{
  "id": "section-6",
  "level": "1",
  "url": "section-6.html",
  "type": "Section",
  "number": "6",
  "title": "2D Vectors",
  "body": " 2D Vectors  Under Construction  "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Section",
  "number": "7",
  "title": "3D Vectors",
  "body": " 3D Vectors  Under Construction  "
},
{
  "id": "section-8",
  "level": "1",
  "url": "section-8.html",
  "type": "Section",
  "number": "8",
  "title": "Vector Calculations",
  "body": " Vector Calculations  Under Construction  "
},
{
  "id": "section-9",
  "level": "1",
  "url": "section-9.html",
  "type": "Section",
  "number": "9",
  "title": "Applications of Vectors",
  "body": " Applications of Vectors  Under Construction  "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Section",
  "number": "10",
  "title": "Parametric Equations",
  "body": " Parametric Equations  Under Construction  "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Section",
  "number": "11",
  "title": "Vector-Valued Functions",
  "body": " Vector-Valued Functions  Under Construction  "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Section",
  "number": "12",
  "title": "Calculus of Vector-Valued Functions",
  "body": " Calculus of Vector-Valued Functions  Under Construction  "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Section",
  "number": "13",
  "title": "Applications of Vector-Valued Functions",
  "body": " Applications of Vector-Valued Functions  Under Construction  "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Section",
  "number": "14",
  "title": "Multi-Variable Functions",
  "body": " Multi-Variable Functions  Under Construction  "
},
{
  "id": "section-15",
  "level": "1",
  "url": "section-15.html",
  "type": "Section",
  "number": "15",
  "title": "Limits and Partial Derivatives",
  "body": " Limits and Partial Derivatives  Under Construction  "
},
{
  "id": "section-16",
  "level": "1",
  "url": "section-16.html",
  "type": "Section",
  "number": "16",
  "title": "Applications of Partial Derivatives",
  "body": " Applications of Partial Derivatives  Under Construction  "
},
{
  "id": "section-17",
  "level": "1",
  "url": "section-17.html",
  "type": "Section",
  "number": "17",
  "title": "Lagrange Multipliers",
  "body": " Lagrange Multipliers   The method of Lagrange multipliers is a way to solve an optimization problem for a multi-variable function subject to one or more constraint equations. The method is named after the French mathematician Joseph-Louis Lagrange who formulated the method in the 18th century. Lagrange also formulated the mean value theorem and succeeded Euler at the Berlin Academy at the invitation of Frederick the Great. His name is also one of the 72 great French men of science on the Eiffel tower. (The names of 72 great French women of science are currently being added.)    Lagrange Multipliers   In this section we will look at:     Look at an example of using Lagrange multipliers.    Learn a method for using a spreadsheet to solve an optimization problem.      A Lagrange Multipliers by Hand  The method of Lagrange multipliers adds an extra variable, the Lagrange multiplier and usually denoted with for each constraint equation, setting up a system of equations where we solve for the value of the variables and the Lagrange multiplier at the maximum or minimum for a given function. So if we have a function, that we want to optimize that is subject to a constraint equation , then the Lagrange multiplier is used in the equation . This generates three equations and four unknowns. Adding the constraint equation gives a fourth equation, so overall, we would have system with four equations and four unknowns to solve.   Find the extreme values of the function on the circle .   plus the constraint equation gives the three equations:   From the first equation we have or . If , then the last equation gives .  If , then the second equation gives . Plugging this in the last equation gives .  So we have four solution points: (0, 1), (0, -1), (1, 0) and (-1, 0). Evaluating at these four points gives maximum values for of 2 at (0, 1) and (0,-1) and minimum values of 1 at (1, 0) and (-1, 0).  This process of Lagrange multipliers is straightforward but can be laborious. Fortunately, there is a way for Excel to do the work for us!     Using Excel for Optimization with Constraints  Please watch the following videos that will show you some examples on how to use Excel to optimize using Lagrange multipliers. This method uses a Solver built into Excel. Frontline Systems, the company the makes the standard add-ons for Excel, used to provide there add-ons for Google sheets as well, but it appears that Google sheets no longer supports the Frontline Solver. Fortunately, Green River students can get a free! copy of Excel. Here are the on how you can download your free copy of Microsoft office.   Lagrange Multipliers Example 1 (11 minutes).     Lagrange Multipliers Example 2 (9 minutes).     Lagrange Multipliers Example 3 (6 minutes).      Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on Lagrange multipliers.   "
},
{
  "id": "section-17-3",
  "level": "2",
  "url": "section-17.html#section-17-3",
  "type": "Objectives",
  "number": "17",
  "title": "Lagrange Multipliers",
  "body": " Lagrange Multipliers   In this section we will look at:     Look at an example of using Lagrange multipliers.    Learn a method for using a spreadsheet to solve an optimization problem.    "
},
{
  "id": "section-17-4-3",
  "level": "2",
  "url": "section-17.html#section-17-4-3",
  "type": "Example",
  "number": "17.1",
  "title": "",
  "body": " Find the extreme values of the function on the circle .   plus the constraint equation gives the three equations:   From the first equation we have or . If , then the last equation gives .  If , then the second equation gives . Plugging this in the last equation gives .  So we have four solution points: (0, 1), (0, -1), (1, 0) and (-1, 0). Evaluating at these four points gives maximum values for of 2 at (0, 1) and (0,-1) and minimum values of 1 at (1, 0) and (-1, 0).  This process of Lagrange multipliers is straightforward but can be laborious. Fortunately, there is a way for Excel to do the work for us!  "
},
{
  "id": "section-17-5-3",
  "level": "2",
  "url": "section-17.html#section-17-5-3",
  "type": "Figure",
  "number": "17.2",
  "title": "",
  "body": " Lagrange Multipliers Example 1 (11 minutes).   "
},
{
  "id": "section-17-5-4",
  "level": "2",
  "url": "section-17.html#section-17-5-4",
  "type": "Figure",
  "number": "17.3",
  "title": "",
  "body": " Lagrange Multipliers Example 2 (9 minutes).   "
},
{
  "id": "section-17-5-5",
  "level": "2",
  "url": "section-17.html#section-17-5-5",
  "type": "Figure",
  "number": "17.4",
  "title": "",
  "body": " Lagrange Multipliers Example 3 (6 minutes).   "
},
{
  "id": "section-18",
  "level": "1",
  "url": "section-18.html",
  "type": "Section",
  "number": "18",
  "title": "Double Integrals",
  "body": " Double Integrals  Under Construction  "
},
{
  "id": "section-19",
  "level": "1",
  "url": "section-19.html",
  "type": "Section",
  "number": "19",
  "title": "Double Integrals in Polar Coordinates",
  "body": " Double Integrals in Polar Coordinates  Under Construction  "
},
{
  "id": "section-20",
  "level": "1",
  "url": "section-20.html",
  "type": "Section",
  "number": "20",
  "title": "Applications of Double Integrals",
  "body": " Applications of Double Integrals  Under Construction  "
},
{
  "id": "sec-calculators",
  "level": "1",
  "url": "sec-calculators.html",
  "type": "Section",
  "number": "21",
  "title": "Calculators",
  "body": " Calculators   These notes include a pop-up GeoGebra-3D calculator. If you click on the calculator icon on the top of each page, then a GeoGebra-3D calculator will pop-up in the lower right of the screen. You can find more about the free GeoGebra calculators at .  For a regular graphing calculator, you may use a TI-84 graphing calculator, the Desmos calculator or I recommend the Numworks calculator, which is available as a free iPhone or Android app! Or you can use the embedded emulator below.   The Numworks Calculator     "
},
{
  "id": "sec-calculators-2-3",
  "level": "2",
  "url": "sec-calculators.html#sec-calculators-2-3",
  "type": "Figure",
  "number": "21.1",
  "title": "",
  "body": " The Numworks Calculator   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
