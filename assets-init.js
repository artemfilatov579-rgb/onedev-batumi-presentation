(function(){var M=window.__IMG||{};
function fix(s){return s.replace(/__IMGREF_(I\d+)__/g,function(_,k){return M[k]||''})}
document.querySelectorAll('img[data-src]').forEach(function(e){
  e.src=fix(e.getAttribute('data-src'));e.removeAttribute('data-src');});
document.querySelectorAll('[data-bg]').forEach(function(e){
  e.style.backgroundImage="url('"+fix(e.getAttribute('data-bg'))+"')";
  e.removeAttribute('data-bg');});})();