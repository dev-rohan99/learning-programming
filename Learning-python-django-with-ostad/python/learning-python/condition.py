marks = 65
# > < >= <= !=
if marks >= 40:
    print("Passed!")
else:
    print("Failed!")


marks2 = input("Enter your marks: ")
marks2 = int(marks2)
if marks2 >= 40:
    print("Passed!")
else:
    print("Failed!")

result = input("Enter your result: ")
result = int(result)

if result > 100:
    print("Invalid result!")
elif result >= 80:
    print("Grade A+")
elif result >= 70:
    print("Grade A")
elif result >= 60:
    print("Grade A-")
elif result >= 50:
    print("Grade B")
elif result >= 40:
    print("Grade C")
elif result >= 33:
    print("Grade D")
else:
    print("Grade F")

n = input("Enter number to find odd or even: ")
n = int(n)

if n % 2 == 0:
    print(n, "is even!")
else:
    print(n, "is odd!")

if n >= 0:
    if n % 2 == 0:
        print(n, "is positive and even!")
    else:
        print(n, "is positive and odd!")
else:
    if n % 2 == 0:
        print(n, "is negative and even!")
    else:
        print(n, "is negative and odd!")

if n >= 0 and n % 2 == 0:
    print(n, "is positive and even!")
elif n >= 0 and n % 2 == 1:
    print(n, "is positive and odd!")
elif n < 0 and n % 2 == 0:
    print(n, "is negetive and even!")
else:
    print(n, "is negetive and odd!")

year = input("Enter year: ")
year = int(year)

# nested if else
if year % 4 == 0:
    if year % 100 == 0 and year % 400 == 0:
        print(year, "is leap year!")
    elif year % 100 != 0:
        print(year, "is not leap year!")
    else:
        print(year, "is not leap year!")
else:
    print(year, "is not leap year!")


