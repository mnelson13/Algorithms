# Problem:
# The Fibonacci sequence is defined by the recurrence relation:

# Fn = Fn-1 + Fn-2, where F1 = 1 and F2 =1.

# Hence the first 12 terms will be:

# F1 = 1
# F2 = 1
# F3 = 2
# F4 = 3
# F5 = 5
# F6 = 8
# F7 = 13
# F8 = 21
# F9 = 34
# F10 = 55
# F11 = 89
# F12 = 144
# The 12th term, F12, is the first term to contain three digits.

# What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
# Problem Source: https://projecteuler.net/problem=25

def fibonacci_index(digits):
    count = 3
    n1 = 1
    n2 = 1
    n3 = 2

    while len(str(n3)) < digits:
        placeholder = n3
        n3 = n2 + n3
        n1 = n2
        n2 = placeholder
        count += 1
        #print('n1: %f n2: %f n3: %f' % (n1, n2, n3))
        #print(count)

    return count


test = fibonacci_index(3)
print('Test (should be equal to 12): %f' % test)

result = fibonacci_index(1000)
print('Answer: %f' % result)

# Answer is: 4782
