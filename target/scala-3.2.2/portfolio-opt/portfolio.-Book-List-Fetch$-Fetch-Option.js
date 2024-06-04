'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Lportfolio_BookListFetch$FetchOption(name, baseUrl, bustCache) {
  this.fi = null;
  this.e5 = null;
  this.eA = false;
  this.fi = name;
  this.e5 = baseUrl;
  this.eA = bustCache;
}
export { $c_Lportfolio_BookListFetch$FetchOption as $c_Lportfolio_BookListFetch$FetchOption };
$p = $c_Lportfolio_BookListFetch$FetchOption.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Lportfolio_BookListFetch$FetchOption;
/** @constructor */
function $h_Lportfolio_BookListFetch$FetchOption() {
}
export { $h_Lportfolio_BookListFetch$FetchOption as $h_Lportfolio_BookListFetch$FetchOption };
$h_Lportfolio_BookListFetch$FetchOption.prototype = $p;
$p.bO = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.t = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().d(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("FetchOption"));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().d(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().Q(this.fi));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().d(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().Q(this.e5));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().d(acc, (this.eA ? 1231 : 1237));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().D(acc, 3);
});
$p.l = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lportfolio_BookListFetch$FetchOption)) {
    var x$0$2 = x$0;
    return (((this.eA === x$0$2.eA) && (this.fi === x$0$2.fi)) && (this.e5 === x$0$2.e5));
  } else {
    return false;
  }
});
$p.v = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().gB(this);
});
$p.bj = (function() {
  return 3;
});
$p.bl = (function() {
  return "FetchOption";
});
$p.bk = (function(n) {
  switch (n) {
    case 0: {
      return this.fi;
      break;
    }
    case 1: {
      return this.e5;
      break;
    }
    case 2: {
      return this.eA;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$p.rt = (function() {
  return (this.eA ? ((this.e5 + "?t=") + (+Date.now())) : this.e5);
});
function $isArrayOf_Lportfolio_BookListFetch$FetchOption(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bH)));
}
export { $isArrayOf_Lportfolio_BookListFetch$FetchOption as $isArrayOf_Lportfolio_BookListFetch$FetchOption };
var $d_Lportfolio_BookListFetch$FetchOption = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Lportfolio_BookListFetch$FetchOption, "portfolio.BookListFetch$FetchOption", ({
  bH: 1,
  d: 1,
  R: 1,
  a: 1
}));
export { $d_Lportfolio_BookListFetch$FetchOption as $d_Lportfolio_BookListFetch$FetchOption };
//# sourceMappingURL=portfolio.-Book-List-Fetch$-Fetch-Option.js.map
