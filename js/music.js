var path = 'https://cdn.jsdelivr.net/gh/ChanSure/BlogSource';
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   
    autoplay: false,  
	lrcType: 3,
    audio: [
	{
		name: 'チキチキバンバン',
		artist: 'QUEENDOM',
		url: 'https://cdn.jsdelivr.net/gh/xitie2000/picgo/チキチキバンバン.mp3',
		cover: 'http://p2.music.126.net/MsYyE1PMetW8GDrSbz21Cw==/109951167426141020.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/xitie2000/picgo/チキチキバンバン.lrc'
	},
	{
		name: '恋ひ恋ふ縁',
		artist: 'Famishin / KOTOKO',
		url: 'https://cdn.jsdelivr.net/gh/xitie2000/picgo/恋ひ恋ふ縁.mp3',
		cover: 'http://p1.music.126.net/UtBzZyeeHb84vRQXWoH48A==/19019352137357551.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/xitie2000/picgo/恋ひ恋ふ縁.lrc'
	},
	{
		name: 'とおりゃんせ～甘美風来 Instrument Version',
		artist: 'Angel Note / 青田新名',
		url: 'https://cdn.jsdelivr.net/gh/とおりゃんせ～甘美風来%20Instrument%20Version.mp3',
		cover: 'http://p1.music.126.net/UtBzZyeeHb84vRQXWoH48A==/19019352137357551.jpg?param=130y130',
	},
	{
		name: '花は幻想の果てに',
		artist: 'EastNewSound',
		url: 'http://music.163.com/song/media/outer/url?id=22785183.mp3',
		cover: 'http://p2.music.126.net/2emTosYHXNFq71RqFLObEg==/799344953417258.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E8%8A%B1%E3%81%AF%E5%B9%BB%E6%83%B3%E3%81%AE%E6%9E%9C%E3%81%A6%E3%81%AB.lrc'
	 },
	 {
		name: 'スタッカート・デイズ',
		artist: '井口裕香 / 阿澄佳奈',
		url: 'http://music.163.com/song/media/outer/url?id=26434532.mp3',
		cover: 'http://p1.music.126.net/bEZZDej9XPPaLmv8WDQsVQ==/2393636813727775.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AB%E3%83%BC%E3%83%88%E3%83%BB%E3%83%87%E3%82%A4%E3%82%BA.lrc'
	 },
	 {
		name: 'Happy Halloween',
		artist: '柊優花 / 鎖那',
		url: 'http://music.163.com/song/media/outer/url?id=29712183.mp3',
		cover: 'http://p1.music.126.net/hvvqvDlfc1ffazb-wbT7XQ==/3286440257121624.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/Happy%20Helloween.lrc'
	 },
	 {
		name: 'スカイクラッドの観测者 -Remix-',
		artist: 'いとうかなこ',
		url: 'http://music.163.com/song/media/outer/url?id=567114.mp3',
		cover: 'http://p1.music.126.net/D47p-yC8cE_Vygxbn7DXDA==/838927371993373.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%82%B9%E3%82%AB%E3%82%A4%E3%82%AF%E3%83%A9%E3%83%83%E3%83%89%E3%81%AE%E8%A6%B3%E6%B5%8B%E8%80%85.lrc'
	 },
	 {
		name: 'Hacking to the Gate',
		artist: 'いとうかなこ',
		url: 'http://music.163.com/song/media/outer/url?id=26584163.mp3',
		cover: 'http://p2.music.126.net/-VXSb2SetwRclgijQYN2ww==/4458519650641386.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/Hacking%20to%20the%20Gate.lrc'
	 },
	 {
		name: 'ロキ',
		artist: 'Afterglow',
		url: 'http://music.163.com/song/media/outer/url?id=1809147766.mp3',
		cover: 'http://p2.music.126.net/CMzAxG4UwTir8SyMYAhdGQ==/109951165604484643.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%83%AD%E3%82%AD.lrc'
	 },
	 {
		name: '永夜のパレード',
		artist: 'ケーキ姫☆優海 / JUMA',
		url: 'http://music.163.com/song/media/outer/url?id=692193.mp3',
		cover: 'http://p1.music.126.net/_0EPPAiKLQqddTZ5eKSqBw==/109951163136011717.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E6%B0%B8%E5%A4%9C%E3%81%AE%E3%83%91%E3%83%AC%E3%83%BC%E3%83%89.lrc'
	 },
	 {
		name: '恋音と雨空',
		artist: 'Lefty Hand Cream',
		url: 'http://music.163.com/song/media/outer/url?id=1417621861.mp3',
		cover: 'http://p2.music.126.net/SZ_7FAjIjyrJKSkGoyEdKA==/109951164637407252.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E6%81%8B%E9%9F%B3%E3%81%A8%E9%9B%A8%E7%A9%BA.lrc'
	 },
	 {
		name: '美しきもの（美丽之物）',
		artist: 'Sound Horizon',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E7%BE%8E%E3%81%97%E3%81%8D%E3%82%82%E3%81%AE.mp3',
		cover: 'http://p2.music.126.net/ivlCltZ5_PHSednttGmLBg==/926888302240122.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E7%BE%8E%E3%81%97%E3%81%8D%E3%82%82%E3%81%AE.lrc'
	 },
	 {
		name: '若当来世',
		artist: '冥月 / Mario',
		url: 'http://music.163.com/song/media/outer/url?id=462686465.mp3',
		cover: 'http://p1.music.126.net/1QSIjG47zPCZf2pwI2J2YQ==/19025949207041612.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E8%8B%A5%E5%BD%93%E6%9D%A5%E4%B8%96.lrc'
	 },
	{
		name: 'ラブ・ストーリーは突然に（突如其来的爱情）',
		artist: '小田和正',
		url: 'http://music.163.com/song/media/outer/url?id=486806.mp3',
		cover: 'http://p2.music.126.net/BfyKODeeK6yz9GyHNTOJpQ==/109951163650423394.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%83%A9%E3%83%96%E3%83%BB%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC%E3%81%AF%E7%AA%81%E7%84%B6%E3%81%AB.lrc'
	 },
	{
		name: '3階からヤマトナデシコ',
		artist: '花守ゆみり',
		url: 'http://music.163.com/song/media/outer/url?id=1803619679.mp3',
		cover: 'http://p2.music.126.net/e-pMGxkL2mG10Zi-qpWbtw==/109951165533825291.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/3%E9%9A%8E%E3%81%8B%E3%82%89%E3%83%A4%E3%83%9E%E3%83%88%E3%83%8A%E3%83%87%E3%82%B7%E3%82%B3.lrc'
	 },
	{
		name: '病名恋ワズライ',
		artist: '鎖那',
		url: 'http://music.163.com/song/media/outer/url?id=29017580.mp3',
		cover: 'http://p1.music.126.net/DlbcqrIxwY8lgel4ctDvzw==/6656443394675930.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E7%97%85%E5%90%8D%E6%81%8B%E3%83%AF%E3%82%BA%E3%83%A9%E3%82%A4.lrc'
	 },
	{
		name: '一分一秒君と僕の',
		artist: 'HoneyWorks / スフィア',
		url: 'http://music.163.com/song/media/outer/url?id=410055764.mp3',
		cover: 'http://p2.music.126.net/3ytDlxFRghtMhFzYIk9raQ==/109951164678716117.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E4%B8%80%E5%88%86%E4%B8%80%E7%A7%92%E5%90%9B%E3%81%A8%E5%83%95%E3%81%AE.lrc'
	 },
	 {
		name: '檄！帝国華撃団',
		artist: '安野希世乃 / 大西沙織 / 茅野愛衣 / 矢作紗友里 / 赤崎千夏',
		url: 'http://music.163.com/song/media/outer/url?id=493285250.mp3',
		cover: 'http://p2.music.126.net/6LnZcVdLea4Zpks_u0BVGg==/109951165566383368.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E6%AA%84%EF%BC%81%E5%B8%9D%E5%9B%BD%E8%8F%AF%E6%92%83%E5%9B%A3.lrc'
	 },
	 {
		name: '小さなてのひら',
		artist: '安野希世乃',
		url: 'http://music.163.com/song/media/outer/url?id=1393187503.mp3',
		cover: 'http://p1.music.126.net/cjxYSPwmkpAf5rQ9X1dPQg==/109951164385840647.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E5%B0%8F%E3%81%95%E3%81%AA%E3%81%A6%E3%81%AE%E3%81%B2%E3%82%89.lrc'
	 },
	 {
		name: '好字唯之（翻自 忘川风华录）',
		artist: '三无MarBlue',
		url: 'http://music.163.com/song/media/outer/url?id=1455689218.mp3',
		cover: 'http://p2.music.126.net/ExC40_fFwxUgydQINzjqAQ==/109951164669111492.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E5%A5%BD%E5%AD%97%E5%94%AF%E4%B9%8B.lrc'
	 },
	 {
		name: '拼凑的断音（cover：初音ミク / とあ）（ツギハギスタッカート)（翻自 とあ）',
		artist: '喵☆酱',
		url: 'http://music.163.com/song/media/outer/url?id=1498302477.mp3',
		cover: 'http://p1.music.126.net/uX5M80cnoqZrauAlNr236Q==/109951162907863034.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E6%8B%BC%E5%87%91%E7%9A%84%E6%96%AD%E9%9F%B3.lrc'
	 },
	 {
		name: '動く、動く',
		artist: '水瀬いのり / 久保ユリカ',
		url: 'http://music.163.com/song/media/outer/url?id=520461943.mp3',
		cover: 'http://p1.music.126.net/uX5M80cnoqZrauAlNr236Q==/109951162907863034.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E5%8B%95%E3%81%8F%E3%80%81%E5%8B%95%E3%81%8F.lrc'
	 },
	 {
		name: 'More One Night',
		artist: '水瀬いのり / 久保ユリカ',
		url: 'http://music.163.com/song/media/outer/url?id=520461955.mp3',
		cover: 'http://p1.music.126.net/sWRdFBGacf49gtVAutrkyw==/109951163072148264.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/More%20One%20Night.lrc'
	 },
	 {
		name: 'irony',
		artist: 'ClariS',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/irony.mp3',
		cover: 'http://p1.music.126.net/DJ-GY-jLEWuhPZMSD5txdw==/109951164120380820.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/irony.lrc'
	 },
	 {
		name: 'クリスタライズ',
		artist: '水瀬いのり',
		url: 'http://music.163.com/song/media/outer/url?id=1499781983.mp3',
		cover: 'http://p2.music.126.net/sQG2lCm3wfJRbamzM48wPQ==/109951165608405503.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%82%AF%E3%83%AA%E3%82%B9%E3%82%BF%E3%83%A9%E3%82%A4%E3%82%BA.lrc'
	 },
	 {
		name: 'おうちに帰りたい',
		artist: '雨宮天 / 高橋李依 / 茅野愛衣',
		url: 'http://music.163.com/song/media/outer/url?id=456175210.mp3',
		cover: 'http://p2.music.126.net/QU-hCU0Yla8wNBV2m66urg==/18735678139060808.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%81%8A%E3%81%86%E3%81%A1%E3%81%AB%E5%B8%B0%E3%82%8A%E3%81%9F%E3%81%84.lrc'
	 },
	 {
		name: '三日月の舞 (新月之舞) (全国大赛铜 Ver.)',
		artist: '北宇治高中吹奏乐社/松田彬人',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E4%B8%89%E6%97%A5%E6%9C%88%E3%81%AE%E8%88%9E%20(%E5%85%A8%E5%9B%BD%E5%A4%A7%E4%BC%9A%E9%8A%85%E8%B3%9E%20Ver_).mp3',
		cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003ewr633nBRxu_1.jpg?max_age=2592000',
	 },
	 {
		name: 'DREAM SOLISTER',
		artist: 'TRUE (唐沢美帆)',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/DREAM%20SOLISTER.mp3',
		cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003ewr633nBRxu_1.jpg?max_age=2592000',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/DREAM%20SOLISTER.lrc'
	 },
	 {
		name: 'world.execute (me) ;',
		artist: 'Mili',
		url: 'http://music.163.com/song/media/outer/url?id=435278010.mp3',
		cover: 'http://p1.music.126.net/-OxCLbGs-JxKtPaBCo1yuw==/18801648835570109.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/world.execute%20(me)%20.lrc'
	 },
	 {
		name: 'Fire',
		artist: 'Gavin Degraw',
		url: 'http://music.163.com/song/media/outer/url?id=28923579.mp3',
		cover: 'http://p2.music.126.net/eLu-ldZYiOYTmNHNvvAVZw==/18851126858251972.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/Fire.lrc'
	 },
	 {
		name: 'Rubia',
		artist: '周深',
		url: 'http://music.163.com/song/media/outer/url?id=1815684465.mp3',
		cover: 'http://p2.music.126.net/499AYZ3epP1T7GJYvnJZZQ==/109951165671947083.jpg?param=130y130',
		lrc: path + '/lrc/Rubia.lrc'
	 },
	 {
		name: '让风告诉你',
		artist: '花玲 / 喵☆酱 / 宴宁 / kinsen',
		url: 'http://music.163.com/song/media/outer/url?id=1818031620.mp3',
		cover: 'http://p1.music.126.net/pYKBjkB6FoNh5Yxkb9uCbw==/109951165698369632.jpg?param=130y130',
		lrc: path + '/lrc/让风告诉你.lrc'
	 },
	 {
		name: '牵丝戏',
		artist: '银临 / Aki阿杰',
		url: 'http://music.163.com/song/media/outer/url?id=30352891.mp3',
		cover: 'http://p2.music.126.net/Nd86SOcyCxU5Qu7jdZn_MQ==/7725168696876736.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E7%89%B5%E4%B8%9D%E6%88%8F.lrc'
	 },
	 {
		name: 'Shangri-La',
		artist: '今井麻美',
		url: 'http://music.163.com/song/media/outer/url?id=28063305.mp3',
		cover: 'http://p1.music.126.net/8IwJX5w1MEAJOZ4EKZNJcg==/5753744348277523.jpg?param=130y130',
		lrc: path + '/lrc/Shangri-La.lrc'
	 },
	 {
		name: '明日方舟铅封行动主界面BGM',
		artist: '塞壬唱片',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E9%93%85%E5%B0%81%E8%A1%8C%E5%8A%A8%E4%B8%BB%E7%95%8C%E9%9D%A2BGM.mp3',
		cover: 'http://p1.music.126.net/on0pf3l8qsaktyMeKl4YtA==/109951165641467155.jpg?param=140y140',
	 },
	 {
		name: 'Renegade',
		artist: '塞壬唱片-MSR',
		url: 'http://music.163.com/song/media/outer/url?id=1444493657.mp3',
		cover: 'http://p1.music.126.net/qKU7UETrrdH-x7cZf-FfIw==/109951164949003058.jpg?param=130y130',
		lrc: path + '/lrc/Renegade.lrc'
	 },
	 {
		name: 'Everything\'s Alright',
		artist: '塞壬唱片-MSR / DJ Okawari / 澤田かおり',
		url: 'http://music.163.com/song/media/outer/url?id=1460626792.mp3',
		cover: 'http://p2.music.126.net/C_dc-WuRU4YKJREo4A2Wbw==/109951165115215198.jpg?param=130y130',
		lrc: path + '/lrc/Everything is Alright.lrc'
	 },
	 {
		name: 'Señorita',
		artist: 'Shawn Mendes / Camila Cabello',
		url: 'http://music.163.com/song/media/outer/url?id=1373168742.mp3',
		cover: 'http://p2.music.126.net/eSrLKe5g3U8jX-lb629q6A==/109951164162885535.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/Se%C3%B1orita.lrc'
	 },
	 {
		name: 'Try Try Try',
		artist: 'Jason Mraz',
		url: 'http://music.163.com/song/media/outer/url?id=1474821.mp3',
		cover: 'http://p1.music.126.net/EG3TlLCxPIQf1S055Q-D6g==/908196604592765.jpg?param=130y130',
		lrc: path + '/lrc/Try Try Try.lrc'
	 },
	 {
		name: '届かない恋',
		artist: '上原れな',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E5%B1%8A%E3%81%8B%E3%81%AA%E3%81%84%E6%81%8B.mp3',
		cover: 'http://p2.music.126.net/WPmDDxZRmvTLwYOTs_zVPA==/2938994582872957.jpg?param=130y130',
		lrc: path + '/lrc/届かない恋.lrc'
	 },
	 {
		name: '墜ちない空',
		artist: 'ENA☆',
		url: 'http://music.163.com/song/media/outer/url?id=31830711.mp3',
		cover: 'http://p2.music.126.net/Gtt0DhLi62rIf04I8V1Suw==/7828522790543880.jpg?param=130y130',
		lrc: path + '/lrc/墜ちない空.lrc'
	 },
	 {
		name: '六兆年と一夜物語',
		artist: 'Roselia',
		url: 'http://music.163.com/song/media/outer/url?id=1451142196.mp3',
		cover: 'http://p1.music.126.net/RhXIYzCQi2i9jYDfskTdrg==/109951165019174968.jpg?param=130y130',
		lrc: path + '/lrc/六兆年と一夜物語.lrc'
	 },
	 {
		name: 'My Friend',
		artist: 'SPYAIR',
		url: 'http://music.163.com/song/media/outer/url?id=22682066.mp3',
		cover: 'http://p2.music.126.net/o09Ak-YjSKE5IUmzrSREjA==/18326659812039577.jpg?param=130y130',
		lrc: path + '/lrc/My Friend.lrc'
	 },
	 {
		name: 'ときめきポポロン♪',
		artist: 'チマメ隊',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%81%A8%E3%81%8D%E3%82%81%E3%81%8D%E3%83%9D%E3%83%9D%E3%83%AD%E3%83%B3%E2%99%AA%20.mp3',
		cover: 'http://p1.music.126.net/mWv4kvetBg-O6EGan7ya6A==/109951165604183458.jpg?param=130y130',
		lrc: path + '/lrc/ときめきポポロン♪.lrc'
	 },
	 {
		name: '天空カフェテリア',
		artist: 'Petit Rabbit',
		url: 'https://cs-music.oss-cn-qingdao.aliyuncs.com/music/%E5%A4%A9%E7%A9%BA%E3%82%AB%E3%83%95%E3%82%A7%E3%83%86%E3%83%AA%E3%82%A2.flac',
		cover: 'http://p2.music.126.net/NNO1rA_XlM1ymC99YE_-oQ==/109951165387616949.jpg?param=130y130',
		lrc: path + '/lrc/天空カフェテリア.lrc'
	 },
	 {
		name: 'Daydream cafe',
		artist: 'Petit Rabbit',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/Daydream%20cafe.mp3',
		cover: 'http://p1.music.126.net/zVGVZonxIvnu6ERIigMztg==/109951165603995613.jpg?param=130y130',
		lrc: path + '/lrc/Daydream cafe.lrc'
	 },
	 {
		name: 'ノーポイッ!',
		artist: 'Petit Rabbit',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%83%8E%E3%83%BC%E3%83%9D%E3%82%A4%E3%83%83%EF%BC%81.mp3',
		cover: 'http://p2.music.126.net/mWv4kvetBg-O6EGan7ya6A==/109951165604183458.jpg?param=130y130',
		lrc: path + '/lrc/ノーポイッ!.lrc'
	 },
	 {
		name: 'なんとなくミライ',
		artist: 'Petit Rabbit',
		url: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E3%81%AA%E3%82%93%E3%81%A8%E3%81%AA%E3%81%8F%E3%83%9F%E3%83%A9%E3%82%A4.mp3',
		cover: 'http://p1.music.126.net/mWv4kvetBg-O6EGan7ya6A==/109951165604183458.jpg?param=130y130',
		lrc: path + '/lrc/なんとなくミライ.lrc'
	 },
	 {
		name: 'mede:mede',
		artist: 'Reol',
		url: 'https://cs-music.oss-cn-qingdao.aliyuncs.com/music/mede_mede.flac',
		cover: 'http://p1.music.126.net/ydouSswaFC9GPnx_9SPBow==/109951163739180220.jpg?param=130y130',
		lrc: path + '/lrc/mede.lrc'
	 },
	 {
		name: '和乐 千本樱（Cover miku / 镜音）',
		artist: 'Hanser / YUKIri',
		url: 'http://music.163.com/song/media/outer/url?id=437250674.mp3',
		cover: 'http://p1.music.126.net/9GAbSb_hlXPu66HWInJOww==/109951162846052486.jpg?param=130y130',
		lrc: path + '/lrc/和乐 千本樱.lrc'
	 },
	 {
		name: 'ふわふわ時間',
		artist: '放課後ティータイム',
		url: 'http://music.163.com/song/media/outer/url?id=26201899.mp3',
		cover: 'http://p2.music.126.net/B_sCLXthAHgoVEMIRNU1hw==/109951163559682176.jpg?param=130y130',
		lrc: path + '/lrc/ふわふわ時間.lrc'
	 },
	 {
		name: 'CHANGE!!!! (M@STER VERSION)',
		artist: '765PRO ALLSTARS',
		url: 'http://music.163.com/song/media/outer/url?id=423227554.mp3',
		cover: 'http://p1.music.126.net/LQn6sIR39G--dXR4lGTHFg==/1372190524982267.jpg?param=130y130',
		lrc: path + '/lrc/CHANGE!!!!.lrc'
	 },
	 {
		name: 'READY!!',
		artist: '765PRO ALLSTARS',
		url: 'http://music.163.com/song/media/outer/url?id=28381221.mp3',
		cover: 'http://p2.music.126.net/xJtmv6IiljPWv5aRE8VAHA==/109951163379153932.jpg?param=130y130',
		lrc: path + '/lrc/READY!!.lrc'
	 },
	 {
		name: 'Donde Estas Yolanda?',
		artist: 'Pink Martini',
		url: 'http://music.163.com/song/media/outer/url?id=18212708.mp3',
		cover: 'http://p2.music.126.net/Jza-Jec3MP9K964fW5aLGw==/109951163303879734.jpg?param=130y130',
		lrc: path + '/lrc/Donde Estas Yolanda.lrc'
	 },
	 {
		name: '神保町哀歌',
		artist: '鈴木愛奈',
		url: 'http://music.163.com/song/media/outer/url?id=1439125412.mp3',
		cover: 'http://p1.music.126.net/vR7O0TyJ8ZhFHPCTDNEjFA==/109951164887330112.jpg?param=130y130',
		lrc: path + '/lrc/神保町哀歌.lrc'
	 },
	 {
		name: '亡き王女の為のセプテット',
		artist: '上海アリス幻樂団',
		url: 'http://music.163.com/song/media/outer/url?id=22636723.mp3',
		cover: path + '/http://p1.music.126.net/DQZWfISsCfzj-sOGsn_vIQ==/785051302254380.jpg?param=130y130',
	 },
	 {
		name: 'secret base ~君がくれたもの~',
		artist: '茅野愛衣 / 戸松遥 / 早見沙織',
		url: 'http://music.163.com/song/media/outer/url?id=33911781.mp3',
		cover: 'http://p1.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?',
		lrc: path + '/lrc/secret base ~君がくれたもの~.lrc'
	 },
	 {
		name: '红日',
		artist: '李克勤',
		url: 'http://music.163.com/song/media/outer/url?id=115502.mp3',
		cover: 'http://p1.music.126.net/ZJvsIcd51VAZx3-YuEAcFQ==/18612532836965764.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E7%BA%A2%E6%97%A5.lrc'
	 },
	 {
		name: '护花使者',
		artist: '李克勤',
		url: 'http://music.163.com/song/media/outer/url?id=115569.mp3',
		cover: 'http://p2.music.126.net/dUF2QZtXNkjdtyHPD_cn5Q==/109951163157531184.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E6%8A%A4%E8%8A%B1%E4%BD%BF%E8%80%85.lrc'
	 },
	 {
		name: '月半小夜曲',
		artist: '李克勤',
		url: 'http://music.163.com/song/media/outer/url?id=115162.mp3',
		cover: 'http://p2.music.126.net/bYTctrjUegSyzDPteIeNOw==/74766790705099.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E6%9C%88%E5%8D%8A%E5%B0%8F%E5%A4%9C%E6%9B%B2.lrc'
	 },
	 {
		name: '光阴的故事',
		artist: '罗大佑',
		url: 'http://music.163.com/song/media/outer/url?id=5232465.mp3',
		cover: 'http://p2.music.126.net/PsjQ1vycEVG4nhkXQWhwhQ==/52776558146680.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E5%85%89%E9%98%B4%E7%9A%84%E6%95%85%E4%BA%8B.lrc'
	 },
	 /*{
		name: '大花轿',
		artist: '火风',
		url: 'http://music.163.com/song/media/outer/url?id=5280097.mp3',
		cover: 'http://p1.music.126.net/pVcOHEJuIDzRuiIil3lCWA==/109951165069087925.jpg?param=130y130',
		lrc: 'https://cdn.jsdelivr.net/gh/ChanSure/picgo/%E5%A4%A7%E8%8A%B1%E8%BD%BF.lrc'
	 },*/
    ]
});
