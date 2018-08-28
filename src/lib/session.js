//import api from './api';

// export default {
//   exist(unique, password) {
//     return api('user/read', {
//       where: {
//         or: [
//           ['username', '=', unique],
//           ['phone', '=', unique],
//           ['email', '=', unique],
//         ],
//       },
//     }).then(r=>{
//       let row;

//       if((row=r.data[0])&& row.password===password)
//       return row;

//       return false;
//     });

//   },
//   unifo(){
//     return JSON.parse(localStorage.getItem('uinfo')) ||{};
//   },

//   login(row){
//     this.replace_uinfo(row);
//   },
//   replace_uinfo(row){
//     delete row.password;
//     localStorage.setItem('uinfo',JSON.stringify(row));
//   },

//   logout(url){
//     localStorage.removeItem('uinfo');
//     location.href=url || '/';
//   },

//   is_admin(){
//     let info=this.unifo();
//     return info && this.unifo().is_admin;
//   },
//   logged_in(){
//     return !!this.his_id();
//   },
//   his_id(){
//     let info=this.unifo();
//     return info && this.unifo().id;
//   }

// };

import api from './api';

export default {
	exist(unique, password) {
		return api('user/read', {
			where: {
				or: [
					['username', '=', unique],//unique独一无二的
					['phone', '=', unique],
					['email', '=', unique],
				],
			},
		}).then(r => {
			let row;//获取到当前这一条row

			// console.log(r.data)
			// return;
			// 一个等号是赋值，两个等号是比较，比较当前这一条是否和返回的r.data[0]是否相等
			if ((row =r.data && r.data[ 0 ]) && row.password === password)
			{
				return row;

			}else{
				return false;

			}

		});
	},

	uinfo() {
		return JSON.parse(localStorage.getItem('uinfo')) || {};//拿出存进去的新密码
	},

	login(row) {//登陆的时候用的
		this.replace_uinfo(row);
	},

	replace_uinfo(row) {//重置这一条
		delete row.password;//删除密码
		localStorage.setItem('uinfo', JSON.stringify(row));//存进去
	},

	logout(url) {//登出就是把存在localStorage里的东西移除出来，
		localStorage.removeItem('uinfo');
		location.href = url || '/';//重新定位当前页
	},

	is_admin() {//确认是这个管理者
		let info = this.uinfo();
		return info && this.uinfo().is_admin;
	},

	logged_in() {//不是这个id
		return !!this.his_id();
	},

	his_id() {//确认id
		let info = this.uinfo();
		return info && this.uinfo().id;
	},
};