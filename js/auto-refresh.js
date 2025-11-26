(function(){
    let n = +sessionStorage.refreshCount || 0;
    if(n < 2) {
        sessionStorage.refreshCount = ++n;
        setTimeout(() => location.reload(), 5000);
    } else sessionStorage.removeItem('refreshCount');
})();