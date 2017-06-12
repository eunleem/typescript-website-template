import { TestClass } from './testClass';

(function($) {
  console.log("jQuery loaded.");
  let ins = new TestClass();
  ins.hello();
  $(".box").html("Hello");

})(jQuery)
