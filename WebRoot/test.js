function createWindow1(){
//	call:function(){alert("call ---");};
	alert("this1"+this);
	this.win=new Ext.window.Window({
		init : function() {
		//alert("init-----------");
		this.launcher = {
			text : '我的资源',
			iconCls : 'icon-ziyuan',
			handler : this.getWindow,
			scope : this
		};
		},
		getWindow:function(){alert(111);},
		width:300,
		height:200,
		closable:true,
		maximizable:true,
		title:"第一个窗口",
		buttons:[{text:"确定"},{text:"提交"}]
	});
	this.win.show();

}
Ext.onReady(ceshi);
function mywindow(){
 var win = new Ext.window.Window({
            title: 'Document',
            height: 400,
            width: 600,
            layout: 'fit',
            items: [{
                html: '<EMBED width=\'600\' height=\'400\' src="http://localhost:8080/center/ziyuan/2/b45bd15c-8540-4682-ac42-7e1c5b7b1c9b.pdf"></EMBED>'
            }]
        });
	win.show();
}
function openPDF(){
var mConfig = { 
       mediaType   :'PDFFRAME',   //this is the most reliable cross-browser 
       url         : 'E:\\finally.pdf',
       unsupportedText : 'Acrobat Viewer is not Installed',
   		resizable   : true ,   // < -- what's this?
       autoSize : true
    };                  
var p = new Ext.ux.MediaWindow({  
        id            : 'PDFViewerWin',
        bodyStyle    : 'position:relative; padding:0px;',
        width        : 600,
        height        : 400,
        mediaCfg    : mConfig,
        title        : 'Title-1'
 }).show();
}
function createWindow2() {
	Ext.create('Ext.window.Window', {
    title: 'Hello',
    height: 200,
    width: 400,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'grid',
        border: false,
        columns: [{header: 'World'},{header:'name'}],                 // One header just for show. There's no data,
        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
    }
}).show();

}
function zhixing(){
	var window = new createWindow1();
	var a=1;
	createWindow1.call(a);
	createWindow1();
	/*window.win.getWindow();
	window.win.init();
	window.call();*/
}

function ceshi(){
	 var aaa="------";
//	ceshi1("adf",123);
	 if(!window.aaa){
	 	alert('undefine');
	 }
	alert(aaa);
}
function ceshi1(a){
	for(var i=0;i<arguments.length;i++){
		alert(a);
	}
	alert(aaa);
	
}
function test(){
	alert("执行test2");
	test2();
	alert("执行完test2");
	test3();
}
function test2(){
	//这样window下面没有test3
	var test3 = function test3(){
		alert("this is test3");
	}
	//window下面有test4
	test4 = function test3(){
		alert("this is test3");
	}
}

function T(){
	alert(this.constructor);
	this.a="aa";
	this.t1=function t1(){
		//此this完全可以与上面那个this指向不一样，当t1作为一个类时
		this.a = "bb";
	}
}
function t_test(){
	var t = new T();
//	var o = new Object();
//	o.
	T();
	T.call(new Number(5));
	var t2 = new t.t1();
	//alert(t.a);
	//alert(t.b);
}
function t_test2(){
	var t = new T();
	alert(t.a);
	new t.t1();
	alert(t.a);
}
//测试参数的传递
//Ext.onReady(chuandi);
var a = new String("a");
var b = "b";
a.a="aaa";
console.dir(window.botguard);
function chuandi(){
	chuandi1(a);
	alert(b.a);
	a.a="bbb";
	alert(b.a);
	a== new String("a");
	alert(b.a);
}
function chuandi1(arg0){
	b=arg0;
}