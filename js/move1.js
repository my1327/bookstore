// JavaScript Document
window.onload=function(){
   var odiv=document.getElementById('imgRun');//��ȡ�ֲ�ͼ����
   var oul=odiv.getElementsByTagName('ul')[0];//��ȡ�ֲ�ͼͼƬ�б�
   var oli=oul.getElementsByTagName('li');//��ȡ�ֲ�ͼͼƬ�б�Ԫ
   var oimg=oul.getElementsByTagName('img');//��ȡ�ֲ�ͼͼƬ�б�����ͼƬ
   
   var obtn=document.getElementById('btn');//��ȡ�ֲ�ͼС����divԪ��
   var oA=obtn.getElementsByTagName('a');//��ȡ�ֲ�ͼС����
   
   var imgWidth = 800;//����ͼƬ���
   var inow=0;//����С��ť������ǰ��ֵ
   var inow2=0;//����ͼƬ������ǰ��ֵ
   oul.style.width=oimg.length*imgWidth+'px';//����ͼƬ�б���
   
   for(var i=0;i<oA.length;i++){
	      oA[i].index=i;//С��ť����ֵ��Ӧi
	      oA[i].onclick=function(){//����С��ť����¼�
               for(var i=0;i<oA.length;i++){
				  oA[i].className='';//����oA[i]��classֵΪ��
					  }
					  this.className='active';//���õ�ǰС��ť��classֵΪactive
					  $(oul).animate({left:-inow*imgWidth},'slow');

		  }//����С��ť��ת��
		  inow=0;
		  
	   }
	   
   //����ͼƬ��λ
   function reset1(){
		     if(inow==0){
					      oli[0].style.position='static';//���õ�һ��ͼƬ��λΪĬ��
						  oul.style.left=0;//����ͼƬ�б�leftֵ
						  inow2=0;//����ͼƬ��ǰ����Ϊ0
				 }
			 }
	
	//���ź���
   function toRun(){
	     if(inow2==oli.length-1){//�����ǰС��ťΪ���һ��С��ť
		       oli[0].style.position='relative';//���õ�һ��ͼƬ��λ
			   oli[0].style.left=oli.length*imgWidth+'px';//ʹ֮��λ�����һ�ź���
			   inow=0;//С��ť��������Ϊ0
		}
		else{
	           inow++;//����������һ��С��ť ��������1
		}	 
		inow2++;//ͼƬ����+1
		for(var i=0;i<oA.length;i++){
				oA[i].className=' ';//��ǰС��ťclassΪ��
		}
		oA[inow].className='active';  //���õ�ǰС��ťclassΪactive
		
		$(oul).animate({left:-inow2*imgWidth},'slow',reset1);//ͼƬת��(jQuery)	
		
		
		
	 }
	 setInterval(toRun,5000);//����һ��ִ�к���toRun
};

