
   var user;
   var count;
   
   var gameArray=new Array();
   gameArray[1]="1.JPG";
   gameArray[2]="2.JPG";
   gameArray[3]="3.JPG";
   gameArray[4]="4.JPG";
   gameArray[5]="5.JPG";
   gameArray[6]="6.JPG";
   gameArray[7]="7.JPG";
   gameArray[8]="8.JPG";
   gameArray[9]="blank.JPG";
   
   var tiles=new Array();
   for(var i=1;i<=9;i++)
   tiles[i]=gameArray[i];
   
   function  themeNumbers()
   {
		gameArray[1]="1.JPG";
		gameArray[2]="2.JPG";
		gameArray[3]="3.JPG";
		gameArray[4]="4.JPG";
		gameArray[5]="5.JPG";
		gameArray[6]="6.JPG";
		gameArray[7]="7.JPG";
		gameArray[8]="8.JPG";
		gameArray[9]="blank.JPG";
	   
	   for(var i=1;i<=9;i++)
	   tiles[i]=gameArray[i];
		    count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=tiles[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=tiles[i];
				 }
		   
		   
	}
	 function  themeImage()
   {
		gameArray[1]="99.JPG";
		gameArray[2]="88.JPG";
		gameArray[3]="77.JPG";
		gameArray[4]="66.JPG";
		gameArray[5]="55.JPG";
		gameArray[6]="44.JPG";
		gameArray[7]="33.JPG";
		gameArray[8]="22.JPG";
		gameArray[9]="blank.JPG";
	   
	   for(var i=1;i<=9;i++)
	   tiles[i]=gameArray[i];
		    count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=tiles[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=tiles[i];
				 }
		   
		   
	}

   function on()
   {       count=0;
		  
		   var b=new Array();
		   for(var i=1;i<=9;i++)
			  b[i]=0;
			 for(var i=1;i<=9;)
			 {
				 var v=Math.floor(Math.random()*9+1);
				 if(b[v]==0)
				 {
					 gameArray[v]=tiles[i];
					  i++;	
						b[v]=1;						  
				 }
			 }
			 
			 
			 for(var i=1;i<=9;i++)
			 {
				var random="im"+i;
			
			document.getElementById(random).src=gameArray[i];
			
			 }
			 for(var i=1;i<=9;i++)
			 {
				var stil="iim"+i;
			
			document.getElementById(stil).src=tiles[i];
			
			 }
			 
			user=prompt("Enter Your Name ");
			document.getElementById("welcome").innerText="WELCOME : "+user;
   }
	   
	   
   function imageClicked(imageId,imageNumber)
	{
		var selectedImageSrc=gameArray[imageNumber];
		
		if(selectedImageSrc=="blank.JPG")
		{
		   // document.getElementById("error").innerText="Blank Can't Move";
		   alert("Can't Move");
		}
		
		else
		{            
			
			var index=0; 
			
			for(var i=1;i<=9;i++)
			{
				if(gameArray[i]=="blank.JPG")
				{
					index=i;
					break;                        
				}
			}
			
			
			if(gameArray[imageNumber+1]==gameArray[index] || gameArray[imageNumber-1]==gameArray[index] || gameArray[imageNumber+3]==gameArray[index] || gameArray[imageNumber-3]==gameArray[index])
			{
				//document.getElementById("error").innerText="";
				
			var destImageId="im"+index;
			
			document.getElementById(destImageId).src=selectedImageSrc;
			document.getElementById(imageId).src="blank.JPG";
			
			gameArray[imageNumber]="blank.JPG";
			gameArray[index]=selectedImageSrc;
			count++;
			document.getElementById("error").innerText="Total Moves : "+count;
			
		   } 
		else
		{
			//document.getElementById("error").innerText="Wrong Movement";
			alert("Wrong Movement");
		}
		   
		  
		   var temp=0;			   
		   for(var i=1;i<=9;i++)
		   {
			  if(gameArray[i]!=tiles[i]){
			  temp=1;
			  break;
			  }
		   }
		   if(temp==0){
				window.location="winnerpage.html";	
		   }
		
		}
	}       
      