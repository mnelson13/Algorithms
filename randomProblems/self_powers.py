#Problem:
# The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

# Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
#Problem Source: https://projecteuler.net/problem=48

from functools import reduce

def self_powers(num):
    array = []
    count = 1

    while count <= num:
        n = count ** count
        array.append(n)
        count += 1
    
    sum = str(reduce((lambda x, y: x + y), array))

    result = float(sum[len(sum) - 10: len(sum)])
    
    return result


test = self_powers(10)
print('Test (should be equal to 0405071317): %f' % test)

result = self_powers(1000)
print('Answer: %f' % result)

# Answer is: 9110846700