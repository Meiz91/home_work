import random
rand_number = random.randint(1, 10)
print(rand_number)
val = input("enter your guess")
for x in range(0, 10):
    
    if input == rand_number:
        print("you got it")
        break
else: val = input("guess again")
