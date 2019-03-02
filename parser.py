
file = open('raw_hss_catalog', 'r')
lines = file.readlines()

# Obtain list of all the course_names.
coursenames = []
for line in lines: 
    # End of course number index.
    coursename_end_indx = line.find('.')
    # Get substring from start to end of course number.
    coursename = line[0: coursename_end_indx]
    # Add to coursenames.
    coursenames.append(coursename)

# strings 
strings = []

number = 0
for line in lines: 
    number += 1
    # Course number.
    course_id = number
    # End of course number index.
    coursename_end = line.find('.')
    # Full coursename.
    coursename = line[0: coursename_end]
    coursenum_start = line.find(' ')
    # Course number
    coursenumber = line[coursenum_start + 1: coursename_end]
    if "a" in coursenumber: 
        idx = coursenumber.find(" ")
        coursenumber = coursenumber[: idx]
    if "b" in coursenumber: 
        idx = coursenumber.find(" ")
        coursenumber = coursenumber[: idx]
    if "c" in coursenumber: 
        idx = coursenumber.find(" ")
        coursenumber = coursenumber[: idx]
    # Next part title
    nextPart = line[coursename_end + 1:]
    endIdx = nextPart.find(".")
    coursetitle = nextPart[1: endIdx]
    # Units
    if ("Units to be " in line) or ("units to be" in line): 
        units = 0
    else: 
        unitIdx = line.find("units")
        units = line[unitIdx - 3:unitIdx]
        if units[0] == " ":
            units = units[1:]
    # Description 
    description = nextPart[1:]
    # Course department 
    coursedept = line[0: coursenum_start]
    # Prerequisites
    prerequisites = ""
    for i in range(len(coursenames)):
        if coursenames[i] in line: 
            if coursenames[i] != coursename:
                prerequisites += coursenames[i] + "|"
    # Term
    fall = False 
    winter = False 
    spring = False
    if "first term" in line: 
        fall = True
    if "second term" in line: 
        winter = True    
    if "third term" in line: 
        spring = True
    # Writing Intensive? 
    writingIntensive = False 
    if int(coursenumber) >= 90:
        writingIntensive = True
    # Instructors
    instructors = ""
    if "Instructors" in line: 
        instructorsidx = line.find("Instructors")
        instructors = line[instructorsidx + 12: - 2]
    elif "Instructor" in line: 
        instructorsidx = line.find("Instructor")
        instructors = line[instructorsidx + 12: -2]
    if "Staff" in instructors or "staff" in instructors:
        instructors = ""
    if instructors == "Hal": 
        instructors = "Hall" 
    if " " in instructors: 
        idx = instructors.find(" ") 
        instructors = instructors[:idx]
        
    # Construct string. 
    s = str(course_id) + ", " + str(coursetitle) + ", " + str(coursename) + ", " + str(coursenumber) + ", " + str(coursedept) + ", " + str(fall) + ", " + str(winter) + ", " + str(spring) + ", "+ str(units) + ", " + str(prerequisites) + ", " + str(writingIntensive) + ", " + str(instructors) + "\n"
    strings.append(s)
    
# Save to file 
outfile = open("parsedData.txt","w") 
outfile.write("internal ID, coursetitle, coursename, coursenumber, coursedepartment(s), fall, winter, spring, units, prerequisites, writing intensive, instructors\n")
for s in strings: 
    outfile.write(s)
outfile.close()