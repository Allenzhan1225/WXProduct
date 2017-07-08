// detial.js

var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      index:options.id,
    });

    var that = this;
    WxParse.emojisInit('[]', "/wxParse/emojis/", {
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "05": "05.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
      "09": "09.gif",
      "10": "10.gif",
      "11": "11.gif",
      "12": "12.gif",
      "13": "13.gif",
      "14": "14.gif",
      "15": "15.gif",
      "16": "16.gif",
      "17": "17.gif",
      "18": "18.gif",
      "19": "19.gif",
    });
    /**
     * html解析示例
     */
    var article1 = `< !DOCTYPE HTML ><!--注释: wxParse试验文本-->
      <div style="text-align:center;margin-top:10px;">
		<img src="https://weappdev.com/uploads/default/original/1X/84512e0f4591bcf0dee42c3293f826e0c24b560c.jpg" alt="wxParse-微信小程序富文本解析组件Logo">
		<h1 style="color:red;">wxParse-微信小程序富文本解析组件</h1>
		<h2 >支持Html及markdown转wxml可视化</h2>
	</div>
  <div style="margin-top:10px;">
		<h3 style="color: #000;">支持video</h3>
		<div style="margin-top:10px;">
			<video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>
		</div>
	</div>
	
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持的标签</h3>
		<blockquote>wxParse支持70%的html的标签</blockquote>
		<div style="margin-top:10px;">
			<span>span标签</span>
			<strong style="color: red;">strong标签</strong>
		</div>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持的标签ul/li</h3>
		<blockquote>带有内联的li</blockquote>
		<div style="margin-top:10px;">
			<ul>
				<li style="color: red;">我是li 红色</li>
				<li style="color: blue;">我是li 蓝色</li>
				<li style="color: yelloe;">我是li 黄色</li>
			</ul>
		</div>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持内联样式style</h3>
		<blockquote>wxParse可以渲染原html带有的style样式</blockquote>
		<div style="margin-top:10px;">
			<span>span标签</span>
			<strong>strong标签</strong>
		</div>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持class潜入</h3>
		<blockquote>wxParse可以注入html带有的class属性</blockquote>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持emojis小表情</h3>
		<blockquote>wxParse可以解析固定格式的小表情标签</blockquote>
		<div style="margin-top:10px;">
			<p>这里可以解析出emoji的表情[00][01][02][03][04][05][06][07][08][09]</p>
		</div>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持图片自适应</h3>
		<blockquote>wxParse可以动态计算图片大小并进行自适应适配</blockquote>
		<div style="margin-top:10px;">
			<img src="http://a.hiphotos.baidu.com/image/pic/item/9a504fc2d5628535959cf4cf94ef76c6a6ef63db.jpg" alt="">
			<img src="http://e.hiphotos.baidu.com/image/pic/item/48540923dd54564e1e1ac2d7b7de9c82d0584fe4.jpg" alt="">
		</div>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持图片点击预览,左右滑动预览</h3>
		<blockquote>wxParse可以讲一篇文章中的几个图片一起预览</blockquote>
		<div style="margin-top:10px;">
			你可以点击上面的图片，将会进入预览视图，同时左右滑动可以切换图片预览
		</div>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持多数据循环渲染</h3>
		<blockquote>wxParse支持特定设置下的多数据渲染，适用于在评论、多文本分别渲染等</blockquote>
		<div style="margin-top:10px; text-align:center;">
			请继续向下看，循环渲染多条html评论
		</div>
	</div>
	<div style="margin-top:10px;">
		<h3 style="color: #000;">支持短table标签</h3>
		<blockquote>wxParse目前对于table的支持比较有限</blockquote>
		<div style="margin-top:10px; text-align:center;">
			<table>
	  <tr>
			<th>标题1</th>
			<th>标题2</th>
			<th>标题3</th>
			<th>标题4</th>
			<th>标题5</th>
		</tr>
	  <tr>
		  <td>cell1</td>
			<td>cell2</td>
			<td>cell3</td>
			<td>cell4</td>
			<td>cell5</td>
		</tr>
		<tr>
		  <td>cell1</td>
			<td>cell2</td>
			<td>cell3</td>
			<td>cell4</td>
			<td>cell5</td>
		</tr>
	</table>
		</div>
	</div>
  <!--ap-->
  `;


    var article = `<div class="title" style="padding:8px;">
		<h3 class="title" style="color:rgb(253,116,7);font-size:16px;text-align: center;">【早泄】欧式NT阴茎敏感神经分离术，延长性生活时间2-6倍！</h3>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【技术简介】</strong>正常情况下阴茎背神经的分枝应该是2、3根，而早泄患者的阴茎背神经可以达到8、9根，甚至13根。欧式NT阴茎敏感神经分离术在保证阴茎背神经总体功能正常的前提下，通过分离支配阴茎头的部分阴茎背神经的分支，降低阴茎头的超常敏感性，提高射精阈值，达到有效治疗早泄的目的。</p>

	</div>
	<div style="  display: flex;align-items: center;justify-content: center;">
		<img src="http://4g.lyg9lyy.com/uploads/image/20160524/20160524120517_45165.jpg"  >		

	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【适应症】</strong>早泄或坚持不久者、性伙伴满意率低于50%者、阴茎在阴道内连续抽动次数少于20-50次人群。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【技术优势】</strong>科学检测，可视安全，微创微痛，手术仅需10分钟，7天恢复，无任何副作用，术后平均延长性生活时间15-30分钟。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;color:red;"> <strong>【技术引进】</strong>科学检测，可视安全，微创微痛，手术仅需10分钟，7天恢复，无任何副作用，术后平均延长性生活时间15-30分钟。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;">“欧式NT阴茎敏感神经分离术”由连云港九龙医院引自欧洲，并升级改造，通过分离多余敏感神经，降低龟头敏感度，无副作用，以其极高的有效性及安全性赢得了和患者和专家学者的双重赞誉，被中国性学会授予国际标准。该技术自临床应用以来，已成功实施逾5万余例，术后87.5%的患者可将性生活时间延长至10-30分钟以上，其中有20%的患者还可达30分钟以上;10%的患者可延长至5分钟以上。</p>
	</div>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
		<img src="http://www.120jlnk.com/uploads/allimg/141107/3-14110G01310353.jpg"  >		
		<h5>欧式NT阴茎敏感神经分离术"亮相"个体化国际会议</h5>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>1.科学检测：</strong>连云港九龙引进美国AIO显微定位系统，此设备不仅可对男性功能障碍进行科学规范诊断，更在检测方法上全面超越原本通常使用的音叉测定法，使得检测更简单且更准确，而且能全程显示阈值方面的变化，准确测定阴茎背神经的敏感点。</p>
	</div>

	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
		<img src="http://m.lyg9lyy.com/uploads/image/20160322/20160322141136_51806.jpg"  >		
		<h5>黄金眼-美国AIO显微定位系统</h5>
	</div>


	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>2.可视安全：</strong>手术由上万例手术经验专家亲自操刀，结合国际前沿的纳米高倍显微镜，在2mm小孔内可视化操作，手术更加精准，更加安全，不损伤尿道及射精、生育功能。</p>
	</div>

	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
		<img src="http://www.120jlnk.com/uploads/allimg/141107/3-14110G01334920.jpg"  >		
		<h5>欧式NT阴茎敏感神经分离术后两大保障</h5>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>3.微创微痛:</strong>针对海绵体肌外侧的敏感神经，只需在男性器官皮肤上开一个2mm微小切口，10分钟即可完成手术。采用生物蛋白可吸收线缝合，无需拆线，无需住院。</p>
	</div>

	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
		<img src="http://4g.lyg9lyy.com/uploads/image/20160524/20160524120748_14486.jpg"  >		
		<h5>医院一角：专家亲自主刀手术</h5>
	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;">温馨提示：</strong>连云港九龙医院是国际连锁专业男科医院，先后被评为“中国商会江苏福利医院”、“连云港市医保、农保定点医院”、“北大前十医院中心技术协作单位”，连续五年蝉联“三好一满意医院”，年门诊量近2万余人次，住院病人8千余人次。如果您有任何关于男科方面的疑问或想预约专家，都可以直接点击在线咨询，或者直接拨打免费健康热线：0518-81591078。</p>
	</div>

    `;


    var article1 = `<div class="title" style="padding:8px;">
		<h3 class="title" style="color:rgb(253,116,7);font-size:16px;text-align: center;">【阳痿治疗】STR五环性功能康复术，让男人重新硬起</h3>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【技术简介】</strong>立足于分级治疗原理，综合运用脉冲多普勒动脉血流仪、阳痿心理导向疗法、中西药结合海绵体动力激活疗法、MCDR脉冲导融光能治疗系统、DEA神奇手性功能康复系统等先进技术，迅速的唤醒阳痿患者沉睡的性神经，增加阴茎动脉血流，激活阴茎海绵体动力，帮助患者实现阴茎自主勃起，疗效较好，安全无副作用，不产生依赖性，属于科学可靠的高新技术物理疗法。</p>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【技术优势】</strong>标本兼治，疗效持久稳定，疗程短，提升性功能2-6倍，非介入，无创伤，费用经济。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【系统介绍】</strong>传统阳痿治疗不规范，仅仅依靠一些药物辅助治疗.用药时可能情况有所好转,一旦停药,立即复发,并且可能导致阳痿加重.随着社会的进步,在中国加入WTO之后,我们的传统意识观念逐渐改变,国外夫妻非常重视性生活的质量,对于男性性功能障碍治疗技术尤为成熟.</p>
	</div>

	<div style="  display: flex;align-items: center;justify-content: center;">
		<img src="http://www.jlhosp.com/uploads/image/20160525/20160525105917_63417.jpg"  >		

	</div>
	<div>
		<p>连云港九龙医院率先引进的“STR五环性功能康复术”是治疗男性阳痿有力的武器,该疗法安全微痛,没有毒副作用,不产生依耐性,对阳痿、早泄、青少年性发育迟缓、中老年性功能衰退疗效都不错.</p>
	</div>
	
	<div style="  display: flex;align-items: center;justify-content: center;">
		<img src="http://www.jlhosp.com/uploads/image/20160525/20160525105944_34451.jpg"  >		

	</div>
	<h4>体系一.专项检测，明确病因</h4>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
	
		<p>针对阳痿的复杂病因，运用多普勒动脉血流分析仪、男性性功能动态诊断。性激素检测系统、尿动力学分析仪等尖端仪器，对与阳痿相关的十多个项目进行专项检测，精确判断勃起功能状况，准确查明病因对症治疗。</p>
		<img src="http://www.jlhosp.com/uploads/image/20160525/20160525110006_62427.jpg"  >		

	</div>

	<h4>体系二、电离通络，穴位治疗</h4>
	<p>运用先进的性功能障碍综合康复仪进行电脉冲激、负压吸引、气动按摩等多项物理治疗，调节大脑皮质功能，兴奋脊髓性中枢活动，并通过专用器具施治于阴茎及有关穴位，扩张阴茎动静脉血管，激活海绵体动力，增粗阴茎海绵体的体积。</p>
	
	<h4>体系三.中西结合，辨证施治</h4>
	<p>使用精选药物，针对性调节性神经、性腺轴和阴茎动脉血管上皮细胞功能，增加血流量，激活海绵体动力，改善勃起硬度，恢复正常的射精阈值。对内分泌问题、生殖系统炎症、血管供血不足等引起的性功能障碍进行辨症施治、分类诊治。</p>
	
	<h4>体系四.真空负压，磁振巩固</h4>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
	
		<p>通过真空负压、抽吸训练，兴奋脊髓性功能中枢，帮助阴茎勃起，增强阴茎海绵体血液充盈和减少血液回流，提高阴茎硬度和维持勃起时间。运用磁振康复系统产生的生物磁振效应和高能电磁场改善阴茎的主动勃起功能，同时利用模拟阴道温度、中药液按摩及电脉冲等功能，有效调节阴茎的被动勃起功能。</p>
		<img src="http://www.jlhosp.com/uploads/image/20160525/20160525110019_32040.jpg"  >		

	</div>


	<h4>体系五.心理治疗，康复检查，防止复发</h4>
	<p>由性心理专家与患者进行深层心理沟通，明确患者潜意识中的障碍根结，采取相应的针对性心理治疗，消除患者心理障碍，增强患者自信心。康复检查是在征得患者同意的情况下，全面了解患者的性生活状况，巩固治疗效果，这是保证患者痊愈的关键一步。</p>

	<h4>【患者见证】：数万康复病例――实现阳痿治疗史的历史性突破</h4>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
	
		<p>经数万例患者临床实验，STR五环性功能康复术能有效促进阴茎勃起，延长性爱时间，延长性爱生命周期，康复时间短，疗效持久。</p>
		<img src="http://m.lyg9lyy.com/uploads/image/20160525/20160525170247_25759.jpg"  >		

	</div>


	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;">温馨提示：</strong>连云港九龙医院是国际连锁专业男科医院，先后被评为“中国商会江苏福利医院”、“连云港市医保、农保定点医院”、“北大前十医院中心技术协作单位”，连续五年蝉联“三好一满意医院”，年门诊量近2万余人次，住院病人8千余人次。如果您有任何关于男科方面的疑问或想预约专家，都可以直接点击在线咨询，或者直接拨打免费健康热线：0518-81591078。</p>
	</div>`;

    var article2 = `<div class="title" style="padding:8px;">
		<h3 class="title" style="color:rgb(253,116,7);font-size:16px;text-align: center;">【包皮包茎】韩式纳米微创包皮整形术</h3>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【技术简介】</strong>手术采用局部麻醉，通过全电脑数控精准定位，分析包皮的长短、阴茎上血管和神经分布等情况，再配以多功能纳米微创整形系统，对儿童和成年患者的包茎、包皮过长进行修复，同时采用红外光谱促进切口的快速愈合，达到解决包皮过长、包茎的目的。</p>

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【主治疾病】</strong>包皮过长、包茎、龟头异味、包皮垢等</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>【技术优势】</strong>手术仅需15分钟、局麻无痛、无需住院、术后无需拆线,第二天即可正常上班，3-7天即可痊愈。临床数据显示，86.39%男性术后性生活时间可延长2-6倍。包皮过长、包茎不但影响阴茎的正常生长发育，还会感染各类泌尿疾病。严重者诱发阴茎癌，给健康带来严重威胁。</p>
	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;color:red;"> <strong>【技术引进】</strong>学习国际前沿技术，引进韩式纳米微创包皮整形术</p>
	</div>


	<div>
		<p>传统包皮手术是通过手术刀将多余的包皮去除，需1个多小时，且容易发生包皮系带过短症状，术后伤口大，恢复慢等诸多弊端。2011年6月，连云港九龙医院派专家团出访韩国三星尔医院，引进目前国际前沿韩式纳米微创包皮整形术。</p>
	</div>
	
	<div style="  display: flex;align-items: center;justify-content: center;">
		<img src="http://www.120jlyy.com/uploads/allimg/141021/6-14102116350c60.jpg"  >		

	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong>专家介绍：</strong>韩式纳米微创包皮整形术是当今包皮包茎整形术当中前瞻性技术，针对包皮包茎患者所关注的安全性和美观性方面有了完美的治疗系统，术后完美展现男性雄风。</p>
	</div>


	<h4>一、术前精确测量包皮长度，量身制定手术方案</h4>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
	
		<p>手术前需要测定每一位男士的阴茎血管和神经分布情况、阴茎海绵体及阴茎匍匐的伸缩性，以确保不影响术后的勃起及快感增强的需求，分型定制的理念是目前国内为数不多能达到标准的包皮技术。</p>
		<img src="http://www.120jlyy.com/uploads/allimg/141021/6-141021163F5115.jpg"  >		
		<p>术前精确测量包皮长度，量身制定手术方案</p>
	</div>


	<h4>二、纳米微创精雕细琢，安全微痛 成型</h4>
	<p>手术在千级无菌层流手术室中操作，采用全数码生殖整形治疗系统，使用纳米微创技术， 成型，仅需15分钟，外形整形美观，无需拆线。</p>

	<h4>三、3-7天恢复，术后实时追踪</h4>
	<p>无需住院，第二天即可正常上班，约7～10天后即可痊愈，术后一个月，可以恢复性生活。术后伤口应保持清洁干燥，小便时小心不要弄湿纱布。</p>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;color:red;"> <strong>【术后追踪】</strong> 86.39%包皮术后男士性功能明显增强</p>
	</div>


	<div style="  display:flex;flex-direction: column;">
	
		<p>1、术后男性龟头 裸露，无污垢生成;</p>
		<p>2、能重新激活阴茎皮肤细胞组织，促进阴茎二次发育;</p>
		<div style="  display:flex;flex-direction: column;align-items: center;justify-content: center;">
			<img src="http://3g.jlhosp.com/uploads/allimg/141107/1126003L2-5.jpg">
			<img src="http://3g.jlhosp.com/uploads/allimg/141107/1126002M8-6.jpg"  >		
		</div>
		<p>3、对男性的阳痿、早泄等性功能障碍有显著疗效，并能配合治疗和预防妇科疾病;</p>
		<p>4、包皮环切后，引起龟头表皮角质化而起到脱敏作用，因此，性功能明显增强。</p>
	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;">温馨提示：</strong>连云港九龙医院是国际连锁专业男科医院，先后被评为“中国商会江苏福利医院”、“连云港市医保、农保定点医院”、“北大前十医院中心技术协作单位”，连续五年蝉联“三好一满意医院”，年门诊量近2万余人次，住院病人8千余人次。如果您有任何关于男科方面的疑问或想预约专家，都可以直接点击在线咨询，或者直接拨打免费健康热线：0518-81591078。</p>
	</div>
`;

    var article3 = `	<div class="title" style="padding:8px;">
		<h3 class="title" style="color:rgb(253,116,7);font-size:16px;text-align: center;">前列腺炎 隧道扫描下靶向分型疗法</h3>

	</div>
	<div>
		<p>前列腺炎是男性发病率 高的疾病，常规临床治疗很难有效，并发症也多，如阳痿早泄，男性不育等。此外，慢性前列腺炎和顽固性的前列腺炎也是前列腺增生、前列腺癌变和囊肿的致病因素。因此，我们不得不重视!</p>	

	</div>
	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"><strong style="color:red;">连云港九龙医院专家提醒：</strong> 前列腺炎病因复杂、种类繁多，切勿千人一方。医生在治疗前列腺炎症时，需针对不同病人，不同情况进行分型治疗，切勿“眉毛胡子一把抓”。</p>

	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"><strong style="color:red;">复发难忍!传统治疗只会让病情更加严重</strong> </p>

	</div>


	<h4>1、抗生素治疗</h4>
	<p>不能穿越前列腺包膜，治疗效果不理想，而且会产生抗药性。</p>


	<h4>2、注射治疗</h4>
	<p>对顽固的前列腺炎有一定的作用，但穿刺可造成周围的组织损伤引起血尿。</p>



	<h4>3、物理治疗	</h4>
	<p>改善血液循环，可清除炎症。但没有治愈不复发的效果，并且对睾丸有损伤。</p>


	<p style="margin-top:20px;">临床中前列腺炎根据病因病理的不同，分为急慢性细菌性前列腺炎，急慢性非细菌性前列腺炎，以及慢性顽固性前列腺炎等。治疗中对于不同类型的前列腺炎，需针对具体的病因病理施以个性化的治疗方法。</p>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"><strong style="color:red;">前列腺疾病应分型治疗</strong> </p>

	</div>

	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"><strong style="color:red;">隧道扫描靶向分型疗法 治疗前列腺炎金标准</strong> </p>

	</div>

	<p style="margin-top:20px;">连云港九龙医院引进的“前列腺靶向分型疗法”，为国际男科重点科技成果，其创伤小，治愈快，疗效好,不复发等特点，通过34597例不同类型的前列腺炎患者针对性有效的治疗效果证实，该疗法分型明确，成为现代前列腺炎治疗公认的“金标准”。这也标志着前列腺炎诊疗进入分类分型时代。</p>

	<div class="title" style="">
			<p class="title" style="font-size:14px;text-align:left;"><strong style="color:red;">【治疗】3大核心技术 前列腺分型疗法受瞩目</strong> </p>
	</div>
	<div style="  display:flex;align-items: center;justify-content: center;flex-direction: column;">
		
		<img src="http://m.lyg9lyy.com/uploads/image/20160325/20160325101857_98186.jpg"  >		
		<img src="http://m.lyg9lyy.com/uploads/image/20160325/20160325101912_20584.jpg">
		<img src="http://m.lyg9lyy.com/uploads/image/20160325/20160325101921_73305.jpg">

	</div>

	<div class="title" style="">
			<p class="title" style="font-size:14px;text-align:left;"><strong style="color:red;">【优势】分型疗法五步走，根治前列腺炎</strong> </p>
			<p class="title" style="font-size:14px;text-align:left;"> <strong>1、精准诊断 定制治疗：</strong>通过隧道扫描实现精准查找致病细菌，从千病一方到对症个性化治疗的突破。</p>
			<p class="title" style="font-size:14px;text-align:left;"> <strong>2、实现透膜 高效吸收：</strong>渗透入膜10-15MM，杀菌效果提高15倍，可根除深层潜伏病菌。</p>
			<p class="title" style="font-size:14px;text-align:left;"> <strong>3、实现三通 拒绝复发：</strong>一通脂质包膜，使药物直达腺体;二通腺管，疏通了堵塞腺管，减少神经压迫;三通尿路，避免阻塞尿路。</p>
			<p class="title" style="font-size:14px;text-align:left;"> <strong>4、内外杀菌 标本兼治：</strong>实现全面杀灭内外病菌的突破，反复发作、久治不愈到 治愈、永不复发的突破。</p>
			<p class="title" style="font-size:14px;text-align:left;"> <strong>5、无创治疗 不伤身体：</strong>实现了国际医学界提倡的无创治疗，避免血管、神经损伤、前列腺组织损伤，短时间内即可获得理想疗效，有效抑制病情反弹。</p>
	</div>


	<div class="title" style="">
			<p class="title" style="font-size:14px;text-align:left;"><strong style="color:red;">【权威认证】连云港 一家指定临床医院</strong> </p>
			<p class="title" style="font-size:14px;text-align:left;"> 连云港九龙医院引进的"前列腺靶向分型疗法”被国家科技部认定为 重点医学科技项目，并在大部分医院医院开始临床推广。我院为国家临床重点男科医院，成为连云港 一家指定临床医院。</p>
			
	</div>

	<div class="title" style="">
			<p class="title" style="font-size:14px;text-align:left;"><strong style="color:red;">☆连云港九龙医院—“老品牌”的临床重点专科</strong> </p>
			<p class="title" style="font-size:14px;text-align:left;"> 连云港九龙医院为国家重点男性专科医院，连续5年蝉联 具影响力男科医院，也先后被评为“中国医疗质量诚信十强男科医院”、“全国百姓放心男科诊疗示范医院”等，其凭借着雄厚的临床诊疗实力，成为华东乃至全国男科医院的专业典范!</p>
			
	</div>

	<div style="  display:flex;flex-direction: column;align-items: center;justify-content: center;">
			<img src="http://m.lyg9lyy.com/uploads/image/20160325/20160325102134_76224.jpg">
			



	<div class="title" style="">
		<p class="title" style="font-size:14px;text-align:left;"> <strong style="color:red;">温馨提示：</strong>连云港九龙医院是国际连锁专业男科医院，先后被评为“中国商会江苏福利医院”、“连云港市医保、农保定点医院”、“北大前十医院中心技术协作单位”，连续五年蝉联“三好一满意医院”，年门诊量近2万余人次，住院病人8千余人次。如果您有任何关于男科方面的疑问或想预约专家，都可以直接点击在线咨询，或者直接拨打免费健康热线：0518-81591078。</p>

   

	</div>`;
    var replyArr = [];
    replyArr.push(article);
    replyArr.push(article1);
    replyArr.push(article2);
    replyArr.push(article3);
    WxParse.wxParse('article', 'html', replyArr[that.data.index -1], that, 5);


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