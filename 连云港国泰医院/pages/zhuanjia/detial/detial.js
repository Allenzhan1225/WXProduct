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

      this.setData({
        dataSource:obj,
      })


      var zhuanjia1 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020115307_50940.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">吴宜澄 男科主任医师</p>
	<p style="text-indent: 2em">世界中医药学会男科专业委员会委员;</p>
	<p style="text-indent: 2em">中华中医药学会男科专业委员会委员</p>
	<p style="text-indent: 2em">江苏省中医药学会男科专业委员会副主任委员</p>
	<p style="text-indent: 2em">江苏省中医学会理事</p>	
	<p style="text-indent: 2em">连云港市男科学会主任委员</p>
	<p style="text-indent: 2em">原连云港市第二人民医院院长、男科医师。</p>
	<p style="text-indent: 2em">连云港市国泰医院男科首席医师</p>
	<p style="text-indent: 2em">吴宜澄院长毕业于南京中医药大学，从事男科工作三十余年，20世纪80年代曾到北京、上海学习，早年学于日本大阪。擅长诊治男科不育症、性功能障碍、急慢性前列腺等男性疑难疾病。三十余年来吴院长诊治国内外患者一万余人，受到患者的广泛赞誉。1996年曾应泰国卫生部邀请，到泰国会诊，是江苏省男科的学术带头人之一，是国内知名的男科医师。</p>` ;

      var zhuanjia2 = `	<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020115101_30867.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">王恩祥——中华医学会泌尿外科学会会员</p>
	<p style="text-indent: 2em">国泰男科医院男科主任</p>
	<p style="text-indent: 2em">从事泌尿外科临床工作20多年，具有丰富的临床经验，对泌尿外科常见病、疑难病、多发病的治疗有独到的见解。</p>
	<p style="text-indent: 2em">擅长运用各种欧美先进的诊疗设备，专业治疗泌尿系统疾病，疗效显著，深得广大男性患者的充分信任，在相关医学杂志上发表学术论文10余篇。</p>
	`;

      var zhuanjia3 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020114820_83733.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">相守建</p>
	<p style="text-indent: 2em">国泰男科医院男科主任 中华医学会泌尿外科学会会员</p>
	<p style="text-indent: 2em">个人简介</p>
	<p style="text-indent: 2em">国泰男科医院男科主任。中西医结合男科硕士。北京医学会男科分学会青年委员。擅长中西医结合诊治前列腺疾病(前列腺炎、前列腺增生)、</p>
	<p style="text-indent: 2em">性功能障碍(阳痿、早泄、性欲低下)、男性不育症、泌尿生殖系感染等男科疾病。发表相关专业论文十余篇，参编男科教材及专著13部。</p>

`;
      var zhuanjia4 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020113208_35888.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">★上海复旦大学附属医院泌尿外科</p>
	<p style="text-indent: 2em">★主任医师/男科博士</p>
	<p style="text-indent: 2em">★享国务院津贴</p>
	<p style="text-indent: 2em">陈琮琪教授，中央卫生部国家医疗队成员、中华医学会上海分会医学会员、国际男性学会会员、《中国男科杂志》特邀学术顾问。长期致力于男性外科及泌尿外科男性学的临床、教学与研究工作。
(前列腺炎、前列腺增生)、</p>
	<p style="text-indent: 2em">特别擅长：使用高科技医疗诊断、治疗设备，中西医辩证施治各类前列腺手术方面有深入的临床研究和实践，对急慢性前列腺炎、性功能障碍、男性不育、病毒疣、疱疹等泌尿系感染性疾病诊疗有较深造诣临床获得良效。</p>
	<p style="text-indent: 2em">医德医风：</p>
	<p style="text-indent: 2em">时刻为病人着想，千方百计为病人解除病痛。</p>
	<p style="text-indent: 2em">尊重病人的人格和权利，对待病人都一视同仁。</p>


`;
      var zhuanjia5 = `
	<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020112759_20502.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">★上海复旦大学附属医院泌尿外科</p>

	<p style="text-indent: 2em">★主任医师/男科博士</p>
	<p style="text-indent: 2em">★享国务院津贴</p>
	<p style="text-indent: 2em">泌尿外科主任医师，全国著名泌尿外科专家，参加临床工作40余年。</p>
	<p style="text-indent: 2em">擅长项目：对阳痿、早泄、遗精、性欲减退、不射精、逆行射精、性交疼痛等性功能障碍有着很深的造诣;对久治不愈的性功能障碍患者治疗有一套自己独特的治疗方案;运用性功能康复治疗仪先后为众多患者重返健康，十余年来，深受患者好评。</p>
	<p style="text-indent: 2em">从医感言：高尚的医德，必将拓展我们的神圣事业;廉洁的医风，必将提升我们的人生价值。每一个医生和所有家属的心情是完全一样的!没区别的!都是赶走疾病，还人民健康。
</p>`;
      var zhuanjia6 = `
	<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161014/20161014162335_69893.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">黄德骧教授</p>
	<p style="text-indent: 2em">★上海复旦大学附属医院泌尿外科</p>

	<p style="text-indent: 2em">★主任医师/男科博士</p>
	<p style="text-indent: 2em">★享国务院津贴</p>
	<p style="text-indent: 2em">主任医师，副教授，1942年6月出生于上海市。1965年7月毕业于上海第一医学院医疗系(6年制)。系国务院政府特殊津贴专家、著名泌尿外科专家、主任医师。</p>
	<p style="text-indent: 2em">四十几年来，黄德骧教授对泌尿系统疾病刻苦研究，造诣颇深，形成了一套行之有效的独特治疗方案。;对久治不愈的性功能障碍患者治疗有一套自己独特的治疗方案;运用性功能康复治疗仪先后为众多患者重返健康，十余年来，深受患者好评。</p>
	<p style="text-indent: 2em">擅长项目：对前列腺炎、前列腺增生以及性功能障碍的治疗有着丰富的临床经验，尤其擅长由于各种原因引起的前列腺炎的康复治疗，如智源肽前列腺炎治疗系统的运用等。</p>
	<p style="text-indent: 2em">从医感言：我誓言将高度的责任心和使命感作为我行医的座右铭!我希冀在暮年回想自己几十年的从医岁月时，能无怨无悔!行医一辈子，假如能得到您的肯定，我是一个合格的大夫，我觉足矣。</p>`;
      var zhuanjia7 = `	<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161014/20161014154019_32325.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">临床职称 ：主治医师</p>
	<p style="text-indent: 2em">行政职务 ：门诊医生</p>

	<p style="text-indent: 2em">所属医院：连云港国泰医院</p>
	<p style="text-indent: 2em">门诊类型：普通门诊</p>
	<p style="text-indent: 2em">出诊时间：周一、周二、周四到周日</p>
	<p style="text-indent: 2em">擅长：生殖整形、性功能障碍、男性不育等男科疾病的诊疗。</p>
	<p style="text-indent: 2em">医生简介：从事泌尿外科疾病诊治20余年，医技精湛，医德高尚，享誉江浙地区，在生殖整形、性功能障碍、男性不育等泌尿疾病的诊断及治疗上积累了丰富的临床经验。先后发表男科显微手术论文多篇，现任连云港国泰医院泌尿科学会委员，曾率领中国医疗队远赴突尼斯、南非等国家进行医疗援助活动，为当地泌尿外科患者送去了福音，为祖国赢得了赞誉。</p>
	<p style="text-indent: 2em">所得荣誉：</p>
	<p style="text-indent: 2em">★中华医学会会员</p>
	<p style="text-indent: 2em">★江苏省医学会泌尿外科学会委员</p>
	<p style="text-indent: 2em">★江苏省医学会男科学会委员</p>
	<p style="text-indent: 2em">★国际泌尿外科学会会员</p>
	<p style="text-indent: 2em">★万例手术经验专家</p>
	<p style="text-indent: 2em">★十佳杰出男科医生</p>
	<p style="text-indent: 2em">★省级以上医学杂志发表论文20余篇</p>
	<p style="text-indent: 2em">★中国性学会性医学委员会全国委员</p>`;




     

    var fuke1 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding:0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20170525/20170525105906_25453.jpg" width="100px" height="120px">

	<p style="text-indent: 2em">谢海玲医生毕业于江苏职工医科大学</p>
	<p style="text-indent: 2em">对妇科常见病、多发病，肛肠疾病有着丰富的临床经验，擅长妇科、肛肠等各类手术;</p>
	<p style="text-indent: 2em">如：上环、取环、子宫肌瘤、卵巢囊肿、LEEP刀宫颈修复术、超导可视无痛人流术 、韩式阴道紧缩术、韩式纳米无痕处女膜修复术、输卵管通液术等妇科手术和多普勒痔疮动脉结扎术、 PPH吻合治痔技术、HCPT肛肠治疗技术、TST微创技术、COOK痔疮枪等肛肠手术。</p>`;
    var fuke2 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding:0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20170428/20170428093351_71400.jpg" width="100px" height="120px">

	<p style="text-indent: 2em">代群英毕业于苏州医学院</p>
	<p style="text-indent: 2em">从事妇产科工作20余年。长期开展对育龄妇女进行优生优育、避孕节育指导，精通妇产科的常见病、多发病以及疑难病的诊治。尤其是对高危人流、无痛人流、宫颈疾病等高难度手术具有丰富的临床经验及技术。曾多次参加全国妇产科高级技术研讨会。;</p>
	`;
    var fuke3 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20170408/20170408165117_85541.jpg" width="100px" height="120px">

	<p style="text-indent: 2em">刘艳林 妇科主任</p>
	<p style="text-indent: 2em">从事妇科工作多年，对妇科疾病的治疗经验丰富，特别对计划生育、盆腔炎性疾病、慢性盆腔痛有准确的诊断和独特的治疗方案，同时擅长子宫功能性出血、内分泌紊乱、子宫肌瘤、不孕不育、外阴白斑等诊断和治疗。倡导在私密整形诊疗中修复机体外提升功能性的先进理念，做到手术微诊疗无痕，提高女性房事感受，预防子宫脱垂等急重症，在妇科整形领域收获良好口碑，深受患者依赖。;</p>
	<p style="text-indent: 2em">社会评价：</p>
	<p style="text-indent: 2em">长期以来，以其尽职尽责之心，谦和敬业的态度为疑难病症患者摆脱痛苦，其精湛的医术、高尚的医德深得广大患者好评。</p>
	<p style="text-indent: 2em">专业擅长：运用现代医疗手段治疗妇科各类炎症，对计划生育(人工流产)处置有丰富的临床经验。在宫颈疾病治疗、妇科生殖整形手术尤为突出。</p>	
	</div>	`;
    var fuke4 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020135843_10112.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">【医生介绍】</p>
	<p style="text-indent: 2em">毕业于汝州卫校临床医疗系，从事临床妇科工作，致力于女性不孕症的诊断与治疗临床经验。;</p>
	<p style="text-indent: 2em">【技术特长】</p>
	<p style="text-indent: 2em">擅长：各种原因引起的不孕不育、尿道炎、阴道炎、泌尿生殖、附件炎、盆腔炎、性传播疾病、宫外孕等方面治疗方案，对于妇产科疑难病例及急危重症的处理具有丰富经验。</p>
	<p style="text-indent: 2em">【励志语录】</p>	
	<p style="text-indent: 2em">我希望能和我的患者成为朋友，尽我所能给她们以关爱!用我的真心和医术，让每位就诊患者康复是我大的愿望</p>	`;
    var fuke5 = `	 <div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020135536_99563.png" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">【医生介绍】</p>
	<p style="text-indent: 2em">张新军：毕业于河南省平顶山卫校，从事妇产科临床工作多年，积累了扎实的妇科理论知识和丰富的临床经验。多次出席医院妇科研讨会。</p>
	<p style="text-indent: 2em">【技术特长】</p>
	<p style="text-indent: 2em">妇科常见疾病的预防、诊断与治疗。在盆腔炎、附件炎、子宫内膜炎、宫颈炎及各种阴道炎、阴道紧缩术、处女膜修复术、性病、淋病、尖锐湿疹、梅毒等疾病的诊断及治疗;对不明原因的不孕不育、宫颈疾病、月经失调、卵巢囊肿、子宫肌瘤、子宫内膜异位症、更年期综合征等疑难妇科疾病有深入研究。
</p>
	<p style="text-indent: 2em">【励志语录】</p>	
	<p style="text-indent: 2em">医者父母心，仁心、仁术德为先!</p>	
	<p style="text-indent: 2em">【社会荣誉】</p>	
	<p style="text-indent: 2em">座右铭：以博爱的胸怀服务好每位患者!</p>	`;
    var fuke6 = `
	 <div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020135414_25838.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">中华医学会会员;</p>
	<p style="text-indent: 2em">黄树敏主任毕业于北京医科大学，原连云港市第一人民医院麻醉科主任，专家组成员;</p>
	<p style="text-indent: 2em">从事医学临床40余年，积累了丰富的临床经验，特别是在重危病人的抢救、无痛分娩、无痛人流及高危、疑难手术麻醉方面有着较深的造诣，长期开展疼痛专家门诊。</p>
	<p style="text-indent: 2em">黄主任从医以来，发表多篇论文，并多次参加国内学术会议。</p>
	<p style="text-indent: 2em">对无痛人流，各种疼痛疾病的诊治达国内先进水平。</p>	
`;
    var fuke7 = `	 <div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020135212_10945.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">蒋丽君主任</p>
	<p style="text-indent: 2em">主任医师 不孕不育学科带头人</p>
	<p style="text-indent: 2em">全国优秀不孕不育诊疗专家</p>
	<p style="text-indent: 2em">中华医学会妇产科学会会员</p>
	<p style="text-indent: 2em">连云港市广播电台健康栏目特邀嘉宾</p>	
	<p style="text-indent: 2em">我院首项宫腹腔镜及美国cook导丝介入治疗不孕不育学科带头人之一</p>	
	

	<p style="text-indent: 2em">从事妇产科、不孕不育科临床、科研、生殖、防治工作30余年，曾在吉林省人民医院妇产科和吉林市妇产医院工作学习，是我院首创宫/腹腔镜、三镜一丝微创技术介入治疗不孕不育学科带头人。曾多次参加国际、国内不孕不育学术论坛，发表30余篇学术论文。擅长中西医结合疗法治疗各种原因引起的不孕不育症，如：各种细菌感染引起的阴道炎，宫颈炎，附件炎，盆腔炎，盆腔粘连，腹膜炎，腹膜结核，子宫发育不良、畸形，子宫内膜炎，宫腔息肉、肌瘤，腺肌瘤，腺肌症，子宫内膜异位，卵巢囊肿，畸胎瘤，巧克力囊肿，多囊卵巢综合征，输卵管梗阻、阻塞、粘连、积水，人流术后，习惯性流产，功血，排卵障碍(卵泡发育不良、不排卵)，黄体功能不全(破裂)，月经不调(原发/继发闭经)，内分泌失调、高泌乳症及自身免疫性不孕症等。早在80年代，就已积累了丰富的不孕不育临床诊疗经验和扎实的理论知识，特别在不孕不育及妇科病引起的不孕不育的临床诊治上，短时间内成功妊娠率可达90%，圆了数万个家庭的生子梦，深受全国各地患者爱戴，被所有的国泰妈妈及爸爸称为真正的“送子观音”，几十年工作努力，被国家卫生部优生优育协会、中华医学发展研究会生殖健康专业委员会评为“全国优秀不孕不育诊疗专家”称号。</p>		
</body>`;


    var gongchang1 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20170525/20170525110759_30823.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">职称：副主任医师</p>
	<p style="text-indent: 2em">擅长：肛周脓肿、肛瘘、环装混合痔、肛裂等肛肠疑难杂症</p>
	<p style="text-indent: 2em">就职医院：连云港国泰医院肛肠科</p>
	<p style="text-indent: 2em">杜军，副主任医师，连云港国泰肛肠病学科首席专家，20余年丰富的肛肠科临床经验。长期从事大肠肛门疾病的教学、研究和治疗工作，理论扎实，临床经验丰富。以治疗高位复杂性肛瘘、马蹄形、半月蹄形肛周脓肿、肛瘘、环装混合痔、肛裂等肛肠疑难杂症而闻名。拥有丰富的结直肠肿瘤筛查、诊断和治疗经验，擅长各种肛肠病的术后处理与恢复治疗。</p>
	<p style="text-indent: 2em">精通熟练：</p>	
	<p style="text-indent: 2em">掌握PPH技术、COOK痔疮枪、HCPT等微创无痛技术。</p>	
	

	<p style="text-indent: 2em">医德医风：</p>		
	<p style="text-indent: 2em">医德高尚，深受广大患者的信赖与好评。</p>	`;
    var gongchang2 = `<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20170525/20170525110448_46755.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">职称：肛肠科主治医师</p>
	<p style="text-indent: 2em">擅长：内痔、直肠粘膜内脱垂、直肠息肉等肛肠疾病。</p>
	<p style="text-indent: 2em">就职医院：连云港国泰医院肛肠科</p>
	<p style="text-indent: 2em">王宗好，从事肛肠临床工作20余年，曾先后在华中科技大学附属同济医院、中国中医药大学附属广安门医院肛肠科进修，临床经验丰富。在肛肠外科开展疑难杂症手术数千例，深受患者信任和好评，积极参与多项直肠外科前沿治疗技术的论证工作，发表各种学术论文十多篇。</p>
	<p style="text-indent: 2em">精通熟练：</p>	
	<p style="text-indent: 2em">运用HCPT肛肠治疗仪、PPH术、COOK痔疮枪、DNR低温等离子术等现代先进的微痛微创技术治疗内痔、直肠粘膜内脱垂、直肠息肉等肛肠疾病。</p>	
`;
    var gongchang3 = `	<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20170525/20170525105216_64594.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">杨洪栋主任—国内知名肛肠专家</p>
	<p style="text-indent: 2em">中华医师学会肛肠专业委员会会员</p>
	<p style="text-indent: 2em">肛肠疾病研究中心专家组成员</p>
	<p style="text-indent: 2em">杨洪栋主任从事临床肛肠专业30余年，擅长利用微创技术治疗肛门瘙痒、肛周脓肿、内痔、外痔、混合痔、肛瘘、肛裂、直肠息肉、肛乳头瘤、直肠炎、结肠炎等肛肠常见疾病。特别是对多普勒痔疮动脉结扎术、 PPH吻合治痔技术、HCPT肛肠治疗技术、TST微创技术、COOK痔疮枪等先进微创手术有着极高的造诣。在肛肠疾病的诊疗上经验丰富，所独创的无痛微创治疗肛肠病疗法吸引了国内多家专科医院前来学习。</p>
	<p style="text-indent: 2em">曾在国家一级学术刊物发表论著5篇，曾在省级刊物上发表肛肠疾病论文10余篇，得到业内人士一致赞赏。获得“卫生系统先进工作者”、“优秀医务工作者”等称号，荣获省级先进医疗成果突出贡献奖，在连云港市医学界有很高的知名度，深受广大患者的好评。</p>	`;
    var gongchang4 = `
	<div style="display: flex;align-items:center;align-self:center;  flex-direction: column;padding: 0px;flex:1;">
		<img src="http://www.0518jk.com/uploads/image/20161020/20161020114116_49681.jpg" width="100px" height="120px">
	</div>	
	<p style="text-indent: 2em">副主任医师周淑珍</p>
	<p style="text-indent: 2em">周淑珍主任于1970年毕业于白求恩医科大学医疗系，副主任医师，中华医学会会员，中国胃肠病治疗研究委员会主任委员;</p>
	<p style="text-indent: 2em">周主任从事肝胆疾病、消化内科临床工作30余年，积累了丰富的临床经验;在国内外医学理论研究上发表论文10余篇，擅长肝胆疾病、胃肠疾病的研究和治疗。针对胆囊炎、胆结石、甲肝、乙肝、丙肝、戊肝、酒精肝、脂肪肝、肝硬化、肝腹水、慢性浅表性胃炎、萎缩性胃炎、糜烂性胃炎、幽门炎、胃及十二指肠溃疡、结肠炎、便秘等肝胆与胃肠疾病，擅长应用中西医结合，辨证治疗，深受广大患者欢迎。</p>
	<p style="text-indent: 2em">周主任率先在国内推行“乙肝病毒特异性主动免疫、打破免疫耐受疗法”，应用三联疗法治疗乙肝，疗效显著，并多次参加国内外肝病、胃肠学术研讨会。</p>
	<p style="text-indent: 2em">一九九五年录入中国名医大典。</p>	`; 


  


      var that = this;
      var replyArr = [];
      replyArr.push(zhuanjia1);
      replyArr.push(zhuanjia2);
      replyArr.push(zhuanjia3);
      replyArr.push(zhuanjia4);
      replyArr.push(zhuanjia5);
      replyArr.push(zhuanjia6);
      replyArr.push(zhuanjia7);
     

      var replyArr1 = [];
      replyArr1.push(fuke1);
      replyArr1.push(fuke2);
      replyArr1.push(fuke3);
      replyArr1.push(fuke4);
      replyArr1.push(fuke5);
      replyArr1.push(fuke6);
      replyArr1.push(fuke7);

      var replyArr2 = [];
      replyArr2.push(gongchang1);
      replyArr2.push(gongchang2);
      replyArr2.push(gongchang3);
      replyArr2.push(gongchang4);

   

    var temp ;
    if (this.data.dataSource.type == '0'){
      temp = replyArr;
    } else if (this.data.dataSource.type == '1'){
      temp = replyArr1;
    }else{
      temp = replyArr2;
    }
   
    WxParse.wxParse('article', 'html', temp[this.data.dataSource.id], that, 5);
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