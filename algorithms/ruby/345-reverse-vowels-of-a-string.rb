s = "leetcode"
require 'pry'
def get_vowels(s)
  vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  s.split(//).select{|e| e if vowels.include? e}
end

def reverse_vowels(s)
  vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  s_vowels = get_vowels(s).reverse
  s.split(//).map{|e| (vowels.include?(e) ? s_vowels.shift : e)}.join
end


