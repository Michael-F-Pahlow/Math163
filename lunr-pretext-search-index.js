var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "    Green River College Logo   Michael Pahlow   Math Division  Green River College  Auburn, Washington   mpahlow@greenriver.edu        "
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
  "id": "subsec-turning-a-sequence-into-a-formula-3",
  "level": "2",
  "url": "section-1.html#subsec-turning-a-sequence-into-a-formula-3",
  "type": "Example",
  "number": "1.1",
  "title": "Example: A Sequence of Fractions.",
  "body": " Example: A Sequence of Fractions  Consider the sequence of fractions:   Notice that the numerator starts at one and the denominator starts at 2. If we use , then we can define . Formulas for sequences are not unique. also generates the terms   "
},
{
  "id": "subsec-turning-a-sequence-into-a-formula-5",
  "level": "2",
  "url": "section-1.html#subsec-turning-a-sequence-into-a-formula-5",
  "type": "Example",
  "number": "1.2",
  "title": "Example: An Alternating Sequence.",
  "body": " Example: An Alternating Sequence  Consider the sequence of fractions:   There are three things to note in this sequence. First, the signs alternate, starting with a negative number. Second, the numerator starts at 2 and increases by 1 for each successive term. And third, the denominator contains powers of 3, starting with   Putting these together we can write down the formula for   "
},
{
  "id": "subsec-turning-a-sequence-into-a-formula-7",
  "level": "2",
  "url": "section-1.html#subsec-turning-a-sequence-into-a-formula-7",
  "type": "Example",
  "number": "1.3",
  "title": "Example: An Sequence with Exponentials.",
  "body": " Example: An Sequence with Exponentials  Consider the sequence   Here again, we have an alternating sign. The numerator consists of powers of 2 and the denominator consists of powers of 3. This sequence starts at 1, which we get from an exponent of zero. Putting the pieces together, we get for   "
},
{
  "id": "subsec-turning-a-sequence-into-a-formula-10",
  "level": "2",
  "url": "section-1.html#subsec-turning-a-sequence-into-a-formula-10",
  "type": "Example",
  "number": "1.4",
  "title": "Example: An Sequence with Factorials.",
  "body": " Example: An Sequence with Factorials  Consider the sequence   The numerator is powers of 5 and the denominator is the factorial pattern. A formula for the sequence is   "
},
{
  "id": "subsec-turning-a-sequence-into-a-formula-12",
  "level": "2",
  "url": "section-1.html#subsec-turning-a-sequence-into-a-formula-12",
  "type": "Example",
  "number": "1.5",
  "title": "Example: Evan and Odd Numbers.",
  "body": " Example: Evan and Odd Numbers  Consider the sequence:   The numerator is made up of consecutive odd numbers and the denominator is made up of consecutive even numbers. We can create a sequence of even numbers by simply doubling the natural numbers. If then . If we then add or subtract 1 to each term in this sequence will give the odd numbers. and . In this example, we want to start at 1 in the numerator. So .  "
},
{
  "id": "subsec-three-famous-sequences-2",
  "level": "2",
  "url": "section-1.html#subsec-three-famous-sequences-2",
  "type": "Example",
  "number": "1.6",
  "title": "Arithmetic Sequences.",
  "body": " Arithmetic Sequences  An arithmetic sequence is the sequence version of a linear function. It is characterized by a starting point and a common difference (slope). The common difference is what you always get when you subtractive two successive terms in an arithmetic sequence.  Consider the sequence: 6, 10, 14, 18, ...  The sequence starts at 6 and increases by 4 for each successive term. Note , etc. is the common difference.  A formula for this sequence is if we use   "
},
{
  "id": "subsec-three-famous-sequences-3",
  "level": "2",
  "url": "section-1.html#subsec-three-famous-sequences-3",
  "type": "Example",
  "number": "1.7",
  "title": "Geometric Sequences.",
  "body": " Geometric Sequences  A geometric sequence is the sequence version of an exponential function. It is characterized by a starting point and a common ratio. The common ratio is the constant number you always get when you divide two successive terms.  Consider the sequence:   The sequence starts at 5 and we get each new term by multiplying by , which is the common ratio. A formula for this sequence is for .  Note that if the common ratio is less than one, then the sequence is shrinking toward zero and that if the common ratio were greater than 1, then the sequence is always growing. If the common ratio were 1, then the sequence would be stuck at the starting point.  "
},
{
  "id": "subsec-three-famous-sequences-4",
  "level": "2",
  "url": "section-1.html#subsec-three-famous-sequences-4",
  "type": "Example",
  "number": "1.8",
  "title": "The Fibonacci Sequence.",
  "body": " The Fibonacci Sequence  The Fibonacci sequence is named after Leonardo of Pisa, also known as Fibonacci, and was introduced in his book Liber Abaci in 1202 to model an increasing rabbit population. It is constructed by adding the two previous terms of the series to get the next term of the series. So if the first two terms of the series are and , the next term in the series would be . A few more terms would be 12, 19, 31,... Since successive terms in the series depend on previous terms, this type of sequence is called a recursive sequence.  "
},
{
  "id": "subsec-three-famous-sequences-5",
  "level": "2",
  "url": "section-1.html#subsec-three-famous-sequences-5",
  "type": "Figure",
  "number": "1.9",
  "title": "",
  "body": " Here is a video with a few more examples of these sequences (18 minutes).   "
},
{
  "id": "subsec-limits-of-sequences-7",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-7",
  "type": "Example",
  "number": "1.10",
  "title": "Long-run Behavior of Arctan.",
  "body": " Long-run Behavior of Arctan     This sequence converges since the long-run behavior of the arctan function tends towards   "
},
{
  "id": "subsec-limits-of-sequences-8",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-8",
  "type": "Example",
  "number": "1.11",
  "title": "l’Hopital’s Rule.",
  "body": " l'Hopital's Rule     This sequence converges since the long-run behavior of a rational function tends towards the ratio of its leading coefficients. Two applications of l'Hopital's rule will produce the same result.  "
},
{
  "id": "subsec-limits-of-sequences-9",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-9",
  "type": "Example",
  "number": "1.12",
  "title": "Squeeze Theorem.",
  "body": " Squeeze Theorem     The limit of this sequence can be found using the squeeze theorem. Since , we can trap the sequence and since tends towards zero, the sequence is also squeezed down to zero.  "
},
{
  "id": "subsec-limits-of-sequences-10",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-10",
  "type": "Example",
  "number": "1.13",
  "title": "Limit Laws.",
  "body": " Limit Laws     Using the limit law that says we can pull the limit inside the square root, we can evaluate the limit inside the square root to get 1\/9 and then take the square root of 1\/9 to get 1\/3.  "
},
{
  "id": "subsec-limits-of-sequences-11",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-11",
  "type": "Example",
  "number": "1.14",
  "title": "An Unbounded Sequence.",
  "body": " An Unbounded Sequence     Since the sequence grows without bound, this sequence diverges.  "
},
{
  "id": "subsec-limits-of-sequences-13",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-13",
  "type": "Example",
  "number": "1.15",
  "title": "A Bonunded, Monotonic Sequence.",
  "body": " A Bonunded, Monotonic Sequence  Consider the sequence .  The first few terms of the sequence are if we start the sequence at . The sequence is bounded above by and below by zero. Terms are always getting smaller, so the sequence is monotonically decreasing. Therefore, the sequence must converge. Taking the limit gives zero since the can be written as which is a geometric series with a common ratio less than one.  "
},
{
  "id": "subsec-limits-of-sequences-14",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-14",
  "type": "Example",
  "number": "1.16",
  "title": "A Bounded Sequence that Diverges.",
  "body": " A Bounded Sequence that Diverges  Consider the sequence   The sequence is clearly bounded by -1 and 1. However, there is no way to find the limit at infinity since the sequence continues to oscillate between -1 and 1 without ever \"settling down\" a single value.  "
},
{
  "id": "subsec-limits-of-sequences-15",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-15",
  "type": "Example",
  "number": "1.17",
  "title": "A Non-Montonic Sequence that Converges.",
  "body": " A Non-Montonic Sequence that Converges  Consider the sequence:   Since the sequence oscillates between positive and negative values, the sequence also oscillates between increasing and decreasing, so the sequence is not monotonic. The function is also bounded between some positive and negative values. (-100 and 100 will work.) However, in the long-run, the denominator grows at a faster rate than the numerator and the sequence converges to zero.  "
},
{
  "id": "subsec-limits-of-sequences-17",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-17",
  "type": "Figure",
  "number": "1.18",
  "title": "",
  "body": " Some examples of converging or diverging sequences using limits (30 minutes)   "
},
{
  "id": "subsec-limits-of-sequences-18",
  "level": "2",
  "url": "section-1.html#subsec-limits-of-sequences-18",
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
  "id": "subsec-the-geometric-and-harmonic-series-4",
  "level": "2",
  "url": "section-2.html#subsec-the-geometric-and-harmonic-series-4",
  "type": "Example",
  "number": "2.1",
  "title": "A Geometric Series.",
  "body": " A Geometric Series  Consider the series: If we start adding terms, we notice a pattern in the finite (partial) sums:     Taking the limit of this partial sum gives:   "
},
{
  "id": "subsec-the-geometric-and-harmonic-series-6",
  "level": "2",
  "url": "section-2.html#subsec-the-geometric-and-harmonic-series-6",
  "type": "Example",
  "number": "2.2",
  "title": "The Harmonic Series.",
  "body": " The Harmonic Series  Consider the series:   If we start grouping terms for this series like this: where the sum inside each set of \"( )\" adds up to something greater than 1\/2. So the terms in the harmonic series add up to something greater than  which very slowly adds up to infinity. So the harmonic series must also diverge.  "
},
{
  "id": "subsec-the-integral-test-3",
  "level": "2",
  "url": "section-2.html#subsec-the-integral-test-3",
  "type": "Definition",
  "number": "2.3",
  "title": "The Integral Test.",
  "body": " The Integral Test   If is a continuous, positive, decreasing function on ) and , Then:     "
},
{
  "id": "subsec-the-integral-test-5",
  "level": "2",
  "url": "section-2.html#subsec-the-integral-test-5",
  "type": "Example",
  "number": "2.4",
  "title": "",
  "body": " Does the series converge or diverge?  Note that function is positive, continuous and decreasing for . The related integral is Here we used a substitution to find the antiderivative. Since the integral diverges, the related series also diverges  "
},
{
  "id": "subsec-the-integral-test-6",
  "level": "2",
  "url": "section-2.html#subsec-the-integral-test-6",
  "type": "Example",
  "number": "2.5",
  "title": "",
  "body": " Does the series converge or diverge?  Note that function is positive, continuous and decreasing for . The related integral is Which is a number, so the integral converges and the related series converges also. We did not find the value that the series converges to, but we do know that it does converge.  "
},
{
  "id": "subsec-the-integral-test-8",
  "level": "2",
  "url": "section-2.html#subsec-the-integral-test-8",
  "type": "Figure",
  "number": "2.6",
  "title": "",
  "body": " Some more examples of the Integral Test (9 minutes).   "
},
{
  "id": "subsec-three-convergence-tests-9",
  "level": "2",
  "url": "section-2.html#subsec-three-convergence-tests-9",
  "type": "Example",
  "number": "2.7",
  "title": "",
  "body": " Consider the series:   This series is similar to the series . To use the integral test, we would have to perform a partial fraction decomposition of , which would take some time. However, if we use the limit comparison test with and  and since we know that the p-series converges, we know our series also converges.  "
},
{
  "id": "subsec-three-convergence-tests-11",
  "level": "2",
  "url": "section-2.html#subsec-three-convergence-tests-11",
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
  "body": " Power Series   A power series is an infinite polynomial that all of the functions we know and love are equal to. Power series are a foundational part of the study of functions. I have a calculus textbook from the 1950's that covers power series first before it covers limits, derivatives and integrals. ( Calculus by Tomlinson Fort, D. C. Heath and Company, Boston, 1951). Power series are also how a calculator or computer actually calculates function values. When you type <sin(5)> into your calculator, it is not actually actually evaluating the sine function but instead using the related power series for sine to make its calculation! For now, I will introduce a few power series for well-known functions and when they converge and diverge before we look at how we can build a power series from scratch in the next section.    Power Series   In this section we will look at:     Power series of some well-known functions.    Determine the radius of convergence of power series.      Some Well Known Power Series  We will now look at a few examples of some well-known power series and also a couple of examples of how we can use a known power series to find a new power series.   A Geometric Series  One power series we can define easily is a series base on a geometric series. We saw in the last section that If we let and then     Another Geometric Series  We can find other similar series by some factoring and substitution. We try to write a power series as a product of sequence of coefficients times powers of .    A Third Geometric Series       Power Series of  Since a power series is just an infinite polynomial, we can differentiate or integrate a known power series using the power rule to get a new power series. Since      A Power Series from Differentiation  Since:  Note that when differentiating, we change the starting point of our sum from zero to one, since the is a constant in the starting series and becomes zero when we take the derivative and the new series starts at the term.    Power Series of Sine, Cosine and  Three of the most used series are the series for and . We will see in the next section, how to build these series from scratch. for now we define. Note that the derivative of the sine series is the cosine series. Also note if you replace in the exponential series with where is the imaginary number then the sum of the cosine series plus the sine series equals the exponential series! (Euler's formula)    Euler's Formula on Numberphile (22 minutes).      Intervals of Convergence  A key thing we want to know for a power series is where it converges. This is analogous to finding the domain of a function. This is where we need to know a few convergence\/divergence tests from the previous section. When we find the values where a series converges, this interval is known as the interval of convergence. For example, the base geometric series is known to converge when which can also be written as an interval or a trilinear inequality    An Interval of Convergence that Includes Only One Endpoint  Consider the power series: We need to think about what happens when we plug in various values of . If , the resulting series is the harmonic series which is known to converge. If we get an alternating series which converges by the alternating series test. If The result is a geometric-like series which we can use the limit comparison test with a geometric series to show converges. Finally, if the or , then the resulting sequence inside the series would not tend to zero, so it would diverge by the divergence test. Putting this all together gives and interval of convergence of     An Interval of Convergence that Includes Both Endpoints  Consider the power series: Again we can try various values of . If , the resulting series is one where the sequence inside the series is and the series can be shown to converge by the integral test, since . If , the resulting series is an alternating series that converges by the alternating series test. Since the series converges at and , it makes sense that it also converges for values between these two points. Like in the previous example, if is not between 1 and 3, then the resulting series would diverge by the divergence test.    An Infinite Interval of Convergence  Consider the series: For any value of that we choose, we get something that looks like a geometric series over a factorial. If we use the limit comparison test with and , then the limit would always tend to one. So this power series converges for all values of .    An Interval of Convergence that Includes Only One Point  Consider the series: If we let then the resulting series would just be . For any other value of , the resulting series would diverge by the divergence test. So this series only converges for .    Professor Dave Explains Power Series (7 minutes).     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on power series.    "
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
  "id": "subsec-some-well-known-power-series-3",
  "level": "2",
  "url": "section-3.html#subsec-some-well-known-power-series-3",
  "type": "Example",
  "number": "3.1",
  "title": "A Geometric Series.",
  "body": " A Geometric Series  One power series we can define easily is a series base on a geometric series. We saw in the last section that If we let and then   "
},
{
  "id": "subsec-some-well-known-power-series-4",
  "level": "2",
  "url": "section-3.html#subsec-some-well-known-power-series-4",
  "type": "Example",
  "number": "3.2",
  "title": "Another Geometric Series.",
  "body": " Another Geometric Series  We can find other similar series by some factoring and substitution. We try to write a power series as a product of sequence of coefficients times powers of .  "
},
{
  "id": "subsec-some-well-known-power-series-5",
  "level": "2",
  "url": "section-3.html#subsec-some-well-known-power-series-5",
  "type": "Example",
  "number": "3.3",
  "title": "A Third Geometric Series.",
  "body": " A Third Geometric Series     "
},
{
  "id": "subsec-some-well-known-power-series-6",
  "level": "2",
  "url": "section-3.html#subsec-some-well-known-power-series-6",
  "type": "Example",
  "number": "3.4",
  "title": "Power Series of <span class=\"process-math\">\\(\\arctan(x)\\)<\/span>.",
  "body": " Power Series of  Since a power series is just an infinite polynomial, we can differentiate or integrate a known power series using the power rule to get a new power series. Since    "
},
{
  "id": "subsec-some-well-known-power-series-7",
  "level": "2",
  "url": "section-3.html#subsec-some-well-known-power-series-7",
  "type": "Example",
  "number": "3.5",
  "title": "A Power Series from Differentiation.",
  "body": " A Power Series from Differentiation  Since:  Note that when differentiating, we change the starting point of our sum from zero to one, since the is a constant in the starting series and becomes zero when we take the derivative and the new series starts at the term.  "
},
{
  "id": "subsec-some-well-known-power-series-8",
  "level": "2",
  "url": "section-3.html#subsec-some-well-known-power-series-8",
  "type": "Example",
  "number": "3.6",
  "title": "Power Series of Sine, Cosine and <span class=\"process-math\">\\(e^x\\)<\/span>.",
  "body": " Power Series of Sine, Cosine and  Three of the most used series are the series for and . We will see in the next section, how to build these series from scratch. for now we define. Note that the derivative of the sine series is the cosine series. Also note if you replace in the exponential series with where is the imaginary number then the sum of the cosine series plus the sine series equals the exponential series! (Euler's formula)  "
},
{
  "id": "subsec-some-well-known-power-series-9",
  "level": "2",
  "url": "section-3.html#subsec-some-well-known-power-series-9",
  "type": "Figure",
  "number": "3.7",
  "title": "",
  "body": " Euler's Formula on Numberphile (22 minutes).   "
},
{
  "id": "subsec-intervals-of-convergence-3",
  "level": "2",
  "url": "section-3.html#subsec-intervals-of-convergence-3",
  "type": "Example",
  "number": "3.8",
  "title": "An Interval of Convergence that Includes Only One Endpoint.",
  "body": " An Interval of Convergence that Includes Only One Endpoint  Consider the power series: We need to think about what happens when we plug in various values of . If , the resulting series is the harmonic series which is known to converge. If we get an alternating series which converges by the alternating series test. If The result is a geometric-like series which we can use the limit comparison test with a geometric series to show converges. Finally, if the or , then the resulting sequence inside the series would not tend to zero, so it would diverge by the divergence test. Putting this all together gives and interval of convergence of   "
},
{
  "id": "subsec-intervals-of-convergence-4",
  "level": "2",
  "url": "section-3.html#subsec-intervals-of-convergence-4",
  "type": "Example",
  "number": "3.9",
  "title": "An Interval of Convergence that Includes Both Endpoints.",
  "body": " An Interval of Convergence that Includes Both Endpoints  Consider the power series: Again we can try various values of . If , the resulting series is one where the sequence inside the series is and the series can be shown to converge by the integral test, since . If , the resulting series is an alternating series that converges by the alternating series test. Since the series converges at and , it makes sense that it also converges for values between these two points. Like in the previous example, if is not between 1 and 3, then the resulting series would diverge by the divergence test.  "
},
{
  "id": "subsec-intervals-of-convergence-5",
  "level": "2",
  "url": "section-3.html#subsec-intervals-of-convergence-5",
  "type": "Example",
  "number": "3.10",
  "title": "An Infinite Interval of Convergence.",
  "body": " An Infinite Interval of Convergence  Consider the series: For any value of that we choose, we get something that looks like a geometric series over a factorial. If we use the limit comparison test with and , then the limit would always tend to one. So this power series converges for all values of .  "
},
{
  "id": "subsec-intervals-of-convergence-6",
  "level": "2",
  "url": "section-3.html#subsec-intervals-of-convergence-6",
  "type": "Example",
  "number": "3.11",
  "title": "An Interval of Convergence that Includes Only One Point.",
  "body": " An Interval of Convergence that Includes Only One Point  Consider the series: If we let then the resulting series would just be . For any other value of , the resulting series would diverge by the divergence test. So this series only converges for .  "
},
{
  "id": "subsec-intervals-of-convergence-7",
  "level": "2",
  "url": "section-3.html#subsec-intervals-of-convergence-7",
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
  "body": " Taylor Series   A Taylor series is a power series where the coefficients are determined using the derivatives of a function. This is how we can build a power series from scratch using our knowledge of calculus.    Taylor Series   In this section we will look at:     The idea of a Taylor series.    A few well-known Taylor series.    Building new Taylor series from known Taylor series.      The Idea of Taylor Series  We have already encountered the idea of a Taylor series all the way back in Calculus I (Math 151) when you learned about linear approximation. A linear approximation is a degree 1 Taylor polynomial. As you add terms to the Taylor polynomial you increase the degree of the approximation. Recall that a linear approximation for a function at has the form: The point is called the center of the approximation. We can build a quadratic approximation in a similar way where the quadratic term would be in the form and the constant would involve the second derivative. The constant is actually . The factorial comes from iterations of the power rule. Adding another term for a cubic approximation would add the term . And in general, a Taylor approximation of the degree has the form: Here is a Desmos demonstration for . You can use the n slider on the left to increase the terms in the Taylor approximation and watch as the curve changes to more closely follow the curve for . The c slider changes the center of the approximation, so that if you wanted to approximate for negative values of , it makes sense to move the center to the left. This is what your calculator does when you use the <e^x> button!   Taylor Polynomials for    Note that a Taylor series centered at zero is called a Maclaurin series but I will refer to all series built from derivatives like this a Taylor series.    A Few Well-Known Taylor Series  The Taylor series for centered at zero can be found by taking successive derivatives of and plugging in zero. But since every derivative of is and . This gives us values of 1 for etc. and just leaves the factorial terms in the denominator. So the Taylor polynomial for is and the Taylor Series is   The Taylor series for and can be built in a similar way. Since these trigonometric functions go through the derivative cycle: . And if we center the Taylor series at zero where and , then the coefficients are 1 or -1 for every second term in the series and zero for the other terms. For the 1 and -1 land on the odd terms and for the 1 and -1 land on the even terms so: Both of these series also converge for all values of .  We also already know the Taylor series for the function . This is based on the geometric series. This series converges for .   Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on Taylor Series.     Building New Taylor Series from Known Taylor Series.  Like many things in mathematics, we can use previous work to guide new work. So instead of building a Taylor series from scratch: taking derivatives, plugging in values, writing down some terms and finally writing a formula for the series. We can build some Taylor series from known Taylor series.   Substitution  By substituting for in the Taylor series based on the geometric series gives:     Differentiation  Since:   The power rule!    Antidifferentiation  Since and using our work from Example 4.2     Here is a video with some more examples of Taylor series from the Organic Chemistry Tutor   Taylor Series (29 Minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on Taylor series.    "
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
  "id": "subsec-the-idea-of-a-taylor-series-3",
  "level": "2",
  "url": "section-4.html#subsec-the-idea-of-a-taylor-series-3",
  "type": "Figure",
  "number": "4.1",
  "title": "",
  "body": " Taylor Polynomials for   "
},
{
  "id": "subsec-new-taylor-series-from-known-taylor-series-3",
  "level": "2",
  "url": "section-4.html#subsec-new-taylor-series-from-known-taylor-series-3",
  "type": "Example",
  "number": "4.2",
  "title": "Substitution.",
  "body": " Substitution  By substituting for in the Taylor series based on the geometric series gives:   "
},
{
  "id": "subsec-new-taylor-series-from-known-taylor-series-4",
  "level": "2",
  "url": "section-4.html#subsec-new-taylor-series-from-known-taylor-series-4",
  "type": "Example",
  "number": "4.3",
  "title": "Differentiation.",
  "body": " Differentiation  Since:   The power rule!  "
},
{
  "id": "subsec-new-taylor-series-from-known-taylor-series-5",
  "level": "2",
  "url": "section-4.html#subsec-new-taylor-series-from-known-taylor-series-5",
  "type": "Example",
  "number": "4.4",
  "title": "Antidifferentiation.",
  "body": " Antidifferentiation  Since and using our work from Example 4.2    "
},
{
  "id": "subsec-new-taylor-series-from-known-taylor-series-7",
  "level": "2",
  "url": "section-4.html#subsec-new-taylor-series-from-known-taylor-series-7",
  "type": "Figure",
  "number": "4.5",
  "title": "",
  "body": " Taylor Series (29 Minutes)   "
},
{
  "id": "section-5",
  "level": "1",
  "url": "section-5.html",
  "type": "Section",
  "number": "5",
  "title": "Working with Power Series",
  "body": " Working with Power Series   Power series, Taylor series and Taylor polynomials are all useful tools, since they can replace a function like with a polynomial function. In physics and engineering applications, a Taylor polynomial approximation is often sufficient to produce a useful solution.    Applications   In this section we will look at:     Various applications of Power series and Taylor polynomials      Applications   A Tricky Integral  A common integral in physics and statistics is the integral for the Gaussian or Normal distribution. The Fundamental Theorem of Calculus does not apply here since does not have an antiderivative. So how do you or your calculator calculate this integral?  If we replace with its Taylor series, then we can use several terms of the Taylor polynomial to get an accurate approximation.   Integrating this power series gives: Using five or six terms for a known value of should give you enough digits of desired accuracy.    Evaluating a Limit  Consider the limit: l'Hopital's rule can be applied to this limit. However, it would take several applications of l'Hopital's rule to get a numeric solution. If we replace by its Taylor series then the limit becomes: Canceling like terms in the numerator and then canceling with the in the denominator and limit simplifies to:     Applications to Physics  Two applications in Physics involve the linear approximations (first-degree Taylor polynomials) of sine and cosine.   According to Newton's second law, the period (time of one swing back and forth) of a pendulum is where is the acceleration of gravity, about 9.81 meters per second squared near the surface of the Earth. is the length  For small angles less than 20 degrees, the linear of cosine is an accurate approximation. And since , the time period is: This is what is used to set the length of the pendulum in a grandfather clock to keep time!  Another application is in optics where the sine approximation is used to simplify Snell's law for lenses. This is used to make lenses for simple telescopes and cameras.    Calculating a Square Root  Another well known Taylor series is the binomial series which Isaac Newton discovered in 1676: But the ancient world also knew a version of this that was used to calculate square roots. Let and for the binomial series. This is what your calculator does when you ask it to calculate !    Einstein versus Newton  In Einstein's theory of special relativity, the mass of an object moving with velocity is where is the rest mass of the object and is the speed of light in a vacuum. The kinetic energy of the object is the difference between its total energy and its potential energy at rest.   In Newtonian physics, kinetic energy is defined as . Rearranging Einstein's equation gives: Using the Taylor series (binomial) for gives: So Newton's equation is a first-degree Taylor approximation of Einstein's equation!   This is just a small selection of examples. There are many more like approximations that give you the digits of and series solutions to differential equations. Here are two videos with some more examples.   Applications of Taylor Series (13 minutes)     Applications of Taylor Series (12 minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on applying Taylor series.    "
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
  "id": "subsec-applications-of-power-series-2",
  "level": "2",
  "url": "section-5.html#subsec-applications-of-power-series-2",
  "type": "Example",
  "number": "5.1",
  "title": "A Tricky Integral.",
  "body": " A Tricky Integral  A common integral in physics and statistics is the integral for the Gaussian or Normal distribution. The Fundamental Theorem of Calculus does not apply here since does not have an antiderivative. So how do you or your calculator calculate this integral?  If we replace with its Taylor series, then we can use several terms of the Taylor polynomial to get an accurate approximation.   Integrating this power series gives: Using five or six terms for a known value of should give you enough digits of desired accuracy.  "
},
{
  "id": "subsec-applications-of-power-series-3",
  "level": "2",
  "url": "section-5.html#subsec-applications-of-power-series-3",
  "type": "Example",
  "number": "5.2",
  "title": "Evaluating a Limit.",
  "body": " Evaluating a Limit  Consider the limit: l'Hopital's rule can be applied to this limit. However, it would take several applications of l'Hopital's rule to get a numeric solution. If we replace by its Taylor series then the limit becomes: Canceling like terms in the numerator and then canceling with the in the denominator and limit simplifies to:   "
},
{
  "id": "subsec-applications-of-power-series-4",
  "level": "2",
  "url": "section-5.html#subsec-applications-of-power-series-4",
  "type": "Example",
  "number": "5.3",
  "title": "Applications to Physics.",
  "body": " Applications to Physics  Two applications in Physics involve the linear approximations (first-degree Taylor polynomials) of sine and cosine.   According to Newton's second law, the period (time of one swing back and forth) of a pendulum is where is the acceleration of gravity, about 9.81 meters per second squared near the surface of the Earth. is the length  For small angles less than 20 degrees, the linear of cosine is an accurate approximation. And since , the time period is: This is what is used to set the length of the pendulum in a grandfather clock to keep time!  Another application is in optics where the sine approximation is used to simplify Snell's law for lenses. This is used to make lenses for simple telescopes and cameras.  "
},
{
  "id": "subsec-applications-of-power-series-5",
  "level": "2",
  "url": "section-5.html#subsec-applications-of-power-series-5",
  "type": "Example",
  "number": "5.4",
  "title": "Calculating a Square Root.",
  "body": " Calculating a Square Root  Another well known Taylor series is the binomial series which Isaac Newton discovered in 1676: But the ancient world also knew a version of this that was used to calculate square roots. Let and for the binomial series. This is what your calculator does when you ask it to calculate !  "
},
{
  "id": "subsec-applications-of-power-series-6",
  "level": "2",
  "url": "section-5.html#subsec-applications-of-power-series-6",
  "type": "Example",
  "number": "5.5",
  "title": "Einstein versus Newton.",
  "body": " Einstein versus Newton  In Einstein's theory of special relativity, the mass of an object moving with velocity is where is the rest mass of the object and is the speed of light in a vacuum. The kinetic energy of the object is the difference between its total energy and its potential energy at rest.   In Newtonian physics, kinetic energy is defined as . Rearranging Einstein's equation gives: Using the Taylor series (binomial) for gives: So Newton's equation is a first-degree Taylor approximation of Einstein's equation!  "
},
{
  "id": "subsec-applications-of-power-series-8",
  "level": "2",
  "url": "section-5.html#subsec-applications-of-power-series-8",
  "type": "Figure",
  "number": "5.6",
  "title": "",
  "body": " Applications of Taylor Series (13 minutes)   "
},
{
  "id": "subsec-applications-of-power-series-9",
  "level": "2",
  "url": "section-5.html#subsec-applications-of-power-series-9",
  "type": "Figure",
  "number": "5.7",
  "title": "",
  "body": " Applications of Taylor Series (12 minutes)   "
},
{
  "id": "section-6",
  "level": "1",
  "url": "section-6.html",
  "type": "Section",
  "number": "6",
  "title": "2D Vectors",
  "body": " 2D Vectors   A vector is a directed line with a starting point, ending point and an arrow pointing in a specified direction. Vectors have many uses in physics and engineering such as the calculation of work and torque. Since vectors are by definition geometric objects, they are also useful in mathematics for calculating things like area and volume. Vectors are also widely used in Linear Algebra (Math 238) and Calculus IV (Math 254).    2D-Vectors   In this section we will look at:     Notation and definitions for two-dimensional vectors    Operations and their properties for vectors    Applications of vectors.      Definitions and Notation  While a vector can start and end at any point, it is convenient to use the origin (0, 0) as a common starting point. Then the vector can be defined by the ending point. For example if we want a vector that starts at (0,0) and ends at (-5, 2), then we could write the vector as .   An example vector     v=(-2,5)      {\\mathbf v}=\\langle -2, 5 \\rangle        There are several ways to write and refer to vectors. When typesetting vectors, like in these notes, it is common to refer to vectors using boldface letter, such as . When handwriting vectors, it is common to denote vectors with a small arrow written over the letter used for the vector, . The vector itself is usually written like a point enclosed in angle brackets, . The numbers or variables written inside the brackets are called the components .  An alternative way to write a vector, that is common in physics and engineering is to write a vector as a sum of its components where each component is followed by or pronounced as i-hat and j-hat. corresponds to the component and corresponds to the component. So This is called i-j-k notation. (We'll add the in the next section.)  When studying vectors, we want to distinguish them from regular numbers (or variables) which we call scalars . Scalars are written as normal and typeset in regular text. One reason we want to distinguish between scalars and vectors is that while there is only way to multiply scalars, there are three different ways to multiply with vectors!  Two other important properties of vectors are their magnitude and direction. The magnitude of a vector is its length. We use to denote the magnitude of a vector. To find the length of slanted line which forms the hypotenuse of a right triangle, we use the Pythagorean theorem. So where and are the components of the vector.   An example vector and its components     v=(-2,5)        ||{\\mathbf v}|| = \\sqrt{29}    x = -2    y = 5        The direction of a two-dimensional vector is the angle, in radians, it makes with the positive -axis. We define this as . The arctangent only gives positive angles in the first and quadrant, so if our vector is pointing in the second or third quadrant, we need to add to our result and to get a positive result in the fourth quadrant, we need to add .  If we know the magnitude and direction of a two-dimensional vector, we can write the components of the vector using the formulas. and .  If this all looks familiar, converting from component form to direction and magnitude is the same thing as converting from rectangular coordinates to polar coordinates.    Vector Operations and Properties  Similar to scalars, vectors can be added and multiplied. Subtraction is just adding negative numbers and division is a little more complicated because of the three ways that vectors can be used in multiplication. Vector addition\/subtraction is done component-wise.   Vector Addition      Vector addition\/subtraction, like many aspects of vectors that we shall see, has a geometric interpretation. Adding or subtracting two vectors gives the diagonal of a parallelogram. The longer diagonal represents addition and the shorter diagonal represents subtraction. We can see this in the following Desmos demonstration. Click on Vector u + v or Vector u -v and on the Sides of parallelogram    Vector Addition and Subtraction - Geometric Representation    You can also change the components of the vector by using the sliders for a and b . You can change the components of the vector by using the sliders for c and d . As you move change the vectors, the sum always stays as the longer diagonal of the parallelogram and the difference is the shorter diagonal.  This \"parallelogram\" law shows two more things about vector addition. One is that vector addition is commutative. If you change the order of addition, you get the same result. Starting at the origin, would represent the two sides of the parallelogram below the diagonal, when all of the components are positive and would represent the two sides of the parallelogram above the diagonal. A second thing we see is that subtraction is anti-commutative. (same magnitude = same length) but the vectors point in the opposite direction.    Applications of Vectors  We will close this section be looking at a few examples of how we can apply two-dimensional vectors.   Forces  Three forces act on object: . Find the net force on the object. Note that an equal force pointing in the opposite direction (Newton's third law) would \"balance\" the net force. This is the vector .    A Long Walk  A person starts walking from home and walks 4 miles east, 7 miles southeast, 6 miles south, 5 miles southwest and 3 miles east. How far have they walked?  Note that the walk information is given as magnitudes and directions. The total distance walked is the sum of the magnitudes - 24 miles. A very long walk, this is more than my maximum daily hike total of 22 miles.  If they walked straight home, how far would they have to walk and and in what direction?   A Long walk in vector form.             \\mathbf{w}_1 = \\langle 4, 0 \\rangle    \\mathbf{w}_2 = \\langle \\frac{7\\sqrt{2}}{2}, -\\frac{7\\sqrt{2}}{2} \\rangle    \\mathbf{w}_3 = \\langle 0, -6 \\rangle    \\mathbf{w}_4 = \\langle -\\frac{5\\sqrt{2}}{2}, -\\frac{5\\sqrt{2}}{2} \\rangle    \\mathbf{w}_5 = \\langle -3, 0 \\rangle   Home       As we can see in the figure above, where each vector has been converted to component form from the given magnitudes and directions, the distance home is the magnitude of the vector that stretch from home to the tip of the arrow of . This is also the sum of the five walk vectors. The magnitude of this vector is approximately 14.68 miles. To find the direction, home lets add the total walk vector to the figure.   A Long walk in vector form.              \\mathbf{w}_1 = \\langle 4, 0 \\rangle    \\mathbf{w}_2 = \\langle \\frac{7\\sqrt{2}}{2}, -\\frac{7\\sqrt{2}}{2} \\rangle    \\mathbf{w}_3 = \\langle 0, -6 \\rangle    \\mathbf{w}_4 = \\langle -\\frac{5\\sqrt{2}}{2}, -\\frac{5\\sqrt{2}}{2} \\rangle    \\mathbf{w}_5 = \\langle -3, 0 \\rangle    \\mathbf{w}_{total} = \\langle 1+\\sqrt{2},-6-6\\sqrt{2}\\rangle   Home       The direction of the total velocity vector is radians. This angle is in the fourth quadrant, but the direction home is clearly pointing in the second quadrant. This is because the total walk vector points from home to the tip of the fifth walk vector. To get the direction home, we can simply reverse the direction of this vector by rotating it 180 degrees or radians. So the direction home is radians.    Velocity  Suppose an airplane is heading north at an airspeed of 500 kilometers per hour, but there is a wind blowing from the southeast at 80 kilometers per hour. How many degrees off course will the plane end up flying and what is the speeds relative to the ground?  Velocity can be considered as a vector in physics. The information for the plane and wind's velocity are given as magnitudes and directions. Converting these to component form gives with the direction north at 90 degrees and the wind direction blowing from the southeast to the northwest at 135 degrees Adding these velocity vectors gives the total velocity vector . Find the magnitude of this vector will give the plane's relative speed. The magnitude is speed = kilometers per hour.  Finding the direction of the total velocity vector and subtracting it from 90 degrees (the plane's intended direction) will give that angle that the plane is off course. Direction = radians. Converting this to degrees gives 5.8 degrees off course.   Here is a video with a few more application problems from a physics perspective   Vectors in Physics (12 minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on two-dimensional vectors.    "
},
{
  "id": "section-6-3",
  "level": "2",
  "url": "section-6.html#section-6-3",
  "type": "Objectives",
  "number": "6",
  "title": "2D-Vectors",
  "body": " 2D-Vectors   In this section we will look at:     Notation and definitions for two-dimensional vectors    Operations and their properties for vectors    Applications of vectors.    "
},
{
  "id": "subsec-vector-definitions-3",
  "level": "2",
  "url": "section-6.html#subsec-vector-definitions-3",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " An example vector     v=(-2,5)      {\\mathbf v}=\\langle -2, 5 \\rangle       "
},
{
  "id": "subsec-vector-definitions-8",
  "level": "2",
  "url": "section-6.html#subsec-vector-definitions-8",
  "type": "Figure",
  "number": "6.2",
  "title": "",
  "body": " An example vector and its components     v=(-2,5)        ||{\\mathbf v}|| = \\sqrt{29}    x = -2    y = 5       "
},
{
  "id": "subsec-vector-operations-3",
  "level": "2",
  "url": "section-6.html#subsec-vector-operations-3",
  "type": "Example",
  "number": "6.3",
  "title": "Vector Addition.",
  "body": " Vector Addition     "
},
{
  "id": "subsec-vector-operations-5",
  "level": "2",
  "url": "section-6.html#subsec-vector-operations-5",
  "type": "Figure",
  "number": "6.4",
  "title": "",
  "body": " Vector Addition and Subtraction - Geometric Representation   "
},
{
  "id": "subsec-vector-applications-3",
  "level": "2",
  "url": "section-6.html#subsec-vector-applications-3",
  "type": "Example",
  "number": "6.5",
  "title": "Forces.",
  "body": " Forces  Three forces act on object: . Find the net force on the object. Note that an equal force pointing in the opposite direction (Newton's third law) would \"balance\" the net force. This is the vector .  "
},
{
  "id": "subsec-vector-applications-4",
  "level": "2",
  "url": "section-6.html#subsec-vector-applications-4",
  "type": "Example",
  "number": "6.6",
  "title": "A Long Walk.",
  "body": " A Long Walk  A person starts walking from home and walks 4 miles east, 7 miles southeast, 6 miles south, 5 miles southwest and 3 miles east. How far have they walked?  Note that the walk information is given as magnitudes and directions. The total distance walked is the sum of the magnitudes - 24 miles. A very long walk, this is more than my maximum daily hike total of 22 miles.  If they walked straight home, how far would they have to walk and and in what direction?   A Long walk in vector form.             \\mathbf{w}_1 = \\langle 4, 0 \\rangle    \\mathbf{w}_2 = \\langle \\frac{7\\sqrt{2}}{2}, -\\frac{7\\sqrt{2}}{2} \\rangle    \\mathbf{w}_3 = \\langle 0, -6 \\rangle    \\mathbf{w}_4 = \\langle -\\frac{5\\sqrt{2}}{2}, -\\frac{5\\sqrt{2}}{2} \\rangle    \\mathbf{w}_5 = \\langle -3, 0 \\rangle   Home       As we can see in the figure above, where each vector has been converted to component form from the given magnitudes and directions, the distance home is the magnitude of the vector that stretch from home to the tip of the arrow of . This is also the sum of the five walk vectors. The magnitude of this vector is approximately 14.68 miles. To find the direction, home lets add the total walk vector to the figure.   A Long walk in vector form.              \\mathbf{w}_1 = \\langle 4, 0 \\rangle    \\mathbf{w}_2 = \\langle \\frac{7\\sqrt{2}}{2}, -\\frac{7\\sqrt{2}}{2} \\rangle    \\mathbf{w}_3 = \\langle 0, -6 \\rangle    \\mathbf{w}_4 = \\langle -\\frac{5\\sqrt{2}}{2}, -\\frac{5\\sqrt{2}}{2} \\rangle    \\mathbf{w}_5 = \\langle -3, 0 \\rangle    \\mathbf{w}_{total} = \\langle 1+\\sqrt{2},-6-6\\sqrt{2}\\rangle   Home       The direction of the total velocity vector is radians. This angle is in the fourth quadrant, but the direction home is clearly pointing in the second quadrant. This is because the total walk vector points from home to the tip of the fifth walk vector. To get the direction home, we can simply reverse the direction of this vector by rotating it 180 degrees or radians. So the direction home is radians.  "
},
{
  "id": "subsec-vector-applications-5",
  "level": "2",
  "url": "section-6.html#subsec-vector-applications-5",
  "type": "Example",
  "number": "6.9",
  "title": "Velocity.",
  "body": " Velocity  Suppose an airplane is heading north at an airspeed of 500 kilometers per hour, but there is a wind blowing from the southeast at 80 kilometers per hour. How many degrees off course will the plane end up flying and what is the speeds relative to the ground?  Velocity can be considered as a vector in physics. The information for the plane and wind's velocity are given as magnitudes and directions. Converting these to component form gives with the direction north at 90 degrees and the wind direction blowing from the southeast to the northwest at 135 degrees Adding these velocity vectors gives the total velocity vector . Find the magnitude of this vector will give the plane's relative speed. The magnitude is speed = kilometers per hour.  Finding the direction of the total velocity vector and subtracting it from 90 degrees (the plane's intended direction) will give that angle that the plane is off course. Direction = radians. Converting this to degrees gives 5.8 degrees off course.  "
},
{
  "id": "subsec-vector-applications-7",
  "level": "2",
  "url": "section-6.html#subsec-vector-applications-7",
  "type": "Figure",
  "number": "6.10",
  "title": "",
  "body": " Vectors in Physics (12 minutes)   "
},
{
  "id": "section-7",
  "level": "1",
  "url": "section-7.html",
  "type": "Section",
  "number": "7",
  "title": "3D Vectors",
  "body": " 3D Vectors   Three dimensional vectors are similar to two-dimensional (and four or -dimensional) vectors. You can add and subtract them, find their magnitude and multiply them. The notation for three-dimensional vectors is .  Three-dimensional space is defined by the right hand rule (sorry left-handers). In the -direction left is negative and right is positive and when viewed on a two-dimensional plane, positive is up and negative is down. To define positive and negative in a third -direction, we use our right hands. Point the fingers on your right hand in the positive -direction and curl them to the positive -direction, then the thumb on your right hand is pointing in the positive -direction. If the plane is drawn as usual on a white\/chalk board, then the positive -direction points out of the board.   The right-hand rule    An image with two figures. The figure on the left shows a three-dimensional axes. The figure on the right has a hand demonstrating the right-hand rule with a three dimensional axes superimposed over the hand.       3D-Vectors   In this section we will look at:     Operations for three-dimensional vectors    GeoGebra3D tutorial      Operations and Properties  The magnitude of a three-dimensional vector is calculated using the three-dimensional analog of the Pythagorean theorem.    Magnitude      Addition and subtraction is done component-wise just like in two-dimensions.   Addition and Subtraction         One way to multiply with three-dimensional vectors is scalar multiplication where we multiply a vector by a scalar to \"rescale\" the vector. We will look at the other two ways to multiply with three-dimensional vectors.   Scalar Multiplication         Multiplying a vector by negative makes it point in the opposite direction!   A useful scalar multiplication is to multiply it by 1\/magnitude. This creates what is called a unit vector since the magnitude of the rescaled vector is magnitude\/magnitude = 1 unit.   A Unit Vector  Given the vector , the magnitude is . Then the unit vector is:      GeoGebra 3D  We will close this section with a video tutorial of using GeoGebra 3D. If you click on the calculator icon at the top of the page, the GeoGebra 3D calculator will pop up in the lower right corner of your screen. Since we will be studying three dimensional space for the rest of the quarter and a standard graphing calculator does not have 3D capabilities, GeoGebra 3D is a good option for us to visualize objects in three-dimensional space. Desmos also has a 3D option and I will introduce another option in a future section.   A Short Introduction to GeoGebra 3D (8 minutes).    Here are three hour long webinar's from GeoGebra's official channel , and if you want to do a deep dive.   Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on three-dimensional vectors.    "
},
{
  "id": "right-hand-rule",
  "level": "2",
  "url": "section-7.html#right-hand-rule",
  "type": "Figure",
  "number": "7.1",
  "title": "",
  "body": " The right-hand rule    An image with two figures. The figure on the left shows a three-dimensional axes. The figure on the right has a hand demonstrating the right-hand rule with a three dimensional axes superimposed over the hand.    "
},
{
  "id": "section-7-3",
  "level": "2",
  "url": "section-7.html#section-7-3",
  "type": "Objectives",
  "number": "7",
  "title": "3D-Vectors",
  "body": " 3D-Vectors   In this section we will look at:     Operations for three-dimensional vectors    GeoGebra3D tutorial    "
},
{
  "id": "subsec-3d-vector-operations-3",
  "level": "2",
  "url": "section-7.html#subsec-3d-vector-operations-3",
  "type": "Example",
  "number": "7.2",
  "title": "Magnitude.",
  "body": " Magnitude     "
},
{
  "id": "subsec-3d-vector-operations-5",
  "level": "2",
  "url": "section-7.html#subsec-3d-vector-operations-5",
  "type": "Example",
  "number": "7.3",
  "title": "Addition and Subtraction.",
  "body": " Addition and Subtraction        "
},
{
  "id": "subsec-3d-vector-operations-7",
  "level": "2",
  "url": "section-7.html#subsec-3d-vector-operations-7",
  "type": "Example",
  "number": "7.4",
  "title": "Scalar Multiplication.",
  "body": " Scalar Multiplication         Multiplying a vector by negative makes it point in the opposite direction!  "
},
{
  "id": "subsec-3d-vector-operations-9",
  "level": "2",
  "url": "section-7.html#subsec-3d-vector-operations-9",
  "type": "Example",
  "number": "7.5",
  "title": "A Unit Vector.",
  "body": " A Unit Vector  Given the vector , the magnitude is . Then the unit vector is:   "
},
{
  "id": "geogebra-3d-3",
  "level": "2",
  "url": "section-7.html#geogebra-3d-3",
  "type": "Figure",
  "number": "7.6",
  "title": "",
  "body": " A Short Introduction to GeoGebra 3D (8 minutes).   "
},
{
  "id": "section-8",
  "level": "1",
  "url": "section-8.html",
  "type": "Section",
  "number": "8",
  "title": "The Dot Product",
  "body": " The Dot Product   We saw in the last section one way to with vectors is scalar multiplication. When you multiply a scalar times a vector the result is a rescaled vector. A second way to multiply vectors is the . Here we will multiply two vectors in such a way that the result will be a scalar.    The Dot Product   In this section we will look at:     The definition of the dot product    Properties of the dot product    Applications of the dot product      Definition of the Dot Product  Given two vectors and , then dot product is:    Suppose you are a company that produces and sells smartphones, TVs and laptops. Smartphones sell for $400, TVs sell for $1000 and laptops sell for $900. Further suppose that you sell 200 smartphones, 300 TVs and 500 laptops, how much total revenue would you generate?  We can create two vectors, one with the revenue per unit for each it and another vector for each quantity sold: Multiplying revenue per item times number of units sold will give the total dollar amount generated from the sale of each item. If we add up the total dollar amount for each item, we will get the overall total revenue. But this is the exact definition of the dot product!      Properties of the Dot Product  The dot product has several algebraic properties and one important geometric property. The algebraic properties are what you would expect from an operation defined by multiplying and adding:   Properties of the Dot Product       The Commutative Property       Distributive Property         Another important property of the dot product is its geometric interpretation   The Geometry of the Dot Product  Given two vectors and with an angle of between them Note that if the vectors are separated by a right angle, then the dot product equals zero since If this is the case then the vectors are called orthogonal .    If a 3-meter long vector and a 2-meter long vector are separated by and angle of 60 degrees, what is the dot product of these two vectors?  Since we are given the magnitudes of the two vectors and the angle between them:     What is the angle between the vectors and ?  First, we know that and second, we can calculate the magnitude of each vector. Plugging this all into the geometric definition for the dot product gives: and solving for gives:    You can explore this geometric property of the dot product using this GeoGebra visualization:   Dot Product Visualization      Applications of the Dot Product  We will finish this section with a few examples of applications of the dot product.   Velocity  A container ship leaves port traveling on a course of 15 degrees north of east. Its engine generates a speed of 20 knots along that path. THe ocean current moves the ship northeast at a speed of 2 knots. Considering both the engine and the current, how fast is the ship traveling along its course?  We know that the ship's engines contribute a speed of 20 knots along its course. We want to know how much the ocean current contributes to this speed. We are given speed (magnitude of velocity) and direction for both the ship and the current from which we can form the vectors: Here the components point in the and -directions. We want a vector for the current that points in the direction of the ship's course. This is called the scalar projection and is denoted by Which is approximately 1.73 knots. Adding this to the 20 knots generated by the ship's engines and the ship is traveling at 21.73 knots along its course.    Work  Suppose a wagon is pulled 100 meters along a horizontal path by a constant of force of 70 Newtons. THe handle of the wagon is held at a angle of 35 degrees above the horizontal. How much work is done by the force?  Work is defined as a force vector dotted with a displacement vector. In this example, we are given the magnitudes of a force vector (70 Newtons) and a displacement vector (100 meters) as well as the angle between these vectors. So:     Bond Angle  A molecule of methane, CH_4, is structured with the four hydrogen atoms at the four vertices of a regular tetrahedron and the carbon at the centroid of the tetrahedron. The bond angle is the angle formed by the H-C-H combination. What is the bond angle?  Since we are only after the angle we can model our molecule as a tetrahedron with vertices at the points (1, 0, 0), (0, 1, 0), (0, 0, 1) and (1, 1, 1). This puts the centroid at . We can then form one vector extending from the centroid to (1, 0, 0) and get . Another vector from the centroid to (0, 1, 0) is . The dot product of these vectors is . You can check to see that this would be the dot product no matter which two vertices we choose. The magnitude of each of these vectors is .The bond angle is then:     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on dot products    "
},
{
  "id": "section-8-3",
  "level": "2",
  "url": "section-8.html#section-8-3",
  "type": "Objectives",
  "number": "8",
  "title": "The Dot Product",
  "body": " The Dot Product   In this section we will look at:     The definition of the dot product    Properties of the dot product    Applications of the dot product    "
},
{
  "id": "subsec-dot-product-3",
  "level": "2",
  "url": "section-8.html#subsec-dot-product-3",
  "type": "Example",
  "number": "8.1",
  "title": "",
  "body": " Suppose you are a company that produces and sells smartphones, TVs and laptops. Smartphones sell for $400, TVs sell for $1000 and laptops sell for $900. Further suppose that you sell 200 smartphones, 300 TVs and 500 laptops, how much total revenue would you generate?  We can create two vectors, one with the revenue per unit for each it and another vector for each quantity sold: Multiplying revenue per item times number of units sold will give the total dollar amount generated from the sale of each item. If we add up the total dollar amount for each item, we will get the overall total revenue. But this is the exact definition of the dot product!   "
},
{
  "id": "subsec-properties-dot-product-4",
  "level": "2",
  "url": "section-8.html#subsec-properties-dot-product-4",
  "type": "Example",
  "number": "8.2",
  "title": "The Commutative Property.",
  "body": " The Commutative Property     "
},
{
  "id": "subsec-properties-dot-product-5",
  "level": "2",
  "url": "section-8.html#subsec-properties-dot-product-5",
  "type": "Example",
  "number": "8.3",
  "title": "Distributive Property.",
  "body": " Distributive Property        "
},
{
  "id": "subsec-properties-dot-product-8",
  "level": "2",
  "url": "section-8.html#subsec-properties-dot-product-8",
  "type": "Example",
  "number": "8.4",
  "title": "",
  "body": " If a 3-meter long vector and a 2-meter long vector are separated by and angle of 60 degrees, what is the dot product of these two vectors?  Since we are given the magnitudes of the two vectors and the angle between them:   "
},
{
  "id": "subsec-properties-dot-product-9",
  "level": "2",
  "url": "section-8.html#subsec-properties-dot-product-9",
  "type": "Example",
  "number": "8.5",
  "title": "",
  "body": " What is the angle between the vectors and ?  First, we know that and second, we can calculate the magnitude of each vector. Plugging this all into the geometric definition for the dot product gives: and solving for gives:   "
},
{
  "id": "subsec-properties-dot-product-11",
  "level": "2",
  "url": "section-8.html#subsec-properties-dot-product-11",
  "type": "Figure",
  "number": "8.6",
  "title": "",
  "body": " Dot Product Visualization   "
},
{
  "id": "subsec-application-dot-product-3",
  "level": "2",
  "url": "section-8.html#subsec-application-dot-product-3",
  "type": "Example",
  "number": "8.7",
  "title": "Velocity.",
  "body": " Velocity  A container ship leaves port traveling on a course of 15 degrees north of east. Its engine generates a speed of 20 knots along that path. THe ocean current moves the ship northeast at a speed of 2 knots. Considering both the engine and the current, how fast is the ship traveling along its course?  We know that the ship's engines contribute a speed of 20 knots along its course. We want to know how much the ocean current contributes to this speed. We are given speed (magnitude of velocity) and direction for both the ship and the current from which we can form the vectors: Here the components point in the and -directions. We want a vector for the current that points in the direction of the ship's course. This is called the scalar projection and is denoted by Which is approximately 1.73 knots. Adding this to the 20 knots generated by the ship's engines and the ship is traveling at 21.73 knots along its course.  "
},
{
  "id": "subsec-application-dot-product-4",
  "level": "2",
  "url": "section-8.html#subsec-application-dot-product-4",
  "type": "Example",
  "number": "8.8",
  "title": "Work.",
  "body": " Work  Suppose a wagon is pulled 100 meters along a horizontal path by a constant of force of 70 Newtons. THe handle of the wagon is held at a angle of 35 degrees above the horizontal. How much work is done by the force?  Work is defined as a force vector dotted with a displacement vector. In this example, we are given the magnitudes of a force vector (70 Newtons) and a displacement vector (100 meters) as well as the angle between these vectors. So:   "
},
{
  "id": "subsec-application-dot-product-5",
  "level": "2",
  "url": "section-8.html#subsec-application-dot-product-5",
  "type": "Example",
  "number": "8.9",
  "title": "Bond Angle.",
  "body": " Bond Angle  A molecule of methane, CH_4, is structured with the four hydrogen atoms at the four vertices of a regular tetrahedron and the carbon at the centroid of the tetrahedron. The bond angle is the angle formed by the H-C-H combination. What is the bond angle?  Since we are only after the angle we can model our molecule as a tetrahedron with vertices at the points (1, 0, 0), (0, 1, 0), (0, 0, 1) and (1, 1, 1). This puts the centroid at . We can then form one vector extending from the centroid to (1, 0, 0) and get . Another vector from the centroid to (0, 1, 0) is . The dot product of these vectors is . You can check to see that this would be the dot product no matter which two vertices we choose. The magnitude of each of these vectors is .The bond angle is then:   "
},
{
  "id": "section-9",
  "level": "1",
  "url": "section-9.html",
  "type": "Section",
  "number": "9",
  "title": "The Cross Product",
  "body": " The Cross Product   We have seen two ways to multiply with a vector. Scalar multiplication multiplies a scalar times a vectors and the result is a rescaled vector. The Dot product multiplies two vectors by multiplying the like components from each vector together and then adding the results which gives a scalar. A third way to multiply vectors is called the cross product. The cross product is only defined for three-dimensional vectors unlike the other two types.    The Cross Product   In this section we will look at:     The definition of the cross product    Properties of the cross product    Applications of the cross product      Definition of the Cross Product  The cross product is defined as the determinant of a matrix consisting of the two vectors and the , and unit vectors for the three dimensions.   The Cross Product   Which is calculated as follows   This may look daunting, but there is a quick way to calculate the cross product which with a little practice makes things easy. I learned this in a physics class in college and still do it this way 25 years later.   The easy way to calculate the cross product       Properties of the Cross Product  Just like the dot product, the cross product has some important algebraic properties and a couple of nice geometric properties   Algebraic Properties of the Cross Product      Note that the cross product is anticommutative so that if you switch the order, you switch the sign. Also note that when you cross a vector with itself, the result is a zero vector. This is due to the geometric properties of the cross product.   Geometric Properties of the Cross Product  When you cross two vectors, the resulting vector is orthogonal to both of the vectors you crossed. For the component unit vectors , and we get the cross products: , and .  The magnitude of the cross product is defined as This is why a vector crossed with itself is zero, since the angle between the a vector and itself zero and .     Applications of the Cross Product  We will close this section by looking at examples of using the cross product. One geometric and one physics related.   Area of a Parallelogram  The area of a parallelogram that is defined be vectors for two adjoining sides is equal to the magnitude of the cross product.   Area of a parallelogram             \\,\\,\\theta    \\mathbf{u}    \\mathbf{v}    ||\\mathbf{v}||\\sin(\\theta)            The area of a parallelogram is equal to base times height. As we can see in this figure, the base is the magnitude of , so the area is .  So given a parallelogram formed by the vectors and the area is and the magnitude of this vector is    The area of triangle where two sides are formed from adjoining vectors is half the area of a parallelogram so and the volume of a parallelepiped - the three-dimensional analog of a parallelogram is the magnitude of the scalar triple product. One final example to end this section.   Torque  Several things in physics are defined as a cross product, one of those is torque where is the radius of the axis of the object to be rotated and is the force, Torque measures the tendency of a force to produce rotation about an axis.  Suppose 6 Newton force is used to a tighten a bolt using a 15-centimeter wrench starting from an angle of 40 degrees from the horizontal. Find the amount of torque on the bolt.  We want to find the amount of torque which would be the magnitude of torque. We are given the magnitude of the force and the radius (wrench length), so that we can use the magnitude of the cross product formula. We also need to be careful about units. Force is measured in Newtons, so radius needs to be in meters (15 cm = 0.15 m) so that the result is in Newton-meters or Joules.     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on the cross product.    "
},
{
  "id": "section-9-3",
  "level": "2",
  "url": "section-9.html#section-9-3",
  "type": "Objectives",
  "number": "9",
  "title": "The Cross Product",
  "body": " The Cross Product   In this section we will look at:     The definition of the cross product    Properties of the cross product    Applications of the cross product    "
},
{
  "id": "subsec-def-cross-product-3-4",
  "level": "2",
  "url": "section-9.html#subsec-def-cross-product-3-4",
  "type": "Figure",
  "number": "9.1",
  "title": "",
  "body": " The easy way to calculate the cross product   "
},
{
  "id": "subsec-application-cross-product-3",
  "level": "2",
  "url": "section-9.html#subsec-application-cross-product-3",
  "type": "Example",
  "number": "9.2",
  "title": "Area of a Parallelogram.",
  "body": " Area of a Parallelogram  The area of a parallelogram that is defined be vectors for two adjoining sides is equal to the magnitude of the cross product.   Area of a parallelogram             \\,\\,\\theta    \\mathbf{u}    \\mathbf{v}    ||\\mathbf{v}||\\sin(\\theta)            The area of a parallelogram is equal to base times height. As we can see in this figure, the base is the magnitude of , so the area is .  So given a parallelogram formed by the vectors and the area is and the magnitude of this vector is   "
},
{
  "id": "subsec-application-cross-product-5",
  "level": "2",
  "url": "section-9.html#subsec-application-cross-product-5",
  "type": "Example",
  "number": "9.4",
  "title": "Torque.",
  "body": " Torque  Several things in physics are defined as a cross product, one of those is torque where is the radius of the axis of the object to be rotated and is the force, Torque measures the tendency of a force to produce rotation about an axis.  Suppose 6 Newton force is used to a tighten a bolt using a 15-centimeter wrench starting from an angle of 40 degrees from the horizontal. Find the amount of torque on the bolt.  We want to find the amount of torque which would be the magnitude of torque. We are given the magnitude of the force and the radius (wrench length), so that we can use the magnitude of the cross product formula. We also need to be careful about units. Force is measured in Newtons, so radius needs to be in meters (15 cm = 0.15 m) so that the result is in Newton-meters or Joules.   "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Section",
  "number": "10",
  "title": "Object in Three-Dimensional Space",
  "body": " Object in Three-Dimensional Space   For the rest of the quarter, we will be exploring objects in three-dimensional space. There are multiple ways to represent an object in three-dimensional space and depending on what you want to calculate, one of these ways is usually easier than the others. Another handy tool besides GeoGebra is . I will utilized this tool throughout this section and you may recognize it from the WAMAP login page!    Objects in 3D Space   In this section we will look at:     Multi-variable functions    Alternative coordinate systems    Sets of parametric equations    Vector-valued functions      Multi-variable Functions  We are used to writing functions for writing functions in two dimensions and maybe even are used to writing equations like in two dimensions. Extending this idea to three dimensions we can write functions like or . Here are a few common functions.   Planes  A plane can be written as a function: where and are constants or as an implicit equation: . Like the slope of a line and intercepts, the constants control the \"tilt\" of the plane and the intercepts. Here is a plot of the plane:    An example plane      Cylinders  A cylinder is simply a circle extended in a third dimension. The equation would describe a circle on the -plane and but in three dimensions this circle would extend infinitely in the -direction to form a cylinder. Here is a plot of the cylinder    An example cylinder      Spheres  The equation of a sphere is similar to the equation of a circle . Here is a plot of the sphere    An example sphere     Write three dimensional shapes using the familiar function notation or equations with the variables and works well when the shapes have flat sides or are defined by functions like exponentials, logarithms or powers. But for some shapes it is easier to change to a coordinate system that fits the shape.    Alternative Coordinate Systems  The variables and define a grid made of cubes where a point like (5, 1, -4) means start at the origin and move for squares in the positive direction, one sqaure in the positive direction and down 4 squares in he direction. This coordinate system is called the Cartesian coordinaes system (after Rene DeCarte) or the rectangular coordinate system since the origin and a given point would be opposite corners of a recatangle. There are two other common coordinate systems that we use: one defined by cyclinders and one defined by spheres.   Cylindircal Coordinates  This coordinate system is formed by circles in the -plane (polar coordinates) and keeping as the third dimension. To convert between the Cartesian coordinate system and cylindrical coordinates    Polar to Cartesian     Cartesian to Polar     In cyclindircal coordinates a cylinder is defiend as consant and a sphere is defined as . Another coordinate system is defined be a series of concentric spheres.   Spherical Coordinates  Spherical coordinates are defined by two angles. One angle going around the axis is which is the same in cylindiral and polar coordinates. A second angle is defined as the angle between the axis and a radius vector. This angle is . The third coordinate is the radius which extends from the radius to a point on the sphere and is called which looks like a \"p\" but is pronounced rho and makes the \"r\"-sound in Greek.   Spherical Coordinates     Spherical to Cartesian     Cartesian to Spherical      In spherical coordinates a sphere is simply defiend as constant.    Sets of Parametric Equations  Another way to define an object in three-dimensional space is by using a set of parametric equations. This defines a space curve. For parametric equations we first define a parameter, usually for time. As an example the set of parametric equations: draws a helix.   An example helix    More on parametric equations in future sections.    Vector-Valued Functions  A vector-valued function is simply a set of parametric equations written as the components of a vector. Such as . Evaluating this function at a value for creates a vector: . If we take to be time then would be a position vector. Vector-valued functions are very useful in calculus to define things like velocity and acceleration vectors and tangent vectors. We will explore this in the next few sections.  I would like to close this section by encouraging you to play around with which can not only plot 3D functions and space curves but can also plot vector-valued functions and you can also use cylindrical and spherical coordinates! This is tool that was made for this class. Here is a playlist of YouTube videos for using CalcPlot3D.   Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on different ways to think about three-dimensional objects.    "
},
{
  "id": "section-10-3",
  "level": "2",
  "url": "section-10.html#section-10-3",
  "type": "Objectives",
  "number": "10",
  "title": "Objects in 3D Space",
  "body": " Objects in 3D Space   In this section we will look at:     Multi-variable functions    Alternative coordinate systems    Sets of parametric equations    Vector-valued functions    "
},
{
  "id": "subsec-3d-functions-3",
  "level": "2",
  "url": "section-10.html#subsec-3d-functions-3",
  "type": "Example",
  "number": "10.1",
  "title": "Planes.",
  "body": " Planes  A plane can be written as a function: where and are constants or as an implicit equation: . Like the slope of a line and intercepts, the constants control the \"tilt\" of the plane and the intercepts. Here is a plot of the plane:    An example plane    "
},
{
  "id": "subsec-3d-functions-4",
  "level": "2",
  "url": "section-10.html#subsec-3d-functions-4",
  "type": "Example",
  "number": "10.3",
  "title": "Cylinders.",
  "body": " Cylinders  A cylinder is simply a circle extended in a third dimension. The equation would describe a circle on the -plane and but in three dimensions this circle would extend infinitely in the -direction to form a cylinder. Here is a plot of the cylinder    An example cylinder    "
},
{
  "id": "subsec-3d-functions-5",
  "level": "2",
  "url": "section-10.html#subsec-3d-functions-5",
  "type": "Example",
  "number": "10.5",
  "title": "Spheres.",
  "body": " Spheres  The equation of a sphere is similar to the equation of a circle . Here is a plot of the sphere    An example sphere    "
},
{
  "id": "assemblage-spherical-coordinates-3",
  "level": "2",
  "url": "section-10.html#assemblage-spherical-coordinates-3",
  "type": "Figure",
  "number": "10.7",
  "title": "",
  "body": " Spherical Coordinates   "
},
{
  "id": "subsec-parametrics-3",
  "level": "2",
  "url": "section-10.html#subsec-parametrics-3",
  "type": "Figure",
  "number": "10.8",
  "title": "",
  "body": " An example helix   "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Section",
  "number": "11",
  "title": "Vector-Valued Functions",
  "body": " Vector-Valued Functions   We will spend the next few sections looking vector-valued functions. As we saw in the last section, a vector-valued function is really just a set of parametric equations enclosed in a vector. Evaluating this function results in a vector. These are also called space curves.    Vector-Valued Functions   In this section we will look at:     Graphs of Vector-valued functions using GeoGebra, Desmos and CalcPlot3D.    Limits and continuity of vector-valued functions      Graphing Vector-Valued Functions  We will begin this section by looking at three tools for graphing vector valued functions.   GeoGebra 3D  To plot a space curve using GeoGebra 3D, use the command curve(f(t),g(t),h(t),t,start,end) . To plot the curve we would type in curve(tcos(t),t,tsin(t),t,0,10) and get the resulting plot.   A pace curve in GeoGebra 3D   A plot of t times cosine t, t, t times sine t created using Geo Gebra 3D      Desmos 3D  To plot a space curve using Desoms 3D, simply type the space curve components surrounded by parentheses. Desmos will automatically put _ _ below the equations where the user must fill in the start and end values. To plot the curve we would type in (tcos(t),t,tsin(t)) and then fill in the blanks with 0 and 10, and get the resulting plot.   A pace curve in Desmos 3D   A plot of t times cosine t, t, t times sine t created using Desmos 3D      CalcPlot3D  To plot a space curve using CalcPlot3D, select Space Curve: r(t) from the drop down menu. Then fill in the equations for and . You can then customize the domain, color, etc.   A pace curve in CalcPlot3D   A plot of t times cosine t, t, t times sine t created using CalcPlot3D       Limits and Continuity  Before we look at the calculus of vector-valued functions in the next two sections. We will look at the domain, limits and continuity of vector-valued functions.  The limit domain of a vector valued function is first found component-wise and then the domain of each component is combined into a single set of values for .   Consider the function   The domain of is . The domain of is . And the domain of is . Combining these gives a domain of .    Consider the function   The domain of is . The domain of is . And the domain of is . Combining these gives a domain of and .   The limit of a vector-valued function is also done component-wise. The limit of each component must exist for the overall limit to exist.   Consider the limit: The first limits is 1 due to the long-run behavior of rational functions. The second limit is due to the definition of the arctangent. The third limit is by one application of l'Hopital's rule.    Consider the limit: The first two limits are due to l'Hopital's rule and the third is by direct substitution.   Similar to a single-variable function, a vector-valued function is continuous if Which means that exists, i.e. is in the domain of . Also the limit must exist and finally the limit equals the function-value.   Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on vector-valued functions.    "
},
{
  "id": "section-11-3",
  "level": "2",
  "url": "section-11.html#section-11-3",
  "type": "Objectives",
  "number": "11",
  "title": "Vector-Valued Functions",
  "body": " Vector-Valued Functions   In this section we will look at:     Graphs of Vector-valued functions using GeoGebra, Desmos and CalcPlot3D.    Limits and continuity of vector-valued functions    "
},
{
  "id": "subsec-vvf-graphs-3",
  "level": "2",
  "url": "section-11.html#subsec-vvf-graphs-3",
  "type": "Example",
  "number": "11.1",
  "title": "GeoGebra 3D.",
  "body": " GeoGebra 3D  To plot a space curve using GeoGebra 3D, use the command curve(f(t),g(t),h(t),t,start,end) . To plot the curve we would type in curve(tcos(t),t,tsin(t),t,0,10) and get the resulting plot.   A pace curve in GeoGebra 3D   A plot of t times cosine t, t, t times sine t created using Geo Gebra 3D    "
},
{
  "id": "subsec-vvf-graphs-4",
  "level": "2",
  "url": "section-11.html#subsec-vvf-graphs-4",
  "type": "Example",
  "number": "11.3",
  "title": "Desmos 3D.",
  "body": " Desmos 3D  To plot a space curve using Desoms 3D, simply type the space curve components surrounded by parentheses. Desmos will automatically put _ _ below the equations where the user must fill in the start and end values. To plot the curve we would type in (tcos(t),t,tsin(t)) and then fill in the blanks with 0 and 10, and get the resulting plot.   A pace curve in Desmos 3D   A plot of t times cosine t, t, t times sine t created using Desmos 3D    "
},
{
  "id": "subsec-vvf-graphs-5",
  "level": "2",
  "url": "section-11.html#subsec-vvf-graphs-5",
  "type": "Example",
  "number": "11.5",
  "title": "CalcPlot3D.",
  "body": " CalcPlot3D  To plot a space curve using CalcPlot3D, select Space Curve: r(t) from the drop down menu. Then fill in the equations for and . You can then customize the domain, color, etc.   A pace curve in CalcPlot3D   A plot of t times cosine t, t, t times sine t created using CalcPlot3D    "
},
{
  "id": "subsec-vvf-limits-4",
  "level": "2",
  "url": "section-11.html#subsec-vvf-limits-4",
  "type": "Example",
  "number": "11.7",
  "title": "",
  "body": " Consider the function   The domain of is . The domain of is . And the domain of is . Combining these gives a domain of .  "
},
{
  "id": "subsec-vvf-limits-5",
  "level": "2",
  "url": "section-11.html#subsec-vvf-limits-5",
  "type": "Example",
  "number": "11.8",
  "title": "",
  "body": " Consider the function   The domain of is . The domain of is . And the domain of is . Combining these gives a domain of and .  "
},
{
  "id": "subsec-vvf-limits-7",
  "level": "2",
  "url": "section-11.html#subsec-vvf-limits-7",
  "type": "Example",
  "number": "11.9",
  "title": "",
  "body": " Consider the limit: The first limits is 1 due to the long-run behavior of rational functions. The second limit is due to the definition of the arctangent. The third limit is by one application of l'Hopital's rule.  "
},
{
  "id": "subsec-vvf-limits-8",
  "level": "2",
  "url": "section-11.html#subsec-vvf-limits-8",
  "type": "Example",
  "number": "11.10",
  "title": "",
  "body": " Consider the limit: The first two limits are due to l'Hopital's rule and the third is by direct substitution.  "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Section",
  "number": "12",
  "title": "Calculus of Vector-Valued Functions",
  "body": " Calculus of Vector-Valued Functions   Since limits are calculated component-wise for vector-valued functions, derivatives and integrals are also calculated component-wise    Calculus of Vector-Valued Functions   In this section we will look at:     Derivatives of vector-valued functions    Integrals of vector-valued functions      Derivatives of Vector-Valued Functions  To calculate the derivative of a vector-valued function, calculate the derivative of each component.   Consider the function: , then    We can also calculate with combinations of scalar functions and vector-valued functions. Here are the relevant rules.   Vector Differentiation Rules      Recall that be definition, the derivative is by definition te slope of a line tangent to a function at a given point. For vector-valued function, we can also create a tangent line but more often we are interested in creating a tangent vector.   Tangent Line to a Space Curve  Consider the space curve: at the point . plugging in the value gives the vector which is a vector of slopes. A point on the line is . The \"point-slope\" form of the tangent line would be .  Try plotting and together to see the tangent line and space curve!   For many applications, like those we will cover in the next section, it is more important to calculate a tangent vector and unit tangent vector. The unit tangent vector is is the principal unit vector. The unit tangent vector can be calculated for both two-dimensional and three-dimensional vectors.   Unit Tangent Vector  Consider the function: . Then   More on this in the next section.     Integrals of Vector-Valued Functions  Both integrals and antiderivatives can be calculated component-wise for vector-valued functions.   An Antiderivative   The second antiderivative is by the substitution and the third antiderivative was found using integration by parts.    A Definite Integral       Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on the calculus of vector-valued functions.    "
},
{
  "id": "section-12-3",
  "level": "2",
  "url": "section-12.html#section-12-3",
  "type": "Objectives",
  "number": "12",
  "title": "Calculus of Vector-Valued Functions",
  "body": " Calculus of Vector-Valued Functions   In this section we will look at:     Derivatives of vector-valued functions    Integrals of vector-valued functions    "
},
{
  "id": "subsec-vvf-derivatives-3",
  "level": "2",
  "url": "section-12.html#subsec-vvf-derivatives-3",
  "type": "Example",
  "number": "12.1",
  "title": "",
  "body": " Consider the function: , then   "
},
{
  "id": "subsec-vvf-derivatives-7",
  "level": "2",
  "url": "section-12.html#subsec-vvf-derivatives-7",
  "type": "Example",
  "number": "12.2",
  "title": "Tangent Line to a Space Curve.",
  "body": " Tangent Line to a Space Curve  Consider the space curve: at the point . plugging in the value gives the vector which is a vector of slopes. A point on the line is . The \"point-slope\" form of the tangent line would be .  Try plotting and together to see the tangent line and space curve!  "
},
{
  "id": "subsec-vvf-derivatives-9",
  "level": "2",
  "url": "section-12.html#subsec-vvf-derivatives-9",
  "type": "Example",
  "number": "12.3",
  "title": "Unit Tangent Vector.",
  "body": " Unit Tangent Vector  Consider the function: . Then   More on this in the next section.  "
},
{
  "id": "subsec-vvf-integrals-3",
  "level": "2",
  "url": "section-12.html#subsec-vvf-integrals-3",
  "type": "Example",
  "number": "12.4",
  "title": "An Antiderivative.",
  "body": " An Antiderivative   The second antiderivative is by the substitution and the third antiderivative was found using integration by parts.  "
},
{
  "id": "subsec-vvf-integrals-4",
  "level": "2",
  "url": "section-12.html#subsec-vvf-integrals-4",
  "type": "Example",
  "number": "12.5",
  "title": "A Definite Integral.",
  "body": " A Definite Integral     "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Section",
  "number": "13",
  "title": "Applications of Vector-Valued Functions",
  "body": " Applications of Vector-Valued Functions   Vector-valued functions or space curves are useful ways to analyze objects and motion in three-dimensional space.    Applications of Vector-Valued Functions   In this section we will look at:     Calculating arc length.    Calculating curvature.    The TNB frame    Motion in Space      Arclength  In Math 152 (Calculus II) you learned howto calculate arc length for a function, . Except for a few carefully crafted examples, arc length in general is difficult to calculate due the square root in the integral from the Pythagorean theorem. With vector-valued functions, we can write a more general formula for arc length that is easily extended to three dimensions.   Arc Length Formulas       Find the arc length of for .  Start by calculating the derivatives and Then arc length is     Find the arc length of for .  Start by calculating the derivatives , and Then arc length is    Notice in this last example, that the space \"curve\" was just a straight line and that the arc length was just the length of the line from to . In terms of vectors, we calculate the magnitude of the linear vector. In fact we can define an arc length function for any space curve called the arc length parametrization:    Find the arc length parametrization of the circle of radius 4 defined by  This defines a relationship between arc length and the original parameter . If we take this to mean time, than one revolution of the circle which takes radians of time to traverse would have an arc length (circumference) of .   This arc length parametrization is key to defining the next application: curvature.    Curvature  The curvature of a space curve is defined as where is the unit tangent vector and is the arc length parametrization of the curve. Alternatively arc length can be calculated using the following formulas: Here are three example videos on calculating curvature.   Calculating curvature using formula 1 (11 minutes)     Calculating curvature using formula 2 (12 minutes)     Calculating curvature using formula 3 (6 minutes)      The T-N-B Frame  We already know about the unit tangent vector, a vector with magnitude of one that points along the tangent line to a space curve. By definition, a unit vector and its derivative are orthogonal. We call this orthogonal unit vector the normal vector. We can then create a third unit vector that is orthogonal to both the unit tangent vector and the unit normal vector called the binormal vector by calculating a cross product. Recall that order matters when you calculate the cross product. It's always and .  These three vectors , and form a mini -like axis that changes as you move along with the curve this is called T-N-B frame or Frenet frame. Play around with following GeoGebra demonstration by moving the slider for and also trying out different functions.   The T-N-B frame in GeoGebra    Here is a longer video (43 minutes) with more details (and Lego) on the T-N-B frame.   TNB Frames (Frenet-Serret)      Motion in Three-Dimensional Space  For motion in space we are interest in position, velocity and acceleration. The relevant formulas are   Motion in Space  For a space curve  The last formulas is a break down of the acceleration vector in terms of the unit tangent and normal vectors. and . Here is a video that explains more about that.    Tangential and Normal components of Acceleration     Find given , and Here we need to integrate twice: Plugging the values from the initial velocity vector gives Integrating this velocity function gives the position function Plugging the values from the initial position vector gives  So the position vector function is .  Another application for motion in space is projectile motion. Here is a video about that. The first 22 minutes is a derivation of the formulas and the remaining 25 minutes is a baseball example. Feel free to skip to the example.   Projectile Motion    And just for fun here is a projectile motion lab frm the University of Colorado's PhET project. See if you can hit the target with a pumpkin!   Projectile Motion Lab   And finally, here is a video with many more examples.  Long Lecture (1 hour) on Motion in Space     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on motion in three dimensional space.    "
},
{
  "id": "section-13-3",
  "level": "2",
  "url": "section-13.html#section-13-3",
  "type": "Objectives",
  "number": "13",
  "title": "Applications of Vector-Valued Functions",
  "body": " Applications of Vector-Valued Functions   In this section we will look at:     Calculating arc length.    Calculating curvature.    The TNB frame    Motion in Space    "
},
{
  "id": "subsec-arclength-4",
  "level": "2",
  "url": "section-13.html#subsec-arclength-4",
  "type": "Example",
  "number": "13.1",
  "title": "",
  "body": " Find the arc length of for .  Start by calculating the derivatives and Then arc length is   "
},
{
  "id": "subsec-arclength-5",
  "level": "2",
  "url": "section-13.html#subsec-arclength-5",
  "type": "Example",
  "number": "13.2",
  "title": "",
  "body": " Find the arc length of for .  Start by calculating the derivatives , and Then arc length is   "
},
{
  "id": "subsec-arclength-7",
  "level": "2",
  "url": "section-13.html#subsec-arclength-7",
  "type": "Example",
  "number": "13.3",
  "title": "",
  "body": " Find the arc length parametrization of the circle of radius 4 defined by  This defines a relationship between arc length and the original parameter . If we take this to mean time, than one revolution of the circle which takes radians of time to traverse would have an arc length (circumference) of .  "
},
{
  "id": "subsec-curvature-3",
  "level": "2",
  "url": "section-13.html#subsec-curvature-3",
  "type": "Figure",
  "number": "13.4",
  "title": "",
  "body": " Calculating curvature using formula 1 (11 minutes)   "
},
{
  "id": "subsec-curvature-4",
  "level": "2",
  "url": "section-13.html#subsec-curvature-4",
  "type": "Figure",
  "number": "13.5",
  "title": "",
  "body": " Calculating curvature using formula 2 (12 minutes)   "
},
{
  "id": "subsec-curvature-5",
  "level": "2",
  "url": "section-13.html#subsec-curvature-5",
  "type": "Figure",
  "number": "13.6",
  "title": "",
  "body": " Calculating curvature using formula 3 (6 minutes)   "
},
{
  "id": "subsec-tnb-frame-4",
  "level": "2",
  "url": "section-13.html#subsec-tnb-frame-4",
  "type": "Figure",
  "number": "13.7",
  "title": "",
  "body": " The T-N-B frame in GeoGebra   "
},
{
  "id": "subsec-tnb-frame-6",
  "level": "2",
  "url": "section-13.html#subsec-tnb-frame-6",
  "type": "Figure",
  "number": "13.8",
  "title": "",
  "body": " TNB Frames (Frenet-Serret)   "
},
{
  "id": "subsec-3d-motion-4",
  "level": "2",
  "url": "section-13.html#subsec-3d-motion-4",
  "type": "Figure",
  "number": "13.9",
  "title": "",
  "body": " Tangential and Normal components of Acceleration   "
},
{
  "id": "subsec-3d-motion-5",
  "level": "2",
  "url": "section-13.html#subsec-3d-motion-5",
  "type": "Example",
  "number": "13.10",
  "title": "",
  "body": " Find given , and Here we need to integrate twice: Plugging the values from the initial velocity vector gives Integrating this velocity function gives the position function Plugging the values from the initial position vector gives  So the position vector function is . "
},
{
  "id": "subsec-3d-motion-7",
  "level": "2",
  "url": "section-13.html#subsec-3d-motion-7",
  "type": "Figure",
  "number": "13.11",
  "title": "",
  "body": " Projectile Motion   "
},
{
  "id": "subsec-3d-motion-9",
  "level": "2",
  "url": "section-13.html#subsec-3d-motion-9",
  "type": "Figure",
  "number": "13.12",
  "title": "",
  "body": " Projectile Motion Lab   "
},
{
  "id": "subsec-3d-motion-10",
  "level": "2",
  "url": "section-13.html#subsec-3d-motion-10",
  "type": "Figure",
  "number": "13.13",
  "title": "",
  "body": " Long Lecture (1 hour) on Motion in Space   "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Section",
  "number": "14",
  "title": "Multi-Variable Functions",
  "body": " Multi-Variable Functions   For the remaining of the quarter, we will be studying multi-variable functions . This section will serve as an introduction to multi-variable functions before looking at the calculus of multi-variable functions (derivatives and integals).    Multi-Variable Functions   In this section we will look at:     Graphing three-dimensional functions    Contour maps and level curves    Limits and continuity of multi-variable functions      Plots of Multi-Variable Functions  The graph of a multi-variable is a surface that changes \"height\" ( -variable) over the plane. This is difficult (at least for me) to draw accurately by hand, so we turn to a digital tool to help us. You can use GeoGebra 3D, Desmos 3D or CalcPlot3D to do this. For each tool simply type right side of the function into the input bar for the calculator. Here is an example of plots for the function from each of these tools.   GeoGebra 3D Example    a three dimensional plot of e to the quantity negative x squared minus y squared minus e to the quantity minus one minus x squared minus one minus y squared using geo gebra 3d      Desmos 3D Example    a three dimensional plot of e to the quantity negative x squared minus y squared minus e to the quantity minus one minus x squared minus one minus y squared using desmos 3d      CalcPlot3D Example    a three dimensional plot of e to the quantity negative x squared minus y squared minus e to the quantity minus one minus x squared minus one minus y squared using calc plot 3d       Contour Maps  Another type of plot that we can make is called a contour plot or topographical map. A level curve is a two-dimensional plot for a constant value of . This creates a slice of the surface parallel to the plane. Collecting graphs for various constants forms a two-dimensional plot where the level curves show the contours or topography of the three-dimensional surface. Here is an example plot generated by Wolfram Alpha (the best tool for contour maps) for the function .   An Example Contour Map    a three dimensional plot of cosine x times cosine y with its related contour plot generated by wolfram alpha.     Wolfram Alpha colors this map so that peaks are lighter in color and valleys are darker. Contour maps may also be labeled with the \"elevation\" or constant of each level curve like in this plot.   Another Contour Map    A contour plot of two hills with one hill labeled with elevations 10, 20, 30 and 40.     Here is a contour or topographic map of the Mauna Loa volcano in Hawaii. The contours or level curves are at increments at every 1000 feet as noted on the map. The scale of the -plane is given at the bottom in kilometers.   Mauna Loa Contour Map    A contour map of the mauna loa explained in more detail below.     From this contour we can note a few things. Concentric circles that have larger values as you move to the center represent a peak or maximum. Using the vocabulary you learned in Calculus I (Math 151), there are three local maximum values on this map. The main peak (Mauna Loa) near the center of the map with an elevation of over 13,000 feet. Another local maximum and slightly shorter peak (Mauna Kea) is just above this on the map with an elevation of over 12,000 feet. A third unnamed peak or local maximum is in the top left of the map with an elevation over 5000 feet.  Though not present on this map, a local minimum or valley would look similar but with decreasing values as you move to the center.  A feature not possible on the two-dimensional plots you studied in Math 151 is a saddle point. This is part of the graph shaped liked a saddle and the point is the place where you would sit on the saddle. On this map, if you draw a line from the peaks at Mauna Loa and Mauna Kea, and then travel north along this line, you would descend from Mauna Loa and then ascend to Mauna Kea where the approximate midpoint would be a minimum value between the peaks, But also at this point you would be at an elevation of about 7000 feet and if the traveled from this point east or west, you would descend again. So at this saddle point. If you look north or south you are looking uphill to one of the peaks, but if you look east or west, you look downhill. So this is mixture of minimum point in one direction and a maximum in other directions.  We will study maximum, minimum and saddle points further in a future section as an application of derivatives.  Two other things that contour maps tell up about a derivative are the rate of change and the directional derivative. If we start one again at the top of the peak of Mauna Loa and draw a line pointing to the right (east). If our line is 40 kilometers long, using the scale along the bottom, this line would extend from the peak at Mauna Loa to a point near the contour at 3000 feet. Along this line we have lost about 10,000 feet in elevation over 40 kilometers giving an average rate of change of -10,000\/40 = -250 feet per kilometer. If we travel along a 40-kilometer line south instead we descend to an elevation of 1000 feet, giving a rate of change of -12,000\/40 = -300 feet per kilometer. The line south has more contour lines closer together giving a steeper descent than the line east. How steep the descent or accent is measured be the derivative (instantaneous rate of change). This can be different in different directions. It is natural to look at the derivative in the and directions, we can form a derivative in any direction. We will see how to do this in a future section.   Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on multi-variable functions    Just for Fun  Create your own 3D surface with origami!    Folding a Hyperbolic Parabola      Limits and Continuity of Three-Dimensional Functions  Before we look at more about derivatives, we will close this section looking at limits and continuity (and domain) for multi-valued functions. Just like for single-variable functions in Math 151, the multi-variable functions we will grow to know and love (exponential, logarithm, trigonometric, square root, etc.) are continuous on their domains. Here are three examples of finding the domain of a multi-variable function.   Find the domain of the function: .  Since the function inside a logarithm must be positive for the logarithm to be defined, we must have This defines a region in the plane shaped like a parabola with a vertex at the origin and opening to the right. The domain is the region inside this parabola.    Find the domain of the function: .  Since the function does not include a logarithm, square root or denominator that would restrict the domain, the domain is the entire plane. Mathematicians shorthand this with pronounced \"artoo\" like everyone's favorite droid from Star Wars.    Find the domain of the function: .  Since the function inside a square root must be non-negative, we must have Since is a circle in the plane, the domain is the region on or outside the circle.   Knowing the domain of our function is the same as knowing where a function is continuous for the functions that we will be studying. It can be more complicated for some special types of functions like piece-wise defined functions or other strange functions that mathematicians have dreamed up. We can formally define continuity using the usual calculus definition that a function is continuos at a point if Note that when we calculate limits for multi-variable functions, we take a limit for both and at the same time. This leads to a new possibility to consider for limits that we will see in the final example below.   Calculate the limit Since this function has no restrictions on the domain since the denominator is always positive, we can calculate the limit by direct substitution.     Calculate the limit For this function . But we can rewrite this function as a product of and functions     Calculate the limit This function is only undefined at the origin, which is also our limiting point. If we approach this limit from different directions, we will get different results.  Along the different paths to the origin, we get different results. This is analogous to the right and left-hand limits not being equal in Calculus I. If we get different results from different \"sides\" then the limit does not exist! Try graphing this to explore what is happening at the origin for this function.    Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on limits of multi-variable functions.    "
},
{
  "id": "section-14-3",
  "level": "2",
  "url": "section-14.html#section-14-3",
  "type": "Objectives",
  "number": "14",
  "title": "Multi-Variable Functions",
  "body": " Multi-Variable Functions   In this section we will look at:     Graphing three-dimensional functions    Contour maps and level curves    Limits and continuity of multi-variable functions    "
},
{
  "id": "subsec-3d-graphs-3",
  "level": "2",
  "url": "section-14.html#subsec-3d-graphs-3",
  "type": "Figure",
  "number": "14.1",
  "title": "",
  "body": " GeoGebra 3D Example    a three dimensional plot of e to the quantity negative x squared minus y squared minus e to the quantity minus one minus x squared minus one minus y squared using geo gebra 3d    "
},
{
  "id": "subsec-3d-graphs-4",
  "level": "2",
  "url": "section-14.html#subsec-3d-graphs-4",
  "type": "Figure",
  "number": "14.2",
  "title": "",
  "body": " Desmos 3D Example    a three dimensional plot of e to the quantity negative x squared minus y squared minus e to the quantity minus one minus x squared minus one minus y squared using desmos 3d    "
},
{
  "id": "subsec-3d-graphs-5",
  "level": "2",
  "url": "section-14.html#subsec-3d-graphs-5",
  "type": "Figure",
  "number": "14.3",
  "title": "",
  "body": " CalcPlot3D Example    a three dimensional plot of e to the quantity negative x squared minus y squared minus e to the quantity minus one minus x squared minus one minus y squared using calc plot 3d    "
},
{
  "id": "subsec-contour-maps-3",
  "level": "2",
  "url": "section-14.html#subsec-contour-maps-3",
  "type": "Figure",
  "number": "14.4",
  "title": "",
  "body": " An Example Contour Map    a three dimensional plot of cosine x times cosine y with its related contour plot generated by wolfram alpha.    "
},
{
  "id": "subsec-contour-maps-5",
  "level": "2",
  "url": "section-14.html#subsec-contour-maps-5",
  "type": "Figure",
  "number": "14.5",
  "title": "",
  "body": " Another Contour Map    A contour plot of two hills with one hill labeled with elevations 10, 20, 30 and 40.    "
},
{
  "id": "subsec-contour-maps-7",
  "level": "2",
  "url": "section-14.html#subsec-contour-maps-7",
  "type": "Figure",
  "number": "14.6",
  "title": "",
  "body": " Mauna Loa Contour Map    A contour map of the mauna loa explained in more detail below.    "
},
{
  "id": "subsec-contour-maps-15",
  "level": "2",
  "url": "section-14.html#subsec-contour-maps-15",
  "type": "Figure",
  "number": "14.7",
  "title": "",
  "body": " Folding a Hyperbolic Parabola   "
},
{
  "id": "subsec-3d-limits-3",
  "level": "2",
  "url": "section-14.html#subsec-3d-limits-3",
  "type": "Example",
  "number": "14.8",
  "title": "",
  "body": " Find the domain of the function: .  Since the function inside a logarithm must be positive for the logarithm to be defined, we must have This defines a region in the plane shaped like a parabola with a vertex at the origin and opening to the right. The domain is the region inside this parabola.  "
},
{
  "id": "subsec-3d-limits-4",
  "level": "2",
  "url": "section-14.html#subsec-3d-limits-4",
  "type": "Example",
  "number": "14.9",
  "title": "",
  "body": " Find the domain of the function: .  Since the function does not include a logarithm, square root or denominator that would restrict the domain, the domain is the entire plane. Mathematicians shorthand this with pronounced \"artoo\" like everyone's favorite droid from Star Wars.  "
},
{
  "id": "subsec-3d-limits-5",
  "level": "2",
  "url": "section-14.html#subsec-3d-limits-5",
  "type": "Example",
  "number": "14.10",
  "title": "",
  "body": " Find the domain of the function: .  Since the function inside a square root must be non-negative, we must have Since is a circle in the plane, the domain is the region on or outside the circle.  "
},
{
  "id": "subsec-3d-limits-7",
  "level": "2",
  "url": "section-14.html#subsec-3d-limits-7",
  "type": "Example",
  "number": "14.11",
  "title": "",
  "body": " Calculate the limit Since this function has no restrictions on the domain since the denominator is always positive, we can calculate the limit by direct substitution.   "
},
{
  "id": "subsec-3d-limits-8",
  "level": "2",
  "url": "section-14.html#subsec-3d-limits-8",
  "type": "Example",
  "number": "14.12",
  "title": "",
  "body": " Calculate the limit For this function . But we can rewrite this function as a product of and functions   "
},
{
  "id": "subsec-3d-limits-9",
  "level": "2",
  "url": "section-14.html#subsec-3d-limits-9",
  "type": "Example",
  "number": "14.13",
  "title": "",
  "body": " Calculate the limit This function is only undefined at the origin, which is also our limiting point. If we approach this limit from different directions, we will get different results.  Along the different paths to the origin, we get different results. This is analogous to the right and left-hand limits not being equal in Calculus I. If we get different results from different \"sides\" then the limit does not exist! Try graphing this to explore what is happening at the origin for this function.  "
},
{
  "id": "section-15",
  "level": "1",
  "url": "section-15.html",
  "type": "Section",
  "number": "15",
  "title": "Partial Derivatives",
  "body": " Partial Derivatives   For multi-variable functions, we need to take a derivative for each variable. These derivatives are called partial derivatives. Fortunately we already know all of the derivative rules from Math 151, so we move quickly through this section to applications in the next section.    Partial Derivatives   In this section we will look at:     Notation for partial derivatives.    Higher-order and mixed partial derivatives.    The chain rule      Notation  Partial derivatives are denoted with \"curly\" d's instead of straight d's like ordinary derivatives. So the partial derivatives with respect to and are denoted as This is can challenging to write for those with less than neat handwriting and is also difficult to typeset. An alternative, easier notation is to use the a subscript for the derivatives. This subscript notation is also much easier for second or other higher-order derivatives.  When we take a partial derivative, we simply take the derivative for the given variable while treating the other variable as a constant.   Consider the function . The partial derivatives are     Consider the function . The partial derivatives are     Consider the function . The partial derivatives are     Consider the function . The partial derivatives are      Mixed Partial Derivatives  Since we have two partial derivatives for a function with two input variables we can then calculate two derivatives from each of these derivatives. Using the subscript notation, we would write for the second partial derivative with respect to and for the partial derivative first with respect to and second with respect to . Since we are mixing variables for this second derivative, this is called a mixed partial derivative.   Consider the function Then the first and second order partial derivatives are: Notice that the mixed partial derivatives are equal.   Mixed partial derivatives are always equal. This is known as Clairaut's Theorem. Not only does but other higher-order mixed partials are also equal, so (all of the mixed partials with one derivative with respect to and three derivatives with respect to ).   Calculate for the function   By Clairaut's theorem, we can calculate two derivatives with respect to and one derivative with respect to in order. For this function, it is easier to calculate derivatives with respect to , we will start there:    Here is a video with more examples.   Partial Derivative Examples (18 minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on partial derivatives.     The Chain Rule  For the chain rule it is more convenient to use Leibniz (curly d) notation. For function where is the \"inside\" variable. By the chain rule    Calculate for the function where and . Start be calculating the derivatives with respect to and . Now calculate the derivatives with respect to . Plugging it all into the chain rule formula gives:     For inside functions of two-variables the chain rule for is and   Here is a video with more examples.   Partial Derivative Examples (21 minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on the chain rule.    "
},
{
  "id": "section-15-3",
  "level": "2",
  "url": "section-15.html#section-15-3",
  "type": "Objectives",
  "number": "15",
  "title": "Partial Derivatives",
  "body": " Partial Derivatives   In this section we will look at:     Notation for partial derivatives.    Higher-order and mixed partial derivatives.    The chain rule    "
},
{
  "id": "subsec-pd-notation-4",
  "level": "2",
  "url": "section-15.html#subsec-pd-notation-4",
  "type": "Example",
  "number": "15.1",
  "title": "",
  "body": " Consider the function . The partial derivatives are   "
},
{
  "id": "subsec-pd-notation-5",
  "level": "2",
  "url": "section-15.html#subsec-pd-notation-5",
  "type": "Example",
  "number": "15.2",
  "title": "",
  "body": " Consider the function . The partial derivatives are   "
},
{
  "id": "subsec-pd-notation-6",
  "level": "2",
  "url": "section-15.html#subsec-pd-notation-6",
  "type": "Example",
  "number": "15.3",
  "title": "",
  "body": " Consider the function . The partial derivatives are   "
},
{
  "id": "subsec-pd-notation-7",
  "level": "2",
  "url": "section-15.html#subsec-pd-notation-7",
  "type": "Example",
  "number": "15.4",
  "title": "",
  "body": " Consider the function . The partial derivatives are   "
},
{
  "id": "subsec-higher-order-partials-3",
  "level": "2",
  "url": "section-15.html#subsec-higher-order-partials-3",
  "type": "Example",
  "number": "15.5",
  "title": "",
  "body": " Consider the function Then the first and second order partial derivatives are: Notice that the mixed partial derivatives are equal.  "
},
{
  "id": "subsec-higher-order-partials-5",
  "level": "2",
  "url": "section-15.html#subsec-higher-order-partials-5",
  "type": "Example",
  "number": "15.6",
  "title": "",
  "body": " Calculate for the function   By Clairaut's theorem, we can calculate two derivatives with respect to and one derivative with respect to in order. For this function, it is easier to calculate derivatives with respect to , we will start there:   "
},
{
  "id": "subsec-higher-order-partials-7",
  "level": "2",
  "url": "section-15.html#subsec-higher-order-partials-7",
  "type": "Figure",
  "number": "15.7",
  "title": "",
  "body": " Partial Derivative Examples (18 minutes)   "
},
{
  "id": "subsec-pd-chain-rule-3",
  "level": "2",
  "url": "section-15.html#subsec-pd-chain-rule-3",
  "type": "Example",
  "number": "15.8",
  "title": "",
  "body": " Calculate for the function where and . Start be calculating the derivatives with respect to and . Now calculate the derivatives with respect to . Plugging it all into the chain rule formula gives:    "
},
{
  "id": "subsec-pd-chain-rule-6",
  "level": "2",
  "url": "section-15.html#subsec-pd-chain-rule-6",
  "type": "Figure",
  "number": "15.9",
  "title": "",
  "body": " Partial Derivative Examples (21 minutes)   "
},
{
  "id": "section-16",
  "level": "1",
  "url": "section-16.html",
  "type": "Section",
  "number": "16",
  "title": "Applications of Partial Derivatives",
  "body": " Applications of Partial Derivatives   In this section, we turn our attention so applications of partial derivatives.    Applications of Partial Derivatives   In this section we will look at:     Calculating a tangent plane at a point.    Linear approximation in higher dimensions.    Directional derivatives and the gradient vector.    The second derivative test in three dimensions.      Tangent Planes  Similar to a tangent line in two-dimensions, we can form a tangent plane in three-dimensions (or a hyperplane in higher dimensions). The equation of a tangent plane at the point is    Find the plane tangent to at the point (2, 1). Start by calculating the partial derivatives Plug the point into the original function and partial derivatives. Plugging it all into the tangent plane formula and get    Here is a video with another examples.   Tangent Planes (6 minutes)      Linear Approximation  The tangent plane also defines a linear approximation (or first-degree Taylor approximation) of at a given point.   Estimate using a linear approximation. We can define a function . is easily calculated, so we will use the point (2,3). The linear approximation, calculated in the same steps as the last example, is: Plugging (2.01, 1.02) into the linear approximation gives  , so our approximation matches the first two decimal places.    Let defines a person's body mass index (BMI), where is a person's weight in kilograms and is a person's height in meters. Find the approximate BMI for a person weighs 89.7 kilograms and is 1.98 kilometers (198 centimeters) tall. The point gives a BMI of . Calculating the derivatives and writing out the linear approximation gives: So    Here is a video with another examples.   Linear Approximation (10 minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on tangent planes and linear approximation.     The Directional Derivative and Gradient Vector  A directional derivative, is a partial derivative that points along the vector . Note that is a vector. Recall that a vector has a magnitude (which equals 1 for the directional derivative) and direction and that to write a vector in component form given the vector's direction and magnitude, you get . We will do something similar for the directional derivative where the partial derivatives play the role of the magnitude. The directional derivative along the unit vector with direction is:    Find the directional derivative of in the direction .  Calculate the partial derivatives Then the directional derivative is:     Find the directional derivative of along the vector .  Calculate the partial derivatives Next find the direction of the vector Then the directional derivative is:    Another way to define the directional derivative is using the gradient, The gradient vector is defined as . is read as \"del f\". Del and the gradient will be used often in Calculus IV. The directional derivative may also be defined using the gradient as .  The gradient may also be used to find a plane tangent to a surface. Given a surface defined by an equation  where is a constant, then the tangent plane at point is . For a function we can rewrite this as . The dot product here produces the same formula for the tangent plane given earlier.  Here is a video with more examples.   Directional Derivative and Gradient (28 minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on the directional derivative.     The Second Derivative Test  Finally, one of the most important applications is optimization; finding a maximum and minimum. In Calculus I (Math 151) we saw three ways to optimize a function using derivatives: the Extreme Value Theorem, the First Derivative Test and the Second Derivative Test. There is a multi-variable analog to the Extreme Value Theorem, called Lagrange multipliers that we will look at it in the next section. Recall that the First Derivative Test looks at what happens to the sign (positive or negative) of a derivative around a critical value as you move along number line from left to right. Since we can move from left to right (along the -axis) along different lines in three dimensions, this would produce an infinite amount of results, so the First Derivative does not work in higher dimensions.  The Second Derivative Test, which use concavity to find local maximum and minimum values, does work in three dimensions. Similar to the single-variable version of the Second Derivative Test, we first find critical points and then plug them into the second derivative to test their concavity. Critical points in three dimensions are defined as points where: At a critical value, if the three-dimensional surface, is concave up in all directions, then you are at a local minimum and if the surface is concave down in all directions, then you are at a local maximum. If you are concave up in some directions but concave down in other directions, then you are at a saddle point. Since there are both mixed, second partial derivatives and second partial derivatives of a single variable, we also define the discriminant for the second derivatives to tell us the concavity at a point as: Then the Second Derivative Test is:   Second Derivative Test  Let be a critical point of and be the discriminant of , then if:     Find and classify the critical points for the function .  Start by taking te partial derivatives: Next find the critical points. (This is usually the most work for these problems.)     Plug these into the discriminant and second derivative to get Try plotting this surface to verify the solutions.    Find and classify the critical points for the function .  Start by taking te partial derivatives: Next find the critical points.  The only critical point is (-1,2) Plug this into the discriminant and second derivative to get So (-1, 2) is a local minimum.    A shipping company handles rectangular boxes provided the sum of the length, width, and height of the box does not exceed 96 inches. Find the dimensions of the box that meets this condition and has the largest volume.  Define two equations based on the given information. Solve the first equation for one of the variables and plug the result into the second equation, eliminating one of the variables. I will eliminate . This is the equation we will maximize. Find the critical values Which gives one critical point at (0,0). Solve for and plug it into the second for the second equation to get Which when substituted back in the first equation gives and we get a second critical point at (32,32). The critical point at (0, 0) gives a volume of zero, which in the context of the problem is the minimum possible volume. and and (32, 32) is at a local maximum. The maximum volume occurs when for a maximum volume of cubic inches.   Here is a video with a few more examples:   Second Derivative Test     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on optimization.    "
},
{
  "id": "section-16-3",
  "level": "2",
  "url": "section-16.html#section-16-3",
  "type": "Objectives",
  "number": "16",
  "title": "Applications of Partial Derivatives",
  "body": " Applications of Partial Derivatives   In this section we will look at:     Calculating a tangent plane at a point.    Linear approximation in higher dimensions.    Directional derivatives and the gradient vector.    The second derivative test in three dimensions.    "
},
{
  "id": "subsec-tangent-plane-3",
  "level": "2",
  "url": "section-16.html#subsec-tangent-plane-3",
  "type": "Example",
  "number": "16.1",
  "title": "",
  "body": " Find the plane tangent to at the point (2, 1). Start by calculating the partial derivatives Plug the point into the original function and partial derivatives. Plugging it all into the tangent plane formula and get   "
},
{
  "id": "subsec-tangent-plane-5",
  "level": "2",
  "url": "section-16.html#subsec-tangent-plane-5",
  "type": "Figure",
  "number": "16.2",
  "title": "",
  "body": " Tangent Planes (6 minutes)   "
},
{
  "id": "subsec-linear-approximation-3",
  "level": "2",
  "url": "section-16.html#subsec-linear-approximation-3",
  "type": "Example",
  "number": "16.3",
  "title": "",
  "body": " Estimate using a linear approximation. We can define a function . is easily calculated, so we will use the point (2,3). The linear approximation, calculated in the same steps as the last example, is: Plugging (2.01, 1.02) into the linear approximation gives  , so our approximation matches the first two decimal places.  "
},
{
  "id": "subsec-linear-approximation-4",
  "level": "2",
  "url": "section-16.html#subsec-linear-approximation-4",
  "type": "Example",
  "number": "16.4",
  "title": "",
  "body": " Let defines a person's body mass index (BMI), where is a person's weight in kilograms and is a person's height in meters. Find the approximate BMI for a person weighs 89.7 kilograms and is 1.98 kilometers (198 centimeters) tall. The point gives a BMI of . Calculating the derivatives and writing out the linear approximation gives: So   "
},
{
  "id": "subsec-linear-approximation-6",
  "level": "2",
  "url": "section-16.html#subsec-linear-approximation-6",
  "type": "Figure",
  "number": "16.5",
  "title": "",
  "body": " Linear Approximation (10 minutes)   "
},
{
  "id": "subsec-gradient-3",
  "level": "2",
  "url": "section-16.html#subsec-gradient-3",
  "type": "Example",
  "number": "16.6",
  "title": "",
  "body": " Find the directional derivative of in the direction .  Calculate the partial derivatives Then the directional derivative is:   "
},
{
  "id": "subsec-gradient-4",
  "level": "2",
  "url": "section-16.html#subsec-gradient-4",
  "type": "Example",
  "number": "16.7",
  "title": "",
  "body": " Find the directional derivative of along the vector .  Calculate the partial derivatives Next find the direction of the vector Then the directional derivative is:   "
},
{
  "id": "subsec-gradient-8",
  "level": "2",
  "url": "section-16.html#subsec-gradient-8",
  "type": "Figure",
  "number": "16.8",
  "title": "",
  "body": " Directional Derivative and Gradient (28 minutes)   "
},
{
  "id": "subsec-3d-optimization-5",
  "level": "2",
  "url": "section-16.html#subsec-3d-optimization-5",
  "type": "Example",
  "number": "16.9",
  "title": "",
  "body": " Find and classify the critical points for the function .  Start by taking te partial derivatives: Next find the critical points. (This is usually the most work for these problems.)     Plug these into the discriminant and second derivative to get Try plotting this surface to verify the solutions.  "
},
{
  "id": "subsec-3d-optimization-6",
  "level": "2",
  "url": "section-16.html#subsec-3d-optimization-6",
  "type": "Example",
  "number": "16.10",
  "title": "",
  "body": " Find and classify the critical points for the function .  Start by taking te partial derivatives: Next find the critical points.  The only critical point is (-1,2) Plug this into the discriminant and second derivative to get So (-1, 2) is a local minimum.  "
},
{
  "id": "subsec-3d-optimization-7",
  "level": "2",
  "url": "section-16.html#subsec-3d-optimization-7",
  "type": "Example",
  "number": "16.11",
  "title": "",
  "body": " A shipping company handles rectangular boxes provided the sum of the length, width, and height of the box does not exceed 96 inches. Find the dimensions of the box that meets this condition and has the largest volume.  Define two equations based on the given information. Solve the first equation for one of the variables and plug the result into the second equation, eliminating one of the variables. I will eliminate . This is the equation we will maximize. Find the critical values Which gives one critical point at (0,0). Solve for and plug it into the second for the second equation to get Which when substituted back in the first equation gives and we get a second critical point at (32,32). The critical point at (0, 0) gives a volume of zero, which in the context of the problem is the minimum possible volume. and and (32, 32) is at a local maximum. The maximum volume occurs when for a maximum volume of cubic inches.  "
},
{
  "id": "subsec-3d-optimization-9",
  "level": "2",
  "url": "section-16.html#subsec-3d-optimization-9",
  "type": "Figure",
  "number": "16.12",
  "title": "",
  "body": " Second Derivative Test   "
},
{
  "id": "section-17",
  "level": "1",
  "url": "section-17.html",
  "type": "Section",
  "number": "17",
  "title": "Lagrange Multipliers",
  "body": " Lagrange Multipliers   The method of Lagrange multipliers is a way to solve an optimization problem for a multi-variable function subject to one or more constraint equations. The method is named after the French mathematician Joseph-Louis Lagrange who formulated the method in the 18th century. Lagrange also formulated the mean value theorem and succeeded Euler at the Berlin Academy at the invitation of Frederick the Great. His name is also one of the 72 great French men of science on the Eiffel tower. (The names of 72 great French women of science are currently being added.)    Lagrange Multipliers   In this section we will look at:     Look at an example of using Lagrange multipliers.    Learn a method for using a spreadsheet to solve an optimization problem.      A Lagrange Multipliers by Hand  The method of Lagrange multipliers adds an extra variable, the Lagrange multiplier and usually denoted with for each constraint equation, setting up a system of equations where we solve for the value of the variables and the Lagrange multiplier at the maximum or minimum for a given function. So if we have a function, that we want to optimize that is subject to a constraint equation , then the Lagrange multiplier is used in the equation . This generates three equations and four unknowns. Adding the constraint equation gives a fourth equation, so overall, we would have system with four equations and four unknowns to solve.   Find the extreme values of the function on the circle .   plus the constraint equation gives the three equations:   From the first equation we have or . If , then the last equation gives .  If , then the second equation gives . Plugging this in the last equation gives .  So we have four solution points: (0, 1), (0, -1), (1, 0) and (-1, 0). Evaluating at these four points gives maximum values for of 2 at (0, 1) and (0,-1) and minimum values of 1 at (1, 0) and (-1, 0).  This process of Lagrange multipliers is straightforward but can be laborious. Fortunately, there is a way for Excel to do the work for us!     Using Excel for Optimization with Constraints  Please watch the following videos that will show you some examples on how to use Excel to optimize using Lagrange multipliers. This method uses a Solver built into Excel. Frontline Systems, the company the makes the standard add-ons for Excel, used to provide there add-ons for Google sheets as well, but it appears that Google sheets no longer supports the Frontline Solver. Fortunately, Green River students can get a free! copy of Excel. Here are the on how you can download your free copy of Microsoft office.   Lagrange Multipliers Example 1 (11 minutes).     Lagrange Multipliers Example 2 (9 minutes).     Lagrange Multipliers Example 3 (6 minutes).     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on Lagrange multipliers.    "
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
  "id": "subsec-lagrange-multipliers-by-hand-3",
  "level": "2",
  "url": "section-17.html#subsec-lagrange-multipliers-by-hand-3",
  "type": "Example",
  "number": "17.1",
  "title": "",
  "body": " Find the extreme values of the function on the circle .   plus the constraint equation gives the three equations:   From the first equation we have or . If , then the last equation gives .  If , then the second equation gives . Plugging this in the last equation gives .  So we have four solution points: (0, 1), (0, -1), (1, 0) and (-1, 0). Evaluating at these four points gives maximum values for of 2 at (0, 1) and (0,-1) and minimum values of 1 at (1, 0) and (-1, 0).  This process of Lagrange multipliers is straightforward but can be laborious. Fortunately, there is a way for Excel to do the work for us!  "
},
{
  "id": "subsec-using-excel-for-lagrange-multipliers-3",
  "level": "2",
  "url": "section-17.html#subsec-using-excel-for-lagrange-multipliers-3",
  "type": "Figure",
  "number": "17.2",
  "title": "",
  "body": " Lagrange Multipliers Example 1 (11 minutes).   "
},
{
  "id": "subsec-using-excel-for-lagrange-multipliers-4",
  "level": "2",
  "url": "section-17.html#subsec-using-excel-for-lagrange-multipliers-4",
  "type": "Figure",
  "number": "17.3",
  "title": "",
  "body": " Lagrange Multipliers Example 2 (9 minutes).   "
},
{
  "id": "subsec-using-excel-for-lagrange-multipliers-5",
  "level": "2",
  "url": "section-17.html#subsec-using-excel-for-lagrange-multipliers-5",
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
  "body": " Double Integrals   We now turn our intentions to integration. Recall from Calculus II (Math 152) how we used integral to calculate the area between a function and the -axis. We took an area like this:   Area under curve    A figure showing the area between a curve and the x-axis shaded and labeled as A1 (positive area) and A2 (negative area)     and using rectangles to estimate the area. As we increase the number of rectangles, we improve the estimate and when we let the number of integral approach infinity (calculus!) we get the exact area that we call the (definite) integral.   Area under curve    A figure showing are between a curve and the x-axis approximated by seven rectangles.     We will now see how this idea can be extended to three dimensions    Double Integrals   In this section we will look at:     Calculating double integrals over rectangles    Iterated integrals and their properties      Double Integrals over Rectangles  In three dimensions, instead of calculating area under the curve, we calculate the volume between a surface and the plane. In a similar way to area in Math 152, we can divide a rectangle in the plane into smaller rectangle and use these as the base for a box. The height of the box is found using a value. If we add up the area of all of the boxes, we get an estimate for the volume. Here is an example of the volume under the surface with 100 boxes to estimate the volume.   Area under curve    A figure showing volume being estimated by boxes under surface.     Similar to area, volume below the plane is negative due to the negative \"height\". When we increase the number of boxes toward infinity (calculus again!) we get the exact area between a surface and the -plane. This sets up a double integral. The small rectangles that form the bases of the boxes in the plane have sides and and area . The function, provides a height, so the double integral by definition calculates a volume. Similar to partial derivatives, double integrals are calculated using antiderivatives one variable at a time while holding the second variable as a constant. We work from the inside out and plug in the limits of integration to evaluate the integral and get our final result (Fundamental Theorem of Calculus). Here is an example   Evaluate Start by calculating the inside integral with respect to while holding as a constant Now calculate the integral with respect to .    This process of integrating one variable at a time is also called iterated integration and is always calculated starting with the inner most integral. This will be extended to triple integrals in Calculus IV. Here is a video with a few more examples   Double Integrals (25 minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on double integrals.     Iterated Integrals  Iterated Integrals have one important property known as Fubini's Theorem. For a rectangular region in the plane , In other words, for rectangular regions only, you can switch the order of integration and get the same result. The situation is a little bit more complicated for regions that are now rectangles, and we will look at this in the next section.  Another more specialized property that we will occasionally use is when the multi-variable function can be written as product of single-variable functions. If then Here are a few more examples   Evaluate Here the multi-variable function is the product of functions of each variable so      Evaluate Here we begin be integrating with respect to since is the \"inside\" variable ( is to the left of ). Now calculate the integral with respect to      Find the volume under the surface over the region . Since we get to choose the order of integration, let's think about this order is easier if we calculated we would begin by substituting and which would cancel out the in front of the exponential.  If we instead calculate we would begin by using integration by parts with the variable . This would turn into a complicated mess. So let's proceed with the original order.  Making the substitution  Calculate the integral with respect to now    And here is a video with one final example:   An iterated integral example (9 minutes)     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on double integrals.    "
},
{
  "id": "section-18-2-2",
  "level": "2",
  "url": "section-18.html#section-18-2-2",
  "type": "Figure",
  "number": "18.1",
  "title": "",
  "body": " Area under curve    A figure showing the area between a curve and the x-axis shaded and labeled as A1 (positive area) and A2 (negative area)    "
},
{
  "id": "section-18-2-4",
  "level": "2",
  "url": "section-18.html#section-18-2-4",
  "type": "Figure",
  "number": "18.2",
  "title": "",
  "body": " Area under curve    A figure showing are between a curve and the x-axis approximated by seven rectangles.    "
},
{
  "id": "section-18-3",
  "level": "2",
  "url": "section-18.html#section-18-3",
  "type": "Objectives",
  "number": "18",
  "title": "Double Integrals",
  "body": " Double Integrals   In this section we will look at:     Calculating double integrals over rectangles    Iterated integrals and their properties    "
},
{
  "id": "subsec-double-integrals-rectangles-3",
  "level": "2",
  "url": "section-18.html#subsec-double-integrals-rectangles-3",
  "type": "Figure",
  "number": "18.3",
  "title": "",
  "body": " Area under curve    A figure showing volume being estimated by boxes under surface.    "
},
{
  "id": "subsec-double-integrals-rectangles-5",
  "level": "2",
  "url": "section-18.html#subsec-double-integrals-rectangles-5",
  "type": "Example",
  "number": "18.4",
  "title": "",
  "body": " Evaluate Start by calculating the inside integral with respect to while holding as a constant Now calculate the integral with respect to .   "
},
{
  "id": "subsec-double-integrals-rectangles-7",
  "level": "2",
  "url": "section-18.html#subsec-double-integrals-rectangles-7",
  "type": "Figure",
  "number": "18.5",
  "title": "",
  "body": " Double Integrals (25 minutes)   "
},
{
  "id": "subsec-iterated-integrals-4",
  "level": "2",
  "url": "section-18.html#subsec-iterated-integrals-4",
  "type": "Example",
  "number": "18.6",
  "title": "",
  "body": " Evaluate Here the multi-variable function is the product of functions of each variable so    "
},
{
  "id": "subsec-iterated-integrals-5",
  "level": "2",
  "url": "section-18.html#subsec-iterated-integrals-5",
  "type": "Example",
  "number": "18.7",
  "title": "",
  "body": " Evaluate Here we begin be integrating with respect to since is the \"inside\" variable ( is to the left of ). Now calculate the integral with respect to    "
},
{
  "id": "subsec-iterated-integrals-6",
  "level": "2",
  "url": "section-18.html#subsec-iterated-integrals-6",
  "type": "Example",
  "number": "18.8",
  "title": "",
  "body": " Find the volume under the surface over the region . Since we get to choose the order of integration, let's think about this order is easier if we calculated we would begin by substituting and which would cancel out the in front of the exponential.  If we instead calculate we would begin by using integration by parts with the variable . This would turn into a complicated mess. So let's proceed with the original order.  Making the substitution  Calculate the integral with respect to now   "
},
{
  "id": "subsec-iterated-integrals-8",
  "level": "2",
  "url": "section-18.html#subsec-iterated-integrals-8",
  "type": "Figure",
  "number": "18.9",
  "title": "",
  "body": " An iterated integral example (9 minutes)   "
},
{
  "id": "section-19",
  "level": "1",
  "url": "section-19.html",
  "type": "Section",
  "number": "19",
  "title": "Double Integrals Over General Regions",
  "body": " Double Integrals Over General Regions   We need not use rectangles in the plane as the base for our volume when calculating double integrals. We can integrate over any region in the plane.    Double Integrals Over General Regions   In this section we will look at:     Calculating double integrals over various-shaped regions    Switching the order of integration.      Double Integrals in General  For more general regions in the plane we have either We must always have constants as limits on the outer integral to evaluate the integral to a numerical result in the end.  Like the area between curves in Calculus II (Math 152) it is helpful to sketch (or use technology) a graph of the region we are integrating over to help setup the integral.   Find the volume under the surface over the region bounded by , and . A graph of this region looks like   The region of integration.    A graph of a region with square root of x on the top of the region, one over x on the bottom and bounded by x = 3 on the right.     Since always defines the top of this region and always defines the bottom of the region and is bounded by constants 1 and 3, we will integrate with respect to first. Now integrate with respect to .     Calculate the volume under the surface over the region bounded by , and . A graph of the region looks like   The region of integration.    A graph of a triangular region with y equals x on the right and y equals x over 2 on the left and y equals 2 on the top.     Here is always on the right and is always on the left. is bounded by the constants 0 and 2, so we integrate with respect to first.      Calculate the volume under the surface over the region bounded by , and . A graph of the region looks like   The region of integration.    A graph of a triangular region bounded by the y axis and the lines y equals 2 and y equals x over 2.     Here would could setup the double integral as either  The first integral is impossible to calculate by hand since has no explicit antiderivative, so we will calculate the second version Now we can use a substitution to calculate this integral. Let then    For this last example we saw how that we can setup the double integral in either order of variables. It is theoretically possible to always do this, but sometimes one order is easier based on the function we are integrating. And sometimes it is easier to setup the limits of integration for one order of integration than the other order of integration. We will best look at how to switch the order of integration when the limits are not constants. Here is a video with another example   Double Integrals over Type I and Type II Regions      Switching the Order of Integration  It is easiest to switch the order of integration by sketching the region given by a set of limits of integration and then write a new integral with the other order of variables.   Evaluate the integral by changing the order of integration. A graph of the region based on the limits of integration looks like this. (See the left input panel for how I entered this in Desmos.)   The region of integration.    A graph of a triangular-like region bounded by y equals one on the bottom, x equals 3 on the right and y equals x squared as the \"hypotenuse\".     From the figure we can see that we can rewrite the double integral as     Here is a video with another example.   Change the order of integration to solve tricky integrals     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on double integrals over general regions.    "
},
{
  "id": "section-19-3",
  "level": "2",
  "url": "section-19.html#section-19-3",
  "type": "Objectives",
  "number": "19",
  "title": "Double Integrals Over General Regions",
  "body": " Double Integrals Over General Regions   In this section we will look at:     Calculating double integrals over various-shaped regions    Switching the order of integration.    "
},
{
  "id": "subsec-double-integrals-general-4",
  "level": "2",
  "url": "section-19.html#subsec-double-integrals-general-4",
  "type": "Example",
  "number": "19.1",
  "title": "",
  "body": " Find the volume under the surface over the region bounded by , and . A graph of this region looks like   The region of integration.    A graph of a region with square root of x on the top of the region, one over x on the bottom and bounded by x = 3 on the right.     Since always defines the top of this region and always defines the bottom of the region and is bounded by constants 1 and 3, we will integrate with respect to first. Now integrate with respect to .   "
},
{
  "id": "subsec-double-integrals-general-5",
  "level": "2",
  "url": "section-19.html#subsec-double-integrals-general-5",
  "type": "Example",
  "number": "19.3",
  "title": "",
  "body": " Calculate the volume under the surface over the region bounded by , and . A graph of the region looks like   The region of integration.    A graph of a triangular region with y equals x on the right and y equals x over 2 on the left and y equals 2 on the top.     Here is always on the right and is always on the left. is bounded by the constants 0 and 2, so we integrate with respect to first.    "
},
{
  "id": "subsec-double-integrals-general-6",
  "level": "2",
  "url": "section-19.html#subsec-double-integrals-general-6",
  "type": "Example",
  "number": "19.5",
  "title": "",
  "body": " Calculate the volume under the surface over the region bounded by , and . A graph of the region looks like   The region of integration.    A graph of a triangular region bounded by the y axis and the lines y equals 2 and y equals x over 2.     Here would could setup the double integral as either  The first integral is impossible to calculate by hand since has no explicit antiderivative, so we will calculate the second version Now we can use a substitution to calculate this integral. Let then   "
},
{
  "id": "subsec-double-integrals-general-8",
  "level": "2",
  "url": "section-19.html#subsec-double-integrals-general-8",
  "type": "Figure",
  "number": "19.7",
  "title": "",
  "body": " Double Integrals over Type I and Type II Regions   "
},
{
  "id": "subsec-switching-order-of-integration-3",
  "level": "2",
  "url": "section-19.html#subsec-switching-order-of-integration-3",
  "type": "Example",
  "number": "19.8",
  "title": "",
  "body": " Evaluate the integral by changing the order of integration. A graph of the region based on the limits of integration looks like this. (See the left input panel for how I entered this in Desmos.)   The region of integration.    A graph of a triangular-like region bounded by y equals one on the bottom, x equals 3 on the right and y equals x squared as the \"hypotenuse\".     From the figure we can see that we can rewrite the double integral as    "
},
{
  "id": "subsec-switching-order-of-integration-5",
  "level": "2",
  "url": "section-19.html#subsec-switching-order-of-integration-5",
  "type": "Figure",
  "number": "19.10",
  "title": "",
  "body": " Change the order of integration to solve tricky integrals   "
},
{
  "id": "section-20",
  "level": "1",
  "url": "section-20.html",
  "type": "Section",
  "number": "20",
  "title": "Applications of Double Integrals",
  "body": " Applications of Double Integrals   In this final section we will look at a few applications. First we will look at integrating using polar coordinates, which is not technically an application but polar coordinates are often used in physics and engineering applications to simplify calculations. Then we will look at calculating center of mass before wrapping up with a few more application examples.    Applications of Double Integrals   In this section we will look at:     Double integrals in polar coordinates    Center of mass.    Applications      Double Integrals in Polar Coordinates  When integrating over the plane and using and as our variables, we divide up the region into tiny rectangles whose base is . In polar coordinates, the plane is divided up into circular sectors shaped like slices of pizza or pieces of pie. The area of a sector is radius times arc length and as we shrink the area down to the d-level (calculus!) we get . Since is measured in radians and is unitless, has units of area units squared. provides the height and so the double integral calculates a volume. Integrating in polar coordinates simplifies calculations greatly for circular-like regions.   Calculate the double integral over the area pictured below. (This region is called an annulus.)   An annulus   an annulus or the area between a circle of radius 2 and a circle of radius 4 for angles between zero and pi over 2.    The region can be described in polar coordinates as and . We also need to convert the function to polar coordinates using and . The double integral is then       Calculate the double integral over the region pictured below:   A quarter of a shifted circle   The top right section of a circle of radius 1 with center at (1,0).    This region can be described in polar coordinates as since the point is in polar coordinates. And since the circle has polar equation and the line has polar equation . Note that so our double integral is      Here are two more video examples:   Double integral in polar coordinates example 1     Double integral in polar coordinates example 2     Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on...     Center of Mass  Recall from Math 152, that the center of mass of a region with uniform density is where is the mass or area and and are the moments of mass. Defining center of mass with double integrals is more straight-forward:   Center of Mass  For a region with area and uniform density: Note that with this more general definition, it is easy to convert to polar coordinates and also to generalize to higher dimensions.    Find the center of mass of the region bounded by and the axis.  A picture is always helpful.   Our region    a graph where the region between y = 1 minus x squared and the x axis is shaded.     Recall that the center of mass must lie along line of symmetry. Here the axis is a line of symmetry so . The area is The double integral we need to calculate is  So and .   This method is easily adaptable for a non-uniform density.   Find the center of mass of the region pictured below with density .   Annulus in the first quadrant    An annulus in the first quadrant with outer radius 8 and inner radius 4.     Mass is density times area or in terms of double integrals . The moments of mass are similarly defined as In this example it is easier to calculate with polar coordinates. We make the following conversions: We have there double integrals to calculate over the region and . And the center of mass is      Applications of Double Integrals  Here are a few more examples using double integrals.   A double integral may be used to calculate a polar area . Calculate the area inside the four-petal rose pictured below.   A four-petal rose   A four petal rose with petals of length two lying along each coordinate axis.    This curve is generated during one revolution . is bounded by the polar curve and zero, so the double integral is     Find the are inside the smaller loop of pictured below.   a limacon   a limacon graphed from zero to 2 pi with pi over six to five pi over six highlighted as the smaller loop.    The inner loop is traced out when since these are the values where . The double integral is      A lamp has two bulbs of a type with an average lifetime of 1000 hours. Assuming that we can model the probability of failure of these bulbs by an exponential density function with mean of 1000 hours. Find the probability that both bulbs fail within 1000 hours.  The exponential probability density function (pdf) is defined as for and and zero otherwise. Note and are the means. The probability under this surface.       Reading Check-in  Check our WAMAP course page for a few questions that go along with today's reading on applications of double integrals.    "
},
{
  "id": "section-20-3",
  "level": "2",
  "url": "section-20.html#section-20-3",
  "type": "Objectives",
  "number": "20",
  "title": "Applications of Double Integrals",
  "body": " Applications of Double Integrals   In this section we will look at:     Double integrals in polar coordinates    Center of mass.    Applications    "
},
{
  "id": "subsec-double-integral-polar-3",
  "level": "2",
  "url": "section-20.html#subsec-double-integral-polar-3",
  "type": "Example",
  "number": "20.1",
  "title": "",
  "body": " Calculate the double integral over the area pictured below. (This region is called an annulus.)   An annulus   an annulus or the area between a circle of radius 2 and a circle of radius 4 for angles between zero and pi over 2.    The region can be described in polar coordinates as and . We also need to convert the function to polar coordinates using and . The double integral is then     "
},
{
  "id": "subsec-double-integral-polar-4",
  "level": "2",
  "url": "section-20.html#subsec-double-integral-polar-4",
  "type": "Example",
  "number": "20.3",
  "title": "",
  "body": " Calculate the double integral over the region pictured below:   A quarter of a shifted circle   The top right section of a circle of radius 1 with center at (1,0).    This region can be described in polar coordinates as since the point is in polar coordinates. And since the circle has polar equation and the line has polar equation . Note that so our double integral is     "
},
{
  "id": "subsec-double-integral-polar-6",
  "level": "2",
  "url": "section-20.html#subsec-double-integral-polar-6",
  "type": "Figure",
  "number": "20.5",
  "title": "",
  "body": " Double integral in polar coordinates example 1   "
},
{
  "id": "subsec-double-integral-polar-7",
  "level": "2",
  "url": "section-20.html#subsec-double-integral-polar-7",
  "type": "Figure",
  "number": "20.6",
  "title": "",
  "body": " Double integral in polar coordinates example 2   "
},
{
  "id": "subsec-center-of-mass-4",
  "level": "2",
  "url": "section-20.html#subsec-center-of-mass-4",
  "type": "Example",
  "number": "20.7",
  "title": "",
  "body": " Find the center of mass of the region bounded by and the axis.  A picture is always helpful.   Our region    a graph where the region between y = 1 minus x squared and the x axis is shaded.     Recall that the center of mass must lie along line of symmetry. Here the axis is a line of symmetry so . The area is The double integral we need to calculate is  So and .  "
},
{
  "id": "subsec-center-of-mass-6",
  "level": "2",
  "url": "section-20.html#subsec-center-of-mass-6",
  "type": "Example",
  "number": "20.9",
  "title": "",
  "body": " Find the center of mass of the region pictured below with density .   Annulus in the first quadrant    An annulus in the first quadrant with outer radius 8 and inner radius 4.     Mass is density times area or in terms of double integrals . The moments of mass are similarly defined as In this example it is easier to calculate with polar coordinates. We make the following conversions: We have there double integrals to calculate over the region and . And the center of mass is   "
},
{
  "id": "subsec-double-integral-applications-3",
  "level": "2",
  "url": "section-20.html#subsec-double-integral-applications-3",
  "type": "Example",
  "number": "20.11",
  "title": "",
  "body": " A double integral may be used to calculate a polar area . Calculate the area inside the four-petal rose pictured below.   A four-petal rose   A four petal rose with petals of length two lying along each coordinate axis.    This curve is generated during one revolution . is bounded by the polar curve and zero, so the double integral is   "
},
{
  "id": "subsec-double-integral-applications-4",
  "level": "2",
  "url": "section-20.html#subsec-double-integral-applications-4",
  "type": "Example",
  "number": "20.13",
  "title": "",
  "body": " Find the are inside the smaller loop of pictured below.   a limacon   a limacon graphed from zero to 2 pi with pi over six to five pi over six highlighted as the smaller loop.    The inner loop is traced out when since these are the values where . The double integral is    "
},
{
  "id": "subsec-double-integral-applications-5",
  "level": "2",
  "url": "section-20.html#subsec-double-integral-applications-5",
  "type": "Example",
  "number": "20.15",
  "title": "",
  "body": " A lamp has two bulbs of a type with an average lifetime of 1000 hours. Assuming that we can model the probability of failure of these bulbs by an exponential density function with mean of 1000 hours. Find the probability that both bulbs fail within 1000 hours.  The exponential probability density function (pdf) is defined as for and and zero otherwise. Note and are the means. The probability under this surface.     "
},
{
  "id": "sec-additional-resources",
  "level": "1",
  "url": "sec-additional-resources.html",
  "type": "Section",
  "number": "21",
  "title": "Additional Resources",
  "body": " Additional Resources   Textbooks  This course utilizes Openstax Calculus: Volume 2 (Chapters 5 and 6) and OPenstax Calculus: Volume (Chapters 2 to 5) both by Gilbert Strang and Edwin \"Jed\" Herman, et. al. Both text can be read online for free and downloaded as a PDF for free from   Another excellent resource are by Paul Davies at Lamar University. These notes cover math from algebra to differential equations and are great if you need a quick review of a topic. I have been using them since I was in college! Thankfully, Professor Davies has been updating and improving his notes since 2003.    YouTube Videos  Here is a list of some YouTube channels with content featured in these notes plus other channels with lecture-length videos.     Organic Chemistry Tutor  The master of STEM videos! Check out there extensive     Professor Leonard  Full length (90 to 150 minute) lecture videos from prealgebra to differential equations plus statistics! Check out his and     Professor Dave Explains  He explains many things in STEM in short videos. Here is his     3Blue1Brown  Mathematician Grant Sanderson's chanel. Here is his     Krista King  A math teacher explains it all in short example videos. Here are her and playlists.    JK Math  I discovered this channel while writing these notes. The channel is loaded with simple and clear tutorials.    Math is Power 4U  If you have ever watched a WAMAP question video, you have seen video on this     Nancy Pi  A great with review videos for algebra and calculus.    Dr. Trefor Bazett  Canadian mathematician's which covers every math class at Green River.    Just for Fun  Brady Haran's is the coolest math site on the internet. Here is the . The funniest math related YouTube channel is Matt Parker's . Also check out Matt's podcast called A Problem Squared . And also check out Matt on .       Calculators  These notes include a pop-up GeoGebra-3D calculator. If you click on the calculator icon on the top of each page, then a GeoGebra-3D calculator will pop-up in the lower right of the screen. You can find more about the free GeoGebra calculators at .  For a regular graphing calculator, you may use a TI-84 graphing calculator, the Desmos calculator or I recommend the Numworks calculator, which is available as a free iPhone or Android app! Or you can use the embedded emulator below.   The Numworks Calculator     "
},
{
  "id": "subsec-calculators-4",
  "level": "2",
  "url": "sec-additional-resources.html#subsec-calculators-4",
  "type": "Figure",
  "number": "21.1",
  "title": "",
  "body": " The Numworks Calculator   "
},
{
  "id": "worksheets",
  "level": "1",
  "url": "worksheets.html",
  "type": "Section",
  "number": "22",
  "title": "In-Class Worksheets",
  "body": " In-Class Worksheets   Sequences   Find a formula for the general term of the sequence with terms     Find a formula for the general term of the sequence with terms     Find a formula for the general term of the sequence with terms      Find the limit of the following sequences to determine if they converge or diverge.                                 A fish farmer has 5000 catfish in a pond. THe number of catfish increases by 8% per month and the farmer harvests 300 catfish per month. Write a recursive formula for the fish population in the pond with . How many catfish are in the pond after six months?     Infinite Series   Use the integral test to determine if the following series converges or diverges.     Use the integral test to determine if the following series converges or diverges.      Use the limit comparison test to determine if the following series converges or diverges. Compare each series to a series or geometric series                           Power Series   Find the radius of convergence for the series     Find the radius of convergence for the series      Given that has a radius of conversion of (-1, 1). Find the power series and determine the radius of convergence for the following functions.                    Taylor Series   Use the definition of the Taylor series to find the coefficients of the Taylor series for centered at . Once you recognize a pattern, write down a formula for the power series of     Repeat the previous exercise to find the Taylor series for     Use Euler's formula: to write down a formula for the Taylor series of centered at .    Finally, modify your formula from the previous exercise to write down a formula for the Taylor series of the function centered at .     Applications of Taylor Series   Use a Taylor series tp help you calculate the limit     Use the Taylor series of centered at to find a series representation of the integral Then use the first five terms of the series to estimate the value of the integral. Finally compare the result with a numerical integral calculator like the one on your graphing calculator or on Wolfram Alpha.    The period of a pendulum with length that makes a maximum angle with the vertical angle is where is a constant and is the acceleration of gravity. This integral may be calculated using a numerical technique like Simpson's rule. Use the first order approximation of to calculate the integral by hand for a pendulum of length meter, meters per second squared and to calculate the integral by hand and then compare it with the result for the actual integral calculated using a graphing calculator.     Vectors    Complete the following vector calculations using the vectors and                                         Calculate the area of the parallelogram with adjacent sides and     Non-zero line in the same plane if and only if the triple scalar product . Do the vectors , and lie in the same plane?    Bonus: Explain why the scalar triple product equaling zero must mean the vectors lie in the same plane.    Applications of Vectors   A football thrown by a quarterback has an initial speed of 70 miles per hour and an angle of elevation of . Determine the velocity vector.    Let , and be three forces acting on an object. What is the net force acting on the object? Find a fourth force acting on the object such that the net force is the zero vector.    Calculate the work done be the force Newtons that moves a particle from the point (3, -1, 0) to the point (2, 3, 1) along a straight line.    A boy applies the brakes on a bicycle by applying a force of 20 pounds on the pedal when the 6-inch crank makes a 40 degree angle with the horizontal as in the following figure. Find the torque at point P. Express your solution in foot-pounds.   an image of a the gears and pedals of a bicycle where the pedal attaches to the bicycle at point p.      Vector-valued Functions    Find the derivative of the following vector-valued functions                           Calculate the integral of the following vector-valued functions                    The T-N-B Frame   For the vector-valued function find the unit vectors , and . Then find the curvature function. Evaluate all of them at the point .    Describe, using your own words, what the vectors , and tell you about the curve. (A picture may be helpful in your description.)     Multi-variable Functions    Consider the following contour map for a function . Use a ruler to estimate the following derivatives at the points and .   a contour map consisting of three concentric circles.                                          where        Consider the following contour map for a function . The value of on the axis is zero.   a contour map consisting of four vertical lines.      What can you say about ?      Estimate the value of       Estimate the value of       Estimate the value of       What can you guess about the value of        Here is a contour map for the function    a contour map of h(x,y).      Plot the points (-1,1), (2,1), (-1,2) and (0.5,1) on the graph above.      Calculate the gradient vector at the points (-1,1), (2,1), (-1,2) and (0.5,1).      Plot the gradient vectors you calculated on the graph above, placing their tails at the corresponding points      Make a conjecture about the relationship between the gradient of a function and its level curves.       Partial Derivatives    Find the given partial derivative for the following functions                                                Applications of Partial Derivatives   Find the plane tangent to at the point     Find a linear approximation for at the point (3, 2, 6) to approximate .    If a sound with frequency is produced by a source traveling along a line with speed and an observer is traveling along the same line but in the opposite direction toward the source with velocity , then the frequency of the sound heard by the observer is This is known as the Doppler effect. Suppose that at a particular moment, you are in a train traveling at 34 meters per second and accelerating at 12 meters per second squared. A train is approaching you from the opposite direction on the other track at 40 meters per second and accelerating at 1.4 meters per second squared and it sounds its whistle, which has a frequency of 460 Hertz. At that instant, what is the perceived frequency that you hear and how fast is it changing?     Optimization   Find and classify (maximum, minimum or saddle point) all of the critical points for the function     Find and classify (maximum, minimum or saddle point) all of the critical points for the function      Double Integrals I   Calculate the double integral over the region      Calculate the double integral over the region      Calculate the double integral over the region      Calculate the double integral over the region       Double Integrals II   Find the volume of the solid under the surface over the region enclosed by and     Evaluate the double integral by switching the order of integration      Double Integrals in Polar Coordinates   Evaluate the following double integral by converting to polar coordinates over the region in the third quadrant between and      Calculate the area of the region of one \"petal\" in the four-petal rose pictured below.   a four petal rose with one petal, in the first quadrant shaded.     "
},
{
  "id": "ws-1-2",
  "level": "2",
  "url": "worksheets.html#ws-1-2",
  "type": "Worksheet Exercise",
  "number": "22.1.1",
  "title": "",
  "body": " Find a formula for the general term of the sequence with terms   "
},
{
  "id": "ws-1-3",
  "level": "2",
  "url": "worksheets.html#ws-1-3",
  "type": "Worksheet Exercise",
  "number": "22.1.2",
  "title": "",
  "body": " Find a formula for the general term of the sequence with terms   "
},
{
  "id": "ws-1-4",
  "level": "2",
  "url": "worksheets.html#ws-1-4",
  "type": "Worksheet Exercise",
  "number": "22.1.3",
  "title": "",
  "body": " Find a formula for the general term of the sequence with terms   "
},
{
  "id": "ws-1-5",
  "level": "2",
  "url": "worksheets.html#ws-1-5",
  "type": "Worksheet Exercise",
  "number": "22.1.4",
  "title": "",
  "body": "  Find the limit of the following sequences to determine if they converge or diverge.                               "
},
{
  "id": "ws-1-6",
  "level": "2",
  "url": "worksheets.html#ws-1-6",
  "type": "Worksheet Exercise",
  "number": "22.1.5",
  "title": "",
  "body": " A fish farmer has 5000 catfish in a pond. THe number of catfish increases by 8% per month and the farmer harvests 300 catfish per month. Write a recursive formula for the fish population in the pond with . How many catfish are in the pond after six months?  "
},
{
  "id": "ws-2-2",
  "level": "2",
  "url": "worksheets.html#ws-2-2",
  "type": "Worksheet Exercise",
  "number": "22.2.1",
  "title": "",
  "body": " Use the integral test to determine if the following series converges or diverges.   "
},
{
  "id": "ws-2-3",
  "level": "2",
  "url": "worksheets.html#ws-2-3",
  "type": "Worksheet Exercise",
  "number": "22.2.2",
  "title": "",
  "body": " Use the integral test to determine if the following series converges or diverges.   "
},
{
  "id": "ws-2-4",
  "level": "2",
  "url": "worksheets.html#ws-2-4",
  "type": "Worksheet Exercise",
  "number": "22.2.3",
  "title": "",
  "body": "  Use the limit comparison test to determine if the following series converges or diverges. Compare each series to a series or geometric series                        "
},
{
  "id": "ws-3-2",
  "level": "2",
  "url": "worksheets.html#ws-3-2",
  "type": "Worksheet Exercise",
  "number": "22.3.1",
  "title": "",
  "body": " Find the radius of convergence for the series   "
},
{
  "id": "ws-3-3",
  "level": "2",
  "url": "worksheets.html#ws-3-3",
  "type": "Worksheet Exercise",
  "number": "22.3.2",
  "title": "",
  "body": " Find the radius of convergence for the series   "
},
{
  "id": "ws-3-4",
  "level": "2",
  "url": "worksheets.html#ws-3-4",
  "type": "Worksheet Exercise",
  "number": "22.3.3",
  "title": "",
  "body": "  Given that has a radius of conversion of (-1, 1). Find the power series and determine the radius of convergence for the following functions.                 "
},
{
  "id": "ws-4-2",
  "level": "2",
  "url": "worksheets.html#ws-4-2",
  "type": "Worksheet Exercise",
  "number": "22.4.1",
  "title": "",
  "body": " Use the definition of the Taylor series to find the coefficients of the Taylor series for centered at . Once you recognize a pattern, write down a formula for the power series of   "
},
{
  "id": "ws-4-3",
  "level": "2",
  "url": "worksheets.html#ws-4-3",
  "type": "Worksheet Exercise",
  "number": "22.4.2",
  "title": "",
  "body": " Repeat the previous exercise to find the Taylor series for   "
},
{
  "id": "ws-4-4",
  "level": "2",
  "url": "worksheets.html#ws-4-4",
  "type": "Worksheet Exercise",
  "number": "22.4.3",
  "title": "",
  "body": " Use Euler's formula: to write down a formula for the Taylor series of centered at .  "
},
{
  "id": "ws-4-5",
  "level": "2",
  "url": "worksheets.html#ws-4-5",
  "type": "Worksheet Exercise",
  "number": "22.4.4",
  "title": "",
  "body": " Finally, modify your formula from the previous exercise to write down a formula for the Taylor series of the function centered at .  "
},
{
  "id": "ws-5-2",
  "level": "2",
  "url": "worksheets.html#ws-5-2",
  "type": "Worksheet Exercise",
  "number": "22.5.1",
  "title": "",
  "body": " Use a Taylor series tp help you calculate the limit   "
},
{
  "id": "ws-5-3",
  "level": "2",
  "url": "worksheets.html#ws-5-3",
  "type": "Worksheet Exercise",
  "number": "22.5.2",
  "title": "",
  "body": " Use the Taylor series of centered at to find a series representation of the integral Then use the first five terms of the series to estimate the value of the integral. Finally compare the result with a numerical integral calculator like the one on your graphing calculator or on Wolfram Alpha.  "
},
{
  "id": "ws-5-4",
  "level": "2",
  "url": "worksheets.html#ws-5-4",
  "type": "Worksheet Exercise",
  "number": "22.5.3",
  "title": "",
  "body": " The period of a pendulum with length that makes a maximum angle with the vertical angle is where is a constant and is the acceleration of gravity. This integral may be calculated using a numerical technique like Simpson's rule. Use the first order approximation of to calculate the integral by hand for a pendulum of length meter, meters per second squared and to calculate the integral by hand and then compare it with the result for the actual integral calculated using a graphing calculator.  "
},
{
  "id": "ws-6-2",
  "level": "2",
  "url": "worksheets.html#ws-6-2",
  "type": "Worksheet Exercise",
  "number": "22.6.1",
  "title": "",
  "body": "  Complete the following vector calculations using the vectors and                                       "
},
{
  "id": "ws-6-3",
  "level": "2",
  "url": "worksheets.html#ws-6-3",
  "type": "Worksheet Exercise",
  "number": "22.6.2",
  "title": "",
  "body": " Calculate the area of the parallelogram with adjacent sides and   "
},
{
  "id": "ws-6-4",
  "level": "2",
  "url": "worksheets.html#ws-6-4",
  "type": "Worksheet Exercise",
  "number": "22.6.3",
  "title": "",
  "body": " Non-zero line in the same plane if and only if the triple scalar product . Do the vectors , and lie in the same plane?  "
},
{
  "id": "ws-7-2",
  "level": "2",
  "url": "worksheets.html#ws-7-2",
  "type": "Worksheet Exercise",
  "number": "22.7.1",
  "title": "",
  "body": " A football thrown by a quarterback has an initial speed of 70 miles per hour and an angle of elevation of . Determine the velocity vector.  "
},
{
  "id": "ws-7-3",
  "level": "2",
  "url": "worksheets.html#ws-7-3",
  "type": "Worksheet Exercise",
  "number": "22.7.2",
  "title": "",
  "body": " Let , and be three forces acting on an object. What is the net force acting on the object? Find a fourth force acting on the object such that the net force is the zero vector.  "
},
{
  "id": "ws-7-4",
  "level": "2",
  "url": "worksheets.html#ws-7-4",
  "type": "Worksheet Exercise",
  "number": "22.7.3",
  "title": "",
  "body": " Calculate the work done be the force Newtons that moves a particle from the point (3, -1, 0) to the point (2, 3, 1) along a straight line.  "
},
{
  "id": "ws-7-5",
  "level": "2",
  "url": "worksheets.html#ws-7-5",
  "type": "Worksheet Exercise",
  "number": "22.7.4",
  "title": "",
  "body": " A boy applies the brakes on a bicycle by applying a force of 20 pounds on the pedal when the 6-inch crank makes a 40 degree angle with the horizontal as in the following figure. Find the torque at point P. Express your solution in foot-pounds.   an image of a the gears and pedals of a bicycle where the pedal attaches to the bicycle at point p.   "
},
{
  "id": "ws-8-2",
  "level": "2",
  "url": "worksheets.html#ws-8-2",
  "type": "Worksheet Exercise",
  "number": "22.8.1",
  "title": "",
  "body": "  Find the derivative of the following vector-valued functions                        "
},
{
  "id": "ws-8-3",
  "level": "2",
  "url": "worksheets.html#ws-8-3",
  "type": "Worksheet Exercise",
  "number": "22.8.2",
  "title": "",
  "body": "  Calculate the integral of the following vector-valued functions                 "
},
{
  "id": "ws-9-2",
  "level": "2",
  "url": "worksheets.html#ws-9-2",
  "type": "Worksheet Exercise",
  "number": "22.9.1",
  "title": "",
  "body": " For the vector-valued function find the unit vectors , and . Then find the curvature function. Evaluate all of them at the point .  "
},
{
  "id": "ws-9-3",
  "level": "2",
  "url": "worksheets.html#ws-9-3",
  "type": "Worksheet Exercise",
  "number": "22.9.2",
  "title": "",
  "body": " Describe, using your own words, what the vectors , and tell you about the curve. (A picture may be helpful in your description.)  "
},
{
  "id": "ws-10-2",
  "level": "2",
  "url": "worksheets.html#ws-10-2",
  "type": "Worksheet Exercise",
  "number": "22.10.1",
  "title": "",
  "body": "  Consider the following contour map for a function . Use a ruler to estimate the following derivatives at the points and .   a contour map consisting of three concentric circles.                                          where     "
},
{
  "id": "ws-10-3",
  "level": "2",
  "url": "worksheets.html#ws-10-3",
  "type": "Worksheet Exercise",
  "number": "22.10.2",
  "title": "",
  "body": "  Consider the following contour map for a function . The value of on the axis is zero.   a contour map consisting of four vertical lines.      What can you say about ?      Estimate the value of       Estimate the value of       Estimate the value of       What can you guess about the value of     "
},
{
  "id": "ws-10-4",
  "level": "2",
  "url": "worksheets.html#ws-10-4",
  "type": "Worksheet Exercise",
  "number": "22.10.3",
  "title": "",
  "body": "  Here is a contour map for the function    a contour map of h(x,y).      Plot the points (-1,1), (2,1), (-1,2) and (0.5,1) on the graph above.      Calculate the gradient vector at the points (-1,1), (2,1), (-1,2) and (0.5,1).      Plot the gradient vectors you calculated on the graph above, placing their tails at the corresponding points      Make a conjecture about the relationship between the gradient of a function and its level curves.    "
},
{
  "id": "ws-11-2",
  "level": "2",
  "url": "worksheets.html#ws-11-2",
  "type": "Worksheet Exercise",
  "number": "22.11.1",
  "title": "",
  "body": "  Find the given partial derivative for the following functions                                             "
},
{
  "id": "ws-12-2",
  "level": "2",
  "url": "worksheets.html#ws-12-2",
  "type": "Worksheet Exercise",
  "number": "22.12.1",
  "title": "",
  "body": " Find the plane tangent to at the point   "
},
{
  "id": "ws-12-3",
  "level": "2",
  "url": "worksheets.html#ws-12-3",
  "type": "Worksheet Exercise",
  "number": "22.12.2",
  "title": "",
  "body": " Find a linear approximation for at the point (3, 2, 6) to approximate .  "
},
{
  "id": "ws-12-4",
  "level": "2",
  "url": "worksheets.html#ws-12-4",
  "type": "Worksheet Exercise",
  "number": "22.12.3",
  "title": "",
  "body": " If a sound with frequency is produced by a source traveling along a line with speed and an observer is traveling along the same line but in the opposite direction toward the source with velocity , then the frequency of the sound heard by the observer is This is known as the Doppler effect. Suppose that at a particular moment, you are in a train traveling at 34 meters per second and accelerating at 12 meters per second squared. A train is approaching you from the opposite direction on the other track at 40 meters per second and accelerating at 1.4 meters per second squared and it sounds its whistle, which has a frequency of 460 Hertz. At that instant, what is the perceived frequency that you hear and how fast is it changing?  "
},
{
  "id": "ws-13-2",
  "level": "2",
  "url": "worksheets.html#ws-13-2",
  "type": "Worksheet Exercise",
  "number": "22.13.1",
  "title": "",
  "body": " Find and classify (maximum, minimum or saddle point) all of the critical points for the function   "
},
{
  "id": "ws-13-3",
  "level": "2",
  "url": "worksheets.html#ws-13-3",
  "type": "Worksheet Exercise",
  "number": "22.13.2",
  "title": "",
  "body": " Find and classify (maximum, minimum or saddle point) all of the critical points for the function   "
},
{
  "id": "ws-14-2",
  "level": "2",
  "url": "worksheets.html#ws-14-2",
  "type": "Worksheet Exercise",
  "number": "22.14.1",
  "title": "",
  "body": " Calculate the double integral over the region    "
},
{
  "id": "ws-14-3",
  "level": "2",
  "url": "worksheets.html#ws-14-3",
  "type": "Worksheet Exercise",
  "number": "22.14.2",
  "title": "",
  "body": " Calculate the double integral over the region    "
},
{
  "id": "ws-14-4",
  "level": "2",
  "url": "worksheets.html#ws-14-4",
  "type": "Worksheet Exercise",
  "number": "22.14.3",
  "title": "",
  "body": " Calculate the double integral over the region    "
},
{
  "id": "ws-14-5",
  "level": "2",
  "url": "worksheets.html#ws-14-5",
  "type": "Worksheet Exercise",
  "number": "22.14.4",
  "title": "",
  "body": " Calculate the double integral over the region    "
},
{
  "id": "ws-15-2",
  "level": "2",
  "url": "worksheets.html#ws-15-2",
  "type": "Worksheet Exercise",
  "number": "22.15.1",
  "title": "",
  "body": " Find the volume of the solid under the surface over the region enclosed by and   "
},
{
  "id": "ws-15-3",
  "level": "2",
  "url": "worksheets.html#ws-15-3",
  "type": "Worksheet Exercise",
  "number": "22.15.2",
  "title": "",
  "body": " Evaluate the double integral by switching the order of integration   "
},
{
  "id": "ws-16-2",
  "level": "2",
  "url": "worksheets.html#ws-16-2",
  "type": "Worksheet Exercise",
  "number": "22.16.1",
  "title": "",
  "body": " Evaluate the following double integral by converting to polar coordinates over the region in the third quadrant between and    "
},
{
  "id": "ws-16-3",
  "level": "2",
  "url": "worksheets.html#ws-16-3",
  "type": "Worksheet Exercise",
  "number": "22.16.2",
  "title": "",
  "body": " Calculate the area of the region of one \"petal\" in the four-petal rose pictured below.   a four petal rose with one petal, in the first quadrant shaded.   "
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
