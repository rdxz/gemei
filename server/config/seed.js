/**
 * 初始化数据
 */

'use strict';

var mongoose = require('mongoose');
var	User = mongoose.model('User');
var Promise = require('bluebird');
console.log('初始化数据开始');
	//初始化,用户
	if(process.env.NODE_ENV === 'development'){
		User.countAsync().then(function (count) {
			 if(count === 0){
			 	User.removeAsync().then(function () {
			 		User.createAsync({
			 		    "userId": "100000077",
              "userName": "admin",
              "password": "123456",
              "status": 1,
              "role": "admin",
              "addressList": [
                {
                    "addressId": "100001",
                    "userName": "JackBean",
                    "streetName": "北京市朝阳区朝阳公园",
                    "postCode": "100001",
                    "tel": "12345678901",
                    "isDefault": true
                },
                {
                    "addressId": "100004",
                    "userName": "Mary",
                    "streetName": "北京市朝阳区SOHO",
                    "postCode": "100005",
                    "tel": "010555555",
                    "isDefault": false
                },
                {
                    "addressId": "100005",
                    "userName": "Donie",
                    "streetName": "北京市海淀区西二旗",
                    "postCode": "100009",
                    "tel": "18710987654",
                    "isDefault": false
                },
                {
                    "addressId": "100006",
                    "userName": "Cherry",
                    "streetName": "北京市海淀区回龙观",
                    "postCode": "100009",
                    "tel": "010655555",
                    "isDefault": false
                },
                {
                    "addressId": "100007",
                    "userName": "Joke",
                    "streetName": "北京市朝阳区望京",
                    "postCode": "100010",
                    "tel": "13619898722",
                    "isDefault": false
                },
                {
                    "addressId": "100008",
                    "userName": "Frank",
                    "streetName": "北京市海淀区中关村软件园",
                    "postCode": "100011",
                    "tel": "10125652345",
                    "isDefault": false
                }
            ],
            "cartList": [
                {
                    "checked": "0",
                    "productId": "201710017",
                    "productImage": "1.jpg",
                    "productName": "小钢炮蓝牙音箱",
                    "productNum": "5",
                    "salePrice": 129
                },
                {
                    "productImage": "mi6.jpg",
                    "salePrice": 2499,
                    "productName": "小米6",
                    "productId": "201710006",
                    "productNum": "6",
                    "checked": "0"
                },
                {
                    "productImage": "9.jpg",
                    "salePrice": 999,
                    "productName": "IH 电饭煲",
                    "productId": "201710009",
                    "productNum": "1",
                    "checked": "1"
                },
                {
                    "productImage": "note.jpg",
                    "salePrice": 3549,
                    "productName": "小米笔记本",
                    "productId": "201710005",
                    "productNum": "1",
                    "checked": "1"
                },
                {
                    "productImage": "6.jpg",
                    "salePrice": 59,
                    "productName": "智能插线板",
                    "productId": "201710002",
                    "productNum": "3"
                },
                {
                    "productUrl": "",
                    "productImage": "zipai.jpg",
                    "salePrice": 39,
                    "productName": "自拍杆",
                    "productId": "201710007",
                    "productNum": "2",
                    "checked": "1"
                },
                {
                    "productUrl": "",
                    "productImage": "2.jpg",
                    "salePrice": 80,
                    "productName": "头戴式耳机-3",
                    "productId": "201710004",
                    "productNum": "2",
                    "checked": "1"
                }
            ],
            "orderList": [
                {
                    "orderId": "6224201705302250301",
                    "orderTotal": 3359.0,
                    "addressInfo": {
                        "addressId": "100001",
                        "userName": "JackBean",
                        "streetName": "北京市朝阳区朝阳公园",
                        "postCode": 100001.0,
                        "tel": 12345678901.0,
                        "isDefault": true
                    },
                    "goodsList": [
                        {
                            "productImage": "mi6.jpg",
                            "salePrice": "2499",
                            "productName": "小米6",
                            "productId": "201710006",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productImage": "2.jpg",
                            "salePrice": "80",
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "7",
                            "checked": "1"
                        }
                    ],
                    "orderStatus": "1",
                    "createDate": "2017-05-30 22:50:30"
                },
                {
                    "orderId": "9201706071525282",
                    "orderTotal": "5558",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-07 15:25:28",
                    "goodsList": [
                        {
                            "productImage": "mi6.jpg",
                            "salePrice": "2499",
                            "productName": "小米6",
                            "productId": "201710006",
                            "productNum": "2"
                        },
                        {
                            "productImage": "2.jpg",
                            "salePrice": "80",
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "7"
                        }
                    ]
                },
                {
                    "orderId": "7201706081545294",
                    "orderTotal": "5558",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-08 15:45:29",
                    "goodsList": [
                        {
                            "productImage": "mi6.jpg",
                            "salePrice": "2499",
                            "productName": "小米6",
                            "productId": "201710006",
                            "productNum": "2"
                        },
                        {
                            "productImage": "2.jpg",
                            "salePrice": "80",
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "7"
                        }
                    ]
                },
                {
                    "orderId": "7201706131105338",
                    "orderTotal": "560",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-13 11:05:33",
                    "goodsList": [
                        {
                            "productImage": "2.jpg",
                            "salePrice": "80",
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "7"
                        }
                    ]
                },
                {
                    "orderId": "5201706131122131",
                    "orderTotal": "30160",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-13 11:22:13",
                    "goodsList": [
                        {
                            "productImage": "9.jpg",
                            "salePrice": "999",
                            "productName": "IH 电饭煲",
                            "productId": "201710009",
                            "productNum": "3"
                        },
                        {
                            "productImage": "14.jpg",
                            "salePrice": "1600",
                            "productName": "Ear1600",
                            "productId": "201710014",
                            "productNum": "1"
                        },
                        {
                            "productImage": "note.jpg",
                            "salePrice": "3549",
                            "productName": "小米笔记本",
                            "productId": "201710005",
                            "productNum": "7"
                        },
                        {
                            "productImage": "2.jpg",
                            "salePrice": "80",
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "9"
                        }
                    ]
                },
                {
                    "orderId": "8201706131828404",
                    "orderTotal": "32367",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-13 18:28:40",
                    "goodsList": [
                        {
                            "productImage": "9.jpg",
                            "salePrice": "999",
                            "productName": "IH 电饭煲",
                            "productId": "201710009",
                            "productNum": "5"
                        },
                        {
                            "productImage": "14.jpg",
                            "salePrice": "1600",
                            "productName": "Ear1600",
                            "productId": "201710014",
                            "productNum": "1"
                        },
                        {
                            "productImage": "note.jpg",
                            "salePrice": "3549",
                            "productName": "小米笔记本",
                            "productId": "201710005",
                            "productNum": "7"
                        },
                        {
                            "productImage": "2.jpg",
                            "salePrice": "80",
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "10"
                        },
                        {
                            "productImage": "1.jpg",
                            "salePrice": "129",
                            "productName": "小钢炮蓝牙音箱",
                            "productId": "201710017",
                            "productNum": "1"
                        }
                    ]
                },
                {
                    "orderId": "7201706142225144",
                    "orderTotal": "2738",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-14 22:25:14",
                    "goodsList": [
                        {
                            "productImage": "14.jpg",
                            "salePrice": "1600",
                            "productName": "Ear1600",
                            "productId": "201710014",
                            "productNum": "1"
                        },
                        {
                            "productImage": "2.jpg",
                            "salePrice": "80",
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "11"
                        },
                        {
                            "productImage": "1.jpg",
                            "salePrice": "129",
                            "productName": "小钢炮蓝牙音箱",
                            "productId": "201710017",
                            "productNum": "2"
                        }
                    ]
                },
                {
                    "orderId": "1201706142242198",
                    "orderTotal": "2738",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-14 22:42:19",
                    "goodsList": [
                        {
                            "productImage": "14.jpg",
                            "salePrice": "1600",
                            "productName": "Ear1600",
                            "productId": "201710014",
                            "productNum": "1"
                        },
                        {
                            "productImage": "2.jpg",
                            "salePrice": "80",
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "11"
                        },
                        {
                            "productImage": "1.jpg",
                            "salePrice": "129",
                            "productName": "小钢炮蓝牙音箱",
                            "productId": "201710017",
                            "productNum": "2"
                        }
                    ]
                },
                {
                    "orderId": "8201706150102580",
                    "orderTotal": "2499",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-15 01:02:58",
                    "goodsList": [
                        {
                            "productImage": "mi6.jpg",
                            "salePrice": "2499",
                            "productName": "小米6",
                            "productId": "201710006",
                            "productNum": "1"
                        }
                    ]
                },
                {
                    "orderId": "5201706150146458",
                    "orderTotal": "2886",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-15 01:46:45",
                    "goodsList": [
                        {
                            "productImage": "1.jpg",
                            "salePrice": "129",
                            "productName": "小钢炮蓝牙音箱",
                            "productId": "201710017",
                            "productNum": "3"
                        },
                        {
                            "productImage": "mi6.jpg",
                            "salePrice": "2499",
                            "productName": "小米6",
                            "productId": "201710006",
                            "productNum": "1"
                        }
                    ]
                },
                {
                    "orderId": "9201706151140355",
                    "orderTotal": "4548",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-15 11:40:35",
                    "goodsList": [
                        {
                            "productImage": "9.jpg",
                            "salePrice": "999",
                            "productName": "IH 电饭煲",
                            "productId": "201710009",
                            "productNum": "1"
                        },
                        {
                            "productImage": "note.jpg",
                            "salePrice": "3549",
                            "productName": "小米笔记本",
                            "productId": "201710005",
                            "productNum": "1"
                        }
                    ]
                },
                {
                    "orderId": "1201706151143137",
                    "orderTotal": "4548",
                    "orderStatus": 1.0,
                    "createDate": "2017-06-15 11:43:13",
                    "goodsList": [
                        {
                            "productImage": "9.jpg",
                            "salePrice": "999",
                            "productName": "IH 电饭煲",
                            "productId": "201710009",
                            "productNum": "1"
                        },
                        {
                            "productImage": "note.jpg",
                            "salePrice": "3549",
                            "productName": "小米笔记本",
                            "productId": "201710005",
                            "productNum": "1"
                        }
                    ]
                },
                {
                    "orderId": "6229201709131934060",
                    "orderTotal": 5047,
                    "addressInfo": {
                        "addressId": "100004",
                        "userName": "Mary",
                        "streetName": "北京市朝阳区SOHO",
                        "postCode": "100005",
                        "tel": "010555555",
                        "isDefault": true
                    },
                    "goodsList": [
                        {
                            "productImage": "9.jpg",
                            "salePrice": 999,
                            "productName": "IH 电饭煲",
                            "productId": "201710009",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productImage": "note.jpg",
                            "salePrice": 3549,
                            "productName": "小米笔记本",
                            "productId": "201710005",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productUrl": "",
                            "productImage": "zipai.jpg",
                            "salePrice": 39,
                            "productName": "自拍杆",
                            "productId": "201710007",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productUrl": "",
                            "productImage": "2.jpg",
                            "salePrice": 80,
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "2",
                            "checked": "1"
                        }
                    ],
                    "orderStatus": "1",
                    "createDate": "2017-09-13 19:34:06"
                },
                {
                    "orderId": "6226201709131950167",
                    "orderTotal": 5047,
                    "addressInfo": {
                        "addressId": "100001",
                        "userName": "JackBean",
                        "streetName": "北京市朝阳区朝阳公园",
                        "postCode": "100001",
                        "tel": "12345678901",
                        "isDefault": false
                    },
                    "goodsList": [
                        {
                            "productImage": "9.jpg",
                            "salePrice": 999,
                            "productName": "IH 电饭煲",
                            "productId": "201710009",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productImage": "note.jpg",
                            "salePrice": 3549,
                            "productName": "小米笔记本",
                            "productId": "201710005",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productUrl": "",
                            "productImage": "zipai.jpg",
                            "salePrice": 39,
                            "productName": "自拍杆",
                            "productId": "201710007",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productUrl": "",
                            "productImage": "2.jpg",
                            "salePrice": 80,
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "2",
                            "checked": "1"
                        }
                    ],
                    "orderStatus": "1",
                    "createDate": "2017-09-13 19:50:16"
                },
                {
                    "orderId": "6221201709131950162",
                    "orderTotal": 5047,
                    "addressInfo": {
                        "addressId": "100001",
                        "userName": "JackBean",
                        "streetName": "北京市朝阳区朝阳公园",
                        "postCode": "100001",
                        "tel": "12345678901",
                        "isDefault": false
                    },
                    "goodsList": [
                        {
                            "productImage": "9.jpg",
                            "salePrice": 999,
                            "productName": "IH 电饭煲",
                            "productId": "201710009",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productImage": "note.jpg",
                            "salePrice": 3549,
                            "productName": "小米笔记本",
                            "productId": "201710005",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productUrl": "",
                            "productImage": "zipai.jpg",
                            "salePrice": 39,
                            "productName": "自拍杆",
                            "productId": "201710007",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productUrl": "",
                            "productImage": "2.jpg",
                            "salePrice": 80,
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "2",
                            "checked": "1"
                        }
                    ],
                    "orderStatus": "1",
                    "createDate": "2017-09-13 19:50:16"
                },
                {
                    "orderId": "6225201709141420227",
                    "orderTotal": 5086,
                    "addressInfo": {
                        "addressId": "100004",
                        "userName": "Mary",
                        "streetName": "北京市朝阳区SOHO",
                        "postCode": 100005,
                        "tel": 10555555,
                        "isDefault": true
                    },
                    "goodsList": [
                        {
                            "productImage": "9.jpg",
                            "salePrice": 999,
                            "productName": "IH 电饭煲",
                            "productId": "201710009",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productImage": "note.jpg",
                            "salePrice": 3549,
                            "productName": "小米笔记本",
                            "productId": "201710005",
                            "productNum": "1",
                            "checked": "1"
                        },
                        {
                            "productUrl": "",
                            "productImage": "zipai.jpg",
                            "salePrice": 39,
                            "productName": "自拍杆",
                            "productId": "201710007",
                            "productNum": "2",
                            "checked": "1"
                        },
                        {
                            "productUrl": "",
                            "productImage": "2.jpg",
                            "salePrice": 80,
                            "productName": "头戴式耳机-3",
                            "productId": "201710004",
                            "productNum": "2",
                            "checked": "1"
                        }
                    ],
                    "orderStatus": "1",
                    "createDate": "2017-09-14 14:20:22"
                }
            ]
			 		});
			 	});
         console.log('数据库初始化成功');
      }
		});
	}