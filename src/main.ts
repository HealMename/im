import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import locales from './locales';

import { TUICore, TUIComponents } from './TUIKit';
import { TUICallKit } from '@tencentcloud/call-uikit-vue';
import { TUINotification } from './TUIKit/TUIPlugin';

const SDKAppID = 1400813313; // Your SDKAppID
const secretKey = '3dcd65cb5ccbd9982f95b1a124a799fda6f3770d55c132171424222164c6d62b'; // Your secretKey

const TUIKit = TUICore.init({
  SDKAppID,
});

TUIKit.config.i18n.provideMessage(locales);

TUIKit.use(TUIComponents);
TUIKit.use(TUICallKit);
TUIKit.use(TUINotification);

const app = createApp(App);

app.use(store)
  .use(router)
  .use(TUIKit)
  .use(ElementPlus)
  .mount('#app');

export { SDKAppID, secretKey };
