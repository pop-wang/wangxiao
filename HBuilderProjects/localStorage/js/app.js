/*HTML5中数据的存储方式
 * 1、Storage；2、webSQL:数据库；3、indexedDB：数据库
 * setItem(key,value);
 * getItem(key);
 * Storage：
 *  >1.sesstionStorage:只在不关闭浏览器页面的情况下数据有效，只要关闭浏览器就会清除保存的数据
 *  >2.localStotrage:只要不清楚缓存，保存在浏览器里面的数据一直会存在。
 * indexedDB:是一个nosql，都是以对象的方式去存储，只要不清除缓存永远存在
 * indexDB可以做什么：可以配合应用缓存做离线应用；也可以在没有网的情况下阅览近期浏览过的新闻
 * 基本操作：
 *  >1.打开数据库并且开始一个事务。(事务就类似于一个平台，可以提供表演的地方)
 *  >2.创建一个object store。
 *  >3.创建一个请求来执行一些数据库操作，像增加或提取数据等
 *  >4.通过监听正确类型的DOM事件以等待操作完成
 *  >5.在操作结果上进行一些操作(可以再request中找到)
 * 使用流程：
 *  >1.判断浏览器是不是支持indexedDB：
 *  indexedDB?alert("支持")：alert("不支持");
 * >2.indexedDB.open("mysql"，数据库版本号);如果数据库存在就打开，不存在就创建一个
 *  ---> IDBOpenDBRequest请求对象:监听事件：
 *    onerror：创建或者打开数据库失败的时候调用，得到一个错误提示；
 *    onsuccess：创建或者打开数据库成功的时候调用，成功的时候的到一个this.result就是我们需要的数据库；
 *    onupgradeneeded：只有在数据库的版本号更新的时候调用
 * 3.创建类似于BMOB里面的某个表(也可以想象成一个数据模型)
 *  >通过ObjectStore进行操作(增删改查建表)
 *      》建表(创建类)：数据库对象(IDBOpenDBRequest.result).createObjectStore("名字"，{设置这个类里面可以找到某一个对象的属性})
 *      》创建字段方法(给创建的类添加属性)：objectStore的对象.createIndex("属性名"，{可选项})
 * 4.开始增删改查的一系列步骤(任何操作都会返回一个request对象)
 *  >添加objectStore.add()
 *  >删除objectStore.delete()
 *  >更改objectStore.put()
 *  >查询objectStore.get()
 * 
sessionStorage.setItem("userName","xiaoming");//在application里面的sessionStorage里就会保存姓名为小明的值
sessionStorage.getItem("userName");//获取到小明并直接输出，localStotrage类似
*/



(function(){
	var database=null;//声明一个数据库的全局变量,因为加载成功和版本更新成功的时候都会有结果
	//2.创建打开数据库DB(DATABASE)
	function openDB(){
		var request=indexedDB.open("noteDB",1);
		request.onerror=function(){
			console.log(error);
		};
		request.onsuccess=function(){
			console.log("打开数据库成功");
			database=this.result;
			console.log(searchAll());
			searchAll().onsuccess=function(){
				console.log(this.result);
			};
			search();
			deleteData();
			update();
		};
		//只在数据库版本号两次不一致的情况下调用
		request.onupgradeneeded=function(){
			/*3.建表：不需要每次都去建表。从没有数据库到有数据库，数据库版本号更新的时候，再去建表，查询数据库中是不是存在同样的表，如果存在也就不再创建了
			onupgradeneeded可以监听数据库版本号的变更，可以通过IDBDataBase里面的objectStoreNames查看数据库里面都创建了那些表名。
			*/
			console.log("更新数据库成功",this);			
			var db=this.result;//数据库对象
			var tableName="note";
			if(!db.objectStoreNames.contains(tableName)){//使用contains判断是不是包含某个表名
				console.log("可以建表了~~~");				
				var objectStore=db.createObjectStore(tableName,{keyPath:"date"});//具体建表方法,添加一个键路径，date是唯一的
				objectStore.createIndex("title","title");//创建表里面的字段，需要至少传入2个参数，分别是字段名和通过哪一个名字可以查到这个字段对应的内容
				objectStore.createIndex("content","content");
				objectStore.createIndex("date","date");
			}
		};
		
	}
	/*4.添加数据：增删改查的操作：
	 * 1):db->transaction()->获得到事物的对象
	 * 2):事物的对象->objectStore
	 * 3):objectStore:即可进行增删改查
	 */
	function addData(info){
		var transaction=database.transaction(["note"],"readwrite");//获得到事务的对象,必须是数字类型的
		var objectStore=transaction.objectStore("note");//获取存放某一类型数据的容器(类似类)
		console.log(objectStore.add(info)) ;//添加数据，info是一个对象类型的数据
	}
	/*5.查询数据：get()；getAll():会得到一个IDBRequest，可以通过监听事件成功，获得到查询到的数据
	 * 如果查询单个key对应的数据可以通过get(key)
	 * 注意事项：任何数据库的操作，更新字段，表，需要先清除原来的数据库
	 * 如果是查找、删除、修改具体的内容的时候需要根据一个唯一值查找
	 */
	function searchAll(){
		return database.transaction(["note"],"readonly").objectStore("note").getAll();
		
	}
	function search(){
		database.transaction(["note"],"readonly").objectStore("note").get(1502182945505).onsuccess=function(){
			console.log(this.result);
		};
	}
	function deleteData(){
		database.transaction(["note"],"readwrite").objectStore("note").delete(1502182945505).onsuccess=function(){
			console.log(this);
		};
	}
	function update(){
		database.transaction(["note"],"readwrite").objectStore("note").put({title:"更新数据",content:"更新数据",date:1502243080473}).onsuccess=function(){
			console.log(this);
		};
	}
	function loadView(){
		var titleInput=document.querySelector(".addNoteView input");
		var contentInput=document.querySelector(".addNoteView textarea");
		var saveButton=document.querySelector(".addButton");
		saveButton.onclick=function(){
			var title=titleInput.value;
			var content=contentInput.value;
			var timeStamp=new Date().getTime();
			addData({
				title:title,
				content:content,
				date:timeStamp
			});
		}		
	}
	//1.浏览器是不是支持
	function init(){
		if(!indexedDB){
			return;
		}
		openDB();
		loadView();
	}
	init();
})();

