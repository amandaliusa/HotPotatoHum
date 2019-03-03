file = open('raw_all_courses.txt', 'r')
lines = file.read().splitlines()
outfile = open("parsedCourseDescriptions.txt","w")

outfile.write("<ul id=\"descriptions\">\n")
for i in range(len(lines)):
    s = "<li id=\"CD" + str(i+1) + "\">" + str(lines[i]) + "</li>\n"
    outfile.write(s)
outfile.write("</ul>")
file.close()
outfile.close()
