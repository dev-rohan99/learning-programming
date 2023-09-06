import phonenumbers
from myPhone import number
from phonenumbers import geocoder
import opencage
import folium

pepnumber = phonenumbers.parse(number)
location = geocoder.description_for_number(pepnumber, "en")
print(location)

from phonenumbers import carrier

serviceProvider = phonenumbers.parse(number)
print(carrier.name_for_number(serviceProvider, "en"))

from opencage.geocoder import OpenCageGeocode

key = "0ec76ee3fd824a6384aa33b0c0334668"

geocoder = OpenCageGeocode(key)
query = str(location)
results = geocoder.geocode(query)
# print(results)

lat = results[0]["geometry"]["lat"]
lng = results[0]["geometry"]["lng"]
print(lat, lng)

myMap = folium.Map(location=[lat, lng], zoom_start=9)
folium.Marker([lat, lng], popup=location).add_to(myMap)
myMap.save("myLocation.html")
