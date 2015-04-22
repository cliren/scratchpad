var max = function(entries) {
  return entries
    .reduce(function(previous, current){
      return current.localeCompare(previous) <=0 ? current : previous;
    }, entries[0]);
};

console.log(max(['arun', 'suren', 'master', 'aali']));