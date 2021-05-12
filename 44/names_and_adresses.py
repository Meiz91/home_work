name_1 = 'meiz zupnik'
name_2 = 'mimz zupnik'
name_3 = 'eli citron'
name_4 = 'goldi senderovits'
addr = ['1 11th st', '1 kingsfeild dr.', '1 east ninth', '1 manalapan drive']
slice_name_1 = slice(2,3)
slice_name_2= slice(1,-1,)
print(f'NAME: {name_1,name_2,name_3,name_4} ADDRESS: {addr}')
print(name_1[slice_name_1],name_2[slice_name_1],name_3[slice_name_1],name_4[slice_name_1])
print(name_1[slice_name_2],name_2[slice_name_2],name_3[slice_name_2],name_4[slice_name_2])
