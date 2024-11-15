export function initMixin(Vue){
    Vue.prototype._init=function(options){
        // initState(vm)
        const vm =this;
        vm.$options=options ;
        initState(vm)
    }
}

function initState(vm) { 
    const opts =vm.$options;
    if(opts.data){
        initData(vm)
    }
 }

function initData(vm){
    let data =vm.$options.data
   data= typeof data ==='function'?data.call(this):data;
   console.log(data);
}