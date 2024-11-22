
str = "Rohan"

type(str)
print(str)

str = str + str
type(str)
print(str)

len(str)
print(str[0:3])
print(str[-2:])
print(str[-2:-3])

str = str * 3
type(str)
print(str)

name = "Rohan mostofa"
print(name)
name = name.upper()
print(name)
name = name.lower()
print(name)
name = name.capitalize()
print(name)

country = "Bangladesh"

print(country.find("Bangla"))
print(country.find("Desh"))
print(country.find("desh"))
print(country.find("abc"))

print(country.startswith("abc"))
print(country.startswith("Banglaaaa"))
print(country.startswith("Bangla"))
print(country.endswith("Desh"))
print(country.endswith("desh"))

alp = "A, B, C, D"
print(alp.split(","))
alp = alp.split(",")
print(",".join(alp))


