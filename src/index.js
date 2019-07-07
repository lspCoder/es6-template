import { version } from '../package.json';
import ModuleA from './ModuleA';
import ModuleB from './ModuleB';
import '../css/main.css';

const moduleA = new ModuleA(version);
const moduleB = new ModuleB(version);

moduleA.print();
moduleB.print();

(() => {
  document.body.innerText = 'test';
})();

function timeout(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  });
}

(async () => {
  const value = await timeout(1);
  console.log(value);
  console.log('end');
})();
