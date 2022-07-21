/*---------------------------
UA
--------------------------- */
 function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function isWiiU () { return (navigator.userAgent.indexOf("WiiU") != -1); }
function isWii () { return (navigator.userAgent.indexOf("Wii") != -1 && !isWiiU()); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function isOpera () { return (navigator.userAgent.indexOf("Opera") != -1); } 

/*---------------------------
variable
--------------------------- */

var $totalPageNum = 10;
var $currentPageNum = 0;
var $moveX = 853;

var $state; //gamePad state
var $_isActive   = true; //flag for motion
var $_isTouch    = false; //flag for touch
var $_isSliding  = false; //flag for sliding for touch
var $movieSlideY = 0; //for movie
var $enterFrame1 = 0; //timer for pad
var $enterFrame2 = 0; //slider
var $interval = 0; //timer

var $px1 = 0; //first number pointX by touch
var $px2 = 0; //current number pointX by touch
var $pNum = 0; //how much moving pointX by touch
var $cx1 = 0; //current content's left num

//image objects
var img1  = new Image();
var img2  = new Image();
var img3  = new Image();
var img4  = new Image();
var img5  = new Image();
var img6  = new Image();
var img7  = new Image();
var img8  = new Image();
var img9  = new Image();
var mov1  = new Image();
var mov2  = new Image();

var $screenNum = 0;
var $seArr = [];
var $objArr = [];

var ex = ""; //extend path for other country
var nintendoWebUrl;

/*---------------------------
init
--------------------------- */
$(function()
{
	init();
})

function init()
{
	
	if( !isWiiU() ) 
	{
		if( $( "body#other" ).length == 1 )
		{
			location.replace( nintendoWebUrl );
		}
		else
		{
			location.replace("../index.html");
		}
		
	}
	
	//frame rate
	jQuery.fx.interval = 33;
	
	//se content inside object
	$objArr = [$( "#se2 .content .image1" ),
			   $( "#se2 .content .image2" ),
			   $( "#se3 .content .image1" ),
			   $( "#se3 .content .image2" ),
			   $( "#se4 .content .image1" ),
			   $( "#se4 .content .image2" ),
			   $( "#se4 .content .image3" ),
			   $( "#se4 .content .image4" ),
			   $( "#se4 .content .image5" ),
			   
			   $( "#se5 .content .image1" ),
			   $( "#se5 .content .image2" ),
			   $( "#se5 .content .image3" ),
			   
			   $( "#se6 .content .image1" ),
			   $( "#se6 .content .image2" ),
			   $( "#se6 .content .image3" ),
			   
			   $( "#se7 .content .image1" ),
			   $( "#se7 .content .image2" ),
			   $( "#se7 .content .image3" ),
			   $( "#se7 .content .image4" ),
			   $( "#se7 .content .image5" ),
			   $( "#se7 .content .image6" ),
			   $( "#se7 .content .image7" ),
			   $( "#se8 .content .image1" ),
			   $( "#se8 .content .image2" ),
			   $( "#se11 .content .image1" ),
			   $( "#se11 .content .image2" ),
			   $( "#se11 .content .image3" ),
			   $( "#se9 .content .image1" ),
			   $( "#se9 .content .image2" ),
			   $( "#se10 .content .image1" ),
			   $( "#se10 .content .image2" ),
			   $( "#se10 .content .image3" ),
			   $( "#se10 .content .image4" )];
	
	//get movie images
	var cnt = 0;
	mov1  = new Image();
	mov2  = new Image();
	mov1.onload = checkit;
	mov2.onload = checkit;

	if( $( "body#other" ).length == 1 )
	{
		ex = "../";
	}
	
	mov1.src  = ex + "img/s5_image1.png";
	mov2.src  = ex + "img/s8_image2.jpg";
	
	mov1.height = 9600;
	mov1.width = 140;
	mov2.height = 14976;
	mov2.width  = 277;

	
	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 2 ) set();
	}	
}

function set()
{	
	//set addEventListener
	$enterFrame1 = setInterval('update()', 33);
	
	/*
	//debug
	$currentPageNum = 8;
	$("#wrapper #container").css({ left: -( $currentPageNum * $moveX ) });
	afterSlide();*/
	//------------
	
	//set btn listener
	setBtnListener();
}


/*---------------------------
ENTERFRAME
--------------------------- */
function update()
{
	//udate Wiiugamepad state
	$state = window.wiiu.gamepad.update();
	
	//check touching
	checkTouch();

	//check stick and cross key without touching
	checkStickAndCrossKey();
}

//-----------------
// check touching
//-----------------
function checkTouch()
{
	//if is not Active, let return
	if( !$_isActive ) return;	
	
	//checking
	if( $state.contentX > 100 && $state.contentX < 760 )
	{
		//set first pointX
		if( !$_isTouch ) 
		{
			$px1 = $state.contentX;
			$cx1 = $("#wrapper #container").position().left;
		}
		
		$_isTouch = true;
		touchingMan();
	}
	else
	{
		$_isTouch = false;
	}
	
	//if touching is false and 
	if( !$_isTouch && $pNum != 0 )
	{
		$pNum = 0;
		
		//$_isActive = false;
		$("#wrapper #container").stop( false, true ).animate({ left: -( $currentPageNum * $moveX ) }, { duration : 250 });
	}
}

function touchingMan()
{
	$px2 = $state.contentX; //current pX
	$pNum = $px2 - $px1; //how much moving pointX number
	$( "#test p" ).html( "touching movement =  " + $pNum );
	
	if( $currentPageNum == 0 && $("#wrapper #container").position().left >= 0 && $pNum > 0 )
	{
		return;
	}
	else if( $currentPageNum == $totalPageNum && $("#wrapper #container").position().left <= 7677 && $pNum < 0 )
	{
		return;
	}
	else
	{
		$("#wrapper #container").css( { left : $cx1 + $pNum } );
	}
	
	var num2 = ( $currentPageNum * $moveX ) + $("#wrapper #container").position().left; //content moveX
	
	if( num2 > 80 )
	{
		slideTo( "left" );
	}
	else if( num2 < -80 )
	{
		slideTo( "right" );
	}
}

//-----------------
// check stick key
//-----------------
function checkStickAndCrossKey()
{
	//if is Active, let return
	if( $_isTouch ) return;	
	
	//if is not Active, let return
	if( !$_isActive ) return;	
	
	if( $state.lStickX == -1 || $state.rStickX == -1 || $state.hold == 2048 )
	{
		if( $currentPageNum > 0 ) slideTo( "left" );
	}
	else if( $state.lStickX == 1 || $state.rStickX == 1 || $state.hold == 1024 )
	{
		if( $currentPageNum < $totalPageNum ) slideTo( "right" );
	}
	
}

/*---------------------------
controller function
--------------------------- */

function setBtnListener()
{		
	//set btn listener
	$("#controller img#left").bind("touchstart", function()
	{		
		if( $_isActive ) slideTo( "left" );
	})
	
	$("#controller img#right").bind("touchstart", function()
	{
		if( $currentPageNum == $totalPageNum ) //last page
		{
			if( $_isActive ) slideTo( "back" );
		}
		else
		{
			if( $_isActive ) slideTo( "right" );
		}
	})
}

/*---------------------------
SIDE BUTTON
--------------------------- */
function slideSideBtn( value )
{
	var num;
	if( value == false )
	{
		num = -160;
		$("#controller img#left").stop( true, false ).animate({ left: num }, { duration : 500 });
		$("#controller img#right").stop( true, false ).animate({ right: num }, { duration : 500 });
	}
	else if( value == true )
	{
		num = -65;
		if( $currentPageNum > 0 ) $("#controller img#left").stop( true, false ).animate({ left: num }, { duration : 500, easing : "easeInOutQuint" });
		$("#controller img#right").stop( true, false ).animate({ right: num }, { duration : 500, easing : "easeInOutQuint" });
	}
}

/*---------------------------
SLIDE CONTENT FUNCTION
--------------------------- */
function slideTo( value )
{
	//Reactive touching
	$pNum = 0;
	$_isTouch = false;
	
	//Reactive until motion finished
	$_isActive = false;
	
	//side btn hide animation
	slideSideBtn( false );
	
	//content animation
	//-----------------
	if( value == "left" )
	{
		$currentPageNum -= 1;
		if( $currentPageNum < 0 ) $currentPageNum = 0;
		
		//appear content
		$("#container .section .inside").eq( $currentPageNum ).removeClass("displayNone");
	
		$("#wrapper #container").stop( true, false ).animate({ left: -( $currentPageNum * $moveX ) }, { duration : 500, complete : afterSlide });
	}
	else if( value == "right" )
	{
		$currentPageNum += 1;
		if( $currentPageNum > $totalPageNum ) $currentPageNum = $totalPageNum;
		
		//appear content
		$("#container .section .inside").eq( $currentPageNum ).removeClass("displayNone");
		
		$("#wrapper #container").stop( true, false ).animate({ left: -( $currentPageNum * $moveX ) }, { duration : 500, complete : afterSlide });
	}
	else if( value == "back" )
	{
		$currentPageNum = 0;

		//appear content
		$("#container .section .inside").removeClass("displayNone");
		
		$("#wrapper #container").stop( true, false ).animate({ left: -( $currentPageNum * $moveX ) }, { duration : 500, complete : afterSlide });
	}
}

//after function
function afterSlide()
{
	//hide object
	objectInit();

	//appear side btn
	slideSideBtn( true );
	
	//check page number and let
	checkPageNumber();
	
	//Active true
	$_isActive = true;
}

//initialized object
function objectInit()
{
	//clear interval for error
	clearInterval( $interval );
	
	//clear memory
	delete img1;
	delete img2;
	delete img3;
	delete img4;
	delete img5;
	delete img6;
	delete img7;
	delete img8;
	delete img9;
	delete $seArr;
	
	//initialized
	for( var i=0; i<$objArr.length; i++ )
	{
		$objArr[ i ].html( "" );
		$objArr[ i ].css( { "background": "none" } );
	}
}


/*---------------------------
check page number and change height or load pic
--------------------------- */
function checkPageNumber()
{	
	//if pgeNumber is 9, change right arrow image
	if( $currentPageNum == 0 )
	{
		//only japanese
		if( $("body#other").length == 0 )
		{
			$("#controller img#right").attr("src", "img/btn_right_first.png");
		}
		else
		{
			$("#controller img#right").attr("src", ex + "img/btn_right.png");
		}
	}
	else if( $currentPageNum == $totalPageNum )
	{
		$("#controller img#right").attr("src", "img/btn_right_last.png");
	}
	else
	{
		$("#controller img#right").attr("src", ex + "img/btn_right.png");
	}
	
	
	//if pageNumber is 4, change height size
	if( $("#wrapper").height() > 444 && $currentPageNum != 5 ) 
	{
		$("#wrapper").stop( false, true ).animate({ height:444 }, { duration : 500, complete:checkPageNumber2 });
	}
	else
	{
		checkPageNumber2();
	}
}

function checkPageNumber2()
{	
	//check height
	if( $currentPageNum == 1 )
	{
		se2Load();
	}
	else if( $currentPageNum == 2 )
	{
		se3Load();
	}
	else if( $currentPageNum == 3 )
	{
		se4Load();
	}
	else if( $currentPageNum == 4 )
	{
		se5Load();
	}
	else if( $currentPageNum == 5 )
	{
		se6Load();
	}
	else if( $currentPageNum == 6 )
	{
		se7Load();
	}
	else if( $currentPageNum == 7 )
	{
		se8Load();
	}
	else if( $currentPageNum == 8 )
	{
		se11Load();
	}
	else if( $currentPageNum == 9 )
	{
		se9Load();
	}
	else if( $currentPageNum == 10 )
	{
		se10Load();
	}
	
}

//-------------------
//set se2
//-------------------
function se2Load()
{
	//add loader
	setLoader( $( "#se2 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img2  = new Image();
	img3  = new Image();
	img4  = new Image();
	img5  = new Image();
	img6  = new Image();
	img7  = new Image();
	img8  = new Image();
	img1.onload = checkit;
	img2.onload = checkit;
	img3.onload = checkit;
	img4.onload = checkit;
	img5.onload = checkit;
	img6.onload = checkit;
	img7.onload = checkit;
	img8.onload = checkit;
	img1.src  = ex + "img/image_tv.jpg";
	img2.src  = ex + "img/image_gamepad1.png";
	img3.src  = ex + "img/s2_image1.jpg";
	img4.src  = ex + "img/s2_image2.jpg";
	img5.src  = ex + "img/s2_image3.jpg";
	img6.src  = ex + "img/s2_image4.jpg";
	img7.src  = ex + "img/s2_image5.jpg";
	img8.src  = ex + "img/s2_image6.jpg";
	
	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 8 ) 
		{
			$seArr = [ img3, img4, img5, img6, img7, img8 ];
			se2Loaded();
		}
	}
}

function se2Loaded()
{
	//flg
	if( $currentPageNum != 1 ) return;
	
	//image container
	setLoader( $( "#se2 .content" ), false );
	var imgTag1 ='<div class="imageWrap"></div>';		
	$( "#se2 .content .image1" ).prepend( imgTag1 );
	$( "#se2 .content .image1" ).css({ "background":"url(" + ex + "img/image_tv.jpg)", "-webkit-background-size":"338px 203px" });
	var imgTag2 ='<div class="imageWrap"></div>';		
	$( "#se2 .content .image2" ).prepend( imgTag2 );
	$( "#se2 .content .image2" ).css({ "background":"url(" + ex + "img/s2_image7.png)", "-webkit-background-size":"186px 113px" });
	
	//image1 set
	$( "#se2 .content .image1 .imageWrap" ).prepend( "<img src='" + $seArr[ 0 ].src + "'>" );
	$( "#se2 .content .image2 .imageWrap" ).prepend( "<img src='" + $seArr[ 3 ].src + "'>" );
	
	$( "#se2 .content .image1" ).hide();
	$( "#se2 .content .image2" ).hide();
	$interval = setTimeout( se2Mov1, 500 );
	
}

function se2Mov1()
{
	clearInterval( $interval );
	if( $currentPageNum != 1 ) return;
	$( "#se2 .content .image1" ).fadeIn();
	$( "#se2 .content .image2" ).fadeIn();
	$screenNum = 0;
	$interval = setTimeout( se2Mov2, 3000 );
}

function se2Mov2()
{
	if( $currentPageNum != 1 ) return;
	( $screenNum >= 2 ) ? $screenNum = 0 : $screenNum += 1;

	$( "#se2 .content .image1 .imageWrap" ).prepend( "<img src='" + $seArr[ $screenNum ].src + "'>" );
	$( "#se2 .content .image1 .imageWrap img" ).eq( 1 ).fadeOut( 1000, function(){ this.remove() } );
	$( "#se2 .content .image2 .imageWrap" ).prepend( "<img src='" + $seArr[ $screenNum + 3 ].src + "'>" );
	$( "#se2 .content .image2 .imageWrap img" ).eq( 1 ).fadeOut( 1000, function(){ this.remove() } );
}

//-------------------
//set se3
//-------------------
function se3Load()
{
	//add loader
	setLoader( $( "#se3 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img2  = new Image();
	img1.onload = checkit;
	img2.onload = checkit;
	img1.src  = ex + "img/s3_image2.png";
	img2.src  = ex + "img/s3_image1.jpg";

	
	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 2 ) se3Loaded();
	}
}

function se3Loaded()
{
	//flg
	if( $currentPageNum != 2 ) return;
	
	//image set
	setLoader( $( "#se3 .content" ), false );
	$( "#se3 .content .image1" ).prepend( "<img src=" + ex + "img/s3_image2.png width=366 height=215>" );
	$( "#se3 .content .image2" ).prepend( "<img src=" + ex + "img/s3_image1.jpg width=139 height=78>" );
	$( "#se3 .content .image1" ).hide();
	$( "#se3 .content .image2" ).hide();
	$interval = setTimeout( se3Mov1, 500 );
}

function se3Mov1()
{
	clearInterval( $interval );
	if( $currentPageNum != 2 ) return;
	$( "#se3 .content .image1" ).fadeIn();
	$( "#se3 .content .image2" ).fadeIn();
	
}

//-------------------
//set se4
//-------------------
function se4Load()
{
	//add loader
	setLoader( $( "#se4 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img2  = new Image();
	img3  = new Image();
	img4  = new Image();
	img5  = new Image();
	img1.onload = checkit;
	img2.onload = checkit;
	img3.onload = checkit;
	img4.onload = checkit;
	img5.onload = checkit;
	img1.src  = ex + "img/s4_image1.jpg";
	img2.src  = ex + "img/s4_image2.jpg";
	img3.src  = ex + "img/s4_image3.jpg";
	img4.src  = ex + "img/s4_image4.png";
	img5.src  = ex + "img/s4_image5.jpg";

	
	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 5 ) 
		{
			se4Loaded();
		}
	}
}

function se4Loaded()
{
	//flg
	if( $currentPageNum != 3 ) return;
	
	//contain images
	setLoader( $( "#se4 .content" ), false );
	$( "#se4 .content .image1" ).prepend( "<img src=" + ex + "img/s4_image1.jpg width=346 height=221>" );
	$( "#se4 .content .image2" ).prepend( "<img src=" + ex + "img/s4_image2.jpg width=160 height=90>" );
	$( "#se4 .content .image3" ).prepend( "<img src=" + ex + "img/s4_image3.jpg width=160 height=90>" );
	$( "#se4 .content .image4" ).prepend( "<img src=" + ex + "img/s4_image4.png width=175 height=175>" );
	$( "#se4 .content .image5" ).prepend( "<img src=" + ex + "img/s4_image5.jpg width=147 height=67>" );
	
	//set prop
	$( "#se4 .content .image1" ).hide();
	$( "#se4 .content .image2" ).hide();
	$( "#se4 .content .image3" ).hide();
	$( "#se4 .content .image4" ).css( { "opacity":0, top:180, left:680 });
	$( "#se4 .content .image5" ).hide();
	$interval = setTimeout( se4Mov1, 500 );
}

function se4Mov1()
{
	clearInterval( $interval );
	if( $currentPageNum != 3 ) return;
	$( "#se4 .content .image1" ).fadeIn();
	$( "#se4 .content .image2" ).fadeIn();
	$( "#se4 .content .image5" ).fadeIn();
	$interval = setTimeout( se4Mov2, 1000 );
}

function se4Mov2()
{
	clearInterval( $interval );
	if( $currentPageNum != 3 ) return;
	$( "#se4 .content .image4" ).animate({ top:112, left:615, opacity:1 }, { duration:650, complete:se4Mov3 });
}

function se4Mov3()
{
	if( $currentPageNum != 3 ) return;
	$( "#se4 .content .image3" ).fadeIn( );
}



//-------------------
//set se5
//-------------------
function se5Load()
{
	//add loader
	setLoader( $( "#se5 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img1.onload = checkit;
	img1.src  = ex + "img/image_gamepad1.png";
	
	var cnt = 0;
	img2  = new Image();
	img2.onload = checkit;
	img2.src  = ex + "img/s5_image2.png";

	function checkit()
	{
		cnt ++;
		if( cnt >= 2 )
		{
			se5Loaded();
		}
	}
}

function se5Loaded()
{
	//flg
	if( $currentPageNum != 4 ) return;
	
	//image set
	setLoader( $( "#se5 .content" ), false );
	$( "#se5 .content .image1" ).prepend( "<img src=" + ex + "img/image_gamepad2.png width=378 height=226>" );
	$( "#se5 .content .image3" ).prepend( "<img src=" + ex + "img/s5_image2.png width=72 height=72>" );
	$( "#se5 .content .image2" ).prepend( mov1 );
	$( "#se5 .content .image2 img" ).css( { top : 0 } );
	$( "#se5 .content .image1" ).hide();
	$( "#se5 .content .image2" ).hide();
	$( "#se5 .content .image3" ).hide();
	$interval = setTimeout( se5Mov1, 500 );
}

function se5Mov1()
{
	clearInterval( $interval );
	if( $currentPageNum != 4 ) return;
	$( "#se5 .content .image1" ).fadeIn();
	$( "#se5 .content .image2" ).fadeIn();
	$movieSlideY = 0;
	$interval = setTimeout( se5Mov2, 500 );
}

function se5Mov2()
{
	clearInterval( $interval );
	if( $currentPageNum != 4 ) return;
	$( "#se5 .content .image3" ).fadeIn().delay(250).fadeOut();		
	$interval = setInterval( renderSe51, 40 );
}

function renderSe51()
{
	$( "#se5 .content .image2 img" ).css( { top : $movieSlideY } );
	$movieSlideY -= 80;
	
	if( $movieSlideY <= -9000 )
	{
		if( $currentPageNum != 4 ) return;
		$movieSlideY = 0;
		$( "#se5 .content .image3" ).stop( true, false ).fadeIn().delay(250).fadeOut();		
	}
}


//-------------------
//set se6
//-------------------
function se6Load()
{
	//change height
	$("#wrapper").css({ height:2434 });
	
	//add loader
	setLoader( $( "#se6 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img1.onload = checkit;
	img1.src  = ex + "img/s6_image1.jpg";
	img2  = new Image();
	img2.onload = checkit;
	img2.src  = "img/s6_image2.png";
	img3  = new Image();
	img3.onload = checkit;
	img3.src  = ex + "img/s6_image3.jpg";
	
	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 3 )
		{
			se6Loaded();
		}
	}
}

function se6Loaded()
{
	//flg
	if( $currentPageNum != 5 ) return;
	
	//contain images
	setLoader( $( "#se6 .content" ), false );
	$( "#se6 .content .image1" ).prepend( "<img src=" + ex + "img/s6_image1.jpg width=328 height=193>" );
	$( "#se6 .content .image2" ).prepend( "<img src=img/s6_image2.png width=328 height=130>" );
	$( "#se6 .content .image3" ).prepend( "<img src=" + ex + "img/s6_image3.jpg width=619 height=2105>" );
	
	//set prop
	$( "#se6 .content .image1" ).hide();
	$( "#se6 .content .image2" ).hide();
	$( "#se6 .content .image3" ).hide();
	$interval = setTimeout( se6Mov1, 500 );
}
function se6Mov1()
{
	clearInterval( $interval );
	if( $currentPageNum != 5 ) return;
	$( "#se6 .content .image1" ).fadeIn();
	$( "#se6 .content .image2" ).fadeIn();
	$( "#se6 .content .image3" ).fadeIn();
	$interval = setInterval( se6Mov2, 1500 );
}
function se6Mov2()
{
	if( $currentPageNum != 5 ) return;
	( $( "#se6 .content .image2" ).css( "display" ) == "none" ) ? $( "#se6 .content .image2" ).fadeIn() : $( "#se6 .content .image2" ).fadeOut();
}


//-------------------
//set se7
//-------------------
function se7Load()
{
	//add loader
	setLoader( $( "#se7 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img2  = new Image();
	img3  = new Image();
	img4  = new Image();
	img5  = new Image();
	img6  = new Image();
	img7  = new Image();
	img1.onload = checkit;
	img2.onload = checkit;
	img3.onload = checkit;
	img4.onload = checkit;
	img5.onload = checkit;
	img6.onload = checkit;
	img7.onload = checkit;
	img1.src  = ex + "img/image_tv.jpg";
	img2.src  = ex + "img/s7_image1.png";
	img3.src  = ex + "img/s4_image4.png";
	img4.src  = ex + "img/s2_image3.jpg";
	img5.src  = ex + "img/s7_image2.jpg";
	img6.src  = ex + "img/s7_image3.jpg";
	img7.src  = ex + "img/s7_image4.jpg";

	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 7 ) 
		{
			se7Loaded();
		}
	}
}

function se7Loaded()
{	
	//flg
	if( $currentPageNum != 6 ) return;
	
	//contain images
	setLoader( $( "#se7 .content" ), false );
	$( "#se7 .content .image1" ).prepend( "<img src=" + ex + "img/image_tv.jpg width=322 height=194>" );
	$( "#se7 .content .image2" ).prepend( "<img src=" + ex + "img/s7_image1.png width=232 height=148>" );
	$( "#se7 .content .image3" ).prepend( "<img src=" + ex + "img/s4_image4.png width=116 height=116>" );
	$( "#se7 .content .image4" ).prepend( "<img src=" + ex + "img/s2_image3.jpg width=264 height=149>" );
	$( "#se7 .content .image5" ).prepend( "<img src=" + ex + "img/s7_image2.jpg width=264 height=149>" );
	$( "#se7 .content .image6" ).prepend( "<img src=" + ex + "img/s7_image3.jpg width=107 height=60>" );
	$( "#se7 .content .image7" ).prepend( "<img src=" + ex + "img/s7_image4.jpg width=107 height=60>" );
	
	//set prop
	$( "#se7 .content .image1" ).hide();
	$( "#se7 .content .image2" ).hide();
	$( "#se7 .content .image4" ).hide();
	$( "#se7 .content .image5" ).hide();
	$( "#se7 .content .image6" ).hide();
	$( "#se7 .content .image7" ).hide();
	$( "#se7 .content .image3" ).css( { "opacity":0, top:190, left:680 });
	$interval = setTimeout( se7Mov1, 500 );
}

function se7Mov1()
{
	clearInterval( $interval );
	if( $currentPageNum != 6 ) return;
	$( "#se7 .content .image1" ).fadeIn();
	$( "#se7 .content .image2" ).fadeIn();
	$( "#se7 .content .image4" ).fadeIn();
	$( "#se7 .content .image6" ).fadeIn( se7Mov2 );
	
}

function se7Mov2()
{
	if( $currentPageNum != 6 ) return;
	$( "#se7 .content .image3" ).animate({ top:180, left:625, opacity:1 }, { duration:650, complete:se7Mov3 });
}

function se7Mov3()
{
	if( $currentPageNum != 6 ) return;
	$( "#se7 .content .image5" ).fadeIn( );
	$( "#se7 .content .image7" ).fadeIn( );
}

//-------------------
//set se8
//-------------------
function se8Load()
{
	//add loader
	setLoader( $( "#se8 .content" ), true );
	
	//loading images
	var cnt = 0;	
	img1  = new Image();
	img1.onload = checkit;
	img1.src  = ex + "img/image_tv.jpg";
	
	//after loaded
	function checkit()
	{
		se8Loaded2();
	}
	
}

function se8Loaded2()
{
	//html
	setLoader( $( "#se8 .scontent" ), false );
	$( "#se8 .content .image1" ).hide();
	$( "#se8 .content .image2" ).hide();
	
	$( "#se8 .content .image1" ).prepend("<img src=" + ex + "img/image_tv.jpg width=338 height=203>");
	$( "#se8 .content .image2" ).prepend( mov2 );
	$( "#se8 .content .image2 img" ).css( { top : 0 } );
	
	//flg
	if( $currentPageNum != 7 ) return;
		
	//html
	$interval = setTimeout( setRenderSe81, 500 );
}

function setRenderSe81()
{
	clearInterval( $interval );
	if( $currentPageNum != 7 ) return;
	$( "#se8 .content .image1" ).fadeIn( );
	$( "#se8 .content .image2" ).fadeIn( setRenderSe82 );
}

function setRenderSe82()
{
	clearInterval( $interval );
	$movieSlideY = 0;
	$interval = setInterval( renderSe8, 30 );
}

function renderSe8()
{
	$( "#se8 .content .image2 img" ).css( { top : $movieSlideY } );
	$movieSlideY -= 156;
	
	if( $movieSlideY <= -14820 )
	{
		clearInterval( $interval );
	}
}

//-------------------
//set se11
//-------------------
function se11Load()
{
	//add loader
	setLoader( $( "#se11 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img1.onload = checkit;
	img1.src  = ex + "img/s11_image1.jpg";
	img2  = new Image();
	img2.onload = checkit;
	img2.src  = "img/s11_image2.jpg";
	img3.onload = checkit;
	img3.src  = ex + "img/s11_image3.jpg";
	
	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 2 )
		{
			se11Loaded();
		}
	}
}

function se11Loaded()
{
	//flg
	if( $currentPageNum != 8 ) return;
	
	//contain images
	setLoader( $( "#se9 .content" ), false );
	$( "#se11 .content .image1" ).prepend( "<img src=" + ex +"img/s11_image1.jpg width=350 height=225>" );
	$( "#se11 .content .image2" ).prepend( "<img src=img/s11_image2.jpg width=350 height=225>" );
	$( "#se11 .content .image3" ).prepend( "<img src=img/s11_image3.jpg width=350 height=225>" );
	
	//set prop
	$( "#se11 .content .image1" ).hide();
	$( "#se11 .content .image2" ).hide();
	$( "#se11 .content .image3" ).hide();
	$interval = setTimeout( se11Mov1, 500 );
}

function se11Mov1()
{
	clearInterval( $interval );
	if( $currentPageNum != 8 ) return;
	$( "#se11 .content .image1" ).fadeIn();
	$( "#se11 .content .image2" ).fadeOut();
	$( "#se11 .content .image3" ).fadeOut( );
	$interval = setTimeout( se11Mov2, 2500 );
}


function se11Mov2()
{
	clearInterval( $interval );
	if( $currentPageNum != 8 ) return;
	$( "#se11 .content .image1" ).fadeOut();
	$( "#se11 .content .image2" ).fadeIn();
	$( "#se11 .content .image3" ).fadeOut( );
	$interval = setTimeout( se11Mov3, 2500 );
}

function se11Mov3()
{
	clearInterval( $interval );
	if( $currentPageNum != 8 ) return;
	$( "#se11 .content .image1" ).fadeOut();
	$( "#se11 .content .image2" ).fadeOut();
	$( "#se11 .content .image3" ).fadeIn( );
	$interval = setTimeout( se11Mov1, 2500 );
}

//-------------------
//set se9
//-------------------
function se9Load()
{
	//add loader
	setLoader( $( "#se9 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img1.onload = checkit;
	img1.src  = "img/s9_image1.jpg";
	img2  = new Image();
	img2.onload = checkit;
	img2.src  = ex + "img/s9_image2.png";
	
	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 2 )
		{
			se9Loaded();
		}
	}
}

function se9Loaded()
{
	//flg
	if( $currentPageNum != 9 ) return;
	
	//contain images
	setLoader( $( "#se9 .content" ), false );
	$( "#se9 .content .image1" ).prepend( "<img src=img/s9_image1.jpg width=406 height=288>" );
	$( "#se9 .content .image2" ).prepend( "<img src=" + ex +"img/s9_image2.png width=87 height=96>" );
	
	//set prop
	$( "#se9 .content .image1" ).hide();
	$( "#se9 .content .image2" ).hide();
	$interval = setTimeout( se9Mov1, 500 );
}

function se9Mov1()
{
	clearInterval( $interval );
	if( $currentPageNum != 9 ) return;
	$( "#se9 .content .image1" ).fadeIn( );
	$( "#se9 .content .image2" ).fadeIn( );
	$interval = setInterval( se9Mov2, 1000 );
}


function se9Mov2()
{
	if( $currentPageNum != 9 ) return;
	( $( "#se9 .content .image2" ).css( "display" ) == "none" ) ? $( "#se9 .content .image2" ).fadeIn() : $( "#se9 .content .image2" ).fadeOut();
}

//-------------------
//set se10
//-------------------
function se10Load()
{
	//add loader
	//setLoader( $( "#se10 .content" ), true );
	
	var cnt = 0;
	img1  = new Image();
	img1.onload = checkit;
	img1.src  = "img/s10_image1.png";
	img2  = new Image();
	img2.onload = checkit;
	img2.src  = "img/s10_image2.png";
	img3  = new Image();
	img3.onload = checkit;
	img3.src  = "img/s10_image3.png";
	img4  = new Image();
	img4.onload = checkit;
	img4.src  = "img/s10_image4.png";
	
	//after loaded
	function checkit()
	{
		cnt += 1;
		if( cnt >= 4 )
		{
			se10Loaded();
		}
	}
}

function se10Loaded()
{
	//flg
	//if( $currentPageNum != 9 ) return;
	
	//contain images
	setLoader( $( "#se10 .content" ), false );
	$( "#se10 .content .image1" ).prepend( "<a href='" + nintendoWebUrl + "' target='_blank'><img src='img/s10_image1.png'></a>" );
	$( "#se10 .content .image2" ).prepend( "<img src='img/s10_image2.png'>" );
	$( "#se10 .content .image3" ).prepend( "<a href='browser.html' target='_blank' tabIndex='10'><img src='img/s10_image3.png'></a>" );
	$( "#se10 .content .image4" ).prepend( "<img src='img/s10_image4.png'>" );
	
	//set prop
	$( "#se10 .content .image1" ).hide();
	$( "#se10 .content .image2" ).hide();
	$( "#se10 .content .image3" ).hide();
	$( "#se10 .content .image4" ).hide();
	
	$interval = setTimeout( se10Mov1, 500 );
}

function se10Mov1()
{
	clearInterval( $interval );
	$( "#se10 .content .image1" ).fadeIn();
	$( "#se10 .content .image2" ).fadeIn();
	$( "#se10 .content .image3" ).fadeIn();
	$( "#se10 .content .image4" ).fadeIn();
}


/*---------------------------
add/remove loader
--------------------------- */
function setLoader( value1, value2 )
{
	var obj = value1;
	
	if( value2 )
	{
		//add loader
		var imgTag ='<div id="circleG">' +
					'<div id="circleG_1" class="circleG"></div>' +
					'<div id="circleG_2" class="circleG"></div>' +
					'<div id="circleG_3" class="circleG"></div>' +
					'</div>';
				
		obj.prepend( imgTag );
	}
	else
	{
		obj.find( "#circleG" ).remove(); 
	}
}


/*---------------------------
scroll
--------------------------- */
$(function(){
	SmoothScroll();
});
function SmoothScroll (){
	var easing = 0.2;
	var interval = 20;
	var allLinks = document.links;
	for (var i=0;i<allLinks.length;i++){
		var lnk = allLinks[i];
		if ((lnk.href && lnk.href.indexOf('#') != -1) && ((lnk.pathname == location.pathname) || ('/'+lnk.pathname == location.pathname))){
			var myHash = lnk.hash.replace(/#/g,"");
			if (!(myHash.length == 0)){
				lnk.onclick = function (){
					var hash = this.hash;
					var targetId = hash.replace(/#/g,"");
					if (!document.getElementById(targetId)) return;
					var element = document.getElementById(targetId);
					var targetY = 0;
					while(element){
					   targetY += element.offsetTop;
					   element = element.offsetParent;
					}
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					var windowHeight = window.innerHeight || document.documentElement.clientHeight;
					var bodyHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
					var footHeight = bodyHeight - targetY;
					var adjust = windowHeight - footHeight;
					if (windowHeight > footHeight){
						var toY = targetY - scrollTop - adjust;
					} else	{
						var toY = targetY - scrollTop;
					}
					function windowScroll (){
						var moveY = Math.floor(toY*easing);
						window.scrollBy(0,moveY);
						toY -= moveY;
						myTimer = setTimeout(windowScroll,interval);
						if (moveY == 0) clearTimeout(myTimer);
					}
					windowScroll();
					return false;
				};
			}
		}
	}
}

