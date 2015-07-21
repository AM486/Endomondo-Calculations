// ==UserScript==
// @name       Endomondo Calculator
// @namespace  https://www.endomondo.com/*
// @namespace  https://www.endomondo.com/users/505751/workouts/
// @version    0.1
// @description  enter something useful
// @match      https://www.endomondo.com/*
// @copyright  2014+, arvartho
// ==/UserScript==

//document.write("Hello World!");

$('head').append('<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>');
//html
$("#inner").append("<div id=endomondo_calc>"+
                   "<div id=arrow><img  src=https://dl.dropboxusercontent.com/u/11994529/endomondo.png width=25 height=25></div>"+
                   
                   "<div id=endomondo_calc2>"+
                   
                   "<div><h3 id=calcTitle>Pace Calculator</h3></div>"+                   
                   "<div id=paceCalculator>"+
                   "<div ><div id=time1 >Time: <input type=number  max=23 min=0 name=hours1 placeholder=HH >:<input type=number  max=59 min=0 placeholder=MM name=minutes1>:<input type=number placeholder=SS  max=59 min=0 name=seconds1></div>"+
                   "<div id=race><form >Distance: <input type=number  min=0 name=km1 step=any  > km</br> Marathon<input type=radio name=race1 value=marathon>		Half-Marathon<input type=radio name=race1  value=half_marathon>		10K<input type=radio name=race1  value=10k>		5K<input type=radio name=race1  value=5k></form></div>"+
                   "<div id=pace>Pace: <input type=text  align=right disabled max=59 min=0 placeholder=MM name=minutesPace class=result>:<input type=text placeholder=SS disabled max=59 min=0 name=secondsPace class=result></div>"+
                   "<div id=button><input type=button  name=submit1 value=Calculate  ></div></div></div>"+
                   
                   "<div><h3 id=calcTitle>Finish Time Calculator</h3></div>"+                   
                   "<div id=finishCalculator>"+
                   "<div><div id=pace2 >Pace: <input type=number max=59 min=0 placeholder=MM name=minutesPace2>:<input type=number placeholder=SS max=59 min=0 name=secondsPace2></div>"+
                   "<div id=race><form>Distance: <input type=number  min=0 name=km2   step=any > km</br> Marathon<input type=radio name=race2 value=marathon>  Half-Marathon<input type=radio name=race2 value=half_marathon>  10K<input type=radio name=race2 value=10k>  5K<input type=radio name=race2 value=5k></form></div>"+
                   "<div id=time>Time: <input type=text disabled max=23 min=0 name=hours placeholder=HH class=result>:<input type=text disabled max=59 min=0 placeholder=MM name=minutes class=result>:<input type=text placeholder=SS disabled max=59 min=0 name=seconds class=result></div>"+
                   "<div id=button><input type=button  name=submit2 value=Calculate ></div></div></div>"+
                   
                   "<div><h3 id=calcTitle>Time Subtraction</h3></div>"+
                   "<div id=timeSubtraction><table>	<tbody>"+
                   "<tr id=st><div  ><th>Start Time: </th>"+
                   "<td><input type=number   max=23 min=0 name=shours placeholder=HH ></td><th>:</th><td><input type=number  max=59 min=0 placeholder=MM name=sminutes></td><th>:</th><td><input type=number placeholder=SS  max=59 min=0 name=sseconds></td><td id=date><input type=date name=sdate ></td></div></tr>"+
                   "<tr id=et><div  ><th>End Time: </th>"+
                   "<td><input type=number   max=23 min=0 name=ehours placeholder=HH ></td><th>:</th><td><input type=number  max=59 min=0 placeholder=MM name=eminutes></td><th>:</th><td><input type=number placeholder=SS  max=59 min=0 name=eseconds></td><td id=date><input type=date name=edate ></td></div></tr>"+
                   "<tr id=dur><div  ><th>Duration: </th>"+
                   "<td><input type=number disabled  max=23 min=0 name=dhours placeholder=HH ></td><th>:</th><td><input type=number disabled max=59 min=0 placeholder=MM name=dminutes></td><th>:</th><td><input type=number disabled placeholder=SS  max=59 min=0 name=dseconds></td></div></tr>"+
                   "</tbody></table>	"+
                   
                   "<div id=button><input type=button  name=submit3 value=Calculate ></div>"+
                   "</div>"+
                   
                   "<div><h3 id=calcTitle>This is a Placeholder</h3></div>"+                   
                   "<div><p>Lorem Ipsum</p><div><input type=button value=Calculate></div></div>"+
                   "</div></div>" );

//css
$('style').append(
    
    "#arrow{"+
    "border-radius: 50%;"+
    "background-color:gray;"+
    "display:block;"+
    "position:relative;"+
    "left:420px;"+
    "clear:both;"+
    "width:25px;"+
    "height:25px;"+
    "padding-right:5px;}"+
    
    "#date{padding-left:10px;}"+
    
    "td{padding-bottom:5px;"+
    "width:28;}"+
    
    " #time1,#race,#pace,#button,#pace2,#time, #et,#st,#dur {padding-bottom:5px;"+
    "}"+
    
    "#endomondo_calc{width:450px;"+    		
    "padding-left: 5%;"+
    "overflow:visible;"+
    "padding-bottom: 2%;"+
    "position:fixed;"+
    "left:-35em;"+   
    "top:440px;"+     
    "clear:both;  }"+  
    
    "input[name=race1],input[name=race2],input[name=km1],input[name=km2]{"+
    "margin-right:10px;	}"+
    
    "#endomondo_calc{	font-family:  sans-serif;"+
    "color: #ffffff      ;		}"+
    "input{ 	text-align:right; 	}"+
    "#time1 input,#pace2 input, #st input[type=number], #et input[type=number], #dur input[type=number] {width:40px;	} "+
    
    "#calcTitle{width:450px;"+
    "height:30px;"+
    "color:white;"+
    "border-bottom:0px solid white;"+
    "letter-spacing:3px;"+				
    "padding-top: 2%;"+
    "background-color: #87aa14;"+
    "font-size: 1.5em;"+
    "font-weight: bold;"+
    "border-radius: 10px;"+
    "padding-left: 2%;}"	+
    
    "#paceCalculator, #finishCalculator, #timeSubtraction{"+
    "color:white;"+
    "border: 1px solid white;"+
    "padding-left: 5%;"+
    "padding-bottom: 2%;"+
    "	border-radius: 10px;"+
    "background-color: #87aa14;"+
    "overflow:hidden;"+
    "height:115px;"+ 
    "background-image: url('endomondo.png');"+
    "	background-position:95% 5%; "+
    "background-size: 50px 50px;"+
    "background-repeat: no-repeat;}"+
    ".result{width:30px;	}"+
    
    "input[type=button]{"+
    "text-align:center;"+
    "background-color: #87aa14;"+
    "border: 1px solid white;"+
    "color:white;"+
    "position:relative;"+
    "left:20%;"+
    "width:100px;"+
    "height:25px;}"+
    
    "input[name=km1],input[name=km2]{width:50px;}"+
    
    
    
    "#paceCalculator:hover, #finishCalculator:hover,  #timeSubtraction:hover{background-color:#6c8713;}"+
    "h3#calcTitle:hover{background-color:#6c8713;}"+
    "#arrow:hover{background-color:#565454;"+
    "cursor:pointer;}"+
    "input[type=button]:hover{border-color:#d6f2f0 ;"+
    "cursor:pointer;"+
    "box-shadow: 1px 1px 1px  white  ;}"+
    
    
    "th{font-weight:normal;	}"
    
    
);

document.getElementById("time1").onmouseover=function(){
    
    var hours=parseInt( $("input[name=hours1]").val() );
    var minutes=parseInt( $("input[name=minutes1]").val() );
    var seconds=parseInt( $("input[name=seconds1]").val() );
    
    $("input[name=hours1]").val()==''?hours=0:parseInt( $("input[name=hours1]").val() );
    $('input[name=hours1]').val(hours==''?"00":hours<10?"0"+hours:hours);
    
    $("input[name=minutes1]").val()==''?minutes=0:parseInt( $("input[name=minutes1]").val() );
    $('input[name=minutes1]').val(minutes==''?"00":minutes<10?"0"+minutes:minutes);					
    
    $("input[name=seconds1]").val()==''?seconds=0:parseInt( $("input[name=seconds1]").val() );
    $('input[name=seconds1]').val(seconds==''?"00":seconds<10?"0"+seconds:seconds);
};

document.getElementById("pace2").onmouseover= function() {
    
    var minutes=parseInt( $("input[name=minutesPace2]").val() );
    var seconds=parseInt( $("input[name=secondsPace2]").val() );
    
    $("input[name=minutesPace2]").val()==''?minutes=0:parseInt( $("input[name=minutesPace2]").val() );
    $('input[name=minutesPace2]').val(minutes==''?"00":minutes<10?"0"+minutes:minutes);
    
    $("input[name=secondsPace2]").val()==''?seconds=0:parseInt( $("input[name=secondsPace2]").val() );
    $('input[name=secondsPace2]').val(seconds==''?"00":seconds<10?"0"+seconds:seconds);		
    
}

document.getElementById("st").onmouseover= function() {
    
    var hours=parseInt( $("input[name=shours]").val() );
    var minutes=parseInt( $("input[name=sminutes]").val() );
    var seconds=parseInt( $("input[name=sseconds]").val() );
    
    $("input[name=shours]").val()==''?hours=0:parseInt( $("input[name=shours]").val() );
    $('input[name=shours]').val(hours==''?"00":hours<10?"0"+hours:hours);
    
    $("input[name=sminutes]").val()==''?minutes=0:parseInt( $("input[name=sminutes]").val() );
    $('input[name=sminutes]').val(minutes==''?"00":minutes<10?"0"+minutes:minutes);					
    
    $("input[name=sseconds]").val()==''?seconds=0:parseInt( $("input[name=sseconds]").val() );
    $('input[name=sseconds]').val(seconds==''?"00":seconds<10?"0"+seconds:seconds);	
    
}

document.getElementById("et").onmouseover= function() {
    
    var hours=parseInt( $("input[name=ehours]").val() );
    var minutes=parseInt( $("input[name=eminutes]").val() );
    var seconds=parseInt( $("input[name=eseconds]").val() );
    
    $("input[name=ehours]").val()==''?hours=0:parseInt( $("input[name=ehours]").val() );
    $('input[name=ehours]').val(hours==''?"00":hours<10?"0"+hours:hours);
    
    $("input[name=eminutes]").val()==''?minutes=0:parseInt( $("input[name=eminutes]").val() );
    $('input[name=eminutes]').val(minutes==''?"00":minutes<10?"0"+minutes:minutes);					
    
    $("input[name=eseconds]").val()==''?seconds=0:parseInt( $("input[name=eseconds]").val() );
    $('input[name=eseconds]').val(seconds==''?"00":seconds<10?"0"+seconds:seconds);	
    
}





$(document).ready(function(){
    var click=false
    $("#endomondo_calc2").accordion({collapsible: true, active: false});
    
    $("#arrow").click(function(){
        if (click==true) {
            $("#endomondo_calc").animate({ left: '-=450px'}, 1000 );
            $("#arrow").css("background-color","gray");
            click=false;
            //f8f8f8  
            
        }
        else{
            $("#endomondo_calc").animate({ left: '+=450px'}, 1000 );
            $("#arrow").css("background-color","#87aa14");
            click=true;
        }
    });
    
    
    var dist=0;
    //alert(dist);
    //paceCal
    $('input[name=race1]').click(function(){
        switch (  $('input[name=race1]:checked').val()  ){
            case 'marathon':
                dist=42;
                break;
            case 'half_marathon':
                dist=21;
                break;
            case '10k':
                dist=10;
                break;
            case '5k':
                dist=5;
                break;							
        }
        $('input[name=km1]').val(dist);					
    });
    
    $('input[name=hours1]').focusout(function(){
        var hours=parseInt( $("input[name=hours1]").val() );
        $("input[name=hours1]").val()==''?hours=0:parseInt( $("input[name=hours1]").val() );
        //$('input[name=hours1]').val(hours<10?"0"+hours:hours);
        $('input[name=hours1]').val(hours==''?"00":hours<10?"0"+hours:hours);
    }); 
    
    $('input[name=minutes1]').focusout(function(){
        var minutes=parseInt( $("input[name=minutes1]").val() );
        $("input[name=minutes1]").val()==''?minutes=0:parseInt( $("input[name=minutes1]").val() );
        //$('input[name=minutes1]').val(minutes<10?"0"+minutes:minutes);
        $('input[name=minutes1]').val(minutes==''?"00":minutes<10?"0"+minutes:minutes);					
    }); 
    
    $('input[name=seconds1]').focusout(function(){
        var seconds=parseInt( $("input[name=seconds1]").val() );
        $("input[name=seconds1]").val()==''?seconds=0:parseInt( $("input[name=seconds1]").val() );
        //$('input[name=seconds1]').val(seconds<10?"0"+seconds:seconds);
        $('input[name=seconds1]').val(seconds==''?"00":seconds<10?"0"+seconds:seconds);
    }); 
    
    //uncheckShit
    $('input[name=km1]').click(function(){
        if( ($('input[name=km1]')!=42)&&($('input[name=km1]')!=21)&&($('input[name=km1]')!=10)&&($('input[name=km1]')!=5) ){
            $('input[name=race1]').attr("checked", false);
        }                    
    });
    
    //uncheckShit2
    $('input[name=km2]').click(function(){
        if( ($('input[name=km2]')!=42)&&($('input[name=km2]')!=21)&&($('input[name=km2]')!=10)&&($('input[name=km2]')!=5) ){
            $('input[name=race2]').attr("checked", false);
        }                    
    });
    
    
    $('input[name=submit1]').click(function(){
        
        var hours=$("input[name=hours1]").val();
        var minutes=$("input[name=minutes1]").val();
        var seconds=$("input[name=seconds1]").val();
        
        if (hours==""){hours=0;}
        if (minutes==""){minutes=0;}
        if (seconds==""){seconds=0;}
        var time=(hours*3600) + (minutes*60) +parseInt(seconds);
        dist=  $('input[name=km1]').val() ;
        
        if (dist==0){
            alert("No distance was selected!");
            return 0;
        }
        var totalSec=parseInt(time/dist);
        var paceMin= parseInt( totalSec / 60 ) % 60;
        var paseSeconds= totalSec % 60;
        //$('#test').append('<p>'+(hours<10? "0" + hours : hours )+":"+(minutes<10? "0" + minutes : minutes )+":"+(seconds<10? "0" + seconds : seconds )+'</p>'+time+"/"+dist+"="+totalSec);
        $('#test').append('<p>'+'pace:  '+(paceMin<10? "0" + paceMin : paceMin )+":"+(paseSeconds<10? "0" + paseSeconds : paseSeconds )+'</p>');
        $('input[name=minutesPace]').val(paceMin<10? "0" + paceMin : paceMin );
        $('input[name=secondsPace]').val(paseSeconds<10? "0" + paseSeconds : paseSeconds );
    });
    
    //finishCalc
    $('input[name=race2]').click(function(){
        switch (  $('input[name=race2]:checked').val()  ){
            case 'marathon':
                dist=42;
                break;
            case 'half_marathon':
                dist=21;
                break;
            case '10k':
                dist=10;
                break;
            case '5k':
                dist=5;
                break;							
        }
        $('input[name=km2]').val(dist);		
    });
    
    $('input[name=minutesPace2]').focusout(function(){
        var minutes=parseInt( $("input[name=minutesPace2]").val() );
        $("input[name=minutesPace2]").val()==''?minutes=0:parseInt( $("input[name=minutesPace2]").val() );
        //$('input[name=minutesPace2]').val(minutes<10?"0"+minutes:minutes);
        $('input[name=minutesPace2]').val(minutes==''?"00":minutes<10?"0"+minutes:minutes);
    }); 
    
    $('input[name=secondsPace2]').focusout(function(){
        var seconds=parseInt( $("input[name=secondsPace2]").val() );
        $("input[name=secondsPace2]").val()==''?seconds=0:parseInt( $("input[name=secondsPace2]").val() );
        //$('input[name=secondsPace2]').val(seconds<10?"0"+seconds:seconds);
        $('input[name=secondsPace2]').val(seconds==''?"00":seconds<10?"0"+seconds:seconds);
    }); 
    
    $('input[name=submit2]').click(function(){
        
        var paceMin=$("input[name=minutesPace2]").val();
        var paceSeconds=$("input[name=secondsPace2]").val();
        //alert(paceMin+"  "+paceSeconds);						
        
        if (paceMin==""){paceMin=0;}
        if (paceSeconds==""){paceSeconds=0;}
        var time=(paceMin*60) +parseInt(paceSeconds);
        
        dist=  $('input[name=km2]').val() ;
        
        if (dist==0){
            alert("No distance was selected!");
            return 0;
        }
        var totalSec=parseInt(time*dist);
        
        
        var hours= parseInt( totalSec / 3600 ) % 24;
        var minutes= parseInt( totalSec / 60 ) % 60;
        var seconds= totalSec % 60; 
        //alert(hours+":"+minutes+":"+seconds);
        
        //$('#test').append('<p>'+(hours<10? "0" + hours : hours )+":"+(minutes<10? "0" + minutes : minutes )+":"+(seconds<10? "0" + seconds : seconds )+'</p>'+time+"/"+dist+"="+totalSec);
        //$('#test').append('<p>'+'pace:  '+(paceMin<10? "0" + paceMin : paceMin )+":"+(paseSeconds<10? "0" + paseSeconds : paseSeconds )+'</p>');
        $('input[name=hours]').val(hours<10? "0" + hours : hours );
        $('input[name=minutes]').val(minutes<10? "0" + minutes : minutes );
        $('input[name=seconds]').val(seconds<10? "0" + seconds : seconds ); 
        /* $('input[name=hours]').val( hours );
					$('input[name=minutes]').val(minutes );
					$('input[name=seconds]').val( seconds );  */
                }); 
    
    
    //Time Subtraction
    
    $('input[name=submit3]').click(function(){
        
        var shours=parseInt( $("input[name=shours]").val() );
        var sminutes=parseInt( $("input[name=sminutes]").val() );
        var sseconds=parseInt( $("input[name=sseconds]").val() );
        
        var ehours=parseInt( $("input[name=ehours]").val() );
        var eminutes=parseInt( $("input[name=eminutes]").val() );
        var eseconds=parseInt( $("input[name=eseconds]").val() );
        
        time1=shours*3600+sminutes*60+sseconds;
        time2=ehours*3600+eminutes*60+eseconds;
        
        //var date1=new Date(Date.parse( $('input[name=sdate]').val())+time1*1000  );
        //var date2=new Date(Date.parse( $('input[name=edate]').val())+time2*1000 );
        // alert(date1.getHours() ); 
        
        var date1=new Date(Date.parse( $('input[name=sdate]').val())+time1*1000  );
        var date2=new Date(Date.parse( $('input[name=edate]').val())+time2*1000 );
        
        var duration=new Date( date2-date1 );
        // duration=time2-time1;
        //var date=new Date(duration);
        
        // alert(duration.toString() );
        
        if (duration<0){
            alert("Wrong time entered, negative time.");
        }else{
            
            
            // var dhours= parseInt( duration / 3600 ) % 24;
            //var dminutes= parseInt( duration / 60 ) % 60;
            //var dseconds= duration % 60; 	
            // alert(dhours+":"+dminutes+":"+dseconds);
            var dhours= duration.getHours()-2;
            var dminutes= duration.getMinutes();
            var dseconds= duration.getSeconds(); 	
            //  alert(dhours+":"+dminutes+":"+dseconds);
            $('input[name=dhours]').val(dhours<10? "0" + dhours : dhours );
            $('input[name=dminutes]').val(dminutes<10? "0" + dminutes : dminutes );
            $('input[name=dseconds]').val(dseconds<10? "0" + dseconds : dseconds ); 
        }
        
        
        
    }); 
    
    
});
