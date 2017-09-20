import { TestClass } from './testClass';

(function() {
  console.log("Module loaded.");
  let ins = new TestClass();
  ins.hello();

  let boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;

  if (boxes.length > 0) {
    boxes[0].innerHTML = "Hello World! Box has been intialized.";
  }

})();
