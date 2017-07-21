// detial.js
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    status:0,//0 男科  1 妇科
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = JSON.parse(options.data);
    
    this.setData({
      id: obj.id,
      status:obj.status,
    })


    var home1 = `<h3 style="text-align: center; color:rgb(0,108,172)">阳痿最快的治疗方法是什么 对症治疗是关键</h3>
	<p>对于阳痿这项疾病，很多的男性都是对此咬牙切齿的，同时在患有这项疾病的时候他们最想要的就是及时的治疗，而且还是要以最快的速度解决。那么治疗阳痿最快的方法是什么？</p>
	<img src="http://www.haxfyy.com/uploads/image/20170602/20170602104403_70509.jpg" >


	<p style="color:red">阳痿怎么治疗快，实事求是是关键</p>
	<p>淮安幸福医院对男性想要询问的阳痿怎么治疗会比较快，给出了这样的答案：不同的男性患有阳痿的病因不同，所采取的的治疗方式也会不同。如果患者找到自己的患病原因就可以立即的对症治疗，且在治疗期间男性没有什么出格的情况出现，那么这项疾病在短短的一个月的时间内就可以完全的恢复了。</p>


	<p style="color:red">哪些原因会导致男性患有阳痿呢？</p>
	<p><strong>1、男科疾病：</strong>其实有很多功能障碍的患者是由于其他的一些男科疾病而导致阳痿的，如前列腺炎、增生、附睾炎等。</p>
	<p><strong>点评：</strong>如果要得到好的治疗效果，必须把这些疾病同步进行治疗，只有这样才能真正的得到恢复。</p>
	<p><strong>2、不良情绪：</strong>长期的不良情绪也是导致阳痿的一个最常见因素，长期的抑郁、不安、被嫌弃、找不到工作，都会导致男性出现阳痿的。</p>
	<p><strong>点评：</strong>针对这种情况首先要进行心理疏导治疗，主要是以心理调整为主。此外，患者对性要有正确的认识，克服不必要的内疚感和失败预感。</p>
	<p>男性要是想要快速的治疗阳痿，那么就需要对症治疗，这样才能直击病灶，最后再来一剂猛药，就能彻底的治愈疾病了。</p>


	<p style="color:red">最后一击——六位一体分型疗法</p>
	<p>精确鉴别男性性功能障碍的心理性、器质性、功能性等致病原因，制定个性化、疗程短、见效快的治疗方案，该康复疗法是目前治疗男性性功能障碍的高效安全疗法。</p>


	<p style="color:red">想要快速治疗阳痿，还需要注意一下事项：</p>

	<p><strong>1、不可胡乱用药</strong></p>
	<p>患者切不可在没有询问医生的情况下自行服用壮阳补肾的药物，以免使用不当，产生不良的后果。</p>
	<p><strong>2、暂停性生活</strong></p>
	<p>阳痿病情尚未康复的患者在进行性生活时需注意节制，治疗过程中可考虑夫妻分房而居，暂时避免性生活。</p>
	<p><strong>3、养成良好的生活习惯</strong></p>
	<p>患者治疗过程中应养成良好的生活习惯，平时适当的进行体育锻炼，但注意不应过度疲劳，以免导致疲劳性阳痿的发生，饮食方面应适当食用狗肉、羊肉等壮阳食物，不要过度食用脂肪含量过高的食品。</p>


	
	<p><strong style="color:red">温馨提示：</strong>想要快速治疗阳痿其实是一件很简单的事情，知道找对正确的治疗方式，治疗时注意的事项要注意就可以了。然而把握最佳的治疗时机也很关键，所以当发现自己出现阳痿的迹象时，应及早到医院进行检查与治疗，争取早日治愈疾病，恢复雄性风采。</p>
` ;

    var home2 = `
	<h3 style="text-align: center; color:rgb(0,108,172)">包茎必须要做手术吗 他没有及时治疗竟然这样了 对症治疗是关键</h3>
	<p>包茎必须要做手术吗？这是最近一个网友向我咨询的一个问题，其实问这个问题的男性还是有很多的，在这里我统一回复一下，这项疾病是必须要立即的治疗的，不能拖。不然造成的后果不是你能够承担的。</p>
	<img src="http://www.haxfyy.com/uploads/image/20170525/20170525101749_61980.jpeg" >


	<p style="color:red">【患者的悲惨经历】</p>
	<p>李先生也是以为包茎的患者，但是他的病情不是很重，对他的性生活也并没有造成什么影响。所以他就没有去治疗这项疾病。毕竟省下来的钱，可以让他给小三买很多东西和开房了。是的，李先生在有对象的情况下，还包养了一个小三。</p>
	<p>可能是恶人自有天收吧，这位李先生在一次与小三开房的情况下出现了意外，可能是当时两人玩的比较嗨，李先生在患有包皮的情况下，一不小心将包皮上翻，又没有及时的复位，然后出现了包皮嵌顿的情况，当时整个龟头立马都出现了紫红色。</p>
	<p>而那时候的李先生的阴茎还处于勃起的状态，把他疼的都说不出话来了，而那个小三被吓得不知所措，后来手忙脚乱的才找出手机打了120，叫来救护车，给及时的送到医院去了。后来因为送的及时，又经过医生4个多小时的抢救，李先生的龟头才没有废掉。</p>


	<p><strong style="color:red">【紧急处理方法】</strong><strong>淮安幸福医院专家提醒：</strong>男性在阴影勃起的状态下出现包皮嵌顿的时候可以通过冰敷这一紧急处理使男性的阴茎迅速的疲软下去，不会再有剧烈的疼痛感，还能增加龟头的抢救事假。一般男性出现包皮嵌顿不及时的送到医院抢救可是会造成阴茎头彻底坏死的，从此不再是完整的男性。</p>
	<p><strong  style="color:red">【健康小贴士】出现包皮嵌顿后要这样处理</strong></p>
	<p><strong>1、发生嵌顿包茎后，</strong>患者可先试着自行复位。先用一手紧握阴茎头冠状沟包皮水肿处一至二分钟，使水肿逐渐消退。然后用左手拇指及食指捏住阴茎头同时向外拉，再用右手将冠状沟的包皮环向后拉，使包皮皱折部变平，这时放开左手，右手用力将包皮狭窄部向龟头部推移，龟头就会缩入包皮内。</p>
	<p><strong>2、如自行复位不成功，</strong>应立刻去医院就诊，请医生及时的做手术。</p>
	<p>所以我建议包茎患者还是及早的去治疗这项疾病，毕竟他的危害是在是太大了，还不仅是这样的，而只需要做一项手术，这些危害就都不会存在了。</p>
	<p style="color:red">“韩式微创包皮美容整形术”</p>
	<p>由资深男科医生亲自操作，在无菌手术室完成，杜绝感染。手术15分钟左右即可完成，术后无需拆线，患者1周即可恢复，一个月后就能性生活，无痛苦更安全，术后外形自然美观，帮助患者延长性生活时间，改善包皮过长引起的早泄问题，杜绝包皮嵌顿，龟头坏死的情况出现。</p>



	<p style="color:red">包茎手术前有哪些需要准备的?</p>
	

	<p><strong>1、消除紧张的心情：</strong>在很多人眼里，要进行手术的都是一些大的疾病，所以他们就会以为包皮过长是一件非常严重的疾病，使得他们的在手术前就开始产生害怕的心理。这对于手术的进行很不利，患者要保持平稳的心态，这只是一个小手术而已，没有什么大不了的。</p>
	<p><strong>2、清洗龟头：</strong>患者在做手术之前一定要认真的将自己的龟头给清洗干净，不然医生在给你做手术的时候突然发现上面有什么异物的话，说不定会造成什么障碍，或是影响医生的情绪，那就不好了。一般这个医生都会在手术前就提前告诉患者，让患者准备好的。</p>
	<p><strong>3、有炎症要先治疗炎症：</strong>很多的男性朋友在患有包皮过长的同时还会患有龟头炎之类的炎症，这时候就需要注意了，要将自身的炎症治疗好之后才能进行包皮过长手术，不然的话疾病不容易好。</p>


	
	<p><strong style="color:red">温馨提示：</strong><strong>男性患有包茎之后一定要及时的到医院去治疗，不然出现以上李先生的事故，体会到那么痛的领悟，你会哭的。</strong></p>`;
    var home3 = `<h3 style="text-align: center; color:rgb(0,108,172)">龟头上有红色的痘痘是怎么回事呢？给个理由好吧</h3>
	<p>随着生活质量的提高，越来越多的人对于自己的身体情况也关心了起来。这也是代表着健康已经成为了21世纪大众所关心的话题。但是，由于生活中还是有很多的意外。因此在面对问题的时候，我们需要通过有效的方式进行解决。</p>
	<img src="http://www.haxfyy.com/uploads/image/20170512/20170512152648_91106.jpg" >


	<p style="color:red">曲先生的龟头炎遭遇</p>
	<p>家住淮安市淮阴区的曲先生，今年32岁，是一家私企的人事经理，平日的工作比较清闲，幸福指数满满。很是悠然自得。但是，近日曲先生有些不高兴，自己的龟头上出现了红色的痘痘，一开始以为是湿疹，就只是涂点药膏。但是，明显没什么效果。而且这几天还痒的厉害。于是，他便偷偷的在网上进行咨询。有一位医生告诉他，这可能是患上了龟头炎。建议他到附近的医院进行全方位的检查。这样，曲先生来到淮安幸福医院。</p>
	<p>医院医生经过系统的诊断，告诉曲先生，他确实患上了龟头炎。曲先生很困惑，自己平常还是很有心的注意身体的，怎么会患上龟头炎呢?</p>
	


	<p><strong style="color:red">医生表示，一般男性患上包皮龟头炎的原因有以下几种：</strong></p>



	<p><strong>1.不注意清洁卫生。</strong>现代生活中，有很多的男性因为自己的原因，因此在生活习惯方面，比较邋遢，衣物经常不换洗，而且还有乱堆乱放的毛病，细菌滋生因而引发了龟头炎。</p>
	<p><strong>2.性生活传染。</strong>有些男人为了排泄工作的压力有着不洁性生活的习惯，因而会和陌生的女性进行性生活，从而引发了龟头炎。或者自己的伴侣有妇科炎症从而在性生活的时候传染给了男性。</p>
	<p><strong>3.外伤感染。</strong>我们都知道，男性生殖器较为脆弱，常常容易受到拉伤或者外伤，如果此时有感染了病菌，就会引发龟头炎。</p>
	<p><strong>4.过度的清洗消毒。</strong>有些男性有着严重的洁癖，表现在生活中也是一样，经常会使用一些带刺激性的消毒肥皂或者洗护用品，使龟头受到严重刺激，免疫下降，容易引发龟头炎。</p>
	

	<p>原来曲先生有着严重的洁癖，平常洗澡的时候，都会用消毒肥皂仔细的清洁。而且有时一天还洗两次。医生根据曲先生的情况，为他推荐了医院的<strong style="color:red">新一代CRS光导基因强化联合技术</strong>></p>


	

	<p><strong>根据介绍，</strong>采用基因芯片细菌病毒检测系统全面排查，精确检测各类病原体，并利用可控性强效微波的大面积、大范围、大深度的辐射特点，全面高效的杀灭各种病菌、病毒和致病微生物，通透扩张血管，促进血液循环，增强细胞吞噬功能和加速炎性排泄物的排出，增强人体免疫力，从而有效清除病毒。</p>
	<p>经过医生一个月的贴心治疗，曲先生已经基本康复了。</p>


	
	<p><strong style="color:red">小提示：</strong><strong>淮安幸福医院医生告诉大家，类似曲先生这样的情况，其实在生活中还是比较常见，没必要过度的清洁自己身体，我们身体自带的免疫系统已经足够强大，只有注意清洁，是不会出现什么问题的。</strong></p>`;
    var home4 = `<h3 style="text-align: center; color:rgb(0,108,172)">蜂王浆可以治疗男性前列腺炎吗？</h3>
	<p>大家都知道前列腺炎是中年男性很容易得的一种常见的疾病。对于男性的危害也是很多。那么很多患者都是想早日的摆脱这种疾病的折磨。那么由于男性前列腺炎是一种很难治愈的疾病。。</p>
	<p>可能需要漫长的治疗时间。那么对于一些男性可能是因为没有得到正确的治疗方法。而会想着用一些其他的方法治疗。那么男性前列腺炎可以用蜂王浆治疗吗?</p>
	<img src="http://www.haxfyy.com/uploads/image/20170619/20170619133819_63929.jpg" >

	<p><strong style="color:red">医生表示： </strong>蜂王浆有一定保健功效，但不能代替药物治疗.治疗急慢性前列腺炎至需要到正规 专业的医院做检查。查明病因针对治疗采用效果。因为前列腺炎的病因多种多样，不同的前列腺炎类型其病因不一。细菌性前列腺炎的发病中感染因素占主导地位，在非细菌性前列腺和前列腺痛的发病中。</p>
	<p>感染因素可能是一诱发或初始作用因素，而非感染性因素可能占主导作用。那么治疗也是针对性而定治疗的。像这个蜂王浆的食疗也是有帮助，在治疗的同时也可以用食疗来辅助治疗。另外注意平时生活习惯也很关键,避免久坐适当的多活动，经常的用热水坐很有帮助，避免辛辣刺激性食物，禁烟酒，可以经常的锻炼提肛运动。</p>


	<p><strong style="color:red">蜂王浆的用处： </strong>蜂王浆也叫蜂皇浆.含有丰富蛋白质、维生素、近20种氨基酸和生物激素.功效：镇静安眠、调节血压、护肝防癌、健脑益智、延年益寿、美容护肤、滋补神经、加强造血功能。</p>
	<p>并将其广泛的应用于以下疾病：老年综合症、营养不良、食欲不振、糖尿病、血管及血液系统疾病、神经系统疾病、调节肝脏功能、抑制肿瘤、风湿性关节炎、前列腺炎.所以能够提高机体的免疫力，蜂王浆中的10-HDA，即王浆酸有抗菌、消炎、止痛的作用，可抑制大肠杆菌、化脓球菌、表皮癣菌、结核杆菌等十余种细菌生长.故吃蜂王浆对前列腺炎一定的好处.</p>



	<p style="color:red">淮安幸福医院推荐：推荐技术：浦兰斯Prostate 前列腺治疗系统。</p>
	<p>根据介绍，浦兰斯Prostate 前列腺治疗仪能释放中频毫米波，通过清理，长期淤积腺体并堵塞微循环的有毒物质，修复受损的前列腺细胞，消除尿频，尿急等症状。然后补充激活前列腺体内细胞生物活性，恢复前列腺整体对病毒，细菌，有害微生物的免疫功能，防止前列腺体再次遭到侵害。</p>

	<p style="color:red">前列腺炎在治疗的时候要注意以下的事项，这样才能好得更快：</p>
	<p><strong>1、坚持男女同治，</strong>这是最重要的一点，细菌性前列腺炎具有传染性，通过性生活很容易引起夫妻交叉感染，只有坚持男女同治，才能避免交叉感染。</p>
	<p><strong>2、科学规范治疗，</strong>前列腺疾病治疗不当易导致久治不愈、反复发作，所以应到正规专业医院进行规范治疗。</p>
	<p><strong>3、治疗无特效药，</strong>治疗前列腺疾病没有什么特效药，应针对个体情况选择不同的治疗方法。</p>
	<p><strong>4、切莫贻误时机，</strong>前列腺疾病症状表现多样化，症状不明显的往往容易贻误治疗时机，从而给以后治疗带来难度?</p>




	<p style="color:red">在生活中有很多食疗方法可以辅助治疗前列腺炎，在治疗的同时也可以食用这些食物：</p>
	<p><strong>1.桔子:</strong>桔子中含有红桔素、川皮苷和维生素。研究发现含有大量维生素C的饮食会使患前列腺癌的几率明显降低。</p>
	<p><strong>2.椰菜:</strong>曾有一项1200位男性参加的研究发现，坚持吃椰菜的男性患前列腺癌的几率要少41%。</p>
	<p><strong>3.番茄、胡萝卜:</strong>番茄和胡萝卜里含有大量β胡萝卜素，它可帮助身体吸收番茄里的番茄红素，将患前列腺癌的几率降低。</p>
	<p><strong>4.鸡肉:</strong>一块鸡胸肉就足以提供人体一日所需的硒。而资料统计显示，每日补充足量硒的男性死于前列腺癌的可能性要低很多。?</p>

	<p><strong>5.全麦玉米饼:</strong>全麦玉米饼含有硒和大量纤维。加拿大研究人员发现含有充分可溶性纤维素的食物可降低患前列腺癌的风险。</p>
	<p><strong>6.麦芽菌:</strong>麦芽菌含有大量的维生素E和锌。研究发现，如果补充维生素E和每日摄入锌，患前列腺癌的几率会分别降低20%和45%。%。</p>
	<p><strong>7.建议食疗，</strong>多吃黑色素含量高的食物，比如黑豆、黑米、黑芝麻、核桃、黑木耳等。动物肉类、鸡蛋、骨髓、黑芝麻、樱桃、桑椹、山药等也有不同程度的补肾功效。</p>
	<p><strong>8.苹果汁，</strong>国外的一项临床医学研究发现，苹果汁对锌缺乏症具有惊人疗效，这项研究被称为"苹果疗法"。与常用的含锌药物疗法相比，苹果汁比含锌高的药物更具有疗效，且具有安全、易消化吸收并易为患者接受的特点。另外，"苹果疗法"的疗效与苹果汁浓度成正比，越浓疗效越佳。故慢性前列腺炎的患者经常食用苹果是非常有益。?</p>

	
	

	
	<p><strong style="color:red">温馨提示：</strong><strong>上面的内容介绍的是男性患有前列腺炎用蜂王浆可以治疗吗?那么看过了内容相信大家应该都了解了。那么蜂王浆是对治疗前列腺炎是由好处的。但是不能作为药物来治疗前列腺炎。只能作为辅助治疗饿效果。那么平时是可以食用的。治疗还是需要到正规专业饿医院治疗。才能治愈。</strong></p>`;
    var home5 = `<h3 style="text-align: center; color:rgb(0,108,172)">男人为什么会患上无精症？真是一失足成千古恨</h3>
	<p>男性，自古以来都是阳刚、坚强、强壮的代名词。但是，因为一些原因，有些男性被人看不起、甚至歧视。无精症就是其中的原因之一。患上无精症代表不具备生育的能力。对于人类来说更是失去了繁衍的资格。但是，为什么男人会患上无精症呢?</p>

	<img src="http://www.haxfyy.com/uploads/image/20170510/20170510165945_54766.jpg" >

	<p><strong style="color:red">淮安幸福医院医生表示，其实男性患上无精症的原因基本和生活习惯息息相关：</strong></p>


	<p><strong>1.长期挤压生殖器。</strong>有些男人有坐姿不正当的习惯，使得会阴部的睾丸、前列腺受到挤压，引发缺血、水肿、发炎，从而引发精子的生成及生存。长期骑自行车也会哦。</p>
	<p><strong>2.烟酒不忌。</strong>长期的尼古丁吸收，会使男性的精子数量比正常的男性少甚至没有。而酒精会影响精子的生存，使其畸形，无法正常存活。</p>
	<p><strong>3.长期接触电子产品。</strong>现代的家用电器和手持产品，都会长期的向周围发射电磁波和荧光频射线，使男性精子的生存受到威胁，引发无精症。</p>
	<p><strong>4.性生活混乱。</strong>有些男性为了缓解工作和生活压力，会选择通过性生活的方式，这些人往往拥有多个性伴侣，甚至会和不明身份的陌生人进行性生活，这样做的危害就是很容易引发各种生殖感染疾病甚至是性病。从而影响到精子的生存，使精子存活率降低。</p>
	<p><strong>5.长期接触高温。</strong>男性精子的生存是需要和谐的环境。比如温度，有些男性可能会从事一些温度较高的工作，或者有经常洗热水澡、桑拿的习惯。这些都会影响到精子。</p>
	<p><strong>6.饮食不正常。</strong>我们都知道，男性精子的生成所主要的需求元素的锌。然而现代有些男性却有着非常不健康的饮食习惯，比如偏食、挑食、节食。就会造成营养的长期缺失。使精子无法正常生成。</p>




	<p style="color:red">对此，淮安幸福医院医生表示，治疗男性无精症推荐采用精子洗涤优化技术</p>
	<p>精子洗涤优化技术主要是采用洗涤液融合离心的方式，根据精子精液异常病症不同进行对症治疗。首先，在精液刚射出时尽快用洗涤液稀释，去除尽可能多的不必 要的甚至是有害精子的成分，包括精浆、死的精子、炎症细胞、抗精子抗体和微生物，如细菌、支原体等。接着将稀释的精液以1000-2000转/分离心10 分钟，使精子沉淀于试管底部，移去上清液，剩余0.5-1ml;后加入少许加精子洗涤液将精子浓度调至10×109/L。即可作授精之用。</p>

	<p style="color:red">另外，医生提示，治疗男性无精症的过程中，患者也要注意以下细节：</p>
	<p><strong>1.心情愉快。</strong>无精症不仅仅是对男性生理上想折磨，对于心理上也是一种摧残。因此，患者在治疗的过程中要注意调节自己的心情心态，提高自信。</p>
	<p><strong>2.饮食不吃心理辛辣刺激的食物，</strong>避免引发尿液刺激，造成病情加重。</p>
	<p><strong>3.保持休息。</strong>患者不宜劳累，不宜做剧烈的运动，以免引起拉伤，造成病情复杂。</p>`;
 


    var that = this;
    var replyArr = [];
    replyArr.push(home1);
    replyArr.push(home2);
    replyArr.push(home3);
    replyArr.push(home4);
    replyArr.push(home5);


    var fuke1 =`<h3 style="text-align: center;">什么是清宫手术，会疼吗？</h3>
	<p>对于清宫手术可能女性朋友们都不太了解，有些女性也只是听说过。但是具体是怎么一回事还是不知道的，清宫手术一般是用于药流没有流干净以后进行的二次手术比较多。那么下面就给大家介绍一下清宫手术是什么，会不会疼。</p>
	<img src="http://fuke.haxfyy.com/uploads/image/20161229/20161229162159_25901.jpg"  >
	<p style="color:red">什么是清宫手术：</p>
	<p>清宫手术即刮子宫，清宫手术就是传统的人工流产。清宫术不同于人流术，用于清除人流术后流产不全停留于宫腔内的组织，帮助子宫的修复，减少出血或感染的可能。可以选择无痛清宫术，但是清宫手术与你所就诊医院的医疗水平有关系。只要提到人工流产，人们自然就会想到刮子宫，因此，刮宫几乎成了人工流产的代名词了。</p>
	<p>事实也是如此，刮宫是早期人工流产最常采用的方法。刮宫虽然不用开刀，但也是一种妇科手术，一定要严密消毒的情况下进行。手术分为二个步骤进行，第一步先把子宫颈扩张到足够大小，第二步是用刮匙伸到子宫腔内，把胚胎刮下 来。怀孕的时间愈久，胎儿也就愈大，这时就需要把子宫颈扩张到最大限度才能刮出胎儿，所以刮子宫也就更加困难了;同时怀孕时间愈长，子宫也会随着变得愈来愈软，手术时穿破子宫的机会自然也会增多。因此，一般只有在怀孕三个月以内才能用刮宫的方法把胎儿刮出来，超过三个月就不宜采用刮宫手术了。那么手术在吗真的情况下是不会感觉疼的，但是术后会有下腹绞痛的感觉。还有一些人会选择不在麻醉的情况下进行手术的那么手术的过程当然是会感觉到疼痛的，术后也一样会疼痛。</p>
	<p style="color:red">清宫的主要目的有哪些：</p>
	<p>诊断性活组织检查;/治疗不规则子宫出血;/清除胚胎组织(用于人工流产术或治疗不完全性自然流产);刮宫术适用于：月经失调，需了解子宫内膜变化及及其对性激素的反应者;/月经出血过多;/性交后阴道出血;/不孕症，需了解有无排卵者;/子宫内膜息肉;/子宫纤维瘤;/子宫癌早期诊断;/子宫颈癌早期诊断;/子宫内膜增生;/宫内节育器嵌顿;/人工流产;/不完全性自然流产;</p>

	<p style="color:red">清宫手术过程：</p>
	<p>人工流产以后一些组织并没有完全的清除干净，仍旧附着于子宫内部。这个时候，就需要进行清宫手术。清宫相对是较为疼痛的，清宫手术到底是怎么做的呢?</p>

	<p>清宫手术就是用一些长柄刮匙伸入子宫内将这些残留物刮出，清宫手术之前需要先做B超的。清宫手术在之前是较为疼痛的。不过随着科学技术发展，现在有无痛清宫手术了，无痛清宫手术室使用静脉麻醉。做清宫手术需要到正规、专业的医院进行。因为无痛清宫手术对经验是很有讲究的，用力太猛会将子宫刮穿，所以请一定要去正规医院做。用阴道窥器暴露宫颈;消毒宫颈;麻痹宫颈管(非常规性);用一支棒状宫颈扩张器扩张宫颈;用一支末端有刮匙的细长金属棒伸入子宫腔;刮出子宫内膜并送病理检查。</p>
	<p>刮宫术危险性很低，可达止血、帮助诊断包括感染、癌症、不育及其它疾病等目的。正常情况下，一旦病人感觉良好(通常在同一天)，即可恢复正常活动。术后可有阴道出血、下腹部绞痛及腰痛持续数天，可服止痛药止痛，数周内不提倡使用内置式月经棉条，数天内不可以性生活。</p>


	<p style="color:red">清宫手术的危害：</p>
	<p><strong>1、感染：</strong>清宫手术前准备充分，严格无菌操作，术后预防性抗生素治疗，可减少感染的发生。不规范操作和重复使用的器械很容易导致女性在二次清宫过程中造成感染。</p>
	<p><strong>2、宫颈撕裂：</strong>常见于未育的女性，一般发生在宫颈两侧。对于此类病人，操作时动作要轻柔。小的撕裂创口可行碘仿纱堵塞止血;对于较大的裂口，应在直视下行缝合止血。</p>
	<p><strong>3、子宫穿孔：</strong>妊娠和肿瘤(如葡萄胎)均可使子宫壁变得脆弱，清宫术时易造成子宫穿孔。对出血较少的子宫穿孔，可行抗炎、止血等保守治疗;若穿孔较大，并发大出血，则需剖腹探查止血，行穿孔创面的修补，或行子宫切除。</p>
	<p><strong>4、子宫腔粘连：</strong>如清宫时搔刮过度，会出现宫腔粘连，其后果为不孕、流产、闭经、痛经等。可在宫腔镜下分离粘连。</p>

	<p style="color:red">清宫可能出现的并发症：</p>
	<p>1术后感染，最常见。2术后流血3子宫穿孔，操作不当造成。4人流综合症，出现恶心、呕吐、头晕、胸闷、气喘、面色苍白、大汗淋漓、四肢厥冷、血压下降，心律不齐等，严重者还可能出现昏觉、抽搐、休克等一系列症状。5不孕。6脂肪栓塞，很少发生。</p>


	<p style="color:red">清宫后的消炎方法：</p>
	<p>人流后可以吃的消炎的药物很多，如果没有药物过敏史，可以考虑服用头孢类抗生素加上甲硝唑或是替硝唑，具体用法参考说明书或者遵医嘱。另外人流后吃的消炎药医生一般都会在处方签上写明，医生会为人流受术者开的术后消炎药一般是甲硝唑、司帕沙星、头孢类等药物。甲硝唑效果较好，副作用也小，比较适合生殖泌尿系统消炎。</p>
	<p>如果患者人流后吃消炎药效果不好的话，还可以打消炎针，以繁殖生殖器官发生感染。 除了以上的消炎方法外，还可以再喝些八珍益母草膏对身体恢复更好，益母草冲剂也可以，主要是帮助淤血和恶露排出的。</p>

	<p><strong>温馨提示：</strong>以上是对什么是清宫手术和清宫手术会不会疼的介绍。相信女性朋友们都应该了解了，那么如果还有不明白的可以点击在线专家医师咨询。</p>`  ;

    var fuke2 = `<h3 style="text-align: center;">习惯性流产如何预防最有效？你不妨试试这么做</h3>
	<p>淮安幸福医院的妇科专家介绍，导致女性习惯性流产的原因，大多为孕妇黄体功能不全、甲状腺功能低下、先天性子宫畸形、子宫发育异常、宫腔粘连、子宫肌瘤、染色体异常、自身免疫等因素的影响下造成的。那么，习惯性流产要如何预防才最有效呢?</p>
	<img src="http://fuke.haxfyy.com/uploads/image/20170527/20170527164204_81834.jpg" >
	<p>如果你患了习惯性流产的，可在前次流产后，下次妊娠前，与丈夫一起到正规专业妇科医院进行详细的检查，找出病因，然后针对病因进行治疗。如果是因黄体功能不全，.甲状腺功能减退等疾病所引起的都可用药物。如果是因子宫畸形、子宫肌瘤、宫腔钻连等等因素引起的习惯性流产的，可实行手术的治疗方法进行。</p>


	<p style="color:red">淮安幸福医院采用：“三镜一丝”。</p>
	<p>“三镜一丝”是宫腔镜、腹腔镜、输卵管镜和COOK导丝技术的统称。三镜联合运用的大好处是，能对输卵管阻塞严重的不孕患者做到全程探查，有效清理各种病理物，并且协助导丝进行介入疏通。</p>
	<p>与传统的宫腔腹腔镜联合探查术相比，“三镜一丝”对难治疾病的治疗，针对性更强。因为输卵管镜是唯一能够进入输卵管、子宫内部进行清晰探查的纤维镜设备，对内部的微观病变可以反映得更为真实准确。此外，输卵管镜的应用还具有创伤小、成功率高、并发症少等诸多优势。
</p>
<p>导丝在可视状态下准确进入阻塞部位、疗效可靠。治疗无放射性，无辐射，避免了对“准妈妈”的伤害，完全避免了传统治疗中的反复通水、通气带来的痛苦和疗效不确定，不需开刀，住院3-4天，治疗时间仅需30分种。</p>
	<p style="color:red">那么， 防止发生习惯性流产，女性朋友应该如何做才好呢?</p>

	<h4>1、定期做产前检查：</h4>
	<p>女性朋友在妊娠中期，就应该开始定期进行产前的各项检查，以利于医生能够及时的发现和处理异常情况的发生，并可以指导女性在孕期间做些保健。</p>

	<h4>2、保持心情舒畅：</h4>
	<p>专家认为，自然流产发生的原因，往往是因为孕妇的中枢神经兴奋亢进所致。而试验也证明了这一点，神经系统的机能状态对流产起着决定性的作用。因此，女性在妊娠期间的精神一定要舒畅，避免各种刺激，采用多种方法消除紧张、烦闷、恐惧心理，以调和情志。</p>

	<h4>3、要注意个人卫生：</h4>
	<p>孕妇平日里一定要多换衣，勤洗澡，但不宜盆浴、游泳等行为。特别是要注意阴部的足够清洁，防止病菌的感染。衣着则应宽大，腰带却不宜束紧，平时应穿平底鞋。</p>


	<h4>4、合理饮食：</h4>
	<p>选食富含各种维生素及微量元素的食品，如各种蔬菜、水果、豆类、蛋类、肉类等。胃肠虚寒者，慎服性味寒凉食品，如绿豆、白木耳、莲子等;体质阴虚火旺者慎服雄鸡、牛肉、狗肉、鲤鱼等易上火之品。</p>

	<h4>5、生活起居要有规律：</h4>
	<p>如早晨多吸新鲜空气，并参加适当的活动，每日 睡够八小时，条件允许可午睡，既不可太逸亦不可太劳。逸则气滞，导致难产，劳则气衰，导致伤胎流产。养成大便定时的习惯， 大便通畅，但应避免用泻药。;体质阴虚火旺者慎服雄鸡、牛肉、狗肉、鲤鱼等易上火之品。</p>

	<h4>6、慎房事：</h4>
	<p>专家表示，习惯性流产的女性，在妊娠的三个月以内、七个月以后的，都要严禁房事，避免发生意外流产、或者早产的情况。;体质阴虚火旺者慎服雄鸡、牛肉、狗肉、鲤鱼等易上火之品。</p>




	

	<p><strong>温馨提示：</strong>习惯性流产不仅会给家庭带来巨大的损失，同时还会影响夫妻之间的感情，是亲人间产生隔阂，甚至是危害患者本身的性命。因此，选择治疗并且提前预防，都是有效解决习惯性流产的最好方式</p>`;
    var fuke3 =`<h3 style="text-align: center;">淮安医院治疗子宫肌瘤多少钱呢？</h3>
	<p>淮安医院治疗子宫肌瘤多少钱呢?子宫肌瘤在生活中很是常见，多发于中年女性，其实一开始女性患上此病时没有多大的察觉，等到严重的时候才感觉到，这时已经对女性的身体有了一定的伤害了，此时就要及时去医院进行检查对症治疗了，说到治疗，那么必定会考虑价钱问题，下面就来看下，淮安医院治疗子宫肌瘤多少钱呢?下面听听淮安幸福医院专家怎么说吧!!?</p>
	<img src="http://fuke.haxfyy.com/uploads/image/20170606/20170606143927_43542.jpg" >

	<p>淮安医院治疗子宫肌瘤多少钱呢?</p>
	<p>淮安幸福医院专家表示：女性进行子宫肌瘤治疗，治疗的方式不一样，那么产生的费用也是不一样的，如果是采取保守治疗的女性，随时回医院定期检查身体就好，一般花费没有手术治疗贵。但如果病情稍微加重到不得不选择手术摘取肌瘤的程度，那么所产生的费用就会跟保守治疗不一样。</p>



	<p>治疗子宫肌瘤的费用由术前检查费，手术费，术后恢复费用这三个部分组成。正规医院就是按照这样的收费结构执行的 收费标准，一起看下吧!!</p>
	<p>1、前期的检查确诊费：检查的费用是必须的，因为治疗前期对患者病情情况以及身体情况做详细检查是非常关键的，及时了解患者病情程度也有利于之后做针对性治疗方案，而且通过检查也可以及时了解到肌瘤的大小和生长部位。</p>
<p>2、具体治疗费用：治疗子宫肌瘤疾病的方式有多种，可能在每种收费上都会有差别，不过建议患者们在选择治疗方式的时候还是根据具体的病情来选择合适的诊疗方案。</p>
<p>3、术后的护理费用：这一方面主要看患者后期的恢复情况，患者们需要注意的是做好后期的护理，使得疾病能得到更有效的治疗，让身体能及时恢复，避免出现复发的可能。</p>
	<p style="color:red">淮安幸福医院采用的德国WOLF宫腹腔镜联合超微创技术，该疗法具有创伤小、恢复快、简单快捷、手术效果好、不影响生育并发症少等一系列的优势，深受女性患者的青睐。</p>

	<p>以上这些就是治疗子宫肌瘤的费用了，此病治疗后还要多加护理，这样疾病才能更快的好起来，那么女性子宫肌瘤手术后应该如何护理呢?</p>
	<h4>子宫肌瘤的护理：</h4>
	<p>1、首先患者在手术以后，要多注意阴部的清洁卫生，要在大便以后进行清洗，和每天进行阴部清洗。</p>
	<p>2、适当吃些蔬菜水果，蔬果中的维生素及矿物质有助伤口愈合，还能增加身体抵抗力。</p>
	<p>3、养成良好的生活饮食习惯，保持良好的心态，作息规律，避免熬夜。</p>
	<p>4、在进行手术以后，要注意定期的去医院进行复查，手术以后，要定期去医院进行复查。</p>
	<p><strong>温馨提示：</strong>以上就是“淮安医院治疗子宫肌瘤多少钱呢?”相关知识的介绍，小编告诉大家治疗子宫肌瘤最省钱的办法就是在治疗子宫肌瘤时一次性治愈才是最经济的，因此，患者朋友在进行治疗时一定要选择专业的医院和疗法，这样才能减少不必要的开支，同时还能保证其治疗的效果哦。</p>
`;

    var fuke4 = `<h3 style="text-align: center;">拯救婚姻的阴道紧缩术</h3>
	<p>王娜是一家私企的老板，作为一个敢打敢拼的女强人，王娜的确令人既佩服又羡慕，可是王娜却也有吐不出的苦水。自从开了公司，王娜再也没有与老公倾心交谈过，最近老公更是与一个妖娆的女人出双入对。争过吵过，老公也发誓要与那个狐狸精断绝往来，可是即便签下了保证合约，老公依旧与外面的野花你侬我侬，电话里，信息中处处是他们爱的痕迹，王娜觉得自己快要崩溃了。</p>
	<p>　每天为了公司的事情忙都忙不过来，还要为了家里出轨的男人费心费力，她想过离婚，可是望着刚刚上小学的孩子，那张天真无邪的脸，还不能领会大人之间的矛盾，她怎么狠得下心让孩子的人生从此蒙上阴影，她决定，与丈夫好好的谈一谈。</p>
	<p>丈夫赵伟也是通情达理的人，他也想结束这样的畸恋，但却身不由己，自从王娜开起了公司，成天忙得不见人影，自己在家想找个说话的人都没有，两个人偶尔为之的性爱也因为王娜产后的阴道松弛毫无感觉。这时又出现了年轻体贴的的“小三”。特别是“小三”带给他久违的紧握感，让他欲死欲仙。他说，其实他最爱的还是王娜，只是抵抗不了身体的诱惑。</p>
	<p>　后来王娜听从了朋友的劝告，作了阴道紧缩手术，夫妻俩人又过起了“性”福美满的生活。</p>
	<p>　淮安幸福医院妇科专家指出：</p>
	<p>淮安幸福医院的妇科专家介绍对解决阴道松弛最先进的方法是韩式阴道紧缩术。该技术根据患者的不同年龄、阴道松弛及会阴损伤的不同程度进行和使用私处细胞活力因子进行修补，突破了传统阴道紧缩术的技术缺陷，拥有增加阴道粘膜褶皱，增加房事时摩擦力、保护阴道分泌功能，增加房事情趣和保护阴道感受功能，增强房事时敏感度等优势。解除了患者心理上和生理上的痛苦，并提高了生活质量，恢复了女性的自信心。</p>
	<p>阴道紧缩，做紧致女人</p>
	<p>过去少有人问津的“阴道紧缩术”近2年成了“香饽饽”：有的医院平均每2天就要做一例这样的手术，有的时候甚至一天做2例。为提高夫妻生活质量，观念更新，越来越多的女性接受“紧缩”术。提高性生活质量,促进夫妻关系和谐!</p>`;
  
    var replyArr1 = [];
    replyArr1.push(fuke1);
    replyArr1.push(fuke2);
    replyArr1.push(fuke3);
    replyArr1.push(fuke4);




    WxParse.wxParse('article', 'html', this.data.status == 0 ? replyArr[this.data.id] : replyArr1[this.data.id], that, 5); 

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