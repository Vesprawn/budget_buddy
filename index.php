<?php 
$language = 'eng';

function buildIndex($lang) {
	$sb = '<!DOCTYPE html><html>'.buildHead().buildBody($lang).'</html>';
	print $sb;	
}

function buildHead() {
	return '<head>'.
	'<title>Budget Buddy</title>'.
	buildCSS('css/ui').
	'</head>';
}

function buildBody($lang) {
	return '<body>'.buildScripts($lang).'</body>';
}

function buildScripts($lang) {
	$sb = buildScript('js/jquery').
		buildScript('js/budget_buddy').
		buildScript('config/'.$lang.'/strings').
		buildScript('js/dictionary').
		buildScript('js/user').
		buildScript('js/transaction').
		buildScript('js/payee').
		buildScript('js/ui').
		buildScript('js/main');
	return $sb;
}

function buildCSS($href) {
	return '<link rel="stylesheet" type="text/css" href="'.$href.'.css"/>';
}

function buildScript($url) {
	return '<script src="'.$url.'.js"></script>';
}

buildIndex($language);
?>