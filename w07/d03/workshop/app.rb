require 'faker'    
require './student'
require './classroom'
require './grade'
require './reportcard'


# Our four classrooms for the first year
@A = Classroom.new("1A")
@B = Classroom.new("1B")
@C = Classroom.new("1C")
@D = Classroom.new("1D")

# $newStudent = Student.new(Faker::Name::name, rand(11..20))
def genStudent
  s = Student.new(Faker::Name::name, rand(11..20))
  s.reportcard.addGrade(Grade.new("math", rand(0..100)))
  s.reportcard.addGrade(Grade.new("history", rand(0..100)))
  s.reportcard.addGrade(Grade.new("english", rand(0..100)))
  s.reportcard.addGrade(Grade.new("science", rand(0..100)))
  return s
end

# Generate our students
# adding students Classes

for i in 1..25
  @A.addStudent(genStudent())
end

1..25.times do |i|
  @B.addStudent(genStudent())
end
1..25.times do |i|
  @C.addStudent(genStudent())
end
1..25.times do |i|
  @D.addStudent(genStudent())
end

# Check the rosters
@A.roster()

puts "\n"

@B.roster()
puts "\n"

@C.roster()
puts "\n"

@D.roster()
puts "\n"


###########################################################
# CHALLENGE 1

def findFailing(classroom)
  puts "function Running"
  classroom.students.each { |keyName,value|
    # puts value.inspect
    total = 0
    value.reportcard.grades.each { |key, value|
     total = total + value
   }
   # keyName = student name
     if total < 200
     puts keyName + ":\t" + total.to_s + ":\tFAIL"
     else
       puts keyName + ":\t" + total.to_s + ":\tYOU PASSED!!!"
     end

  }
end

findFailing(@A)

###########################################################
# CHALLENGE 2


def findExceptional(classroom)
  puts "\n\nSecond function running:\n\n"
  classroom.students.each { |studentName,studentObject|
      total = 0
      studentObject.reportcard.grades.each { |subject, score|
        total = total + score
      }
      if total > 260
        puts studentName + ":\t" + total.to_s
      end
    }
end

findExceptional @B

############################################################
