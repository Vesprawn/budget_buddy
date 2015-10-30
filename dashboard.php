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
	$sb = 
		buildScript('js/jquery').
		buildScript('js/core_connector').
		buildScript('js/page').
		buildScript('js/dashboard');
	return $sb;
}

function buildScript($url) {
	return '<script src="'.$url.'.js"></script>';
}

buildIndex($language);
?>