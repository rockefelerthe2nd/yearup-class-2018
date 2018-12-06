class Classroom
  attr_accessor :name
  attr_accessor :students

  def initialize(name)
    @name = name
    @students = {}
  end

  def addStudent(student)
    if @students.key?(student.name)
      puts "Sorry, #{student.name} is already in here."
    end
    @students[student.name] = student
  end

  def roster
    puts @name + " roster:"
    # key is the student name and value here is the student object
    @students.each do |key, value|
      # puts value.inspect
      puts "#{value.name}: #{value.age}"
    end
  end

end
