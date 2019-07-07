var version = "1.0.0";

/**
 * Modle A
 */
class ModuleA {
  /**
   * @param  {String} name - class name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * print name
   */
  print() {
    console.log(`name: ${this.name}`);
  }
}

/**
 * Module B
 * @extends {ModuleA}
 */
class ModuleB extends ModuleA {
  /**
   * @param {name} String - module name
   */
  constructor(name) {
    super(name);
    this.name = `ModuleB: ${this.name}`;
  }

  print() {
    super.print();
  }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "body,* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody {\n  padding: 2rem;\n  background-image: linear-gradient(to bottom,\n    #efefff 0%,\n    #fff 100%\n  );\n  background-repeat: no-repeat;\n}";
styleInject(css);

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
