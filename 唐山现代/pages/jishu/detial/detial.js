// detial.js
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        id:options.id,
      })


      var jishu1 = `<h3>疗法简介</h3>
	<h3 style="color:rgb(0,131,179)">疗法简介显微阴茎敏感神经微控术</h3>
	<p>有效改善：射精过快 | 心理性早泄 | 性爱时间短无快感 | 其他</p>
	<div style="display:flex; flex-direction: row;width:250px;height:30px;">

			<span style="width:100px;height:30px;">推荐指数：</span> 

			<img  src="../../../images/js_s_5.jpg"  width="80px" height="30px" />
	
		
	</div>

	<h3>疗法介绍</h3>
	<div>
		<img src="../../../images/js_s1_img.jpg">
	</div>

	<p><strong>快速改善:</strong>性交时间短 | 射精过快 | 达不到性高潮 | 做爱时间短</p>
	<p><strong>手术时间:</strong>30-45分钟</p>
	<p><strong>疗法优势:</strong>高倍显微镜精准微控选择性阻断敏感神经，不触及海绵体和动脉血管，进而有效解决早泄烦恼。</p>
	<p><strong>性爱时间:</strong>有效延长性生活3-5倍</p>
` ;

      var jishu2 = `<h3>疗法简介</h3>
	<h3 style="color:rgb(0,131,179)">美式无痛包皮整形术</h3>
	<p>有效改善：包皮过长 | 阴茎短小 | 龟头不外露 | 包皮炎症 | 其他</p>
	<div style="display:flex; flex-direction: row;width:250px;height:30px;">

			<span style="width:100px;height:30px;">推荐指数：</span> 

			<img  src="../../../images/js_s_5.jpg"  width="50px" height="30px" />
	
		
	</div>

	<h3>疗法介绍</h3>
	<div>
		<img src="../../../images/js_bp_img1.jpg">
	</div>

	<p><strong>快速改善:</strong>包皮过长 | 阴茎短小 | 龟头不能外露 | 包皮炎症</p>
	<p><strong>手术时间:</strong>30-45分钟</p>
	<p><strong>疗法优势:</strong>独家无痛无针麻醉，过长包皮切割精确到微米级别，伤口缝合采用可吸收羊肠线进行内缝合，无痛苦，不留疤痕，术后仍可美观自然。</p>
	<p><strong>性爱时间:</strong>有效延长性生活3-5倍</p>`;

      var jishu3 = `<h3>疗法简介</h3>
	<h3 style="color:rgb(0,131,179)">六位一体分型疗法</h3>
	<p>有效改善：勃起不持久 | 不勃起| 勃起不坚| 房事力不从心 | 其他</p>
	<div style="display:flex; flex-direction: row;width:250px;height:30px;">

			<span style="width:100px;height:30px;">推荐指数：</span> 

			<img  src="../../../images/js_s_5.jpg"  width="80px" height="30px" />
	
		
	</div>

	<h3>疗法介绍</h3>
	<div>
		<img src="../../../images/js_yw_1.jpg">
	</div>

	<p><strong>快速改善:</strong>勃起不持久 | 不勃起| 勃起不坚| 房事力不从心</p>
	<p><strong>手术时间:</strong>30-45分钟</p>
	<p><strong>疗法优势:</strong>尖端设备查明病因，中西医结合，药物心理结合治疗，分型治疗阳痿勃起问题，效果显著。</p>
	<p><strong>专家评断:</strong>勃起硬度增加，勃起几率提升，性生活更和谐</p>`;




      var jishu4 = `<h3>疗法简介</h3>
	<h3 style="color:rgb(0,131,179)">GPH递进强化基因康复疗法</h3>
	<p>有效改善：龟头炎 | 阴囊炎 | 睾丸炎 | 尿道炎 | 其他</p>
	<div style="display:flex; flex-direction: row;width:250px;height:30px;">

			<span style="width:100px;height:30px;">推荐指数：</span> 

			<img  src="../../../images/js_s_5.jpg"  width="80px" height="30px" />
	
		
	</div>

	<h3>疗法介绍</h3>
	<div>
		<img src="../../../images/js_szq_1.jpg">
	</div>

	<p><strong>快速改善:</strong>龟头红点 | 睾丸疼痛 | 睾丸潮湿 | 尿道刺痛</p>
	<p><strong>手术时间:</strong>30-45分钟</p>
	<p><strong>疗法优势:</strong>针对生殖感染反复发作情况，从病变源头进行控制，药物因子超强渗透，中西医结合，破坏病毒的基因生物链，抑制病原体的合成，迅速清除病原体。</p>
	<p><strong>专家评断:</strong>全效杀菌，修复受损基因，提高免疫力</p>`;


      var jishu5 = `<h3>疗法简介</h3>
	<h3 style="color:rgb(0,131,179)">前列腺多维汇聚超声治疗系统</h3>
	<p>有效改善：前列腺炎 | 尿频尿急 | 排尿困难 | 尿痛 | 其他</p>
	<div style="display:flex; flex-direction: row;width:250px;height:30px;">

			<span style="width:100px;height:30px;">推荐指数：</span> 

			<img  src="../../../images/js_s_5.jpg"  width="80px" height="30px" />
	
		
	</div>

	<h3>疗法介绍</h3>
	<div>
		<img src="../../../images/js_qlx_1.jpg">
	</div>

	<p><strong>快速改善:</strong>尿频尿急 | 尿不尽 | 小腹胀痛 | 前列腺炎</p>
	<p><strong>手术时间:</strong>1-2个疗程</p>
	<p><strong>疗法优势:</strong>针对生殖感染反复发作情况，从病变源头进行控制，药物因子超强渗透，中西医结合，破坏病毒的基因生物链，抑制病原体的合成，迅速清除病原体。</p>
	<p><strong>专家评断:</strong>全效杀菌，修复受损基因，提高免疫力</p>	`;
  

      var that = this;
      var replyArr = [];
      replyArr.push(jishu1);
      replyArr.push(jishu2);
      replyArr.push(jishu3);
      replyArr.push(jishu4);
      replyArr.push(jishu5);

      WxParse.wxParse('article', 'html', replyArr[this.data.id], that, 5); 







  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})