# @param {String} s
# @return {Integer}
def length_of_last_word(s)
  s.strip != "" ? s.split(" ")[-1].length : 0
end