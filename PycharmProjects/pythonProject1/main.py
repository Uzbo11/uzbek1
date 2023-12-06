# d = [3,4,56,7,8,92,1]
# for i in range(len(d)):
#     for j in range(i+1,len(d)):
#         if d[i]>d[j]:
#             nums = d[i]
#             d[i] = d[j]
#             d[j] = nums
# print (d)

# nums = [1,2,3,4]
# # h = []
# for i in range (len(nums)):
#     for j in range(len(nums)):
#          p = nums[i] * nums[j]
# print(p)

# from collections import Counter
# nums = [1,1,2,3,3,4,4,5,5]
# for i in range(len(nums)):
#     if Counter(int(nums[i])==1):
#         print(i)

# nums = [1,1,2,3,3,4,4,5,5]
# for i in range(len(nums)):
#     for j in range(i+1,len(nums)):
#         if nums[i]==nums[j]:
#             del nums[i]
#             del nums [j]
#             print(nums)

# nums = [1,2,3,4,5,6,7,8,9]
# target = 7
# low = 0
# high = len(nums)-1
# output = False
# while low<=high:
#     midle = (low + high)//2
#     jks = midle
#     if jks == target:
#         output = True
#         print(output)
#     if target < midle:
#         high = midle -1
#     else:
#         low  = midle +1
# print

import random
girls = ['sasha','petra','historia','mikasa']
boys = ['eren','levi','jan','ervin']
pairs = []
pairsboys =[]
random.shuffle(girls)
for i in range(len(girls)):
    pairs.append(girls[i] + ' ' + boys[i])
print(pairs)
random.shuffle(boys)
for j in range(len(girls)):
    pairsboys.append(boys[j] + ' ' + girls[j])
print(pairsboys)

a = str(input("Введите мужское имя: "))
for j in range (len(pairsboys)):
    tempPair = pairsboys[j].split()
    if tempPair[0] == a:
        print(tempPair[1])
b = str(input("Введите женское имя: "))
for j in range (len(pairs)):
    tempPair = pairs[j].split()
    if tempPair[0] == b:
        print(tempPair[1])

        