// JavaScript Document
window.onload=function(){
   var odiv=document.getElementById('imgRun');//获取轮播图容器
   var oul=odiv.getElementsByTagName('ul')[0];//获取轮播图图片列表
   var oli=oul.getElementsByTagName('li');//获取轮播图图片列表单元
   var oimg=oul.getElementsByTagName('img');//获取轮播图图片列表所有图片
   
   var obtn=document.getElementById('btn');//获取轮播图小按键div元素
   var oA=obtn.getElementsByTagName('a');//获取轮播图小按键
   
   var imgWidth = 800;//定义图片宽度
   var inow=0;//定义小按钮索引当前的值
   var inow2=0;//定义图片索引当前的值
   oul.style.width=oimg.length*imgWidth+'px';//设置图片列表宽度
   
   for(var i=0;i<oA.length;i++){
	      oA[i].index=i;//小按钮索引值对应i
	      oA[i].onclick=function(){//设置小按钮点击事件
               for(var i=0;i<oA.length;i++){
				  oA[i].className='';//设置oA[i]的class值为空
					  }
					  this.className='active';//设置当前小按钮的class值为active
					  $(oul).animate({left:-inow*imgWidth},'slow');

		  }//设置小按钮的转换
		  inow=0;
		  
	   }
	   
   //重置图片定位
   function reset1(){
		     if(inow==0){
					      oli[0].style.position='static';//重置第一张图片定位为默认
						  oul.style.left=0;//设置图片列表left值
						  inow2=0;//重置图片当前索引为0
				 }
			 }
	
	//播放函数
   function toRun(){
	     if(inow2==oli.length-1){//如果当前小按钮为最后一个小按钮
		       oli[0].style.position='relative';//设置第一张图片定位
			   oli[0].style.left=oli.length*imgWidth+'px';//使之定位在最后一张后面
			   inow=0;//小按钮索引重置为0
		}
		else{
	           inow++;//如果不是最后一个小按钮 则索引加1
		}	 
		inow2++;//图片索引+1
		for(var i=0;i<oA.length;i++){
				oA[i].className=' ';//当前小按钮class为空
		}
		oA[inow].className='active';  //设置当前小按钮class为active
		
		$(oul).animate({left:-inow2*imgWidth},'slow',reset1);//图片转换(jQuery)	
		
		
		
	 }
	 setInterval(toRun,5000);//三秒一次执行函数toRun
};

