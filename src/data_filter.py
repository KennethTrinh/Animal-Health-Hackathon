import csv

file = open("akc-data-latest.csv")
data = list(csv.reader(file, delimiter=','))
file.close()

dog_breeds = [d[0] for d in data[1:]]
print(dog_breeds)