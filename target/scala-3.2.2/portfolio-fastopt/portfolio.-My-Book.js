'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Lportfolio_MyBook(date, title, author, shoten) {
  this.Lportfolio_MyBook__f_date = null;
  this.Lportfolio_MyBook__f_title = null;
  this.Lportfolio_MyBook__f_author = null;
  this.Lportfolio_MyBook__f_shoten = null;
  this.Lportfolio_MyBook__f_date = date;
  this.Lportfolio_MyBook__f_title = title;
  this.Lportfolio_MyBook__f_author = author;
  this.Lportfolio_MyBook__f_shoten = shoten;
}
export { $c_Lportfolio_MyBook as $c_Lportfolio_MyBook };
$c_Lportfolio_MyBook.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lportfolio_MyBook.prototype.constructor = $c_Lportfolio_MyBook;
/** @constructor */
function $h_Lportfolio_MyBook() {
}
export { $h_Lportfolio_MyBook as $h_Lportfolio_MyBook };
$h_Lportfolio_MyBook.prototype = $c_Lportfolio_MyBook.prototype;
$c_Lportfolio_MyBook.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Lportfolio_MyBook.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lportfolio_MyBook.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lportfolio_MyBook)) {
    var x$0$2 = $as_Lportfolio_MyBook(x$0);
    return (((((this.Lportfolio_MyBook__f_date === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Lportfolio_MyBook__f_date) && (this.Lportfolio_MyBook__f_title === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Lportfolio_MyBook__f_title)) && (this.Lportfolio_MyBook__f_author === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Lportfolio_MyBook__f_author)) && (this.Lportfolio_MyBook__f_shoten === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Lportfolio_MyBook__f_shoten)) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lportfolio_MyBook.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lportfolio_MyBook.prototype.productArity__I = (function() {
  return 4;
});
$c_Lportfolio_MyBook.prototype.productPrefix__T = (function() {
  return "MyBook";
});
$c_Lportfolio_MyBook.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lportfolio_MyBook__f_date;
      break;
    }
    case 1: {
      return this.Lportfolio_MyBook__f_title;
      break;
    }
    case 2: {
      return this.Lportfolio_MyBook__f_author;
      break;
    }
    case 3: {
      return this.Lportfolio_MyBook__f_shoten;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Lportfolio_MyBook(obj) {
  return (((obj instanceof $c_Lportfolio_MyBook) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "portfolio.MyBook"));
}
export { $as_Lportfolio_MyBook as $as_Lportfolio_MyBook };
function $isArrayOf_Lportfolio_MyBook(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lportfolio_MyBook)));
}
export { $isArrayOf_Lportfolio_MyBook as $isArrayOf_Lportfolio_MyBook };
function $asArrayOf_Lportfolio_MyBook(obj, depth) {
  return (($isArrayOf_Lportfolio_MyBook(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lportfolio.MyBook;", depth));
}
export { $asArrayOf_Lportfolio_MyBook as $asArrayOf_Lportfolio_MyBook };
var $d_Lportfolio_MyBook = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lportfolio_MyBook, "portfolio.MyBook", ({
  Lportfolio_MyBook: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lportfolio_MyBook as $d_Lportfolio_MyBook };
//# sourceMappingURL=portfolio.-My-Book.js.map
