s = "barfoothefoobarman"
words = ["foo", "bar"]

def find_substring(s, words)
  word_length = s.length
  split_s = s.split(//).each_slice(word_length).to_a 
end