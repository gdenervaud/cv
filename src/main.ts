
import './i18n.ts';
import './app.css'
import App from './App.svelte'

var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf('firefox') > -1) {
  document.querySelector('html')!.setAttribute('browser', 'firefox');
} else if (userAgent.indexOf('edge') > -1) {
  document.querySelector('html')!.setAttribute('browser', 'edge');
}

const app = new App({
  target: document.getElementById('app')!
})

export default app
