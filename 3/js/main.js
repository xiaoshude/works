(function($){
    var ListItems=function(listid){
        var temp=$(listid);
        this.el=$('li',temp);
        this.sidebarCon=$('#sidebarCon>div');
        this.sidebarConClose=$('#sidebarCon>div>span');
        this.state='allClosed';
        this.currentOpened=null;
        var self=this;
        this.el.bind('click',function(){
            var index=$(this).index();
            if(self.state==="allClosed"){
                console.log(self.sidebarCon.eq(index).attr('id')+'显示');
                self.sidebarCon.eq(index).css('left','-160px');
                self.sidebarCon.get(index).className='item sidebarCon-move-right';
                self.currentOpened=self.sidebarCon.get(index);
                self.state='opened';
            }else{
                console.log(self.currentOpened.id+'关闭');
                $(self.currentOpened).css('left','35px');
                self.currentOpened.className='item sidebarCon-move-left';
                console.log(self.sidebarCon.eq(index).attr('id')+'显示');
                self.sidebarCon.eq(index).css('left','-160px');
                self.sidebarCon.get(index).className='item sidebarCon-move-right';
                self.currentOpened=self.sidebarCon.get(index);
                self.state='opened';
            }
        });
        this.sidebarConClose.bind('click',function(){
            var index=self.sidebarConClose.index(this);
            console.log(index);
            console.log(self.sidebarCon.eq(index).attr('id')+'关闭');
            $(self.currentOpened).css('left','35px');
            self.sidebarCon.get(index).className='item sidebarCon-move-left';
            self.currentOpened=null;
            self.state='allClosed';
        })

    };

    var Sidebar=function(sidebarId,closeId){
        this.state='opened';
        this.el=$(sidebarId);
        this.closesidebarEl=$(closeId);
        this.listItems=new ListItems('#list');
        var self=this;
        this.closesidebarEl.bind('click',function(){
            self.switch();
        });

    };
    Sidebar.prototype.open=function(){
        console.log('Sidebar打开');
        this.el.css('left','-35px');
        this.el[0].className='sidebar smr';
        this.closesidebarEl.css('left','100px');
        this.closesidebarEl[0].className='close-sidebar cml';

    };
    Sidebar.prototype.close=function(){
        console.log('Sidebar关闭');
        this.el.css('left','0');
        this.el[0].className='sidebar sml';
        this.closesidebarEl.css('left','0');
        this.closesidebarEl[0].className='close-sidebar cmr';
        $(this.listItems.currentOpened).css('left','35px');
        this.listItems.currentOpened.className='item sidebarCon-move-left';
    };
    Sidebar.prototype.switch=function(){
        if(this.state==='opened'){
            this.close();
            this.state='closed';
        }else{
            this.open();
            this.state='opened';
        }

    };


    var sidebar=new Sidebar('#sidebar','#closeSidebar');
    /*var SidebarCon=function(){
        this.state='allClosed';

    }*/

})(jQuery);