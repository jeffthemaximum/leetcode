# FAIL

require 'pry'

a = -3
b = -3

def greater_pos(pos, neg)
  pray = Array.new(pos)
  neg.abs.times do
    pray.pop
  end
  return pray.length
end

def poses(a, b)
  Array.new(a).concat(Array.new(b)).length
end

def one_pos(pos, neg)
  return greater_pos(pos, neg) if pos >= neg.abs
  return (greater_pos(neg.abs, pos*-1) * -1) if pos < neg.abs
end

def get_sum(a, b)
  a = Array(a).pack('l').unpack('l').first
  b = Array(b).pack('l').unpack('l').first
  return 0 if (a * -1) == b
  return poses(a, b) if a >= 0 && b >= 0
  return one_pos(pos=a, neg=b) if b < 0 && a >= 0
  return one_pos(pos=b, neg=a) if a < 0 && b >= 0
  return poses(a.abs, b.abs) * -1
end

puts get_sum(a, b)
