/**
 * 1、有多少个苹果来分赃
 */
function appleSplits() {
  for (var s = 5; ; s++) {
    if (s % 5 === 1) {
      // 第一个人拿走五分之一，剩 l
      var l = s - Math.round(s / 5) - 1;
      if (l % 5 === 1) {
        // 第一个人拿走五分之一，剩 q
        var q = l - Math.round(l / 5) - 1;
        if (l % 5 === 1) {
          // 第一个人拿走五分之一，剩 w
          var w = q - Math.round(q / 5) - 1;
          if (l % 5 === 1) {
            // 第一个人拿走五分之一，剩 x
            var x = w - Math.round(w / 5) - 1;
            if (l % 5 === 1) {
              // 第一个人拿走五分之一，剩 y
              var y = x - Math.round(x / 5) - 1;
              if (y % 5 === 1) {
                console.log(s);
                break;
              }
            }
          }
        }
      }
    }
  }
}

appleSplits();