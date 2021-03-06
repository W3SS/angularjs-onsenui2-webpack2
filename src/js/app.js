// Angular
import angular from 'angular';

// OnsenUI
window.ons = require('onsenui');
require('onsenui/js/angular-onsenui');
import 'onsenui/css/onsenui';
import 'onsenui/css/onsen-css-components';

// コントローラ
import Page1Controller from './controllers/page1.controller';
import Page2Controller from './controllers/page2.controller';

// スタイル
import '../css/style';
//import '../scss/style';

// ページ (自動で$templateCacheに追加)
import '../html/page1';
import '../html/page2';
import '../html/splitter-side';
import '../html/splitter-content';

// 起動
ons.bootstrap('app', ['onsen']);

// Angularモジュール
angular
    .module('app')
    .controller('Page1Controller', Page1Controller)
    .controller('Page2Controller', Page2Controller);