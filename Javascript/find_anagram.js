//https://leetcode.com/problems/find-all-anagrams-in-a-string/

var findAnagrams = function(s, p) {
    const result=[], map={}
    for(let char of p){
        if(map[char]==undefined) map[char]=1
        else map[char]=map[char]+1
    }
   let left=right=0
   let count=p.length//total no of char needed to form an anagram.
   while(right<s.length){
       //if current char is found in p
       if(map[s[right]]>0)count--
        map[s[right]]--//Decrement the frequency of the current char in map.
       right++
       //if the count is 0, it means anagram starting at the left index
       if(count==0)result.push(left)
       if(right-left==p.length){
           if(map[s[left]]>=0)count++
           map[s[left]]++//Increase frequency of char at the left index in map.
           left++
       }
   }
 return result   
};