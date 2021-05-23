import datetime


def print_days_in_month(year=(int)(input("enter a year: "))):
    months = ['jan', 'feb', 'mar', 'apr', 'may',
              'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (year % 4) == 0:
        if (year % 100) == 0:
            if (year % 400) == 0:
                days[1] = 29
                i = 0
                while i < len(months):
                    print(f'{months[i]} => {days[i]}')
                    i += 1
            else:
                days[1] = 28
                i = 0
                while i < len(months):
                    print(f'{months[i]} => {days[i]}')
                    i += 1
        else:
            days[1] = 29
            i = 0
            while i < len(months):
                print(f'{months[i]} => {days[i]}')
                i += 1
    else:
        days[1] = 28
        i = 0
        while i < len(months):
            print(f'{months[i]} => {days[i]}')
            i += 1


def print_days_in_month2():
    months = ('jan', 'feb', 'mar', 'apr', 'may',
              'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec')
    days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    for month, day in zip(months, days):
        print(f'{month} => {day}')


def print_days_in_months_diction(month=(int)(input("please enter month in numbers: "))):
    year_month = {1:31,2:28,3: 31,4: 30,5:31,6:30,7: 31,8: 31,9:30,10:31,11: 30,12:31}
    print(year_month[month])



