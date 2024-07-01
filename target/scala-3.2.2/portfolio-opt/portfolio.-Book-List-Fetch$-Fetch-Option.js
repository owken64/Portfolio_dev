'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Lportfolio_BookListFetch$FetchOption(name, baseUrl, bustCache) {
  this.fl = null;
  this.e6 = null;
  this.eC = false;
  this.fl = name;
  this.e6 = baseUrl;
  this.eC = bustCache;
}
export { $c_Lportfolio_BookListFetch$FetchOption as $c_Lportfolio_BookListFetch$FetchOption };
$p = $c_Lportfolio_BookListFetch$FetchOption.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Lportfolio_BookListFetch$FetchOption;
/** @constructor */
function $h_Lportfolio_BookListFetch$FetchOption() {
}
export { $h_Lportfolio_BookListFetch$FetchOption as $h_Lportfolio_BookListFetch$FetchOption };
$h_Lportfolio_BookListFetch$FetchOption.prototype = $p;
$p.bz = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.t = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().d(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("FetchOption"));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().d(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().Q(this.fl));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().d(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().Q(this.e6));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().d(acc, (this.eC ? 1231 : 1237));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().D(acc, 3);
});
$p.m = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lportfolio_BookListFetch$FetchOption)) {
    var x$0$2 = x$0;
    return (((this.eC === x$0$2.eC) && (this.fl === x$0$2.fl)) && (this.e6 === x$0$2.e6));
  } else {
    return false;
  }
});
$p.w = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().fJ(this);
});
$p.bd = (function() {
  return 3;
});
$p.bf = (function() {
  return "FetchOption";
});
$p.be = (function(n) {
  switch (n) {
    case 0: {
      return this.fl;
      break;
    }
    case 1: {
      return this.e6;
      break;
    }
    case 2: {
      return this.eC;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$p.rM = (function() {
  return (this.eC ? ((this.e6 + "?t=") + (+Date.now())) : this.e6);
});
function $isArrayOf_Lportfolio_BookListFetch$FetchOption(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
export { $isArrayOf_Lportfolio_BookListFetch$FetchOption as $isArrayOf_Lportfolio_BookListFetch$FetchOption };
var $d_Lportfolio_BookListFetch$FetchOption = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Lportfolio_BookListFetch$FetchOption, "portfolio.BookListFetch$FetchOption", ({
  bJ: 1,
  d: 1,
  L: 1,
  a: 1
}));
export { $d_Lportfolio_BookListFetch$FetchOption as $d_Lportfolio_BookListFetch$FetchOption };
//# sourceMappingURL=portfolio.-Book-List-Fetch$-Fetch-Option.js.map
