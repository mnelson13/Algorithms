# Problem:
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.
# Problem Source: https://projecteuler.net/problem=1

from functools import reduce

def multiples(num):
    array = []
    num -= 1
    while num > 0:
        if num % 3 == 0 or num % 5 == 0:
            array.append(num)
        num -= 1

    sum = reduce((lambda x, y: x + y), array)
    return sum

test = multiples(10)
print('Test (should be equal to 23): %s' % test)

result = multiples(1000)
print('Answer: %s' % result)

# Answer is: 233168

