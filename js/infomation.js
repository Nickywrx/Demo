var slide = '.address'
var _mm = {
	// 字段的验证，支持非空、手机、邮箱验证
	validate : function(value,type){
		var value= $.trim(value);
		//非空验证
		if('require' === type){
			return !!value;
		};
		//手机验证
		if('phone' === type){
			return /^1(3|4|5|7|8)\d{9}$/.test(value);
		}
	}
}


// 表单里的错误验证
var formError = {
	show : function(errMsg){
		$.toast(errMsg)
	}
};

var information = {
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		var _this = this;
		this.dialog();
		this.citySelect();
		// 表单提交
		$('#submit').click(function(){
			_this.submit();
		})
	},
	//点击让选择省市窗口出来
	dialog : function(){
		/*上面的市选择*/
		$('.select-box .pro-btn').click(function(){
			var region = $('#num-address').val();
			region = region.split(' ')
			$.province({
				type : 1,
				province: region[0],
				city: region[1],
			});
		})
		/*下面的市选择*/
		$('.contact-information .city-btn').click(function(){
			var region = $('#use-address').val();
			region = region.split(' ')
			$.province({
				type : 2,
				province: region[0],
				city: region[1],
			});
		})
		/*点击选择手机*/
		$('.num-sel').click(function(){
			$('.phone-dialog').show();
		});
		/*点击关闭按钮，手机遮罩关闭*/
		$('.close-btn').click(function(){
			$('.phone-dialog').hide();
		})
	},
	//选择市
	citySelect : function(){
		/*点击其中的一个电话*/
		$('.phone-dialog').on('click','li',function(e){
			e.stopPropagation();
			$(this).addClass('active').siblings('li').removeClass('active');
			$('input.num-sel').val($(this).text());
			$(this).parents('.phone-dialog').hide();
		})
	},
	// 提交表单
	submit : function(){
		var formData = {
			numAddress 	   : $.trim($('#num-address').val()),
			newPhone 	   : $.trim($('#new-phone').val()),
			useAddress 	   : $.trim($('#use-address').val()),
			detailsAddress : $.trim($('#details-address').val()),
			usePhone       : $.trim($('#use-phone').val())
		};
		// 表单验证结果
		validateReult = this.formValidate(formData);
		// 验证成功
		if(validateReult.status){
			window.location.href = "./info-validation.html";
		}else{
			formError.show(validateReult.msg);
		}
	},
	// 表单字段的验证
	formValidate : function(formData){
		var result = {
			status : false,
			msg    : ''
		};
		if(!_mm.validate(formData.numAddress,'require')){
			result.msg = '号码归属地不能为空';
			return result;
		};
		if(!_mm.validate(formData.newPhone,'phone')){
			result.msg = '新手机号格式不正确';
			return result;
		};
		if(!_mm.validate(formData.useAddress,'require')){
			result.msg = '所在地区不能为空';
			return result;
		};
		if(formData.detailsAddress.length<5){
			result.msg = '详细地址不能少于5个字';
			return result;
		};
		if(!_mm.validate(formData.usePhone,'phone')){
			result.msg = '常用手机号格式不正确';
			return result;
		};
		// 通过验证，返回正确提示
		result.status = true;
		result.msg    = '验证通过';
		return result;
	}
}
information.init();

var region = {
	province : '云南',
	citys : [
		{name: '昆明',id : 123},
		{name: '宝山',id : 123},
		{name: '楚雄',id : 123},
		{name: '大理',id : 123},
		{name: '德宏',id : 123},
		{name: '红河',id : 123},
		{name: '丽江',id : 123},
		{name: '临沧',id : 123},
		{name: '普洱',id : 123},
		{name: '怒江',id : 123},
		{name: '曲靖',id : 123},
		{name: '文山',id : 123},
		{name: '西双版纳',id : 123},
		{name: '玉溪',id : 123},
		{name: '邵通',id : 123},
		{name: '迪庆',id : 123},
	]
}


$.province = (function () {
	var defaultOptions = {
		type : 1,
		province: '云南',
		city: '',
		region : region,
		clickFun: function () {}
	};
	return function (options) {
		var option = $.extend({},defaultOptions,options);
		// 展示代码
		var html= '<div class="provinceDialog">\
						<div class="provinceMask"></div>\
						<div class="provinceBox">\
							<ul class="province">\
								<li class="active">' + option.region.province + '</li>\
							</ul>\
							<ul class="city">';
			option.region.citys.forEach(function(item){
				if(item.name == option.city){
					html += '<li class="active">'+ item.name +'</li>'
				}else{
					html += '<li>'+ item.name +'</li>'
				}
			})
			html += 		'</ul>\
						</div>\
					</div>';
		var modal = $(html).appendTo(document.body);
		// 获得dom 元素 绑定 事件
		var $provinceEl = $('.provinceDialog');
		$provinceEl.on('click','.city li',function (e) {
			$(e.target).addClass('active').siblings('li').removeClass('active');
			var result = option.region.province + ' ' + $(e.target).text();
			$('.provinceDialog').hide();
			if(option.type == 1){
				$('#num-address').val(result);
			}else{
				$('#use-address').val(result);
			}
		});
		$provinceEl.on('click','.provinceMask',function () {
			$('.provinceDialog').hide();
		});
	}
})();

