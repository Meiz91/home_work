import random
#this is what i had till the class i did not finish it.

class die:
     def roll_die(roll_again=input(str)("would you like to roll the die?")):
        die_1 = random.randint(1, 6)
        die_2 = random.randint(1, 12)
        how_many = input(int)(
            "press 1 for six sided die or 2 for 12 sided die")
        while roll_again == "yes" or roll_again == "y":
            print(how_many)
            if (how_many == 1):
                print(die_1)
            elif (how_many == 2):
                print(die_2)

     def die () :

