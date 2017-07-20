// detial.js
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataSource:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      var temp = options.data;
      console.log(options);
      //对象的json 字符串 转换成 obj 
      var obj = JSON.parse(temp)
      obj.img = "../"+obj.img
      this.setData({
        dataSource:obj,
      })


      var zhuanjia1 = `
<img src="http://www.haxfyy.com/uploads/image/20170518/20170518161324_81743.jpg" >		
		<h3 style="color:red">程华中 主任医师 26年临床经验</h3>
	<h4>★淮安幸福男科医院坐诊专家</h4>
	<h4>★WHO性功能障碍顾问委员会委员</h4>	
	<h4>★中华医学会男科学分会常务理事</h4>	

	<p><strong style="color:red">专家简介：</strong><strong>毕业于湖北医科大学，从事男科临床研究工作26年，对男性外科疾病的诊断和治疗有独特的手法，曾多次受邀参加全国性的男科高峰论坛及男科新技术、新成果研讨会，在生殖整形手术、阴茎背敏感神经阻断术研究方面有独到的建树，其精湛的医术收到了广大患者的一致好评和信赖。</strong></p>
	<p><strong style="color:red">诊治范围：</strong><strong>擅长前列腺疾病、性功能障碍、泌尿感染等疾病的治疗，尤其对前列腺炎、前列腺增生、阳痿、早泄疾病的诊疗造诣颇深，已成功治愈上万例前列腺患者。</strong></p>` ;

      var zhuanjia2 = `	<img src="http://www.haxfyy.com/uploads/image/20170518/20170518160953_40206.jpg" >		
	

	<p>幸福生殖医院-男科主任：孙如亮-从医近40余年，曾在南京瑞安医院，天津华山医院，河北文安友好医院，从事男科诊疗工作，经验丰富，具有完备的理论基础与多年临床经验，理论与实际相结合，擅长于各种男科常见疾病、疑难病的治疗。已为数万男性患者解决病痛的折磨！</p>
  <p>主治范围：</p>
  <p>擅长诊治因生殖内分泌、睾丸因素、性功能障碍、生殖系感染、精液异常、免疫性疾病等引起的男性不育，疗效显著;精索静脉曲张及输精管吻合术、阴茎延长术、包皮包茎整形等手术技术精湛。连续三年被我院评为“最受百姓欢迎男科医生”。</p>
`;

      var zhuanjia3 = `<img src="http://www.haxfyy.com/uploads/image/20170518/20170518160044_45033.jpg" >		
		<h3 style="color:red">★淮安幸福医院特邀专家</h3>
	<h4 style="color:red">医术精湛 守护患者健康</h4>
  <p>从医20年多年，一直致力于男科领域的研究和诊疗，临床经验丰富，同时，臧主任工作作风细致严谨，体恤患者，一切从患者的角度出发，深受患者的信赖和欢迎。他常说：选择医生这个职业就意味着选择了牺牲和奉献。病人的康复，是带给我的最大幸福!</p>
	<h3>人生格言</h3>
	<p>让中国健康的人多一点，病人少一点，再少一点。</p>
	<h3>患者印象</h3>
	<p>“对病人的病情详细耐心地解答，态度和蔼可亲技术好，人品好，是难得的好医生!</p>
  <p>“医术高超态度和蔼对病情治疗情况介绍清楚认真复诊仔细询问术后情况是一个为人民服务的好医生!”</p>
`;




      var zhuanjia4 = `	
    
      <img src="http://www.haxfyy.com/uploads/image/20170110/20170110103043_90013.jpg"  >		
    

	<p>幸福生殖医院-男科主任：马良，从事泌尿外科临床工作20余年，在泌尿外科手术以及男科学方面具有很高的造诣，还多次在泌尿外科学医疗杂志发表学术论文，其深厚的医学理论功底和丰富的临床经验受到同行的高度肯定，其崇高的医德和精湛的医术也深受患者的赞誉和好评.</p>
  <p>主治范围：擅长诊疗：性功能障碍、生殖感染、生殖整形、除腋臭等疾病；</p>
 `;


      var zhuanjia5 =  `
      <img src="http://fuke.haxfyy.com/uploads/image/20170111/20170111134220_29968.jpg"  >		
      <p><strong>姓名：</strong>董秀英</p>
      <p><strong>职称:</strong>妇科主任</p>  
      <p><strong>职务：</strong>淮安幸福妇科医院特聘专家</p>
      <p><strong>专长:</strong>计划生育科疑难病症(高危人流术、瘢痕子宫人流术、困难取环、中期引产绝育术等)输卵管复通术，输卵管整形术，绝育术后的输卵管吻合术。</p>
        <p><strong style="color:red">淮安幸福妇科医院特邀专家:</strong>从事几十年妇科临床工作，积累了丰富的临床经验，素有“万例手术无事故专家”之称。计划生育科疑难病症(高危人流术、瘢痕子宫人流术、困难取环、中期引产绝育术等)输卵管复通术，输卵管整形术，绝育术后的输卵管吻合术。子宫肌瘤手术，卵巢囊肿，子宫内膜异位症等疾病的诊治。</p>

`;

      var zhuanjia6 = `
      <img src="http://fuke.haxfyy.com/uploads/image/20170111/20170111134028_23857.jpg" width="131" height="180" >		
      <p><strong>姓名：</strong>汪立</p>
      <p><strong>职称:</strong>妇科主任</p>  
      <p><strong>职务：</strong>淮安幸福妇科医院特聘专家</p>
      <p><strong>专长:</strong>各种妇科高危及复杂手术，各种计划生育手术，对妇科常见病、多发病的诊治有着丰富的临床经验，尤其擅长对不孕不育症的诊治。</p>
        <p><strong style="color:red">万例手术无事故专家，从事妇科、计划生育科工作36年。擅长各种妇科高危及复杂手术，各种计划生育手术，对妇科常见病、多发病的诊治有着丰富的临床经验，尤其擅长对不孕不育症的诊治，如：输卵管病变堵塞、免疫性不孕、先天性发育异常、排卵异常等。</p>

`;

      var that = this;
      var replyArr = [];
      replyArr.push(zhuanjia1);
      replyArr.push(zhuanjia2);
      replyArr.push(zhuanjia3);
      replyArr.push(zhuanjia4);
      replyArr.push(zhuanjia5);
      replyArr.push(zhuanjia6);
   
      WxParse.wxParse('article', 'html', replyArr[this.data.dataSource.id], that, 5);
      // var that = this;
      // WxParse.wxParse('article', 'html', zhuanjia1, that, 5);


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