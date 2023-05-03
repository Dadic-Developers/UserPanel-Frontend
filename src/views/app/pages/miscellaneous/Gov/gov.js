let dot = '·'
let gerd = 'o'
let dollar = '§'
let out = ''
let lasttype='+'
let newtype='+'
let data=[];
let id=0
var obj = new Object();
var subobj = new Object();
var suborg=new Object();
var titles='';
var links='';
var ids=0;
var oldtitle='';
var oldlink='';
var oldids=0;
var oldtitlesub='';
var oldlinksub='';
var oldidssub=0;
var suborgs=[];
for (let item of document.getElementsByTagName('p')){
	
    let link = item.getElementsByTagName('a')
    if(link.length >0 ){
		id+=1;
        if(item.innerText.includes(dot)){
            out += '+\t';
			newtype='+';
			
        }
        else if (item.innerText.includes(gerd)){
            out += '++\t';
			newtype='++';
        }
        else if (item.innerText.includes(dollar)){
            out += '+++\t';
			newtype='+++';
        }
		
        out += link[0].innerText + "\t" + link[0].getAttribute("href") + "\n";
		 if( newtype=='+'){
			 oldtitle=titles;
			 oldlink=links;
			oldids=ids;
		   titles = link[0].innerText;
		   links  =  link[0].getAttribute("href");
		   ids = id;
		
		  
		   
		}
		 if (newtype=="+"  && id!=1){
		   
		   obj.title = oldtitle;
		   obj.link  = oldlink;
		   obj.id = oldids;
		   obj.slug=[];
			obj.suborg=suborg;
			data.push(obj);
			obj=new Object();
			subobj = new Object();
			suborg=[];
			
			suborgs=[];
			
		}
			
	else if (newtype=="++" ){
		   
		   subobj = new Object();
		   subobj.title = link[0].innerText;
		   subobj.link  =  link[0].getAttribute("href");
		   subobj.id = id;
		   subobj.slug=[];
		   subobj.suborg=[]
		   if (lasttype==="+++"){
			  
			   suborg[suborg.length-1].suborg=suborgs
			   suborgs=[];
		   }
		   
		  
		   suborg.push(subobj)
		   subobj=[]
		    
	}
	else if (newtype="+++"){
		  
		   subobjs = new Object();
		   subobjs.title = link[0].innerText;
		   subobjs.link  =  link[0].getAttribute("href");
		   subobjs.id = id;
		   subobjs.slug=[];
		   subobjs.suborj=[];
		   suborgs.push(subobjs)
	}
	lasttype=newtype;
		
    }
	
   
}
obj.title = titles;
obj.link  =links;
obj.id = ids;
obj.slug=[];
obj.suborg=suborg;
data.push(obj);
obj=new Object();
subobj = new Object();
suborg=[];
console.log(data)