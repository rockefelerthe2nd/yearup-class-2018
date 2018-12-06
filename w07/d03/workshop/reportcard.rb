class Reportcard

  def initialize
    @grades = {}
  end

  def addGrade(grade)
    if @grades.key?(grade.subject)
      raise "Sorry, you cannot add or change #{grade.subject} grade because it was already entered."
    end
    @grades[grade.subject] = grade.score
  end

  def printCard
    @grades.each do |subject, grade|
      puts "Subject: #{grade.subject} - #{grade.score}"
    end
  end

  def grades
  @grades
  end

end
