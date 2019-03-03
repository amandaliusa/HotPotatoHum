

file1 = open('raw_core.txt', 'r')
lines1 = file1.readlines()
file2 = open('raw_hss_catalog', 'r')
lines2 = file2.readlines()
outfile = open("parsedDescriptions.txt","w") 
outfile.write("internal ID, description")
i = 0
for line in lines1: 
    i += 1
    s = str(i) + ", " + "\"" + str(line) +  "\"" + "\n"
    outfile.write(s)
for line in lines2:
    i += 1
    s = str(i) + ", " + "\"" + str(line) +  "\"" + "\n"
    outfile.write(s)
outfile.close()