'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Lportfolio_BookListFetch$FetchOption(name, baseUrl, bustCache) {
  this.Lportfolio_BookListFetch$FetchOption__f_name = null;
  this.Lportfolio_BookListFetch$FetchOption__f_baseUrl = null;
  this.Lportfolio_BookListFetch$FetchOption__f_bustCache = false;
  this.Lportfolio_BookListFetch$FetchOption__f_name = name;
  this.Lportfolio_BookListFetch$FetchOption__f_baseUrl = baseUrl;
  this.Lportfolio_BookListFetch$FetchOption__f_bustCache = bustCache;
}
export { $c_Lportfolio_BookListFetch$FetchOption as $c_Lportfolio_BookListFetch$FetchOption };
$c_Lportfolio_BookListFetch$FetchOption.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lportfolio_BookListFetch$FetchOption.prototype.constructor = $c_Lportfolio_BookListFetch$FetchOption;
/** @constructor */
function $h_Lportfolio_BookListFetch$FetchOption() {
}
export { $h_Lportfolio_BookListFetch$FetchOption as $h_Lportfolio_BookListFetch$FetchOption };
$h_Lportfolio_BookListFetch$FetchOption.prototype = $c_Lportfolio_BookListFetch$FetchOption.prototype;
$c_Lportfolio_BookListFetch$FetchOption.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Lportfolio_BookListFetch$FetchOption.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("FetchOption");
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lportfolio_BookListFetch$FetchOption__f_name;
  var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var x$1 = this.Lportfolio_BookListFetch$FetchOption__f_baseUrl;
  var data$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x$1);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var data$3 = (this.Lportfolio_BookListFetch$FetchOption__f_bustCache ? 1231 : 1237);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3);
});
$c_Lportfolio_BookListFetch$FetchOption.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lportfolio_BookListFetch$FetchOption)) {
    var x$0$2 = $as_Lportfolio_BookListFetch$FetchOption(x$0);
    return ((((this.Lportfolio_BookListFetch$FetchOption__f_bustCache === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Lportfolio_BookListFetch$FetchOption__f_bustCache) && (this.Lportfolio_BookListFetch$FetchOption__f_name === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Lportfolio_BookListFetch$FetchOption__f_name)) && (this.Lportfolio_BookListFetch$FetchOption__f_baseUrl === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Lportfolio_BookListFetch$FetchOption__f_baseUrl)) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lportfolio_BookListFetch$FetchOption.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lportfolio_BookListFetch$FetchOption.prototype.productArity__I = (function() {
  return 3;
});
$c_Lportfolio_BookListFetch$FetchOption.prototype.productPrefix__T = (function() {
  return "FetchOption";
});
$c_Lportfolio_BookListFetch$FetchOption.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lportfolio_BookListFetch$FetchOption__f_name;
      break;
    }
    case 1: {
      return this.Lportfolio_BookListFetch$FetchOption__f_baseUrl;
      break;
    }
    case 2: {
      return this.Lportfolio_BookListFetch$FetchOption__f_bustCache;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$c_Lportfolio_BookListFetch$FetchOption.prototype.url__T = (function() {
  return (this.Lportfolio_BookListFetch$FetchOption__f_bustCache ? ((this.Lportfolio_BookListFetch$FetchOption__f_baseUrl + "?t=") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(Date.now())) : this.Lportfolio_BookListFetch$FetchOption__f_baseUrl);
});
function $as_Lportfolio_BookListFetch$FetchOption(obj) {
  return (((obj instanceof $c_Lportfolio_BookListFetch$FetchOption) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "portfolio.BookListFetch$FetchOption"));
}
export { $as_Lportfolio_BookListFetch$FetchOption as $as_Lportfolio_BookListFetch$FetchOption };
function $isArrayOf_Lportfolio_BookListFetch$FetchOption(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lportfolio_BookListFetch$FetchOption)));
}
export { $isArrayOf_Lportfolio_BookListFetch$FetchOption as $isArrayOf_Lportfolio_BookListFetch$FetchOption };
function $asArrayOf_Lportfolio_BookListFetch$FetchOption(obj, depth) {
  return (($isArrayOf_Lportfolio_BookListFetch$FetchOption(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lportfolio.BookListFetch$FetchOption;", depth));
}
export { $asArrayOf_Lportfolio_BookListFetch$FetchOption as $asArrayOf_Lportfolio_BookListFetch$FetchOption };
var $d_Lportfolio_BookListFetch$FetchOption = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lportfolio_BookListFetch$FetchOption, "portfolio.BookListFetch$FetchOption", ({
  Lportfolio_BookListFetch$FetchOption: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lportfolio_BookListFetch$FetchOption as $d_Lportfolio_BookListFetch$FetchOption };
//# sourceMappingURL=portfolio.-Book-List-Fetch$-Fetch-Option.js.map
