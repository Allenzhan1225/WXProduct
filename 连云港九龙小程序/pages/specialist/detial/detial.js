// detial.js

var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:null,
      listData: [
        { "code": "01", "text": "text1", "type": "type1" },
        { "code": "02", "text": "text2", "type": "type2" },
        { "code": "03", "text": "text3", "type": "type3" },
        { "code": "04", "text": "text4", "type": "type4" },
        { "code": "05", "text": "text5", "type": "type5" },
        { "code": "06", "text": "text6", "type": "type6" },
        { "code": "07", "text": "text7", "type": "type7" }
      ],
      //每个医生的数据
      dataSource:[
          {
            'id':"1",
            "name":"张志宏",
            "img":"../../../images/home/zhang.jpg",
            "expertsTitles":"北京医学博士后",
            "type":"专家团队",
            "goodat": "前列腺增生(肥大)等离子微创技术，腹腔镜微创技术、难治性前列腺炎、性功能障碍等泌尿疾病。",
            "jianjie": "张志宏，副主任医师，北京大学医学部博士后，现留任北京大学第一医院泌尿外科，北京大学泌尿外科研究所，连云港九龙医院特聘专家，2004年被晋升为副主任医师，2005年任硕士研究生导师，培养硕士研究生1名。作为课题负责人，获得包括中国国家自然科学基金、教育部归国人员启动基金在内的研究课题6项，参与985、十一五攻关项目以及日本文部省研究课题项目多项，获省级科技进步二等奖1项，至今在国内外一流专业期刊发表学术论文30余篇，其中SCI收录6篇，出版论著1部。\n★北京大学医学部博士后\n★北京大学吴阶平泌外科医学中心特聘专家\n★连云港九龙医院特邀专家\n★国际器官移植学会正式会员\n★海外华人器官移植学会委员\n★科技部国际合作项目评审专家；\n★日本移植学会会员\n★日本泌尿外科学会会员；\n★国家自然科学基金项目负责人",

          },
          {
            'id': "2",
            "name": "李德华",
            "img": "../../../images/home/zhuangjia2.jpg",
            "expertsTitles": "学科带头人",
            "type": "专家团队",
            "goodat":"对前列腺疾病、性功能障碍、泌尿生殖整形、男性不育、泌尿生殖感染等男科疾病有深厚的理论和临床经验。",
            "jianjie": " 从事泌尿外科临床工作20余年，对于泌尿外科和男科常见病、疑难病的治疗有着深厚的理论基础和丰富的临床经验，精于各种肾脏、肾上腺、前列腺、膀胱、输尿管以及结石疾病的诊断和治疗，能熟练使用腹腔镜、膀胱镜等先进设备施行经尿道前列腺电切术、经尿道膀胱肿瘤切除术、腹腔镜精索静脉高位结扎术、尿道下裂修复术、肾囊肿去顶术、肾切除术、肾上腺切除术、隐睾探查术和输尿管切开取石术等。特别是在尿道下裂的治疗方面，采用韩式尿道下裂联合皮瓣矫正成形技术，实现对冠状沟型、阴茎型、阴茎阴囊型、阴囊型、会阴型等各种类型的尿道下裂一期手术成功修复，取得了显着的临床诊疗效果。近年来还开展阴茎敏感神经选择性阴断术治疗早泄以及韩式阴茎延长术治疗阴茎短小近千例，深受医界和患者好评。所获荣誉：发表 、省级学术论文20余篇。曾获江苏连云港市优秀医学科研论文奖二项，被江苏省政府评为“有突出贡献中青年专家”， 曾获“连云港市优秀科技专家”称号。曾任济南医学会男科学专业委员会委员、连云港市医学会男科专业委员会医生委员、连云港市医学会泌尿外专业委员会副医生委员等职。",
          },
          {
            'id': "3",
            "name": "高金安",
            "img": "../../../images/home/zhuangjia3.jpg",
            "expertsTitles": "前列腺科研组负责人",
            "type": "专家团队",
            "goodat": "急慢性前列腺炎、生殖感染、泌尿感染等疑难杂症。",
            "jianjie": "高金安：寻医问药专家组成员、百度知道专家组成员、我院前列腺疾病科研组负责人，专业擅长急慢性前列腺炎、生殖感染、泌尿感染等疑难杂症。尤其擅长用分型疗法治疗各类急慢性前列腺炎，成功开展前列腺疾病诊疗5000余例，深受患者的好评与一致信赖。20—20余年从业经验15000—共计15000以上患者38—收到38封感谢信107—获赠107面锦旗761—收到761患者网上点赞2127—共完成2127场手术0事故创新：在东东地区引进开展前列腺炎分型疗法治疗前列腺疾病。敬业：每位患者问诊时间不低于15分钟，坚持查房从不松懈。担当：领导眼中的技术骨干，前列腺疾病诊疗团队的核心力量。仁心：用心去感受病人的痛苦和需求，一点一滴积累患者的信任。",

          },
          {
            'id': "4",
            "name": "张金平",
            "img": "../../../images/home/zhuangjia4.jpg",
            "expertsTitles": "性功能障碍科研组负责人",
            "type": "专家团队",
            "goodat": "生殖整形、性功能障碍、男性不育等男科疾病的诊疗。",
            "jianjie": "张金平：从事男科疾病诊治20余年，毕业于南京医科大学，师从上海复旦大学附属中山医院陈琮琪教授，曾在连云港第一人民医院进修多年，现任连云港九龙医院泌尿科学会委员，曾率领中国医疗队远赴突尼斯、南非等国家进行医疗援助活动，已为数万男性患者解决病痛的折磨，连续三年被我院评为“最受百姓欢迎男科医生”。\n★中华医学会会员\n★江苏省医学会泌尿外科学会委员\n★江苏省医学会男科学会委员\n★国际泌尿外科学会会员\n★万例手术经验专家\n★十佳杰出男科医生\n★省级以上医学杂志发表论文20余篇\n★中国性学会性医学委员会全国委员金杯银杯不如大家的好口碑沈先生  33岁  早泄我三年前被确诊为早泄，三年的求医中所承受的身体创伤和心理压力是常人难以理解的，直到遇到张医生，他给我制定的治疗方案经过不到两个疗程我的性功能就有效恢复了，感谢张医生，是他让我重拾人生的信心。金先生 27岁 阳痿我和妻子之间聚少离多，性生活匆匆应付，很不和谐。近期发现，即使是应付也不行了，因为自己难以勃起，无奈只能寻求一些“壮阳”“补肾”的方法，可是几乎没什么效果，直到找到九龙的张医生，明确病因后给我选择了“线型冲击波”治疗，我们夫妻感情变好了，很庆幸自己遇到个有能力的医生。韩先生  35岁 包皮过长包皮手术是张医生给我做的，做之前还是很担心的，没想到做完之后一点都没疤痕，一个月后感觉性生活时间也比以前更长了，哈哈！",
          },
          {
            'id': "5",
            "name": "孙如亮",
            "img": "../../../images/home/zhuangjia5.jpg",
            "expertsTitles": "男科主任",
            "type": "专家团队",
            "goodat": "男性不育、生殖整形、性功能障碍",
            "jianjie": "从医近40余年，曾在南京瑞安医院，天津华山医院，河北文安友好医院，从事男科诊疗工作，经验丰富，具有完备的理论基础与多年临床经验，理论与实际相结合，擅长于各种男科常见疾病、疑难病的治疗。已为数万男性患者解决病痛的折磨，连续三年被我院评为“最受百姓欢迎男科医生”。主治范围：擅长诊治因生殖内分泌、睾丸因素、性功能障碍、生殖系感染、精液异常、免疫性疾病等引起的男性不育，疗效显著;精索静脉曲张及输精管吻合术、阴茎延长术、包皮包茎整形等手术技术精湛。",
          },
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("id=")
    console.log(options.id)
    console.log("index=")
    console.log(options.index)
    this.setData({
      id: options.id,
    });
 var that = this;
 var table = `	<div>
				<table style="border: 1px solid #CCC;">
					<tr>
						<th style="background-color: #104E8B; color: #FFF;font-weight: bold; width:50px">&nbsp;</th>	
						<th style="background-color: #104E8B; color: #FFF;font-weight: bold;width:50px">周五</th>	
						<th style="background-color: #104E8B; color: #FFF;font-weight: bold;width:50px">周六</th>	
						<th style="background-color: #104E8B; color: #FFF;font-weight: bold;width:50px">周日</th>	
						<th style="background-color: #104E8B; color: #FFF;font-weight: bold;width:50px">周一</th>	
						<th style="background-color: #104E8B; color: #FFF;font-weight: bold;width:50px">周二</th>	
						<th style="background-color: #104E8B; color: #FFF;font-weight: bold;width:50px">周三</th>	
						<th style="background-color: #104E8B; color: #FFF;font-weight: bold;width:50px">周四</th>	
					
					</tr>
					<tr>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">早班</td>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>			
					</tr>
					<tr>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">中班</td>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>			
					</tr>

						<tr>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">晚班</td>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;</td>			
					</tr>
					<tr>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">全天</td>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;√</td>
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;√</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;√</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;√</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;√</td>	
						<td style="padding: 4px;margin: 3px;border: 1px solid #CCC;">&nbsp;&nbsp;&nbsp;√</td>			
					</tr>
				</table>

			</div>

    `;

    WxParse.wxParse('article', 'html', table, that, 5);

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