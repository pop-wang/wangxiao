//面向对象的写法
window.webSQL=window.webSQL||{};
(function(){
	function DBManager(tableName){
		this.tableName=tableName;
		this.db=null;
		this.openDB();
//		this.operationSQL(sql);
//		this.createTable("id,username,age");
//		this.addData("id,username,age","'1','wangdapao','23'");
		this.searchAll();
//		this.deleteData();
		this.changeData('wangdapao1','wangdapao');
	}
	DBManager.prototype.openDB=function(){
		this.db=openDatabase("noteDB","1.0","noteDB",1024*1024*10);
	}
	DBManager.prototype.operationSQL=function(sql,args,callback){
		this.db.transaction(function(ts){
			console.log(ts);
			ts.executeSql(sql,args,function(transaction,result){
				console.log(result);
				if(callback){
					callback(result);
				}
			},function(error){
				console.log(error);
			});
		});
	};
	DBManager.prototype.createTable=function(colums){
		var sql="CREATE TABLE "+this.tableName+"("+colums.toString()+");";
		this.operationSQL(sql);
	};
	DBManager.prototype.addData=function(colums,values){
		var sql="INSERT INTO "+this.tableName+"("+colums.toString()+") VALUES"+"("+values+");";
		this.operationSQL(sql);
	};
	DBManager.prototype.searchAll=function(){
		var sql="SELECT * FROM "+this.tableName+";";
		this.operationSQL(sql,[],function(result){
//			console.log(result)
	 		var content="";
	 		for(var i=0;i<result.rows.length;i++){
	 			content+="<p>"+result.rows[i].username+"</p>";
	 		}
	 		document.body.innerHTML=content;
	 	});		
	};
	DBManager.prototype.deleteData=function(){
		var sql="DELETE FROM "+this.tableName+" WHERE id='1';";
		this.operationSQL(sql,[],function(){
			this.searchAll();
		}.bind(this));
	};
	DBManager.prototype.changeData=function(newvalue,oldvalue){
		var sql="UPDATE "+this.tableName+" SET username=? WHERE username='"+oldvalue+"';";
		this.operationSQL(sql,[newvalue],function(){
			this.searchAll();
		}.bind(this));
	};
	webSQL.DBManager=DBManager;
})();

new webSQL.DBManager('user1');
