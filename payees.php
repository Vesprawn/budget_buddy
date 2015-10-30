<?php 
$language = 'eng';

function buildIndex($lang) {
	$sb = '<!DOCTYPE html><html>'.buildHead().buildBody($lang).'</html>';
	print $sb;	
}

function buildHead() {
	return '<head></head>';
}

function buildBody($lang) {
	return '<body>'.buildScripts($lang).'</body>';
}

function buildScripts($lang) {
	$sb = buildScript('config/'.$lang.'/strings').
		buildScript('js/jquery').
		buildScript('js/dictionary').
		buildScript('js/user').
		buildScript('js/core');
	return $sb;
}

function buildScript($url) {
	return '<script src="'.$url.'.js"></script>';
}

buildIndex($language);
?>