// detial.js
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      id: options.id,
    });

    var article = `<div class="title" style="padding:8px;">
		<h3 class="title" style="color:rgb(253,116,7);font-size:16px;text-align: center;">如何判断自己患了前列腺炎？</h3>

	</div>

	<h4 style="color:red;"><strong>1、排尿异常症状：</strong></h4>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column; margin-top:8px;">
		<img src="http://m.lyg9lyy.com/uploads/image/20160322/20160322180120_52247.png"  >		
	</div>

	<h4 style="color:red; margin-top:8px;"><strong>2、疼痛症状；</strong></h4>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;margin-top:8px;">
		<img src="http://m.lyg9lyy.com/uploads/image/20160322/20160322180132_61670.png"  >		
	</div>

	<h4 style="color:red;margin-top:8px;"><strong>前列腺炎危害可致不育，需及早检查对症治疗！</strong></h4>
	<p style="font-size:14px;text-align:left; margin-top:8px; color: rgb(69,69,69);">  出现尿频尿急尿滴白的患者一定要及时就医，因为泌尿系统疾病极易迁延为慢性病症，可并发睾丸炎、附睾炎、精囊腺炎、阳痿、早泄、男性不育等疾病。</p>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;margin-top:8px;">
		<img src="http://m.lyg9lyy.com/uploads/image/20160628/20160628122028_21009.jpg"  >		
	</div>

	<p style="font-size:14px;text-align:left;margin-top:8px;color: rgb(69,69,69);">  “目前已知的致病菌有100多种，很多致病菌依靠传统方法无法查到”，针对前列腺炎病因复杂的问题，九龙泌尿医院引进的“隧道扫描”技术，可以轻松彻查100多种致病菌，为前列腺疾病分型诊疗提供了依据,避免了误诊、漏诊情况的发生。</p>

	<div>
		<h4 style="color:red;margin-top:8px;"><strong>看前列腺炎？首选国际连锁专业男科医院！</strong></h4>
		<p style="font-size:14px;text-align:left;margin-top:8px; color: rgb(69,69,69); color: rgb(69,69,69);">  连云港九龙医院先后被评为“全国男科规范化诊疗师范单位”、“连云港市医保、农保定点医院”、“北大第一医院男科中心技术协作单位”，并在2011、2012、2013、2014、2015年连续五年蝉联”三好一满意医院”，年门诊量近2万余人次，住院病人8千余人次。</p>
		<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;margin-top:8px;">
			<img src="http://m.lyg9lyy.com/uploads/image/20160525/20160525170247_25759.jpg"  >		
		</div>
	<div>


	<h4 style="margin-top:8px;"><strong>看前列腺炎？首选国际连锁专业男科医院！</strong></h4>
	<p style="font-size:14px;text-align:left;margin-top:8px;color: rgb(69,69,69);">  连云港九龙医院引进的前列腺靶向分型疗法，集生物分子、聚能涡流磁、透融、磁能细胞修复效应于一体，实现了药效进入及排出（穿透脂质包膜）两大难题。 该技术不受年龄限制，具有创伤小，治愈快，疗效好，不复发等优点，被国际男科学会列为2013年全球治疗前列腺疾病重点推广新技术。</p>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;margin-top:8px;">
		<img src="http://m.lyg9lyy.com/uploads/image/20160322/20160322180448_62848.jpg"  >		
	</div>


	<p class="title" style="font-size:14px;text-align:left;margin-top:8px;color: rgb(69,69,69);"> <strong style="color:red;margin-top:8px;">  成立男科博士名医堂，</strong>为解决看病难看病贵问题，九龙于2011年正式成立了江苏省男科博士门诊，即京苏沪权威专家会诊中心，特邀京、苏、沪地区博士名医亲诊。</p>


	<div class="title" style="margin-top:8px;">
		<p class="title" style="font-size:14px;text-align:left;margin-top:8px;color: rgb(69,69,69);"> <strong style="color:red;margin-top:8px;">  温馨提示：</strong>  如果您还有其它疑问或想了解更多，欢迎点击在线咨询，资深专家可根据您的病情，详细为您讲解，或拨打咨询电话：0518-81591078，希望您能早日恢复健康。</p>
	</div>`
;

    var article1 = `<div style="height: 230px;width: 100%;display: flex;flex-direction: column;background-color: rgb(105,180,238);">
		<div style="padding:0px;margin-left:8px;">
			 <h4 style="color:rgb(251,227,39);font-size:16pt;font-family: 微软雅黑;"><strong>性功能障碍项目</strong></h4>
		</div>		

		<div style="display: flex;flex-direction: row;  flex-wrap: wrap;">
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">阳痿</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:%;height:30px;line-height:30px;text-align:center;">早泄</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">不射精症</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">勃起异常</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">射精异常</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">勃起障碍</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">性欲障碍</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">肾虚</span></div>
		</div>	

	</div>

	<div style="height: 230px;width: 100%;display: flex;flex-direction: column;background-color: rgb(218,240,254);">
			<span style="padding:0px;line-height:30px;margin-left:8px;"><strong style="font-size:16pt;">科室专家</strong></span>
			<div style="background:rgb(186,221,249);width:100%;height:1px;" ></div>
			<div style="height:230px;display: flex;flex-direction:row; margin:8px;width:99%">
				<img src="../../../images/home/zhang.jpg" style="height:60px;width:40px;">
				<div style="display: flex;flex-direction: column;margin-left:8px;">
					<span>张志宏  北大医学博士后</span>
					<span>工作年限 十余年</span>
					<span> 擅长：前列腺增生等离子术，性功能障碍、腹腔镜手术、前列腺炎...</span>
				</div>

			</div>
	
	</div>	
	</div>	
`;

    var article2 = `<div class="title" style="padding:8px;">
		<h3 class="title" style="color:rgb(253,116,7);font-size:16px;text-align: center;">梅毒的检查需要做哪些</h3>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> 梅毒是一种传染性很强的性病，主要的传播途径是通过性接触进行传播，感染上梅毒以后对人体的伤害极大，使其身心健康都受到折磨，严重时威胁到人的生命。梅毒是大家都常见的性传播疾病，由于每个人的工作性质不同，所处的环境也就不同，这些环境也是可能会造成梅毒发生的根源不尽相同。</p>

	</div>


	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;">梅毒主要是感染梅毒螺旋体的一种性传播疾病，梅毒可以表现为全身症状，分为早期梅毒和晚期梅毒。人们若是出现了梅毒的早期症状，应该积极的治疗是可以 治愈的。梅毒的早期症状在开始时，主要表现在包皮内面或冠状沟、包皮系带、阴茎上出现米粒大小的圆形，椭圆形硬结或疹子，大多数为单发，周边坚硬，表面迅速糜烂、溃疡，但无脓或不适感觉。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;">患者如果不及时进行治愈，有可能在一个月后发生更严重的二期梅毒，体重减轻、全身不适、慢性腹泻、全身淋巴结肿大、口腔粘膜溃疡。男性梅毒早期症状的不及时治疗，可导致机会性肺部感染或多发性出血肿瘤等严重疾病。</p>
	</div>

	
	

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;">那么，梅毒的检查需要做哪些?</strong></p>
	</div>

	<p class="title" style="font-size:14px;text-align:left;"> <strong>核心提示：</strong>梅毒螺旋体抗原血清试验：用活的或死的梅毒螺旋体或其他成分作抗原测定抗螺旋体抗体。敏感性和特异性均高。</p>

	<p class="title" style="font-size:14px;text-align:left;"> (一)早期梅毒应做梅毒螺旋体暗视野显微镜检查。</p>
	<p class="title" style="font-size:14px;text-align:left;">(二)梅毒血清反应素试验(如VDRL、USR或RPR试验)，有必要时再做螺旋体抗原试验(如FTA-ABS或TPHA试验)。</p>
	<p class="title" style="font-size:14px;text-align:left;"> (三)脑脊液检查，以除外神经梅毒，尤其无症状神经梅毒，早期梅毒即可有神经损害，二期梅毒有35%的病人脑脊液异常，因此要检查脑脊液。</p>
	<p class="title" style="font-size:14px;text-align:left;">(四)基因诊断检测</p>

	<p class="title" style="font-size:14px;text-align:left;"> <strong>连云港九龙专家温馨提示：</strong>男性梅毒的危害非常之大，男性朋友一定要充分认识，积极做好预防工作，一旦发现自己感染了病菌，一定要及时到医院进行检查治疗，以防恶化，给自己带来更大的痛苦。</p>


	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;">温馨提示：</strong>连云港九龙医院充分利用网络资源，开通了“在线专家 ”服务，通过一对一在线交流，为患者提供全面的咨询平台， 大程度的方便患者，并为患者就诊提供预约，到院治疗，不用排队，即可就医。</p>
	</div>

    `;


var article3 = `
  <div style="height: 230px;width: 100%;display: flex;flex-direction: column;background-color: rgb(105,180,238);">
		<div style="padding:0px;margin-left:8px;">
			 <h4 style="color:rgb(251,227,39);font-size:16pt;font-family: 微软雅黑;"><strong>生殖器整形项目</strong></h4>
		</div>		

		<div style="display: flex;flex-direction: row;  flex-wrap: wrap;">
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">包皮包茎</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:%;height:30px;line-height:30px;text-align:center;">疝气</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">鞘膜积液</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">尿道下裂</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">阴茎弯曲</span></div>
			<div style="margin:10px;width:80px;height:30px;border-radius: 2px;background-color: white;display: flex; justify-content: center;align-items: center;"><span style="color:rgb(45,136,207);width:80px;height:30px;line-height:30px;text-align:center;">隐睾</span></div>
	
		</div>	

	</div>

	<div style="height: 230px;width: 100%;display: flex;flex-direction: column;background-color: rgb(218,240,254);">
			<span style="padding:0px;line-height:30px;margin-left:8px;"><strong style="font-size:16pt;">科室专家</strong></span>
			<div style="background:rgb(186,221,249);width:100%;height:1px;" ></div>
			<div style="height:230px;display: flex;flex-direction:row; margin:8px;width:99%">
				<img src="../../../images/home/zhang.jpg" style="height:60px;width:40px;">
				<div style="display: flex;flex-direction: column;margin-left:8px;">
					<span>张志宏  北大医学博士后</span>
					<span>工作年限 十余年</span>
					<span> 擅长：前列腺增生等离子术，性功能障碍、腹腔镜手术、前列腺炎...</span>
				</div>

			</div>
	
	</div>	
	</div>	
`;

    var article4 = `<div class="title" style="padding:8px;">
		<h3 class="title" style="color:rgb(253,116,7);font-size:16px;text-align: center;">省内首家“生物补片早泄治疗技术”在九龙开展！</h3>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;">【技术背景】</strong>近年来发现，做过阴茎背神经切断术的部分患者认为自己阴茎麻木、快感下降，勃起困难，从而导致心理性勃起功能障碍，给患者造成痛苦的同时，也给医生带来了困扰。</p>

	</div>
	<div style="  display: flex;align-items: center;justify-content: center;">
		<img src="http://m.lyg9lyy.com/uploads/image/20170228/20170228222115_52462.jpg"  >		

	</div>





	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;" >【原理】</strong>本手术方式主要是利用脱细胞异体真皮基质医用组织补片覆盖阴茎背神经，从而降低性生活中阴茎冠状沟及包皮皮肤的敏感性，延长射精潜伏期，提高性生活质量。而且本手术方式不切断背神经，从而避免了由于患者对切断背神经的担心而导致心理性勃起功能障碍的几率。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>1、材料高端，效果理想：</strong>生物补片的基础材料是人脱细胞异体真皮基质医用组织补片，完整保留了细胞外基质的成分和相对完整的基底膜，非常适合修复缺损组织。</p>
	</div>

	<div style="  display: flex;align-items: center;justify-content: center;">
		<img src="http://m.lyg9lyy.com/uploads/image/20170228/20170228222502_79851.jpg"  >		

	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>2、自然逼真、厚薄精准：</strong>手术恢复后生物补片成为自身组织的一部分，补片的弹性和硬度接近人体软组织，外表自然逼真无疤痕，无异物轮廓或异物感，而且充盈富有弹性。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>3、无排异反应、兼容性良好：</strong>由于该技术的原理是将异体同种组织植入生理器官，术者自身组织会自动与这种组织融为一体。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>4、感染几率小、无毒副作用：</strong>手术排异反应和感染几率是成正比的，生物补片与周围组织具有相当好的兼容性，且不含任何对人体有害的物质，因此感染几率非常小。</p>
	</div>


	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>5、安全可靠、永久存活：</strong>生物组织补片植入后，能诱导细胞长入，使组织有序更新，与人体自身组织很好兼容，可以永久存活，不影响睾丸及内部神经功能等。</p>
	</div>

	<div style="  display: flex;align-items: center;justify-content: center;">
		<img src="http://m.lyg9lyy.com/uploads/image/20170228/20170228235052_19853.jpg"  >		

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>6、无需住院 无年龄限制：</strong>该技术没有年龄限制，原则上只要是生理器官短小、弯曲、畸形或者对夫妻生活不满意的成年男性适合手术指征都可以施行手术。</p>
	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;">【疗效跟踪】</strong>李XX，男性，27岁，射精过快，2016年8月3日在我院行脱细胞生物补片术，术前射精1分钟，6周后回访射精8分钟。术后3个月回访，射精潜伏期在5-10分钟之间。</p>
	</div>
`;

    var article5 = `<div class="title" style="padding:8px;">
		<h3 class="title" style="color:rgb(253,116,7);font-size:16px;text-align: center;">九龙医院携手滴滴打车送健康</h3>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> 近日，连云港九龙医院与滴滴打车达成战略合作，双方将联手在生活服务领域开启免费专车就医活动。一个是最大的移动信息出行平台，一个是国际连锁品牌专业男科医院，二者合作会擦出什么样的火花？</p>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> 业内人士表示，滴滴打车一般都挑选业内龙头企业合作，此前曾与中国好声音、上海证券、蒙牛等领先企业进行合作。本次与连云港九龙医院合作，这也表明了连云港九龙医院是港城男科医院之首。</p>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> 据悉，连云港九龙医院位于解放中路125号，此次与滴滴打车合作方案是，凡连云港市内网络预约首次就诊的患者，就诊当天即可免费乘坐滴滴专车到医院就诊，仅限100位。</p>

	</div>
	<div style="  display: flex;align-items: center;justify-content: center;">
		<img src="http://m.lyg9lyy.com/uploads/image/20160824/20160824114124_47857.jpg"  >		

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> 连云港九龙医院相关负责人称，通过与滴滴的合作，连云港九龙医院将更进一步为港城男性的就诊之路提供更多的实惠和便利。</p>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> 本次活动最终解释权归连云港九龙医院所有，如有任何疑问或者需要预约滴滴专车可以拨打0518-81591078详询！</p>

	</div>`;


    var that = this;
    var replyArr = [];
    replyArr.push(article);
    replyArr.push(article1);
    replyArr.push(article2);
    replyArr.push(article3);
    replyArr.push(article4);
    replyArr.push(article5);
    WxParse.wxParse('article', 'html', replyArr[this.data.id], that, 5);

    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
      }
    }

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