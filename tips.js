var tips = [];

tips.push({
	author: 'bentruyman',
	message: 'Use Microsoft_Case in Your IDs and Classes So That Others <em>Familiar</em> With the English Language (or Books) Can Easily Read Your Selectors',
	example: [
		'.A_Nice_Looking_Container_With_White_Text {',
		'	color: white;',
		'	height: 360px;',
		'	width: 960px;',
		'}',
		'',
		'.Right_Sidebar_Navigation_Item {',
		'	float: left;',
		'	margin: 0 1em;',
		'}',
		'',
		'#Generic_Copy {',
		'	font-family: Georgia, Sans-Serif;',
		'}',
		'',
		'.Masthead_Logo_Image {',
		'	background-image: url(...);',
		'	height: 95px;',
		'	width: 300px;',
		'}'
	]
});

tips.push({
	author: 'bentruyman',
	message: '<em>Organize</em> Properties/Value Pairs by Length',
	example: [
		'.container {',
		'	color: #fff;',
		'	width: 900px;',
		'	height: 300px;',
		'	padding: 1px 0;',
		'	margin: 3px 2px;',
		'	display: inline-block;',
		'	background-color: #333333;',
		'	background-repeat: no-repeat;',
		'	background-position: 100px -50px;',
		'}'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Creating As Many Classes As Possible to <em>Abstract</em> out Actual Implementation',
	example: [
		'.bold {',
		'	font-weight: bold;',
		'}',
		'',
		'.float-left {',
		'	float: left;',
		'}',
		'',
		'.float-right {',
		'	float: right;',
		'}',
		'',
		'.italic {',
		'	font-style: italic;',
		'}',
		'',
		'.red-text {',
		'	color: #ff0000;',
		'}',
		'',
		'.text-aligned-right {',
		'	text-align: right;',
		'}'
	]
});

tips.push({
	author: 'chpwn',
	message: 'Non-Existent Because we use <em>Tables</em>',
	example: [
		'<table border=0>',
		'<tr><td><table><tr><td></td></tr></table></td></tr>',
		'</table>'
	]
});


tips.push({
    author: 'artsyca',
    message: 'Use meticulously nested style rules including at least two ids per line',
    example: [
        '#concept #permanent .recommend {...}',
        '#concept #highlightRec.recommend {left:0px;}',
        '#concept #alpha.recommend {left:-3px;}',
        '#concept #beta.recommend {left:-3px;}',
        '#concept #gamma.recommend {left:-3px;}',
        '#concept form#conceptProducts {..}',
        '#concept #compare {...}',
        '#concept #compare .object {...}',
        '#concept #compare .object.highlight .recommend {...}',
        '#concept #compare .object h5 {...}',
        '#concept #compare .object .intro {...}',
        '#concept #compare .object .intro .productPhoto {...}',
        '#concept #compare .object .intro h4 {...}',
        '...',
        '#concept #compare .object .speed {...}',
        '#concept #compare .object .size {...}',
        '#concept #compare .object .features {...}',
        '#concept #compare .object .features li {...}',
        '#concept #compare .object div.order {...}',
    ]
});

tips.push({
	author: 'artsyca',
	message: 'Avoid defaults at all costs and use precise pixel or % sizes for all fonts and spacing',
	example: [
		'p.messageText{',
		'	font-size: 12.5px;',
		'}',
		'',
		'h1.messagebody {',
		'	font-size 163%;',
		'	line-height: 125%;',
		'}',
		'',
		'h1.messagebody span.callout {',
		'	font-size 123%;',
		'}',
		'',
		'span.memo {',
		'	font-size: 94.5%',
		'}',
		''
	]
});

module.exports = tips;
