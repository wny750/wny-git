class List{
    constructor(){
        this.cont = document.querySelectorAll("#main .list1 .list2");
        this.url = "http://localhost/wny-git/php/goods.json";

        this.init();
        this.addEvent();
    }
    init(){
        var that = this;
        ajax({
            url:this.url,
            success:function(res){
                // console.log(res)
                that.res = JSON.parse(res);

                that.display()
            }
        })
    }
    display(){
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str += `<li class="box" index="${this.res[i].goodsId}">
                        
                        <img src="${this.res[i].src}">
                        
                        <a>${this.res[i].name}</a>
                        
                        <p>市场价：￥${this.res[i].oldprice}</p>
                        <p>销售价：￥${this.res[i].newprice}</p>
                    </li>`
        }
        for(var i = 0;i<this.cont.length;i++){
            this.cont[i].innerHTML = str;
        }
    }
    addEvent(){
        for(var i = 0;i<this.cont.length;i++){
        this.cont[i].addEventListener("click",(eve)=>{
            let e = eve || window.event;
            let target = e.target ||r.srcElement;
            if(target.nodeName == "IMG"){
                // console.log(1)
                this.id = target.parentNode.getAttribute("index");
                this.setlocal();
                location.href = "http://localhost/wny-git/商品详情1.html"
            }
        })
        }
    }
    setlocal(){
        localStorage.setItem("data",this.id);
    }
}
new List;