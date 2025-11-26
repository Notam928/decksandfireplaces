(function(){
    let n = +sessionStorage.refreshCount || 0;
    if(n < 3) {
        sessionStorage.refreshCount = ++n;
        setTimeout(() => location.reload(), 2000);
    } else sessionStorage.removeItem('refreshCount');
})();