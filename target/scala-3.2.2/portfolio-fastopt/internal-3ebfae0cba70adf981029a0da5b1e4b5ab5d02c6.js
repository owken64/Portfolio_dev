'use strict';
var $linkingInfo = Object.freeze(({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.16.0",
  "fileLevelThis": this
}));
export { $linkingInfo as $linkingInfo };
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
export { $getOwnPropertyDescriptors as $getOwnPropertyDescriptors };
var $L0;
export { $L0 as $L0 };
function $Char(c) {
  this.c = c;
}
export { $Char as $Char };
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c);
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
}
export { $valueDescription as $valueDescription };
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)));
}
export { $throwClassCastException as $throwClassCastException };
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1);
  }
  $throwClassCastException(arg0, arg1);
}
export { $throwArrayCastException as $throwArrayCastException };
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))));
}
export { $throwArrayIndexOutOFBoundsException as $throwArrayIndexOutOFBoundsException };
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
}
export { $throwArrayStoreException as $throwArrayStoreException };
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
}
export { $throwNegativeArraySizeException as $throwNegativeArraySizeException };
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException());
}
export { $throwNullPointerException as $throwNullPointerException };
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException();
  }
  return arg0;
}
export { $n as $n };
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
export { $noIsInstance as $noIsInstance };
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0);
}
export { $newArrayObject as $newArrayObject };
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex);
    }
  }
  return result;
}
export { $newArrayObjectInternal as $newArrayObjectInternal };
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
export { $objectClone as $objectClone };
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0));
}
export { $objectOrArrayClone as $objectOrArrayClone };
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf();
        } else {
          return $d_jl_Integer.getClassOf();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf();
      } else {
        return $d_jl_Double.getClassOf();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf();
    }
    case "undefined": {
      return $d_jl_Void.getClassOf();
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException();
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf();
      } else {
        return null;
      }
    }
  }
}
export { $objectGetClass as $objectGetClass };
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException();
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name;
      } else {
        return $throwNullPointerException();
      }
    }
  }
}
export { $objectClassName as $objectClassName };
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.codePointAt__I__I(x0);
  }
}
export { $dp_codePointAt__I__I as $dp_codePointAt__I__I };
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0);
      }
    }
  }
}
export { $dp_equals__O__Z as $dp_equals__O__Z };
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.hashCode__I.call(instance);
      }
    }
  }
}
export { $dp_hashCode__I as $dp_hashCode__I };
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.repeat__I__T(x0);
  }
}
export { $dp_repeat__I__T as $dp_repeat__I__T };
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.split__T__I__AT(x0, x1);
  }
}
export { $dp_split__T__I__AT as $dp_split__T__I__AT };
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
export { $dp_toString__T as $dp_toString__T };
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 / arg1) | 0);
  }
}
export { $intDiv as $intDiv };
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 % arg1) | 0);
  }
}
export { $intMod as $intMod };
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
export { $doubleToInt as $doubleToInt };
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
export { $cToS as $cToS };
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_StringIndexOutOfBoundsException__I__(new $c_jl_StringIndexOutOfBoundsException(), arg1));
  } else {
    return r;
  }
}
export { $charAt as $charAt };
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
export { $resolveSuperRef as $resolveSuperRef };
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
export { $superGet as $superGet };
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
export { $superSet as $superSet };
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null);
  }
}
export { $arraycopyCheckBounds as $arraycopyCheckBounds };
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
export { $arraycopyGeneric as $arraycopyGeneric };
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4);
}
export { $systemArraycopy as $systemArraycopy };
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4);
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)]);
    }
  }
}
export { $systemArraycopyRefs as $systemArraycopyRefs };
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4);
    } else {
      $throwArrayStoreException(null);
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4);
  } else {
    $throwArrayStoreException(null);
  }
}
export { $systemArraycopyFull as $systemArraycopyFull };
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
export { $systemIdentityHashCode as $systemIdentityHashCode };
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
export { $isByte as $isByte };
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
export { $isShort as $isShort };
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
export { $isInt as $isInt };
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
export { $isFloat as $isFloat };
function $bC(arg0) {
  return new $Char(arg0);
}
export { $bC as $bC };
var $bC0 = $bC(0);
export { $bC0 as $bC0 };
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"));
}
export { $uV as $uV };
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
}
export { $uZ as $uZ };
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
}
export { $uC as $uC };
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
}
export { $uB as $uB };
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"));
}
export { $uS as $uS };
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
}
export { $uI as $uI };
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
}
export { $uJ as $uJ };
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"));
}
export { $uF as $uF };
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
}
export { $uD as $uD };
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"));
}
export { $uT as $uT };
/** @constructor */
function $c_O() {
}
export { $c_O as $c_O };
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
}
export { $h_O as $h_O };
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)));
});
$c_O.prototype.toString = (function() {
  return this.toString__T();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null;
    }
  } else {
    this.u = arg;
  }
}
export { $ac_O as $ac_O };
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice());
});
function $ah_O() {
}
export { $ah_O as $ah_O };
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false;
    }
  } else {
    this.u = arg;
  }
}
export { $ac_Z as $ac_Z };
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Uint16Array(arg);
  } else {
    this.u = arg;
  }
}
export { $ac_C as $ac_C };
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int8Array(arg);
  } else {
    this.u = arg;
  }
}
export { $ac_B as $ac_B };
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int16Array(arg);
  } else {
    this.u = arg;
  }
}
export { $ac_S as $ac_S };
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int32Array(arg);
  } else {
    this.u = arg;
  }
}
export { $ac_I as $ac_I };
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0;
    }
  } else {
    this.u = arg;
  }
}
export { $ac_J as $ac_J };
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float32Array(arg);
  } else {
    this.u = arg;
  }
}
export { $ac_F as $ac_F };
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float64Array(arg);
  } else {
    this.u = arg;
  }
}
export { $ac_D as $ac_D };
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice());
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0);
}
export { $TypeData as $TypeData };
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = ({});
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
  }
  return this;
});
$TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (kindOrCtor === 2);
  this.name = fullName;
  this.isInterface = (kindOrCtor === 1);
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this;
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException();
      }
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null;
      }
    } else {
      this.u = arg;
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i);
    }
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v);
    }
    this.u[i] = v;
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice());
  });
  ArrayClass.prototype.$classData = this;
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this);
  }
  return this._arrayOf;
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this);
  }
  return this._classOf;
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that));
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name);
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null);
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null);
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf();
  }
  return $newArrayObject(arrayClassData, lengths);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
  }
}
export { $isArrayOf_O as $isArrayOf_O };
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
}
export { $isArrayOf_Z as $isArrayOf_Z };
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
}
export { $isArrayOf_C as $isArrayOf_C };
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
}
export { $isArrayOf_B as $isArrayOf_B };
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
}
export { $isArrayOf_S as $isArrayOf_S };
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
}
export { $isArrayOf_I as $isArrayOf_I };
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
}
export { $isArrayOf_J as $isArrayOf_J };
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
}
export { $isArrayOf_F as $isArrayOf_F };
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
}
export { $isArrayOf_D as $isArrayOf_D };
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
  }
}
export { $asArrayOf_O as $asArrayOf_O };
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Z", depth);
  }
}
export { $asArrayOf_Z as $asArrayOf_Z };
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "C", depth);
  }
}
export { $asArrayOf_C as $asArrayOf_C };
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "B", depth);
  }
}
export { $asArrayOf_B as $asArrayOf_B };
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "S", depth);
  }
}
export { $asArrayOf_S as $asArrayOf_S };
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "I", depth);
  }
}
export { $asArrayOf_I as $asArrayOf_I };
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "J", depth);
  }
}
export { $asArrayOf_J as $asArrayOf_J };
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "F", depth);
  }
}
export { $asArrayOf_F as $asArrayOf_F };
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "D", depth);
  }
}
export { $asArrayOf_D as $asArrayOf_D };
var $d_O = new $TypeData();
export { $d_O as $d_O };
$d_O.ancestors = ({});
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
export { $d_V as $d_V };
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
export { $d_Z as $d_Z };
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
export { $d_C as $d_C };
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
export { $d_B as $d_B };
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
export { $d_S as $d_S };
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
export { $d_I as $d_I };
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
export { $d_J as $d_J };
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
export { $d_F as $d_F };
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
export { $d_D as $d_D };
function $is_Lcom_raquo_airstream_core_InternalObserver(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_InternalObserver)));
}
export { $is_Lcom_raquo_airstream_core_InternalObserver as $is_Lcom_raquo_airstream_core_InternalObserver };
function $as_Lcom_raquo_airstream_core_InternalObserver(obj) {
  return (($is_Lcom_raquo_airstream_core_InternalObserver(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.InternalObserver"));
}
export { $as_Lcom_raquo_airstream_core_InternalObserver as $as_Lcom_raquo_airstream_core_InternalObserver };
function $isArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_InternalObserver)));
}
export { $isArrayOf_Lcom_raquo_airstream_core_InternalObserver as $isArrayOf_Lcom_raquo_airstream_core_InternalObserver };
function $asArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.InternalObserver;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_core_InternalObserver as $asArrayOf_Lcom_raquo_airstream_core_InternalObserver };
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().initClass(1, "com.raquo.airstream.core.InternalObserver", ({
  Lcom_raquo_airstream_core_InternalObserver: 1
}));
export { $d_Lcom_raquo_airstream_core_InternalObserver as $d_Lcom_raquo_airstream_core_InternalObserver };
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.maybeDisplayName__O();
  return $as_T(((x === (void 0)) ? $c_O.prototype.toString__T.call($thiz) : x));
}
export { $f_Lcom_raquo_airstream_core_Named__displayName__T as $f_Lcom_raquo_airstream_core_Named__displayName__T };
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  var this$2 = $m_Lcom_raquo_airstream_core_Observer$();
  var onNext = new $c_sjsr_AnonFunction1(((_$1) => (void 0)));
  this$2.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext, $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true);
}
export { $c_Lcom_raquo_airstream_core_Observer$ as $c_Lcom_raquo_airstream_core_Observer$ };
$c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Observer$.prototype.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
export { $h_Lcom_raquo_airstream_core_Observer$ as $h_Lcom_raquo_airstream_core_Observer$ };
$h_Lcom_raquo_airstream_core_Observer$.prototype = $c_Lcom_raquo_airstream_core_Observer$.prototype;
$c_Lcom_raquo_airstream_core_Observer$.prototype.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(handleObserverErrors, onNext, onError);
});
$c_Lcom_raquo_airstream_core_Observer$.prototype.fromTry__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(handleObserverErrors, onTry);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().initClass($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  Lcom_raquo_airstream_core_Observer$: 1
}));
export { $d_Lcom_raquo_airstream_core_Observer$ as $d_Lcom_raquo_airstream_core_Observer$ };
var $n_Lcom_raquo_airstream_core_Observer$;
function $m_Lcom_raquo_airstream_core_Observer$() {
  if ((!$n_Lcom_raquo_airstream_core_Observer$)) {
    $n_Lcom_raquo_airstream_core_Observer$ = new $c_Lcom_raquo_airstream_core_Observer$();
  }
  return $n_Lcom_raquo_airstream_core_Observer$;
}
export { $m_Lcom_raquo_airstream_core_Observer$ as $m_Lcom_raquo_airstream_core_Observer$ };
/** @constructor */
function $c_Lcom_raquo_airstream_core_ObserverList$() {
}
export { $c_Lcom_raquo_airstream_core_ObserverList$ as $c_Lcom_raquo_airstream_core_ObserverList$ };
$c_Lcom_raquo_airstream_core_ObserverList$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_ObserverList$.prototype.constructor = $c_Lcom_raquo_airstream_core_ObserverList$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_ObserverList$() {
}
export { $h_Lcom_raquo_airstream_core_ObserverList$ as $h_Lcom_raquo_airstream_core_ObserverList$ };
$h_Lcom_raquo_airstream_core_ObserverList$.prototype = $c_Lcom_raquo_airstream_core_ObserverList$.prototype;
$c_Lcom_raquo_airstream_core_ObserverList$.prototype.removeObserverNow$extension__Lcom_raquo_ew_JsArray__O__Z = (function(this$, observer) {
  var index = $uI(this$.indexOf(observer));
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().initClass($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  Lcom_raquo_airstream_core_ObserverList$: 1
}));
export { $d_Lcom_raquo_airstream_core_ObserverList$ as $d_Lcom_raquo_airstream_core_ObserverList$ };
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$();
  }
  return $n_Lcom_raquo_airstream_core_ObserverList$;
}
export { $m_Lcom_raquo_airstream_core_ObserverList$ as $m_Lcom_raquo_airstream_core_ObserverList$ };
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId = 0;
  this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId = 0;
}
export { $c_Lcom_raquo_airstream_core_Signal$ as $c_Lcom_raquo_airstream_core_Signal$ };
$c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Signal$.prototype.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
export { $h_Lcom_raquo_airstream_core_Signal$ as $h_Lcom_raquo_airstream_core_Signal$ };
$h_Lcom_raquo_airstream_core_Signal$.prototype = $c_Lcom_raquo_airstream_core_Signal$.prototype;
$c_Lcom_raquo_airstream_core_Signal$.prototype.nextUpdateId__I = (function() {
  if ((this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId === 2147483647)) {
    this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId = 1;
  } else {
    this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId = ((1 + this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId) | 0);
  }
  return this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().initClass($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  Lcom_raquo_airstream_core_Signal$: 1
}));
export { $d_Lcom_raquo_airstream_core_Signal$ as $d_Lcom_raquo_airstream_core_Signal$ };
var $n_Lcom_raquo_airstream_core_Signal$;
function $m_Lcom_raquo_airstream_core_Signal$() {
  if ((!$n_Lcom_raquo_airstream_core_Signal$)) {
    $n_Lcom_raquo_airstream_core_Signal$ = new $c_Lcom_raquo_airstream_core_Signal$();
  }
  return $n_Lcom_raquo_airstream_core_Signal$;
}
export { $m_Lcom_raquo_airstream_core_Signal$ as $m_Lcom_raquo_airstream_core_Signal$ };
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction(code) {
  this.Lcom_raquo_airstream_core_Transaction__f_code = null;
  this.Lcom_raquo_airstream_core_Transaction__f_maybePendingObservables = null;
  this.Lcom_raquo_airstream_core_Transaction__f_code = code;
  this.Lcom_raquo_airstream_core_Transaction__f_maybePendingObservables = (void 0);
  $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().add__Lcom_raquo_airstream_core_Transaction__V(this);
}
export { $c_Lcom_raquo_airstream_core_Transaction as $c_Lcom_raquo_airstream_core_Transaction };
$c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
export { $h_Lcom_raquo_airstream_core_Transaction as $h_Lcom_raquo_airstream_core_Transaction };
$h_Lcom_raquo_airstream_core_Transaction.prototype = $c_Lcom_raquo_airstream_core_Transaction.prototype;
function $as_Lcom_raquo_airstream_core_Transaction(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_Transaction) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.Transaction"));
}
export { $as_Lcom_raquo_airstream_core_Transaction as $as_Lcom_raquo_airstream_core_Transaction };
function $isArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_Transaction)));
}
export { $isArrayOf_Lcom_raquo_airstream_core_Transaction as $isArrayOf_Lcom_raquo_airstream_core_Transaction };
function $asArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.Transaction;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_core_Transaction as $asArrayOf_Lcom_raquo_airstream_core_Transaction };
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().initClass($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  Lcom_raquo_airstream_core_Transaction: 1
}));
export { $d_Lcom_raquo_airstream_core_Transaction as $d_Lcom_raquo_airstream_core_Transaction };
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.Lcom_raquo_airstream_core_Transaction$__f_com$raquo$airstream$core$Transaction$$$throwDeadTrxError = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.Lcom_raquo_airstream_core_Transaction$__f_com$raquo$airstream$core$Transaction$$$throwDeadTrxError = new $c_sjsr_AnonFunction1(((trx) => {
    var trx$1 = $as_Lcom_raquo_airstream_core_Transaction(trx);
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx$1) + " after it was already executed."));
  }));
}
export { $c_Lcom_raquo_airstream_core_Transaction$ as $c_Lcom_raquo_airstream_core_Transaction$ };
$c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction$.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
export { $h_Lcom_raquo_airstream_core_Transaction$ as $h_Lcom_raquo_airstream_core_Transaction$ };
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $c_Lcom_raquo_airstream_core_Transaction$.prototype;
$c_Lcom_raquo_airstream_core_Transaction$.prototype.com$raquo$airstream$core$Transaction$$$run__Lcom_raquo_airstream_core_Transaction__V = (function(transaction) {
  try {
    $n($n(transaction).Lcom_raquo_airstream_core_Transaction__f_code).apply__O__O(transaction);
    var this$1 = $n(transaction);
    var x = this$1.Lcom_raquo_airstream_core_Transaction__f_maybePendingObservables;
    if ((x !== (void 0))) {
      var pendingObservables = $as_Lcom_raquo_airstream_util_JsPriorityQueue(x);
      while ($n(pendingObservables).nonEmpty__Z()) {
        $n($as_Lcom_raquo_airstream_core_SyncObservable($n(pendingObservables).dequeue__O())).syncFire__Lcom_raquo_airstream_core_Transaction__V(this$1);
      }
    }
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(e$2);
  } finally {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().done__Lcom_raquo_airstream_core_Transaction__V(transaction);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().initClass($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  Lcom_raquo_airstream_core_Transaction$: 1
}));
export { $d_Lcom_raquo_airstream_core_Transaction$ as $d_Lcom_raquo_airstream_core_Transaction$ };
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
export { $m_Lcom_raquo_airstream_core_Transaction$ as $m_Lcom_raquo_airstream_core_Transaction$ };
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if (($uI($thiz.Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks.length) > 0)) {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((trx) => {
      var trx$1 = $as_Lcom_raquo_airstream_core_Transaction(trx);
      while (($uI($thiz.Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks.length) > 0)) {
        var callback = $as_F1($thiz.Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks.pop());
        try {
          $n(callback).apply__O__O(trx$1);
        } catch (e) {
          var e$1 = e;
          var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
          $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(e$2);
        }
      }
    })));
  }
}
export { $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V as $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V };
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = 0;
  this.Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = 0;
  this.Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_F1.getArrayOf().constr)([])));
}
export { $c_Lcom_raquo_airstream_core_Transaction$onStart$ as $c_Lcom_raquo_airstream_core_Transaction$onStart$ };
$c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
export { $h_Lcom_raquo_airstream_core_Transaction$onStart$ as $h_Lcom_raquo_airstream_core_Transaction$onStart$ };
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().initClass($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  Lcom_raquo_airstream_core_Transaction$onStart$: 1
}));
export { $d_Lcom_raquo_airstream_core_Transaction$onStart$ as $d_Lcom_raquo_airstream_core_Transaction$onStart$ };
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
export { $m_Lcom_raquo_airstream_core_Transaction$onStart$ as $m_Lcom_raquo_airstream_core_Transaction$onStart$ };
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.get(transaction);
}
export { $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O as $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O };
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack.unshift(transaction);
}
export { $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V as $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V };
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack.shift();
}
export { $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O as $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O };
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_airstream_core_Transaction.getArrayOf().constr)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.set(parent, newChildren);
  }
}
export { $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V as $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V };
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O($thiz, parent) {
  var maybeParentChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var x = (((maybeParentChildren === (void 0)) || ($uI(maybeParentChildren.length) > 0)) ? maybeParentChildren : (void 0));
  if ((x === (void 0))) {
    return (void 0);
  } else {
    var nextChild = $as_Lcom_raquo_airstream_core_Transaction(x.shift());
    if (($uI(x.length) === 0)) {
      $uZ($thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.delete(parent));
    }
    return nextChild;
  }
}
export { $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O as $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O };
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack = null;
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_airstream_core_Transaction.getArrayOf().constr)([])));
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children = new Map();
}
export { $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ as $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ };
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
export { $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ as $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ };
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype;
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.add__Lcom_raquo_airstream_core_Transaction__V = (function(newTransaction) {
  var x = this.peekStack__O();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().com$raquo$airstream$core$Transaction$$$run__Lcom_raquo_airstream_core_Transaction__V(newTransaction);
  } else {
    var currentTransaction = $as_Lcom_raquo_airstream_core_Transaction(x);
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, currentTransaction, newTransaction);
  }
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.done__Lcom_raquo_airstream_core_Transaction__V = (function(transaction) {
  var x = this.peekStack__O();
  if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().equals__O__O__Z(transaction, x)))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
  }
  this.putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V(transaction);
  $n(transaction).Lcom_raquo_airstream_core_Transaction__f_code = $m_Lcom_raquo_airstream_core_Transaction$().Lcom_raquo_airstream_core_Transaction$__f_com$raquo$airstream$core$Transaction$$$throwDeadTrxError;
  var x$1 = this.peekStack__O();
  if ((x$1 === (void 0))) {
    if (($uI(this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.size) > 0)) {
      var numChildren = new $c_sr_IntRef(0);
      this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.forEach(((transactions, _$2) => {
        $as_Lcom_raquo_airstream_core_Transaction(_$2);
        var ev$14 = ((numChildren.sr_IntRef__f_elem + $uI(transactions.length)) | 0);
        numChildren.sr_IntRef__f_elem = ev$14;
      }));
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.sr_IntRef__f_elem) + " children for ") + $uI(this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.size)) + " transactions remain. This is a bug in Airstream."));
    }
  } else {
    var nextTransaction = $as_Lcom_raquo_airstream_core_Transaction(x$1);
    $m_Lcom_raquo_airstream_core_Transaction$().com$raquo$airstream$core$Transaction$$$run__Lcom_raquo_airstream_core_Transaction__V(nextTransaction);
  }
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V = (function(doneTransaction) {
  var x = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction);
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
    var x$1 = this.peekStack__O();
    if ((x$1 !== (void 0))) {
      var parentTransaction = $as_Lcom_raquo_airstream_core_Transaction(x$1);
      this.putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V(parentTransaction);
    }
  } else {
    var nextChild = $as_Lcom_raquo_airstream_core_Transaction(x);
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, nextChild);
  }
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.peekStack__O = (function() {
  return this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().initClass($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  Lcom_raquo_airstream_core_Transaction$pendingTransactions$: 1
}));
export { $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ as $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ };
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
}
export { $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ as $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ };
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config(onWillStart, onStart, onStop) {
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onWillStart = null;
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStart = null;
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStop = null;
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onWillStart = onWillStart;
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStart = onStart;
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStop = onStop;
}
export { $c_Lcom_raquo_airstream_custom_CustomSource$Config as $c_Lcom_raquo_airstream_custom_CustomSource$Config };
$c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
export { $h_Lcom_raquo_airstream_custom_CustomSource$Config as $h_Lcom_raquo_airstream_custom_CustomSource$Config };
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype;
function $as_Lcom_raquo_airstream_custom_CustomSource$Config(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_custom_CustomSource$Config) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.custom.CustomSource$Config"));
}
export { $as_Lcom_raquo_airstream_custom_CustomSource$Config as $as_Lcom_raquo_airstream_custom_CustomSource$Config };
function $isArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_custom_CustomSource$Config)));
}
export { $isArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config as $isArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config };
function $asArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.custom.CustomSource$Config;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config as $asArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config };
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().initClass($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  Lcom_raquo_airstream_custom_CustomSource$Config: 1
}));
export { $d_Lcom_raquo_airstream_custom_CustomSource$Config as $d_Lcom_raquo_airstream_custom_CustomSource$Config };
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
export { $c_Lcom_raquo_airstream_custom_CustomSource$Config$ as $c_Lcom_raquo_airstream_custom_CustomSource$Config$ };
$c_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = new $h_O();
$c_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config$;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
export { $h_Lcom_raquo_airstream_custom_CustomSource$Config$ as $h_Lcom_raquo_airstream_custom_CustomSource$Config$ };
$h_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = $c_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype;
$c_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype.apply__F0__F0__Lcom_raquo_airstream_custom_CustomSource$Config = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().initClass($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  Lcom_raquo_airstream_custom_CustomSource$Config$: 1
}));
export { $d_Lcom_raquo_airstream_custom_CustomSource$Config$ as $d_Lcom_raquo_airstream_custom_CustomSource$Config$ };
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
export { $m_Lcom_raquo_airstream_custom_CustomSource$Config$ as $m_Lcom_raquo_airstream_custom_CustomSource$Config$ };
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = $uI($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions.indexOf(subscription));
  if ((index !== (-1))) {
    $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions.splice(index, 1);
    var this$1 = $n($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
    if ((!this$1.isEmpty__Z())) {
      $n(subscription).onDeactivate__V();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
export { $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V as $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V };
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while (($uI($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals.length) > 0)) {
    var subscriptionToRemove = $as_Lcom_raquo_airstream_ownership_DynamicSubscription($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals.shift());
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscriptionToRemove);
  }
}
export { $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V as $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V };
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = false;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled = onAccessAfterKilled;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.getArrayOf().constr)([])));
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = true;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.getArrayOf().constr)([])));
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner = $m_s_None$();
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
}
export { $c_Lcom_raquo_airstream_ownership_DynamicOwner as $c_Lcom_raquo_airstream_ownership_DynamicOwner };
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
export { $h_Lcom_raquo_airstream_ownership_DynamicOwner as $h_Lcom_raquo_airstream_ownership_DynamicOwner };
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.activate__V = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
  if ((!(!this$1.isEmpty__Z()))) {
    var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = ((1 + this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
    try {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled);
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner = new $c_s_Some(newOwner);
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = false;
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
      var i = 0;
      var originalNumSubs = $uI(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions.length);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs) | 0);
        var sub = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions[ix]);
        $n(sub).onActivate__Lcom_raquo_airstream_ownership_Owner__V(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = true;
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
    } finally {
      this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = (((-1) + this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
      if ((this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level === 0)) {
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.deactivate__V = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
  if ((!this$1.isEmpty__Z())) {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = false;
    var arr = this.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions;
    var i = 0;
    var len = $uI(arr.length);
    while ((i < len)) {
      var _$1 = arr[i];
      var _$1$1 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(_$1);
      $n(_$1$1).onDeactivate__V();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = $n(this.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
    if ((!this$4.isEmpty__Z())) {
      var arg1 = this$4.get__O();
      var _$2 = $as_Lcom_raquo_airstream_ownership_Owner(arg1);
      var this$5 = $n(_$2);
      this$5.killSubscriptions__V();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = true;
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.addSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__Z__V = (function(subscription, prepend) {
  if (prepend) {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = ((1 + this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs) | 0);
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions.unshift(subscription);
  } else {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_subscriptions.push(subscription);
  }
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var o = $as_Lcom_raquo_airstream_ownership_Owner(arg1);
    $n(subscription).onActivate__Lcom_raquo_airstream_ownership_Owner__V(o);
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.removeSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__V = (function(subscription) {
  if (this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().initClass($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  Lcom_raquo_airstream_ownership_DynamicOwner: 1
}));
export { $d_Lcom_raquo_airstream_ownership_DynamicOwner as $d_Lcom_raquo_airstream_ownership_DynamicOwner };
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_dynamicOwner = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_dynamicOwner = dynamicOwner;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate = activate;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $m_s_None$();
  $n(dynamicOwner).addSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__Z__V(this, prepend);
}
export { $c_Lcom_raquo_airstream_ownership_DynamicSubscription as $c_Lcom_raquo_airstream_ownership_DynamicSubscription };
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
export { $h_Lcom_raquo_airstream_ownership_DynamicSubscription as $h_Lcom_raquo_airstream_ownership_DynamicSubscription };
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.kill__V = (function() {
  $n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_dynamicOwner).removeSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this);
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.onActivate__Lcom_raquo_airstream_ownership_Owner__V = (function(owner) {
  var this$1 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = ((1 + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
  try {
    this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $as_s_Option($n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate).apply__O__O(owner));
  } finally {
    this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = (((-1) + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
    if ((this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level === 0)) {
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$1);
    }
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.onDeactivate__V = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var currentSubscription = $as_Lcom_raquo_airstream_ownership_Subscription(arg1);
    $n(currentSubscription).kill__V();
    this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $m_s_None$();
  }
});
function $as_Lcom_raquo_airstream_ownership_DynamicSubscription(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_ownership_DynamicSubscription) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.DynamicSubscription"));
}
export { $as_Lcom_raquo_airstream_ownership_DynamicSubscription as $as_Lcom_raquo_airstream_ownership_DynamicSubscription };
function $isArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_DynamicSubscription)));
}
export { $isArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription as $isArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription };
function $asArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.DynamicSubscription;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription as $asArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription };
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().initClass($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  Lcom_raquo_airstream_ownership_DynamicSubscription: 1
}));
export { $d_Lcom_raquo_airstream_ownership_DynamicSubscription as $d_Lcom_raquo_airstream_ownership_DynamicSubscription };
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
export { $c_Lcom_raquo_airstream_ownership_DynamicSubscription$ as $c_Lcom_raquo_airstream_ownership_DynamicSubscription$ };
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
export { $h_Lcom_raquo_airstream_ownership_DynamicSubscription$ as $h_Lcom_raquo_airstream_ownership_DynamicSubscription$ };
$h_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1(((owner) => {
    var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner);
    var value = $n(activate).apply__O__O(owner$1);
    return new $c_s_Some(value);
  })), prepend);
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.subscribeCallback__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1(((owner) => {
    var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner);
    $n(activate).apply__O__O(owner$1);
    return $m_s_None$();
  })), prepend);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().initClass($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  Lcom_raquo_airstream_ownership_DynamicSubscription$: 1
}));
export { $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ as $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ };
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
export { $m_Lcom_raquo_airstream_ownership_DynamicSubscription$ as $m_Lcom_raquo_airstream_ownership_DynamicSubscription$ };
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.com$raquo$airstream$ownership$Owner$_setter_$subscriptions_$eq__Lcom_raquo_ew_JsArray__V($m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_airstream_ownership_Subscription.getArrayOf().constr)([]))));
}
export { $f_Lcom_raquo_airstream_ownership_Owner__$init$__V as $f_Lcom_raquo_airstream_ownership_Owner__$init$__V };
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.subscriptions__Lcom_raquo_ew_JsArray();
  var i = 0;
  var len = $uI(arr.length);
  while ((i < len)) {
    var _$1 = arr[i];
    var _$1$1 = $as_Lcom_raquo_airstream_ownership_Subscription(_$1);
    var this$3 = $n(_$1$1);
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this$3);
    i = ((1 + i) | 0);
  }
  $thiz.subscriptions__Lcom_raquo_ew_JsArray().length = 0;
}
export { $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V as $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V };
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = $uI($thiz.subscriptions__Lcom_raquo_ew_JsArray().indexOf(subscription));
  if ((index !== (-1))) {
    $thiz.subscriptions__Lcom_raquo_ew_JsArray().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
export { $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V as $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V };
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.subscriptions__Lcom_raquo_ew_JsArray().push(subscription);
}
export { $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V as $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V };
function $is_Lcom_raquo_airstream_ownership_Owner(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_ownership_Owner)));
}
export { $is_Lcom_raquo_airstream_ownership_Owner as $is_Lcom_raquo_airstream_ownership_Owner };
function $as_Lcom_raquo_airstream_ownership_Owner(obj) {
  return (($is_Lcom_raquo_airstream_ownership_Owner(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.Owner"));
}
export { $as_Lcom_raquo_airstream_ownership_Owner as $as_Lcom_raquo_airstream_ownership_Owner };
function $isArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_Owner)));
}
export { $isArrayOf_Lcom_raquo_airstream_ownership_Owner as $isArrayOf_Lcom_raquo_airstream_ownership_Owner };
function $asArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.Owner;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_ownership_Owner as $asArrayOf_Lcom_raquo_airstream_ownership_Owner };
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.Lcom_raquo_airstream_ownership_Subscription__f__isKilled)) {
    $n($thiz.Lcom_raquo_airstream_ownership_Subscription__f_cleanup).apply__O();
    $thiz.Lcom_raquo_airstream_ownership_Subscription__f__isKilled = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
export { $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V as $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V };
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.Lcom_raquo_airstream_ownership_Subscription__f_owner = null;
  this.Lcom_raquo_airstream_ownership_Subscription__f_cleanup = null;
  this.Lcom_raquo_airstream_ownership_Subscription__f__isKilled = false;
  this.Lcom_raquo_airstream_ownership_Subscription__f_owner = owner;
  this.Lcom_raquo_airstream_ownership_Subscription__f_cleanup = cleanup;
  this.Lcom_raquo_airstream_ownership_Subscription__f__isKilled = false;
  $n(owner).own__Lcom_raquo_airstream_ownership_Subscription__V(this);
}
export { $c_Lcom_raquo_airstream_ownership_Subscription as $c_Lcom_raquo_airstream_ownership_Subscription };
$c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
export { $h_Lcom_raquo_airstream_ownership_Subscription as $h_Lcom_raquo_airstream_ownership_Subscription };
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $c_Lcom_raquo_airstream_ownership_Subscription.prototype;
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.kill__V = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_Subscription__f_owner);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this$1, this);
});
function $as_Lcom_raquo_airstream_ownership_Subscription(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_ownership_Subscription) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.Subscription"));
}
export { $as_Lcom_raquo_airstream_ownership_Subscription as $as_Lcom_raquo_airstream_ownership_Subscription };
function $isArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_Subscription)));
}
export { $isArrayOf_Lcom_raquo_airstream_ownership_Subscription as $isArrayOf_Lcom_raquo_airstream_ownership_Subscription };
function $asArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.Subscription;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_ownership_Subscription as $asArrayOf_Lcom_raquo_airstream_ownership_Subscription };
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().initClass($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  Lcom_raquo_airstream_ownership_Subscription: 1
}));
export { $d_Lcom_raquo_airstream_ownership_Subscription as $d_Lcom_raquo_airstream_ownership_Subscription };
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = false;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate = activate;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate = deactivate;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = $m_s_None$();
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = false;
}
export { $c_Lcom_raquo_airstream_ownership_TransferableSubscription as $c_Lcom_raquo_airstream_ownership_TransferableSubscription };
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
export { $h_Lcom_raquo_airstream_ownership_TransferableSubscription as $h_Lcom_raquo_airstream_ownership_TransferableSubscription };
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype;
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.isCurrentOwnerActive__Z = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var _$1 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    var this$2 = $n(_$1);
    var this$3 = $n(this$2.Lcom_raquo_airstream_ownership_DynamicSubscription__f_dynamicOwner);
    var this$4 = $n(this$3.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
    return (!this$4.isEmpty__Z());
  } else {
    return false;
  }
});
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.setOwner__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(nextOwner) {
  if (this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var _$2 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    var this$2 = $n(_$2);
    var x$2 = this$2.Lcom_raquo_airstream_ownership_DynamicSubscription__f_dynamicOwner;
    if ((nextOwner === null)) {
      var $x_1 = (x$2 === null);
    } else {
      var this$3 = $n(nextOwner);
      var $x_1 = (this$3 === x$2);
    }
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if (this.isCurrentOwnerActive__Z()) {
      var this$4 = $n(nextOwner);
      var this$5 = $n(this$4.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
      var $x_2 = (!this$5.isEmpty__Z());
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = true;
    }
    var this$6 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription);
    if ((!this$6.isEmpty__Z())) {
      var arg1$1 = this$6.get__O();
      var subscription = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1$1);
      $n(subscription).kill__V();
      this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription(nextOwner, new $c_sjsr_AnonFunction1(((parentOwner) => {
      var parentOwner$1 = $as_Lcom_raquo_airstream_ownership_Owner(parentOwner);
      if ((!this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress)) {
        $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate).apply__O();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner$1, new $c_sjsr_AnonFunction0((() => {
        if ((!this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress)) {
          $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate).apply__O();
        }
      })));
    })), false);
    this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = new $c_s_Some(newPilotSubscription);
    this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = false;
  }
});
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.clearOwner__V = (function() {
  if (this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var subscription = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    $n(subscription).kill__V();
  }
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().initClass($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  Lcom_raquo_airstream_ownership_TransferableSubscription: 1
}));
export { $d_Lcom_raquo_airstream_ownership_TransferableSubscription as $d_Lcom_raquo_airstream_ownership_TransferableSubscription };
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$() {
}
export { $c_Lcom_raquo_airstream_state_Var$ as $c_Lcom_raquo_airstream_state_Var$ };
$c_Lcom_raquo_airstream_state_Var$.prototype = new $h_O();
$c_Lcom_raquo_airstream_state_Var$.prototype.constructor = $c_Lcom_raquo_airstream_state_Var$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$() {
}
export { $h_Lcom_raquo_airstream_state_Var$ as $h_Lcom_raquo_airstream_state_Var$ };
$h_Lcom_raquo_airstream_state_Var$.prototype = $c_Lcom_raquo_airstream_state_Var$.prototype;
$c_Lcom_raquo_airstream_state_Var$.prototype.apply__O__Lcom_raquo_airstream_state_Var = (function(initial) {
  var initial$1 = new $c_s_util_Success(initial);
  return new $c_Lcom_raquo_airstream_state_SourceVar(initial$1);
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().initClass($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  Lcom_raquo_airstream_state_Var$: 1
}));
export { $d_Lcom_raquo_airstream_state_Var$ as $d_Lcom_raquo_airstream_state_Var$ };
var $n_Lcom_raquo_airstream_state_Var$;
function $m_Lcom_raquo_airstream_state_Var$() {
  if ((!$n_Lcom_raquo_airstream_state_Var$)) {
    $n_Lcom_raquo_airstream_state_Var$ = new $c_Lcom_raquo_airstream_state_Var$();
  }
  return $n_Lcom_raquo_airstream_state_Var$;
}
export { $m_Lcom_raquo_airstream_state_Var$ as $m_Lcom_raquo_airstream_state_Var$ };
function $as_Lcom_raquo_airstream_util_JsPriorityQueue(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.util.JsPriorityQueue"));
}
export { $as_Lcom_raquo_airstream_util_JsPriorityQueue as $as_Lcom_raquo_airstream_util_JsPriorityQueue };
function $isArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_util_JsPriorityQueue)));
}
export { $isArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue as $isArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue };
function $asArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.util.JsPriorityQueue;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue as $asArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue };
/** @constructor */
function $c_Lcom_raquo_airstream_web_DomEventStream$() {
}
export { $c_Lcom_raquo_airstream_web_DomEventStream$ as $c_Lcom_raquo_airstream_web_DomEventStream$ };
$c_Lcom_raquo_airstream_web_DomEventStream$.prototype = new $h_O();
$c_Lcom_raquo_airstream_web_DomEventStream$.prototype.constructor = $c_Lcom_raquo_airstream_web_DomEventStream$;
/** @constructor */
function $h_Lcom_raquo_airstream_web_DomEventStream$() {
}
export { $h_Lcom_raquo_airstream_web_DomEventStream$ as $h_Lcom_raquo_airstream_web_DomEventStream$ };
$h_Lcom_raquo_airstream_web_DomEventStream$.prototype = $c_Lcom_raquo_airstream_web_DomEventStream$.prototype;
$c_Lcom_raquo_airstream_web_DomEventStream$.prototype.apply__Lorg_scalajs_dom_EventTarget__T__Z__Lcom_raquo_airstream_core_EventStream = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4(((fireValue, _$1, _$2, _$3) => {
    var fireValue$1 = $as_F1(fireValue);
    $as_F1(_$1);
    $as_F0(_$2);
    $as_F0(_$3);
    var eventHandler = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(fireValue$1);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().apply__F0__F0__Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().initClass($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  Lcom_raquo_airstream_web_DomEventStream$: 1
}));
export { $d_Lcom_raquo_airstream_web_DomEventStream$ as $d_Lcom_raquo_airstream_web_DomEventStream$ };
var $n_Lcom_raquo_airstream_web_DomEventStream$;
function $m_Lcom_raquo_airstream_web_DomEventStream$() {
  if ((!$n_Lcom_raquo_airstream_web_DomEventStream$)) {
    $n_Lcom_raquo_airstream_web_DomEventStream$ = new $c_Lcom_raquo_airstream_web_DomEventStream$();
  }
  return $n_Lcom_raquo_airstream_web_DomEventStream$;
}
export { $m_Lcom_raquo_airstream_web_DomEventStream$ as $m_Lcom_raquo_airstream_web_DomEventStream$ };
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$() {
}
export { $c_Lcom_raquo_ew_JsArray$ as $c_Lcom_raquo_ew_JsArray$ };
$c_Lcom_raquo_ew_JsArray$.prototype = new $h_O();
$c_Lcom_raquo_ew_JsArray$.prototype.constructor = $c_Lcom_raquo_ew_JsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$() {
}
export { $h_Lcom_raquo_ew_JsArray$ as $h_Lcom_raquo_ew_JsArray$ };
$h_Lcom_raquo_ew_JsArray$.prototype = $c_Lcom_raquo_ew_JsArray$.prototype;
$c_Lcom_raquo_ew_JsArray$.prototype.apply__sci_Seq__Lcom_raquo_ew_JsArray = (function(items) {
  return [...$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().initClass($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  Lcom_raquo_ew_JsArray$: 1
}));
export { $d_Lcom_raquo_ew_JsArray$ as $d_Lcom_raquo_ew_JsArray$ };
var $n_Lcom_raquo_ew_JsArray$;
function $m_Lcom_raquo_ew_JsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$)) {
    $n_Lcom_raquo_ew_JsArray$ = new $c_Lcom_raquo_ew_JsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$;
}
export { $m_Lcom_raquo_ew_JsArray$ as $m_Lcom_raquo_ew_JsArray$ };
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$() {
  this.Lcom_raquo_laminar_DomApi$__f_classNamesSeparatorRegex = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.createSvgElement__Lcom_raquo_laminar_tags_SvgTag__Lorg_scalajs_dom_SVGElement($n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).svg__Lcom_raquo_laminar_api_Laminar$svg$()).svg__Lcom_raquo_laminar_tags_SvgTag());
  this.Lcom_raquo_laminar_DomApi$__f_classNamesSeparatorRegex = new RegExp(" ", "g");
}
export { $c_Lcom_raquo_laminar_DomApi$ as $c_Lcom_raquo_laminar_DomApi$ };
$c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$c_Lcom_raquo_laminar_DomApi$.prototype.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
export { $h_Lcom_raquo_laminar_DomApi$ as $h_Lcom_raquo_laminar_DomApi$ };
$h_Lcom_raquo_laminar_DomApi$.prototype = $c_Lcom_raquo_laminar_DomApi$.prototype;
$c_Lcom_raquo_laminar_DomApi$.prototype.appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, child) {
  try {
    $n(parent).ref__Lorg_scalajs_dom_Node().appendChild($n(child).ref__Lorg_scalajs_dom_Node());
    return true;
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && $uZ(($n($as_sjs_js_JavaScriptException(e$2)).sjs_js_JavaScriptException__f_exception instanceof DOMException)))) {
      return false;
    }
    throw e$2;
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, child) {
  try {
    $n(parent).ref__Lorg_scalajs_dom_Node().removeChild($n(child).ref__Lorg_scalajs_dom_Node());
    return true;
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && $uZ(($n($as_sjs_js_JavaScriptException(e$2)).sjs_js_JavaScriptException__f_exception instanceof DOMException)))) {
      return false;
    }
    throw e$2;
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.insertBefore__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, newChild, referenceChild) {
  try {
    $n(parent).ref__Lorg_scalajs_dom_Node().insertBefore($n(newChild).ref__Lorg_scalajs_dom_Node(), $n(referenceChild).ref__Lorg_scalajs_dom_Node());
    return true;
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && $uZ(($n($as_sjs_js_JavaScriptException(e$2)).sjs_js_JavaScriptException__f_exception instanceof DOMException)))) {
      return false;
    }
    throw e$2;
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, newChild, oldChild) {
  try {
    $n(parent).ref__Lorg_scalajs_dom_Node().replaceChild($n(newChild).ref__Lorg_scalajs_dom_Node(), $n(oldChild).ref__Lorg_scalajs_dom_Node());
    return true;
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && $uZ(($n($as_sjs_js_JavaScriptException(e$2)).sjs_js_JavaScriptException__f_exception instanceof DOMException)))) {
      return false;
    }
    throw e$2;
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.addEventListener__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_modifiers_EventListener__V = (function(element, listener) {
  var this$1 = $n(element);
  var $x_3 = this$1.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref;
  var prop = $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  var $x_2 = $n($n(prop).Lcom_raquo_laminar_keys_EventProcessor__f_eventProp).Lcom_raquo_laminar_keys_EventProp__f_name;
  var $x_1 = $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_domCallback;
  var prop$1 = $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  $x_3.addEventListener($x_2, $x_1, $n(prop$1).Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.removeEventListener__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_modifiers_EventListener__V = (function(element, listener) {
  var this$1 = $n(element);
  var $x_3 = this$1.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref;
  var prop = $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  var $x_2 = $n($n(prop).Lcom_raquo_laminar_keys_EventProcessor__f_eventProp).Lcom_raquo_laminar_keys_EventProp__f_name;
  var $x_1 = $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_domCallback;
  var prop$1 = $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  $x_3.removeEventListener($x_2, $x_1, $n(prop$1).Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createHtmlElement__Lcom_raquo_laminar_tags_HtmlTag__Lorg_scalajs_dom_HTMLElement = (function(tag) {
  return document.createElement($n(tag).Lcom_raquo_laminar_tags_HtmlTag__f_name);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O = (function(element, attr) {
  var x = this.getHtmlAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O(element, attr);
  if ((x === (void 0))) {
    return (void 0);
  } else {
    var domValue = $as_T(x);
    var a = $n($n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_codec).decode__O__O(domValue);
    return a;
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getHtmlAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O = (function(element, attr) {
  var domValue = $as_T($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.getAttributeNS(null, $n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_name));
  return ((domValue !== null) ? domValue : (void 0));
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O__V = (function(element, attr, value) {
  var domValue = $as_T($n($n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_codec).encode__O__O(value));
  this.setHtmlAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__T__V(element, attr, domValue);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setHtmlAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__T__V = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.removeHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__V(element, attr);
  } else {
    $n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.setAttribute($n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_name, domValue);
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.removeHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__V = (function(element, attr) {
  $n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.removeAttribute($n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_name);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createSvgElement__Lcom_raquo_laminar_tags_SvgTag__Lorg_scalajs_dom_SVGElement = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", $n(tag).Lcom_raquo_laminar_tags_SvgTag__f_name);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__O = (function(element, attr) {
  var x = this.getSvgAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__O(element, attr);
  if ((x === (void 0))) {
    return (void 0);
  } else {
    var domValue = $as_T(x);
    var a = $n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_codec).decode__O__O(domValue);
    return a;
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getSvgAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__O = (function(element, attr) {
  var $x_2 = $n(element).ref__Lorg_scalajs_dom_SVGElement();
  var this$2 = $n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri);
  var this$1 = $m_s_$less$colon$less$();
  var ev = this$1.s_$less$colon$less$__f_singleton;
  var $x_1 = $x_2.getAttributeNS($as_T((this$2.isEmpty__Z() ? ($n(ev), null) : this$2.get__O())), $n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_localName);
  var domValue = $as_T($x_1);
  return ((domValue !== null) ? domValue : (void 0));
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__O__V = (function(element, attr, value) {
  var domValue = $as_T($n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_codec).encode__O__O(value));
  this.setSvgAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__T__V(element, attr, domValue);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setSvgAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__T__V = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.removeSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__V(element, attr);
  } else {
    var $x_1 = $n(element).ref__Lorg_scalajs_dom_SVGElement();
    var this$2 = $n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri);
    var this$1 = $m_s_$less$colon$less$();
    var ev = this$1.s_$less$colon$less$__f_singleton;
    $x_1.setAttributeNS($as_T((this$2.isEmpty__Z() ? ($n(ev), null) : this$2.get__O())), $n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_name, domValue);
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.removeSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__V = (function(element, attr) {
  var $x_1 = $n(element).ref__Lorg_scalajs_dom_SVGElement();
  var this$2 = $n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri);
  var this$1 = $m_s_$less$colon$less$();
  var ev = this$1.s_$less$colon$less$__f_singleton;
  $x_1.removeAttributeNS($as_T((this$2.isEmpty__Z() ? ($n(ev), null) : this$2.get__O())), $n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_localName);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createCommentNode__T__Lorg_scalajs_dom_Comment = (function(text) {
  return document.createComment(text);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createTextNode__T__Lorg_scalajs_dom_Text = (function(text) {
  return document.createTextNode(text);
});
$c_Lcom_raquo_laminar_DomApi$.prototype.debugPath__Lorg_scalajs_dom_Node__sci_List__sci_List = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    var x49 = element$tailLocal1;
    if ((x49 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var elem$2 = this.debugNodeDescription__Lorg_scalajs_dom_Node__T(element$tailLocal1);
    var this$1 = $n(initial$tailLocal1);
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(elem$2, this$1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.debugNodeDescription__Lorg_scalajs_dom_Node__T = (function(node) {
  if ($uZ((node instanceof HTMLElement))) {
    var id = $as_T(node.id);
    var this$3 = $n(id);
    if ((!(this$3 === ""))) {
      var suffixStr = ("#" + id);
    } else {
      var classes = $as_T(node.className);
      var this$6 = $n(classes);
      if ((!(this$6 === ""))) {
        var self = classes.replace(this.Lcom_raquo_laminar_DomApi$__f_classNamesSeparatorRegex, ".");
        var suffixStr = ("." + $as_T(self));
      } else {
        var suffixStr = "";
      }
    }
    var str = $as_T(node.tagName);
    var self$1 = str.toLowerCase();
    return ($as_T(self$1) + suffixStr);
  } else {
    return $as_T(node.nodeName);
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.debugNodeOuterHtml__Lorg_scalajs_dom_Node__T = (function(node) {
  return ($uZ((node instanceof Element)) ? $as_T(node.outerHTML) : ($uZ((node instanceof Text)) ? (("Text(" + $as_T(node.textContent)) + ")") : ($uZ((node instanceof Comment)) ? (("Comment(" + $as_T(node.textContent)) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T($n(node))) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().initClass($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  Lcom_raquo_laminar_DomApi$: 1
}));
export { $d_Lcom_raquo_laminar_DomApi$ as $d_Lcom_raquo_laminar_DomApi$ };
var $n_Lcom_raquo_laminar_DomApi$;
function $m_Lcom_raquo_laminar_DomApi$() {
  if ((!$n_Lcom_raquo_laminar_DomApi$)) {
    $n_Lcom_raquo_laminar_DomApi$ = new $c_Lcom_raquo_laminar_DomApi$();
  }
  return $n_Lcom_raquo_laminar_DomApi$;
}
export { $m_Lcom_raquo_laminar_DomApi$ as $m_Lcom_raquo_laminar_DomApi$ };
function $f_Lcom_raquo_laminar_api_Airstream__$init$__V($thiz) {
  $m_Lcom_raquo_airstream_core_Observer$();
  $m_Lcom_raquo_airstream_core_AirstreamError$();
  $thiz.Lcom_raquo_laminar_api_package$$anon$1__f_Var = $m_Lcom_raquo_airstream_state_Var$();
}
export { $f_Lcom_raquo_laminar_api_Airstream__$init$__V as $f_Lcom_raquo_laminar_api_Airstream__$init$__V };
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec = ($m_Lcom_raquo_laminar_codecs_package$(), new $c_Lcom_raquo_laminar_codecs_package$$anon$2());
  $m_Lcom_raquo_laminar_codecs_package$();
  $m_Lcom_raquo_laminar_codecs_package$();
}
export { $c_Lcom_raquo_laminar_codecs_package$ as $c_Lcom_raquo_laminar_codecs_package$ };
$c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$c_Lcom_raquo_laminar_codecs_package$.prototype.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
export { $h_Lcom_raquo_laminar_codecs_package$ as $h_Lcom_raquo_laminar_codecs_package$ };
$h_Lcom_raquo_laminar_codecs_package$.prototype = $c_Lcom_raquo_laminar_codecs_package$.prototype;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().initClass($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  Lcom_raquo_laminar_codecs_package$: 1
}));
export { $d_Lcom_raquo_laminar_codecs_package$ as $d_Lcom_raquo_laminar_codecs_package$ };
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
export { $m_Lcom_raquo_laminar_codecs_package$ as $m_Lcom_raquo_laminar_codecs_package$ };
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.Lcom_raquo_laminar_api_package$$anon$1__f_className = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
export { $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V as $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V };
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.Lcom_raquo_laminar_keys_HtmlAttr__f_name, new $c_sjsr_AnonFunction1(((el) => {
    var el$1 = $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(el);
    var x = $m_Lcom_raquo_laminar_DomApi$().getHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O(el$1, attr);
    return $as_T(((x === (void 0)) ? "" : x));
  })), new $c_sjsr_AnonFunction2(((el$2, value) => {
    var el$3 = $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(el$2);
    var value$1 = $as_T(value);
    $m_Lcom_raquo_laminar_DomApi$().setHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O__V(el$3, attr, value$1);
  })), separator);
}
export { $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey as $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey };
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.Lcom_raquo_laminar_api_Laminar$svg$__f_className = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
export { $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V as $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V };
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.Lcom_raquo_laminar_keys_SvgAttr__f_name, new $c_sjsr_AnonFunction1(((el) => {
    var el$1 = $as_Lcom_raquo_laminar_nodes_ReactiveSvgElement(el);
    var x = $m_Lcom_raquo_laminar_DomApi$().getSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__O(el$1, attr);
    return $as_T(((x === (void 0)) ? "" : x));
  })), new $c_sjsr_AnonFunction2(((el$2, value) => {
    var el$3 = $as_Lcom_raquo_laminar_nodes_ReactiveSvgElement(el$2);
    var value$1 = $as_T(value);
    $m_Lcom_raquo_laminar_DomApi$().setSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__O__V(el$3, attr, value$1);
  })), separator);
}
export { $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey as $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey };
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, processor) {
  this.Lcom_raquo_laminar_keys_EventProcessor__f_eventProp = null;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture = false;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_processor = null;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_eventProp = eventProp;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture = shouldUseCapture;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_processor = processor;
}
export { $c_Lcom_raquo_laminar_keys_EventProcessor as $c_Lcom_raquo_laminar_keys_EventProcessor };
$c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_EventProcessor.prototype.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
export { $h_Lcom_raquo_laminar_keys_EventProcessor as $h_Lcom_raquo_laminar_keys_EventProcessor };
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype;
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().initClass($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  Lcom_raquo_laminar_keys_EventProcessor: 1
}));
export { $d_Lcom_raquo_laminar_keys_EventProcessor as $d_Lcom_raquo_laminar_keys_EventProcessor };
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor$() {
}
export { $c_Lcom_raquo_laminar_keys_EventProcessor$ as $c_Lcom_raquo_laminar_keys_EventProcessor$ };
$c_Lcom_raquo_laminar_keys_EventProcessor$.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_EventProcessor$.prototype.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor$() {
}
export { $h_Lcom_raquo_laminar_keys_EventProcessor$ as $h_Lcom_raquo_laminar_keys_EventProcessor$ };
$h_Lcom_raquo_laminar_keys_EventProcessor$.prototype = $c_Lcom_raquo_laminar_keys_EventProcessor$.prototype;
$c_Lcom_raquo_laminar_keys_EventProcessor$.prototype.empty__Lcom_raquo_laminar_keys_EventProp__Z__Lcom_raquo_laminar_keys_EventProcessor = (function(eventProp, shouldUseCapture) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, new $c_sjsr_AnonFunction1(((_$11) => new $c_s_Some(_$11))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().initClass($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  Lcom_raquo_laminar_keys_EventProcessor$: 1
}));
export { $d_Lcom_raquo_laminar_keys_EventProcessor$ as $d_Lcom_raquo_laminar_keys_EventProcessor$ };
var $n_Lcom_raquo_laminar_keys_EventProcessor$;
function $m_Lcom_raquo_laminar_keys_EventProcessor$() {
  if ((!$n_Lcom_raquo_laminar_keys_EventProcessor$)) {
    $n_Lcom_raquo_laminar_keys_EventProcessor$ = new $c_Lcom_raquo_laminar_keys_EventProcessor$();
  }
  return $n_Lcom_raquo_laminar_keys_EventProcessor$;
}
export { $m_Lcom_raquo_laminar_keys_EventProcessor$ as $m_Lcom_raquo_laminar_keys_EventProcessor$ };
/** @constructor */
function $c_Lcom_raquo_laminar_keys_Key() {
}
export { $c_Lcom_raquo_laminar_keys_Key as $c_Lcom_raquo_laminar_keys_Key };
$c_Lcom_raquo_laminar_keys_Key.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_Key.prototype.constructor = $c_Lcom_raquo_laminar_keys_Key;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_Key() {
}
export { $h_Lcom_raquo_laminar_keys_Key as $h_Lcom_raquo_laminar_keys_Key };
$h_Lcom_raquo_laminar_keys_Key.prototype = $c_Lcom_raquo_laminar_keys_Key.prototype;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
}
export { $c_Lcom_raquo_laminar_keys_SvgAttr$ as $c_Lcom_raquo_laminar_keys_SvgAttr$ };
$c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_SvgAttr$.prototype.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
export { $h_Lcom_raquo_laminar_keys_SvgAttr$ as $h_Lcom_raquo_laminar_keys_SvgAttr$ };
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype;
$c_Lcom_raquo_laminar_keys_SvgAttr$.prototype.namespaceUri__T__T = (function(namespace) {
  switch (namespace) {
    case "svg": {
      return "http://www.w3.org/2000/svg";
      break;
    }
    case "xlink": {
      return "http://www.w3.org/1999/xlink";
      break;
    }
    case "xml": {
      return "http://www.w3.org/XML/1998/namespace";
      break;
    }
    case "xmlns": {
      return "http://www.w3.org/2000/xmlns/";
      break;
    }
    default: {
      throw new $c_s_MatchError(namespace);
    }
  }
});
var $d_Lcom_raquo_laminar_keys_SvgAttr$ = new $TypeData().initClass($c_Lcom_raquo_laminar_keys_SvgAttr$, "com.raquo.laminar.keys.SvgAttr$", ({
  Lcom_raquo_laminar_keys_SvgAttr$: 1
}));
export { $d_Lcom_raquo_laminar_keys_SvgAttr$ as $d_Lcom_raquo_laminar_keys_SvgAttr$ };
var $n_Lcom_raquo_laminar_keys_SvgAttr$;
function $m_Lcom_raquo_laminar_keys_SvgAttr$() {
  if ((!$n_Lcom_raquo_laminar_keys_SvgAttr$)) {
    $n_Lcom_raquo_laminar_keys_SvgAttr$ = new $c_Lcom_raquo_laminar_keys_SvgAttr$();
  }
  return $n_Lcom_raquo_laminar_keys_SvgAttr$;
}
export { $m_Lcom_raquo_laminar_keys_SvgAttr$ as $m_Lcom_raquo_laminar_keys_SvgAttr$ };
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_InsertContext(parentNode, sentinelNode, strictMode, extraNodeCount, extraNodes, extraNodesMap) {
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode = false;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = 0;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode = parentNode;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = sentinelNode;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode = strictMode;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = extraNodeCount;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = extraNodes;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap = extraNodesMap;
}
export { $c_Lcom_raquo_laminar_lifecycle_InsertContext as $c_Lcom_raquo_laminar_lifecycle_InsertContext };
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_InsertContext() {
}
export { $h_Lcom_raquo_laminar_lifecycle_InsertContext as $h_Lcom_raquo_laminar_lifecycle_InsertContext };
$h_Lcom_raquo_laminar_lifecycle_InsertContext.prototype = $c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype;
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.forceSetStrictMode__V = (function() {
  if ((this.Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode || (this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount !== 0))) {
    var $x_1 = $m_Lcom_raquo_laminar_DomApi$();
    var this$1 = $n(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode);
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $n($x_1).debugNodeOuterHtml__Lorg_scalajs_dom_Node__T(this$1.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref)));
  }
  if ((this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap === null)) {
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap = new Map();
  }
  if ((!$uZ(($n(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode).ref__Lorg_scalajs_dom_Node() instanceof Comment)))) {
    var contentNode = this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I__Z(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, newSentinelNode, $m_Lcom_raquo_laminar_nodes_ParentNode$().indexOfChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, contentNode));
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = newSentinelNode;
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = 1;
    var this$2 = $m_sci_Nil$();
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = new $c_sci_$colon$colon(contentNode, this$2);
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap.set($n(contentNode).ref__Lorg_scalajs_dom_Node(), contentNode);
  }
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode = true;
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.removeOldChildNodesFromDOM__Lcom_raquo_laminar_nodes_ChildNode__V = (function(after) {
  var elem = this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = $n(after).ref__Lorg_scalajs_dom_Node().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        var prevChild = $as_Lcom_raquo_laminar_nodes_ChildNode(maybePrevChild);
        $m_Lcom_raquo_laminar_nodes_ParentNode$().removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, prevChild);
        var ev$5 = (((-1) + elem$1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
function $as_Lcom_raquo_laminar_lifecycle_InsertContext(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_lifecycle_InsertContext) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.lifecycle.InsertContext"));
}
export { $as_Lcom_raquo_laminar_lifecycle_InsertContext as $as_Lcom_raquo_laminar_lifecycle_InsertContext };
function $isArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_lifecycle_InsertContext)));
}
export { $isArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext as $isArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext };
function $asArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.lifecycle.InsertContext;", depth));
}
export { $asArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext as $asArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext };
var $d_Lcom_raquo_laminar_lifecycle_InsertContext = new $TypeData().initClass($c_Lcom_raquo_laminar_lifecycle_InsertContext, "com.raquo.laminar.lifecycle.InsertContext", ({
  Lcom_raquo_laminar_lifecycle_InsertContext: 1
}));
export { $d_Lcom_raquo_laminar_lifecycle_InsertContext as $d_Lcom_raquo_laminar_lifecycle_InsertContext };
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_InsertContext$() {
}
export { $c_Lcom_raquo_laminar_lifecycle_InsertContext$ as $c_Lcom_raquo_laminar_lifecycle_InsertContext$ };
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_InsertContext$;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_InsertContext$() {
}
export { $h_Lcom_raquo_laminar_lifecycle_InsertContext$ as $h_Lcom_raquo_laminar_lifecycle_InsertContext$ };
$h_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype = $c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype;
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.reserveSpotContext__Lcom_raquo_laminar_nodes_ReactiveElement__Z__Lcom_raquo_laminar_lifecycle_InsertContext = (function(parentNode, strictMode) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, sentinelNode);
  return new $c_Lcom_raquo_laminar_lifecycle_InsertContext(parentNode, sentinelNode, strictMode, 0, $m_sci_Nil$(), (strictMode ? new Map() : null));
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.nodesToMap__sci_Seq__Lcom_raquo_ew_JsMap = (function(nodes) {
  var acc = new Map();
  $n(nodes).foreach__F1__V(new $c_sjsr_AnonFunction1(((node) => {
    var node$1 = $as_Lcom_raquo_laminar_nodes_ChildNode(node);
    return acc.set($n(node$1).ref__Lorg_scalajs_dom_Node(), node$1);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_lifecycle_InsertContext$ = new $TypeData().initClass($c_Lcom_raquo_laminar_lifecycle_InsertContext$, "com.raquo.laminar.lifecycle.InsertContext$", ({
  Lcom_raquo_laminar_lifecycle_InsertContext$: 1
}));
export { $d_Lcom_raquo_laminar_lifecycle_InsertContext$ as $d_Lcom_raquo_laminar_lifecycle_InsertContext$ };
var $n_Lcom_raquo_laminar_lifecycle_InsertContext$;
function $m_Lcom_raquo_laminar_lifecycle_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_lifecycle_InsertContext$)) {
    $n_Lcom_raquo_laminar_lifecycle_InsertContext$ = new $c_Lcom_raquo_laminar_lifecycle_InsertContext$();
  }
  return $n_Lcom_raquo_laminar_lifecycle_InsertContext$;
}
export { $m_Lcom_raquo_laminar_lifecycle_InsertContext$ as $m_Lcom_raquo_laminar_lifecycle_InsertContext$ };
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_MountContext(thisNode, owner) {
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode = null;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_owner = null;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode = thisNode;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_owner = owner;
}
export { $c_Lcom_raquo_laminar_lifecycle_MountContext as $c_Lcom_raquo_laminar_lifecycle_MountContext };
$c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_MountContext.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
export { $h_Lcom_raquo_laminar_lifecycle_MountContext as $h_Lcom_raquo_laminar_lifecycle_MountContext };
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype;
function $as_Lcom_raquo_laminar_lifecycle_MountContext(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_lifecycle_MountContext) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.lifecycle.MountContext"));
}
export { $as_Lcom_raquo_laminar_lifecycle_MountContext as $as_Lcom_raquo_laminar_lifecycle_MountContext };
function $isArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_lifecycle_MountContext)));
}
export { $isArrayOf_Lcom_raquo_laminar_lifecycle_MountContext as $isArrayOf_Lcom_raquo_laminar_lifecycle_MountContext };
function $asArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.lifecycle.MountContext;", depth));
}
export { $asArrayOf_Lcom_raquo_laminar_lifecycle_MountContext as $asArrayOf_Lcom_raquo_laminar_lifecycle_MountContext };
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().initClass($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  Lcom_raquo_laminar_lifecycle_MountContext: 1
}));
export { $d_Lcom_raquo_laminar_lifecycle_MountContext as $d_Lcom_raquo_laminar_lifecycle_MountContext };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_ChildInserter$() {
}
export { $c_Lcom_raquo_laminar_modifiers_ChildInserter$ as $c_Lcom_raquo_laminar_modifiers_ChildInserter$ };
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_ChildInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_ChildInserter$() {
}
export { $h_Lcom_raquo_laminar_modifiers_ChildInserter$ as $h_Lcom_raquo_laminar_modifiers_ChildInserter$ };
$h_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype = $c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype;
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype.apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__Lcom_raquo_laminar_modifiers_Inserter = (function(childSource, renderable) {
  return new $c_Lcom_raquo_laminar_modifiers_Inserter($m_s_None$(), true, new $c_sjsr_AnonFunction2(((ctx, owner) => {
    var ctx$1 = $as_Lcom_raquo_laminar_lifecycle_InsertContext(ctx);
    var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner);
    if ((!$n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode)) {
      $n(ctx$1).forceSetStrictMode__V();
    }
    var maybeLastSeenChild = new $c_sr_ObjectRef((void 0));
    var this$16 = $n(childSource);
    var onNext = new $c_sjsr_AnonFunction1(((newComponent) => {
      var newChildNode = $n(renderable).asNode__O__Lcom_raquo_laminar_nodes_ChildNode(newComponent);
      var elem = $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount;
      var elem$1 = 0;
      elem$1 = elem;
      var x = maybeLastSeenChild.sr_ObjectRef__f_elem;
      if ((x === (void 0))) {
        var $x_1 = true;
      } else {
        var _$1 = $as_Lcom_raquo_laminar_nodes_ChildNode(x);
        var x$1 = $n(_$1).ref__Lorg_scalajs_dom_Node();
        var y = $n($n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode).ref__Lorg_scalajs_dom_Node().nextSibling;
        var $x_1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y);
      }
      if ($x_1) {
        var x$2 = x;
      } else {
        var x$2 = (void 0);
      }
      if ((x$2 === (void 0))) {
        var sentinelNodeIndex = $m_Lcom_raquo_laminar_nodes_ParentNode$().indexOfChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I($n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode);
        $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I__Z($n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, newChildNode, ((1 + sentinelNodeIndex) | 0));
      } else {
        var lastSeenChild = $as_Lcom_raquo_laminar_nodes_ChildNode(x$2);
        var replaced = $m_Lcom_raquo_laminar_nodes_ParentNode$().replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z($n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, lastSeenChild, newChildNode);
        if ((replaced || (lastSeenChild === newChildNode))) {
          var ev$3 = (((-1) + elem$1) | 0);
          elem$1 = ev$3;
        }
      }
      $n(ctx$1).removeOldChildNodesFromDOM__Lcom_raquo_laminar_nodes_ChildNode__V(newChildNode);
      $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap.clear();
      $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap.set($n(newChildNode).ref__Lorg_scalajs_dom_Node(), newChildNode);
      var $x_2 = $n(ctx$1);
      var this$15 = $m_sci_Nil$();
      $x_2.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = new $c_sci_$colon$colon(newChildNode, this$15);
      $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = 1;
      var ev$4 = newChildNode;
      maybeLastSeenChild.sr_ObjectRef__f_elem = ev$4;
      ev$4 = null;
    }));
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this$16, onNext, owner$1);
  })));
});
var $d_Lcom_raquo_laminar_modifiers_ChildInserter$ = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_ChildInserter$, "com.raquo.laminar.modifiers.ChildInserter$", ({
  Lcom_raquo_laminar_modifiers_ChildInserter$: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_ChildInserter$ as $d_Lcom_raquo_laminar_modifiers_ChildInserter$ };
var $n_Lcom_raquo_laminar_modifiers_ChildInserter$;
function $m_Lcom_raquo_laminar_modifiers_ChildInserter$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_ChildInserter$)) {
    $n_Lcom_raquo_laminar_modifiers_ChildInserter$ = new $c_Lcom_raquo_laminar_modifiers_ChildInserter$();
  }
  return $n_Lcom_raquo_laminar_modifiers_ChildInserter$;
}
export { $m_Lcom_raquo_laminar_modifiers_ChildInserter$ as $m_Lcom_raquo_laminar_modifiers_ChildInserter$ };
function $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__sci_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__I($thiz, prevChildren, nextChildren, nextChildrenMap, parentNode, sentinelNode, prevChildrenCount) {
  var this$1 = $n(parentNode);
  var liveNodeList = this$1.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.childNodes;
  var sentinelIndex = $m_Lcom_raquo_laminar_nodes_ParentNode$().indexOfChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I(parentNode, sentinelNode);
  var index = new $c_sr_IntRef(0);
  var currentChildrenCount = new $c_sr_IntRef(prevChildrenCount);
  var elem = liveNodeList[((1 + sentinelIndex) | 0)];
  var prevChildRef = new $c_sr_ObjectRef(elem);
  $n(nextChildren).foreach__F1__V(new $c_sjsr_AnonFunction1(((nextChild) => {
    var nextChild$1 = $as_Lcom_raquo_laminar_nodes_ChildNode(nextChild);
    var nextChildNodeIndex = ((1 + ((sentinelIndex + index.sr_IntRef__f_elem) | 0)) | 0);
    if ((currentChildrenCount.sr_IntRef__f_elem <= index.sr_IntRef__f_elem)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I__Z(parentNode, nextChild$1, nextChildNodeIndex);
      var ev$3 = $n(nextChild$1).ref__Lorg_scalajs_dom_Node();
      prevChildRef.sr_ObjectRef__f_elem = ev$3;
      ev$3 = null;
      var ev$4 = ((1 + currentChildrenCount.sr_IntRef__f_elem) | 0);
      currentChildrenCount.sr_IntRef__f_elem = ev$4;
    } else {
      var x = $n(nextChild$1).ref__Lorg_scalajs_dom_Node();
      var y = prevChildRef.sr_ObjectRef__f_elem;
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        if ((!$uZ(prevChildren.has($n(nextChild$1).ref__Lorg_scalajs_dom_Node())))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I__Z(parentNode, nextChild$1, nextChildNodeIndex);
          var ev$5 = $n(nextChild$1).ref__Lorg_scalajs_dom_Node();
          prevChildRef.sr_ObjectRef__f_elem = ev$5;
          ev$5 = null;
          var ev$6 = ((1 + currentChildrenCount.sr_IntRef__f_elem) | 0);
          currentChildrenCount.sr_IntRef__f_elem = ev$6;
        } else {
          while (true) {
            var x$1 = $n(nextChild$1).ref__Lorg_scalajs_dom_Node();
            var y$1 = prevChildRef.sr_ObjectRef__f_elem;
            if (((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y$1)) && (!$p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.sr_ObjectRef__f_elem)))) {
              var nextPrevChildRef = prevChildRef.sr_ObjectRef__f_elem.nextSibling;
              var prevChild = $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.sr_ObjectRef__f_elem);
              $m_Lcom_raquo_laminar_nodes_ParentNode$().removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, prevChild);
              var ev$7 = nextPrevChildRef;
              prevChildRef.sr_ObjectRef__f_elem = ev$7;
              ev$7 = null;
              var ev$8 = (((-1) + currentChildrenCount.sr_IntRef__f_elem) | 0);
              currentChildrenCount.sr_IntRef__f_elem = ev$8;
            } else {
              break;
            }
          }
          var x$2 = $n(nextChild$1).ref__Lorg_scalajs_dom_Node();
          var y$2 = prevChildRef.sr_ObjectRef__f_elem;
          if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$2, y$2))) {
            $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I__Z(parentNode, nextChild$1, nextChildNodeIndex);
            var ev$9 = $n(nextChild$1).ref__Lorg_scalajs_dom_Node();
            prevChildRef.sr_ObjectRef__f_elem = ev$9;
            ev$9 = null;
          }
        }
      }
    }
    if ((prevChildRef.sr_ObjectRef__f_elem.nextSibling === null)) {
      var ev$10 = ((1 + index.sr_IntRef__f_elem) | 0);
      currentChildrenCount.sr_IntRef__f_elem = ev$10;
    } else {
      var ev$11 = prevChildRef.sr_ObjectRef__f_elem.nextSibling;
      prevChildRef.sr_ObjectRef__f_elem = ev$11;
      ev$11 = null;
    }
    var ev$12 = ((1 + index.sr_IntRef__f_elem) | 0);
    index.sr_IntRef__f_elem = ev$12;
  })));
  while ((index.sr_IntRef__f_elem < currentChildrenCount.sr_IntRef__f_elem)) {
    var nextPrevChildRef$1 = prevChildRef.sr_ObjectRef__f_elem.nextSibling;
    var prevChild$1 = $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.sr_ObjectRef__f_elem);
    $m_Lcom_raquo_laminar_nodes_ParentNode$().removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, prevChild$1);
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.sr_ObjectRef__f_elem = ev$13;
    ev$13 = null;
    var ev$14 = (((-1) + currentChildrenCount.sr_IntRef__f_elem) | 0);
    currentChildrenCount.sr_IntRef__f_elem = ev$14;
  }
  return currentChildrenCount.sr_IntRef__f_elem;
}
export { $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__sci_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__I as $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__sci_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__I };
function $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, ref) {
  return $uZ(nextChildrenMap.has(ref));
}
export { $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z as $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z };
function $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, ref) {
  var x = prevChildren.get(ref);
  if ((x === (void 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("prevChildFromRef[children]: not found for " + ref));
  }
  return $as_Lcom_raquo_laminar_nodes_ChildNode(x);
}
export { $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode as $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$() {
}
export { $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$ as $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$ };
$c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_ChildrenInserter$() {
}
export { $h_Lcom_raquo_laminar_modifiers_ChildrenInserter$ as $h_Lcom_raquo_laminar_modifiers_ChildrenInserter$ };
$h_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype = $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype;
$c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype.apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__Lcom_raquo_laminar_modifiers_Inserter = (function(childrenSource, renderableNode) {
  return new $c_Lcom_raquo_laminar_modifiers_Inserter($m_s_None$(), true, new $c_sjsr_AnonFunction2(((ctx, owner) => {
    var ctx$1 = $as_Lcom_raquo_laminar_lifecycle_InsertContext(ctx);
    var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner);
    if ((!$n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode)) {
      $n(ctx$1).forceSetStrictMode__V();
    }
    var elem = $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes;
    var maybeLastSeenChildren = new $c_sr_ObjectRef(elem);
    var this$4 = $n(childrenSource);
    var onNext = new $c_sjsr_AnonFunction1(((components) => {
      var components$1 = $as_sci_Seq(components);
      var newChildren = $n(renderableNode).asNodeSeq__sci_Seq__sci_Seq(components$1);
      var ev$2 = newChildren;
      maybeLastSeenChildren.sr_ObjectRef__f_elem = ev$2;
      ev$2 = null;
      var newChildrenMap = $m_Lcom_raquo_laminar_lifecycle_InsertContext$().nodesToMap__sci_Seq__Lcom_raquo_ew_JsMap(newChildren);
      $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__sci_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__I(this, $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap, newChildren, newChildrenMap, $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode, $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount);
      $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = newChildren;
      $n(ctx$1).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap = newChildrenMap;
    }));
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this$4, onNext, owner$1);
  })));
});
var $d_Lcom_raquo_laminar_modifiers_ChildrenInserter$ = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_ChildrenInserter$, "com.raquo.laminar.modifiers.ChildrenInserter$", ({
  Lcom_raquo_laminar_modifiers_ChildrenInserter$: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_ChildrenInserter$ as $d_Lcom_raquo_laminar_modifiers_ChildrenInserter$ };
var $n_Lcom_raquo_laminar_modifiers_ChildrenInserter$;
function $m_Lcom_raquo_laminar_modifiers_ChildrenInserter$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_ChildrenInserter$)) {
    $n_Lcom_raquo_laminar_modifiers_ChildrenInserter$ = new $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$();
  }
  return $n_Lcom_raquo_laminar_modifiers_ChildrenInserter$;
}
export { $m_Lcom_raquo_laminar_modifiers_ChildrenInserter$ as $m_Lcom_raquo_laminar_modifiers_ChildrenInserter$ };
function $is_Lcom_raquo_laminar_modifiers_Modifier(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_modifiers_Modifier)));
}
export { $is_Lcom_raquo_laminar_modifiers_Modifier as $is_Lcom_raquo_laminar_modifiers_Modifier };
function $as_Lcom_raquo_laminar_modifiers_Modifier(obj) {
  return (($is_Lcom_raquo_laminar_modifiers_Modifier(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.modifiers.Modifier"));
}
export { $as_Lcom_raquo_laminar_modifiers_Modifier as $as_Lcom_raquo_laminar_modifiers_Modifier };
function $isArrayOf_Lcom_raquo_laminar_modifiers_Modifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_modifiers_Modifier)));
}
export { $isArrayOf_Lcom_raquo_laminar_modifiers_Modifier as $isArrayOf_Lcom_raquo_laminar_modifiers_Modifier };
function $asArrayOf_Lcom_raquo_laminar_modifiers_Modifier(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_modifiers_Modifier(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.modifiers.Modifier;", depth));
}
export { $asArrayOf_Lcom_raquo_laminar_modifiers_Modifier as $asArrayOf_Lcom_raquo_laminar_modifiers_Modifier };
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().initClass(1, "com.raquo.laminar.modifiers.Modifier", ({
  Lcom_raquo_laminar_modifiers_Modifier: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_Modifier as $d_Lcom_raquo_laminar_modifiers_Modifier };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.Lcom_raquo_laminar_modifiers_Modifier$__f_empty = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.Lcom_raquo_laminar_modifiers_Modifier$__f_empty = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
export { $c_Lcom_raquo_laminar_modifiers_Modifier$ as $c_Lcom_raquo_laminar_modifiers_Modifier$ };
$c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Modifier$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
export { $h_Lcom_raquo_laminar_modifiers_Modifier$ as $h_Lcom_raquo_laminar_modifiers_Modifier$ };
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  Lcom_raquo_laminar_modifiers_Modifier$: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_Modifier$ as $d_Lcom_raquo_laminar_modifiers_Modifier$ };
var $n_Lcom_raquo_laminar_modifiers_Modifier$;
function $m_Lcom_raquo_laminar_modifiers_Modifier$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Modifier$)) {
    $n_Lcom_raquo_laminar_modifiers_Modifier$ = new $c_Lcom_raquo_laminar_modifiers_Modifier$();
  }
  return $n_Lcom_raquo_laminar_modifiers_Modifier$;
}
export { $m_Lcom_raquo_laminar_modifiers_Modifier$ as $m_Lcom_raquo_laminar_modifiers_Modifier$ };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  this.Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  $m_Lcom_raquo_laminar_modifiers_RenderableNode$();
  var renderNode = new $c_sjsr_AnonFunction1(((x) => {
    var x$1 = $as_Lcom_raquo_laminar_nodes_ChildNode(x);
    return x$1;
  }));
  var renderNodeSeq = new $c_sjsr_AnonFunction1(((x$2) => {
    var x$3 = $as_sci_Seq(x$2);
    return x$3;
  }));
  var renderNodeIterable = new $c_sjsr_AnonFunction1(((x$3$1) => {
    var x$4 = $as_sc_Iterable(x$3$1);
    return x$4;
  }));
  var renderNodeOption = new $c_sjsr_AnonFunction1(((x$4$1) => {
    var x$5 = $as_s_Option(x$4$1);
    return x$5;
  }));
  this.Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1(renderNode, renderNodeSeq, renderNodeIterable, renderNodeOption);
}
export { $c_Lcom_raquo_laminar_modifiers_RenderableNode$ as $c_Lcom_raquo_laminar_modifiers_RenderableNode$ };
$c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
export { $h_Lcom_raquo_laminar_modifiers_RenderableNode$ as $h_Lcom_raquo_laminar_modifiers_RenderableNode$ };
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  Lcom_raquo_laminar_modifiers_RenderableNode$: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_RenderableNode$ as $d_Lcom_raquo_laminar_modifiers_RenderableNode$ };
var $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
function $m_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableNode$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
}
export { $m_Lcom_raquo_laminar_modifiers_RenderableNode$ as $m_Lcom_raquo_laminar_modifiers_RenderableNode$ };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$() {
  this.Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  var render = new $c_sjsr_AnonFunction1(((x) => {
    var x$1 = $as_T(x);
    return x$1;
  }));
  this.Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render);
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
}
export { $c_Lcom_raquo_laminar_modifiers_RenderableText$ as $c_Lcom_raquo_laminar_modifiers_RenderableText$ };
$c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
export { $h_Lcom_raquo_laminar_modifiers_RenderableText$ as $h_Lcom_raquo_laminar_modifiers_RenderableText$ };
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  Lcom_raquo_laminar_modifiers_RenderableText$: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_RenderableText$ as $d_Lcom_raquo_laminar_modifiers_RenderableText$ };
var $n_Lcom_raquo_laminar_modifiers_RenderableText$;
function $m_Lcom_raquo_laminar_modifiers_RenderableText$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableText$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableText$ = new $c_Lcom_raquo_laminar_modifiers_RenderableText$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableText$;
}
export { $m_Lcom_raquo_laminar_modifiers_RenderableText$ as $m_Lcom_raquo_laminar_modifiers_RenderableText$ };
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ChildNode$() {
}
export { $c_Lcom_raquo_laminar_nodes_ChildNode$ as $c_Lcom_raquo_laminar_nodes_ChildNode$ };
$c_Lcom_raquo_laminar_nodes_ChildNode$.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ChildNode$.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ChildNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ChildNode$() {
}
export { $h_Lcom_raquo_laminar_nodes_ChildNode$ as $h_Lcom_raquo_laminar_nodes_ChildNode$ };
$h_Lcom_raquo_laminar_nodes_ChildNode$.prototype = $c_Lcom_raquo_laminar_nodes_ChildNode$.prototype;
$c_Lcom_raquo_laminar_nodes_ChildNode$.prototype.isDescendantOf__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z = (function(node, ancestor) {
  var node$tailLocal1 = node;
  while (true) {
    if ((node$tailLocal1.parentNode !== null)) {
      var effectiveParentNode = node$tailLocal1.parentNode;
    } else {
      var maybeShadowHost = node$tailLocal1.host;
      var this$2 = $m_s_$less$colon$less$();
      var ev = this$2.s_$less$colon$less$__f_singleton;
      var effectiveParentNode = ((maybeShadowHost === (void 0)) ? ($n(ev), null) : maybeShadowHost);
    }
    if ((effectiveParentNode !== null)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(ancestor, effectiveParentNode)) {
        return true;
      } else {
        node$tailLocal1 = effectiveParentNode;
      }
    } else {
      return false;
    }
  }
});
var $d_Lcom_raquo_laminar_nodes_ChildNode$ = new $TypeData().initClass($c_Lcom_raquo_laminar_nodes_ChildNode$, "com.raquo.laminar.nodes.ChildNode$", ({
  Lcom_raquo_laminar_nodes_ChildNode$: 1
}));
export { $d_Lcom_raquo_laminar_nodes_ChildNode$ as $d_Lcom_raquo_laminar_nodes_ChildNode$ };
var $n_Lcom_raquo_laminar_nodes_ChildNode$;
function $m_Lcom_raquo_laminar_nodes_ChildNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ChildNode$)) {
    $n_Lcom_raquo_laminar_nodes_ChildNode$ = new $c_Lcom_raquo_laminar_nodes_ChildNode$();
  }
  return $n_Lcom_raquo_laminar_nodes_ChildNode$;
}
export { $m_Lcom_raquo_laminar_nodes_ChildNode$ as $m_Lcom_raquo_laminar_nodes_ChildNode$ };
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ParentNode$() {
}
export { $c_Lcom_raquo_laminar_nodes_ParentNode$ as $c_Lcom_raquo_laminar_nodes_ParentNode$ };
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ParentNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ParentNode$() {
}
export { $h_Lcom_raquo_laminar_nodes_ParentNode$ as $h_Lcom_raquo_laminar_nodes_ParentNode$ };
$h_Lcom_raquo_laminar_nodes_ParentNode$.prototype = $c_Lcom_raquo_laminar_nodes_ParentNode$.prototype;
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, child) {
  var nextParent = new $c_s_Some(parent);
  $n(child).willSetParent__s_Option__V(nextParent);
  var appended = $m_Lcom_raquo_laminar_DomApi$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parent, child);
  if (appended) {
    var this$2 = $n(child);
    var this$3 = $n(this$2.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option());
    if ((!this$3.isEmpty__Z())) {
      var arg1 = this$3.get__O();
      var childParent = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
      var x = $n(childParent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
      if ((x !== (void 0))) {
        var ix = $uI(x.indexOf(child));
        x.splice(ix, 1);
      }
    }
    var x$1 = $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
    if ((x$1 === (void 0))) {
      $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__O__V($m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_laminar_nodes_ChildNode.getArrayOf().constr)([child]))));
    } else {
      var x$2 = $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
      if ((x$2 !== (void 0))) {
        $uI(x$2.push(child));
      }
    }
    $n(child).setParent__s_Option__V(nextParent);
  }
  return appended;
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, child) {
  var elem = false;
  elem = false;
  var x = $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
  if ((x !== (void 0))) {
    var indexOfChild = $uI(x.indexOf(child));
    if ((indexOfChild !== (-1))) {
      $n(child).willSetParent__s_Option__V($m_s_None$());
      var ev$19 = $m_Lcom_raquo_laminar_DomApi$().removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parent, child);
      elem = ev$19;
      if (elem) {
        x.splice(indexOfChild, 1);
        $n(child).setParent__s_Option__V($m_s_None$());
      }
    }
  }
  return elem;
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.insertChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I__Z = (function(parent, child, atIndex) {
  var elem = false;
  elem = false;
  var x = $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
  if ((x === (void 0))) {
    $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__O__V($m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_laminar_nodes_ChildNode.getArrayOf().constr)([]))));
  }
  var x$1 = $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
  if ((x$1 !== (void 0))) {
    var nextParent = new $c_s_Some(parent);
    $n(child).willSetParent__s_Option__V(nextParent);
    if ((atIndex < $uI(x$1.length))) {
      var nextChild = $as_Lcom_raquo_laminar_nodes_ChildNode(x$1[atIndex]);
      var ev$20 = $m_Lcom_raquo_laminar_DomApi$().insertBefore__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parent, child, nextChild);
      elem = ev$20;
    } else if ((atIndex === $uI(x$1.length))) {
      var ev$21 = $m_Lcom_raquo_laminar_DomApi$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parent, child);
      elem = ev$21;
    }
    if (elem) {
      var this$11 = $n(child);
      var this$12 = $n(this$11.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option());
      if ((!this$12.isEmpty__Z())) {
        var arg1 = this$12.get__O();
        var childParent = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
        var x$2 = $n(childParent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
        if ((x$2 !== (void 0))) {
          var ix = $uI(x$2.indexOf(child));
          x$2.splice(ix, 1);
        }
      }
      x$1.splice(atIndex, 0, child);
      $n(child).setParent__s_Option__V(nextParent);
    }
  }
  return elem;
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, oldChild, newChild) {
  var elem = false;
  elem = false;
  if ((oldChild !== newChild)) {
    var x = $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
    if ((x !== (void 0))) {
      var indexOfOldChild = $uI(x.indexOf(oldChild));
      if ((indexOfOldChild !== (-1))) {
        var newChildNextParent = new $c_s_Some(parent);
        $n(oldChild).willSetParent__s_Option__V($m_s_None$());
        $n(newChild).willSetParent__s_Option__V(newChildNextParent);
        var ev$22 = $m_Lcom_raquo_laminar_DomApi$().replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parent, newChild, oldChild);
        elem = ev$22;
        if (elem) {
          var this$8 = $n(newChild);
          var this$9 = $n(this$8.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option());
          if ((!this$9.isEmpty__Z())) {
            var arg1 = this$9.get__O();
            var childParent = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
            var x$1 = $n(childParent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
            if ((x$1 !== (void 0))) {
              var ix = $uI(x$1.indexOf(newChild));
              x$1.splice(ix, 1);
            }
          }
          x[indexOfOldChild] = newChild;
          $n(oldChild).setParent__s_Option__V($m_s_None$());
          $n(newChild).setParent__s_Option__V(newChildNextParent);
        }
      }
    }
  }
  return elem;
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.indexOfChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__I = (function(parent, child) {
  var x = $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O();
  if ((x === (void 0))) {
    var x$1 = (void 0);
  } else {
    var a = $uI(x.indexOf(child));
    var x$1 = a;
  }
  return $uI(((x$1 === (void 0)) ? (-1) : x$1));
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().initClass($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  Lcom_raquo_laminar_nodes_ParentNode$: 1
}));
export { $d_Lcom_raquo_laminar_nodes_ParentNode$ as $d_Lcom_raquo_laminar_nodes_ParentNode$ };
var $n_Lcom_raquo_laminar_nodes_ParentNode$;
function $m_Lcom_raquo_laminar_nodes_ParentNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ParentNode$)) {
    $n_Lcom_raquo_laminar_nodes_ParentNode$ = new $c_Lcom_raquo_laminar_nodes_ParentNode$();
  }
  return $n_Lcom_raquo_laminar_nodes_ParentNode$;
}
export { $m_Lcom_raquo_laminar_nodes_ParentNode$ as $m_Lcom_raquo_laminar_nodes_ParentNode$ };
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
export { $c_Lcom_raquo_laminar_nodes_ReactiveElement$ as $c_Lcom_raquo_laminar_nodes_ReactiveElement$ };
$c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
export { $h_Lcom_raquo_laminar_nodes_ReactiveElement$ as $h_Lcom_raquo_laminar_nodes_ReactiveElement$ };
$h_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = $c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype;
$c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype.unsafeBindPrependSubscription__Lcom_raquo_laminar_nodes_ReactiveElement__F1__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner) => {
    var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner);
    return $as_Lcom_raquo_airstream_ownership_Subscription($n(subscribe).apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1)));
  })), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().initClass($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  Lcom_raquo_laminar_nodes_ReactiveElement$: 1
}));
export { $d_Lcom_raquo_laminar_nodes_ReactiveElement$ as $d_Lcom_raquo_laminar_nodes_ReactiveElement$ };
var $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
function $m_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ReactiveElement$)) {
    $n_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $c_Lcom_raquo_laminar_nodes_ReactiveElement$();
  }
  return $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
}
export { $m_Lcom_raquo_laminar_nodes_ReactiveElement$ as $m_Lcom_raquo_laminar_nodes_ReactiveElement$ };
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
export { $c_Lcom_raquo_laminar_receivers_ChildReceiver$ as $c_Lcom_raquo_laminar_receivers_ChildReceiver$ };
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
export { $h_Lcom_raquo_laminar_receivers_ChildReceiver$ as $h_Lcom_raquo_laminar_receivers_ChildReceiver$ };
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().initClass($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  Lcom_raquo_laminar_receivers_ChildReceiver$: 1
}));
export { $d_Lcom_raquo_laminar_receivers_ChildReceiver$ as $d_Lcom_raquo_laminar_receivers_ChildReceiver$ };
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
}
export { $m_Lcom_raquo_laminar_receivers_ChildReceiver$ as $m_Lcom_raquo_laminar_receivers_ChildReceiver$ };
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
}
export { $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$ as $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$ };
$c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = new $h_O();
$c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype.constructor = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
}
export { $h_Lcom_raquo_laminar_receivers_ChildrenReceiver$ as $h_Lcom_raquo_laminar_receivers_ChildrenReceiver$ };
$h_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype;
var $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $TypeData().initClass($c_Lcom_raquo_laminar_receivers_ChildrenReceiver$, "com.raquo.laminar.receivers.ChildrenReceiver$", ({
  Lcom_raquo_laminar_receivers_ChildrenReceiver$: 1
}));
export { $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$ as $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$ };
var $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildrenReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
}
export { $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$ as $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$ };
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
}
export { $c_jl_FloatingPointBits$ as $c_jl_FloatingPointBits$ };
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
export { $h_jl_FloatingPointBits$ as $h_jl_FloatingPointBits$ };
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]));
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  jl_FloatingPointBits$: 1
}));
export { $d_jl_FloatingPointBits$ as $d_jl_FloatingPointBits$ };
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
export { $m_jl_FloatingPointBits$ as $m_jl_FloatingPointBits$ };
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < $uI(lines.length))) {
    var line = $as_T(lines[i]);
    var this$1 = $n(line);
    if ((!(this$1 === ""))) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var x = mtch[1];
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x));
        var $x_6 = $as_T(classAndMethodName[0]);
        var $x_5 = $as_T(classAndMethodName[1]);
        var x$1 = mtch[2];
        var $x_4 = $as_T(x$1);
        var x$2 = mtch[3];
        var s = $as_T(x$2);
        var $x_3 = $uI(parseInt(s));
        var x$3 = mtch[4];
        if ((x$3 !== (void 0))) {
          var x$1$1 = $as_T(x$3);
          var $x_2 = $uI(parseInt(x$1$1));
        } else {
          var $x_2 = (-1);
        }
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_6, $x_5, $x_4, $x_3, $x_2));
        $uI($x_1);
      } else {
        $uI(trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))));
      }
    }
    i = ((1 + i) | 0);
  }
  var len = $uI(trace.length);
  var result = new ($d_jl_StackTraceElement.getArrayOf().constr)(len);
  i = 0;
  while ((i < len)) {
    $n(result).set(i, $as_jl_StackTraceElement(trace[i]));
    i = ((1 + i) | 0);
  }
  return result;
}
export { $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement as $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement };
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    var x = matchBCOrS[1];
    var $x_1 = $p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x));
    var x$1 = matchBCOrS[2];
    return [$x_1, $p_jl_StackTrace$__decodeMethodName__T__T($thiz, $as_T(x$1))];
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      var x$2 = matchCTOrN[1];
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$2)), "<init>"];
    } else {
      var matchM = PatM.exec(functionName);
      if ((matchM !== null)) {
        var x$3 = matchM[1];
        return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$3)), "<clinit>"];
      } else {
        return ["<jscode>", functionName];
      }
    }
  }
}
export { $p_jl_StackTrace$__extractClassMethod__T__O as $p_jl_StackTrace$__extractClassMethod__T__O };
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, encodedName))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = $as_T(dict$1[encodedName]);
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = $n(base);
  var this$4 = $n($as_T(this$3.split("_").join(".")));
  return $as_T(this$4.split("\uff3f").join("_"));
}
export { $p_jl_StackTrace$__decodeClassName__T__T as $p_jl_StackTrace$__decodeClassName__T__T };
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value;
      }
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0);
    }
    $thiz.jl_StackTrace$__f_decompressedClasses = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((1 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_StackTrace$__f_decompressedClasses;
}
export { $p_jl_StackTrace$__decompressedClasses$lzycompute__O as $p_jl_StackTrace$__decompressedClasses$lzycompute__O };
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedClasses);
}
export { $p_jl_StackTrace$__decompressedClasses__O as $p_jl_StackTrace$__decompressedClasses__O };
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.jl_StackTrace$__f_decompressedPrefixes = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((2 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_StackTrace$__f_decompressedPrefixes;
}
export { $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O as $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O };
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedPrefixes);
}
export { $p_jl_StackTrace$__decompressedPrefixes__O as $p_jl_StackTrace$__decompressedPrefixes__O };
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_StackTrace$__f_compressedPrefixes = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.jl_StackTrace$__f_bitmap$0 = (((4 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_StackTrace$__f_compressedPrefixes;
}
export { $p_jl_StackTrace$__compressedPrefixes$lzycompute__O as $p_jl_StackTrace$__compressedPrefixes$lzycompute__O };
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_compressedPrefixes);
}
export { $p_jl_StackTrace$__compressedPrefixes__O as $p_jl_StackTrace$__compressedPrefixes__O };
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  var this$1 = $n(encodedName);
  if (((this$1.length >= 0) && ($as_T(this$1.substring(0, 7)) === "init___"))) {
    return "<init>";
  } else {
    var this$2 = $n(encodedName);
    var methodNameLen = $uI(this$2.indexOf("__"));
    return ((methodNameLen < 0) ? encodedName : $as_T(encodedName.substring(0, methodNameLen)));
  }
}
export { $p_jl_StackTrace$__decodeMethodName__T__T as $p_jl_StackTrace$__decodeMethodName__T__T };
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ($uZ((!(!(!e)))) ? [] : ($uZ((!(!(e.arguments && e.stack)))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ($uZ((!(!(e.stack && e.sourceURL)))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ($uZ((!(!(e.stack && e.number)))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ($uZ((!(!(e.stack && e.fileName)))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ($uZ((!(!(e.message && e["opera#sourceloc"])))) ? ($uZ((!(!(!e.stacktrace)))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ($uZ((!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ($uZ((!(!((e.message && e.stack) && e.stacktrace)))) ? ($uZ((!(!(e.stacktrace.indexOf("called from line") < 0.0)))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ($uZ((!(!(e.stack && (!e.fileName))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))));
}
export { $p_jl_StackTrace$__normalizeStackTraceLines__O__O as $p_jl_StackTrace$__normalizeStackTraceLines__O__O };
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return $as_T($as_T($as_T($as_T($as_T(($as_T(e.stack) + "\n").replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("^[\\s\\S]+?\\s+at\\s+"), " at ")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s+(at eval )?at\\s+", "gm"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2")).split("\n").slice(0, (-1));
}
export { $p_jl_StackTrace$__extractChrome__O__O as $p_jl_StackTrace$__extractChrome__O__O };
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return $as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("(?:\\n@:0)?\\s+$", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@")).split("\n");
}
export { $p_jl_StackTrace$__extractFirefox__O__O as $p_jl_StackTrace$__extractFirefox__O__O };
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = $as_T($as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s*at\\s+(.*)$", "gm"), "$1")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Anonymous function\\s+", "gm"), "{anonymous}() ")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2")).split("\n");
  return qual$1.slice(1);
}
export { $p_jl_StackTrace$__extractIE__O__O as $p_jl_StackTrace$__extractIE__O__O };
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return $as_T($as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("\\[native code\\]\\n", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?=\\w+Error\\:).*$\\n", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^@", "gm"), "{anonymous}()@")).split("\n");
}
export { $p_jl_StackTrace$__extractSafari__O__O as $p_jl_StackTrace$__extractSafari__O__O };
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = $as_T(e.message).split("\n");
  var result = [];
  var i = 2;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[2];
      var x$1 = mtch[1];
      var $x_1 = result.push(((("{anonymous}()@" + x) + ":") + x$1));
      $uI($x_1);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
export { $p_jl_StackTrace$__extractOpera9__O__O as $p_jl_StackTrace$__extractOpera9__O__O };
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = $as_T(((x !== (void 0)) ? x : "{anonymous}"));
      var x$1 = mtch[2];
      var x$2 = mtch[1];
      var $x_1 = result.push(((((fnName + "()@") + x$1) + ":") + x$2));
      $uI($x_1);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
export { $p_jl_StackTrace$__extractOpera10a__O__O as $p_jl_StackTrace$__extractOpera10a__O__O };
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(.*)@(.+):(\\d+)$");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[1];
      if ((x !== (void 0))) {
        var x$2 = $as_T(x);
        var fnName = (x$2 + "()");
      } else {
        var fnName = "global code";
      }
      var x$1 = mtch[2];
      var x$3 = mtch[3];
      var $x_1 = result.push(((((fnName + "@") + x$1) + ":") + x$3));
      $uI($x_1);
    }
    i = ((1 + i) | 0);
  }
  return result;
}
export { $p_jl_StackTrace$__extractOpera10b__O__O as $p_jl_StackTrace$__extractOpera10b__O__O };
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[4];
      var $x_1 = $as_T(x);
      var x$1 = mtch[1];
      var x$2 = mtch[2];
      var location = (((($x_1 + ":") + x$1) + ":") + x$2);
      var x$3 = mtch[2];
      var fnName0 = $as_T(((x$3 !== (void 0)) ? x$3 : "global code"));
      var fnName = $as_T($as_T(fnName0.replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function: (\\S+)>"), "$1")).replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function>"), "{anonymous}"));
      $uI(result.push(((fnName + "@") + location)));
    }
    i = ((2 + i) | 0);
  }
  return result;
}
export { $p_jl_StackTrace$__extractOpera11__O__O as $p_jl_StackTrace$__extractOpera11__O__O };
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return [];
}
export { $p_jl_StackTrace$__extractOther__O__O as $p_jl_StackTrace$__extractOther__O__O };
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < $uI($p_jl_StackTrace$__compressedPrefixes__O($thiz).length))) {
      var prefix = $as_T($p_jl_StackTrace$__compressedPrefixes__O($thiz)[i]);
      var this$1 = $n(encodedName$1);
      if ((this$1.length >= 0)) {
        var this$2 = $n(prefix);
        var $x_2 = this$1.substring(0, this$2.length);
        var $x_1 = ($as_T($x_2) === prefix);
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        var $x_4 = $as_T(dict[prefix]);
        var this$4 = $n(prefix);
        var $x_3 = encodedName$1.substring(this$4.length);
        return (("" + $x_4) + $as_T($x_3));
      } else {
        i = ((1 + i) | 0);
      }
    } else {
      var this$5 = $n(encodedName$1);
      if (((this$5.length >= 0) && ($as_T(this$5.substring(0, 1)) === "L"))) {
        return $as_T(encodedName$1.substring(1));
      } else {
        return encodedName$1;
      }
    }
  }
}
export { $p_jl_StackTrace$__loop$1__I__T__T as $p_jl_StackTrace$__loop$1__I__T__T };
/** @constructor */
function $c_jl_StackTrace$() {
  this.jl_StackTrace$__f_decompressedClasses = null;
  this.jl_StackTrace$__f_decompressedPrefixes = null;
  this.jl_StackTrace$__f_compressedPrefixes = null;
  this.jl_StackTrace$__f_bitmap$0 = 0;
}
export { $c_jl_StackTrace$ as $c_jl_StackTrace$ };
$c_jl_StackTrace$.prototype = new $h_O();
$c_jl_StackTrace$.prototype.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
export { $h_jl_StackTrace$ as $h_jl_StackTrace$ };
$h_jl_StackTrace$.prototype = $c_jl_StackTrace$.prototype;
$c_jl_StackTrace$.prototype.extract__O__Ajl_StackTraceElement = (function(jsError) {
  var lines = $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError);
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, lines);
});
var $d_jl_StackTrace$ = new $TypeData().initClass($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  jl_StackTrace$: 1
}));
export { $d_jl_StackTrace$ as $d_jl_StackTrace$ };
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$();
  }
  return $n_jl_StackTrace$;
}
export { $m_jl_StackTrace$ as $m_jl_StackTrace$ };
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
}
export { $c_jl_StackTrace$StringRE$ as $c_jl_StackTrace$StringRE$ };
$c_jl_StackTrace$StringRE$.prototype = new $h_O();
$c_jl_StackTrace$StringRE$.prototype.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
}
export { $h_jl_StackTrace$StringRE$ as $h_jl_StackTrace$StringRE$ };
$h_jl_StackTrace$StringRE$.prototype = $c_jl_StackTrace$StringRE$.prototype;
$c_jl_StackTrace$StringRE$.prototype.re$extension0__T__O = (function(this$) {
  return new RegExp(this$);
});
$c_jl_StackTrace$StringRE$.prototype.re$extension1__T__T__O = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().initClass($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  jl_StackTrace$StringRE$: 1
}));
export { $d_jl_StackTrace$StringRE$ as $d_jl_StackTrace$StringRE$ };
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
}
export { $m_jl_StackTrace$StringRE$ as $m_jl_StackTrace$StringRE$ };
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
}
export { $c_jl_System$Streams$ as $c_jl_System$Streams$ };
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
export { $h_jl_System$Streams$ as $h_jl_System$Streams$ };
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  jl_System$Streams$: 1
}));
export { $d_jl_System$Streams$ as $d_jl_System$Streams$ };
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
export { $m_jl_System$Streams$ as $m_jl_System$Streams$ };
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty;
}
export { $c_jl_Utils$Cache$ as $c_jl_Utils$Cache$ };
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
export { $h_jl_Utils$Cache$ as $h_jl_Utils$Cache$ };
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  jl_Utils$Cache$: 1
}));
export { $d_jl_Utils$Cache$ as $d_jl_Utils$Cache$ };
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
export { $m_jl_Utils$Cache$ as $m_jl_Utils$Cache$ };
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
export { $f_jl_Void__equals__O__Z as $f_jl_Void__equals__O__Z };
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
export { $f_jl_Void__hashCode__I as $f_jl_Void__hashCode__I };
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
export { $f_jl_Void__toString__T as $f_jl_Void__toString__T };
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"));
}
export { $as_jl_Void as $as_jl_Void };
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)));
}
export { $isArrayOf_jl_Void as $isArrayOf_jl_Void };
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth));
}
export { $asArrayOf_jl_Void as $asArrayOf_jl_Void };
var $d_jl_Void = new $TypeData().initClass(0, "java.lang.Void", ({
  jl_Void: 1
}), ((x) => (x === (void 0))));
export { $d_jl_Void as $d_jl_Void };
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  var this$1 = $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
export { $p_jl_reflect_Array$__mismatch__O__E as $p_jl_reflect_Array$__mismatch__O__E };
/** @constructor */
function $c_jl_reflect_Array$() {
}
export { $c_jl_reflect_Array$ as $c_jl_reflect_Array$ };
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
export { $h_jl_reflect_Array$ as $h_jl_reflect_Array$ };
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length;
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length;
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length;
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length;
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length;
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length;
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length;
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length;
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length;
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array);
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  jl_reflect_Array$: 1
}));
export { $d_jl_reflect_Array$ as $d_jl_reflect_Array$ };
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
export { $m_jl_reflect_Array$ as $m_jl_reflect_Array$ };
/** @constructor */
function $c_ju_Arrays$() {
}
export { $c_ju_Arrays$ as $c_ju_Arrays$ };
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
export { $h_ju_Arrays$ as $h_ju_Arrays$ };
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.equals__AJ__AJ__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = $n(a).get(i$1);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var i$2 = i;
    var t$1 = $n(b).get(i$2);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AS__AS__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AC__AC__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AB__AB__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AZ__AZ__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AD__AD__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AF__AF__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_ju_Arrays$ = new $TypeData().initClass($c_ju_Arrays$, "java.util.Arrays$", ({
  ju_Arrays$: 1
}));
export { $d_ju_Arrays$ as $d_ju_Arrays$ };
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
export { $m_ju_Arrays$ as $m_ju_Arrays$ };
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.ju_regex_PatternCompiler__f_pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
}
export { $p_ju_regex_PatternCompiler__parseError__T__E as $p_ju_regex_PatternCompiler__parseError__T__E };
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp.exec($thiz.ju_regex_PatternCompiler__f_pattern);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var chars = $as_T(x);
      var this$3 = $n(chars);
      var end = this$3.length;
      var i = 0;
      while ((i < end)) {
        var i$2 = i;
        var $x_2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_1 = $m_ju_regex_PatternCompiler$();
        var this$5 = $n(chars);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_2 | $n($x_1).java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$5, i$2)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var chars$3 = $as_T(x$1);
      var this$8 = $n(chars$3);
      var end$1 = this$8.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var i$2$1 = i$1;
        var $x_4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_3 = $m_ju_regex_PatternCompiler$();
        var this$10 = $n(chars$3);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_4 & (~$n($x_3).java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$10, i$2$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    var $x_5 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var x$2 = m[0];
    var this$12 = $n($as_T(x$2));
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($x_5 + this$12.length) | 0);
  }
}
export { $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V as $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V };
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var this$1 = $n(s);
  var len = this$1.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I($n(s), i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
export { $p_ju_regex_PatternCompiler__literal__T__T as $p_ju_regex_PatternCompiler__literal__T__T };
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 2) ? s : (((cp >= 65) && (cp <= 90)) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + cp) | 0))) + "]") : (((cp >= 97) && (cp <= 122)) ? ((("[" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + cp) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
export { $p_ju_regex_PatternCompiler__literal__I__T as $p_ju_regex_PatternCompiler__literal__I__T };
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1 = $charAt(this$2, index);
      switch (x1) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
          continue;
          break;
        }
      }
    }
    break;
  }
}
export { $p_ju_regex_PatternCompiler__skipComments__V as $p_ju_regex_PatternCompiler__skipComments__V };
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((startOfRepeater === len)) {
    var repeaterDispatchChar = 46;
  } else {
    var this$2 = $n(pattern);
    var repeaterDispatchChar = $charAt(this$2, startOfRepeater);
  }
  if (((((repeaterDispatchChar === 63) || (repeaterDispatchChar === 42)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    var this$3 = $n(compiledToken);
    var x1 = $charAt(this$3, 0);
    switch (x1) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var this$4 = $n(compiledToken);
        if (($charAt(this$4, 1) === 63)) {
          var this$5 = $n(compiledToken);
          var isTokenAnAssertion = ($charAt(this$5, 2) !== 58);
        } else {
          var isTokenAnAssertion = false;
        }
        break;
      }
      case 92: {
        var this$6 = $n(compiledToken);
        var c = $charAt(this$6, 1);
        var isTokenAnAssertion = ((c === 98) || (c === 66));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$7 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1$2 = $charAt(this$7, index);
      switch (x1$2) {
        case 43: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
export { $p_ju_regex_PatternCompiler__compileRepeater__I__T__T as $p_ju_regex_PatternCompiler__compileRepeater__I__T__T };
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((repeaterDispatchChar === 123)) {
    var this$1 = $n(pattern);
    var len = this$1.length;
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_1 = true;
    } else {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!((c >= 48) && (c <= 57)));
    }
    if ($x_1) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while (true) {
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var this$4 = $n(pattern);
        var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var c$1 = $charAt(this$4, index$1);
        var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
      } else {
        var $x_2 = false;
      }
      if ($x_2) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      } else {
        break;
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    var this$6 = $n(pattern);
    var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    if (($charAt(this$6, index$2) === 44)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      while (true) {
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$7 = $n(pattern);
          var index$3 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c$2 = $charAt(this$7, index$3);
          var $x_3 = ((c$2 >= 48) && (c$2 <= 57));
        } else {
          var $x_3 = false;
        }
        if ($x_3) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        } else {
          break;
        }
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_4 = true;
    } else {
      var this$9 = $n(pattern);
      var index$4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var $x_4 = ($charAt(this$9, index$4) !== 125);
    }
    if ($x_4) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  return $as_T(pattern.substring(startOfRepeater, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
export { $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T as $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T };
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length);
  var i = 0;
  while ((i < end)) {
    var i$2 = i;
    var mapped = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[i$2]);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[i$2] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = $as_T(compiledToken.replace($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp, ((arg1$2, arg2$2, arg3$2) => {
    var arg1 = $as_T(arg1$2);
    var arg2 = $as_T(arg2$2);
    var arg3 = $as_T(arg3$2);
    return $thiz.java$util$regex$PatternCompiler$$$anonfun$buildPossessiveQuantifier$2__T__T__T__I__T(arg1, arg2, arg3, compiledGroupCountBeforeThisToken);
  })));
  $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
export { $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T as $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T };
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if ((((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var this$2 = $n(pattern);
  var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  var dispatchChar = $charAt(this$2, index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 2: {
          return (("[" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if (($as_T(pattern.substring($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var lineTerminator = (((1 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])");
      return (("(?=" + lineTerminator) + "?$)");
      break;
    }
    case 122: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var end = ((1 + start) | 0);
      while (true) {
        if ((end !== len)) {
          var this$7 = $n(pattern);
          var index$1 = end;
          var c = $charAt(this$7, index$1);
          var $x_2 = ((c >= 48) && (c <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var s = $as_T(pattern.substring(start, ((1 + end) | 0)));
          var $x_1 = ($uI(parseInt(s, 10)) <= (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = $as_T(pattern.substring(start, end));
      var groupNumber = $uI(parseInt(groupString, 10));
      if ((groupNumber > (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
        var $x_3 = true;
      } else {
        var this$11 = $n(pattern);
        var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var $x_3 = ($charAt(this$11, index$2) !== 60);
      }
      if ($x_3) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
      if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, groupName)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = $uI(dict[groupName]);
      var compiledGroupNumber$2 = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber$2]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var this$13 = $n(pattern);
      var end$2 = $uI(this$13.indexOf("\\E", start$2));
      if ((end$2 < 0)) {
        var this$14 = $n(pattern);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = this$14.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2)));
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2, end$2)));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
export { $p_ju_regex_PatternCompiler__compileEscape__T as $p_ju_regex_PatternCompiler__compileEscape__T };
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var $x_1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var this$1 = $n(pattern);
      if (($x_1 === this$1.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((x1 >= 65) && (x1 <= 90)) || ((x1 >= 97) && (x1 <= 122)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
export { $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I as $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I };
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) < len)) {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var d1 = (((-48) + $charAt(this$2, index)) | 0);
  } else {
    var d1 = (-1);
  }
  if (((d1 < 0) || (d1 > 7))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  if ((((2 + start) | 0) < len)) {
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var d2 = (((-48) + $charAt(this$3, index$1)) | 0);
  } else {
    var d2 = (-1);
  }
  if (((d2 < 0) || (d2 > 7))) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    if ((((3 + start) | 0) < len)) {
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var d3 = (((-48) + $charAt(this$4, index$2)) | 0);
    } else {
      var d3 = (-1);
    }
    if (((d3 < 0) || (d3 > 7))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
export { $p_ju_regex_PatternCompiler__parseOctalEscape__I as $p_ju_regex_PatternCompiler__parseOctalEscape__I };
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((start !== len)) {
    var this$2 = $n(pattern);
    var $x_1 = ($charAt(this$2, start) === 123);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var innerStart = ((1 + start) | 0);
    var this$3 = $n(pattern);
    var innerEnd = $uI(this$3.indexOf("}", innerStart));
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + start) | 0);
    return cp$2;
  }
}
export { $p_ju_regex_PatternCompiler__parseHexEscape__I as $p_ju_regex_PatternCompiler__parseHexEscape__I };
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && ($as_T(pattern.substring(end, lowStart)) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
export { $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I as $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I };
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if (((start === end) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var i$2 = i;
    var this$4 = $n(pattern);
    var c = $charAt(this$4, i$2);
    if ((!((((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 70))) || ((c >= 97) && (c <= 102))))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = $as_T(pattern.substring(start, end));
    var cp = $uI(parseInt(s, 16));
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
export { $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I as $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I };
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : $n(positive).negated__ju_regex_PatternCompiler$CompiledCharClass());
}
export { $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass as $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass };
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((start === len)) {
    var property = "?";
  } else {
    var this$2 = $n(pattern);
    if (($charAt(this$2, start) === 123)) {
      var innerStart = ((1 + start) | 0);
      var this$3 = $n(pattern);
      var innerEnd = $uI(this$3.indexOf("}", innerStart));
      if ((innerEnd < 0)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = innerEnd;
      var property = $as_T(pattern.substring(innerStart, innerEnd));
    } else {
      var property = $as_T(pattern.substring(start, ((1 + start) | 0)));
    }
  }
  var dict = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, property)))) {
    $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  var result = $as_ju_regex_PatternCompiler$CompiledCharClass(dict$1[property2]);
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  return result;
}
export { $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass as $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass };
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var this$2 = $n(pattern);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var isNegated = ($charAt(this$2, index) === 94);
  } else {
    var isNegated = false;
  }
  if (isNegated) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2), isNegated);
  while (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return builder.finish__T();
          break;
        }
        case 38: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
            var this$3 = $n(pattern);
            var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
            var $x_1 = ($charAt(this$3, index$1) === 38);
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            builder.startNewConjunct__V();
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
          }
          break matchResult;
          break;
        }
        case 91: {
          var cls = $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz);
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, cls);
          break matchResult;
          break;
        }
        case 92: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var this$4 = $n(pattern);
          var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c2 = $charAt(this$4, index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break;
            }
            case 81: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var this$5 = $n(pattern);
              var fromIndex = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
              var end = $uI(this$5.indexOf("\\E", fromIndex));
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.addCodePointsInString__T__I__I__V(pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, end);
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end) | 0);
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
            }
          }
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          } else {
            break;
          }
          break matchResult;
          break;
        }
        case 35: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
          } else {
            break;
          }
          break matchResult;
          break;
        }
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
export { $p_ju_regex_PatternCompiler__compileCharacterClass__T as $p_ju_regex_PatternCompiler__compileCharacterClass__T };
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) === len)) {
    var $x_1 = true;
  } else {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var $x_1 = ($charAt(this$2, index) !== 63);
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + start) | 0);
    $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
    return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var c1 = $charAt(this$3, index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      return ((("" + $as_T(pattern.substring(start, ((3 + start) | 0)))) + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var c2 = $charAt(this$4, index$2);
      if ((((c2 >= 65) && (c2 <= 90)) || ((c2 >= 97) && (c2 <= 122)))) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, name))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
        var dict$1 = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        var value = (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0);
        dict$1[name] = value;
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
      } else {
        if (((c2 !== 61) && (c2 !== 33))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
      var groupNumber = $thiz.ju_regex_PatternCompiler__f_compiledGroupCount;
      return (((("(?:(?=(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
export { $p_ju_regex_PatternCompiler__compileGroup__T as $p_ju_regex_PatternCompiler__compileGroup__T };
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
    var $x_2 = true;
  } else {
    var this$4 = $n(pattern);
    var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_2 = ($charAt(this$4, index$1) !== 62);
  }
  if ($x_2) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return $as_T(pattern.substring(start, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
export { $p_ju_regex_PatternCompiler__parseGroupName__T as $p_ju_regex_PatternCompiler__parseGroupName__T };
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len$2)) {
    var this$1 = $n(pattern$3);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_1 = ($charAt(this$1, index) === 45);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I($n(pattern$3), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
      $n(builder$1).addSingleCodePoint__I__V(45);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      $n(builder$1).addCodePointRange__I__I__V(startCodePoint, endCodePoint);
    }
  } else {
    $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
  }
}
export { $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V as $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V };
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.ju_regex_PatternCompiler__f_pattern = null;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = 0;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = null;
  this.ju_regex_PatternCompiler__f_namedGroups = null;
  this.ju_regex_PatternCompiler__f_pattern = pattern;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = flags;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = [0];
  this.ju_regex_PatternCompiler__f_namedGroups = ({});
}
export { $c_ju_regex_PatternCompiler as $c_ju_regex_PatternCompiler };
$c_ju_regex_PatternCompiler.prototype = new $h_O();
$c_ju_regex_PatternCompiler.prototype.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
export { $h_ju_regex_PatternCompiler as $h_ju_regex_PatternCompiler };
$h_ju_regex_PatternCompiler.prototype = $c_ju_regex_PatternCompiler.prototype;
$c_ju_regex_PatternCompiler.prototype.compile__ju_regex_Pattern = (function() {
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
  }
  var isLiteral = ((16 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("MULTILINE", "2018");
  }
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.ju_regex_PatternCompiler__f_pattern);
  } else {
    if (($as_T(this.ju_regex_PatternCompiler__f_pattern.substring(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "\\G")) {
      this.ju_regex_PatternCompiler__f_sticky = true;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    }
    var jsPattern = this.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "us" : "u");
  var jsFlags = (((66 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.ju_regex_PatternCompiler__f_pattern, this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags, jsPattern, jsFlags, this.ju_regex_PatternCompiler__f_sticky, (((-1) + $uI(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap, this.ju_regex_PatternCompiler__f_namedGroups);
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T = (function(insideGroup) {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var result = "";
  while ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I($n(pattern), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.ju_regex_PatternCompiler__f_sticky && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          } else {
            break;
          }
          break matchResult;
          break;
        }
        case 35: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.java$util$regex$PatternCompiler$$skipSharpComment__V();
          } else {
            break;
          }
          break matchResult;
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.ju_regex_PatternCompiler__f_compiledGroupCount;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var rejected = (((32 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "" : (((1 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T(rejected);
          break;
        }
        default: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$skipSharpComment__V = (function() {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$$anonfun$buildPossessiveQuantifier$2__T__T__T__I__T = (function(str, backslashes, groupString, compiledGroupCountBeforeThisToken$1) {
  var this$1 = $n(backslashes);
  if ((((this$1.length % 2) | 0) === 0)) {
    return str;
  } else {
    var groupNumber = $uI(parseInt(groupString, 10));
    return ((groupNumber > compiledGroupCountBeforeThisToken$1) ? (("" + backslashes) + ((1 + groupNumber) | 0)) : str);
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().initClass($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  ju_regex_PatternCompiler: 1
}));
export { $d_ju_regex_PatternCompiler as $d_ju_regex_PatternCompiler };
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
export { $p_ju_regex_PatternCompiler$__featureTest__T__Z as $p_ju_regex_PatternCompiler$__featureTest__T__Z };
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = new RegExp("(\\\\+)(\\d+)", "g");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = r;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = new RegExp("(?:^|_)[a-z]", "g");
}
export { $c_ju_regex_PatternCompiler$ as $c_ju_regex_PatternCompiler$ };
$c_ju_regex_PatternCompiler$.prototype = new $h_O();
$c_ju_regex_PatternCompiler$.prototype.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
export { $h_ju_regex_PatternCompiler$ as $h_ju_regex_PatternCompiler$ };
$h_ju_regex_PatternCompiler$.prototype = $c_ju_regex_PatternCompiler$.prototype;
$c_ju_regex_PatternCompiler$.prototype.compile__T__I__ju_regex_Pattern = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).compile__ju_regex_Pattern();
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$charToFlag__C__I = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointNotAmong__T__T = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "." : "[\\d\\D]"));
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointToString__I__T = (function(codePoint) {
  return $as_T(String.fromCodePoint(codePoint));
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().initClass($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  ju_regex_PatternCompiler$: 1
}));
export { $d_ju_regex_PatternCompiler$ as $d_ju_regex_PatternCompiler$ };
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
export { $m_ju_regex_PatternCompiler$ as $m_ju_regex_PatternCompiler$ };
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "")) {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = alt;
  } else {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct + "|") + alt);
  }
}
export { $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V as $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V };
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? negThisSegment : (((("(?:(?!" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment === "") ? (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")")) : (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? (("[" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "]") : (((("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + "|[") + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "])")));
  }
}
export { $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T as $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T };
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(codePoint);
  return (((((codePoint === 93) || (codePoint === 92)) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
export { $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T as $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T };
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = asciiCaseInsensitive;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = isNegated;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
}
export { $c_ju_regex_PatternCompiler$CharacterClassBuilder as $c_ju_regex_PatternCompiler$CharacterClassBuilder };
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
export { $h_ju_regex_PatternCompiler$CharacterClassBuilder as $h_ju_regex_PatternCompiler$CharacterClassBuilder };
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype;
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.finish__T = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction === "") ? conjunct : ((("(?:" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction) + conjunct) + ")"));
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.startNewConjunct__V = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction + (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V = (function(cls) {
  var x1 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
  switch (x1) {
    case 0: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 1: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 2: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointsInString__T__I__I__V = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I($n(str), i);
    this.addSingleCodePoint__I__V(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addSingleCodePoint__I__V = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + s) + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    if (((codePoint >= 65) && (codePoint <= 90))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + codePoint) | 0)));
    } else if (((codePoint >= 97) && (codePoint <= 122))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + codePoint) | 0)));
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointRange__I__I__V = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (s + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$3 = (((-32) + start$2) | 0);
      var end$3 = (((-32) + end$2) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().initClass($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  ju_regex_PatternCompiler$CharacterClassBuilder: 1
}));
export { $d_ju_regex_PatternCompiler$CharacterClassBuilder as $d_ju_regex_PatternCompiler$CharacterClassBuilder };
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0)) {
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_kind), $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_data);
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = true;
  }
  return $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated;
}
export { $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass as $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass };
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.ju_regex_PatternCompiler$CompiledCharClass__f_negated = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = 0;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = false;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = kind;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = data;
}
export { $c_ju_regex_PatternCompiler$CompiledCharClass as $c_ju_regex_PatternCompiler$CompiledCharClass };
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
export { $h_ju_regex_PatternCompiler$CompiledCharClass as $h_ju_regex_PatternCompiler$CompiledCharClass };
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype;
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.negated__ju_regex_PatternCompiler$CompiledCharClass = (function() {
  return ((!this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.ju_regex_PatternCompiler$CompiledCharClass__f_negated);
});
function $as_ju_regex_PatternCompiler$CompiledCharClass(obj) {
  return (((obj instanceof $c_ju_regex_PatternCompiler$CompiledCharClass) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.regex.PatternCompiler$CompiledCharClass"));
}
export { $as_ju_regex_PatternCompiler$CompiledCharClass as $as_ju_regex_PatternCompiler$CompiledCharClass };
function $isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_regex_PatternCompiler$CompiledCharClass)));
}
export { $isArrayOf_ju_regex_PatternCompiler$CompiledCharClass as $isArrayOf_ju_regex_PatternCompiler$CompiledCharClass };
function $asArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (($isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.regex.PatternCompiler$CompiledCharClass;", depth));
}
export { $asArrayOf_ju_regex_PatternCompiler$CompiledCharClass as $asArrayOf_ju_regex_PatternCompiler$CompiledCharClass };
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().initClass($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  ju_regex_PatternCompiler$CompiledCharClass: 1
}));
export { $d_ju_regex_PatternCompiler$CompiledCharClass as $d_ju_regex_PatternCompiler$CompiledCharClass };
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
}
export { $c_RTLong as $c_RTLong };
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
export { $h_RTLong as $h_RTLong };
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
  } else {
    return false;
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi);
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24);
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16);
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this);
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)));
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi));
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)));
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo + $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo - $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi);
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
}
export { $as_RTLong as $as_RTLong };
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)));
}
export { $isArrayOf_RTLong as $isArrayOf_RTLong };
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth));
}
export { $asArrayOf_RTLong as $asArrayOf_RTLong };
var $d_RTLong = new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  RTLong: 1
}));
export { $d_RTLong as $d_RTLong };
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1);
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
  }
}
export { $p_RTLong$__toUnsignedString__I__I__T as $p_RTLong$__toUnsignedString__I__I__T };
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0));
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0));
  }
}
export { $p_RTLong$__unsigned_$div__I__I__I__I__I as $p_RTLong$__unsigned_$div__I__I__I__I__I };
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0));
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1));
  }
}
export { $p_RTLong$__unsigned_$percent__I__I__I__I__I as $p_RTLong$__unsigned_$percent__I__I__I__I__I };
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9;
    }
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0));
    }
  }
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo;
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr);
  }
}
export { $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O as $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O };
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
}
export { $c_RTLong$ as $c_RTLong$ };
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
export { $h_RTLong$ as $h_RTLong$ };
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $x_1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $x_1) + $uD((x$1 >>> 0.0))));
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1;
  } else {
    var abs__lo = lo;
    var abs__hi = hi;
  }
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo;
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo));
  }
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes));
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1);
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi;
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1;
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi;
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1;
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  RTLong$: 1
}));
export { $d_RTLong$ as $d_RTLong$ };
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
export { $m_RTLong$ as $m_RTLong$ };
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)));
}
export { $is_F0 as $is_F0 };
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"));
}
export { $as_F0 as $as_F0 };
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)));
}
export { $isArrayOf_F0 as $isArrayOf_F0 };
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth));
}
export { $asArrayOf_F0 as $asArrayOf_F0 };
var $d_F0 = new $TypeData().initClass(1, "scala.Function0", ({
  F0: 1
}));
export { $d_F0 as $d_F0 };
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)));
}
export { $is_F1 as $is_F1 };
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"));
}
export { $as_F1 as $as_F1 };
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)));
}
export { $isArrayOf_F1 as $isArrayOf_F1 };
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth));
}
export { $asArrayOf_F1 as $asArrayOf_F1 };
var $d_F1 = new $TypeData().initClass(1, "scala.Function1", ({
  F1: 1
}));
export { $d_F1 as $d_F1 };
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
export { $c_s_LowPriorityImplicits2 as $c_s_LowPriorityImplicits2 };
$c_s_LowPriorityImplicits2.prototype = new $h_O();
$c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
export { $h_s_LowPriorityImplicits2 as $h_s_LowPriorityImplicits2 };
$h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
/** @constructor */
function $c_s_PartialFunction$() {
  this.s_PartialFunction$__f_fallback_fn = null;
  this.s_PartialFunction$__f_empty_pf = null;
  $n_s_PartialFunction$ = this;
  this.s_PartialFunction$__f_fallback_fn = new $c_sjsr_AnonFunction1(((x$2$2) => $m_s_PartialFunction$().s_PartialFunction$__f_fallback_fn));
  this.s_PartialFunction$__f_empty_pf = new $c_s_PartialFunction$$anon$1();
}
export { $c_s_PartialFunction$ as $c_s_PartialFunction$ };
$c_s_PartialFunction$.prototype = new $h_O();
$c_s_PartialFunction$.prototype.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
export { $h_s_PartialFunction$ as $h_s_PartialFunction$ };
$h_s_PartialFunction$.prototype = $c_s_PartialFunction$.prototype;
var $d_s_PartialFunction$ = new $TypeData().initClass($c_s_PartialFunction$, "scala.PartialFunction$", ({
  s_PartialFunction$: 1
}));
export { $d_s_PartialFunction$ as $d_s_PartialFunction$ };
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$();
  }
  return $n_s_PartialFunction$;
}
export { $m_s_PartialFunction$ as $m_s_PartialFunction$ };
/** @constructor */
function $c_sc_ArrayOps$() {
  this.sc_ArrayOps$__f_fallback = null;
  $n_sc_ArrayOps$ = this;
  this.sc_ArrayOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_ArrayOps$().sc_ArrayOps$__f_fallback));
}
export { $c_sc_ArrayOps$ as $c_sc_ArrayOps$ };
$c_sc_ArrayOps$.prototype = new $h_O();
$c_sc_ArrayOps$.prototype.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
export { $h_sc_ArrayOps$ as $h_sc_ArrayOps$ };
$h_sc_ArrayOps$.prototype = $c_sc_ArrayOps$.prototype;
$c_sc_ArrayOps$.prototype.copyToArray$extension__O__O__I__I__I = (function(this$, xs, start, len) {
  var srcLen = $m_jl_reflect_Array$().getLength__O__I(this$);
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this$, 0, xs, start, copied);
  }
  return copied;
});
var $d_sc_ArrayOps$ = new $TypeData().initClass($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  sc_ArrayOps$: 1
}));
export { $d_sc_ArrayOps$ as $d_sc_ArrayOps$ };
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
export { $m_sc_ArrayOps$ as $m_sc_ArrayOps$ };
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
}
export { $is_sc_IterableOnce as $is_sc_IterableOnce };
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
}
export { $as_sc_IterableOnce as $as_sc_IterableOnce };
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)));
}
export { $isArrayOf_sc_IterableOnce as $isArrayOf_sc_IterableOnce };
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth));
}
export { $asArrayOf_sc_IterableOnce as $asArrayOf_sc_IterableOnce };
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    $n(f).apply__O__O($n(it).next__O());
  }
}
export { $f_sc_IterableOnceOps__foreach__F1__V as $f_sc_IterableOnceOps__foreach__F1__V };
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end);
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
  }
}
export { $f_sc_IterableOnceOps__mkString__T__T__T__T as $f_sc_IterableOnceOps__mkString__T__T__T__T };
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
    }
  }
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return b;
}
export { $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder as $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder };
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
export { $c_sr_BoxesRunTime$ as $c_sr_BoxesRunTime$ };
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
export { $h_sr_BoxesRunTime$ as $h_sr_BoxesRunTime$ };
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true;
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y);
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y);
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2);
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $uC($n(x3));
      return (x2$1 === this$1);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC($n(x3));
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2);
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi));
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2);
    } else {
      return false;
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3);
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1));
    } else {
      return false;
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $uC($n(xc));
    var this$2 = $uC($n(x2));
    return (this$1 === this$2);
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $uC($n(xc));
      return (x2$1 === this$3);
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC($n(xc));
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  sr_BoxesRunTime$: 1
}));
export { $d_sr_BoxesRunTime$ as $d_sr_BoxesRunTime$ };
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
export { $m_sr_BoxesRunTime$ as $m_sr_BoxesRunTime$ };
var $d_sr_Null$ = new $TypeData().initClass(0, "scala.runtime.Null$", ({
  sr_Null$: 1
}));
export { $d_sr_Null$ as $d_sr_Null$ };
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
export { $c_sr_ScalaRunTime$ as $c_sr_ScalaRunTime$ };
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
export { $h_sr_ScalaRunTime$ as $h_sr_ScalaRunTime$ };
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx);
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx);
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx);
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx);
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx);
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx);
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx);
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    $n(x2).set(idx, value);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    $n(x3).set(idx, $uI(value));
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    $n(x4).set(idx, $uD(value));
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    $n(x5).set(idx, $uJ(value));
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    $n(x6).set(idx, $uF(value));
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    $n(x7).set(idx, $uC(value));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    $n(x8).set(idx, $uB(value));
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    $n(x9).set(idx, $uS(value));
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    $n(x10).set(idx, $uZ(value));
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")");
});
$c_sr_ScalaRunTime$.prototype.wrapRefArray__AO__sci_ArraySeq = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if (($n(xs).u.length === 0)) {
    var this$1 = $m_sci_ArraySeq$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$1);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  sr_ScalaRunTime$: 1
}));
export { $d_sr_ScalaRunTime$ as $d_sr_ScalaRunTime$ };
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
export { $m_sr_ScalaRunTime$ as $m_sr_ScalaRunTime$ };
/** @constructor */
function $c_sr_Statics$() {
}
export { $c_sr_Statics$ as $c_sr_Statics$ };
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
export { $h_sr_Statics$ as $h_sr_Statics$ };
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv));
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3);
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi));
  } else {
    return $dp_hashCode__I($n(x));
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
  sr_Statics$: 1
}));
export { $d_sr_Statics$ as $d_sr_Statics$ };
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
export { $m_sr_Statics$ as $m_sr_Statics$ };
/** @constructor */
function $c_sr_Statics$PFMarker$() {
}
export { $c_sr_Statics$PFMarker$ as $c_sr_Statics$PFMarker$ };
$c_sr_Statics$PFMarker$.prototype = new $h_O();
$c_sr_Statics$PFMarker$.prototype.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
}
export { $h_sr_Statics$PFMarker$ as $h_sr_Statics$PFMarker$ };
$h_sr_Statics$PFMarker$.prototype = $c_sr_Statics$PFMarker$.prototype;
var $d_sr_Statics$PFMarker$ = new $TypeData().initClass($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
  sr_Statics$PFMarker$: 1
}));
export { $d_sr_Statics$PFMarker$ as $d_sr_Statics$PFMarker$ };
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
}
export { $m_sr_Statics$PFMarker$ as $m_sr_Statics$PFMarker$ };
/** @constructor */
function $c_sjs_js_timers_package$() {
}
export { $c_sjs_js_timers_package$ as $c_sjs_js_timers_package$ };
$c_sjs_js_timers_package$.prototype = new $h_O();
$c_sjs_js_timers_package$.prototype.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
export { $h_sjs_js_timers_package$ as $h_sjs_js_timers_package$ };
$h_sjs_js_timers_package$.prototype = $c_sjs_js_timers_package$.prototype;
$c_sjs_js_timers_package$.prototype.setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle = (function(interval, body) {
  return setTimeout((() => {
    var this$2 = $n(body);
    this$2.apply__O();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().initClass($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  sjs_js_timers_package$: 1
}));
export { $d_sjs_js_timers_package$ as $d_sjs_js_timers_package$ };
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
}
export { $m_sjs_js_timers_package$ as $m_sjs_js_timers_package$ };
/** @constructor */
function $c_sjsr_Compat$() {
}
export { $c_sjsr_Compat$ as $c_sjsr_Compat$ };
$c_sjsr_Compat$.prototype = new $h_O();
$c_sjsr_Compat$.prototype.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
export { $h_sjsr_Compat$ as $h_sjsr_Compat$ };
$h_sjsr_Compat$.prototype = $c_sjsr_Compat$.prototype;
$c_sjsr_Compat$.prototype.toJSVarArgsImpl__sci_Seq__sjs_js_Array = (function(seq) {
  if (false) {
    var x2 = $as_sjsr_WrappedVarArgs(seq);
    return $n(x2).sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array;
  } else {
    var result = [];
    $n(seq).foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => $uI(result.push(x$2)))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().initClass($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  sjsr_Compat$: 1
}));
export { $d_sjsr_Compat$ as $d_sjsr_Compat$ };
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
export { $m_sjsr_Compat$ as $m_sjsr_Compat$ };
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
export { $c_s_util_CommandLineParser$ as $c_s_util_CommandLineParser$ };
$c_s_util_CommandLineParser$.prototype = new $h_O();
$c_s_util_CommandLineParser$.prototype.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
export { $h_s_util_CommandLineParser$ as $h_s_util_CommandLineParser$ };
$h_s_util_CommandLineParser$.prototype = $c_s_util_CommandLineParser$.prototype;
$c_s_util_CommandLineParser$.prototype.showError__s_util_CommandLineParser$ParseError__V = (function(err) {
  var where = (($n(err).idx__I() === 0) ? "" : (($n(err).idx__I() === 1) ? " after first argument" : ((" after " + $n(err).idx__I()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + $n(err).msg__T());
  var this$2 = $m_s_Console$();
  var this$3 = $n(this$2.out__Ljava_io_PrintStream());
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().initClass($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  s_util_CommandLineParser$: 1
}));
export { $d_s_util_CommandLineParser$ as $d_s_util_CommandLineParser$ };
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
export { $m_s_util_CommandLineParser$ as $m_s_util_CommandLineParser$ };
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init;
}
export { $c_s_util_DynamicVariable as $c_s_util_DynamicVariable };
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
export { $h_s_util_DynamicVariable as $h_s_util_DynamicVariable };
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  s_util_DynamicVariable: 1
}));
export { $d_s_util_DynamicVariable as $d_s_util_DynamicVariable };
/** @constructor */
function $c_s_util_control_NonFatal$() {
}
export { $c_s_util_control_NonFatal$ as $c_s_util_control_NonFatal$ };
$c_s_util_control_NonFatal$.prototype = new $h_O();
$c_s_util_control_NonFatal$.prototype.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
}
export { $h_s_util_control_NonFatal$ as $h_s_util_control_NonFatal$ };
$h_s_util_control_NonFatal$.prototype = $c_s_util_control_NonFatal$.prototype;
$c_s_util_control_NonFatal$.prototype.apply__jl_Throwable__Z = (function(t) {
  return (!((t instanceof $c_jl_VirtualMachineError) || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().initClass($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  s_util_control_NonFatal$: 1
}));
export { $d_s_util_control_NonFatal$ as $d_s_util_control_NonFatal$ };
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
  }
  return $n_s_util_control_NonFatal$;
}
export { $m_s_util_control_NonFatal$ as $m_s_util_control_NonFatal$ };
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
export { $c_s_util_hashing_MurmurHash3 as $c_s_util_hashing_MurmurHash3 };
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
export { $h_s_util_hashing_MurmurHash3 as $h_s_util_hashing_MurmurHash3 };
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length));
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()));
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
    }
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0);
    }
    return this.finalizeHash__I__I__I(h, arr);
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n);
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0);
  }
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
  }
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0);
      }
      return this.finalizeHash__I__I__I(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().getLength__O__I(a);
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if ((rangeDiff !== ((hash - prev) | 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, ($n(a).get(0) ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = ($n(a).get(0) ? 1231 : 1237);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = ($n(a).get(1) ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = ($n(a).get(i) ? 1231 : 1237);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, ($n(a).get(i) ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var dv = $n(a).get(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
      break;
    }
    default: {
      var dv$1 = $n(a).get(0);
      var initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var dv$2 = $n(a).get(1);
      var prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var dv$3 = $n(a).get(i);
        var hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var dv$4 = $n(a).get(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().doubleHash__D__I(dv$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var fv = $n(a).get(0);
      var this$1 = $m_sr_Statics$();
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, this$1.doubleHash__D__I(fv)), 1);
      break;
    }
    default: {
      var fv$1 = $n(a).get(0);
      var this$2 = $m_sr_Statics$();
      var initial = this$2.doubleHash__D__I(fv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var fv$2 = $n(a).get(1);
      var this$3 = $m_sr_Statics$();
      var prev = this$3.doubleHash__D__I(fv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var fv$3 = $n(a).get(i);
        var this$4 = $m_sr_Statics$();
        var hash = this$4.doubleHash__D__I(fv$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var fv$4 = $n(a).get(i);
            var this$5 = $m_sr_Statics$();
            h = this.mix__I__I__I($x_2, this$5.doubleHash__D__I(fv$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = $n(a).get(0);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
      break;
    }
    default: {
      var t$1 = $n(a).get(0);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      var initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var t$2 = $n(a).get(1);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      var prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var t$3 = $n(a).get(i);
        var lo$3 = t$3.RTLong__f_lo;
        var hi$3 = t$3.RTLong__f_hi;
        var hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = $n(a).get(i);
            var lo$4 = t$4.RTLong__f_lo;
            var hi$4 = t$4.RTLong__f_hi;
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__Ajl_Void__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
      break;
    }
    default: {
      h = this.mix__I__I__I(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        if ((rangeDiff !== ((-prev) | 0))) {
          h = this.mix__I__I__I(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, 0);
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((_$1) => {
    var _$1$1 = $as_jl_Throwable(_$1);
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1$1, transaction);
  })), new $c_sjsr_AnonFunction1(((_$2) => {
    $thiz.onNext__O__Lcom_raquo_airstream_core_Transaction__V(_$2, transaction);
  })));
}
export { $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V };
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(new $c_s_util_Success(nextValue), transaction);
}
export { $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V };
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(new $c_s_util_Failure(nextError), transaction);
}
export { $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V };
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions = null;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled = null;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f__isKilledForever = false;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f__isKilledForever = false;
}
export { $c_Lcom_raquo_airstream_ownership_OneTimeOwner as $c_Lcom_raquo_airstream_ownership_OneTimeOwner };
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
export { $h_Lcom_raquo_airstream_ownership_OneTimeOwner as $h_Lcom_raquo_airstream_ownership_OneTimeOwner };
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype;
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.subscriptions__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions;
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.com$raquo$airstream$ownership$Owner$_setter_$subscriptions_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions = x$0;
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.own__Lcom_raquo_airstream_ownership_Subscription__V = (function(subscription) {
  if (this.Lcom_raquo_airstream_ownership_OneTimeOwner__f__isKilledForever) {
    var this$1 = $n(subscription);
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this$1);
    $n(this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled).apply__O();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.killSubscriptions__V = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f__isKilledForever = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().initClass($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  Lcom_raquo_airstream_ownership_OneTimeOwner: 1,
  Lcom_raquo_airstream_ownership_Owner: 1
}));
export { $d_Lcom_raquo_airstream_ownership_OneTimeOwner as $d_Lcom_raquo_airstream_ownership_OneTimeOwner };
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_subscriptions = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
export { $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ as $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ };
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
}
export { $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ as $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ };
$h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype;
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.subscriptions__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_subscriptions;
});
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.com$raquo$airstream$ownership$Owner$_setter_$subscriptions_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_subscriptions = x$0;
});
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.killSubscriptions__V = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.own__Lcom_raquo_airstream_ownership_Subscription__V = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().initClass($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$: 1,
  Lcom_raquo_airstream_ownership_Owner: 1
}));
export { $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ as $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ };
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$2() {
}
export { $c_Lcom_raquo_laminar_codecs_package$$anon$2 as $c_Lcom_raquo_laminar_codecs_package$$anon$2 };
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = new $h_O();
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$2() {
}
export { $h_Lcom_raquo_laminar_codecs_package$$anon$2 as $h_Lcom_raquo_laminar_codecs_package$$anon$2 };
$h_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = $c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype;
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype.encode__O__O = (function(scalaValue) {
  return scalaValue;
});
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype.decode__O__O = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().initClass($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  Lcom_raquo_laminar_codecs_package$$anon$2: 1,
  Lcom_raquo_laminar_codecs_Codec: 1
}));
export { $d_Lcom_raquo_laminar_codecs_package$$anon$2 as $d_Lcom_raquo_laminar_codecs_package$$anon$2 };
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
}
export { $c_Lcom_raquo_laminar_keys_CompositeKey as $c_Lcom_raquo_laminar_keys_CompositeKey };
$c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_CompositeKey.prototype.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
export { $h_Lcom_raquo_laminar_keys_CompositeKey as $h_Lcom_raquo_laminar_keys_CompositeKey };
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype;
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().initClass($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  Lcom_raquo_laminar_keys_CompositeKey: 1,
  Lcom_raquo_laminar_keys_Key: 1
}));
export { $d_Lcom_raquo_laminar_keys_CompositeKey as $d_Lcom_raquo_laminar_keys_CompositeKey };
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.Lcom_raquo_laminar_keys_EventProp__f_name = null;
  this.Lcom_raquo_laminar_keys_EventProp__f_name = name;
}
export { $c_Lcom_raquo_laminar_keys_EventProp as $c_Lcom_raquo_laminar_keys_EventProp };
$c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_EventProp.prototype.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
export { $h_Lcom_raquo_laminar_keys_EventProp as $h_Lcom_raquo_laminar_keys_EventProp };
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $c_Lcom_raquo_laminar_keys_EventProp.prototype;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().initClass($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  Lcom_raquo_laminar_keys_EventProp: 1,
  Lcom_raquo_laminar_keys_Key: 1
}));
export { $d_Lcom_raquo_laminar_keys_EventProp as $d_Lcom_raquo_laminar_keys_EventProp };
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.Lcom_raquo_laminar_keys_HtmlAttr__f_name = null;
  this.Lcom_raquo_laminar_keys_HtmlAttr__f_codec = null;
  this.Lcom_raquo_laminar_keys_HtmlAttr__f_name = name;
  this.Lcom_raquo_laminar_keys_HtmlAttr__f_codec = codec;
}
export { $c_Lcom_raquo_laminar_keys_HtmlAttr as $c_Lcom_raquo_laminar_keys_HtmlAttr };
$c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_HtmlAttr.prototype.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
export { $h_Lcom_raquo_laminar_keys_HtmlAttr as $h_Lcom_raquo_laminar_keys_HtmlAttr };
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype;
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().initClass($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  Lcom_raquo_laminar_keys_HtmlAttr: 1,
  Lcom_raquo_laminar_keys_Key: 1
}));
export { $d_Lcom_raquo_laminar_keys_HtmlAttr as $d_Lcom_raquo_laminar_keys_HtmlAttr };
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.Lcom_raquo_laminar_keys_SvgAttr__f_localName = null;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_codec = null;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_name = null;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri = null;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_localName = localName;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_codec = codec;
  var this$1 = $n(namespacePrefix);
  if (this$1.isEmpty__Z()) {
    var $x_1 = $m_s_None$();
  } else {
    var arg1 = this$1.get__O();
    var _$1 = $as_T(arg1);
    var $x_1 = new $c_s_Some(((_$1 + ":") + localName));
  }
  var this$2 = $n($x_1);
  this.Lcom_raquo_laminar_keys_SvgAttr__f_name = $as_T((this$2.isEmpty__Z() ? localName : this$2.get__O()));
  var this$3 = $n(namespacePrefix);
  if (this$3.isEmpty__Z()) {
    var $x_2 = $m_s_None$();
  } else {
    var arg1$1 = this$3.get__O();
    var namespace = $as_T(arg1$1);
    var $x_2 = new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().namespaceUri__T__T(namespace));
  }
  this.Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri = $x_2;
}
export { $c_Lcom_raquo_laminar_keys_SvgAttr as $c_Lcom_raquo_laminar_keys_SvgAttr };
$c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_SvgAttr.prototype.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
export { $h_Lcom_raquo_laminar_keys_SvgAttr as $h_Lcom_raquo_laminar_keys_SvgAttr };
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().initClass($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  Lcom_raquo_laminar_keys_SvgAttr: 1,
  Lcom_raquo_laminar_keys_Key: 1
}));
export { $d_Lcom_raquo_laminar_keys_SvgAttr as $d_Lcom_raquo_laminar_keys_SvgAttr };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Inserter(initialContext, preferStrictMode, insertFn) {
  this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext = null;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_preferStrictMode = false;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn = null;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext = initialContext;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_preferStrictMode = preferStrictMode;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn = insertFn;
}
export { $c_Lcom_raquo_laminar_modifiers_Inserter as $c_Lcom_raquo_laminar_modifiers_Inserter };
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Inserter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Inserter() {
}
export { $h_Lcom_raquo_laminar_modifiers_Inserter as $h_Lcom_raquo_laminar_modifiers_Inserter };
$h_Lcom_raquo_laminar_modifiers_Inserter.prototype = $c_Lcom_raquo_laminar_modifiers_Inserter.prototype;
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(element) {
  var this$1 = $n(this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext);
  var insertContext = $as_Lcom_raquo_laminar_lifecycle_InsertContext((this$1.isEmpty__Z() ? $m_Lcom_raquo_laminar_lifecycle_InsertContext$().reserveSpotContext__Lcom_raquo_laminar_nodes_ReactiveElement__Z__Lcom_raquo_laminar_lifecycle_InsertContext(element, this.Lcom_raquo_laminar_modifiers_Inserter__f_preferStrictMode) : this$1.get__O()));
  var subscribe = new $c_sjsr_AnonFunction1(((mountContext) => {
    var mountContext$1 = $as_Lcom_raquo_laminar_lifecycle_MountContext(mountContext);
    return $as_Lcom_raquo_airstream_ownership_Subscription($n(this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn).apply__O__O__O(insertContext, $n(mountContext$1).Lcom_raquo_laminar_lifecycle_MountContext__f_owner));
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner) => {
    var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner);
    return $as_Lcom_raquo_airstream_ownership_Subscription(subscribe.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1)));
  })), false);
});
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  this.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_airstream_ownership_DynamicSubscription(element);
});
var $d_Lcom_raquo_laminar_modifiers_Inserter = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_Inserter, "com.raquo.laminar.modifiers.Inserter", ({
  Lcom_raquo_laminar_modifiers_Inserter: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_Inserter as $d_Lcom_raquo_laminar_modifiers_Inserter };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
export { $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 as $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 };
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
export { $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 as $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 };
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype;
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  Lcom_raquo_laminar_modifiers_Modifier$$anon$1: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 as $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2) {
  this.Lcom_raquo_laminar_modifiers_Modifier$$anon$2__f_f$1 = null;
  this.Lcom_raquo_laminar_modifiers_Modifier$$anon$2__f_f$1 = f$2;
}
export { $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 as $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 };
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2() {
}
export { $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 as $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 };
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype;
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  var this$1 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = ((1 + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
  try {
    $n(this.Lcom_raquo_laminar_modifiers_Modifier$$anon$2__f_f$1).apply__O__O(element);
  } finally {
    this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = (((-1) + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
    if ((this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level === 0)) {
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$1);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  Lcom_raquo_laminar_modifiers_Modifier$$anon$2: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 as $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1(renderNode$2, renderNodeSeq$2, renderNodeIterable$2, renderNodeOption$2) {
  this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNode$1 = null;
  this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNodeSeq$1 = null;
  this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNode$1 = renderNode$2;
  this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNodeSeq$1 = renderNodeSeq$2;
}
export { $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 as $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 };
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
export { $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 as $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 };
$h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype;
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype.asNode__O__Lcom_raquo_laminar_nodes_ChildNode = (function(value) {
  return $as_Lcom_raquo_laminar_nodes_ChildNode($n(this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNode$1).apply__O__O(value));
});
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype.asNodeSeq__sci_Seq__sci_Seq = (function(values) {
  return $as_sci_Seq($n(this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNodeSeq$1).apply__O__O(values));
});
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1, "com.raquo.laminar.modifiers.RenderableNode$$anon$1", ({
  Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1: 1,
  Lcom_raquo_laminar_modifiers_RenderableNode: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 as $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$2) {
  this.Lcom_raquo_laminar_modifiers_RenderableText$$anon$1__f_render$1 = null;
  this.Lcom_raquo_laminar_modifiers_RenderableText$$anon$1__f_render$1 = render$2;
}
export { $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 as $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 };
$c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1() {
}
export { $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 as $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 };
$h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype;
$c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype.asString__O__T = (function(value) {
  return $as_T($n(this.Lcom_raquo_laminar_modifiers_RenderableText$$anon$1__f_render$1).apply__O__O(value));
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  Lcom_raquo_laminar_modifiers_RenderableText$$anon$1: 1,
  Lcom_raquo_laminar_modifiers_RenderableText: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 as $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 };
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0((() => {
    var this$3 = $n($m_Lcom_raquo_laminar_DomApi$().debugPath__Lorg_scalajs_dom_Node__sci_List__sci_List($thiz.ref__Lorg_scalajs_dom_Node(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())));
    var path = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$3, "", " > ", "");
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + path));
  }))));
  $thiz.com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__O__V((void 0));
}
export { $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V as $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V };
function $is_Lcom_raquo_laminar_nodes_ParentNode(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ParentNode)));
}
export { $is_Lcom_raquo_laminar_nodes_ParentNode as $is_Lcom_raquo_laminar_nodes_ParentNode };
function $as_Lcom_raquo_laminar_nodes_ParentNode(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ParentNode(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ParentNode"));
}
export { $as_Lcom_raquo_laminar_nodes_ParentNode as $as_Lcom_raquo_laminar_nodes_ParentNode };
function $isArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ParentNode)));
}
export { $isArrayOf_Lcom_raquo_laminar_nodes_ParentNode as $isArrayOf_Lcom_raquo_laminar_nodes_ParentNode };
function $asArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ParentNode;", depth));
}
export { $asArrayOf_Lcom_raquo_laminar_nodes_ParentNode as $asArrayOf_Lcom_raquo_laminar_nodes_ParentNode };
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.Lcom_raquo_laminar_tags_HtmlTag__f_name = null;
  this.Lcom_raquo_laminar_tags_HtmlTag__f_name = name;
}
export { $c_Lcom_raquo_laminar_tags_HtmlTag as $c_Lcom_raquo_laminar_tags_HtmlTag };
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
export { $h_Lcom_raquo_laminar_tags_HtmlTag as $h_Lcom_raquo_laminar_tags_HtmlTag };
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype;
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(modifiers) {
  var element = this.build__Lcom_raquo_laminar_nodes_ReactiveHtmlElement();
  $n(modifiers).foreach__F1__V(new $c_sjsr_AnonFunction1(((modifier) => {
    var modifier$1 = $as_Lcom_raquo_laminar_modifiers_Modifier(modifier);
    $n(modifier$1).apply__Lcom_raquo_laminar_nodes_ReactiveElement__V(element);
  })));
  return element;
});
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype.build__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().createHtmlElement__Lcom_raquo_laminar_tags_HtmlTag__Lorg_scalajs_dom_HTMLElement(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().initClass($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  Lcom_raquo_laminar_tags_HtmlTag: 1,
  Lcom_raquo_laminar_tags_Tag: 1
}));
export { $d_Lcom_raquo_laminar_tags_HtmlTag as $d_Lcom_raquo_laminar_tags_HtmlTag };
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.Lcom_raquo_laminar_tags_SvgTag__f_name = null;
  this.Lcom_raquo_laminar_tags_SvgTag__f_name = name;
}
export { $c_Lcom_raquo_laminar_tags_SvgTag as $c_Lcom_raquo_laminar_tags_SvgTag };
$c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$c_Lcom_raquo_laminar_tags_SvgTag.prototype.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
export { $h_Lcom_raquo_laminar_tags_SvgTag as $h_Lcom_raquo_laminar_tags_SvgTag };
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $c_Lcom_raquo_laminar_tags_SvgTag.prototype;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().initClass($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  Lcom_raquo_laminar_tags_SvgTag: 1,
  Lcom_raquo_laminar_tags_Tag: 1
}));
export { $d_Lcom_raquo_laminar_tags_SvgTag as $d_Lcom_raquo_laminar_tags_SvgTag };
/** @constructor */
function $c_jl_Number() {
}
export { $c_jl_Number as $c_jl_Number };
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
export { $h_jl_Number as $h_jl_Number };
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
export { $is_jl_Number as $is_jl_Number };
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"));
}
export { $as_jl_Number as $as_jl_Number };
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)));
}
export { $isArrayOf_jl_Number as $isArrayOf_jl_Number };
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth));
}
export { $asArrayOf_jl_Number as $asArrayOf_jl_Number };
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.jl_StackTraceElement__f_declaringClass = null;
  this.jl_StackTraceElement__f_methodName = null;
  this.jl_StackTraceElement__f_fileName = null;
  this.jl_StackTraceElement__f_lineNumber = 0;
  this.jl_StackTraceElement__f_columnNumber = 0;
  this.jl_StackTraceElement__f_declaringClass = declaringClass;
  this.jl_StackTraceElement__f_methodName = methodName;
  this.jl_StackTraceElement__f_fileName = fileName;
  this.jl_StackTraceElement__f_lineNumber = lineNumber;
  this.jl_StackTraceElement__f_columnNumber = columnNumber;
}
export { $c_jl_StackTraceElement as $c_jl_StackTraceElement };
$c_jl_StackTraceElement.prototype = new $h_O();
$c_jl_StackTraceElement.prototype.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
export { $h_jl_StackTraceElement as $h_jl_StackTraceElement };
$h_jl_StackTraceElement.prototype = $c_jl_StackTraceElement.prototype;
$c_jl_StackTraceElement.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_jl_StackTraceElement)) {
    var x2 = $as_jl_StackTraceElement(that);
    return (((((this.jl_StackTraceElement__f_fileName === $n(x2).jl_StackTraceElement__f_fileName) && (this.jl_StackTraceElement__f_lineNumber === $n(x2).jl_StackTraceElement__f_lineNumber)) && (this.jl_StackTraceElement__f_columnNumber === $n(x2).jl_StackTraceElement__f_columnNumber)) && (this.jl_StackTraceElement__f_declaringClass === $n(x2).jl_StackTraceElement__f_declaringClass)) && (this.jl_StackTraceElement__f_methodName === $n(x2).jl_StackTraceElement__f_methodName));
  } else {
    return false;
  }
});
$c_jl_StackTraceElement.prototype.toString__T = (function() {
  var result = "";
  if ((this.jl_StackTraceElement__f_declaringClass !== "<jscode>")) {
    result = ((("" + result) + this.jl_StackTraceElement__f_declaringClass) + ".");
  }
  result = (("" + result) + this.jl_StackTraceElement__f_methodName);
  if ((this.jl_StackTraceElement__f_fileName === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.jl_StackTraceElement__f_fileName);
    if ((this.jl_StackTraceElement__f_lineNumber >= 0)) {
      result = ((result + ":") + this.jl_StackTraceElement__f_lineNumber);
      if ((this.jl_StackTraceElement__f_columnNumber >= 0)) {
        result = ((result + ":") + this.jl_StackTraceElement__f_columnNumber);
      }
    }
    result = (result + ")");
  }
  return result;
});
$c_jl_StackTraceElement.prototype.hashCode__I = (function() {
  return (((($f_T__hashCode__I($n(this.jl_StackTraceElement__f_declaringClass)) ^ $f_T__hashCode__I($n(this.jl_StackTraceElement__f_methodName))) ^ $f_T__hashCode__I($n(this.jl_StackTraceElement__f_fileName))) ^ this.jl_StackTraceElement__f_lineNumber) ^ this.jl_StackTraceElement__f_columnNumber);
});
function $as_jl_StackTraceElement(obj) {
  return (((obj instanceof $c_jl_StackTraceElement) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.StackTraceElement"));
}
export { $as_jl_StackTraceElement as $as_jl_StackTraceElement };
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_StackTraceElement)));
}
export { $isArrayOf_jl_StackTraceElement as $isArrayOf_jl_StackTraceElement };
function $asArrayOf_jl_StackTraceElement(obj, depth) {
  return (($isArrayOf_jl_StackTraceElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.StackTraceElement;", depth));
}
export { $asArrayOf_jl_StackTraceElement as $asArrayOf_jl_StackTraceElement };
var $d_jl_StackTraceElement = new $TypeData().initClass($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  jl_StackTraceElement: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_StackTraceElement as $d_jl_StackTraceElement };
/** @constructor */
function $c_jl_String$() {
}
export { $c_jl_String$ as $c_jl_String$ };
$c_jl_String$.prototype = new $h_O();
$c_jl_String$.prototype.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
export { $h_jl_String$ as $h_jl_String$ };
$h_jl_String$.prototype = $c_jl_String$.prototype;
$c_jl_String$.prototype.new__AC__I__I__T = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > $n(value).u.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException());
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    var $x_1 = result;
    var this$1 = $n(value).get(i);
    result = ($x_1 + ("" + $cToS(this$1)));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().initClass($c_jl_String$, "java.lang.String$", ({
  jl_String$: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_String$ as $d_jl_String$ };
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
export { $m_jl_String$ as $m_jl_String$ };
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable();
  }
  return $thiz;
}
export { $ct_jl_Throwable__T__jl_Throwable__Z__Z__ as $ct_jl_Throwable__T__jl_Throwable__Z__Z__ };
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_jsErrorForStackTrace = null;
    this.jl_Throwable__f_stackTrace = null;
  }
  initCause__jl_Throwable__jl_Throwable(cause) {
    return this;
  }
  getMessage__T() {
    return this.jl_Throwable__f_s;
  }
  fillInStackTrace__jl_Throwable() {
    var $x_1 = this;
    var reference = (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.sjs_js_JavaScriptException__f_exception : $n($x_1));
    var identifyingString = Object.prototype.toString.call(reference);
    this.jl_Throwable__f_jsErrorForStackTrace = ((identifyingString === "[object Error]") ? reference : ((Error.captureStackTrace === (void 0)) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  getStackTrace__Ajl_StackTraceElement() {
    if ((this.jl_Throwable__f_stackTrace === null)) {
      if (this.jl_Throwable__f_writableStackTrace) {
        this.jl_Throwable__f_stackTrace = $m_jl_StackTrace$().extract__O__Ajl_StackTraceElement(this.jl_Throwable__f_jsErrorForStackTrace);
      } else {
        this.jl_Throwable__f_stackTrace = new ($d_jl_StackTraceElement.getArrayOf().constr)(0);
      }
    }
    return this.jl_Throwable__f_stackTrace;
  }
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this);
  }
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that);
  }
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.toString__T();
  }
}
export { $c_jl_Throwable as $c_jl_Throwable };
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"));
}
export { $as_jl_Throwable as $as_jl_Throwable };
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)));
}
export { $isArrayOf_jl_Throwable as $isArrayOf_jl_Throwable };
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth));
}
export { $asArrayOf_jl_Throwable as $asArrayOf_jl_Throwable };
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available");
  }
  return $thiz.ju_regex_Matcher__f_lastMatch;
}
export { $p_ju_regex_Matcher__ensureLastMatch__O as $p_ju_regex_Matcher__ensureLastMatch__O };
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.ju_regex_Matcher__f_pattern0 = null;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = null;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  this.ju_regex_Matcher__f_inputstr = null;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_pattern0 = pattern0;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = input0;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  $n(this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0);
  this.ju_regex_Matcher__f_inputstr = this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
}
export { $c_ju_regex_Matcher as $c_ju_regex_Matcher };
$c_ju_regex_Matcher.prototype = new $h_O();
$c_ju_regex_Matcher.prototype.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
export { $h_ju_regex_Matcher as $h_ju_regex_Matcher };
$h_ju_regex_Matcher.prototype = $c_ju_regex_Matcher.prototype;
$c_ju_regex_Matcher.prototype.find__Z = (function() {
  var this$1 = $n(this.ju_regex_Matcher__f_pattern0);
  var input = this.ju_regex_Matcher__f_inputstr;
  var start = this.ju_regex_Matcher__f_position;
  var mtch = this$1.java$util$regex$Pattern$$execFindInternal__T__I__O(input, start);
  var end = $uI(this$1.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind.lastIndex);
  if ((mtch !== null)) {
    var $x_1 = ((end === $uI(mtch.index)) ? ((1 + end) | 0) : end);
  } else {
    var this$2 = $n(this.ju_regex_Matcher__f_inputstr);
    var $x_1 = ((1 + this$2.length) | 0);
  }
  this.ju_regex_Matcher__f_position = $x_1;
  this.ju_regex_Matcher__f_lastMatch = mtch;
  return (mtch !== null);
});
$c_ju_regex_Matcher.prototype.start__I = (function() {
  return (($uI($p_ju_regex_Matcher__ensureLastMatch__O(this).index) + this.ju_regex_Matcher__f_regionStart0) | 0);
});
$c_ju_regex_Matcher.prototype.end__I = (function() {
  var $x_1 = this.start__I();
  var this$1 = $n(this.group__T());
  return (($x_1 + this$1.length) | 0);
});
$c_ju_regex_Matcher.prototype.group__T = (function() {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
  return $as_T(x);
});
var $d_ju_regex_Matcher = new $TypeData().initClass($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  ju_regex_Matcher: 1,
  ju_regex_MatchResult: 1
}));
export { $d_ju_regex_Matcher as $d_ju_regex_Matcher };
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.ju_regex_Pattern__f__pattern = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = false;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = null;
  this.ju_regex_Pattern__f__pattern = _pattern;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = jsFlags;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = sticky;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = new RegExp(jsPattern, (this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags + (this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
export { $c_ju_regex_Pattern as $c_ju_regex_Pattern };
$c_ju_regex_Pattern.prototype = new $h_O();
$c_ju_regex_Pattern.prototype.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
export { $h_ju_regex_Pattern as $h_ju_regex_Pattern };
$h_ju_regex_Pattern.prototype = $c_ju_regex_Pattern.prototype;
$c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$execFindInternal__T__I__O = (function(input, start) {
  var regexp = this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$c_ju_regex_Pattern.prototype.toString__T = (function() {
  return this.ju_regex_Pattern__f__pattern;
});
$c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$split__T__I__AT = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.getArrayOf().constr)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var this$1 = $n(inputStr);
    var matcher = new $c_ju_regex_Matcher(this, this$1);
    var result = [];
    var prevEnd = 0;
    while ((($uI(result.length) < (((-1) + lim) | 0)) && matcher.find__Z())) {
      if ((matcher.end__I() !== 0)) {
        var this$2 = $n(inputStr);
        var beginIndex = prevEnd;
        var endIndex = matcher.start__I();
        if ((beginIndex < 0)) {
          $charAt(this$2, beginIndex);
        }
        if ((endIndex > this$2.length)) {
          $charAt(this$2, endIndex);
        }
        if ((endIndex < beginIndex)) {
          $charAt(this$2, (-1));
        }
        var $x_1 = result.push($as_T(this$2.substring(beginIndex, endIndex)));
        $uI($x_1);
      }
      prevEnd = matcher.end__I();
    }
    var this$3 = $n(inputStr);
    var beginIndex$1 = prevEnd;
    if (((beginIndex$1 < 0) || (beginIndex$1 > this$3.length))) {
      $charAt(this$3, beginIndex$1);
    }
    result.push($as_T(this$3.substring(beginIndex$1)));
    var actualLength = $uI(result.length);
    if ((limit === 0)) {
      while (true) {
        if ((actualLength !== 0)) {
          var x = result[(((-1) + actualLength) | 0)];
          var $x_2 = ((x !== null) && $dp_equals__O__Z($n(x), ""));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          actualLength = (((-1) + actualLength) | 0);
        } else {
          break;
        }
      }
    }
    var r = new ($d_T.getArrayOf().constr)(actualLength);
    var end = actualLength;
    var i = 0;
    while ((i < end)) {
      var i$2 = i;
      $n(r).set(i$2, $as_T(result[i$2]));
      i = ((1 + i) | 0);
    }
    return r;
  }
});
var $d_ju_regex_Pattern = new $TypeData().initClass($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  ju_regex_Pattern: 1,
  Ljava_io_Serializable: 1
}));
export { $d_ju_regex_Pattern as $d_ju_regex_Pattern };
/** @constructor */
function $c_s_$less$colon$less$() {
  this.s_$less$colon$less$__f_singleton = null;
  $n_s_$less$colon$less$ = this;
  this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1();
}
export { $c_s_$less$colon$less$ as $c_s_$less$colon$less$ };
$c_s_$less$colon$less$.prototype = new $h_O();
$c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
export { $h_s_$less$colon$less$ as $h_s_$less$colon$less$ };
$h_s_$less$colon$less$.prototype = $c_s_$less$colon$less$.prototype;
var $d_s_$less$colon$less$ = new $TypeData().initClass($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  s_$less$colon$less$: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_$less$colon$less$ as $d_s_$less$colon$less$ };
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$();
  }
  return $n_s_$less$colon$less$;
}
export { $m_s_$less$colon$less$ as $m_s_$less$colon$less$ };
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
export { $p_s_Array$__slowcopy__O__I__O__I__I__V as $p_s_Array$__slowcopy__O__I__O__I__I__V };
/** @constructor */
function $c_s_Array$() {
}
export { $c_s_Array$ as $c_s_Array$ };
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
export { $h_s_Array$ as $h_s_Array$ };
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__O = (function(it, evidence$3) {
  var n = $n(it).knownSize__I();
  if ((n > (-1))) {
    var elements = $n(evidence$3).newArray__I__O(n);
    var iterator = $n(it).iterator__sc_Iterator();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().array_update__O__I__O__V(elements, i, $n(iterator).next__O());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var jsElems = null;
    var elementClass = $n(evidence$3).runtimeClass__jl_Class();
    capacity = 0;
    var isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    var iterator$2 = $n(it).iterator__sc_Iterator();
    while ($n(iterator$2).hasNext__Z()) {
      var elem = $n(iterator$2).next__O();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $n(elementClass).jl_Class__f_data.zero : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    return $n(elemRuntimeClass).jl_Class__f_data.getArrayOf().wrapArray(jsElems);
  }
});
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var this$1 = $n(src);
  var srcClass = $objectGetClass(this$1);
  if ($n(srcClass).isArray__Z()) {
    var this$2 = $n(dest);
    var $x_1 = $n($objectGetClass(this$2)).isAssignableFrom__jl_Class__Z(srcClass);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if (($n(xs).u.length !== $n(ys).u.length)) {
    return false;
  }
  var len = $n(xs).u.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($n(xs).get(i), $n(ys).get(i)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().initClass($c_s_Array$, "scala.Array$", ({
  s_Array$: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_Array$ as $d_s_Array$ };
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
export { $m_s_Array$ as $m_s_Array$ };
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
}
export { $c_s_Console$ as $c_s_Console$ };
$c_s_Console$.prototype = new $h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
export { $h_s_Console$ as $h_s_Console$ };
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
});
var $d_s_Console$ = new $TypeData().initClass($c_s_Console$, "scala.Console$", ({
  s_Console$: 1,
  s_io_AnsiColor: 1
}));
export { $d_s_Console$ as $d_s_Console$ };
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
export { $m_s_Console$ as $m_s_Console$ };
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
export { $c_s_LowPriorityImplicits as $c_s_LowPriorityImplicits };
$c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
export { $h_s_LowPriorityImplicits as $h_s_LowPriorityImplicits };
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
$c_s_LowPriorityImplicits.prototype.wrapRefArray__AO__scm_ArraySeq$ofRef = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if (($n(xs).u.length === 0)) {
    var this$1 = $m_scm_ArraySeq$();
    return this$1.scm_ArraySeq$__f_EmptyArraySeq;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.isDefinedAt__O__Z(x) ? $thiz.apply__O__O(x) : $n(default$1).apply__O__O(x));
}
export { $f_s_PartialFunction__applyOrElse__O__F1__O as $f_s_PartialFunction__applyOrElse__O__F1__O };
function $is_s_PartialFunction(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_PartialFunction)));
}
export { $is_s_PartialFunction as $is_s_PartialFunction };
function $as_s_PartialFunction(obj) {
  return (($is_s_PartialFunction(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.PartialFunction"));
}
export { $as_s_PartialFunction as $as_s_PartialFunction };
function $isArrayOf_s_PartialFunction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_PartialFunction)));
}
export { $isArrayOf_s_PartialFunction as $isArrayOf_s_PartialFunction };
function $asArrayOf_s_PartialFunction(obj, depth) {
  return (($isArrayOf_s_PartialFunction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.PartialFunction;", depth));
}
export { $asArrayOf_s_PartialFunction as $asArrayOf_s_PartialFunction };
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(elems));
  } else {
    var it = $n(elems).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      $thiz.addOne__O__scm_Growable($n(it).next__O());
    }
  }
  return $thiz;
}
export { $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable as $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable };
/** @constructor */
function $c_sr_AbstractFunction0() {
}
export { $c_sr_AbstractFunction0 as $c_sr_AbstractFunction0 };
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
export { $h_sr_AbstractFunction0 as $h_sr_AbstractFunction0 };
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
export { $c_sr_AbstractFunction1 as $c_sr_AbstractFunction1 };
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
export { $h_sr_AbstractFunction1 as $h_sr_AbstractFunction1 };
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
export { $c_sr_AbstractFunction2 as $c_sr_AbstractFunction2 };
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
export { $h_sr_AbstractFunction2 as $h_sr_AbstractFunction2 };
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
export { $c_sr_AbstractFunction4 as $c_sr_AbstractFunction4 };
$c_sr_AbstractFunction4.prototype = new $h_O();
$c_sr_AbstractFunction4.prototype.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
export { $h_sr_AbstractFunction4 as $h_sr_AbstractFunction4 };
$h_sr_AbstractFunction4.prototype = $c_sr_AbstractFunction4.prototype;
$c_sr_AbstractFunction4.prototype.toString__T = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.sr_BooleanRef__f_elem = false;
  this.sr_BooleanRef__f_elem = elem;
}
export { $c_sr_BooleanRef as $c_sr_BooleanRef };
$c_sr_BooleanRef.prototype = new $h_O();
$c_sr_BooleanRef.prototype.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
export { $h_sr_BooleanRef as $h_sr_BooleanRef };
$h_sr_BooleanRef.prototype = $c_sr_BooleanRef.prototype;
$c_sr_BooleanRef.prototype.toString__T = (function() {
  var b = this.sr_BooleanRef__f_elem;
  return ("" + b);
});
var $d_sr_BooleanRef = new $TypeData().initClass($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  sr_BooleanRef: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sr_BooleanRef as $d_sr_BooleanRef };
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem;
}
export { $c_sr_IntRef as $c_sr_IntRef };
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
export { $h_sr_IntRef as $h_sr_IntRef };
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i);
});
var $d_sr_IntRef = new $TypeData().initClass($c_sr_IntRef, "scala.runtime.IntRef", ({
  sr_IntRef: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sr_IntRef as $d_sr_IntRef };
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem;
}
export { $c_sr_ObjectRef as $c_sr_ObjectRef };
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
export { $h_sr_ObjectRef as $h_sr_ObjectRef };
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj);
});
var $d_sr_ObjectRef = new $TypeData().initClass($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  sr_ObjectRef: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sr_ObjectRef as $d_sr_ObjectRef };
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
}
export { $c_s_util_hashing_MurmurHash3$ as $c_s_util_hashing_MurmurHash3$ };
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
export { $h_s_util_hashing_MurmurHash3$ as $h_s_util_hashing_MurmurHash3$ };
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1
}));
export { $d_s_util_hashing_MurmurHash3$ as $d_s_util_hashing_MurmurHash3$ };
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
export { $m_s_util_hashing_MurmurHash3$ as $m_s_util_hashing_MurmurHash3$ };
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
export { $c_Lcom_raquo_airstream_core_AirstreamError as $c_Lcom_raquo_airstream_core_AirstreamError };
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks = null;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback = null;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks = $as_scm_Buffer($m_scm_Buffer$().apply__sci_Seq__sc_SeqOps($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_F1.getArrayOf().constr)([]))));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback = new $c_sjsr_AnonFunction1(((err) => {
    var err$1 = $as_jl_Throwable(err);
    try {
      var $x_2 = console;
      var $x_1 = $n(err$1).getMessage__T();
      var this$2 = $n($m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($n(err$1).getStackTrace__Ajl_StackTraceElement()));
      $x_2.error((($x_1 + "\n") + $f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", "\n", "")));
    } catch (e) {
    }
  }));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback = new $c_sjsr_AnonFunction1(((err$2) => {
    var err$3 = $as_jl_Throwable(err$2);
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    throw ((err$3 === null) ? $n(null) : err$3);
  }));
  this.registerUnhandledErrorCallback__F1__V(this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback);
}
export { $c_Lcom_raquo_airstream_core_AirstreamError$ as $c_Lcom_raquo_airstream_core_AirstreamError$ };
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
export { $h_Lcom_raquo_airstream_core_AirstreamError$ as $h_Lcom_raquo_airstream_core_AirstreamError$ };
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype;
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.com$raquo$airstream$core$AirstreamError$$$VarError$superArg$1__T__s_Option__T = (function(message, cause) {
  var this$1 = $n(cause);
  if (this$1.isEmpty__Z()) {
    var $x_1 = $m_s_None$();
  } else {
    var arg1 = this$1.get__O();
    var _$1 = $as_jl_Throwable(arg1);
    var $x_1 = new $c_s_Some($n(_$1).getMessage__T());
  }
  return ((message + "; cause: ") + $x_1);
});
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.registerUnhandledErrorCallback__F1__V = (function(fn) {
  var this$1 = $n(this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks);
  $as_scm_Buffer(this$1.addOne__O__scm_Growable(fn));
});
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.sendUnhandledError__jl_Throwable__V = (function(err) {
  var this$1 = $n(this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks);
  var it = this$1.iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var arg1 = $n(it).next__O();
    var fn = $as_F1(arg1);
    try {
      $n(fn).apply__O__O(err);
    } catch (e) {
      var e$1 = e;
      var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
      var x$2 = this.Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback;
      if (((fn === null) ? (x$2 === null) : $n(fn).equals__O__Z(x$2))) {
        throw e$2;
      } else {
        console.warn("Error processing an unhandled error callback:");
        $m_sjs_js_timers_package$().setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle(0.0, new $c_sjsr_AnonFunction0(((e$2) => (() => {
          throw e$2;
        }))(e$2)));
      }
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().initClass($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  Lcom_raquo_airstream_core_AirstreamError$: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Sum: 1
}));
export { $d_Lcom_raquo_airstream_core_AirstreamError$ as $d_Lcom_raquo_airstream_core_AirstreamError$ };
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
export { $m_Lcom_raquo_airstream_core_AirstreamError$ as $m_Lcom_raquo_airstream_core_AirstreamError$ };
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.isSafeToRemoveObserver_$eq__Z__V(true);
  $thiz.maybePendingObserverRemovals_$eq__O__V((void 0));
}
export { $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V as $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V };
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  var this$1 = $m_Lcom_raquo_airstream_core_Observer$();
  var observer = this$1.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext, $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true);
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
}
export { $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription as $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription };
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.isSafeToRemoveObserver__Z()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
export { $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V as $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V };
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.isSafeToRemoveObserver__Z()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
    })));
  }
}
export { $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V as $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V };
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0);
}
export { $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z as $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z };
function $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz) {
  var x = $thiz.maybePendingObserverRemovals__O();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_F0.getArrayOf().constr)([])));
    $thiz.maybePendingObserverRemovals_$eq__O__V(newArray);
    return newArray;
  } else {
    return x;
  }
}
export { $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray as $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray };
function $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.onWillStart__V();
  }
}
export { $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V as $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V };
function $is_Lcom_raquo_airstream_core_Observer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_Observer)));
}
export { $is_Lcom_raquo_airstream_core_Observer as $is_Lcom_raquo_airstream_core_Observer };
function $as_Lcom_raquo_airstream_core_Observer(obj) {
  return (($is_Lcom_raquo_airstream_core_Observer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.Observer"));
}
export { $as_Lcom_raquo_airstream_core_Observer as $as_Lcom_raquo_airstream_core_Observer };
function $isArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_Observer)));
}
export { $isArrayOf_Lcom_raquo_airstream_core_Observer as $isArrayOf_Lcom_raquo_airstream_core_Observer };
function $asArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.Observer;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_core_Observer as $asArrayOf_Lcom_raquo_airstream_core_Observer };
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().initClass(1, "com.raquo.airstream.core.Observer", ({
  Lcom_raquo_airstream_core_Observer: 1,
  Lcom_raquo_airstream_core_Sink: 1,
  Lcom_raquo_airstream_core_Named: 1
}));
export { $d_Lcom_raquo_airstream_core_Observer as $d_Lcom_raquo_airstream_core_Observer };
function $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, renderable) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode($n(renderable).asString__O__T(value));
}
export { $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode as $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode };
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.Lcom_raquo_laminar_api_Laminar$$anon$1__f_onDomContentLoaded$lzy1 = null;
  this.Lcom_raquo_laminar_api_Laminar$$anon$1__f_onDomContentLoadedbitmap$1 = false;
}
export { $c_Lcom_raquo_laminar_api_Laminar$$anon$1 as $c_Lcom_raquo_laminar_api_Laminar$$anon$1 };
$c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
export { $h_Lcom_raquo_laminar_api_Laminar$$anon$1 as $h_Lcom_raquo_laminar_api_Laminar$$anon$1 };
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype;
$c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype.onDomContentLoaded__Lcom_raquo_laminar_keys_EventProp = (function() {
  if ((!this.Lcom_raquo_laminar_api_Laminar$$anon$1__f_onDomContentLoadedbitmap$1)) {
    this.Lcom_raquo_laminar_api_Laminar$$anon$1__f_onDomContentLoaded$lzy1 = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.Lcom_raquo_laminar_api_Laminar$$anon$1__f_onDomContentLoadedbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_Laminar$$anon$1__f_onDomContentLoaded$lzy1;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().initClass($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  Lcom_raquo_laminar_api_Laminar$$anon$1: 1,
  Lcom_raquo_laminar_defs_eventProps_GlobalEventProps: 1,
  Lcom_raquo_laminar_defs_eventProps_DocumentEventProps: 1
}));
export { $d_Lcom_raquo_laminar_api_Laminar$$anon$1 as $d_Lcom_raquo_laminar_api_Laminar$$anon$1 };
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor = null;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_domCallback = null;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor = eventProcessor;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_domCallback = ((ev) => {
    var processor = $n(eventProcessor).Lcom_raquo_laminar_keys_EventProcessor__f_processor;
    var this$2 = $n($as_s_Option($n(processor).apply__O__O(ev)));
    if ((!this$2.isEmpty__Z())) {
      $n(callback).apply__O__O(this$2.get__O());
    }
  });
}
export { $c_Lcom_raquo_laminar_modifiers_EventListener as $c_Lcom_raquo_laminar_modifiers_EventListener };
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
export { $h_Lcom_raquo_laminar_modifiers_EventListener as $h_Lcom_raquo_laminar_modifiers_EventListener };
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype;
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  this.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Z__Lcom_raquo_airstream_ownership_DynamicSubscription(element, false);
});
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Z__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(element, unsafePrepend) {
  var this$1 = $n(element);
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(this$1, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1(((ctx) => {
      var ctx$1 = $as_Lcom_raquo_laminar_lifecycle_MountContext(ctx);
      $m_Lcom_raquo_laminar_DomApi$().addEventListener__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_modifiers_EventListener__V(element, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription($n(ctx$1).Lcom_raquo_laminar_lifecycle_MountContext__f_owner, new $c_sjsr_AnonFunction0((() => {
        var this$3 = $n(element);
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(this$3, this);
        if ((listenerIndex !== (-1))) {
          var this$4 = $n(element);
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(this$4, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().removeEventListener__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_modifiers_EventListener__V(element, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().unsafeBindPrependSubscription__Lcom_raquo_laminar_nodes_ReactiveElement__F1__Lcom_raquo_airstream_ownership_DynamicSubscription(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner) => {
      var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner);
      return $as_Lcom_raquo_airstream_ownership_Subscription(subscribe.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1)));
    })), false));
    var this$6 = $n(element);
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(this$6, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1(((_$1) => {
      $as_Lcom_raquo_laminar_lifecycle_MountContext(_$1);
    }));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().subscribeCallback__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
      var owner$3 = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
      activate.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$3));
    })), false);
  }
});
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.toString__T = (function() {
  var prop = this.Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  return (("EventListener(" + $n($n(prop).Lcom_raquo_laminar_keys_EventProcessor__f_eventProp).Lcom_raquo_laminar_keys_EventProp__f_name) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().initClass($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  Lcom_raquo_laminar_modifiers_EventListener: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1,
  Lcom_raquo_laminar_modifiers_Binder: 1
}));
export { $d_Lcom_raquo_laminar_modifiers_EventListener as $d_Lcom_raquo_laminar_modifiers_EventListener };
function $is_Lcom_raquo_laminar_nodes_ChildNode(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ChildNode)));
}
export { $is_Lcom_raquo_laminar_nodes_ChildNode as $is_Lcom_raquo_laminar_nodes_ChildNode };
function $as_Lcom_raquo_laminar_nodes_ChildNode(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ChildNode(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ChildNode"));
}
export { $as_Lcom_raquo_laminar_nodes_ChildNode as $as_Lcom_raquo_laminar_nodes_ChildNode };
function $isArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ChildNode)));
}
export { $isArrayOf_Lcom_raquo_laminar_nodes_ChildNode as $isArrayOf_Lcom_raquo_laminar_nodes_ChildNode };
function $asArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ChildNode;", depth));
}
export { $asArrayOf_Lcom_raquo_laminar_nodes_ChildNode as $asArrayOf_Lcom_raquo_laminar_nodes_ChildNode };
var $d_Lcom_raquo_laminar_nodes_ChildNode = new $TypeData().initClass(1, "com.raquo.laminar.nodes.ChildNode", ({
  Lcom_raquo_laminar_nodes_ChildNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
}));
export { $d_Lcom_raquo_laminar_nodes_ChildNode as $d_Lcom_raquo_laminar_nodes_ChildNode };
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_child = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_child = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  var this$1 = $m_Lcom_raquo_laminar_nodes_ChildNode$();
  if ((!this$1.isDescendantOf__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.Lcom_raquo_laminar_nodes_RootNode__f_ref = container;
  this.mount__Z();
}
export { $c_Lcom_raquo_laminar_nodes_RootNode as $c_Lcom_raquo_laminar_nodes_RootNode };
$c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
export { $h_Lcom_raquo_laminar_nodes_RootNode as $h_Lcom_raquo_laminar_nodes_RootNode };
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $c_Lcom_raquo_laminar_nodes_RootNode.prototype;
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner = (function() {
  return this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner;
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O = (function() {
  return this.Lcom_raquo_laminar_nodes_RootNode__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren;
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__O__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_RootNode__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren = x$1;
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(x$0) {
  this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner = x$0;
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.mount__Z = (function() {
  $n(this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner).activate__V();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(this, this.Lcom_raquo_laminar_nodes_RootNode__f_child);
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.Lcom_raquo_laminar_nodes_RootNode__f_ref;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().initClass($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  Lcom_raquo_laminar_nodes_RootNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_laminar_nodes_ParentNode: 1
}));
export { $d_Lcom_raquo_laminar_nodes_RootNode as $d_Lcom_raquo_laminar_nodes_RootNode };
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_data = data0;
}
export { $c_jl_Class as $c_jl_Class };
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
export { $h_jl_Class as $h_jl_Class };
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T());
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom($n(that).jl_Class__f_data));
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface);
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass);
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive);
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name);
});
var $d_jl_Class = new $TypeData().initClass($c_jl_Class, "java.lang.Class", ({
  jl_Class: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
}));
export { $d_jl_Class as $d_jl_Class };
class $c_jl_Error extends $c_jl_Throwable {
}
export { $c_jl_Error as $c_jl_Error };
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
export { $ct_jl_Exception__T__ as $ct_jl_Exception__T__ };
class $c_jl_Exception extends $c_jl_Throwable {
}
export { $c_jl_Exception as $c_jl_Exception };
var $d_jl_Exception = new $TypeData().initClass($c_jl_Exception, "java.lang.Exception", ({
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_Exception as $d_jl_Exception };
/** @constructor */
function $c_s_$less$colon$less() {
}
export { $c_s_$less$colon$less as $c_s_$less$colon$less };
$c_s_$less$colon$less.prototype = new $h_O();
$c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
}
export { $h_s_$less$colon$less as $h_s_$less$colon$less };
$h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
/** @constructor */
function $c_s_Predef$() {
  this.s_Predef$__f_Map = null;
  $n_s_Predef$ = this;
  this.s_Predef$__f_Map = $m_sci_Map$();
}
export { $c_s_Predef$ as $c_s_Predef$ };
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
export { $h_s_Predef$ as $h_s_Predef$ };
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
var $d_s_Predef$ = new $TypeData().initClass($c_s_Predef$, "scala.Predef$", ({
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1
}));
export { $d_s_Predef$ as $d_s_Predef$ };
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
export { $m_s_Predef$ as $m_s_Predef$ };
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
  return $thiz;
}
export { $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__ as $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__ };
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
}
export { $c_sc_ClassTagIterableFactory$AnyIterableDelegate as $c_sc_ClassTagIterableFactory$AnyIterableDelegate };
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
export { $h_sc_ClassTagIterableFactory$AnyIterableDelegate as $h_sc_ClassTagIterableFactory$AnyIterableDelegate };
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype;
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.from__sc_IterableOnce__O = (function(it) {
  return $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate).from__sc_IterableOnce__O__O(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.apply__sci_Seq__O = (function(elems) {
  var this$1 = $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate);
  var evidence$7 = $m_s_reflect_ManifestFactory$AnyManifest$();
  return this$1.from__sc_IterableOnce__O__O(elems, evidence$7);
});
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
export { $f_sc_Iterator__sliceIterator__I__I__sc_Iterator as $f_sc_Iterator__sliceIterator__I__I__sc_Iterator };
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false;
    }
  }
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z());
}
export { $f_sc_Iterator__sameElements__sc_IterableOnce__Z as $f_sc_Iterator__sameElements__sc_IterableOnce__Z };
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19();
}
export { $c_sc_Iterator$ as $c_sc_Iterator$ };
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
export { $h_sc_Iterator$ as $h_sc_Iterator$ };
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
  sc_Iterator$: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_Iterator$ as $d_sc_Iterator$ };
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
export { $m_sc_Iterator$ as $m_sc_Iterator$ };
/** @constructor */
function $c_sci_Map$() {
}
export { $c_sci_Map$ as $c_sci_Map$ };
$c_sci_Map$.prototype = new $h_O();
$c_sci_Map$.prototype.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
export { $h_sci_Map$ as $h_sci_Map$ };
$h_sci_Map$.prototype = $c_sci_Map$.prototype;
var $d_sci_Map$ = new $TypeData().initClass($c_sci_Map$, "scala.collection.immutable.Map$", ({
  sci_Map$: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_Map$ as $d_sci_Map$ };
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
export { $m_sci_Map$ as $m_sci_Map$ };
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)));
}
export { $is_scm_Builder as $is_scm_Builder };
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"));
}
export { $as_scm_Builder as $as_scm_Builder };
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)));
}
export { $isArrayOf_scm_Builder as $isArrayOf_scm_Builder };
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth));
}
export { $asArrayOf_scm_Builder as $asArrayOf_scm_Builder };
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"));
}
export { $as_s_math_ScalaNumber as $as_s_math_ScalaNumber };
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)));
}
export { $isArrayOf_s_math_ScalaNumber as $isArrayOf_s_math_ScalaNumber };
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth));
}
export { $asArrayOf_s_math_ScalaNumber as $asArrayOf_s_math_ScalaNumber };
/** @constructor */
function $c_sr_AbstractPartialFunction() {
}
export { $c_sr_AbstractPartialFunction as $c_sr_AbstractPartialFunction };
$c_sr_AbstractPartialFunction.prototype = new $h_O();
$c_sr_AbstractPartialFunction.prototype.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
}
export { $h_sr_AbstractPartialFunction as $h_sr_AbstractPartialFunction };
$h_sr_AbstractPartialFunction.prototype = $c_sr_AbstractPartialFunction.prototype;
$c_sr_AbstractPartialFunction.prototype.toString__T = (function() {
  return "<function1>";
});
$c_sr_AbstractPartialFunction.prototype.apply__O__O = (function(x) {
  return this.applyOrElse__O__F1__O(x, $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf);
});
var $d_sr_Nothing$ = new $TypeData().initClass(0, "scala.runtime.Nothing$", ({
  sr_Nothing$: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sr_Nothing$ as $d_sr_Nothing$ };
/** @constructor */
function $c_sjs_js_Any$() {
}
export { $c_sjs_js_Any$ as $c_sjs_js_Any$ };
$c_sjs_js_Any$.prototype = new $h_O();
$c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
export { $h_sjs_js_Any$ as $h_sjs_js_Any$ };
$h_sjs_js_Any$.prototype = $c_sjs_js_Any$.prototype;
$c_sjs_js_Any$.prototype.fromFunction1__F1__sjs_js_Function1 = (function(f) {
  return ((arg1$2) => $n(f).apply__O__O(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().initClass($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  sjs_js_Any$: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
}));
export { $d_sjs_js_Any$ as $d_sjs_js_Any$ };
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
export { $m_sjs_js_Any$ as $m_sjs_js_Any$ };
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f;
}
export { $c_sjsr_AnonFunction0 as $c_sjsr_AnonFunction0 };
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
export { $h_sjsr_AnonFunction0 as $h_sjsr_AnonFunction0 };
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)();
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass($c_sjsr_AnonFunction0, "scala.scalajs.runtime.AnonFunction0", ({
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  F0: 1
}));
export { $d_sjsr_AnonFunction0 as $d_sjsr_AnonFunction0 };
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f;
}
export { $c_sjsr_AnonFunction1 as $c_sjsr_AnonFunction1 };
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
export { $h_sjsr_AnonFunction1 as $h_sjsr_AnonFunction1 };
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1);
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass($c_sjsr_AnonFunction1, "scala.scalajs.runtime.AnonFunction1", ({
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  F1: 1
}));
export { $d_sjsr_AnonFunction1 as $d_sjsr_AnonFunction1 };
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f;
}
export { $c_sjsr_AnonFunction2 as $c_sjsr_AnonFunction2 };
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
export { $h_sjsr_AnonFunction2 as $h_sjsr_AnonFunction2 };
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2);
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass($c_sjsr_AnonFunction2, "scala.scalajs.runtime.AnonFunction2", ({
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  F2: 1
}));
export { $d_sjsr_AnonFunction2 as $d_sjsr_AnonFunction2 };
/** @constructor */
function $c_sjsr_AnonFunction4(f) {
  this.sjsr_AnonFunction4__f_f = null;
  this.sjsr_AnonFunction4__f_f = f;
}
export { $c_sjsr_AnonFunction4 as $c_sjsr_AnonFunction4 };
$c_sjsr_AnonFunction4.prototype = new $h_sr_AbstractFunction4();
$c_sjsr_AnonFunction4.prototype.constructor = $c_sjsr_AnonFunction4;
/** @constructor */
function $h_sjsr_AnonFunction4() {
}
export { $h_sjsr_AnonFunction4 as $h_sjsr_AnonFunction4 };
$h_sjsr_AnonFunction4.prototype = $c_sjsr_AnonFunction4.prototype;
$c_sjsr_AnonFunction4.prototype.apply__O__O__O__O__O = (function(arg1, arg2, arg3, arg4) {
  return (0, this.sjsr_AnonFunction4__f_f)(arg1, arg2, arg3, arg4);
});
var $d_sjsr_AnonFunction4 = new $TypeData().initClass($c_sjsr_AnonFunction4, "scala.scalajs.runtime.AnonFunction4", ({
  sjsr_AnonFunction4: 1,
  sr_AbstractFunction4: 1,
  F4: 1
}));
export { $d_sjsr_AnonFunction4 as $d_sjsr_AnonFunction4 };
function $as_s_util_control_ControlThrowable(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.control.ControlThrowable"));
}
export { $as_s_util_control_ControlThrowable as $as_s_util_control_ControlThrowable };
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_control_ControlThrowable)));
}
export { $isArrayOf_s_util_control_ControlThrowable as $isArrayOf_s_util_control_ControlThrowable };
function $asArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (($isArrayOf_s_util_control_ControlThrowable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.control.ControlThrowable;", depth));
}
export { $asArrayOf_s_util_control_ControlThrowable as $asArrayOf_s_util_control_ControlThrowable };
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(handleObserverErrors$3, onNextParam$2, onErrorParam$2) {
  this.Lcom_raquo_airstream_core_Observer$$anon$8__f_handleObserverErrors$1 = false;
  this.Lcom_raquo_airstream_core_Observer$$anon$8__f_onNextParam$1 = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$8__f_onErrorParam$1 = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$8__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$8__f_handleObserverErrors$1 = handleObserverErrors$3;
  this.Lcom_raquo_airstream_core_Observer$$anon$8__f_onNextParam$1 = onNextParam$2;
  this.Lcom_raquo_airstream_core_Observer$$anon$8__f_onErrorParam$1 = onErrorParam$2;
  this.Lcom_raquo_airstream_core_Observer$$anon$8__f_maybeDisplayName = (void 0);
}
export { $c_Lcom_raquo_airstream_core_Observer$$anon$8 as $c_Lcom_raquo_airstream_core_Observer$$anon$8 };
$c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
export { $h_Lcom_raquo_airstream_core_Observer$$anon$8 as $h_Lcom_raquo_airstream_core_Observer$$anon$8 };
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype;
$c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype.maybeDisplayName__O = (function() {
  return this.Lcom_raquo_airstream_core_Observer$$anon$8__f_maybeDisplayName;
});
$c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype.onNext__O__V = (function(nextValue) {
  try {
    $n(this.Lcom_raquo_airstream_core_Observer$$anon$8__f_onNextParam$1).apply__O__O(nextValue);
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if (this.Lcom_raquo_airstream_core_Observer$$anon$8__f_handleObserverErrors$1) {
      this.onError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype.onError__jl_Throwable__V = (function(error) {
  try {
    if ($n(this.Lcom_raquo_airstream_core_Observer$$anon$8__f_onErrorParam$1).isDefinedAt__O__Z(error)) {
      $n(this.Lcom_raquo_airstream_core_Observer$$anon$8__f_onErrorParam$1).apply__O__O(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(error);
    }
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype.onTry__s_util_Try__V = (function(nextValue) {
  $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((error) => {
    var error$1 = $as_jl_Throwable(error);
    this.onError__jl_Throwable__V(error$1);
  })), new $c_sjsr_AnonFunction1(((nextValue$2) => {
    this.onNext__O__V(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().initClass($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  Lcom_raquo_airstream_core_Observer$$anon$8: 1,
  Lcom_raquo_airstream_core_Sink: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_Observer: 1
}));
export { $d_Lcom_raquo_airstream_core_Observer$$anon$8 as $d_Lcom_raquo_airstream_core_Observer$$anon$8 };
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(handleObserverErrors$4, onTryParam$2) {
  this.Lcom_raquo_airstream_core_Observer$$anon$9__f_handleObserverErrors$2 = false;
  this.Lcom_raquo_airstream_core_Observer$$anon$9__f_onTryParam$1 = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$9__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$9__f_handleObserverErrors$2 = handleObserverErrors$4;
  this.Lcom_raquo_airstream_core_Observer$$anon$9__f_onTryParam$1 = onTryParam$2;
  this.Lcom_raquo_airstream_core_Observer$$anon$9__f_maybeDisplayName = (void 0);
}
export { $c_Lcom_raquo_airstream_core_Observer$$anon$9 as $c_Lcom_raquo_airstream_core_Observer$$anon$9 };
$c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
export { $h_Lcom_raquo_airstream_core_Observer$$anon$9 as $h_Lcom_raquo_airstream_core_Observer$$anon$9 };
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype;
$c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype.maybeDisplayName__O = (function() {
  return this.Lcom_raquo_airstream_core_Observer$$anon$9__f_maybeDisplayName;
});
$c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype.onNext__O__V = (function(nextValue) {
  this.onTry__s_util_Try__V(new $c_s_util_Success(nextValue));
});
$c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype.onError__jl_Throwable__V = (function(error) {
  this.onTry__s_util_Try__V(new $c_s_util_Failure(error));
});
$c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype.onTry__s_util_Try__V = (function(nextValue) {
  try {
    if ($n(this.Lcom_raquo_airstream_core_Observer$$anon$9__f_onTryParam$1).isDefinedAt__O__Z(nextValue)) {
      $n(this.Lcom_raquo_airstream_core_Observer$$anon$9__f_onTryParam$1).apply__O__O(nextValue);
    } else {
      $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((err) => {
        var err$1 = $as_jl_Throwable(err);
        $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(err$1);
      })), new $c_sjsr_AnonFunction1(((_$2) => (void 0))));
    }
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if ((this.Lcom_raquo_airstream_core_Observer$$anon$9__f_handleObserverErrors$2 && $n(nextValue).isSuccess__Z())) {
      this.onError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((originalError) => {
        var originalError$1 = $as_jl_Throwable(originalError);
        $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError$1));
      })), new $c_sjsr_AnonFunction1(((_$3) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().initClass($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  Lcom_raquo_airstream_core_Observer$$anon$9: 1,
  Lcom_raquo_airstream_core_Sink: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_Observer: 1
}));
export { $d_Lcom_raquo_airstream_core_Observer$$anon$9 as $d_Lcom_raquo_airstream_core_Observer$$anon$9 };
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.Lcom_raquo_laminar_api_Laminar$svg$__f_svg$lzy1 = null;
  this.Lcom_raquo_laminar_api_Laminar$svg$__f_svgbitmap$1 = false;
  this.Lcom_raquo_laminar_api_Laminar$svg$__f_className = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V(this);
}
export { $c_Lcom_raquo_laminar_api_Laminar$svg$ as $c_Lcom_raquo_laminar_api_Laminar$svg$ };
$c_Lcom_raquo_laminar_api_Laminar$svg$.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$svg$.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$svg$() {
}
export { $h_Lcom_raquo_laminar_api_Laminar$svg$ as $h_Lcom_raquo_laminar_api_Laminar$svg$ };
$h_Lcom_raquo_laminar_api_Laminar$svg$.prototype = $c_Lcom_raquo_laminar_api_Laminar$svg$.prototype;
$c_Lcom_raquo_laminar_api_Laminar$svg$.prototype.svg__Lcom_raquo_laminar_tags_SvgTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_Laminar$svg$__f_svgbitmap$1)) {
    this.Lcom_raquo_laminar_api_Laminar$svg$__f_svg$lzy1 = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.Lcom_raquo_laminar_api_Laminar$svg$__f_svgbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_Laminar$svg$__f_svg$lzy1;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().initClass($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  Lcom_raquo_laminar_api_Laminar$svg$: 1,
  Lcom_raquo_laminar_defs_tags_SvgTags: 1,
  Lcom_raquo_laminar_defs_attrs_SvgAttrs: 1,
  Lcom_raquo_laminar_defs_complex_ComplexSvgKeys: 1
}));
export { $d_Lcom_raquo_laminar_api_Laminar$svg$ as $d_Lcom_raquo_laminar_api_Laminar$svg$ };
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.Lcom_raquo_laminar_api_package$__f_L = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.Lcom_raquo_laminar_api_package$__f_L = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
export { $c_Lcom_raquo_laminar_api_package$ as $c_Lcom_raquo_laminar_api_package$ };
$c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_package$.prototype.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
export { $h_Lcom_raquo_laminar_api_package$ as $h_Lcom_raquo_laminar_api_package$ };
$h_Lcom_raquo_laminar_api_package$.prototype = $c_Lcom_raquo_laminar_api_package$.prototype;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().initClass($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  Lcom_raquo_laminar_api_package$: 1,
  Lcom_raquo_laminar_Implicits$LowPriorityImplicits: 1,
  Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers: 1,
  Lcom_raquo_laminar_Implicits: 1
}));
export { $d_Lcom_raquo_laminar_api_package$ as $d_Lcom_raquo_laminar_api_package$ };
var $n_Lcom_raquo_laminar_api_package$;
function $m_Lcom_raquo_laminar_api_package$() {
  if ((!$n_Lcom_raquo_laminar_api_package$)) {
    $n_Lcom_raquo_laminar_api_package$ = new $c_Lcom_raquo_laminar_api_package$();
  }
  return $n_Lcom_raquo_laminar_api_package$;
}
export { $m_Lcom_raquo_laminar_api_package$ as $m_Lcom_raquo_laminar_api_package$ };
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_CommentNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = $m_s_None$();
  this.Lcom_raquo_laminar_nodes_CommentNode__f_ref = $m_Lcom_raquo_laminar_DomApi$().createCommentNode__T__Lorg_scalajs_dom_Comment(initialText);
}
export { $c_Lcom_raquo_laminar_nodes_CommentNode as $c_Lcom_raquo_laminar_nodes_CommentNode };
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
export { $h_Lcom_raquo_laminar_nodes_CommentNode as $h_Lcom_raquo_laminar_nodes_CommentNode };
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype;
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  return this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent;
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = maybeNextParent;
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this);
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.Lcom_raquo_laminar_nodes_CommentNode__f_ref;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().initClass($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  Lcom_raquo_laminar_nodes_CommentNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1
}));
export { $d_Lcom_raquo_laminar_nodes_CommentNode as $d_Lcom_raquo_laminar_nodes_CommentNode };
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_TextNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = $m_s_None$();
  this.Lcom_raquo_laminar_nodes_TextNode__f_ref = $m_Lcom_raquo_laminar_DomApi$().createTextNode__T__Lorg_scalajs_dom_Text(initialText);
}
export { $c_Lcom_raquo_laminar_nodes_TextNode as $c_Lcom_raquo_laminar_nodes_TextNode };
$c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
export { $h_Lcom_raquo_laminar_nodes_TextNode as $h_Lcom_raquo_laminar_nodes_TextNode };
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $c_Lcom_raquo_laminar_nodes_TextNode.prototype;
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  return this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent;
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = maybeNextParent;
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this);
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.Lcom_raquo_laminar_nodes_TextNode__f_ref;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().initClass($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  Lcom_raquo_laminar_nodes_TextNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1
}));
export { $d_Lcom_raquo_laminar_nodes_TextNode as $d_Lcom_raquo_laminar_nodes_TextNode };
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
export { $c_Ljava_io_OutputStream as $c_Ljava_io_OutputStream };
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
export { $h_Ljava_io_OutputStream as $h_Ljava_io_OutputStream };
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2;
    } else {
      var cause = null;
    }
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
export { $c_jl_AssertionError as $c_jl_AssertionError };
var $d_jl_AssertionError = new $TypeData().initClass($c_jl_AssertionError, "java.lang.AssertionError", ({
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_AssertionError as $d_jl_AssertionError };
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
export { $f_jl_Boolean__equals__O__Z as $f_jl_Boolean__equals__O__Z };
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
export { $f_jl_Boolean__hashCode__I as $f_jl_Boolean__hashCode__I };
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
export { $f_jl_Boolean__toString__T as $f_jl_Boolean__toString__T };
var $d_jl_Boolean = new $TypeData().initClass(0, "java.lang.Boolean", ({
  jl_Boolean: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => ((typeof x) === "boolean")));
export { $d_jl_Boolean as $d_jl_Boolean };
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
export { $f_jl_Character__hashCode__I as $f_jl_Character__hashCode__I };
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC($n($as_jl_Character(that)));
    return ($thiz === this$1);
  } else {
    return false;
  }
}
export { $f_jl_Character__equals__O__Z as $f_jl_Character__equals__O__Z };
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
export { $f_jl_Character__toString__T as $f_jl_Character__toString__T };
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"));
}
export { $as_jl_Character as $as_jl_Character };
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)));
}
export { $isArrayOf_jl_Character as $isArrayOf_jl_Character };
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth));
}
export { $asArrayOf_jl_Character as $asArrayOf_jl_Character };
var $d_jl_Character = new $TypeData().initClass(0, "java.lang.Character", ({
  jl_Character: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => (x instanceof $Char)));
export { $d_jl_Character as $d_jl_Character };
function $as_jl_InterruptedException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.InterruptedException"));
}
export { $as_jl_InterruptedException as $as_jl_InterruptedException };
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_InterruptedException)));
}
export { $isArrayOf_jl_InterruptedException as $isArrayOf_jl_InterruptedException };
function $asArrayOf_jl_InterruptedException(obj, depth) {
  return (($isArrayOf_jl_InterruptedException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.InterruptedException;", depth));
}
export { $asArrayOf_jl_InterruptedException as $asArrayOf_jl_InterruptedException };
function $as_jl_LinkageError(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.LinkageError"));
}
export { $as_jl_LinkageError as $as_jl_LinkageError };
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_LinkageError)));
}
export { $isArrayOf_jl_LinkageError as $isArrayOf_jl_LinkageError };
function $asArrayOf_jl_LinkageError(obj, depth) {
  return (($isArrayOf_jl_LinkageError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.LinkageError;", depth));
}
export { $asArrayOf_jl_LinkageError as $asArrayOf_jl_LinkageError };
class $c_jl_RuntimeException extends $c_jl_Exception {
}
export { $c_jl_RuntimeException as $c_jl_RuntimeException };
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
}
export { $c_jl_StringBuilder as $c_jl_StringBuilder };
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
export { $h_jl_StringBuilder as $h_jl_StringBuilder };
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.append__AC__jl_StringBuilder = (function(str) {
  var this$1 = $m_jl_String$();
  var count = $n(str).u.length;
  var str$1 = this$1.new__AC__I__I__T(str, 0, count);
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
  return this;
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length;
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index);
});
var $d_jl_StringBuilder = new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  jl_StringBuilder: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_StringBuilder as $d_jl_StringBuilder };
function $as_jl_ThreadDeath(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ThreadDeath"));
}
export { $as_jl_ThreadDeath as $as_jl_ThreadDeath };
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ThreadDeath)));
}
export { $isArrayOf_jl_ThreadDeath as $isArrayOf_jl_ThreadDeath };
function $asArrayOf_jl_ThreadDeath(obj, depth) {
  return (($isArrayOf_jl_ThreadDeath(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ThreadDeath;", depth));
}
export { $asArrayOf_jl_ThreadDeath as $asArrayOf_jl_ThreadDeath };
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
export { $c_jl_VirtualMachineError as $c_jl_VirtualMachineError };
function $as_jl_VirtualMachineError(obj) {
  return (((obj instanceof $c_jl_VirtualMachineError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.VirtualMachineError"));
}
export { $as_jl_VirtualMachineError as $as_jl_VirtualMachineError };
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_VirtualMachineError)));
}
export { $isArrayOf_jl_VirtualMachineError as $isArrayOf_jl_VirtualMachineError };
function $asArrayOf_jl_VirtualMachineError(obj, depth) {
  return (($isArrayOf_jl_VirtualMachineError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.VirtualMachineError;", depth));
}
export { $asArrayOf_jl_VirtualMachineError as $asArrayOf_jl_VirtualMachineError };
/** @constructor */
function $c_s_$eq$colon$eq() {
}
export { $c_s_$eq$colon$eq as $c_s_$eq$colon$eq };
$c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
}
export { $h_s_$eq$colon$eq as $h_s_$eq$colon$eq };
$h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
}
export { $c_s_PartialFunction$$anon$1 as $c_s_PartialFunction$$anon$1 };
$c_s_PartialFunction$$anon$1.prototype = new $h_O();
$c_s_PartialFunction$$anon$1.prototype.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
export { $h_s_PartialFunction$$anon$1 as $h_s_PartialFunction$$anon$1 };
$h_s_PartialFunction$$anon$1.prototype = $c_s_PartialFunction$$anon$1.prototype;
$c_s_PartialFunction$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$c_s_PartialFunction$$anon$1.prototype.toString__T = (function() {
  return "<function1>";
});
$c_s_PartialFunction$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return false;
});
$c_s_PartialFunction$$anon$1.prototype.apply__O__E = (function(x) {
  throw new $c_s_MatchError(x);
});
$c_s_PartialFunction$$anon$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__E(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().initClass($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  s_PartialFunction$$anon$1: 1,
  s_PartialFunction: 1,
  F1: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_PartialFunction$$anon$1 as $d_s_PartialFunction$$anon$1 };
/** @constructor */
function $c_sc_AbstractIterator() {
}
export { $c_sc_AbstractIterator as $c_sc_AbstractIterator };
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
export { $h_sc_AbstractIterator as $h_sc_AbstractIterator };
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this;
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1));
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>";
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1);
});
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz;
}
export { $ct_sc_SeqFactory$Delegate__sc_SeqFactory__ as $ct_sc_SeqFactory$Delegate__sc_SeqFactory__ };
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
}
export { $c_sc_SeqFactory$Delegate as $c_sc_SeqFactory$Delegate };
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
export { $h_sc_SeqFactory$Delegate as $h_sc_SeqFactory$Delegate };
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__sc_SeqOps = (function(elems) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).apply__sci_Seq__O(elems));
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it));
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source);
});
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__O = (function(elems) {
  return this.apply__sci_Seq__sc_SeqOps(elems);
});
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.lengthCompare__I__I(idx) > 0));
}
export { $f_sc_SeqOps__isDefinedAt__I__Z as $f_sc_SeqOps__isDefinedAt__I__Z };
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0);
}
export { $f_sc_SeqOps__isEmpty__Z as $f_sc_SeqOps__isEmpty__Z };
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var knownSizeDifference = false;
  }
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that);
  } else {
    return false;
  }
}
export { $f_sc_SeqOps__sameElements__sc_IterableOnce__Z as $f_sc_SeqOps__sameElements__sc_IterableOnce__Z };
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)));
}
export { $is_sc_SeqOps as $is_sc_SeqOps };
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"));
}
export { $as_sc_SeqOps as $as_sc_SeqOps };
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)));
}
export { $isArrayOf_sc_SeqOps as $isArrayOf_sc_SeqOps };
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth));
}
export { $asArrayOf_sc_SeqOps as $asArrayOf_sc_SeqOps };
function $as_s_util_CommandLineParser$ParseError(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.CommandLineParser$ParseError"));
}
export { $as_s_util_CommandLineParser$ParseError as $as_s_util_CommandLineParser$ParseError };
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_CommandLineParser$ParseError)));
}
export { $isArrayOf_s_util_CommandLineParser$ParseError as $isArrayOf_s_util_CommandLineParser$ParseError };
function $asArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (($isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.CommandLineParser$ParseError;", depth));
}
export { $asArrayOf_s_util_CommandLineParser$ParseError as $asArrayOf_s_util_CommandLineParser$ParseError };
/** @constructor */
function $c_s_util_Try() {
}
export { $c_s_util_Try as $c_s_util_Try };
$c_s_util_Try.prototype = new $h_O();
$c_s_util_Try.prototype.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
export { $h_s_util_Try as $h_s_util_Try };
$h_s_util_Try.prototype = $c_s_util_Try.prototype;
function $as_s_util_Try(obj) {
  return (((obj instanceof $c_s_util_Try) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Try"));
}
export { $as_s_util_Try as $as_s_util_Try };
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Try)));
}
export { $isArrayOf_s_util_Try as $isArrayOf_s_util_Try };
function $asArrayOf_s_util_Try(obj, depth) {
  return (($isArrayOf_s_util_Try(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Try;", depth));
}
export { $asArrayOf_s_util_Try as $asArrayOf_s_util_Try };
function $is_Lcom_raquo_airstream_core_SyncObservable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_SyncObservable)));
}
export { $is_Lcom_raquo_airstream_core_SyncObservable as $is_Lcom_raquo_airstream_core_SyncObservable };
function $as_Lcom_raquo_airstream_core_SyncObservable(obj) {
  return (($is_Lcom_raquo_airstream_core_SyncObservable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.SyncObservable"));
}
export { $as_Lcom_raquo_airstream_core_SyncObservable as $as_Lcom_raquo_airstream_core_SyncObservable };
function $isArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_SyncObservable)));
}
export { $isArrayOf_Lcom_raquo_airstream_core_SyncObservable as $isArrayOf_Lcom_raquo_airstream_core_SyncObservable };
function $asArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.SyncObservable;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_core_SyncObservable as $asArrayOf_Lcom_raquo_airstream_core_SyncObservable };
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__Lcom_raquo_ew_JsArray__V($m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_airstream_core_Observer.getArrayOf().constr)([]))));
  $thiz.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__Lcom_raquo_ew_JsArray__V($m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_airstream_core_InternalObserver.getArrayOf().constr)([]))));
}
export { $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V as $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V };
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$1 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = ((1 + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
  try {
    $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.onAddedExternalObserver__Lcom_raquo_airstream_core_Observer__V(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    var result = subscription;
  } finally {
    this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = (((-1) + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
    if ((this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level === 0)) {
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$1);
    }
  }
  return result;
}
export { $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription as $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription };
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.externalObservers__Lcom_raquo_ew_JsArray();
  this$.push(observer);
  return subscription;
}
export { $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription as $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription };
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
    $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V($thiz);
  }
  var this$ = $thiz.internalObservers__Lcom_raquo_ew_JsArray();
  this$.push(observer);
  $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
}
export { $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V as $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V };
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  var removed = $m_Lcom_raquo_airstream_core_ObserverList$().removeObserverNow$extension__Lcom_raquo_ew_JsArray__O__Z($thiz.internalObservers__Lcom_raquo_ew_JsArray(), observer);
  if (removed) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
export { $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V as $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V };
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  var removed = $m_Lcom_raquo_airstream_core_ObserverList$().removeObserverNow$extension__Lcom_raquo_ew_JsArray__O__Z($thiz.externalObservers__Lcom_raquo_ew_JsArray(), observer);
  if (removed) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
export { $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V as $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V };
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  var isStarting = ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1);
  if (isStarting) {
    $thiz.onStart__V();
  }
}
export { $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V as $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V };
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.onStop__V();
  }
}
export { $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V as $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V };
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.externalObservers__Lcom_raquo_ew_JsArray();
  var $x_1 = $uI(this$.length);
  var this$$1 = $thiz.internalObservers__Lcom_raquo_ew_JsArray();
  return (($x_1 + $uI(this$$1.length)) | 0);
}
export { $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I as $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I };
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.Lcom_raquo_airstream_custom_CustomSource$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.Lcom_raquo_airstream_custom_CustomSource$$anon$1__f_$outer = outer;
}
export { $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1 as $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1 };
$c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
export { $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1 as $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1 };
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype;
$c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype.isDefinedAt__jl_Throwable__Z = (function(x) {
  return (x !== null);
});
$c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype.applyOrElse__jl_Throwable__F1__O = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((_$1) => {
    var _$1$1 = $as_Lcom_raquo_airstream_core_Transaction(_$1);
    var this$2 = $n(this.Lcom_raquo_airstream_custom_CustomSource$$anon$1__f_$outer);
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this$2, x, _$1$1);
  }))), (void 0)) : $n(default$1).apply__O__O(x));
});
$c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__jl_Throwable__Z($as_jl_Throwable(x));
});
$c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__jl_Throwable__F1__O($as_jl_Throwable(x), default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().initClass($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  Lcom_raquo_airstream_custom_CustomSource$$anon$1: 1,
  sr_AbstractPartialFunction: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 as $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 };
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $m_Lcom_raquo_airstream_core_Observer$().fromTry__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
export { $f_Lcom_raquo_airstream_state_Var__$init$__V as $f_Lcom_raquo_airstream_state_Var__$init$__V };
function $f_Lcom_raquo_airstream_state_Var__update__F1__V($thiz, mod) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((trx) => {
    var trx$1 = $as_Lcom_raquo_airstream_core_Transaction(trx);
    matchResult10: {
      var this$2 = $n($thiz.Lcom_raquo_airstream_state_SourceVar__f_signal);
      var x22 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$2);
      if ((x22 instanceof $c_s_util_Success)) {
        var currentValue = $n($as_s_util_Success(x22)).s_util_Success__f_value;
        try {
          var r1 = $n(mod).apply__O__O(currentValue);
          var nextValue = new $c_s_util_Success(r1);
        } catch (e) {
          var nextValue;
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
            var nextValue = new $c_s_util_Failure(e$2);
          } else {
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2));
          }
        }
        $thiz.setCurrentValue__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(nextValue, trx$1);
        break matchResult10;
      }
      if ((x22 instanceof $c_s_util_Failure)) {
        var err = $n($as_s_util_Failure(x22)).s_util_Failure__f_exception;
        var $x_1 = $m_Lcom_raquo_airstream_core_AirstreamError$();
        var cause = new $c_s_Some(err);
        $n($x_1).sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdate instead.", cause));
        break matchResult10;
      }
      throw new $c_s_MatchError(x22);
    }
  })));
}
export { $f_Lcom_raquo_airstream_state_Var__update__F1__V as $f_Lcom_raquo_airstream_state_Var__update__F1__V };
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.Lcom_raquo_airstream_state_Var$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.Lcom_raquo_airstream_state_Var$$anon$1__f_$outer = outer;
}
export { $c_Lcom_raquo_airstream_state_Var$$anon$1 as $c_Lcom_raquo_airstream_state_Var$$anon$1 };
$c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$c_Lcom_raquo_airstream_state_Var$$anon$1.prototype.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
export { $h_Lcom_raquo_airstream_state_Var$$anon$1 as $h_Lcom_raquo_airstream_state_Var$$anon$1 };
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype;
$c_Lcom_raquo_airstream_state_Var$$anon$1.prototype.isDefinedAt__s_util_Try__Z = (function(x) {
  return true;
});
$c_Lcom_raquo_airstream_state_Var$$anon$1.prototype.applyOrElse__s_util_Try__F1__O = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((_$1) => {
    var _$1$1 = $as_Lcom_raquo_airstream_core_Transaction(_$1);
    $n(this.Lcom_raquo_airstream_state_Var$$anon$1__f_$outer).setCurrentValue__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(x, _$1$1);
  })));
});
$c_Lcom_raquo_airstream_state_Var$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__s_util_Try__Z($as_s_util_Try(x));
});
$c_Lcom_raquo_airstream_state_Var$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__s_util_Try__F1__O($as_s_util_Try(x), default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().initClass($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  Lcom_raquo_airstream_state_Var$$anon$1: 1,
  sr_AbstractPartialFunction: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lcom_raquo_airstream_state_Var$$anon$1 as $d_Lcom_raquo_airstream_state_Var$$anon$1 };
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0((() => {
    $n($thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner).activate__V();
  })), new $c_sjsr_AnonFunction0((() => {
    $n($thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner).deactivate__V();
  })));
  $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners = (void 0);
}
export { $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V as $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V };
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  var x = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
  if ((x === (void 0))) {
    $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lcom_raquo_laminar_modifiers_EventListener.getArrayOf().constr)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
    if ((x$2 === (void 0))) {
      var $x_2;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_2 = x$2;
    }
    $x_2.push(listener);
  }
}
export { $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V as $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V };
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V($thiz, index) {
  var x = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
export { $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V as $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V };
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
  if ((x === (void 0))) {
    return (-1);
  } else {
    var found = false;
    var ix = 0;
    while (((!found) && (ix < $uI(x.length)))) {
      var x$1 = x[ix];
      if (((x$1 === null) ? (listener === null) : $dp_equals__O__Z($n(x$1), listener))) {
        found = true;
      } else {
        ix = ((1 + ix) | 0);
      }
    }
    return (found ? ix : (-1));
  }
}
export { $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I as $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I };
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
export { $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V as $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V };
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent;
  $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
export { $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V as $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V };
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var this$1 = $n(maybePrevParent);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var _$4 = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
    var this$2 = $n($n(_$4).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner());
    var this$3 = $n(this$2.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
    var isPrevParentActive = (!this$3.isEmpty__Z());
  } else {
    var isPrevParentActive = false;
  }
  var this$4 = $n(maybeNextParent);
  if ((!this$4.isEmpty__Z())) {
    var arg1$1 = this$4.get__O();
    var _$5 = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1$1);
    var this$5 = $n($n(_$5).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner());
    var this$6 = $n(this$5.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
    var isNextParentActive = (!this$6.isEmpty__Z());
  } else {
    var isNextParentActive = false;
  }
  return (isPrevParentActive && (!isNextParentActive));
}
export { $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z as $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z };
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  var this$1 = $n(maybeNextParent);
  if (this$1.isEmpty__Z()) {
    $n($thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription).clearOwner__V();
  } else {
    var arg1 = this$1.get__O();
    var nextParent = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
    $n($thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription).setOwner__Lcom_raquo_airstream_ownership_DynamicOwner__V($n(nextParent).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner());
  }
}
export { $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V as $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V };
function $is_Lcom_raquo_laminar_nodes_ReactiveElement(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ReactiveElement)));
}
export { $is_Lcom_raquo_laminar_nodes_ReactiveElement as $is_Lcom_raquo_laminar_nodes_ReactiveElement };
function $as_Lcom_raquo_laminar_nodes_ReactiveElement(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ReactiveElement(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ReactiveElement"));
}
export { $as_Lcom_raquo_laminar_nodes_ReactiveElement as $as_Lcom_raquo_laminar_nodes_ReactiveElement };
function $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ReactiveElement)));
}
export { $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement as $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement };
function $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ReactiveElement;", depth));
}
export { $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement as $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement };
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
export { $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__ as $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__ };
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
export { $c_Ljava_io_FilterOutputStream as $c_Ljava_io_FilterOutputStream };
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
export { $h_Ljava_io_FilterOutputStream as $h_Ljava_io_FilterOutputStream };
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
export { $c_jl_ArithmeticException as $c_jl_ArithmeticException };
var $d_jl_ArithmeticException = new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_ArithmeticException as $d_jl_ArithmeticException };
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
export { $c_jl_ArrayStoreException as $c_jl_ArrayStoreException };
var $d_jl_ArrayStoreException = new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_ArrayStoreException as $d_jl_ArrayStoreException };
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
export { $f_jl_Byte__equals__O__Z as $f_jl_Byte__equals__O__Z };
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
export { $f_jl_Byte__hashCode__I as $f_jl_Byte__hashCode__I };
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
export { $f_jl_Byte__toString__T as $f_jl_Byte__toString__T };
var $d_jl_Byte = new $TypeData().initClass(0, "java.lang.Byte", ({
  jl_Byte: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isByte(x)));
export { $d_jl_Byte as $d_jl_Byte };
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
export { $c_jl_ClassCastException as $c_jl_ClassCastException };
var $d_jl_ClassCastException = new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_ClassCastException as $d_jl_ClassCastException };
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
export { $ct_jl_IllegalArgumentException__T__ as $ct_jl_IllegalArgumentException__T__ };
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
export { $ct_jl_IllegalArgumentException__ as $ct_jl_IllegalArgumentException__ };
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
export { $c_jl_IllegalArgumentException as $c_jl_IllegalArgumentException };
var $d_jl_IllegalArgumentException = new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_IllegalArgumentException as $d_jl_IllegalArgumentException };
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
export { $c_jl_IllegalStateException as $c_jl_IllegalStateException };
var $d_jl_IllegalStateException = new $TypeData().initClass($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_IllegalStateException as $d_jl_IllegalStateException };
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
export { $ct_jl_IndexOutOfBoundsException__T__ as $ct_jl_IndexOutOfBoundsException__T__ };
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
export { $c_jl_IndexOutOfBoundsException as $c_jl_IndexOutOfBoundsException };
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_IndexOutOfBoundsException as $d_jl_IndexOutOfBoundsException };
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
export { $c_jl_JSConsoleBasedPrintStream$DummyOutputStream as $c_jl_JSConsoleBasedPrintStream$DummyOutputStream };
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
export { $h_jl_JSConsoleBasedPrintStream$DummyOutputStream as $h_jl_JSConsoleBasedPrintStream$DummyOutputStream };
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
}));
export { $d_jl_JSConsoleBasedPrintStream$DummyOutputStream as $d_jl_JSConsoleBasedPrintStream$DummyOutputStream };
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
export { $c_jl_NegativeArraySizeException as $c_jl_NegativeArraySizeException };
var $d_jl_NegativeArraySizeException = new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_NegativeArraySizeException as $d_jl_NegativeArraySizeException };
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
export { $c_jl_NullPointerException as $c_jl_NullPointerException };
var $d_jl_NullPointerException = new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_NullPointerException as $d_jl_NullPointerException };
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
export { $f_jl_Short__equals__O__Z as $f_jl_Short__equals__O__Z };
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
export { $f_jl_Short__hashCode__I as $f_jl_Short__hashCode__I };
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
export { $f_jl_Short__toString__T as $f_jl_Short__toString__T };
var $d_jl_Short = new $TypeData().initClass(0, "java.lang.Short", ({
  jl_Short: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isShort(x)));
export { $d_jl_Short as $d_jl_Short };
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
export { $c_jl_UnsupportedOperationException as $c_jl_UnsupportedOperationException };
var $d_jl_UnsupportedOperationException = new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_UnsupportedOperationException as $d_jl_UnsupportedOperationException };
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
export { $c_ju_NoSuchElementException as $c_ju_NoSuchElementException };
var $d_ju_NoSuchElementException = new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_ju_NoSuchElementException as $d_ju_NoSuchElementException };
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
export { $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError as $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError };
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError as $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError };
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
}
export { $c_s_$less$colon$less$$anon$1 as $c_s_$less$colon$less$$anon$1 };
$c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
}
export { $h_s_$less$colon$less$$anon$1 as $h_s_$less$colon$less$$anon$1 };
$h_s_$less$colon$less$$anon$1.prototype = $c_s_$less$colon$less$$anon$1.prototype;
$c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
  return x;
});
$c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  F1: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_$less$colon$less$$anon$1 as $d_s_$less$colon$less$$anon$1 };
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true;
  }
  return $thiz.s_MatchError__f_objString;
}
export { $p_s_MatchError__objString$lzycompute__T as $p_s_MatchError__objString$lzycompute__T };
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString);
}
export { $p_s_MatchError__objString__T as $p_s_MatchError__objString__T };
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $n($objectGetClass(this$1)).getName__T());
}
export { $p_s_MatchError__ofClass$1__T as $p_s_MatchError__ofClass$1__T };
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
export { $p_s_MatchError__liftedTree1$1__T as $p_s_MatchError__liftedTree1$1__T };
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return $p_s_MatchError__objString__T(this);
  }
}
export { $c_s_MatchError as $c_s_MatchError };
var $d_s_MatchError = new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_MatchError as $d_s_MatchError };
/** @constructor */
function $c_s_Option() {
}
export { $c_s_Option as $c_s_Option };
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
export { $h_s_Option as $h_s_Option };
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$());
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1);
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else {
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a);
  }
});
function $as_s_Option(obj) {
  return (((obj instanceof $c_s_Option) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Option"));
}
export { $as_s_Option as $as_s_Option };
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)));
}
export { $isArrayOf_s_Option as $isArrayOf_s_Option };
function $asArrayOf_s_Option(obj, depth) {
  return (($isArrayOf_s_Option(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Option;", depth));
}
export { $asArrayOf_s_Option as $asArrayOf_s_Option };
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  $n(outer);
  this.s_Product$$anon$1__f_$outer = outer;
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = $n(outer).productArity__I();
}
export { $c_s_Product$$anon$1 as $c_s_Product$$anon$1 };
$c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
export { $h_s_Product$$anon$1 as $h_s_Product$$anon$1 };
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax);
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = $n(this.s_Product$$anon$1__f_$outer).productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().initClass($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
export { $d_s_Product$$anon$1 as $d_s_Product$$anon$1 };
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
export { $c_sc_ClassTagSeqFactory$AnySeqDelegate as $c_sc_ClassTagSeqFactory$AnySeqDelegate };
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
export { $h_sc_ClassTagSeqFactory$AnySeqDelegate as $h_sc_ClassTagSeqFactory$AnySeqDelegate };
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().initClass($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  sc_ClassTagSeqFactory$AnySeqDelegate: 1,
  sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1,
  sc_SeqFactory: 1
}));
export { $d_sc_ClassTagSeqFactory$AnySeqDelegate as $d_sc_ClassTagSeqFactory$AnySeqDelegate };
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")");
}
export { $f_sc_Iterable__toString__T as $f_sc_Iterable__toString__T };
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)));
}
export { $is_sc_Iterable as $is_sc_Iterable };
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"));
}
export { $as_sc_Iterable as $as_sc_Iterable };
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)));
}
export { $isArrayOf_sc_Iterable as $isArrayOf_sc_Iterable };
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth));
}
export { $asArrayOf_sc_Iterable as $asArrayOf_sc_Iterable };
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
export { $c_sc_Iterator$$anon$19 as $c_sc_Iterator$$anon$19 };
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
export { $h_sc_Iterator$$anon$19 as $h_sc_Iterator$$anon$19 };
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false;
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0;
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this;
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
export { $d_sc_Iterator$$anon$19 as $d_sc_Iterator$$anon$19 };
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false;
}
export { $c_sc_Iterator$$anon$20 as $c_sc_Iterator$$anon$20 };
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
export { $h_sc_Iterator$$anon$20 as $h_sc_Iterator$$anon$20 };
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed);
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1;
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
export { $d_sc_Iterator$$anon$20 as $d_sc_Iterator$$anon$20 };
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0);
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0;
    }
  }
}
export { $p_sc_Iterator$SliceIterator__skip__V as $p_sc_Iterator$SliceIterator__skip__V };
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1);
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
export { $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I as $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I };
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start;
}
export { $c_sc_Iterator$SliceIterator as $c_sc_Iterator$SliceIterator };
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
export { $h_sc_Iterator$SliceIterator as $h_sc_Iterator$SliceIterator };
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize;
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z());
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O();
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O());
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else {
    var sum = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
    this.sc_Iterator$SliceIterator__f_dropping = ((sum < 0) ? 2147483647 : sum);
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
export { $d_sc_Iterator$SliceIterator as $d_sc_Iterator$SliceIterator };
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.lengthCompare__I__I(x) > 0));
}
export { $f_sc_LinearSeqOps__isDefinedAt__I__Z as $f_sc_LinearSeqOps__isDefinedAt__I__Z };
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return $n(skipped).head__O();
}
export { $f_sc_LinearSeqOps__apply__I__O as $f_sc_LinearSeqOps__apply__I__O };
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2);
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
  }
}
export { $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z as $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z };
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $x_1 = (!this$2.isEmpty__Z());
      } else {
        var $x_1 = false;
      }
      if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z());
      }
    }
  }
}
export { $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z as $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z };
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer;
}
export { $c_sc_StrictOptimizedLinearSeqOps$$anon$1 as $c_sc_StrictOptimizedLinearSeqOps$$anon$1 };
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
export { $h_sc_StrictOptimizedLinearSeqOps$$anon$1 as $h_sc_StrictOptimizedLinearSeqOps$$anon$1 };
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z());
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
export { $d_sc_StrictOptimizedLinearSeqOps$$anon$1 as $d_sc_StrictOptimizedLinearSeqOps$$anon$1 };
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
export { $c_scm_Buffer$ as $c_scm_Buffer$ };
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
export { $h_scm_Buffer$ as $h_scm_Buffer$ };
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_Buffer$ as $d_scm_Buffer$ };
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
export { $m_scm_Buffer$ as $m_scm_Buffer$ };
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)));
}
export { $is_s_reflect_ClassTag as $is_s_reflect_ClassTag };
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"));
}
export { $as_s_reflect_ClassTag as $as_s_reflect_ClassTag };
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)));
}
export { $isArrayOf_s_reflect_ClassTag as $isArrayOf_s_reflect_ClassTag };
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth));
}
export { $asArrayOf_s_reflect_ClassTag as $asArrayOf_s_reflect_ClassTag };
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I();
}
export { $c_sr_ScalaRunTime$$anon$1 as $c_sr_ScalaRunTime$$anon$1 };
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
export { $h_sr_ScalaRunTime$$anon$1 as $h_sr_ScalaRunTime$$anon$1 };
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax);
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
export { $d_sr_ScalaRunTime$$anon$1 as $d_sr_ScalaRunTime$$anon$1 };
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
export { $c_sjs_js_WrappedArray$ as $c_sjs_js_WrappedArray$ };
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
export { $h_sjs_js_WrappedArray$ as $h_sjs_js_WrappedArray$ };
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(elems);
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $as_sjs_js_WrappedArray($n($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source))).result__O());
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  sjs_js_WrappedArray$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sjs_js_WrappedArray$ as $d_sjs_js_WrappedArray$ };
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
export { $m_sjs_js_WrappedArray$ as $m_sjs_js_WrappedArray$ };
/** @constructor */
function $c_s_util_Failure(exception) {
  this.s_util_Failure__f_exception = null;
  this.s_util_Failure__f_exception = exception;
}
export { $c_s_util_Failure as $c_s_util_Failure };
$c_s_util_Failure.prototype = new $h_s_util_Try();
$c_s_util_Failure.prototype.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
export { $h_s_util_Failure as $h_s_util_Failure };
$h_s_util_Failure.prototype = $c_s_util_Failure.prototype;
$c_s_util_Failure.prototype.isFailure__Z = (function() {
  return true;
});
$c_s_util_Failure.prototype.isSuccess__Z = (function() {
  return false;
});
$c_s_util_Failure.prototype.map__F1__s_util_Try = (function(f) {
  return this;
});
$c_s_util_Failure.prototype.recover__s_PartialFunction__s_util_Try = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = $n(pf).applyOrElse__O__F1__O(this.s_util_Failure__f_exception, new $c_sjsr_AnonFunction1(((x$2) => {
      $as_jl_Throwable(x$2);
      return marker;
    })));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
      return new $c_s_util_Failure(e$2);
    } else {
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2));
    }
  }
});
$c_s_util_Failure.prototype.fold__F1__F1__O = (function(fa, fb) {
  return $n(fa).apply__O__O(this.s_util_Failure__f_exception);
});
$c_s_util_Failure.prototype.productPrefix__T = (function() {
  return "Failure";
});
$c_s_util_Failure.prototype.productArity__I = (function() {
  return 1;
});
$c_s_util_Failure.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Failure__f_exception : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_util_Failure.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_util_Failure.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_util_Failure.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_util_Failure.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var Failure$1 = $as_s_util_Failure(x$1);
    var x = this.s_util_Failure__f_exception;
    var x$2 = $n(Failure$1).s_util_Failure__f_exception;
    return ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
  } else {
    return false;
  }
});
function $as_s_util_Failure(obj) {
  return (((obj instanceof $c_s_util_Failure) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Failure"));
}
export { $as_s_util_Failure as $as_s_util_Failure };
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Failure)));
}
export { $isArrayOf_s_util_Failure as $isArrayOf_s_util_Failure };
function $asArrayOf_s_util_Failure(obj, depth) {
  return (($isArrayOf_s_util_Failure(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Failure;", depth));
}
export { $asArrayOf_s_util_Failure as $asArrayOf_s_util_Failure };
var $d_s_util_Failure = new $TypeData().initClass($c_s_util_Failure, "scala.util.Failure", ({
  s_util_Failure: 1,
  s_util_Try: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_util_Failure as $d_s_util_Failure };
/** @constructor */
function $c_s_util_Success(value) {
  this.s_util_Success__f_value = null;
  this.s_util_Success__f_value = value;
}
export { $c_s_util_Success as $c_s_util_Success };
$c_s_util_Success.prototype = new $h_s_util_Try();
$c_s_util_Success.prototype.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
export { $h_s_util_Success as $h_s_util_Success };
$h_s_util_Success.prototype = $c_s_util_Success.prototype;
$c_s_util_Success.prototype.isFailure__Z = (function() {
  return false;
});
$c_s_util_Success.prototype.isSuccess__Z = (function() {
  return true;
});
$c_s_util_Success.prototype.map__F1__s_util_Try = (function(f) {
  try {
    var r1 = $n(f).apply__O__O(this.s_util_Success__f_value);
    return new $c_s_util_Success(r1);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
      return new $c_s_util_Failure(e$2);
    } else {
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2));
    }
  }
});
$c_s_util_Success.prototype.recover__s_PartialFunction__s_util_Try = (function(pf) {
  return this;
});
$c_s_util_Success.prototype.fold__F1__F1__O = (function(fa, fb) {
  try {
    return $n(fb).apply__O__O(this.s_util_Success__f_value);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
      return $n(fa).apply__O__O(e$2);
    } else {
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2));
    }
  }
});
$c_s_util_Success.prototype.productPrefix__T = (function() {
  return "Success";
});
$c_s_util_Success.prototype.productArity__I = (function() {
  return 1;
});
$c_s_util_Success.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Success__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_util_Success.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_util_Success.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_util_Success.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_util_Success.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Success)) {
    var Success$1 = $as_s_util_Success(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Success__f_value, $n(Success$1).s_util_Success__f_value);
  } else {
    return false;
  }
});
function $as_s_util_Success(obj) {
  return (((obj instanceof $c_s_util_Success) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Success"));
}
export { $as_s_util_Success as $as_s_util_Success };
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Success)));
}
export { $isArrayOf_s_util_Success as $isArrayOf_s_util_Success };
function $asArrayOf_s_util_Success(obj, depth) {
  return (($isArrayOf_s_util_Success(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Success;", depth));
}
export { $asArrayOf_s_util_Success as $asArrayOf_s_util_Success };
var $d_s_util_Success = new $TypeData().initClass($c_s_util_Success, "scala.util.Success", ({
  s_util_Success: 1,
  s_util_Try: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_util_Success as $d_s_util_Success };
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error = error;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause = cause;
    var message = ((("ErrorHandlingError: " + $n(error).getMessage__T()) + "; cause: ") + $n(cause).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true);
    this.initCause__jl_Throwable__jl_Throwable(cause);
  }
  productIterator__sc_Iterator() {
    return new $c_s_Product$$anon$1(this);
  }
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
  }
  equals__O__Z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x$0$2 = $as_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(x$0);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
      var x$2 = $n(x$0$2).Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        var x$3 = this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
        var x$4 = $n(x$0$2).Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
        var $x_1 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        $n(x$0$2);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  productArity__I() {
    return 2;
  }
  productPrefix__T() {
    return "ErrorHandlingError";
  }
  productElement__I__O(n) {
    if ((n === 0)) {
      return this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
    }
    if ((n === 1)) {
      return this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  toString__T() {
    return ((("ErrorHandlingError: " + this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error) + "; cause: ") + this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause);
  }
}
export { $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError as $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError };
function $as_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError"));
}
export { $as_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError as $as_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError };
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)));
}
export { $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError as $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError };
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ErrorHandlingError;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError as $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError };
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().initClass($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
}));
export { $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError as $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError };
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error = error;
    var message = ("ObserverError: " + $n(error).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true);
  }
  productIterator__sc_Iterator() {
    return new $c_s_Product$$anon$1(this);
  }
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
  }
  equals__O__Z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x$0$2 = $as_Lcom_raquo_airstream_core_AirstreamError$ObserverError(x$0);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error;
      var x$2 = $n(x$0$2).Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        $n(x$0$2);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  productArity__I() {
    return 1;
  }
  productPrefix__T() {
    return "ObserverError";
  }
  productElement__I__O(n) {
    if ((n === 0)) {
      return this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  toString__T() {
    return ("ObserverError: " + this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error);
  }
}
export { $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError as $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError };
function $as_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ObserverError"));
}
export { $as_Lcom_raquo_airstream_core_AirstreamError$ObserverError as $as_Lcom_raquo_airstream_core_AirstreamError$ObserverError };
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ObserverError)));
}
export { $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError as $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError };
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ObserverError;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError as $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError };
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().initClass($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  Lcom_raquo_airstream_core_AirstreamError$ObserverError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
}));
export { $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError as $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError };
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error = error;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause = cause;
    var message = ((("ObserverErrorHandlingError: " + $n(error).getMessage__T()) + "; cause: ") + $n(cause).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true);
    this.initCause__jl_Throwable__jl_Throwable(cause);
  }
  productIterator__sc_Iterator() {
    return new $c_s_Product$$anon$1(this);
  }
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
  }
  equals__O__Z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x$0$2 = $as_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(x$0);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
      var x$2 = $n(x$0$2).Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        var x$3 = this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
        var x$4 = $n(x$0$2).Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
        var $x_1 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        $n(x$0$2);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  productArity__I() {
    return 2;
  }
  productPrefix__T() {
    return "ObserverErrorHandlingError";
  }
  productElement__I__O(n) {
    if ((n === 0)) {
      return this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
    }
    if ((n === 1)) {
      return this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  toString__T() {
    return ((("ObserverErrorHandlingError: " + this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error) + "; cause: ") + this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause);
  }
}
export { $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError as $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError };
function $as_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError"));
}
export { $as_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError as $as_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError };
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)));
}
export { $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError as $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError };
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError as $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError };
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().initClass($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
}));
export { $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError as $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError };
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_message = null;
    this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_cause = null;
    this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_message = message;
    this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_cause = cause;
    var message$1 = $m_Lcom_raquo_airstream_core_AirstreamError$().com$raquo$airstream$core$AirstreamError$$$VarError$superArg$1__T__s_Option__T(message, cause);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message$1, null, true, true);
    var this$1 = $n(cause);
    if ((!this$1.isEmpty__Z())) {
      var arg1 = this$1.get__O();
      var x$0 = $as_jl_Throwable(arg1);
      this.initCause__jl_Throwable__jl_Throwable(x$0);
    }
  }
  productIterator__sc_Iterator() {
    return new $c_s_Product$$anon$1(this);
  }
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
  }
  equals__O__Z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      var x$0$2 = $as_Lcom_raquo_airstream_core_AirstreamError$VarError(x$0);
      if ((this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_message === $n(x$0$2).Lcom_raquo_airstream_core_AirstreamError$VarError__f_message)) {
        var x = this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_cause;
        var x$2 = $n(x$0$2).Lcom_raquo_airstream_core_AirstreamError$VarError__f_cause;
        var $x_1 = ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        $n(x$0$2);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  productArity__I() {
    return 2;
  }
  productPrefix__T() {
    return "VarError";
  }
  productElement__I__O(n) {
    if ((n === 0)) {
      return this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_message;
    }
    if ((n === 1)) {
      return this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_cause;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  toString__T() {
    return ((("VarError: " + this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_message) + "; cause: ") + this.Lcom_raquo_airstream_core_AirstreamError$VarError__f_cause);
  }
}
export { $c_Lcom_raquo_airstream_core_AirstreamError$VarError as $c_Lcom_raquo_airstream_core_AirstreamError$VarError };
function $as_Lcom_raquo_airstream_core_AirstreamError$VarError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$VarError"));
}
export { $as_Lcom_raquo_airstream_core_AirstreamError$VarError as $as_Lcom_raquo_airstream_core_AirstreamError$VarError };
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$VarError)));
}
export { $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError as $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError };
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$VarError;", depth));
}
export { $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError as $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError };
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().initClass($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  Lcom_raquo_airstream_core_AirstreamError$VarError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
}));
export { $d_Lcom_raquo_airstream_core_AirstreamError$VarError as $d_Lcom_raquo_airstream_core_AirstreamError$VarError };
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.tryNow__s_util_Try();
}
export { $f_Lcom_raquo_airstream_core_Signal__onStart__V as $f_Lcom_raquo_airstream_core_Signal__onStart__V };
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_topoRank = 1;
  $thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_startIndex = 0;
}
export { $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V as $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V };
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_startIndex = ((1 + $thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_startIndex) | 0);
  $n($n($thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_config).Lcom_raquo_airstream_custom_CustomSource$Config__f_onWillStart).apply__O();
}
export { $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V as $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V };
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    $n($n($thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_config).Lcom_raquo_airstream_custom_CustomSource$Config__f_onStart).apply__O();
    var r1 = (void 0);
    var $x_1 = new $c_s_util_Success(r1);
  } catch (e) {
    var $x_1;
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
      var $x_1 = new $c_s_util_Failure(e$2);
    } else {
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2));
    }
  }
  $n($x_1).recover__s_PartialFunction__s_util_Try(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
export { $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V as $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V };
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $n($n($thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_config).Lcom_raquo_airstream_custom_CustomSource$Config__f_onStop).apply__O();
}
export { $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V as $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V };
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.Lcom_raquo_airstream_state_SourceVar__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_state_SourceVar__f_currentValue = null;
  this.Lcom_raquo_airstream_state_SourceVar__f__varSignal = null;
  this.Lcom_raquo_airstream_state_SourceVar__f_signal = null;
  this.Lcom_raquo_airstream_state_SourceVar__f_maybeDisplayName = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.Lcom_raquo_airstream_state_SourceVar__f_currentValue = initial;
  this.Lcom_raquo_airstream_state_SourceVar__f__varSignal = new $c_Lcom_raquo_airstream_state_VarSignal(this.Lcom_raquo_airstream_state_SourceVar__f_currentValue);
  this.Lcom_raquo_airstream_state_SourceVar__f_signal = this.Lcom_raquo_airstream_state_SourceVar__f__varSignal;
}
export { $c_Lcom_raquo_airstream_state_SourceVar as $c_Lcom_raquo_airstream_state_SourceVar };
$c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$c_Lcom_raquo_airstream_state_SourceVar.prototype.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
export { $h_Lcom_raquo_airstream_state_SourceVar as $h_Lcom_raquo_airstream_state_SourceVar };
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $c_Lcom_raquo_airstream_state_SourceVar.prototype;
$c_Lcom_raquo_airstream_state_SourceVar.prototype.maybeDisplayName__O = (function() {
  return this.Lcom_raquo_airstream_state_SourceVar__f_maybeDisplayName;
});
$c_Lcom_raquo_airstream_state_SourceVar.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$c_Lcom_raquo_airstream_state_SourceVar.prototype.setCurrentValue__s_util_Try__Lcom_raquo_airstream_core_Transaction__V = (function(value, transaction) {
  this.Lcom_raquo_airstream_state_SourceVar__f_currentValue = value;
  var this$1 = $n(this.Lcom_raquo_airstream_state_SourceVar__f__varSignal);
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this$1, value, transaction);
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().initClass($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  Lcom_raquo_airstream_state_SourceVar: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Source$SignalSource: 1,
  Lcom_raquo_airstream_core_Sink: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_state_Var: 1
}));
export { $d_Lcom_raquo_airstream_state_SourceVar as $d_Lcom_raquo_airstream_state_SourceVar };
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag, ref) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag = tag;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref = ref;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
export { $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement as $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement };
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
export { $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement as $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement };
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype;
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent;
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this);
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner = (function() {
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner;
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ParentNode$$_maybeChildren__O = (function() {
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren;
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__O__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren = x$1;
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(x$0) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner = x$0;
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.toString__T = (function() {
  return (("ReactiveHtmlElement(" + ((this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref !== null) ? $as_T(this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.outerHTML) : ("tag=" + $n(this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag).Lcom_raquo_laminar_tags_HtmlTag__f_name))) + ")");
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref;
});
function $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ReactiveHtmlElement"));
}
export { $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement as $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement };
function $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ReactiveHtmlElement)));
}
export { $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement as $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement };
function $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ReactiveHtmlElement;", depth));
}
export { $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement as $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement };
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().initClass($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  Lcom_raquo_laminar_nodes_ReactiveHtmlElement: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1,
  Lcom_raquo_laminar_nodes_ParentNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveElement: 1
}));
export { $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement as $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement };
function $as_Lcom_raquo_laminar_nodes_ReactiveSvgElement(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ReactiveSvgElement"));
}
export { $as_Lcom_raquo_laminar_nodes_ReactiveSvgElement as $as_Lcom_raquo_laminar_nodes_ReactiveSvgElement };
function $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ReactiveSvgElement)));
}
export { $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement as $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement };
function $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ReactiveSvgElement;", depth));
}
export { $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement as $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement };
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
export { $c_jl_ArrayIndexOutOfBoundsException as $c_jl_ArrayIndexOutOfBoundsException };
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_ArrayIndexOutOfBoundsException as $d_jl_ArrayIndexOutOfBoundsException };
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
export { $f_jl_Double__equals__O__Z as $f_jl_Double__equals__O__Z };
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz);
}
export { $f_jl_Double__hashCode__I as $f_jl_Double__hashCode__I };
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
export { $f_jl_Double__toString__T as $f_jl_Double__toString__T };
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"));
}
export { $as_jl_Double as $as_jl_Double };
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)));
}
export { $isArrayOf_jl_Double as $isArrayOf_jl_Double };
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth));
}
export { $asArrayOf_jl_Double as $asArrayOf_jl_Double };
var $d_jl_Double = new $TypeData().initClass(0, "java.lang.Double", ({
  jl_Double: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "number")));
export { $d_jl_Double as $d_jl_Double };
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
export { $f_jl_Float__equals__O__Z as $f_jl_Float__equals__O__Z };
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz);
}
export { $f_jl_Float__hashCode__I as $f_jl_Float__hashCode__I };
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
export { $f_jl_Float__toString__T as $f_jl_Float__toString__T };
var $d_jl_Float = new $TypeData().initClass(0, "java.lang.Float", ({
  jl_Float: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isFloat(x)));
export { $d_jl_Float as $d_jl_Float };
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
export { $f_jl_Integer__equals__O__Z as $f_jl_Integer__equals__O__Z };
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
export { $f_jl_Integer__hashCode__I as $f_jl_Integer__hashCode__I };
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
export { $f_jl_Integer__toString__T as $f_jl_Integer__toString__T };
var $d_jl_Integer = new $TypeData().initClass(0, "java.lang.Integer", ({
  jl_Integer: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isInt(x)));
export { $d_jl_Integer as $d_jl_Integer };
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi));
  } else {
    return false;
  }
}
export { $f_jl_Long__equals__O__Z as $f_jl_Long__equals__O__Z };
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi);
}
export { $f_jl_Long__hashCode__I as $f_jl_Long__hashCode__I };
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi);
}
export { $f_jl_Long__toString__T as $f_jl_Long__toString__T };
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"));
}
export { $as_jl_Long as $as_jl_Long };
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)));
}
export { $isArrayOf_jl_Long as $isArrayOf_jl_Long };
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth));
}
export { $asArrayOf_jl_Long as $asArrayOf_jl_Long };
var $d_jl_Long = new $TypeData().initClass(0, "java.lang.Long", ({
  jl_Long: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => (x instanceof $c_RTLong)));
export { $d_jl_Long as $d_jl_Long };
function $f_T__codePointAt__I__I($thiz, index) {
  $charAt($thiz, index);
  return $uI($thiz.codePointAt(index));
}
export { $f_T__codePointAt__I__I as $f_T__codePointAt__I__I };
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $x_1 = res;
    var index = i;
    res = (($x_1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0);
  }
  return res;
}
export { $f_T__hashCode__I as $f_T__hashCode__I };
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
export { $f_T__equals__O__Z as $f_T__equals__O__Z };
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $as_T($thiz.repeat(count));
  }
}
export { $f_T__repeat__I__T as $f_T__repeat__I__T };
function $f_T__split__T__I__AT($thiz, regex, limit) {
  var this$2 = $n($m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0));
  return this$2.java$util$regex$Pattern$$split__T__I__AT($thiz, limit);
}
export { $f_T__split__T__I__AT as $f_T__split__T__I__AT };
function $f_T__toString__T($thiz) {
  return $thiz;
}
export { $f_T__toString__T as $f_T__toString__T };
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
}
export { $as_T as $as_T };
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)));
}
export { $isArrayOf_T as $isArrayOf_T };
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth));
}
export { $asArrayOf_T as $asArrayOf_T };
var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
  T: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "string")));
export { $d_T as $d_T };
function $ct_jl_StringIndexOutOfBoundsException__I__($thiz, index) {
  var s = ("String index out of range: " + index);
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
export { $ct_jl_StringIndexOutOfBoundsException__I__ as $ct_jl_StringIndexOutOfBoundsException__I__ };
function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
export { $ct_jl_StringIndexOutOfBoundsException__ as $ct_jl_StringIndexOutOfBoundsException__ };
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
export { $c_jl_StringIndexOutOfBoundsException as $c_jl_StringIndexOutOfBoundsException };
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_jl_StringIndexOutOfBoundsException as $d_jl_StringIndexOutOfBoundsException };
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.ju_regex_PatternSyntaxException__f_desc = null;
    this.ju_regex_PatternSyntaxException__f_regex = null;
    this.ju_regex_PatternSyntaxException__f_index = 0;
    this.ju_regex_PatternSyntaxException__f_desc = desc;
    this.ju_regex_PatternSyntaxException__f_regex = regex;
    this.ju_regex_PatternSyntaxException__f_index = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    var idx = this.ju_regex_PatternSyntaxException__f_index;
    var re = this.ju_regex_PatternSyntaxException__f_regex;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.ju_regex_PatternSyntaxException__f_desc + indexHint) + "\n") + re);
    if (((idx >= 0) && (re !== null))) {
      var this$1 = $n(re);
      var $x_1 = (idx < this$1.length);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^");
    } else {
      return base;
    }
  }
}
export { $c_ju_regex_PatternSyntaxException as $c_ju_regex_PatternSyntaxException };
var $d_ju_regex_PatternSyntaxException = new $TypeData().initClass($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  ju_regex_PatternSyntaxException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
export { $d_ju_regex_PatternSyntaxException as $d_ju_regex_PatternSyntaxException };
/** @constructor */
function $c_s_None$() {
}
export { $c_s_None$ as $c_s_None$ };
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
export { $h_s_None$ as $h_s_None$ };
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None";
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0;
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880;
});
$c_s_None$.prototype.toString__T = (function() {
  return "None";
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E();
});
var $d_s_None$ = new $TypeData().initClass($c_s_None$, "scala.None$", ({
  s_None$: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_None$ as $d_s_None$ };
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
export { $m_s_None$ as $m_s_None$ };
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value;
}
export { $c_s_Some as $c_s_Some };
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
export { $h_s_Some as $h_s_Some };
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value;
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some";
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1;
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value);
  } else {
    return false;
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"));
}
export { $as_s_Some as $as_s_Some };
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)));
}
export { $isArrayOf_s_Some as $isArrayOf_s_Some };
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth));
}
export { $asArrayOf_s_Some as $asArrayOf_s_Some };
var $d_s_Some = new $TypeData().initClass($c_s_Some, "scala.Some", ({
  s_Some: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
export { $d_s_Some as $d_s_Some };
/** @constructor */
function $c_sc_AbstractIterable() {
}
export { $c_sc_AbstractIterable as $c_sc_AbstractIterable };
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
export { $h_sc_AbstractIterable as $h_sc_AbstractIterable };
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T();
});
$c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  var xs$1 = $thiz.sc_ArrayOps$ArrayIterator__f_xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
  return $thiz;
}
export { $ct_sc_ArrayOps$ArrayIterator__O__ as $ct_sc_ArrayOps$ArrayIterator__O__ };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
}
export { $c_sc_ArrayOps$ArrayIterator as $c_sc_ArrayOps$ArrayIterator };
$c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
export { $h_sc_ArrayOps$ArrayIterator as $h_sc_ArrayOps$ArrayIterator };
$h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
$c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
  return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
});
$c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
  return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len);
});
$c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
  var $x_1 = this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos;
  var xs = this.sc_ArrayOps$ArrayIterator__f_xs;
  if (($x_1 >= $m_jl_reflect_Array$().getLength__O__I(xs))) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.sc_ArrayOps$ArrayIterator__f_len;
    } else {
      var a = this.sc_ArrayOps$ArrayIterator__f_len;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator as $d_sc_ArrayOps$ArrayIterator };
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value));
}
export { $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I as $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I };
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I();
}
export { $c_sc_IndexedSeqView$IndexedSeqViewIterator as $c_sc_IndexedSeqView$IndexedSeqViewIterator };
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
export { $h_sc_IndexedSeqView$IndexedSeqViewIterator as $h_sc_IndexedSeqView$IndexedSeqViewIterator };
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r;
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  }
  return this;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_IndexedSeqView$IndexedSeqViewIterator as $d_sc_IndexedSeqView$IndexedSeqViewIterator };
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.sci_ArraySeq$__f_bitmap$0)) {
    $thiz.sci_ArraySeq$__f_emptyImpl = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.sci_ArraySeq$__f_bitmap$0 = true;
  }
  return $thiz.sci_ArraySeq$__f_emptyImpl;
}
export { $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef as $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef };
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.sci_ArraySeq$__f_bitmap$0) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.sci_ArraySeq$__f_emptyImpl);
}
export { $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef as $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef };
/** @constructor */
function $c_sci_ArraySeq$() {
  this.sci_ArraySeq$__f_emptyImpl = null;
  this.sci_ArraySeq$__f_untagged = null;
  this.sci_ArraySeq$__f_bitmap$0 = false;
  $n_sci_ArraySeq$ = this;
  this.sci_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
export { $c_sci_ArraySeq$ as $c_sci_ArraySeq$ };
$c_sci_ArraySeq$.prototype = new $h_O();
$c_sci_ArraySeq$.prototype.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
export { $h_sci_ArraySeq$ as $h_sci_ArraySeq$ };
$h_sci_ArraySeq$.prototype = $c_sci_ArraySeq$.prototype;
$c_sci_ArraySeq$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq = (function(it, tag) {
  if ((it instanceof $c_sci_ArraySeq)) {
    var x2 = $as_sci_ArraySeq(it);
    return x2;
  } else {
    return this.unsafeWrapArray__O__sci_ArraySeq($m_s_Array$().from__sc_IterableOnce__s_reflect_ClassTag__O(it, tag));
  }
});
$c_sci_ArraySeq$.prototype.unsafeWrapArray__O__sci_ArraySeq = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_sci_ArraySeq$ofRef(x3);
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_sci_ArraySeq$ofInt(x4);
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_sci_ArraySeq$ofDouble(x5);
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_sci_ArraySeq$ofLong(x6);
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_sci_ArraySeq$ofFloat(x7);
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_sci_ArraySeq$ofChar(x8);
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_sci_ArraySeq$ofByte(x9);
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_sci_ArraySeq$ofShort(x10);
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_sci_ArraySeq$ofBoolean(x11);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_sci_ArraySeq$ofUnit(x12);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$c_sci_ArraySeq$.prototype.from__sc_IterableOnce__O__O = (function(it, evidence$5) {
  return this.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq(it, $as_s_reflect_ClassTag(evidence$5));
});
var $d_sci_ArraySeq$ = new $TypeData().initClass($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  sci_ArraySeq$: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ as $d_sci_ArraySeq$ };
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
export { $m_sci_ArraySeq$ as $m_sci_ArraySeq$ };
/** @constructor */
function $c_scm_ArraySeq$() {
  this.scm_ArraySeq$__f_untagged = null;
  this.scm_ArraySeq$__f_EmptyArraySeq = null;
  $n_scm_ArraySeq$ = this;
  this.scm_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.scm_ArraySeq$__f_EmptyArraySeq = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
export { $c_scm_ArraySeq$ as $c_scm_ArraySeq$ };
$c_scm_ArraySeq$.prototype = new $h_O();
$c_scm_ArraySeq$.prototype.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
export { $h_scm_ArraySeq$ as $h_scm_ArraySeq$ };
$h_scm_ArraySeq$.prototype = $c_scm_ArraySeq$.prototype;
$c_scm_ArraySeq$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__scm_ArraySeq = (function(it, evidence$2) {
  return this.make__O__scm_ArraySeq($m_s_Array$().from__sc_IterableOnce__s_reflect_ClassTag__O(it, evidence$2));
});
$c_scm_ArraySeq$.prototype.make__O__scm_ArraySeq = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_scm_ArraySeq$ofRef(x3);
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_scm_ArraySeq$ofInt(x4);
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_scm_ArraySeq$ofDouble(x5);
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_scm_ArraySeq$ofLong(x6);
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_scm_ArraySeq$ofFloat(x7);
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_scm_ArraySeq$ofChar(x8);
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_scm_ArraySeq$ofByte(x9);
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_scm_ArraySeq$ofShort(x10);
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_scm_ArraySeq$ofBoolean(x11);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_scm_ArraySeq$ofUnit(x12);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$c_scm_ArraySeq$.prototype.from__sc_IterableOnce__O__O = (function(it, evidence$5) {
  return this.from__sc_IterableOnce__s_reflect_ClassTag__scm_ArraySeq(it, $as_s_reflect_ClassTag(evidence$5));
});
var $d_scm_ArraySeq$ = new $TypeData().initClass($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  scm_ArraySeq$: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ as $d_scm_ArraySeq$ };
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
export { $m_scm_ArraySeq$ as $m_scm_ArraySeq$ };
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
export { $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__ as $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__ };
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
export { $c_Ljava_io_PrintStream as $c_Ljava_io_PrintStream };
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
export { $h_Ljava_io_PrintStream as $h_Ljava_io_PrintStream };
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"));
}
export { $as_Ljava_io_PrintStream as $as_Ljava_io_PrintStream };
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)));
}
export { $isArrayOf_Ljava_io_PrintStream as $isArrayOf_Ljava_io_PrintStream };
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth));
}
export { $asArrayOf_Ljava_io_PrintStream as $asArrayOf_Ljava_io_PrintStream };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcB$sp as $c_sc_ArrayOps$ArrayIterator$mcB$sp };
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcB$sp as $h_sc_ArrayOps$ArrayIterator$mcB$sp };
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next$mcB$sp__B = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next__O = (function() {
  return this.next$mcB$sp__B();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  sc_ArrayOps$ArrayIterator$mcB$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcB$sp as $d_sc_ArrayOps$ArrayIterator$mcB$sp };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcC$sp as $c_sc_ArrayOps$ArrayIterator$mcC$sp };
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcC$sp as $h_sc_ArrayOps$ArrayIterator$mcC$sp };
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next$mcC$sp__C = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next__O = (function() {
  return $bC(this.next$mcC$sp__C());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  sc_ArrayOps$ArrayIterator$mcC$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcC$sp as $d_sc_ArrayOps$ArrayIterator$mcC$sp };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcD$sp as $c_sc_ArrayOps$ArrayIterator$mcD$sp };
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcD$sp as $h_sc_ArrayOps$ArrayIterator$mcD$sp };
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next$mcD$sp__D = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next__O = (function() {
  return this.next$mcD$sp__D();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  sc_ArrayOps$ArrayIterator$mcD$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcD$sp as $d_sc_ArrayOps$ArrayIterator$mcD$sp };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcF$sp as $c_sc_ArrayOps$ArrayIterator$mcF$sp };
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcF$sp as $h_sc_ArrayOps$ArrayIterator$mcF$sp };
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next$mcF$sp__F = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next__O = (function() {
  return this.next$mcF$sp__F();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  sc_ArrayOps$ArrayIterator$mcF$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcF$sp as $d_sc_ArrayOps$ArrayIterator$mcF$sp };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcI$sp as $c_sc_ArrayOps$ArrayIterator$mcI$sp };
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcI$sp as $h_sc_ArrayOps$ArrayIterator$mcI$sp };
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next$mcI$sp__I = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next__O = (function() {
  return this.next$mcI$sp__I();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  sc_ArrayOps$ArrayIterator$mcI$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcI$sp as $d_sc_ArrayOps$ArrayIterator$mcI$sp };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcJ$sp as $c_sc_ArrayOps$ArrayIterator$mcJ$sp };
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcJ$sp as $h_sc_ArrayOps$ArrayIterator$mcJ$sp };
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next$mcJ$sp__J = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var t = $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return new $c_RTLong(lo, hi);
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next__O = (function() {
  return this.next$mcJ$sp__J();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcJ$sp as $d_sc_ArrayOps$ArrayIterator$mcJ$sp };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcS$sp as $c_sc_ArrayOps$ArrayIterator$mcS$sp };
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcS$sp as $h_sc_ArrayOps$ArrayIterator$mcS$sp };
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next$mcS$sp__S = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next__O = (function() {
  return this.next$mcS$sp__S();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  sc_ArrayOps$ArrayIterator$mcS$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcS$sp as $d_sc_ArrayOps$ArrayIterator$mcS$sp };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcV$sp as $c_sc_ArrayOps$ArrayIterator$mcV$sp };
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcV$sp as $h_sc_ArrayOps$ArrayIterator$mcV$sp };
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next$mcV$sp__V = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next__O = (function() {
  this.next$mcV$sp__V();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  sc_ArrayOps$ArrayIterator$mcV$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcV$sp as $d_sc_ArrayOps$ArrayIterator$mcV$sp };
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
export { $c_sc_ArrayOps$ArrayIterator$mcZ$sp as $c_sc_ArrayOps$ArrayIterator$mcZ$sp };
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
export { $h_sc_ArrayOps$ArrayIterator$mcZ$sp as $h_sc_ArrayOps$ArrayIterator$mcZ$sp };
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next$mcZ$sp__Z = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next__O = (function() {
  return this.next$mcZ$sp__Z();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sc_ArrayOps$ArrayIterator$mcZ$sp as $d_sc_ArrayOps$ArrayIterator$mcZ$sp };
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)");
}
export { $f_sc_View__toString__T as $f_sc_View__toString__T };
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
export { $c_s_reflect_ManifestFactory$ClassTypeManifest as $c_s_reflect_ManifestFactory$ClassTypeManifest };
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
export { $h_s_reflect_ManifestFactory$ClassTypeManifest as $h_s_reflect_ManifestFactory$ClassTypeManifest };
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return $dp_toString__T($n(this.sjs_js_JavaScriptException__f_exception));
  }
  productPrefix__T() {
    return "JavaScriptException";
  }
  productArity__I() {
    return 1;
  }
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1));
  }
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
  }
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true;
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      var JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      var x = this.sjs_js_JavaScriptException__f_exception;
      var y = $n(JavaScriptException$1).sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y);
    } else {
      return false;
    }
  }
}
export { $c_sjs_js_JavaScriptException as $c_sjs_js_JavaScriptException };
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"));
}
export { $as_sjs_js_JavaScriptException as $as_sjs_js_JavaScriptException };
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)));
}
export { $isArrayOf_sjs_js_JavaScriptException as $isArrayOf_sjs_js_JavaScriptException };
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth));
}
export { $asArrayOf_sjs_js_JavaScriptException as $asArrayOf_sjs_js_JavaScriptException };
var $d_sjs_js_JavaScriptException = new $TypeData().initClass($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
}));
export { $d_sjs_js_JavaScriptException as $d_sjs_js_JavaScriptException };
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V($thiz, newValue, isInitial) {
  if ((!isInitial)) {
    $thiz._lastUpdateId_$eq__I__V($m_Lcom_raquo_airstream_core_Signal$().nextUpdateId__I());
  }
  $thiz.maybeLastSeenCurrentValue_$eq__O__V(newValue);
}
export { $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V as $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V };
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.maybeLastSeenCurrentValue__O();
  if ((x === (void 0))) {
    $thiz._lastUpdateId_$eq__I__V($m_Lcom_raquo_airstream_core_Signal$().nextUpdateId__I());
    var nextValue = $thiz.currentValueFromParent__s_util_Try();
    $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V($thiz, nextValue, true);
    var $x_1 = nextValue;
  } else {
    var $x_1 = x;
  }
  return $as_s_util_Try($x_1);
}
export { $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try as $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try };
function $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  var nextValue$1 = new $c_s_util_Success(nextValue);
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue$1, transaction);
}
export { $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V };
function $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  var nextValue = new $c_s_util_Failure(nextError);
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction);
}
export { $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V };
function $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V($thiz, nextValue, false);
  var isError = $n(nextValue).isFailure__Z();
  var elem = false;
  elem = false;
  $thiz.isSafeToRemoveObserver_$eq__Z__V(false);
  var this$ = $thiz.externalObservers__Lcom_raquo_ew_JsArray();
  var index = 0;
  while ((index < $uI(this$.length))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    var observer$1 = $as_Lcom_raquo_airstream_core_Observer(observer);
    $n(observer$1).onTry__s_util_Try__V(nextValue);
    if ((isError && (!elem))) {
      var ev$4 = true;
      elem = ev$4;
    }
  }
  var this$$1 = $thiz.internalObservers__Lcom_raquo_ew_JsArray();
  var index$1 = 0;
  while ((index$1 < $uI(this$$1.length))) {
    var observer$2 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    var observer$3 = $as_Lcom_raquo_airstream_core_InternalObserver(observer$2);
    $n(observer$3).onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  $thiz.isSafeToRemoveObserver_$eq__Z__V(true);
  var x = $thiz.maybePendingObserverRemovals__O();
  if ((x !== (void 0))) {
    var i = 0;
    var len = $uI(x.length);
    while ((i < len)) {
      var remove = x[i];
      var remove$1 = $as_F0(remove);
      $n(remove$1).apply__O();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((err) => {
      var err$1 = $as_jl_Throwable(err);
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(err$1);
    })), new $c_sjsr_AnonFunction1(((_$1) => (void 0))));
  }
}
export { $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V };
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.isSafeToRemoveObserver_$eq__Z__V(false);
  var this$ = $thiz.externalObservers__Lcom_raquo_ew_JsArray();
  var index = 0;
  while ((index < $uI(this$.length))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    var observer$1 = $as_Lcom_raquo_airstream_core_Observer(observer);
    try {
      $n(observer$1).onNext__O__V(nextValue);
    } catch (e) {
      var e$1 = e;
      var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.internalObservers__Lcom_raquo_ew_JsArray();
  var index$1 = 0;
  while ((index$1 < $uI(this$$1.length))) {
    var observer$2 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    var observer$3 = $as_Lcom_raquo_airstream_core_InternalObserver(observer$2);
    $n(observer$3).onNext__O__Lcom_raquo_airstream_core_Transaction__V(nextValue, transaction);
  }
  $thiz.isSafeToRemoveObserver_$eq__Z__V(true);
  var x = $thiz.maybePendingObserverRemovals__O();
  if ((x !== (void 0))) {
    var i = 0;
    var len = $uI(x.length);
    while ((i < len)) {
      var remove = x[i];
      var remove$1 = $as_F0(remove);
      $n(remove$1).apply__O();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
export { $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V };
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.isSafeToRemoveObserver_$eq__Z__V(false);
  var this$ = $thiz.externalObservers__Lcom_raquo_ew_JsArray();
  var index = 0;
  while ((index < $uI(this$.length))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    var observer$1 = $as_Lcom_raquo_airstream_core_Observer(observer);
    $n(observer$1).onError__jl_Throwable__V(nextError);
  }
  var this$$1 = $thiz.internalObservers__Lcom_raquo_ew_JsArray();
  var index$1 = 0;
  while ((index$1 < $uI(this$$1.length))) {
    var observer$2 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    var observer$3 = $as_Lcom_raquo_airstream_core_InternalObserver(observer$2);
    $n(observer$3).onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(nextError, transaction);
  }
  $thiz.isSafeToRemoveObserver_$eq__Z__V(true);
  var x = $thiz.maybePendingObserverRemovals__O();
  if ((x !== (void 0))) {
    var i = 0;
    var len = $uI(x.length);
    while ((i < len)) {
      var remove = x[i];
      var remove$1 = $as_F0(remove);
      $n(remove$1).apply__O();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
export { $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V };
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
export { $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V as $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V };
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_buffer = "";
}
export { $c_jl_JSConsoleBasedPrintStream as $c_jl_JSConsoleBasedPrintStream };
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
export { $h_jl_JSConsoleBasedPrintStream as $h_jl_JSConsoleBasedPrintStream };
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = $n(rest);
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      rest = "";
    } else {
      var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$2 = $n(rest);
      if ((nlPos > this$2.length)) {
        $charAt(this$2, nlPos);
      }
      if ((nlPos < 0)) {
        $charAt(this$2, (-1));
      }
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      var this$3 = $n(rest);
      var beginIndex = ((1 + nlPos) | 0);
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex);
      }
      rest = $as_T(this$3.substring(beginIndex));
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
}));
export { $d_jl_JSConsoleBasedPrintStream as $d_jl_JSConsoleBasedPrintStream };
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s;
    }
  }
}
export { $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq as $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq };
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
export { $is_sc_StrictOptimizedLinearSeqOps as $is_sc_StrictOptimizedLinearSeqOps };
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"));
}
export { $as_sc_StrictOptimizedLinearSeqOps as $as_sc_StrictOptimizedLinearSeqOps };
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
export { $isArrayOf_sc_StrictOptimizedLinearSeqOps as $isArrayOf_sc_StrictOptimizedLinearSeqOps };
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth));
}
export { $asArrayOf_sc_StrictOptimizedLinearSeqOps as $asArrayOf_sc_StrictOptimizedLinearSeqOps };
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
}
export { $c_s_reflect_ManifestFactory$PhantomManifest as $c_s_reflect_ManifestFactory$PhantomManifest };
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
export { $h_s_reflect_ManifestFactory$PhantomManifest as $h_s_reflect_ManifestFactory$PhantomManifest };
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString;
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_sc_AbstractView() {
}
export { $c_sc_AbstractView as $c_sc_AbstractView };
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
export { $h_sc_AbstractView as $h_sc_AbstractView };
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
}
export { $c_s_reflect_ManifestFactory$AnyManifest$ as $c_s_reflect_ManifestFactory$AnyManifest$ };
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
export { $h_s_reflect_ManifestFactory$AnyManifest$ as $h_s_reflect_ManifestFactory$AnyManifest$ };
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf();
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
export { $d_s_reflect_ManifestFactory$AnyManifest$ as $d_s_reflect_ManifestFactory$AnyManifest$ };
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
export { $m_s_reflect_ManifestFactory$AnyManifest$ as $m_s_reflect_ManifestFactory$AnyManifest$ };
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  var this$1 = $n($thiz.Lcom_raquo_airstream_misc_CollectStream__f_parent);
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(this$1, $thiz, false);
}
export { $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V as $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V };
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  var this$1 = $n($thiz.Lcom_raquo_airstream_misc_CollectStream__f_parent);
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(this$1, $thiz);
}
export { $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V as $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V };
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_isSafeToRemoveObserver = false;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybePendingObserverRemovals = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_externalObservers = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_internalObservers = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_topoRank = 0;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_startIndex = 0;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_config = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybeDisplayName = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_config = $as_Lcom_raquo_airstream_custom_CustomSource$Config($n(makeConfig).apply__O__O__O__O__O(new $c_sjsr_AnonFunction1(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((_$1) => {
      var _$1$1 = $as_Lcom_raquo_airstream_core_Transaction(_$1);
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1$1);
    })));
  })), new $c_sjsr_AnonFunction1(((err) => {
    var err$1 = $as_jl_Throwable(err);
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((_$2) => {
      var _$2$1 = $as_Lcom_raquo_airstream_core_Transaction(_$2);
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$1, _$2$1);
    })));
  })), new $c_sjsr_AnonFunction0((() => this.Lcom_raquo_airstream_custom_CustomStreamSource__f_startIndex)), new $c_sjsr_AnonFunction0((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this)))));
}
export { $c_Lcom_raquo_airstream_custom_CustomStreamSource as $c_Lcom_raquo_airstream_custom_CustomStreamSource };
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
export { $h_Lcom_raquo_airstream_custom_CustomStreamSource as $h_Lcom_raquo_airstream_custom_CustomStreamSource };
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype;
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.maybeDisplayName__O = (function() {
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybeDisplayName;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.isSafeToRemoveObserver__Z = (function() {
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_isSafeToRemoveObserver;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.maybePendingObserverRemovals__O = (function() {
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybePendingObserverRemovals;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.isSafeToRemoveObserver_$eq__Z__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_isSafeToRemoveObserver = x$1;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.maybePendingObserverRemovals_$eq__O__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybePendingObserverRemovals = x$1;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.equals__O__Z = (function(obj) {
  return (this === obj);
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.onAddedExternalObserver__Lcom_raquo_airstream_core_Observer__V = (function(observer) {
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.externalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_externalObservers;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.internalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_internalObservers;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_externalObservers = x$0;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_internalObservers = x$0;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.topoRank__I = (function() {
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_topoRank;
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.onWillStart__V = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.onStart__V = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.onStop__V = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().initClass($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  Lcom_raquo_airstream_custom_CustomStreamSource: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_Source$EventSource: 1,
  Lcom_raquo_airstream_core_EventStream: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1,
  Lcom_raquo_airstream_core_WritableStream: 1,
  Lcom_raquo_airstream_custom_CustomSource: 1
}));
export { $d_Lcom_raquo_airstream_custom_CustomStreamSource as $d_Lcom_raquo_airstream_custom_CustomStreamSource };
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial) {
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_state_VarSignal__f_isSafeToRemoveObserver = false;
  this.Lcom_raquo_airstream_state_VarSignal__f_maybePendingObserverRemovals = null;
  this.Lcom_raquo_airstream_state_VarSignal__f__lastUpdateId = 0;
  this.Lcom_raquo_airstream_state_VarSignal__f_externalObservers = null;
  this.Lcom_raquo_airstream_state_VarSignal__f_internalObservers = null;
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeLastSeenCurrentValue = null;
  this.Lcom_raquo_airstream_state_VarSignal__f_topoRank = 0;
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeDisplayName = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.Lcom_raquo_airstream_state_VarSignal__f__lastUpdateId = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeLastSeenCurrentValue = (void 0);
  this.Lcom_raquo_airstream_state_VarSignal__f_topoRank = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V(this, initial, true);
}
export { $c_Lcom_raquo_airstream_state_VarSignal as $c_Lcom_raquo_airstream_state_VarSignal };
$c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$c_Lcom_raquo_airstream_state_VarSignal.prototype.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
export { $h_Lcom_raquo_airstream_state_VarSignal as $h_Lcom_raquo_airstream_state_VarSignal };
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $c_Lcom_raquo_airstream_state_VarSignal.prototype;
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybeDisplayName__O = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_maybeDisplayName;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.isSafeToRemoveObserver__Z = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_isSafeToRemoveObserver;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybePendingObserverRemovals__O = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_maybePendingObserverRemovals;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.isSafeToRemoveObserver_$eq__Z__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f_isSafeToRemoveObserver = x$1;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybePendingObserverRemovals_$eq__O__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f_maybePendingObserverRemovals = x$1;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.onStop__V = (function() {
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.equals__O__Z = (function(obj) {
  return (this === obj);
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype._lastUpdateId__I = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f__lastUpdateId;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype._lastUpdateId_$eq__I__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f__lastUpdateId = x$1;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.onStart__V = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.onAddedExternalObserver__Lcom_raquo_airstream_core_Observer__V = (function(observer) {
  $n(observer).onTry__s_util_Try__V($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.externalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_externalObservers;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.internalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_internalObservers;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_state_VarSignal__f_externalObservers = x$0;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_state_VarSignal__f_internalObservers = x$0;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybeLastSeenCurrentValue__O = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_maybeLastSeenCurrentValue;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybeLastSeenCurrentValue_$eq__O__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeLastSeenCurrentValue = x$1;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.tryNow__s_util_Try = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.topoRank__I = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_topoRank;
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.currentValueFromParent__s_util_Try = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.onWillStart__V = (function() {
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().initClass($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  Lcom_raquo_airstream_state_VarSignal: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_Source$SignalSource: 1,
  Lcom_raquo_airstream_core_Signal: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1,
  Lcom_raquo_airstream_core_WritableSignal: 1,
  Lcom_raquo_airstream_state_StrictSignal: 1
}));
export { $d_Lcom_raquo_airstream_state_VarSignal as $d_Lcom_raquo_airstream_state_VarSignal };
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2);
      }
    }
    return false;
  }
}
export { $f_sc_Seq__equals__O__Z as $f_sc_Seq__equals__O__Z };
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)));
}
export { $is_sc_Seq as $is_sc_Seq };
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"));
}
export { $as_sc_Seq as $as_sc_Seq };
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)));
}
export { $isArrayOf_sc_Seq as $isArrayOf_sc_Seq };
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth));
}
export { $asArrayOf_sc_Seq as $asArrayOf_sc_Seq };
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.Lcom_raquo_airstream_misc_MapSignal__f_parentIsSignal = ($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent !== null);
  $thiz.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId = 0;
}
export { $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V as $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V };
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  var observable = $thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent;
  var this$3 = $n(observable);
  $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V(this$3);
  if ($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parentIsSignal) {
    var signal = $thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent;
    var this$5 = $n(signal);
    var newParentLastUpdateId = this$5._lastUpdateId__I();
    if ((newParentLastUpdateId !== $thiz.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__V($thiz);
    }
    $thiz.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId = newParentLastUpdateId;
  }
}
export { $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V as $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V };
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__V($thiz) {
  var nextValue = $thiz.currentValueFromParent__s_util_Try();
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V($thiz, nextValue, false);
}
export { $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__V as $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__V };
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parentIsSignal) {
    var signal = $thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent;
    var this$2 = $n(signal);
    $thiz.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId = this$2._lastUpdateId__I();
  }
}
export { $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V as $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V };
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  var this$1 = $n($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent);
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(this$1, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
export { $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V as $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V };
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  var this$1 = $n($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent);
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(this$1, $thiz);
}
export { $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V as $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V };
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.Lcom_raquo_laminar_api_package$$anon$1__f_documentEventProps = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.Lcom_raquo_laminar_api_package$$anon$1__f_Modifier = $m_Lcom_raquo_laminar_modifiers_Modifier$();
  $n($thiz.Lcom_raquo_laminar_api_package$$anon$1__f_Modifier);
  $thiz.Lcom_raquo_laminar_api_package$$anon$1__f_child = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
  $thiz.Lcom_raquo_laminar_api_package$$anon$1__f_children = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
  var fn = new $c_sjsr_AnonFunction1(((_$3) => {
    var _$3$1 = $as_Lcom_raquo_laminar_lifecycle_MountContext(_$3);
    $n($as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement($n(_$3$1).Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode)).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.focus();
  }));
  $f_Lcom_raquo_laminar_api_Laminar__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn);
}
export { $f_Lcom_raquo_laminar_api_Laminar__$init$__V as $f_Lcom_raquo_laminar_api_Laminar__$init$__V };
function $f_Lcom_raquo_laminar_api_Laminar__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  $n($thiz.Lcom_raquo_laminar_api_package$$anon$1__f_Modifier);
  var f = new $c_sjsr_AnonFunction1(((element) => {
    var element$1 = $as_Lcom_raquo_laminar_nodes_ReactiveElement(element);
    var this$2 = $n($n(element$1).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner);
    var this$3 = $n(this$2.Lcom_raquo_airstream_ownership_DynamicOwner__f__maybeCurrentOwner);
    var elem = (!this$3.isEmpty__Z());
    var ignoreNextActivation = new $c_sr_BooleanRef(elem);
    var activate = new $c_sjsr_AnonFunction1(((c) => {
      var c$1 = $as_Lcom_raquo_laminar_lifecycle_MountContext(c);
      if (ignoreNextActivation.sr_BooleanRef__f_elem) {
        var ev$5 = false;
        ignoreNextActivation.sr_BooleanRef__f_elem = ev$5;
      } else {
        $n(fn).apply__O__O(c$1);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().subscribeCallback__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element$1).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner) => {
      var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner);
      activate.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$1, owner$1));
    })), false);
  }));
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f);
}
export { $f_Lcom_raquo_laminar_api_Laminar__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier as $f_Lcom_raquo_laminar_api_Laminar__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier };
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.Lcom_raquo_airstream_misc_CollectStream__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_misc_CollectStream__f_isSafeToRemoveObserver = false;
  this.Lcom_raquo_airstream_misc_CollectStream__f_maybePendingObserverRemovals = null;
  this.Lcom_raquo_airstream_misc_CollectStream__f_externalObservers = null;
  this.Lcom_raquo_airstream_misc_CollectStream__f_internalObservers = null;
  this.Lcom_raquo_airstream_misc_CollectStream__f_parent = null;
  this.Lcom_raquo_airstream_misc_CollectStream__f_fn = null;
  this.Lcom_raquo_airstream_misc_CollectStream__f_topoRank = 0;
  this.Lcom_raquo_airstream_misc_CollectStream__f_parent = parent;
  this.Lcom_raquo_airstream_misc_CollectStream__f_fn = fn;
  this.Lcom_raquo_airstream_misc_CollectStream__f_maybeDisplayName = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.Lcom_raquo_airstream_misc_CollectStream__f_topoRank = ((1 + $n(parent).topoRank__I()) | 0);
}
export { $c_Lcom_raquo_airstream_misc_CollectStream as $c_Lcom_raquo_airstream_misc_CollectStream };
$c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
export { $h_Lcom_raquo_airstream_misc_CollectStream as $h_Lcom_raquo_airstream_misc_CollectStream };
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $c_Lcom_raquo_airstream_misc_CollectStream.prototype;
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.maybeDisplayName__O = (function() {
  return this.Lcom_raquo_airstream_misc_CollectStream__f_maybeDisplayName;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.isSafeToRemoveObserver__Z = (function() {
  return this.Lcom_raquo_airstream_misc_CollectStream__f_isSafeToRemoveObserver;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.maybePendingObserverRemovals__O = (function() {
  return this.Lcom_raquo_airstream_misc_CollectStream__f_maybePendingObserverRemovals;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.isSafeToRemoveObserver_$eq__Z__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_CollectStream__f_isSafeToRemoveObserver = x$1;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.maybePendingObserverRemovals_$eq__O__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_CollectStream__f_maybePendingObserverRemovals = x$1;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.equals__O__Z = (function(obj) {
  return (this === obj);
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.onAddedExternalObserver__Lcom_raquo_airstream_core_Observer__V = (function(observer) {
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.externalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_misc_CollectStream__f_externalObservers;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.internalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_misc_CollectStream__f_internalObservers;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_misc_CollectStream__f_externalObservers = x$0;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_misc_CollectStream__f_internalObservers = x$0;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.onWillStart__V = (function() {
  var observable = this.Lcom_raquo_airstream_misc_CollectStream__f_parent;
  var this$3 = $n(observable);
  $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V(this$3);
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.onStart__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.onStop__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.topoRank__I = (function() {
  return this.Lcom_raquo_airstream_misc_CollectStream__f_topoRank;
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.onNext__O__Lcom_raquo_airstream_core_Transaction__V = (function(nextParentValue, transaction) {
  try {
    var r1 = $as_s_Option($n(this.Lcom_raquo_airstream_misc_CollectStream__f_fn).apply__O__O(nextParentValue));
    var $x_1 = new $c_s_util_Success(r1);
  } catch (e) {
    var $x_1;
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
      var $x_1 = new $c_s_util_Failure(e$2);
    } else {
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2));
    }
  }
  $n($x_1).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((_$1) => {
    var _$1$1 = $as_jl_Throwable(_$1);
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1$1, transaction);
  })), new $c_sjsr_AnonFunction1(((nextValue) => {
    var nextValue$1 = $as_s_Option(nextValue);
    var this$4 = $n(nextValue$1);
    if ((!this$4.isEmpty__Z())) {
      var arg1 = this$4.get__O();
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, arg1, transaction);
    }
  })));
});
$c_Lcom_raquo_airstream_misc_CollectStream.prototype.onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().initClass($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  Lcom_raquo_airstream_misc_CollectStream: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_Source$EventSource: 1,
  Lcom_raquo_airstream_core_EventStream: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1,
  Lcom_raquo_airstream_core_WritableStream: 1,
  Lcom_raquo_airstream_core_InternalObserver: 1,
  Lcom_raquo_airstream_common_SingleParentStream: 1,
  Lcom_raquo_airstream_common_InternalNextErrorObserver: 1
}));
export { $d_Lcom_raquo_airstream_misc_CollectStream as $d_Lcom_raquo_airstream_misc_CollectStream };
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_isSafeToRemoveObserver = false;
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybePendingObserverRemovals = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f__lastUpdateId = 0;
  this.Lcom_raquo_airstream_misc_MapSignal__f_externalObservers = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_internalObservers = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeLastSeenCurrentValue = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_parentIsSignal = false;
  this.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId = 0;
  this.Lcom_raquo_airstream_misc_MapSignal__f_parent = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_project = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_recover = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_topoRank = 0;
  this.Lcom_raquo_airstream_misc_MapSignal__f_parent = parent;
  this.Lcom_raquo_airstream_misc_MapSignal__f_project = project;
  this.Lcom_raquo_airstream_misc_MapSignal__f_recover = recover;
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeDisplayName = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.Lcom_raquo_airstream_misc_MapSignal__f__lastUpdateId = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeLastSeenCurrentValue = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.Lcom_raquo_airstream_misc_MapSignal__f_topoRank = ((1 + $n(parent).topoRank__I()) | 0);
}
export { $c_Lcom_raquo_airstream_misc_MapSignal as $c_Lcom_raquo_airstream_misc_MapSignal };
$c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
export { $h_Lcom_raquo_airstream_misc_MapSignal as $h_Lcom_raquo_airstream_misc_MapSignal };
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $c_Lcom_raquo_airstream_misc_MapSignal.prototype;
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybeDisplayName__O = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_maybeDisplayName;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.isSafeToRemoveObserver__Z = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_isSafeToRemoveObserver;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybePendingObserverRemovals__O = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_maybePendingObserverRemovals;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.isSafeToRemoveObserver_$eq__Z__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_isSafeToRemoveObserver = x$1;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybePendingObserverRemovals_$eq__O__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybePendingObserverRemovals = x$1;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.equals__O__Z = (function(obj) {
  return (this === obj);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype._lastUpdateId__I = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f__lastUpdateId;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype._lastUpdateId_$eq__I__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f__lastUpdateId = x$1;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onAddedExternalObserver__Lcom_raquo_airstream_core_Observer__V = (function(observer) {
  $n(observer).onTry__s_util_Try__V($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.externalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_externalObservers;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.internalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_internalObservers;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_externalObservers = x$0;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$0) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_internalObservers = x$0;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybeLastSeenCurrentValue__O = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_maybeLastSeenCurrentValue;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybeLastSeenCurrentValue_$eq__O__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeLastSeenCurrentValue = x$1;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.tryNow__s_util_Try = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onNext__O__Lcom_raquo_airstream_core_Transaction__V = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onWillStart__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onStart__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onStop__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.topoRank__I = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_topoRank;
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  $n(nextParentValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((nextError) => {
    var nextError$1 = $as_jl_Throwable(nextError);
    var this$2 = $n(this.Lcom_raquo_airstream_misc_MapSignal__f_recover);
    if (this$2.isEmpty__Z()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$1, transaction);
    } else {
      var arg1 = this$2.get__O();
      var pf = $as_s_PartialFunction(arg1);
      try {
        var r1 = $as_s_Option($n(pf).applyOrElse__O__F1__O(nextError$1, new $c_sjsr_AnonFunction1(((_$1) => {
          $as_jl_Throwable(_$1);
          return null;
        }))));
        var $x_1 = new $c_s_util_Success(r1);
      } catch (e) {
        var $x_1;
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2);
        } else {
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2));
        }
      }
      $n($x_1).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((tryError) => {
        var tryError$1 = $as_jl_Throwable(tryError);
        var nextError$2 = new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError$1, nextError$1);
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$2, transaction);
      })), new $c_sjsr_AnonFunction1(((nextValue) => {
        var nextValue$1 = $as_s_Option(nextValue);
        if ((nextValue$1 === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$1, transaction);
        } else {
          var this$5 = $n(nextValue$1);
          if ((!this$5.isEmpty__Z())) {
            var arg1$1 = this$5.get__O();
            $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, arg1$1, transaction);
          }
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1(((_$3) => {
    var nextValue$2 = $n(nextParentValue).map__F1__s_util_Try(this.Lcom_raquo_airstream_misc_MapSignal__f_project);
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue$2, transaction);
  })));
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.currentValueFromParent__s_util_Try = (function() {
  var originalValue = $n($n(this.Lcom_raquo_airstream_misc_MapSignal__f_parent).tryNow__s_util_Try()).map__F1__s_util_Try(this.Lcom_raquo_airstream_misc_MapSignal__f_project);
  return $as_s_util_Try($n(originalValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((nextError) => {
    var nextError$1 = $as_jl_Throwable(nextError);
    var this$2 = $n(this.Lcom_raquo_airstream_misc_MapSignal__f_recover);
    if (this$2.isEmpty__Z()) {
      return originalValue;
    } else {
      var arg1 = this$2.get__O();
      var pf = $as_s_PartialFunction(arg1);
      try {
        var r1 = $as_s_Option($n(pf).applyOrElse__O__F1__O(nextError$1, new $c_sjsr_AnonFunction1(((_$4) => {
          $as_jl_Throwable(_$4);
          return null;
        }))));
        var $x_1 = new $c_s_util_Success(r1);
      } catch (e) {
        var $x_1;
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2);
        } else {
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2));
        }
      }
      return $as_s_util_Try($n($x_1).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((tryError) => {
        var tryError$1 = $as_jl_Throwable(tryError);
        var exception = new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError$1, nextError$1);
        return new $c_s_util_Failure(exception);
      })), new $c_sjsr_AnonFunction1(((nextValue) => {
        var nextValue$1 = $as_s_Option(nextValue);
        if ((nextValue$1 === null)) {
          return originalValue;
        } else {
          var this$6 = $n(nextValue$1);
          if (this$6.isEmpty__Z()) {
            var $x_2 = $m_s_None$();
          } else {
            var arg1$1 = this$6.get__O();
            var $x_2 = new $c_s_Some(new $c_s_util_Success(arg1$1));
          }
          var this$8 = $n($x_2);
          return $as_s_util_Try((this$8.isEmpty__Z() ? originalValue : this$8.get__O()));
        }
      }))));
    }
  })), new $c_sjsr_AnonFunction1(((_$6) => originalValue))));
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().initClass($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  Lcom_raquo_airstream_misc_MapSignal: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_Source$SignalSource: 1,
  Lcom_raquo_airstream_core_Signal: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1,
  Lcom_raquo_airstream_core_WritableSignal: 1,
  Lcom_raquo_airstream_core_InternalObserver: 1,
  Lcom_raquo_airstream_common_InternalTryObserver: 1,
  Lcom_raquo_airstream_common_SingleParentSignal: 1
}));
export { $d_Lcom_raquo_airstream_misc_MapSignal as $d_Lcom_raquo_airstream_misc_MapSignal };
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_Var = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_h1$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_h1bitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_h2$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_h2bitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_button$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_buttonbitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_p$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_pbitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_div$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_divbitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_table$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_tablebitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_tbody$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_tbodybitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_tr$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_trbitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_td$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_tdbitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_onClick$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_onClickbitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_className = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_svg$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_svgbitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_documentEventProps = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_unsafeWindowOwner$lzy1 = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_unsafeWindowOwnerbitmap$1 = false;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_Modifier = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_child = null;
  this.Lcom_raquo_laminar_api_package$$anon$1__f_children = null;
  $f_Lcom_raquo_laminar_api_Airstream__$init$__V(this);
  $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V(this);
  $f_Lcom_raquo_laminar_api_Laminar__$init$__V(this);
}
export { $c_Lcom_raquo_laminar_api_package$$anon$1 as $c_Lcom_raquo_laminar_api_package$$anon$1 };
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_api_package$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$$anon$1() {
}
export { $h_Lcom_raquo_laminar_api_package$$anon$1 as $h_Lcom_raquo_laminar_api_package$$anon$1 };
$h_Lcom_raquo_laminar_api_package$$anon$1.prototype = $c_Lcom_raquo_laminar_api_package$$anon$1.prototype;
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.h1__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_h1bitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_h1$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_h1bitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_h1$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.h2__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_h2bitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_h2$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_h2bitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_h2$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.button__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_buttonbitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_button$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_buttonbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_button$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.p__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_pbitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_p$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_pbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_p$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.div__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_divbitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_div$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_divbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_div$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.table__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_tablebitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_table$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("table", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_tablebitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_table$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.tbody__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_tbodybitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_tbody$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("tbody", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_tbodybitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_tbody$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.tr__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_trbitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_tr$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("tr", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_trbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_tr$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.td__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_tdbitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_td$lzy1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("td", false);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_tdbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_td$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.onClick__Lcom_raquo_laminar_keys_EventProp = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_onClickbitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_onClick$lzy1 = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.Lcom_raquo_laminar_api_package$$anon$1__f_onClickbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_onClick$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.svg__Lcom_raquo_laminar_api_Laminar$svg$ = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_svgbitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_svg$lzy1 = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_svgbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_svg$lzy1;
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.unsafeWindowOwner__Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = (function() {
  if ((!this.Lcom_raquo_laminar_api_package$$anon$1__f_unsafeWindowOwnerbitmap$1)) {
    this.Lcom_raquo_laminar_api_package$$anon$1__f_unsafeWindowOwner$lzy1 = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.Lcom_raquo_laminar_api_package$$anon$1__f_unsafeWindowOwnerbitmap$1 = true;
  }
  return this.Lcom_raquo_laminar_api_package$$anon$1__f_unsafeWindowOwner$lzy1;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().initClass($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  Lcom_raquo_laminar_api_package$$anon$1: 1,
  Lcom_raquo_laminar_api_Airstream: 1,
  Lcom_raquo_laminar_defs_tags_HtmlTags: 1,
  Lcom_raquo_laminar_defs_attrs_HtmlAttrs: 1,
  Lcom_raquo_laminar_defs_props_HtmlProps: 1,
  Lcom_raquo_laminar_defs_eventProps_GlobalEventProps: 1,
  Lcom_raquo_laminar_defs_styles_StyleProps: 1,
  Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys: 1,
  Lcom_raquo_laminar_Implicits$LowPriorityImplicits: 1,
  Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers: 1,
  Lcom_raquo_laminar_Implicits: 1,
  Lcom_raquo_laminar_api_Laminar: 1
}));
export { $d_Lcom_raquo_laminar_api_package$$anon$1 as $d_Lcom_raquo_laminar_api_package$$anon$1 };
/** @constructor */
function $c_sc_AbstractSeq() {
}
export { $c_sc_AbstractSeq as $c_sc_AbstractSeq };
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
export { $h_sc_AbstractSeq as $h_sc_AbstractSeq };
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true;
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$c_sc_AbstractSeq.prototype.isDefinedAt__I__Z = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sc_AbstractSeq.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$c_sc_AbstractSeq.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z($uI(x));
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
export { $c_sc_AbstractSeqView as $c_sc_AbstractSeqView };
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
export { $h_sc_AbstractSeqView as $h_sc_AbstractSeqView };
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
}
export { $is_sc_IndexedSeq as $is_sc_IndexedSeq };
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
}
export { $as_sc_IndexedSeq as $as_sc_IndexedSeq };
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)));
}
export { $isArrayOf_sc_IndexedSeq as $isArrayOf_sc_IndexedSeq };
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth));
}
export { $asArrayOf_sc_IndexedSeq as $asArrayOf_sc_IndexedSeq };
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
}
export { $is_sc_LinearSeq as $is_sc_LinearSeq };
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
}
export { $as_sc_LinearSeq as $as_sc_LinearSeq };
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)));
}
export { $isArrayOf_sc_LinearSeq as $isArrayOf_sc_LinearSeq };
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth));
}
export { $asArrayOf_sc_LinearSeq as $asArrayOf_sc_LinearSeq };
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz;
}
export { $ct_sc_SeqView$Id__sc_SeqOps__ as $ct_sc_SeqView$Id__sc_SeqOps__ };
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null;
}
export { $c_sc_SeqView$Id as $c_sc_SeqView$Id };
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
export { $h_sc_SeqView$Id as $h_sc_SeqView$Id };
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I();
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z();
});
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)));
}
export { $is_sci_Seq as $is_sci_Seq };
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"));
}
export { $as_sci_Seq as $as_sci_Seq };
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)));
}
export { $isArrayOf_sci_Seq as $isArrayOf_sci_Seq };
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth));
}
export { $asArrayOf_sci_Seq as $asArrayOf_sci_Seq };
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
export { $c_sc_IndexedSeqView$Id as $c_sc_IndexedSeqView$Id };
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
export { $h_sc_IndexedSeqView$Id as $h_sc_IndexedSeqView$Id };
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
}));
export { $d_sc_IndexedSeqView$Id as $d_sc_IndexedSeqView$Id };
/** @constructor */
function $c_sci_AbstractSeq() {
}
export { $c_sci_AbstractSeq as $c_sci_AbstractSeq };
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
export { $h_sci_AbstractSeq as $h_sci_AbstractSeq };
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true;
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I());
  }
}
export { $f_sci_IndexedSeq__canEqual__O__Z as $f_sci_IndexedSeq__canEqual__O__Z };
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true;
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
export { $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z as $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z };
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)));
}
export { $is_sci_IndexedSeq as $is_sci_IndexedSeq };
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"));
}
export { $as_sci_IndexedSeq as $as_sci_IndexedSeq };
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)));
}
export { $isArrayOf_sci_IndexedSeq as $isArrayOf_sci_IndexedSeq };
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth));
}
export { $asArrayOf_sci_IndexedSeq as $asArrayOf_sci_IndexedSeq };
/** @constructor */
function $c_scm_AbstractSeq() {
}
export { $c_scm_AbstractSeq as $c_scm_AbstractSeq };
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
export { $h_scm_AbstractSeq as $h_scm_AbstractSeq };
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
function $is_scm_Buffer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Buffer)));
}
export { $is_scm_Buffer as $is_scm_Buffer };
function $as_scm_Buffer(obj) {
  return (($is_scm_Buffer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Buffer"));
}
export { $as_scm_Buffer as $as_scm_Buffer };
function $isArrayOf_scm_Buffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Buffer)));
}
export { $isArrayOf_scm_Buffer as $isArrayOf_scm_Buffer };
function $asArrayOf_scm_Buffer(obj, depth) {
  return (($isArrayOf_scm_Buffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Buffer;", depth));
}
export { $asArrayOf_scm_Buffer as $asArrayOf_scm_Buffer };
function $as_sjsr_WrappedVarArgs(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"));
}
export { $as_sjsr_WrappedVarArgs as $as_sjsr_WrappedVarArgs };
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)));
}
export { $isArrayOf_sjsr_WrappedVarArgs as $isArrayOf_sjsr_WrappedVarArgs };
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth));
}
export { $asArrayOf_sjsr_WrappedVarArgs as $asArrayOf_sjsr_WrappedVarArgs };
/** @constructor */
function $c_scm_AbstractBuffer() {
}
export { $c_scm_AbstractBuffer as $c_scm_AbstractBuffer };
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
export { $h_scm_AbstractBuffer as $h_scm_AbstractBuffer };
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
/** @constructor */
function $c_sci_ArraySeq() {
}
export { $c_sci_ArraySeq as $c_sci_ArraySeq };
$c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$c_sci_ArraySeq.prototype.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
export { $h_sci_ArraySeq as $h_sci_ArraySeq };
$h_sci_ArraySeq.prototype = $c_sci_ArraySeq.prototype;
$c_sci_ArraySeq.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_ArraySeq.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sci_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sci_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq";
});
$c_sci_ArraySeq.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647;
});
function $as_sci_ArraySeq(obj) {
  return (((obj instanceof $c_sci_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq"));
}
export { $as_sci_ArraySeq as $as_sci_ArraySeq };
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq)));
}
export { $isArrayOf_sci_ArraySeq as $isArrayOf_sci_ArraySeq };
function $asArrayOf_sci_ArraySeq(obj, depth) {
  return (($isArrayOf_sci_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq;", depth));
}
export { $asArrayOf_sci_ArraySeq as $asArrayOf_sci_ArraySeq };
/** @constructor */
function $c_scm_ArraySeq() {
}
export { $c_scm_ArraySeq as $c_scm_ArraySeq };
$c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$c_scm_ArraySeq.prototype.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
export { $h_scm_ArraySeq as $h_scm_ArraySeq };
$h_scm_ArraySeq.prototype = $c_scm_ArraySeq.prototype;
$c_scm_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_scm_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq";
});
$c_scm_ArraySeq.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    var x2 = $as_scm_ArraySeq(other);
    var xs = this.array__O();
    var $x_1 = $m_jl_reflect_Array$().getLength__O__I(xs);
    var xs$1 = $n(x2).array__O();
    if (($x_1 !== $m_jl_reflect_Array$().getLength__O__I(xs$1))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $as_scm_ArraySeq(obj) {
  return (((obj instanceof $c_scm_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq"));
}
export { $as_scm_ArraySeq as $as_scm_ArraySeq };
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq)));
}
export { $isArrayOf_scm_ArraySeq as $isArrayOf_scm_ArraySeq };
function $asArrayOf_scm_ArraySeq(obj, depth) {
  return (($isArrayOf_scm_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth));
}
export { $asArrayOf_scm_ArraySeq as $asArrayOf_scm_ArraySeq };
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.sci_ArraySeq$ofBoolean__f_unsafeArray = null;
  this.sci_ArraySeq$ofBoolean__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofBoolean as $c_sci_ArraySeq$ofBoolean };
$c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofBoolean.prototype.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
export { $h_sci_ArraySeq$ofBoolean as $h_sci_ArraySeq$ofBoolean };
$h_sci_ArraySeq$ofBoolean.prototype = $c_sci_ArraySeq$ofBoolean.prototype;
$c_sci_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofBoolean__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofBoolean)) {
    var x2 = $as_sci_ArraySeq$ofBoolean(that);
    var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofBoolean__f_unsafeArray;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.sci_ArraySeq$ofBoolean__f_unsafeArray);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(i) {
  return $n(this.sci_ArraySeq$ofBoolean__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcZI$sp__I__Z(i);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i);
});
function $as_sci_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofBoolean"));
}
export { $as_sci_ArraySeq$ofBoolean as $as_sci_ArraySeq$ofBoolean };
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofBoolean)));
}
export { $isArrayOf_sci_ArraySeq$ofBoolean as $isArrayOf_sci_ArraySeq$ofBoolean };
function $asArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofBoolean;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofBoolean as $asArrayOf_sci_ArraySeq$ofBoolean };
var $d_sci_ArraySeq$ofBoolean = new $TypeData().initClass($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  sci_ArraySeq$ofBoolean: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofBoolean as $d_sci_ArraySeq$ofBoolean };
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.sci_ArraySeq$ofByte__f_unsafeArray = null;
  this.sci_ArraySeq$ofByte__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofByte as $c_sci_ArraySeq$ofByte };
$c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofByte.prototype.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
export { $h_sci_ArraySeq$ofByte as $h_sci_ArraySeq$ofByte };
$h_sci_ArraySeq$ofByte.prototype = $c_sci_ArraySeq$ofByte.prototype;
$c_sci_ArraySeq$ofByte.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofByte__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofByte.prototype.apply__I__B = (function(i) {
  return $n(this.sci_ArraySeq$ofByte__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofByte)) {
    var x2 = $as_sci_ArraySeq$ofByte(that);
    var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofByte__f_unsafeArray;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.sci_ArraySeq$ofByte__f_unsafeArray);
});
$c_sci_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1));
});
$c_sci_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i);
});
function $as_sci_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofByte"));
}
export { $as_sci_ArraySeq$ofByte as $as_sci_ArraySeq$ofByte };
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofByte)));
}
export { $isArrayOf_sci_ArraySeq$ofByte as $isArrayOf_sci_ArraySeq$ofByte };
function $asArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofByte;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofByte as $asArrayOf_sci_ArraySeq$ofByte };
var $d_sci_ArraySeq$ofByte = new $TypeData().initClass($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  sci_ArraySeq$ofByte: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofByte as $d_sci_ArraySeq$ofByte };
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.sci_ArraySeq$ofChar__f_unsafeArray = null;
  this.sci_ArraySeq$ofChar__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofChar as $c_sci_ArraySeq$ofChar };
$c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofChar.prototype.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
export { $h_sci_ArraySeq$ofChar as $h_sci_ArraySeq$ofChar };
$h_sci_ArraySeq$ofChar.prototype = $c_sci_ArraySeq$ofChar.prototype;
$c_sci_ArraySeq$ofChar.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofChar__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofChar.prototype.apply__I__C = (function(i) {
  return $n(this.sci_ArraySeq$ofChar__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofChar)) {
    var x2 = $as_sci_ArraySeq$ofChar(that);
    var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofChar__f_unsafeArray;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.sci_ArraySeq$ofChar__f_unsafeArray);
});
$c_sci_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.sci_ArraySeq$ofChar__f_unsafeArray).addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end);
});
$c_sci_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)));
});
$c_sci_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i));
});
function $as_sci_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofChar"));
}
export { $as_sci_ArraySeq$ofChar as $as_sci_ArraySeq$ofChar };
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofChar)));
}
export { $isArrayOf_sci_ArraySeq$ofChar as $isArrayOf_sci_ArraySeq$ofChar };
function $asArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofChar;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofChar as $asArrayOf_sci_ArraySeq$ofChar };
var $d_sci_ArraySeq$ofChar = new $TypeData().initClass($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  sci_ArraySeq$ofChar: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofChar as $d_sci_ArraySeq$ofChar };
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.sci_ArraySeq$ofDouble__f_unsafeArray = null;
  this.sci_ArraySeq$ofDouble__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofDouble as $c_sci_ArraySeq$ofDouble };
$c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofDouble.prototype.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
export { $h_sci_ArraySeq$ofDouble as $h_sci_ArraySeq$ofDouble };
$h_sci_ArraySeq$ofDouble.prototype = $c_sci_ArraySeq$ofDouble.prototype;
$c_sci_ArraySeq$ofDouble.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofDouble__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var x2 = $as_sci_ArraySeq$ofDouble(that);
    var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofDouble__f_unsafeArray;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.sci_ArraySeq$ofDouble__f_unsafeArray);
});
$c_sci_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(i) {
  return $n(this.sci_ArraySeq$ofDouble__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcDI$sp__I__D(i);
});
$c_sci_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i);
});
function $as_sci_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofDouble"));
}
export { $as_sci_ArraySeq$ofDouble as $as_sci_ArraySeq$ofDouble };
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofDouble)));
}
export { $isArrayOf_sci_ArraySeq$ofDouble as $isArrayOf_sci_ArraySeq$ofDouble };
function $asArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofDouble;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofDouble as $asArrayOf_sci_ArraySeq$ofDouble };
var $d_sci_ArraySeq$ofDouble = new $TypeData().initClass($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  sci_ArraySeq$ofDouble: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofDouble as $d_sci_ArraySeq$ofDouble };
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.sci_ArraySeq$ofFloat__f_unsafeArray = null;
  this.sci_ArraySeq$ofFloat__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofFloat as $c_sci_ArraySeq$ofFloat };
$c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofFloat.prototype.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
export { $h_sci_ArraySeq$ofFloat as $h_sci_ArraySeq$ofFloat };
$h_sci_ArraySeq$ofFloat.prototype = $c_sci_ArraySeq$ofFloat.prototype;
$c_sci_ArraySeq$ofFloat.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofFloat__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var x2 = $as_sci_ArraySeq$ofFloat(that);
    var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofFloat__f_unsafeArray;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.sci_ArraySeq$ofFloat__f_unsafeArray);
});
$c_sci_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(i) {
  return $n(this.sci_ArraySeq$ofFloat__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcFI$sp__I__F(i);
});
$c_sci_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i);
});
function $as_sci_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofFloat"));
}
export { $as_sci_ArraySeq$ofFloat as $as_sci_ArraySeq$ofFloat };
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofFloat)));
}
export { $isArrayOf_sci_ArraySeq$ofFloat as $isArrayOf_sci_ArraySeq$ofFloat };
function $asArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofFloat;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofFloat as $asArrayOf_sci_ArraySeq$ofFloat };
var $d_sci_ArraySeq$ofFloat = new $TypeData().initClass($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  sci_ArraySeq$ofFloat: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofFloat as $d_sci_ArraySeq$ofFloat };
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.sci_ArraySeq$ofInt__f_unsafeArray = null;
  this.sci_ArraySeq$ofInt__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofInt as $c_sci_ArraySeq$ofInt };
$c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofInt.prototype.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
export { $h_sci_ArraySeq$ofInt as $h_sci_ArraySeq$ofInt };
$h_sci_ArraySeq$ofInt.prototype = $c_sci_ArraySeq$ofInt.prototype;
$c_sci_ArraySeq$ofInt.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofInt__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofInt)) {
    var x2 = $as_sci_ArraySeq$ofInt(that);
    var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofInt__f_unsafeArray;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.sci_ArraySeq$ofInt__f_unsafeArray);
});
$c_sci_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(i) {
  return $n(this.sci_ArraySeq$ofInt__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcII$sp__I__I(i);
});
$c_sci_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i);
});
function $as_sci_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofInt"));
}
export { $as_sci_ArraySeq$ofInt as $as_sci_ArraySeq$ofInt };
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofInt)));
}
export { $isArrayOf_sci_ArraySeq$ofInt as $isArrayOf_sci_ArraySeq$ofInt };
function $asArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofInt;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofInt as $asArrayOf_sci_ArraySeq$ofInt };
var $d_sci_ArraySeq$ofInt = new $TypeData().initClass($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  sci_ArraySeq$ofInt: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofInt as $d_sci_ArraySeq$ofInt };
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.sci_ArraySeq$ofLong__f_unsafeArray = null;
  this.sci_ArraySeq$ofLong__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofLong as $c_sci_ArraySeq$ofLong };
$c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofLong.prototype.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
export { $h_sci_ArraySeq$ofLong as $h_sci_ArraySeq$ofLong };
$h_sci_ArraySeq$ofLong.prototype = $c_sci_ArraySeq$ofLong.prototype;
$c_sci_ArraySeq$ofLong.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofLong__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofLong)) {
    var x2 = $as_sci_ArraySeq$ofLong(that);
    var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofLong__f_unsafeArray;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.sci_ArraySeq$ofLong__f_unsafeArray);
});
$c_sci_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(i) {
  return $n(this.sci_ArraySeq$ofLong__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcJI$sp__I__J(i);
});
$c_sci_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i);
});
function $as_sci_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofLong"));
}
export { $as_sci_ArraySeq$ofLong as $as_sci_ArraySeq$ofLong };
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofLong)));
}
export { $isArrayOf_sci_ArraySeq$ofLong as $isArrayOf_sci_ArraySeq$ofLong };
function $asArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofLong;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofLong as $asArrayOf_sci_ArraySeq$ofLong };
var $d_sci_ArraySeq$ofLong = new $TypeData().initClass($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  sci_ArraySeq$ofLong: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofLong as $d_sci_ArraySeq$ofLong };
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.sci_ArraySeq$ofRef__f_unsafeArray = null;
  this.sci_ArraySeq$ofRef__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofRef as $c_sci_ArraySeq$ofRef };
$c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofRef.prototype.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
export { $h_sci_ArraySeq$ofRef as $h_sci_ArraySeq$ofRef };
$h_sci_ArraySeq$ofRef.prototype = $c_sci_ArraySeq$ofRef.prototype;
$c_sci_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofRef.prototype.apply__I__O = (function(i) {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofRef__f_unsafeArray;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofRef)) {
    var x2 = $as_sci_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.sci_ArraySeq$ofRef__f_unsafeArray, $n(x2).sci_ArraySeq$ofRef__f_unsafeArray);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.sci_ArraySeq$ofRef__f_unsafeArray);
});
$c_sci_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
function $as_sci_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"));
}
export { $as_sci_ArraySeq$ofRef as $as_sci_ArraySeq$ofRef };
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)));
}
export { $isArrayOf_sci_ArraySeq$ofRef as $isArrayOf_sci_ArraySeq$ofRef };
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofRef as $asArrayOf_sci_ArraySeq$ofRef };
var $d_sci_ArraySeq$ofRef = new $TypeData().initClass($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  sci_ArraySeq$ofRef: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofRef as $d_sci_ArraySeq$ofRef };
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.sci_ArraySeq$ofShort__f_unsafeArray = null;
  this.sci_ArraySeq$ofShort__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofShort as $c_sci_ArraySeq$ofShort };
$c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofShort.prototype.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
export { $h_sci_ArraySeq$ofShort as $h_sci_ArraySeq$ofShort };
$h_sci_ArraySeq$ofShort.prototype = $c_sci_ArraySeq$ofShort.prototype;
$c_sci_ArraySeq$ofShort.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofShort__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofShort.prototype.apply__I__S = (function(i) {
  return $n(this.sci_ArraySeq$ofShort__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofShort)) {
    var x2 = $as_sci_ArraySeq$ofShort(that);
    var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofShort__f_unsafeArray;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.sci_ArraySeq$ofShort__f_unsafeArray);
});
$c_sci_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1));
});
$c_sci_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i);
});
function $as_sci_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofShort"));
}
export { $as_sci_ArraySeq$ofShort as $as_sci_ArraySeq$ofShort };
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofShort)));
}
export { $isArrayOf_sci_ArraySeq$ofShort as $isArrayOf_sci_ArraySeq$ofShort };
function $asArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofShort;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofShort as $asArrayOf_sci_ArraySeq$ofShort };
var $d_sci_ArraySeq$ofShort = new $TypeData().initClass($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  sci_ArraySeq$ofShort: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofShort as $d_sci_ArraySeq$ofShort };
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.sci_ArraySeq$ofUnit__f_unsafeArray = null;
  this.sci_ArraySeq$ofUnit__f_unsafeArray = unsafeArray;
}
export { $c_sci_ArraySeq$ofUnit as $c_sci_ArraySeq$ofUnit };
$c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofUnit.prototype.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
export { $h_sci_ArraySeq$ofUnit as $h_sci_ArraySeq$ofUnit };
$h_sci_ArraySeq$ofUnit.prototype = $c_sci_ArraySeq$ofUnit.prototype;
$c_sci_ArraySeq$ofUnit.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofUnit__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofUnit__f_unsafeArray;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofUnit)) {
    var x2 = $as_sci_ArraySeq$ofUnit(that);
    return ($n(this.sci_ArraySeq$ofUnit__f_unsafeArray).u.length === $n($n(x2).sci_ArraySeq$ofUnit__f_unsafeArray).u.length);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.sci_ArraySeq$ofUnit__f_unsafeArray);
});
$c_sci_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(i) {
  $n(this.sci_ArraySeq$ofUnit__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  this.apply$mcVI$sp__I__V(i);
});
$c_sci_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i);
});
function $as_sci_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofUnit"));
}
export { $as_sci_ArraySeq$ofUnit as $as_sci_ArraySeq$ofUnit };
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofUnit)));
}
export { $isArrayOf_sci_ArraySeq$ofUnit as $isArrayOf_sci_ArraySeq$ofUnit };
function $asArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofUnit;", depth));
}
export { $asArrayOf_sci_ArraySeq$ofUnit as $asArrayOf_sci_ArraySeq$ofUnit };
var $d_sci_ArraySeq$ofUnit = new $TypeData().initClass($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  sci_ArraySeq$ofUnit: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sci_ArraySeq$ofUnit as $d_sci_ArraySeq$ofUnit };
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1);
    } else if ($n(xs).isEmpty__Z()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs;
    }
  }
}
export { $p_sci_List__loop$2__I__sci_List__I__I as $p_sci_List__loop$2__I__sci_List__I__I };
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sci_List($n(a).tail__O());
        var temp$b = $as_sci_List($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
export { $p_sci_List__listEq$1__sci_List__sci_List__Z as $p_sci_List__listEq$1__sci_List__sci_List__Z };
/** @constructor */
function $c_sci_List() {
}
export { $c_sci_List as $c_sci_List };
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
export { $h_sci_List as $h_sci_List };
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq";
});
$c_sci_List.prototype.isDefinedAt__I__Z = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$());
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    $n(f).apply__O__O($n(these).head__O());
    these = $as_sci_List($n(these).tail__O());
  }
});
$c_sci_List.prototype.reverse__sci_List = (function() {
  var result = $m_sci_Nil$();
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    var rassoc$6 = $n(these).head__O();
    var this$1 = $n(result);
    result = new $c_sci_$colon$colon(rassoc$6, this$1);
    these = $as_sci_List($n(these).tail__O());
  }
  return result;
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O());
  }
  return len;
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$c_sci_List.prototype.className__T = (function() {
  return "List";
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2);
  } else {
    return $f_sc_Seq__equals__O__Z(this, o);
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.isDefinedAt__O__Z = (function(x) {
  var x$1 = $uI(x);
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1);
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
}
export { $as_sci_List as $as_sci_List };
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)));
}
export { $isArrayOf_sci_List as $isArrayOf_sci_List };
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth));
}
export { $asArrayOf_sci_List as $asArrayOf_sci_List };
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.scm_ArraySeq$ofBoolean__f_array = null;
  this.scm_ArraySeq$ofBoolean__f_array = array;
}
export { $c_scm_ArraySeq$ofBoolean as $c_scm_ArraySeq$ofBoolean };
$c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofBoolean.prototype.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
export { $h_scm_ArraySeq$ofBoolean as $h_scm_ArraySeq$ofBoolean };
$h_scm_ArraySeq$ofBoolean.prototype = $c_scm_ArraySeq$ofBoolean.prototype;
$c_scm_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).u.length;
});
$c_scm_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofBoolean__f_array;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofBoolean)) {
    var x2 = $as_scm_ArraySeq$ofBoolean(that);
    var a = this.scm_ArraySeq$ofBoolean__f_array;
    var b = $n(x2).scm_ArraySeq$ofBoolean__f_array;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.scm_ArraySeq$ofBoolean__f_array);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(index) {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).get(index);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcZI$sp__I__Z(index);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i);
});
$c_scm_ArraySeq$ofBoolean.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofBoolean__f_array;
});
function $as_scm_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofBoolean"));
}
export { $as_scm_ArraySeq$ofBoolean as $as_scm_ArraySeq$ofBoolean };
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofBoolean)));
}
export { $isArrayOf_scm_ArraySeq$ofBoolean as $isArrayOf_scm_ArraySeq$ofBoolean };
function $asArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofBoolean;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofBoolean as $asArrayOf_scm_ArraySeq$ofBoolean };
var $d_scm_ArraySeq$ofBoolean = new $TypeData().initClass($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  scm_ArraySeq$ofBoolean: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofBoolean as $d_scm_ArraySeq$ofBoolean };
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.scm_ArraySeq$ofByte__f_array = null;
  this.scm_ArraySeq$ofByte__f_array = array;
}
export { $c_scm_ArraySeq$ofByte as $c_scm_ArraySeq$ofByte };
$c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofByte.prototype.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
export { $h_scm_ArraySeq$ofByte as $h_scm_ArraySeq$ofByte };
$h_scm_ArraySeq$ofByte.prototype = $c_scm_ArraySeq$ofByte.prototype;
$c_scm_ArraySeq$ofByte.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofByte__f_array).u.length;
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__B = (function(index) {
  return $n(this.scm_ArraySeq$ofByte__f_array).get(index);
});
$c_scm_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofByte__f_array;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofByte)) {
    var x2 = $as_scm_ArraySeq$ofByte(that);
    var a = this.scm_ArraySeq$ofByte__f_array;
    var b = $n(x2).scm_ArraySeq$ofByte__f_array;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.scm_ArraySeq$ofByte__f_array);
});
$c_scm_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1));
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i);
});
$c_scm_ArraySeq$ofByte.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofByte__f_array;
});
function $as_scm_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofByte"));
}
export { $as_scm_ArraySeq$ofByte as $as_scm_ArraySeq$ofByte };
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofByte)));
}
export { $isArrayOf_scm_ArraySeq$ofByte as $isArrayOf_scm_ArraySeq$ofByte };
function $asArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofByte;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofByte as $asArrayOf_scm_ArraySeq$ofByte };
var $d_scm_ArraySeq$ofByte = new $TypeData().initClass($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  scm_ArraySeq$ofByte: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofByte as $d_scm_ArraySeq$ofByte };
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.scm_ArraySeq$ofChar__f_array = null;
  this.scm_ArraySeq$ofChar__f_array = array;
}
export { $c_scm_ArraySeq$ofChar as $c_scm_ArraySeq$ofChar };
$c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofChar.prototype.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
export { $h_scm_ArraySeq$ofChar as $h_scm_ArraySeq$ofChar };
$h_scm_ArraySeq$ofChar.prototype = $c_scm_ArraySeq$ofChar.prototype;
$c_scm_ArraySeq$ofChar.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofChar__f_array).u.length;
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__C = (function(index) {
  return $n(this.scm_ArraySeq$ofChar__f_array).get(index);
});
$c_scm_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofChar__f_array;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofChar)) {
    var x2 = $as_scm_ArraySeq$ofChar(that);
    var a = this.scm_ArraySeq$ofChar__f_array;
    var b = $n(x2).scm_ArraySeq$ofChar__f_array;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array);
});
$c_scm_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  var jsb = $n(sb).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var len = $n(this.scm_ArraySeq$ofChar__f_array).u.length;
  if ((len !== 0)) {
    var this$3 = $n(sep);
    if ((this$3 === "")) {
      $n(jsb).append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array);
    } else {
      $n(jsb);
      $n(jsb).length__I();
      $n(end);
      $n(sep);
      var this$6 = $n(jsb);
      var c = $n(this.scm_ArraySeq$ofChar__f_array).get(0);
      var str = ("" + $cToS(c));
      this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
      var i = 1;
      while ((i < len)) {
        var this$8 = $n(jsb);
        this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$9 = $n(jsb);
        var c$1 = $n(this.scm_ArraySeq$ofChar__f_array).get(i);
        var str$1 = ("" + $cToS(c$1));
        this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  var this$11 = $n(end);
  if ((this$11.length !== 0)) {
    var this$12 = $n(jsb);
    this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return sb;
});
$c_scm_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)));
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i));
});
$c_scm_ArraySeq$ofChar.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofChar__f_array;
});
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"));
}
export { $as_scm_ArraySeq$ofChar as $as_scm_ArraySeq$ofChar };
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)));
}
export { $isArrayOf_scm_ArraySeq$ofChar as $isArrayOf_scm_ArraySeq$ofChar };
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofChar as $asArrayOf_scm_ArraySeq$ofChar };
var $d_scm_ArraySeq$ofChar = new $TypeData().initClass($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  scm_ArraySeq$ofChar: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofChar as $d_scm_ArraySeq$ofChar };
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.scm_ArraySeq$ofDouble__f_array = null;
  this.scm_ArraySeq$ofDouble__f_array = array;
}
export { $c_scm_ArraySeq$ofDouble as $c_scm_ArraySeq$ofDouble };
$c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofDouble.prototype.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
export { $h_scm_ArraySeq$ofDouble as $h_scm_ArraySeq$ofDouble };
$h_scm_ArraySeq$ofDouble.prototype = $c_scm_ArraySeq$ofDouble.prototype;
$c_scm_ArraySeq$ofDouble.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofDouble__f_array).u.length;
});
$c_scm_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofDouble__f_array;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var x2 = $as_scm_ArraySeq$ofDouble(that);
    var a = this.scm_ArraySeq$ofDouble__f_array;
    var b = $n(x2).scm_ArraySeq$ofDouble__f_array;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.scm_ArraySeq$ofDouble__f_array);
});
$c_scm_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(index) {
  return $n(this.scm_ArraySeq$ofDouble__f_array).get(index);
});
$c_scm_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcDI$sp__I__D(index);
});
$c_scm_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i);
});
$c_scm_ArraySeq$ofDouble.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofDouble__f_array;
});
function $as_scm_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofDouble"));
}
export { $as_scm_ArraySeq$ofDouble as $as_scm_ArraySeq$ofDouble };
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofDouble)));
}
export { $isArrayOf_scm_ArraySeq$ofDouble as $isArrayOf_scm_ArraySeq$ofDouble };
function $asArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofDouble;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofDouble as $asArrayOf_scm_ArraySeq$ofDouble };
var $d_scm_ArraySeq$ofDouble = new $TypeData().initClass($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  scm_ArraySeq$ofDouble: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofDouble as $d_scm_ArraySeq$ofDouble };
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.scm_ArraySeq$ofFloat__f_array = null;
  this.scm_ArraySeq$ofFloat__f_array = array;
}
export { $c_scm_ArraySeq$ofFloat as $c_scm_ArraySeq$ofFloat };
$c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofFloat.prototype.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
export { $h_scm_ArraySeq$ofFloat as $h_scm_ArraySeq$ofFloat };
$h_scm_ArraySeq$ofFloat.prototype = $c_scm_ArraySeq$ofFloat.prototype;
$c_scm_ArraySeq$ofFloat.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofFloat__f_array).u.length;
});
$c_scm_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofFloat__f_array;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var x2 = $as_scm_ArraySeq$ofFloat(that);
    var a = this.scm_ArraySeq$ofFloat__f_array;
    var b = $n(x2).scm_ArraySeq$ofFloat__f_array;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.scm_ArraySeq$ofFloat__f_array);
});
$c_scm_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(index) {
  return $n(this.scm_ArraySeq$ofFloat__f_array).get(index);
});
$c_scm_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcFI$sp__I__F(index);
});
$c_scm_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i);
});
$c_scm_ArraySeq$ofFloat.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofFloat__f_array;
});
function $as_scm_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofFloat"));
}
export { $as_scm_ArraySeq$ofFloat as $as_scm_ArraySeq$ofFloat };
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofFloat)));
}
export { $isArrayOf_scm_ArraySeq$ofFloat as $isArrayOf_scm_ArraySeq$ofFloat };
function $asArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofFloat;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofFloat as $asArrayOf_scm_ArraySeq$ofFloat };
var $d_scm_ArraySeq$ofFloat = new $TypeData().initClass($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  scm_ArraySeq$ofFloat: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofFloat as $d_scm_ArraySeq$ofFloat };
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.scm_ArraySeq$ofInt__f_array = null;
  this.scm_ArraySeq$ofInt__f_array = array;
}
export { $c_scm_ArraySeq$ofInt as $c_scm_ArraySeq$ofInt };
$c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofInt.prototype.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
export { $h_scm_ArraySeq$ofInt as $h_scm_ArraySeq$ofInt };
$h_scm_ArraySeq$ofInt.prototype = $c_scm_ArraySeq$ofInt.prototype;
$c_scm_ArraySeq$ofInt.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofInt__f_array).u.length;
});
$c_scm_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofInt__f_array;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofInt)) {
    var x2 = $as_scm_ArraySeq$ofInt(that);
    var a = this.scm_ArraySeq$ofInt__f_array;
    var b = $n(x2).scm_ArraySeq$ofInt__f_array;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.scm_ArraySeq$ofInt__f_array);
});
$c_scm_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(index) {
  return $n(this.scm_ArraySeq$ofInt__f_array).get(index);
});
$c_scm_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcII$sp__I__I(index);
});
$c_scm_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i);
});
$c_scm_ArraySeq$ofInt.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofInt__f_array;
});
function $as_scm_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofInt"));
}
export { $as_scm_ArraySeq$ofInt as $as_scm_ArraySeq$ofInt };
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofInt)));
}
export { $isArrayOf_scm_ArraySeq$ofInt as $isArrayOf_scm_ArraySeq$ofInt };
function $asArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofInt;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofInt as $asArrayOf_scm_ArraySeq$ofInt };
var $d_scm_ArraySeq$ofInt = new $TypeData().initClass($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  scm_ArraySeq$ofInt: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofInt as $d_scm_ArraySeq$ofInt };
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.scm_ArraySeq$ofLong__f_array = null;
  this.scm_ArraySeq$ofLong__f_array = array;
}
export { $c_scm_ArraySeq$ofLong as $c_scm_ArraySeq$ofLong };
$c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofLong.prototype.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
export { $h_scm_ArraySeq$ofLong as $h_scm_ArraySeq$ofLong };
$h_scm_ArraySeq$ofLong.prototype = $c_scm_ArraySeq$ofLong.prototype;
$c_scm_ArraySeq$ofLong.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofLong__f_array).u.length;
});
$c_scm_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofLong__f_array;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofLong)) {
    var x2 = $as_scm_ArraySeq$ofLong(that);
    var a = this.scm_ArraySeq$ofLong__f_array;
    var b = $n(x2).scm_ArraySeq$ofLong__f_array;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.scm_ArraySeq$ofLong__f_array);
});
$c_scm_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(index) {
  return $n(this.scm_ArraySeq$ofLong__f_array).get(index);
});
$c_scm_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcJI$sp__I__J(index);
});
$c_scm_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i);
});
$c_scm_ArraySeq$ofLong.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofLong__f_array;
});
function $as_scm_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofLong"));
}
export { $as_scm_ArraySeq$ofLong as $as_scm_ArraySeq$ofLong };
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofLong)));
}
export { $isArrayOf_scm_ArraySeq$ofLong as $isArrayOf_scm_ArraySeq$ofLong };
function $asArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofLong;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofLong as $asArrayOf_scm_ArraySeq$ofLong };
var $d_scm_ArraySeq$ofLong = new $TypeData().initClass($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  scm_ArraySeq$ofLong: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofLong as $d_scm_ArraySeq$ofLong };
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.scm_ArraySeq$ofRef__f_array = null;
  this.scm_ArraySeq$ofRef__f_array = array;
}
export { $c_scm_ArraySeq$ofRef as $c_scm_ArraySeq$ofRef };
$c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofRef.prototype.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
export { $h_scm_ArraySeq$ofRef as $h_scm_ArraySeq$ofRef };
$h_scm_ArraySeq$ofRef.prototype = $c_scm_ArraySeq$ofRef.prototype;
$c_scm_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofRef__f_array).u.length;
});
$c_scm_ArraySeq$ofRef.prototype.apply__I__O = (function(index) {
  return $n(this.scm_ArraySeq$ofRef__f_array).get(index);
});
$c_scm_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofRef__f_array;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofRef)) {
    var x2 = $as_scm_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.scm_ArraySeq$ofRef__f_array, $n(x2).scm_ArraySeq$ofRef__f_array);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.scm_ArraySeq$ofRef__f_array);
});
$c_scm_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
$c_scm_ArraySeq$ofRef.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofRef__f_array;
});
function $as_scm_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofRef"));
}
export { $as_scm_ArraySeq$ofRef as $as_scm_ArraySeq$ofRef };
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofRef)));
}
export { $isArrayOf_scm_ArraySeq$ofRef as $isArrayOf_scm_ArraySeq$ofRef };
function $asArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofRef;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofRef as $asArrayOf_scm_ArraySeq$ofRef };
var $d_scm_ArraySeq$ofRef = new $TypeData().initClass($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  scm_ArraySeq$ofRef: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofRef as $d_scm_ArraySeq$ofRef };
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.scm_ArraySeq$ofShort__f_array = null;
  this.scm_ArraySeq$ofShort__f_array = array;
}
export { $c_scm_ArraySeq$ofShort as $c_scm_ArraySeq$ofShort };
$c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofShort.prototype.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
export { $h_scm_ArraySeq$ofShort as $h_scm_ArraySeq$ofShort };
$h_scm_ArraySeq$ofShort.prototype = $c_scm_ArraySeq$ofShort.prototype;
$c_scm_ArraySeq$ofShort.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofShort__f_array).u.length;
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__S = (function(index) {
  return $n(this.scm_ArraySeq$ofShort__f_array).get(index);
});
$c_scm_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofShort__f_array;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofShort)) {
    var x2 = $as_scm_ArraySeq$ofShort(that);
    var a = this.scm_ArraySeq$ofShort__f_array;
    var b = $n(x2).scm_ArraySeq$ofShort__f_array;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.scm_ArraySeq$ofShort__f_array);
});
$c_scm_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1));
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i);
});
$c_scm_ArraySeq$ofShort.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofShort__f_array;
});
function $as_scm_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofShort"));
}
export { $as_scm_ArraySeq$ofShort as $as_scm_ArraySeq$ofShort };
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofShort)));
}
export { $isArrayOf_scm_ArraySeq$ofShort as $isArrayOf_scm_ArraySeq$ofShort };
function $asArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofShort;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofShort as $asArrayOf_scm_ArraySeq$ofShort };
var $d_scm_ArraySeq$ofShort = new $TypeData().initClass($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  scm_ArraySeq$ofShort: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofShort as $d_scm_ArraySeq$ofShort };
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.scm_ArraySeq$ofUnit__f_array = null;
  this.scm_ArraySeq$ofUnit__f_array = array;
}
export { $c_scm_ArraySeq$ofUnit as $c_scm_ArraySeq$ofUnit };
$c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofUnit.prototype.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
export { $h_scm_ArraySeq$ofUnit as $h_scm_ArraySeq$ofUnit };
$h_scm_ArraySeq$ofUnit.prototype = $c_scm_ArraySeq$ofUnit.prototype;
$c_scm_ArraySeq$ofUnit.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofUnit__f_array).u.length;
});
$c_scm_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofUnit__f_array;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofUnit)) {
    var x2 = $as_scm_ArraySeq$ofUnit(that);
    return ($n(this.scm_ArraySeq$ofUnit__f_array).u.length === $n($n(x2).scm_ArraySeq$ofUnit__f_array).u.length);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.scm_ArraySeq$ofUnit__f_array);
});
$c_scm_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(index) {
  $n(this.scm_ArraySeq$ofUnit__f_array).get(index);
});
$c_scm_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  this.apply$mcVI$sp__I__V(index);
});
$c_scm_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i);
});
$c_scm_ArraySeq$ofUnit.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofUnit__f_array;
});
function $as_scm_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofUnit"));
}
export { $as_scm_ArraySeq$ofUnit as $as_scm_ArraySeq$ofUnit };
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofUnit)));
}
export { $isArrayOf_scm_ArraySeq$ofUnit as $isArrayOf_scm_ArraySeq$ofUnit };
function $asArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofUnit;", depth));
}
export { $asArrayOf_scm_ArraySeq$ofUnit as $asArrayOf_scm_ArraySeq$ofUnit };
var $d_scm_ArraySeq$ofUnit = new $TypeData().initClass($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  scm_ArraySeq$ofUnit: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_ArraySeq$ofUnit as $d_scm_ArraySeq$ofUnit };
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next;
}
export { $c_sci_$colon$colon as $c_sci_$colon$colon };
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
export { $h_sci_$colon$colon as $h_sci_$colon$colon };
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head;
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::";
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2;
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break;
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break;
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1);
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next;
});
var $d_sci_$colon$colon = new $TypeData().initClass($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
export { $d_sci_$colon$colon as $d_sci_$colon$colon };
/** @constructor */
function $c_sci_Nil$() {
}
export { $c_sci_Nil$ as $c_sci_Nil$ };
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
export { $h_sci_Nil$ as $h_sci_Nil$ };
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil";
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E();
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E();
});
var $d_sci_Nil$ = new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
export { $d_sci_Nil$ as $d_sci_Nil$ };
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
export { $m_sci_Nil$ as $m_sci_Nil$ };
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz;
}
export { $ct_scm_StringBuilder__jl_StringBuilder__ as $ct_scm_StringBuilder__jl_StringBuilder__ };
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
export { $ct_scm_StringBuilder__ as $ct_scm_StringBuilder__ };
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null;
}
export { $c_scm_StringBuilder as $c_scm_StringBuilder };
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
export { $h_scm_StringBuilder as $h_scm_StringBuilder };
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = $n(this.scm_StringBuilder__f_underlying);
  var str = ("" + $cToS(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
  return this;
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0);
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem));
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
var $d_scm_StringBuilder = new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
}));
export { $d_scm_StringBuilder as $d_scm_StringBuilder };
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz;
}
export { $ct_sjs_js_WrappedArray__sjs_js_Array__ as $ct_sjs_js_WrappedArray__sjs_js_Array__ };
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
export { $ct_sjs_js_WrappedArray__ as $ct_sjs_js_WrappedArray__ };
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null;
}
export { $c_sjs_js_WrappedArray as $c_sjs_js_WrappedArray };
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
export { $h_sjs_js_WrappedArray as $h_sjs_js_WrappedArray };
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray";
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this;
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this;
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"));
}
export { $as_sjs_js_WrappedArray as $as_sjs_js_WrappedArray };
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)));
}
export { $isArrayOf_sjs_js_WrappedArray as $isArrayOf_sjs_js_WrappedArray };
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth));
}
export { $asArrayOf_sjs_js_WrappedArray as $asArrayOf_sjs_js_WrappedArray };
var $d_sjs_js_WrappedArray = new $TypeData().initClass($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
}));
export { $d_sjs_js_WrappedArray as $d_sjs_js_WrappedArray };
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
//# sourceMappingURL=internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js.map
