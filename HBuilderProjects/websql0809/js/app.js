/*webSQL:是一个操作数据库的对象，里面封装了操作数据库的方法，是通过sql语句操作一个关系型数据库(创建数据库，建表，增删改查)
 * sql语句:脚本语言，是一个可以操作数据库的字符串，类似正则的规则，他不会自己执行，需要各个平台单独操作数据库的函数执行这个sql语句才能够让sql语句执行。
 *  >在webSQL里面有执行sql语言的方法->就会去执行sql里面描述的功能。不区分大小写，也有关键字，语句结束后分号可选
 * 常用关键字：CREATE：创建  TABLE：表  INSERT：添加   UPDATE：更新   SELECT：选择   DELETE：删除 
 * 
 * webSQL和sql语言是2个不同的东西：
 *  >sql语句只要是sqlite类型的数据库，都可以使用,有自己独立的语法
 *  >webSQL是前端独有的API，里面有执行sql的方法：openDatabase(打开数据库的方法)，Transaction(获取事务的方法),executeSql(执行sql语句的方法)
 * 
 * Sql语句：
 *  >建表：CREATE TABLE 表的名字 (字段)
 *  >添加数据：INSERT INTO 表的名字 (字段) VALUES(值)
 *  >删除数据：DELETE FROM 表的名字   WHRER 字段=值；
 *  >修改数据：UPDATE 表的名字   SET 字段=值；
 *  >查找数据：SELETE * FROM 表的名字/SELETE * FROM 表的名字  WHERE 字段=值 
 */ 
 (function(){
 	var db=null;
 	/*1.打开数据库的方法openDatabase本身就返回一个数据的对象，所以在打开数据库的时候就可以直接接收数据库对象。
 	 传的参数：name(数据库的名字，必传),
 	 version(版本号，必传),
 	 displayName(显示的名字，必传),
 	 estimatedSize(数据库大小以k为单位，必传),
 	 creationCallback(数据库创建完的回调，可选)*/
 	function openDB(){
 		db=openDatabase("noteDB","1.0","noteDB",1024*1024*10,function(result){
 			console.log(result);
 			db=result;//只有创建数据库成功的时候才会去调用这个回调函数
 		});
 	}
 	/*2.获取事务对象db.transaction:需要传的参数：callback，errorCallback，successCallback*/
 	function operationSQL(sql,args,callback){
 		db.transaction(function(ts){
 			console.log(ts);//通过数据库对象调用transaction()->得到事务对象
 			ts.executeSql(sql,args,function(transaction,result){
 				console.log(arguments);//传入的args
 				if(callback){
 					callback(result);
 				}
 			},function(error){
 				console.log(error);
 			});//通过得到的事务对象执行SQL语句的方法,ts.executeSql():需要传的参数：sqlStatement(sql语句，必传),Arguments(实参数组，sql语句里面值得数组，可选),Callback(执行完成时候的回调，可选),errorCallback(出现错误时候的回调，可选)
 		});
 	}
 	function createTable(){
 		operationSQL("CREATE TABLE user (id,username,age);");
 	}
 	function addData(){
 		operationSQL("INSERT INTO  user (id,username,age) VALUES (0,'XIAOMING',20);");
 	}
 	function searchAll(){
 		operationSQL("SELECT * FROM user;",[],function(result){
 			var content="";
 			for(var i=0;i<result.rows.length;i++){
 				content+="<p>"+result.rows[i].username+"</p>";
 			}
 			document.body.innerHTML=content;
 		});
 	}
 	function deleteData(){
 		operationSQL("DELETE FROM user WHERE id=1;",[],function(){
 			searchAll();//成功之后查询下所有的东西更新下html内容
 		});
 	}
 	function changeData(){
// 		operationSQL("UPDATE user SET username='小明' WHERE username='XIAOMING';",[],function(){
// 			searchAll();
// 		});
		operationSQL("UPDATE user SET username=? WHERE username='XIAOMING';",["奥特曼"],function(){
			searchAll();
		});//带参数的修改数据的方法：?表示占位符，将所有XIAOMING修改为奥特曼
 	}
 	function init(){
 		openDB();
   		createTable();
   		addData();
   		searchAll();
   		deleteData();
   		changeData();
 	}
 	init();
 })();




//function aa(a,b){
// 		/*实参：实际传入的值
// 		 * 形参：代表实际传入参数的一个标示
// 		 * arguments：实际传入的值
// 		 * callee:被调用的是谁(函数)
// 		 * caller：调用的对象
// 		 */
// 		console.log(arguments);
//}


function DBManager(){}
DBManager.CONFIG={};
DBManager.prototype.operationSQL=function(){}
DBManager.prototype.createTable=function(tablename,colums){
	var sql="CREATE TABLE"+ tablename+"("+colums.toString()+");";
	DBManager.operationSQL(sql);
}