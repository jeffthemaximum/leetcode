

def is_power_of_two(n)
  return true if n.to_s(2).split(//).inject(0){|sum, num| sum += num.to_i } == 1 && n > 0
  return false
end

puts is_power_of_two(16)
puts is_power_of_two(15)
puts is_power_of_two(-16)