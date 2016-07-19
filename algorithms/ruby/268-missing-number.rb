def sum(array)
  array.inject(0){|sum,x| sum + x }
end

def missing_number(nums)
  sum(Array(0..nums.length)) - sum(nums)
end

puts missing_number [0, 1, 3]