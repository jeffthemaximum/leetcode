def hamming_weight(n)
  n.to_s(2).split(//).inject(0){|sum, num| sum += num.to_i }
end