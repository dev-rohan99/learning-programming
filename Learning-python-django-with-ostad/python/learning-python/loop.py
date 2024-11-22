fruits = ["Banana", "Apple", "Orange"]

for fruit in fruits:
  print(fruit)
  
for i in range(3):
  print(i, fruits[i])
  
def multipilicationTable(n):
  for i in range(1, 11):
    print("{} * {} = {}".format(n, i, i * n))

print("<= multipilication Table =>")
multipilicationTable(5)

print("<= multipilication Table =>")
multipilicationTable(6)

print("<= multipilication Table =>")
multipilicationTable(7)

print("<= multipilication Table =>")
multipilicationTable(8)

print("<= multipilication Table =>")
multipilicationTable(9)

print("<= multipilication Table =>")
multipilicationTable(10)

# while loop

i = 1
while i <= 10:
  print(i)
  # i = i + 1
  i += 1

n = input("Enter multiplication number (press 0 to exit): ")
n = int(n)

while n != 0:
  multipilicationTable(n)
  print("")
  n = input("Enter multiplication number (press 0 to exit): ")
  n = int(n)



