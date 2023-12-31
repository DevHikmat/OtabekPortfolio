/*! For license information please see tsparticles.all.bundle.min.js.LICENSE.txt */
!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var i = e();
    for (var s in i) ("object" == typeof exports ? exports : t)[s] = i[s];
  }
})(this, () =>
  (() => {
    "use strict";
    var t = {
        442: () => {
          !(function () {
            try {
              if ("undefined" == typeof window) return;
              "SVGPathSeg" in window ||
                ((window.SVGPathSeg = function (t, e, i) {
                  (this.pathSegType = t),
                    (this.pathSegTypeAsLetter = e),
                    (this._owningPathSegList = i);
                }),
                (window.SVGPathSeg.prototype.classname = "SVGPathSeg"),
                (window.SVGPathSeg.PATHSEG_UNKNOWN = 0),
                (window.SVGPathSeg.PATHSEG_CLOSEPATH = 1),
                (window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2),
                (window.SVGPathSeg.PATHSEG_MOVETO_REL = 3),
                (window.SVGPathSeg.PATHSEG_LINETO_ABS = 4),
                (window.SVGPathSeg.PATHSEG_LINETO_REL = 5),
                (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6),
                (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7),
                (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8),
                (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9),
                (window.SVGPathSeg.PATHSEG_ARC_ABS = 10),
                (window.SVGPathSeg.PATHSEG_ARC_REL = 11),
                (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12),
                (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13),
                (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14),
                (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15),
                (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16),
                (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17),
                (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18),
                (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19),
                (window.SVGPathSeg.prototype._segmentChanged = function () {
                  this._owningPathSegList &&
                    this._owningPathSegList.segmentChanged(this);
                }),
                (window.SVGPathSegClosePath = function (t) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CLOSEPATH,
                    "z",
                    t
                  );
                }),
                (window.SVGPathSegClosePath.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegClosePath.prototype.toString = function () {
                  return "[object SVGPathSegClosePath]";
                }),
                (window.SVGPathSegClosePath.prototype._asPathString =
                  function () {
                    return this.pathSegTypeAsLetter;
                  }),
                (window.SVGPathSegClosePath.prototype.clone = function () {
                  return new window.SVGPathSegClosePath(void 0);
                }),
                (window.SVGPathSegMovetoAbs = function (t, e, i) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_MOVETO_ABS,
                    "M",
                    t
                  ),
                    (this._x = e),
                    (this._y = i);
                }),
                (window.SVGPathSegMovetoAbs.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegMovetoAbs.prototype.toString = function () {
                  return "[object SVGPathSegMovetoAbs]";
                }),
                (window.SVGPathSegMovetoAbs.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegMovetoAbs.prototype.clone = function () {
                  return new window.SVGPathSegMovetoAbs(
                    void 0,
                    this._x,
                    this._y
                  );
                }),
                Object.defineProperty(
                  window.SVGPathSegMovetoAbs.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegMovetoAbs.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegMovetoRel = function (t, e, i) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_MOVETO_REL,
                    "m",
                    t
                  ),
                    (this._x = e),
                    (this._y = i);
                }),
                (window.SVGPathSegMovetoRel.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegMovetoRel.prototype.toString = function () {
                  return "[object SVGPathSegMovetoRel]";
                }),
                (window.SVGPathSegMovetoRel.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegMovetoRel.prototype.clone = function () {
                  return new window.SVGPathSegMovetoRel(
                    void 0,
                    this._x,
                    this._y
                  );
                }),
                Object.defineProperty(
                  window.SVGPathSegMovetoRel.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegMovetoRel.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegLinetoAbs = function (t, e, i) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_LINETO_ABS,
                    "L",
                    t
                  ),
                    (this._x = e),
                    (this._y = i);
                }),
                (window.SVGPathSegLinetoAbs.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegLinetoAbs.prototype.toString = function () {
                  return "[object SVGPathSegLinetoAbs]";
                }),
                (window.SVGPathSegLinetoAbs.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegLinetoAbs.prototype.clone = function () {
                  return new window.SVGPathSegLinetoAbs(
                    void 0,
                    this._x,
                    this._y
                  );
                }),
                Object.defineProperty(
                  window.SVGPathSegLinetoAbs.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegLinetoAbs.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegLinetoRel = function (t, e, i) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_LINETO_REL,
                    "l",
                    t
                  ),
                    (this._x = e),
                    (this._y = i);
                }),
                (window.SVGPathSegLinetoRel.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegLinetoRel.prototype.toString = function () {
                  return "[object SVGPathSegLinetoRel]";
                }),
                (window.SVGPathSegLinetoRel.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegLinetoRel.prototype.clone = function () {
                  return new window.SVGPathSegLinetoRel(
                    void 0,
                    this._x,
                    this._y
                  );
                }),
                Object.defineProperty(
                  window.SVGPathSegLinetoRel.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegLinetoRel.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegCurvetoCubicAbs = function (
                  t,
                  e,
                  i,
                  s,
                  o,
                  n,
                  a
                ) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,
                    "C",
                    t
                  ),
                    (this._x = e),
                    (this._y = i),
                    (this._x1 = s),
                    (this._y1 = o),
                    (this._x2 = n),
                    (this._y2 = a);
                }),
                (window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegCurvetoCubicAbs.prototype.toString =
                  function () {
                    return "[object SVGPathSegCurvetoCubicAbs]";
                  }),
                (window.SVGPathSegCurvetoCubicAbs.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter}  ${this._x1} ${this._y1} ${this._x2} ${this._y2} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegCurvetoCubicAbs.prototype.clone =
                  function () {
                    return new window.SVGPathSegCurvetoCubicAbs(
                      void 0,
                      this._x,
                      this._y,
                      this._x1,
                      this._y1,
                      this._x2,
                      this._y2
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicAbs.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicAbs.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicAbs.prototype,
                  "x1",
                  {
                    get: function () {
                      return this._x1;
                    },
                    set: function (t) {
                      (this._x1 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicAbs.prototype,
                  "y1",
                  {
                    get: function () {
                      return this._y1;
                    },
                    set: function (t) {
                      (this._y1 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicAbs.prototype,
                  "x2",
                  {
                    get: function () {
                      return this._x2;
                    },
                    set: function (t) {
                      (this._x2 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicAbs.prototype,
                  "y2",
                  {
                    get: function () {
                      return this._y2;
                    },
                    set: function (t) {
                      (this._y2 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegCurvetoCubicRel = function (
                  t,
                  e,
                  i,
                  s,
                  o,
                  n,
                  a
                ) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,
                    "c",
                    t
                  ),
                    (this._x = e),
                    (this._y = i),
                    (this._x1 = s),
                    (this._y1 = o),
                    (this._x2 = n),
                    (this._y2 = a);
                }),
                (window.SVGPathSegCurvetoCubicRel.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegCurvetoCubicRel.prototype.toString =
                  function () {
                    return "[object SVGPathSegCurvetoCubicRel]";
                  }),
                (window.SVGPathSegCurvetoCubicRel.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x1} ${this._y1} ${this._x2} ${this._y2} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegCurvetoCubicRel.prototype.clone =
                  function () {
                    return new window.SVGPathSegCurvetoCubicRel(
                      void 0,
                      this._x,
                      this._y,
                      this._x1,
                      this._y1,
                      this._x2,
                      this._y2
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicRel.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicRel.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicRel.prototype,
                  "x1",
                  {
                    get: function () {
                      return this._x1;
                    },
                    set: function (t) {
                      (this._x1 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicRel.prototype,
                  "y1",
                  {
                    get: function () {
                      return this._y1;
                    },
                    set: function (t) {
                      (this._y1 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicRel.prototype,
                  "x2",
                  {
                    get: function () {
                      return this._x2;
                    },
                    set: function (t) {
                      (this._x2 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicRel.prototype,
                  "y2",
                  {
                    get: function () {
                      return this._y2;
                    },
                    set: function (t) {
                      (this._y2 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegCurvetoQuadraticAbs = function (
                  t,
                  e,
                  i,
                  s,
                  o
                ) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,
                    "Q",
                    t
                  ),
                    (this._x = e),
                    (this._y = i),
                    (this._x1 = s),
                    (this._y1 = o);
                }),
                (window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegCurvetoQuadraticAbs.prototype.toString =
                  function () {
                    return "[object SVGPathSegCurvetoQuadraticAbs]";
                  }),
                (window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x1} ${this._y1} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegCurvetoQuadraticAbs.prototype.clone =
                  function () {
                    return new window.SVGPathSegCurvetoQuadraticAbs(
                      void 0,
                      this._x,
                      this._y,
                      this._x1,
                      this._y1
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticAbs.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticAbs.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticAbs.prototype,
                  "x1",
                  {
                    get: function () {
                      return this._x1;
                    },
                    set: function (t) {
                      (this._x1 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticAbs.prototype,
                  "y1",
                  {
                    get: function () {
                      return this._y1;
                    },
                    set: function (t) {
                      (this._y1 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegCurvetoQuadraticRel = function (
                  t,
                  e,
                  i,
                  s,
                  o
                ) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,
                    "q",
                    t
                  ),
                    (this._x = e),
                    (this._y = i),
                    (this._x1 = s),
                    (this._y1 = o);
                }),
                (window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegCurvetoQuadraticRel.prototype.toString =
                  function () {
                    return "[object SVGPathSegCurvetoQuadraticRel]";
                  }),
                (window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x1} ${this._y1} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegCurvetoQuadraticRel.prototype.clone =
                  function () {
                    return new window.SVGPathSegCurvetoQuadraticRel(
                      void 0,
                      this._x,
                      this._y,
                      this._x1,
                      this._y1
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticRel.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticRel.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticRel.prototype,
                  "x1",
                  {
                    get: function () {
                      return this._x1;
                    },
                    set: function (t) {
                      (this._x1 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticRel.prototype,
                  "y1",
                  {
                    get: function () {
                      return this._y1;
                    },
                    set: function (t) {
                      (this._y1 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegArcAbs = function (t, e, i, s, o, n, a, r) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_ARC_ABS,
                    "A",
                    t
                  ),
                    (this._x = e),
                    (this._y = i),
                    (this._r1 = s),
                    (this._r2 = o),
                    (this._angle = n),
                    (this._largeArcFlag = a),
                    (this._sweepFlag = r);
                }),
                (window.SVGPathSegArcAbs.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegArcAbs.prototype.toString = function () {
                  return "[object SVGPathSegArcAbs]";
                }),
                (window.SVGPathSegArcAbs.prototype._asPathString = function () {
                  return `${this.pathSegTypeAsLetter} ${this._r1} ${this._r2} ${
                    this._angle
                  } ${this._largeArcFlag ? "1" : "0"} ${
                    this._sweepFlag ? "1" : "0"
                  } ${this._x} ${this._y}`;
                }),
                (window.SVGPathSegArcAbs.prototype.clone = function () {
                  return new window.SVGPathSegArcAbs(
                    void 0,
                    this._x,
                    this._y,
                    this._r1,
                    this._r2,
                    this._angle,
                    this._largeArcFlag,
                    this._sweepFlag
                  );
                }),
                Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
                  get: function () {
                    return this._x;
                  },
                  set: function (t) {
                    (this._x = t), this._segmentChanged();
                  },
                  enumerable: !0,
                }),
                Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
                  get: function () {
                    return this._y;
                  },
                  set: function (t) {
                    (this._y = t), this._segmentChanged();
                  },
                  enumerable: !0,
                }),
                Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
                  get: function () {
                    return this._r1;
                  },
                  set: function (t) {
                    (this._r1 = t), this._segmentChanged();
                  },
                  enumerable: !0,
                }),
                Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
                  get: function () {
                    return this._r2;
                  },
                  set: function (t) {
                    (this._r2 = t), this._segmentChanged();
                  },
                  enumerable: !0,
                }),
                Object.defineProperty(
                  window.SVGPathSegArcAbs.prototype,
                  "angle",
                  {
                    get: function () {
                      return this._angle;
                    },
                    set: function (t) {
                      (this._angle = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegArcAbs.prototype,
                  "largeArcFlag",
                  {
                    get: function () {
                      return this._largeArcFlag;
                    },
                    set: function (t) {
                      (this._largeArcFlag = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegArcAbs.prototype,
                  "sweepFlag",
                  {
                    get: function () {
                      return this._sweepFlag;
                    },
                    set: function (t) {
                      (this._sweepFlag = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegArcRel = function (t, e, i, s, o, n, a, r) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_ARC_REL,
                    "a",
                    t
                  ),
                    (this._x = e),
                    (this._y = i),
                    (this._r1 = s),
                    (this._r2 = o),
                    (this._angle = n),
                    (this._largeArcFlag = a),
                    (this._sweepFlag = r);
                }),
                (window.SVGPathSegArcRel.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegArcRel.prototype.toString = function () {
                  return "[object SVGPathSegArcRel]";
                }),
                (window.SVGPathSegArcRel.prototype._asPathString = function () {
                  return `${this.pathSegTypeAsLetter} ${this._r1} ${this._r2} ${
                    this._angle
                  } ${this._largeArcFlag ? "1" : "0"} ${
                    this._sweepFlag ? "1" : "0"
                  } ${this._x} ${this._y}`;
                }),
                (window.SVGPathSegArcRel.prototype.clone = function () {
                  return new window.SVGPathSegArcRel(
                    void 0,
                    this._x,
                    this._y,
                    this._r1,
                    this._r2,
                    this._angle,
                    this._largeArcFlag,
                    this._sweepFlag
                  );
                }),
                Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
                  get: function () {
                    return this._x;
                  },
                  set: function (t) {
                    (this._x = t), this._segmentChanged();
                  },
                  enumerable: !0,
                }),
                Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
                  get: function () {
                    return this._y;
                  },
                  set: function (t) {
                    (this._y = t), this._segmentChanged();
                  },
                  enumerable: !0,
                }),
                Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
                  get: function () {
                    return this._r1;
                  },
                  set: function (t) {
                    (this._r1 = t), this._segmentChanged();
                  },
                  enumerable: !0,
                }),
                Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
                  get: function () {
                    return this._r2;
                  },
                  set: function (t) {
                    (this._r2 = t), this._segmentChanged();
                  },
                  enumerable: !0,
                }),
                Object.defineProperty(
                  window.SVGPathSegArcRel.prototype,
                  "angle",
                  {
                    get: function () {
                      return this._angle;
                    },
                    set: function (t) {
                      (this._angle = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegArcRel.prototype,
                  "largeArcFlag",
                  {
                    get: function () {
                      return this._largeArcFlag;
                    },
                    set: function (t) {
                      (this._largeArcFlag = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegArcRel.prototype,
                  "sweepFlag",
                  {
                    get: function () {
                      return this._sweepFlag;
                    },
                    set: function (t) {
                      (this._sweepFlag = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,
                    "H",
                    t
                  ),
                    (this._x = e);
                }),
                (window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegLinetoHorizontalAbs.prototype.toString =
                  function () {
                    return "[object SVGPathSegLinetoHorizontalAbs]";
                  }),
                (window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x}`;
                  }),
                (window.SVGPathSegLinetoHorizontalAbs.prototype.clone =
                  function () {
                    return new window.SVGPathSegLinetoHorizontalAbs(
                      void 0,
                      this._x
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegLinetoHorizontalAbs.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegLinetoHorizontalRel = function (t, e) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,
                    "h",
                    t
                  ),
                    (this._x = e);
                }),
                (window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegLinetoHorizontalRel.prototype.toString =
                  function () {
                    return "[object SVGPathSegLinetoHorizontalRel]";
                  }),
                (window.SVGPathSegLinetoHorizontalRel.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x}`;
                  }),
                (window.SVGPathSegLinetoHorizontalRel.prototype.clone =
                  function () {
                    return new window.SVGPathSegLinetoHorizontalRel(
                      void 0,
                      this._x
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegLinetoHorizontalRel.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegLinetoVerticalAbs = function (t, e) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,
                    "V",
                    t
                  ),
                    (this._y = e);
                }),
                (window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegLinetoVerticalAbs.prototype.toString =
                  function () {
                    return "[object SVGPathSegLinetoVerticalAbs]";
                  }),
                (window.SVGPathSegLinetoVerticalAbs.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._y}`;
                  }),
                (window.SVGPathSegLinetoVerticalAbs.prototype.clone =
                  function () {
                    return new window.SVGPathSegLinetoVerticalAbs(
                      void 0,
                      this._y
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegLinetoVerticalAbs.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegLinetoVerticalRel = function (t, e) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,
                    "v",
                    t
                  ),
                    (this._y = e);
                }),
                (window.SVGPathSegLinetoVerticalRel.prototype = Object.create(
                  window.SVGPathSeg.prototype
                )),
                (window.SVGPathSegLinetoVerticalRel.prototype.toString =
                  function () {
                    return "[object SVGPathSegLinetoVerticalRel]";
                  }),
                (window.SVGPathSegLinetoVerticalRel.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._y}`;
                  }),
                (window.SVGPathSegLinetoVerticalRel.prototype.clone =
                  function () {
                    return new window.SVGPathSegLinetoVerticalRel(
                      void 0,
                      this._y
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegLinetoVerticalRel.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegCurvetoCubicSmoothAbs = function (
                  t,
                  e,
                  i,
                  s,
                  o
                ) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,
                    "S",
                    t
                  ),
                    (this._x = e),
                    (this._y = i),
                    (this._x2 = s),
                    (this._y2 = o);
                }),
                (window.SVGPathSegCurvetoCubicSmoothAbs.prototype =
                  Object.create(window.SVGPathSeg.prototype)),
                (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString =
                  function () {
                    return "[object SVGPathSegCurvetoCubicSmoothAbs]";
                  }),
                (window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x2} ${this._y2} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone =
                  function () {
                    return new window.SVGPathSegCurvetoCubicSmoothAbs(
                      void 0,
                      this._x,
                      this._y,
                      this._x2,
                      this._y2
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
                  "x2",
                  {
                    get: function () {
                      return this._x2;
                    },
                    set: function (t) {
                      (this._x2 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
                  "y2",
                  {
                    get: function () {
                      return this._y2;
                    },
                    set: function (t) {
                      (this._y2 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegCurvetoCubicSmoothRel = function (
                  t,
                  e,
                  i,
                  s,
                  o
                ) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,
                    "s",
                    t
                  ),
                    (this._x = e),
                    (this._y = i),
                    (this._x2 = s),
                    (this._y2 = o);
                }),
                (window.SVGPathSegCurvetoCubicSmoothRel.prototype =
                  Object.create(window.SVGPathSeg.prototype)),
                (window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString =
                  function () {
                    return "[object SVGPathSegCurvetoCubicSmoothRel]";
                  }),
                (window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x2} ${this._y2} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone =
                  function () {
                    return new window.SVGPathSegCurvetoCubicSmoothRel(
                      void 0,
                      this._x,
                      this._y,
                      this._x2,
                      this._y2
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicSmoothRel.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicSmoothRel.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicSmoothRel.prototype,
                  "x2",
                  {
                    get: function () {
                      return this._x2;
                    },
                    set: function (t) {
                      (this._x2 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoCubicSmoothRel.prototype,
                  "y2",
                  {
                    get: function () {
                      return this._y2;
                    },
                    set: function (t) {
                      (this._y2 = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegCurvetoQuadraticSmoothAbs = function (
                  t,
                  e,
                  i
                ) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,
                    "T",
                    t
                  ),
                    (this._x = e),
                    (this._y = i);
                }),
                (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype =
                  Object.create(window.SVGPathSeg.prototype)),
                (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString =
                  function () {
                    return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
                  }),
                (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone =
                  function () {
                    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                      void 0,
                      this._x,
                      this._y
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegCurvetoQuadraticSmoothRel = function (
                  t,
                  e,
                  i
                ) {
                  window.SVGPathSeg.call(
                    this,
                    window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,
                    "t",
                    t
                  ),
                    (this._x = e),
                    (this._y = i);
                }),
                (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype =
                  Object.create(window.SVGPathSeg.prototype)),
                (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString =
                  function () {
                    return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
                  }),
                (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString =
                  function () {
                    return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
                  }),
                (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone =
                  function () {
                    return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                      void 0,
                      this._x,
                      this._y
                    );
                  }),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
                  "x",
                  {
                    get: function () {
                      return this._x;
                    },
                    set: function (t) {
                      (this._x = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
                  "y",
                  {
                    get: function () {
                      return this._y;
                    },
                    set: function (t) {
                      (this._y = t), this._segmentChanged();
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathElement.prototype.createSVGPathSegClosePath =
                  function () {
                    return new window.SVGPathSegClosePath(void 0);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegMovetoAbs =
                  function (t, e) {
                    return new window.SVGPathSegMovetoAbs(void 0, t, e);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegMovetoRel =
                  function (t, e) {
                    return new window.SVGPathSegMovetoRel(void 0, t, e);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegLinetoAbs =
                  function (t, e) {
                    return new window.SVGPathSegLinetoAbs(void 0, t, e);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegLinetoRel =
                  function (t, e) {
                    return new window.SVGPathSegLinetoRel(void 0, t, e);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs =
                  function (t, e, i, s, o, n) {
                    return new window.SVGPathSegCurvetoCubicAbs(
                      void 0,
                      t,
                      e,
                      i,
                      s,
                      o,
                      n
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel =
                  function (t, e, i, s, o, n) {
                    return new window.SVGPathSegCurvetoCubicRel(
                      void 0,
                      t,
                      e,
                      i,
                      s,
                      o,
                      n
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs =
                  function (t, e, i, s) {
                    return new window.SVGPathSegCurvetoQuadraticAbs(
                      void 0,
                      t,
                      e,
                      i,
                      s
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel =
                  function (t, e, i, s) {
                    return new window.SVGPathSegCurvetoQuadraticRel(
                      void 0,
                      t,
                      e,
                      i,
                      s
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegArcAbs =
                  function (t, e, i, s, o, n, a) {
                    return new window.SVGPathSegArcAbs(
                      void 0,
                      t,
                      e,
                      i,
                      s,
                      o,
                      n,
                      a
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegArcRel =
                  function (t, e, i, s, o, n, a) {
                    return new window.SVGPathSegArcRel(
                      void 0,
                      t,
                      e,
                      i,
                      s,
                      o,
                      n,
                      a
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs =
                  function (t) {
                    return new window.SVGPathSegLinetoHorizontalAbs(void 0, t);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel =
                  function (t) {
                    return new window.SVGPathSegLinetoHorizontalRel(void 0, t);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs =
                  function (t) {
                    return new window.SVGPathSegLinetoVerticalAbs(void 0, t);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel =
                  function (t) {
                    return new window.SVGPathSegLinetoVerticalRel(void 0, t);
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs =
                  function (t, e, i, s) {
                    return new window.SVGPathSegCurvetoCubicSmoothAbs(
                      void 0,
                      t,
                      e,
                      i,
                      s
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel =
                  function (t, e, i, s) {
                    return new window.SVGPathSegCurvetoCubicSmoothRel(
                      void 0,
                      t,
                      e,
                      i,
                      s
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs =
                  function (t, e) {
                    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                      void 0,
                      t,
                      e
                    );
                  }),
                (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel =
                  function (t, e) {
                    return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                      void 0,
                      t,
                      e
                    );
                  }),
                "getPathSegAtLength" in window.SVGPathElement.prototype ||
                  (window.SVGPathElement.prototype.getPathSegAtLength =
                    function (t) {
                      if (void 0 === t || !isFinite(t))
                        throw "Invalid arguments.";
                      const e = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "path"
                      );
                      e.setAttribute("d", this.getAttribute("d"));
                      let i = e.pathSegList.numberOfItems - 1;
                      if (i <= 0) return 0;
                      do {
                        if (
                          (e.pathSegList.removeItem(i), t > e.getTotalLength())
                        )
                          break;
                        i--;
                      } while (i > 0);
                      return i;
                    })),
                ("SVGPathSegList" in window &&
                  "appendItem" in window.SVGPathSegList.prototype) ||
                  ((window.SVGPathSegList = function (t) {
                    (this._pathElement = t),
                      (this._list = this._parsePath(
                        this._pathElement.getAttribute("d")
                      )),
                      (this._mutationObserverConfig = {
                        attributes: !0,
                        attributeFilter: ["d"],
                      }),
                      (this._pathElementMutationObserver = new MutationObserver(
                        this._updateListFromPathMutations.bind(this)
                      )),
                      this._pathElementMutationObserver.observe(
                        this._pathElement,
                        this._mutationObserverConfig
                      );
                  }),
                  (window.SVGPathSegList.prototype.classname =
                    "SVGPathSegList"),
                  Object.defineProperty(
                    window.SVGPathSegList.prototype,
                    "numberOfItems",
                    {
                      get: function () {
                        return (
                          this._checkPathSynchronizedToList(), this._list.length
                        );
                      },
                      enumerable: !0,
                    }
                  ),
                  Object.defineProperty(
                    window.SVGPathSegList.prototype,
                    "length",
                    {
                      get: function () {
                        return (
                          this._checkPathSynchronizedToList(), this._list.length
                        );
                      },
                      enumerable: !0,
                    }
                  ),
                  Object.defineProperty(
                    window.SVGPathElement.prototype,
                    "pathSegList",
                    {
                      get: function () {
                        return (
                          this._pathSegList ||
                            (this._pathSegList = new window.SVGPathSegList(
                              this
                            )),
                          this._pathSegList
                        );
                      },
                      enumerable: !0,
                    }
                  ),
                  Object.defineProperty(
                    window.SVGPathElement.prototype,
                    "normalizedPathSegList",
                    {
                      get: function () {
                        return this.pathSegList;
                      },
                      enumerable: !0,
                    }
                  ),
                  Object.defineProperty(
                    window.SVGPathElement.prototype,
                    "animatedPathSegList",
                    {
                      get: function () {
                        return this.pathSegList;
                      },
                      enumerable: !0,
                    }
                  ),
                  Object.defineProperty(
                    window.SVGPathElement.prototype,
                    "animatedNormalizedPathSegList",
                    {
                      get: function () {
                        return this.pathSegList;
                      },
                      enumerable: !0,
                    }
                  ),
                  (window.SVGPathSegList.prototype._checkPathSynchronizedToList =
                    function () {
                      this._updateListFromPathMutations(
                        this._pathElementMutationObserver.takeRecords()
                      );
                    }),
                  (window.SVGPathSegList.prototype._updateListFromPathMutations =
                    function (t) {
                      if (!this._pathElement) return;
                      let e = !1;
                      t.forEach(function (t) {
                        "d" == t.attributeName && (e = !0);
                      }),
                        e &&
                          (this._list = this._parsePath(
                            this._pathElement.getAttribute("d")
                          ));
                    }),
                  (window.SVGPathSegList.prototype._writeListToPath =
                    function () {
                      this._pathElementMutationObserver.disconnect(),
                        this._pathElement.setAttribute(
                          "d",
                          window.SVGPathSegList._pathSegArrayAsString(
                            this._list
                          )
                        ),
                        this._pathElementMutationObserver.observe(
                          this._pathElement,
                          this._mutationObserverConfig
                        );
                    }),
                  (window.SVGPathSegList.prototype.segmentChanged =
                    function () {
                      this._writeListToPath();
                    }),
                  (window.SVGPathSegList.prototype.clear = function () {
                    this._checkPathSynchronizedToList(),
                      this._list.forEach(function (t) {
                        t._owningPathSegList = null;
                      }),
                      (this._list = []),
                      this._writeListToPath();
                  }),
                  (window.SVGPathSegList.prototype.initialize = function (t) {
                    return (
                      this._checkPathSynchronizedToList(),
                      (this._list = [t]),
                      (t._owningPathSegList = this),
                      this._writeListToPath(),
                      t
                    );
                  }),
                  (window.SVGPathSegList.prototype._checkValidIndex = function (
                    t
                  ) {
                    if (isNaN(t) || t < 0 || t >= this.numberOfItems)
                      throw "INDEX_SIZE_ERR";
                  }),
                  (window.SVGPathSegList.prototype.getItem = function (t) {
                    return (
                      this._checkPathSynchronizedToList(),
                      this._checkValidIndex(t),
                      this._list[t]
                    );
                  }),
                  (window.SVGPathSegList.prototype.insertItemBefore = function (
                    t,
                    e
                  ) {
                    return (
                      this._checkPathSynchronizedToList(),
                      e > this.numberOfItems && (e = this.numberOfItems),
                      t._owningPathSegList && (t = t.clone()),
                      this._list.splice(e, 0, t),
                      (t._owningPathSegList = this),
                      this._writeListToPath(),
                      t
                    );
                  }),
                  (window.SVGPathSegList.prototype.replaceItem = function (
                    t,
                    e
                  ) {
                    return (
                      this._checkPathSynchronizedToList(),
                      t._owningPathSegList && (t = t.clone()),
                      this._checkValidIndex(e),
                      (this._list[e] = t),
                      (t._owningPathSegList = this),
                      this._writeListToPath(),
                      t
                    );
                  }),
                  (window.SVGPathSegList.prototype.removeItem = function (t) {
                    this._checkPathSynchronizedToList(),
                      this._checkValidIndex(t);
                    const e = this._list[t];
                    return this._list.splice(t, 1), this._writeListToPath(), e;
                  }),
                  (window.SVGPathSegList.prototype.appendItem = function (t) {
                    return (
                      this._checkPathSynchronizedToList(),
                      t._owningPathSegList && (t = t.clone()),
                      this._list.push(t),
                      (t._owningPathSegList = this),
                      this._writeListToPath(),
                      t
                    );
                  }),
                  (window.SVGPathSegList._pathSegArrayAsString = function (t) {
                    let e = "",
                      i = !0;
                    return (
                      t.forEach(function (t) {
                        i
                          ? ((i = !1), (e += t._asPathString()))
                          : (e += ` ${t._asPathString()}`);
                      }),
                      e
                    );
                  }),
                  (window.SVGPathSegList.prototype._parsePath = function (t) {
                    if (!t || !t.length) return [];
                    const e = this,
                      i = function () {
                        this.pathSegList = [];
                      };
                    i.prototype.appendSegment = function (t) {
                      this.pathSegList.push(t);
                    };
                    const s = function (t) {
                      (this._string = t),
                        (this._currentIndex = 0),
                        (this._endIndex = this._string.length),
                        (this._previousCommand =
                          window.SVGPathSeg.PATHSEG_UNKNOWN),
                        this._skipOptionalSpaces();
                    };
                    (s.prototype._isCurrentSpace = function () {
                      const t = this._string[this._currentIndex];
                      return (
                        t <= " " &&
                        (" " == t ||
                          "\n" == t ||
                          "\t" == t ||
                          "\r" == t ||
                          "\f" == t)
                      );
                    }),
                      (s.prototype._skipOptionalSpaces = function () {
                        for (
                          ;
                          this._currentIndex < this._endIndex &&
                          this._isCurrentSpace();

                        )
                          this._currentIndex++;
                        return this._currentIndex < this._endIndex;
                      }),
                      (s.prototype._skipOptionalSpacesOrDelimiter =
                        function () {
                          return (
                            !(
                              this._currentIndex < this._endIndex &&
                              !this._isCurrentSpace() &&
                              "," != this._string.charAt(this._currentIndex)
                            ) &&
                            (this._skipOptionalSpaces() &&
                              this._currentIndex < this._endIndex &&
                              "," == this._string.charAt(this._currentIndex) &&
                              (this._currentIndex++,
                              this._skipOptionalSpaces()),
                            this._currentIndex < this._endIndex)
                          );
                        }),
                      (s.prototype.hasMoreData = function () {
                        return this._currentIndex < this._endIndex;
                      }),
                      (s.prototype.peekSegmentType = function () {
                        const t = this._string[this._currentIndex];
                        return this._pathSegTypeFromChar(t);
                      }),
                      (s.prototype._pathSegTypeFromChar = function (t) {
                        switch (t) {
                          case "Z":
                          case "z":
                            return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                          case "M":
                            return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                          case "m":
                            return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                          case "L":
                            return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                          case "l":
                            return window.SVGPathSeg.PATHSEG_LINETO_REL;
                          case "C":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                          case "c":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                          case "Q":
                            return window.SVGPathSeg
                              .PATHSEG_CURVETO_QUADRATIC_ABS;
                          case "q":
                            return window.SVGPathSeg
                              .PATHSEG_CURVETO_QUADRATIC_REL;
                          case "A":
                            return window.SVGPathSeg.PATHSEG_ARC_ABS;
                          case "a":
                            return window.SVGPathSeg.PATHSEG_ARC_REL;
                          case "H":
                            return window.SVGPathSeg
                              .PATHSEG_LINETO_HORIZONTAL_ABS;
                          case "h":
                            return window.SVGPathSeg
                              .PATHSEG_LINETO_HORIZONTAL_REL;
                          case "V":
                            return window.SVGPathSeg
                              .PATHSEG_LINETO_VERTICAL_ABS;
                          case "v":
                            return window.SVGPathSeg
                              .PATHSEG_LINETO_VERTICAL_REL;
                          case "S":
                            return window.SVGPathSeg
                              .PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                          case "s":
                            return window.SVGPathSeg
                              .PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                          case "T":
                            return window.SVGPathSeg
                              .PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                          case "t":
                            return window.SVGPathSeg
                              .PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                          default:
                            return window.SVGPathSeg.PATHSEG_UNKNOWN;
                        }
                      }),
                      (s.prototype._nextCommandHelper = function (t, e) {
                        return ("+" == t ||
                          "-" == t ||
                          "." == t ||
                          (t >= "0" && t <= "9")) &&
                          e != window.SVGPathSeg.PATHSEG_CLOSEPATH
                          ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS
                            ? window.SVGPathSeg.PATHSEG_LINETO_ABS
                            : e == window.SVGPathSeg.PATHSEG_MOVETO_REL
                            ? window.SVGPathSeg.PATHSEG_LINETO_REL
                            : e
                          : window.SVGPathSeg.PATHSEG_UNKNOWN;
                      }),
                      (s.prototype.initialCommandIsMoveTo = function () {
                        if (!this.hasMoreData()) return !0;
                        const t = this.peekSegmentType();
                        return (
                          t == window.SVGPathSeg.PATHSEG_MOVETO_ABS ||
                          t == window.SVGPathSeg.PATHSEG_MOVETO_REL
                        );
                      }),
                      (s.prototype._parseNumber = function () {
                        let t = 0,
                          e = 0,
                          i = 1,
                          s = 0,
                          o = 1,
                          n = 1;
                        const a = this._currentIndex;
                        if (
                          (this._skipOptionalSpaces(),
                          this._currentIndex < this._endIndex &&
                          "+" == this._string.charAt(this._currentIndex)
                            ? this._currentIndex++
                            : this._currentIndex < this._endIndex &&
                              "-" == this._string.charAt(this._currentIndex) &&
                              (this._currentIndex++, (o = -1)),
                          this._currentIndex == this._endIndex ||
                            ((this._string.charAt(this._currentIndex) < "0" ||
                              this._string.charAt(this._currentIndex) > "9") &&
                              "." != this._string.charAt(this._currentIndex)))
                        )
                          return;
                        const r = this._currentIndex;
                        for (
                          ;
                          this._currentIndex < this._endIndex &&
                          this._string.charAt(this._currentIndex) >= "0" &&
                          this._string.charAt(this._currentIndex) <= "9";

                        )
                          this._currentIndex++;
                        if (this._currentIndex != r) {
                          let t = this._currentIndex - 1,
                            i = 1;
                          for (; t >= r; )
                            (e += i * (this._string.charAt(t--) - "0")),
                              (i *= 10);
                        }
                        if (
                          this._currentIndex < this._endIndex &&
                          "." == this._string.charAt(this._currentIndex)
                        ) {
                          if (
                            (this._currentIndex++,
                            this._currentIndex >= this._endIndex ||
                              this._string.charAt(this._currentIndex) < "0" ||
                              this._string.charAt(this._currentIndex) > "9")
                          )
                            return;
                          for (
                            ;
                            this._currentIndex < this._endIndex &&
                            this._string.charAt(this._currentIndex) >= "0" &&
                            this._string.charAt(this._currentIndex) <= "9";

                          )
                            (i *= 10),
                              (s +=
                                (this._string.charAt(this._currentIndex) -
                                  "0") /
                                i),
                              (this._currentIndex += 1);
                        }
                        if (
                          this._currentIndex != a &&
                          this._currentIndex + 1 < this._endIndex &&
                          ("e" == this._string.charAt(this._currentIndex) ||
                            "E" == this._string.charAt(this._currentIndex)) &&
                          "x" != this._string.charAt(this._currentIndex + 1) &&
                          "m" != this._string.charAt(this._currentIndex + 1)
                        ) {
                          if (
                            (this._currentIndex++,
                            "+" == this._string.charAt(this._currentIndex)
                              ? this._currentIndex++
                              : "-" ==
                                  this._string.charAt(this._currentIndex) &&
                                (this._currentIndex++, (n = -1)),
                            this._currentIndex >= this._endIndex ||
                              this._string.charAt(this._currentIndex) < "0" ||
                              this._string.charAt(this._currentIndex) > "9")
                          )
                            return;
                          for (
                            ;
                            this._currentIndex < this._endIndex &&
                            this._string.charAt(this._currentIndex) >= "0" &&
                            this._string.charAt(this._currentIndex) <= "9";

                          )
                            (t *= 10),
                              (t +=
                                this._string.charAt(this._currentIndex) - "0"),
                              this._currentIndex++;
                        }
                        let c = e + s;
                        return (
                          (c *= o),
                          t && (c *= Math.pow(10, n * t)),
                          a != this._currentIndex
                            ? (this._skipOptionalSpacesOrDelimiter(), c)
                            : void 0
                        );
                      }),
                      (s.prototype._parseArcFlag = function () {
                        if (this._currentIndex >= this._endIndex) return;
                        let t = !1;
                        const e = this._string.charAt(this._currentIndex++);
                        if ("0" == e) t = !1;
                        else {
                          if ("1" != e) return;
                          t = !0;
                        }
                        return this._skipOptionalSpacesOrDelimiter(), t;
                      }),
                      (s.prototype.parseSegment = function () {
                        const t = this._string[this._currentIndex];
                        let i,
                          s = this._pathSegTypeFromChar(t);
                        if (s == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                          if (
                            this._previousCommand ==
                            window.SVGPathSeg.PATHSEG_UNKNOWN
                          )
                            return null;
                          if (
                            ((s = this._nextCommandHelper(
                              t,
                              this._previousCommand
                            )),
                            s == window.SVGPathSeg.PATHSEG_UNKNOWN)
                          )
                            return null;
                        } else this._currentIndex++;
                        switch (((this._previousCommand = s), s)) {
                          case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                            return new window.SVGPathSegMovetoRel(
                              e,
                              this._parseNumber(),
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                            return new window.SVGPathSegMovetoAbs(
                              e,
                              this._parseNumber(),
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_LINETO_REL:
                            return new window.SVGPathSegLinetoRel(
                              e,
                              this._parseNumber(),
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                            return new window.SVGPathSegLinetoAbs(
                              e,
                              this._parseNumber(),
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                            return new window.SVGPathSegLinetoHorizontalRel(
                              e,
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                            return new window.SVGPathSegLinetoHorizontalAbs(
                              e,
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                            return new window.SVGPathSegLinetoVerticalRel(
                              e,
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                            return new window.SVGPathSegLinetoVerticalAbs(
                              e,
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                            return (
                              this._skipOptionalSpaces(),
                              new window.SVGPathSegClosePath(e)
                            );
                          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                            return (
                              (i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber(),
                              }),
                              new window.SVGPathSegCurvetoCubicRel(
                                e,
                                i.x,
                                i.y,
                                i.x1,
                                i.y1,
                                i.x2,
                                i.y2
                              )
                            );
                          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                            return (
                              (i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber(),
                              }),
                              new window.SVGPathSegCurvetoCubicAbs(
                                e,
                                i.x,
                                i.y,
                                i.x1,
                                i.y1,
                                i.x2,
                                i.y2
                              )
                            );
                          case window.SVGPathSeg
                            .PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                            return (
                              (i = {
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber(),
                              }),
                              new window.SVGPathSegCurvetoCubicSmoothRel(
                                e,
                                i.x,
                                i.y,
                                i.x2,
                                i.y2
                              )
                            );
                          case window.SVGPathSeg
                            .PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                            return (
                              (i = {
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber(),
                              }),
                              new window.SVGPathSegCurvetoCubicSmoothAbs(
                                e,
                                i.x,
                                i.y,
                                i.x2,
                                i.y2
                              )
                            );
                          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                            return (
                              (i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber(),
                              }),
                              new window.SVGPathSegCurvetoQuadraticRel(
                                e,
                                i.x,
                                i.y,
                                i.x1,
                                i.y1
                              )
                            );
                          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                            return (
                              (i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber(),
                              }),
                              new window.SVGPathSegCurvetoQuadraticAbs(
                                e,
                                i.x,
                                i.y,
                                i.x1,
                                i.y1
                              )
                            );
                          case window.SVGPathSeg
                            .PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                            return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                              e,
                              this._parseNumber(),
                              this._parseNumber()
                            );
                          case window.SVGPathSeg
                            .PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                              e,
                              this._parseNumber(),
                              this._parseNumber()
                            );
                          case window.SVGPathSeg.PATHSEG_ARC_REL:
                            return (
                              (i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                arcAngle: this._parseNumber(),
                                arcLarge: this._parseArcFlag(),
                                arcSweep: this._parseArcFlag(),
                                x: this._parseNumber(),
                                y: this._parseNumber(),
                              }),
                              new window.SVGPathSegArcRel(
                                e,
                                i.x,
                                i.y,
                                i.x1,
                                i.y1,
                                i.arcAngle,
                                i.arcLarge,
                                i.arcSweep
                              )
                            );
                          case window.SVGPathSeg.PATHSEG_ARC_ABS:
                            return (
                              (i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                arcAngle: this._parseNumber(),
                                arcLarge: this._parseArcFlag(),
                                arcSweep: this._parseArcFlag(),
                                x: this._parseNumber(),
                                y: this._parseNumber(),
                              }),
                              new window.SVGPathSegArcAbs(
                                e,
                                i.x,
                                i.y,
                                i.x1,
                                i.y1,
                                i.arcAngle,
                                i.arcLarge,
                                i.arcSweep
                              )
                            );
                          default:
                            throw "Unknown path seg type.";
                        }
                      });
                    const o = new i(),
                      n = new s(t);
                    if (!n.initialCommandIsMoveTo()) return [];
                    for (; n.hasMoreData(); ) {
                      const t = n.parseSegment();
                      if (!t) return [];
                      o.appendSegment(t);
                    }
                    return o.pathSegList;
                  }));
            } catch (t) {
              console.warn(
                "An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles",
                t
              );
            }
          })();
        },
      },
      e = {};
    function i(s) {
      var o = e[s];
      if (void 0 !== o) return o.exports;
      var n = (e[s] = { exports: {} });
      return t[s](n, n.exports, i), n.exports;
    }
    (i.d = (t, e) => {
      for (var s in e)
        i.o(e, s) &&
          !i.o(t, s) &&
          Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
    }),
      (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (i.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var s = {};
    return (
      (() => {
        i.r(s),
          i.d(s, {
            AnimatableColor: () => je,
            AnimationOptions: () => se,
            AnimationValueWithRandom: () => re,
            Background: () => cs,
            BackgroundMask: () => ls,
            BackgroundMaskCover: () => hs,
            Circle: () => Gs,
            ClickEvent: () => us,
            Collisions: () => Ye,
            CollisionsAbsorb: () => Qe,
            CollisionsOverlap: () => We,
            ColorAnimation: () => $e,
            DivEvent: () => ps,
            Events: () => vs,
            ExternalInteractorBase: () => Fi,
            FullScreen: () => ds,
            HoverEvent: () => fs,
            HslAnimation: () => qe,
            HslColorManager: () => $s,
            Interactivity: () => ms,
            ManualParticle: () => bs,
            Modes: () => ws,
            Move: () => ri,
            MoveAngle: () => Je,
            MoveAttract: () => Ke,
            MoveCenter: () => ti,
            MoveGravity: () => ei,
            MovePath: () => ii,
            MoveTrail: () => oi,
            Opacity: () => hi,
            OpacityAnimation: () => ci,
            Options: () => Ps,
            OptionsColor: () => ie,
            OutModes: () => ni,
            Parallax: () => gs,
            ParticlesBounce: () => Xe,
            ParticlesBounceFactor: () => Ze,
            ParticlesDensity: () => li,
            ParticlesInteractorBase: () => js,
            ParticlesNumber: () => di,
            ParticlesOptions: () => Pi,
            Point: () => Vs,
            Range: () => As,
            RangedAnimationOptions: () => oe,
            RangedAnimationValueWithRandom: () => ce,
            Rectangle: () => Ms,
            ResizeEvent: () => ys,
            Responsive: () => _s,
            RgbColorManager: () => qs,
            Shadow: () => ui,
            Shape: () => mi,
            Size: () => _i,
            SizeAnimation: () => bi,
            Spin: () => ai,
            Stroke: () => Si,
            Theme: () => xs,
            ThemeDefault: () => Ss,
            ValueWithRandom: () => ae,
            Vector: () => y,
            Vector3d: () => f,
            ZIndex: () => xi,
            addColorManager: () => fe,
            addEasing: () => et,
            alterHsl: () => ss,
            areBoundsInside: () => M,
            arrayRandomIndex: () => T,
            calcExactPositionOrRandomFromSize: () => _t,
            calcExactPositionOrRandomFromSizeRanged: () => St,
            calcPositionFromSize: () => wt,
            calcPositionOrRandomFromSize: () => mt,
            calcPositionOrRandomFromSizeRanged: () => bt,
            calculateBounds: () => G,
            circleBounce: () => D,
            circleBounceDataFromParticle: () => L,
            clamp: () => nt,
            clear: () => Yi,
            collisionVelocity: () => vt,
            colorMix: () => Me,
            colorToHsl: () => be,
            colorToRgb: () => me,
            deepExtend: () => E,
            divMode: () => z,
            divModeExecute: () => R,
            drawLine: () => Qi,
            drawParticle: () => Ji,
            drawParticlePlugin: () => is,
            drawPlugin: () => es,
            drawShape: () => Ki,
            drawShapeAfterEffect: () => ts,
            drawTriangle: () => Wi,
            errorPrefix: () => g,
            executeOnSingleOrMultiple: () => B,
            findItemFromSingleOrMultiple: () => N,
            generatedAttribute: () => t,
            getDistance: () => gt,
            getDistances: () => pt,
            getEasing: () => it,
            getHslAnimationFromHsl: () => Re,
            getHslFromAnimation: () => ke,
            getLinkColor: () => Ge,
            getLinkRandomColor: () => Ee,
            getLogger: () => m,
            getParticleBaseVelocity: () => yt,
            getParticleDirectionAngle: () => ft,
            getPosition: () => q,
            getRandom: () => ot,
            getRandomRgbColor: () => Te,
            getRangeMax: () => lt,
            getRangeMin: () => ht,
            getRangeValue: () => ct,
            getSize: () => j,
            getStyleFromHsl: () => Ae,
            getStyleFromRgb: () => Ve,
            getValue: () => ut,
            hasMatchMedia: () => S,
            hslToRgb: () => Ce,
            hslaToRgba: () => Oe,
            initParticleNumericAnimationValue: () => U,
            isArray: () => J,
            isBoolean: () => Q,
            isDivModeEnabled: () => k,
            isFunction: () => X,
            isInArray: () => C,
            isNumber: () => Z,
            isObject: () => Y,
            isPointInside: () => A,
            isSsr: () => _,
            isString: () => W,
            itemFromArray: () => V,
            itemFromSingleOrMultiple: () => F,
            loadAll: () => kr,
            loadFont: () => O,
            loadOptions: () => Ci,
            loadParticlesOptions: () => Oi,
            mix: () => at,
            mouseDownEvent: () => e,
            mouseLeaveEvent: () => n,
            mouseMoveEvent: () => r,
            mouseOutEvent: () => a,
            mouseUpEvent: () => o,
            paintBase: () => Zi,
            paintImage: () => Xi,
            parseAlpha: () => xt,
            randomInRange: () => rt,
            rangeColorToHsl: () => _e,
            rangeColorToRgb: () => we,
            rectBounce: () => H,
            resizeEvent: () => u,
            rgbToHsl: () => Se,
            safeMatchMedia: () => x,
            safeMutationObserver: () => P,
            setLogger: () => w,
            setRandom: () => st,
            setRangeValue: () => dt,
            singleDivModeExecute: () => I,
            stringToAlpha: () => xe,
            stringToRgb: () => Pe,
            touchCancelEvent: () => d,
            touchEndEvent: () => h,
            touchMoveEvent: () => l,
            touchStartEvent: () => c,
            tsParticles: () => Qs,
            visibilityChangeEvent: () => p,
          });
        const t = "generated",
          e = "pointerdown",
          o = "pointerup",
          n = "pointerleave",
          a = "pointerout",
          r = "pointermove",
          c = "touchstart",
          h = "touchend",
          l = "touchmove",
          d = "touchcancel",
          u = "resize",
          p = "visibilitychange",
          g = "tsParticles - Error";
        class f {
          constructor(t, e, i) {
            if (
              ((this._updateFromAngle = (t, e) => {
                (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
              }),
              !Z(t) && t)
            ) {
              (this.x = t.x), (this.y = t.y);
              const e = t;
              this.z = e.z ? e.z : 0;
            } else {
              if (void 0 === t || void 0 === e)
                throw new Error(`${g} Vector3d not initialized correctly`);
              (this.x = t), (this.y = e), (this.z = i ?? 0);
            }
          }
          static get origin() {
            return f.create(0, 0, 0);
          }
          get angle() {
            return Math.atan2(this.y, this.x);
          }
          set angle(t) {
            this._updateFromAngle(t, this.length);
          }
          get length() {
            return Math.sqrt(this.getLengthSq());
          }
          set length(t) {
            this._updateFromAngle(this.angle, t);
          }
          static clone(t) {
            return f.create(t.x, t.y, t.z);
          }
          static create(t, e, i) {
            return new f(t, e, i);
          }
          add(t) {
            return f.create(this.x + t.x, this.y + t.y, this.z + t.z);
          }
          addTo(t) {
            (this.x += t.x), (this.y += t.y), (this.z += t.z);
          }
          copy() {
            return f.clone(this);
          }
          distanceTo(t) {
            return this.sub(t).length;
          }
          distanceToSq(t) {
            return this.sub(t).getLengthSq();
          }
          div(t) {
            return f.create(this.x / t, this.y / t, this.z / t);
          }
          divTo(t) {
            (this.x /= t), (this.y /= t), (this.z /= t);
          }
          getLengthSq() {
            return this.x ** 2 + this.y ** 2;
          }
          mult(t) {
            return f.create(this.x * t, this.y * t, this.z * t);
          }
          multTo(t) {
            (this.x *= t), (this.y *= t), (this.z *= t);
          }
          normalize() {
            const t = this.length;
            0 != t && this.multTo(1 / t);
          }
          rotate(t) {
            return f.create(
              this.x * Math.cos(t) - this.y * Math.sin(t),
              this.x * Math.sin(t) + this.y * Math.cos(t),
              0
            );
          }
          setTo(t) {
            (this.x = t.x), (this.y = t.y);
            const e = t;
            this.z = e.z ? e.z : 0;
          }
          sub(t) {
            return f.create(this.x - t.x, this.y - t.y, this.z - t.z);
          }
          subFrom(t) {
            (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
          }
        }
        class y extends f {
          constructor(t, e) {
            super(t, e, 0);
          }
          static get origin() {
            return y.create(0, 0);
          }
          static clone(t) {
            return y.create(t.x, t.y);
          }
          static create(t, e) {
            return new y(t, e);
          }
        }
        const v = {
          debug: console.debug,
          error: console.error,
          info: console.info,
          log: console.log,
          verbose: console.log,
          warning: console.warn,
        };
        function w(t) {
          (v.debug = t.debug || v.debug),
            (v.error = t.error || v.error),
            (v.info = t.info || v.info),
            (v.log = t.log || v.log),
            (v.verbose = t.verbose || v.verbose),
            (v.warning = t.warning || v.warning);
        }
        function m() {
          return v;
        }
        function b(t) {
          const e = { bounced: !1 },
            {
              pSide: i,
              pOtherSide: s,
              rectSide: o,
              rectOtherSide: n,
              velocity: a,
              factor: r,
            } = t;
          return (
            s.min < n.min ||
              s.min > n.max ||
              s.max < n.min ||
              s.max > n.max ||
              (((i.max >= o.min && i.max <= (o.max + o.min) / 2 && a > 0) ||
                (i.min <= o.max && i.min > (o.max + o.min) / 2 && a < 0)) &&
                ((e.velocity = a * -r), (e.bounced = !0))),
            e
          );
        }
        function _() {
          return (
            "undefined" == typeof window ||
            !window ||
            void 0 === window.document ||
            !window.document
          );
        }
        function S() {
          return !_() && "undefined" != typeof matchMedia;
        }
        function x(t) {
          if (S()) return matchMedia(t);
        }
        function P(t) {
          if (!_() && "undefined" != typeof MutationObserver)
            return new MutationObserver(t);
        }
        function C(t, e) {
          return t === e || (J(e) && e.indexOf(t) > -1);
        }
        async function O(t, e) {
          try {
            await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
          } catch {}
        }
        function T(t) {
          return Math.floor(ot() * t.length);
        }
        function V(t, e, i = !0) {
          return t[void 0 !== e && i ? e % t.length : T(t)];
        }
        function A(t, e, i, s, o) {
          return M(G(t, s ?? 0), e, i, o);
        }
        function M(t, e, i, s) {
          let o = !0;
          return (
            (s && "bottom" !== s) || (o = t.top < e.height + i.x),
            !o || (s && "left" !== s) || (o = t.right > i.x),
            !o || (s && "right" !== s) || (o = t.left < e.width + i.y),
            !o || (s && "top" !== s) || (o = t.bottom > i.y),
            o
          );
        }
        function G(t, e) {
          return {
            bottom: t.y + e,
            left: t.x - e,
            right: t.x + e,
            top: t.y - e,
          };
        }
        function E(t, ...e) {
          for (const i of e) {
            if (null == i) continue;
            if (!Y(i)) {
              t = i;
              continue;
            }
            const e = Array.isArray(i);
            !e || (!Y(t) && t && Array.isArray(t))
              ? e || (!Y(t) && t && !Array.isArray(t)) || (t = {})
              : (t = []);
            for (const e in i) {
              if ("__proto__" === e) continue;
              const s = i[e],
                o = t;
              o[e] =
                Y(s) && Array.isArray(s)
                  ? s.map((t) => E(o[e], t))
                  : E(o[e], s);
            }
          }
          return t;
        }
        function k(t, e) {
          return !!N(e, (e) => e.enable && C(t, e.mode));
        }
        function R(t, e, i) {
          B(e, (e) => {
            const s = e.mode;
            e.enable && C(t, s) && I(e, i);
          });
        }
        function I(t, e) {
          B(t.selectors, (i) => {
            e(i, t);
          });
        }
        function z(t, e) {
          if (e && t)
            return N(t, (t) =>
              (function (t, e) {
                const i = B(e, (e) => t.matches(e));
                return J(i) ? i.some((t) => t) : i;
              })(e, t.selectors)
            );
        }
        function L(t) {
          return {
            position: t.getPosition(),
            radius: t.getRadius(),
            mass: t.getMass(),
            velocity: t.velocity,
            factor: y.create(
              ut(t.options.bounce.horizontal),
              ut(t.options.bounce.vertical)
            ),
          };
        }
        function D(t, e) {
          const { x: i, y: s } = t.velocity.sub(e.velocity),
            [o, n] = [t.position, e.position],
            { dx: a, dy: r } = pt(n, o);
          if (i * a + s * r < 0) return;
          const c = -Math.atan2(r, a),
            h = t.mass,
            l = e.mass,
            d = t.velocity.rotate(c),
            u = e.velocity.rotate(c),
            p = vt(d, u, h, l),
            g = vt(u, d, h, l),
            f = p.rotate(-c),
            y = g.rotate(-c);
          (t.velocity.x = f.x * t.factor.x),
            (t.velocity.y = f.y * t.factor.y),
            (e.velocity.x = y.x * e.factor.x),
            (e.velocity.y = y.y * e.factor.y);
        }
        function H(t, e) {
          const i = G(t.getPosition(), t.getRadius()),
            s = b({
              pSide: { min: i.left, max: i.right },
              pOtherSide: { min: i.top, max: i.bottom },
              rectSide: { min: e.left, max: e.right },
              rectOtherSide: { min: e.top, max: e.bottom },
              velocity: t.velocity.x,
              factor: ut(t.options.bounce.horizontal),
            });
          s.bounced &&
            (void 0 !== s.velocity && (t.velocity.x = s.velocity),
            void 0 !== s.position && (t.position.x = s.position));
          const o = b({
            pSide: { min: i.top, max: i.bottom },
            pOtherSide: { min: i.left, max: i.right },
            rectSide: { min: e.top, max: e.bottom },
            rectOtherSide: { min: e.left, max: e.right },
            velocity: t.velocity.y,
            factor: ut(t.options.bounce.vertical),
          });
          o.bounced &&
            (void 0 !== o.velocity && (t.velocity.y = o.velocity),
            void 0 !== o.position && (t.position.y = o.position));
        }
        function B(t, e) {
          return J(t) ? t.map((t, i) => e(t, i)) : e(t, 0);
        }
        function F(t, e, i) {
          return J(t) ? V(t, e, i) : t;
        }
        function N(t, e) {
          return J(t) ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0;
        }
        function U(t, e) {
          const i = t.value,
            s = t.animation,
            o = {
              delayTime: 1e3 * ct(s.delay),
              enable: s.enable,
              value: ct(t.value) * e,
              max: lt(i) * e,
              min: ht(i) * e,
              loops: 0,
              maxLoops: ct(s.count),
              time: 0,
            };
          if (s.enable) {
            switch (((o.decay = 1 - ct(s.decay)), s.mode)) {
              case "increase":
                o.status = "increasing";
                break;
              case "decrease":
                o.status = "decreasing";
                break;
              case "random":
                o.status = ot() >= 0.5 ? "increasing" : "decreasing";
            }
            const t = "auto" === s.mode;
            switch (s.startValue) {
              case "min":
                (o.value = o.min), t && (o.status = "increasing");
                break;
              case "max":
                (o.value = o.max), t && (o.status = "decreasing");
                break;
              default:
                (o.value = rt(o)),
                  t && (o.status = ot() >= 0.5 ? "increasing" : "decreasing");
            }
          }
          return (o.initialValue = o.value), o;
        }
        function $(t, e) {
          if (!("percent" === t.mode)) {
            const { mode: e, ...i } = t;
            return i;
          }
          return "x" in t
            ? { x: (t.x / 100) * e.width, y: (t.y / 100) * e.height }
            : {
                width: (t.width / 100) * e.width,
                height: (t.height / 100) * e.height,
              };
        }
        function q(t, e) {
          return $(t, e);
        }
        function j(t, e) {
          return $(t, e);
        }
        function Q(t) {
          return "boolean" == typeof t;
        }
        function W(t) {
          return "string" == typeof t;
        }
        function Z(t) {
          return "number" == typeof t;
        }
        function X(t) {
          return "function" == typeof t;
        }
        function Y(t) {
          return "object" == typeof t && null !== t;
        }
        function J(t) {
          return Array.isArray(t);
        }
        let K = Math.random;
        const tt = new Map();
        function et(t, e) {
          tt.get(t) || tt.set(t, e);
        }
        function it(t) {
          return tt.get(t) || ((t) => t);
        }
        function st(t = Math.random) {
          K = t;
        }
        function ot() {
          return nt(K(), 0, 1 - 1e-16);
        }
        function nt(t, e, i) {
          return Math.min(Math.max(t, e), i);
        }
        function at(t, e, i, s) {
          return Math.floor((t * i + e * s) / (i + s));
        }
        function rt(t) {
          const e = lt(t);
          let i = ht(t);
          return e === i && (i = 0), ot() * (e - i) + i;
        }
        function ct(t) {
          return Z(t) ? t : rt(t);
        }
        function ht(t) {
          return Z(t) ? t : t.min;
        }
        function lt(t) {
          return Z(t) ? t : t.max;
        }
        function dt(t, e) {
          if (t === e || (void 0 === e && Z(t))) return t;
          const i = ht(t),
            s = lt(t);
          return void 0 !== e
            ? { min: Math.min(i, e), max: Math.max(s, e) }
            : dt(i, s);
        }
        function ut(t) {
          const e = t.random,
            { enable: i, minimumValue: s } = Q(e)
              ? { enable: e, minimumValue: 0 }
              : e;
          return ct(i ? dt(t.value, s) : t.value);
        }
        function pt(t, e) {
          const i = t.x - e.x,
            s = t.y - e.y;
          return { dx: i, dy: s, distance: Math.sqrt(i ** 2 + s ** 2) };
        }
        function gt(t, e) {
          return pt(t, e).distance;
        }
        function ft(t, e, i) {
          if (Z(t)) return (t * Math.PI) / 180;
          switch (t) {
            case "top":
              return -Math.PI / 2;
            case "top-right":
              return -Math.PI / 4;
            case "right":
              return 0;
            case "bottom-right":
              return Math.PI / 4;
            case "bottom":
              return Math.PI / 2;
            case "bottom-left":
              return (3 * Math.PI) / 4;
            case "left":
              return Math.PI;
            case "top-left":
              return (-3 * Math.PI) / 4;
            case "inside":
              return Math.atan2(i.y - e.y, i.x - e.x);
            case "outside":
              return Math.atan2(e.y - i.y, e.x - i.x);
            default:
              return ot() * Math.PI * 2;
          }
        }
        function yt(t) {
          const e = y.origin;
          return (e.length = 1), (e.angle = t), e;
        }
        function vt(t, e, i, s) {
          return y.create(
            (t.x * (i - s)) / (i + s) + (2 * e.x * s) / (i + s),
            t.y
          );
        }
        function wt(t) {
          return t.position &&
            void 0 !== t.position.x &&
            void 0 !== t.position.y
            ? {
                x: (t.position.x * t.size.width) / 100,
                y: (t.position.y * t.size.height) / 100,
              }
            : void 0;
        }
        function mt(t) {
          return {
            x: ((t.position?.x ?? 100 * ot()) * t.size.width) / 100,
            y: ((t.position?.y ?? 100 * ot()) * t.size.height) / 100,
          };
        }
        function bt(t) {
          const e = {
            x: void 0 !== t.position?.x ? ct(t.position.x) : void 0,
            y: void 0 !== t.position?.y ? ct(t.position.y) : void 0,
          };
          return mt({ size: t.size, position: e });
        }
        function _t(t) {
          return {
            x: t.position?.x ?? ot() * t.size.width,
            y: t.position?.y ?? ot() * t.size.height,
          };
        }
        function St(t) {
          const e = {
            x: void 0 !== t.position?.x ? ct(t.position.x) : void 0,
            y: void 0 !== t.position?.y ? ct(t.position.y) : void 0,
          };
          return _t({ size: t.size, position: e });
        }
        function xt(t) {
          return t
            ? t.endsWith("%")
              ? parseFloat(t) / 100
              : parseFloat(t)
            : 1;
        }
        class Pt {
          draw(t, e, i) {
            const s = 2 * i,
              o = s * (e.heightFactor ?? 0.5),
              n = s * (e.headWidthFactor ?? 0.2),
              a = o * (e.bodyHeightFactor ?? 0.5);
            t.moveTo(-s / 2, 0),
              t.lineTo(-s / 2, -a / 2),
              t.lineTo(s / 2 - n, -a / 2),
              t.lineTo(s / 2 - n, -o / 2),
              t.lineTo(s / 2 + n, 0),
              t.lineTo(s / 2 - n, o / 2),
              t.lineTo(s / 2 - n, a / 2),
              t.lineTo(-s / 2, a / 2),
              t.lineTo(-s / 2, 0);
          }
          particleInit(t, e) {
            const i = e.shapeData;
            (e.heightFactor = ct(i?.heightFactor ?? 0.5)),
              (e.headWidthFactor = ct(i?.headWidthFactor ?? 0.2)),
              (e.bodyHeightFactor = ct(i?.bodyHeightFactor ?? 0.5));
          }
        }
        class Ct {
          afterEffect(t, e, i) {
            t.beginPath(),
              t.arc(i / 3, -i / 3, i / 3, 0, 2 * Math.PI, !1),
              t.closePath(),
              (t.fillStyle = "#fff9"),
              t.fill();
          }
          draw(t, e, i) {
            t.arc(0, 0, i, 0, 2 * Math.PI, !1);
          }
        }
        class Ot {
          constructor() {
            (this.color = !0), (this.opacity = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.color && (this.color = t.color),
              void 0 !== t.opacity && (this.opacity = t.opacity));
          }
        }
        class Tt {
          constructor() {
            (this.filter = (t) => t.a > 0), (this.offset = 4);
          }
          load(t) {
            if (t) {
              if (void 0 !== t.filter)
                if (W(t.filter)) {
                  if (Object.hasOwn(window, t.filter)) {
                    const e = window[t.filter];
                    X(e) && (this.filter = e);
                  }
                } else this.filter = t.filter;
              void 0 !== t.offset && (this.offset = t.offset);
            }
          }
        }
        class Vt {
          constructor() {
            this.src = "";
          }
          load(t) {
            t && void 0 !== t.src && (this.src = t.src);
          }
        }
        class At {
          constructor() {
            (this.family = "sans-serif"), (this.size = 100);
          }
          load(t) {
            t &&
              (void 0 !== t.family && (this.family = t.family),
              void 0 !== t.size && (this.size = t.size),
              void 0 !== t.style && (this.style = t.style),
              void 0 !== t.variant && (this.variant = t.variant),
              void 0 !== t.weight && (this.weight = t.weight));
          }
        }
        class Mt {
          constructor() {
            (this.separator = "\n"), (this.spacing = 10);
          }
          load(t) {
            t &&
              (void 0 !== t.separator && (this.separator = t.separator),
              void 0 !== t.spacing && (this.spacing = t.spacing));
          }
        }
        class Gt {
          constructor() {
            (this.color = "#000000"),
              (this.font = new At()),
              (this.lines = new Mt()),
              (this.text = "");
          }
          load(t) {
            t &&
              (void 0 !== t.color && (this.color = t.color),
              this.font.load(t.font),
              this.lines.load(t.lines),
              void 0 !== t.text && (this.text = t.text));
          }
        }
        class Et {
          constructor() {
            (this.enable = !1),
              (this.override = new Ot()),
              (this.pixels = new Tt()),
              (this.position = { x: 50, y: 50 }),
              (this.scale = 1);
          }
          load(t) {
            t &&
              (void 0 !== t.element &&
                t.element instanceof HTMLCanvasElement &&
                (this.element = t.element),
              void 0 !== t.enable && (this.enable = t.enable),
              t.image &&
                (this.image || (this.image = new Vt()),
                this.image.load(t.image)),
              this.pixels.load(t.pixels),
              t.position &&
                (this.position = {
                  x: t.position.x ?? this.position.x,
                  y: t.position.y ?? this.position.y,
                }),
              this.override.load(t.override),
              void 0 !== t.scale && (this.scale = t.scale),
              void 0 !== t.selector && (this.selector = t.selector),
              t.text &&
                (this.text || (this.text = new Gt()), this.text.load(t.text)));
          }
        }
        function kt(t, e, i, s, o, n) {
          const { height: a, width: r } = e,
            c = a * r,
            h = (function (t) {
              for (let e = t.length - 1; e >= 0; e--) {
                const i = Math.floor(ot() * e);
                [t[e], t[i]] = [t[i], t[e]];
              }
              return t;
            })(It(c)),
            l = Math.min(c, t.actualOptions.particles.number.value),
            d = t.canvas.size;
          let u = 0;
          const p = (d.width * i.x) / 100 - (r * s) / 2,
            g = (d.height * i.y) / 100 - (a * s) / 2;
          for (; u < l && h.length; ) {
            const i = h.pop() || 0,
              a = { x: i % r, y: Math.floor(i / r) },
              c = e.pixels[a.y][a.x];
            if (n(c)) {
              const e = { x: a.x * s + p, y: a.y * s + g },
                i = {};
              o.color && (i.color = { value: c }),
                o.opacity && (i.opacity = { value: c.a }),
                t.particles.addParticle(e, i),
                u++;
            }
          }
        }
        function Rt(t, e, i, s = !0) {
          const o = t.getImageData(0, 0, e.width, e.height).data;
          s && t.clearRect(0, 0, e.width, e.height);
          const n = [];
          for (let t = 0; t < o.length; t += i) {
            const s = t / i,
              a = { x: s % e.width, y: Math.floor(s / e.width) };
            n[a.y] || (n[a.y] = []),
              (n[a.y][a.x] = {
                r: o[t],
                g: o[t + 1],
                b: o[t + 2],
                a: o[t + 3] / 255,
              });
          }
          return {
            pixels: n,
            width: Math.min(...n.map((t) => t.length)),
            height: n.length,
          };
        }
        const It = (t) => [...Array(t).keys()];
        class zt {
          constructor(t, e) {
            (this._container = t), (this._engine = e);
          }
          async init() {
            const t = this._container,
              e = t.actualOptions.canvasMask;
            if (!e?.enable) return;
            let i = { pixels: [], height: 0, width: 0 };
            const s = e.pixels.offset;
            if (e.image) {
              const t = e.image.src;
              if (!t) return;
              i = await (function (t, e) {
                const i = new Image();
                i.crossOrigin = "Anonymous";
                const s = new Promise((t, s) => {
                  (i.onerror = s),
                    (i.onload = () => {
                      const o = document.createElement("canvas");
                      (o.width = i.width), (o.height = i.height);
                      const n = o.getContext("2d");
                      if (!n)
                        return s(
                          new Error(`${g} Could not get canvas context`)
                        );
                      n.drawImage(
                        i,
                        0,
                        0,
                        i.width,
                        i.height,
                        0,
                        0,
                        o.width,
                        o.height
                      ),
                        t(Rt(n, o, e));
                    });
                });
                return (i.src = t), s;
              })(t, s);
            } else if (e.text) {
              const t = (function (t, e) {
                const i = document.createElement("canvas"),
                  s = i.getContext("2d"),
                  { font: o, text: n, lines: a, color: r } = t;
                if (!n || !s) return;
                const c = n.split(a.separator),
                  h = Z(o.size) ? `${o.size}px` : o.size,
                  l = [];
                let d = 0,
                  u = 0;
                for (const t of c) {
                  s.font = `${o.style || ""} ${o.variant || ""} ${
                    o.weight || ""
                  } ${h} ${o.family}`;
                  const e = s.measureText(t),
                    i = {
                      measure: e,
                      text: t,
                      height:
                        e.actualBoundingBoxAscent + e.actualBoundingBoxDescent,
                      width: e.width,
                    };
                  (d = Math.max(d || 0, i.width)),
                    (u += i.height + a.spacing),
                    l.push(i);
                }
                (i.width = d), (i.height = u);
                let p = 0;
                for (const t of l)
                  (s.font = `${o.style || ""} ${o.variant || ""} ${
                    o.weight || ""
                  } ${h} ${o.family}`),
                    (s.fillStyle = r),
                    s.fillText(
                      t.text,
                      0,
                      p + t.measure.actualBoundingBoxAscent
                    ),
                    (p += t.height + a.spacing);
                return Rt(s, i, e);
              })(e.text, s);
              if (!t) return;
              i = t;
            } else if (e.element || e.selector) {
              const t =
                e.element || (e.selector && document.querySelector(e.selector));
              if (!t) return;
              const o = t.getContext("2d");
              if (!o) return;
              i = Rt(o, t, s);
            }
            kt(t, i, e.position, e.scale, e.override, e.pixels.filter);
          }
        }
        class Lt {
          constructor(t) {
            (this.id = "canvasMask"), (this._engine = t);
          }
          getPlugin(t) {
            return new zt(t, this._engine);
          }
          loadOptions(t, e) {
            if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
            let i = t.canvasMask;
            void 0 === i?.load && (t.canvasMask = i = new Et()),
              i.load(e?.canvasMask);
          }
          needsPlugin(t) {
            return t?.canvasMask?.enable ?? !1;
          }
        }
        function Dt(t, e, i) {
          if (i.segments.length && i.segments[0].values.length) {
            t.moveTo(
              i.segments[0].values[0].x * e,
              i.segments[0].values[0].y * e
            );
            for (let s = 0; s < i.segments.length; s++) {
              const o = i.segments[s];
              t.bezierCurveTo(
                o.values[1].x * e,
                o.values[1].y * e,
                o.values[2].x * e,
                o.values[2].y * e,
                o.values[3].x * e,
                o.values[3].y * e
              );
            }
            for (let s = i.segments.length - 1; s >= 0; s--) {
              const o = i.segments[s];
              t.bezierCurveTo(
                -o.values[2].x * e,
                o.values[2].y * e,
                -o.values[1].x * e,
                o.values[1].y * e,
                -o.values[0].x * e,
                o.values[0].y * e
              );
            }
          }
        }
        const Ht = 0.5,
          Bt = {
            heart: {
              segments: [
                {
                  values: [
                    { x: 0, y: Ht },
                    { x: 0, y: Ht },
                    { x: Ht, y: 0 },
                    { x: Ht, y: -Ht / 2 },
                  ],
                },
                {
                  values: [
                    { x: Ht, y: -Ht / 2 },
                    { x: Ht, y: -Ht / 2 },
                    { x: Ht, y: -Ht },
                    { x: Ht / 2, y: -Ht },
                  ],
                },
                {
                  values: [
                    { x: Ht / 2, y: -Ht },
                    { x: Ht / 2, y: -Ht },
                    { x: 0, y: -Ht },
                    { x: 0, y: -Ht / 2 },
                  ],
                },
              ],
            },
            diamond: {
              segments: [
                {
                  values: [
                    { x: 0, y: Ht },
                    { x: 0, y: Ht },
                    { x: 0.375, y: 0 },
                    { x: 0.375, y: 0 },
                  ],
                },
                {
                  values: [
                    { x: 0.375, y: 0 },
                    { x: 0.375, y: 0 },
                    { x: 0, y: -Ht },
                    { x: 0, y: -Ht },
                  ],
                },
              ],
            },
            club: {
              segments: [
                {
                  values: [
                    { x: 0, y: -Ht },
                    { x: 0, y: -Ht },
                    { x: Ht / 2, y: -Ht },
                    { x: Ht / 2, y: -Ht / 2 },
                  ],
                },
                {
                  values: [
                    { x: Ht / 2, y: -Ht / 2 },
                    { x: Ht / 2, y: -Ht / 2 },
                    { x: Ht, y: -Ht / 2 },
                    { x: Ht, y: 0 },
                  ],
                },
                {
                  values: [
                    { x: Ht, y: 0 },
                    { x: Ht, y: 0 },
                    { x: Ht, y: Ht / 2 },
                    { x: Ht / 2, y: Ht / 2 },
                  ],
                },
                {
                  values: [
                    { x: Ht / 2, y: Ht / 2 },
                    { x: Ht / 2, y: Ht / 2 },
                    { x: Ht / 8, y: Ht / 2 },
                    { x: Ht / 8, y: Ht / 8 },
                  ],
                },
                {
                  values: [
                    { x: Ht / 8, y: Ht / 8 },
                    { x: Ht / 8, y: Ht / 2 },
                    { x: Ht / 2, y: Ht },
                    { x: Ht / 2, y: Ht },
                  ],
                },
                {
                  values: [
                    { x: Ht / 2, y: Ht },
                    { x: Ht / 2, y: Ht },
                    { x: 0, y: Ht },
                    { x: 0, y: Ht },
                  ],
                },
              ],
            },
            spade: {
              segments: [
                {
                  values: [
                    { x: 0, y: -Ht },
                    { x: 0, y: -Ht },
                    { x: Ht, y: -Ht / 2 },
                    { x: Ht, y: 0 },
                  ],
                },
                {
                  values: [
                    { x: Ht, y: 0 },
                    { x: Ht, y: 0 },
                    { x: Ht, y: Ht / 2 },
                    { x: Ht / 2, y: Ht / 2 },
                  ],
                },
                {
                  values: [
                    { x: Ht / 2, y: Ht / 2 },
                    { x: Ht / 2, y: Ht / 2 },
                    { x: Ht / 8, y: Ht / 2 },
                    { x: Ht / 8, y: Ht / 8 },
                  ],
                },
                {
                  values: [
                    { x: Ht / 8, y: Ht / 8 },
                    { x: Ht / 8, y: Ht / 2 },
                    { x: Ht / 2, y: Ht },
                    { x: Ht / 2, y: Ht },
                  ],
                },
                {
                  values: [
                    { x: Ht / 2, y: Ht },
                    { x: Ht / 2, y: Ht },
                    { x: 0, y: Ht },
                    { x: 0, y: Ht },
                  ],
                },
              ],
            },
          };
        class Ft {
          draw(t, e, i) {
            Dt(t, i, Bt.spade);
          }
        }
        class Nt {
          draw(t, e, i) {
            Dt(t, i, Bt.heart);
          }
        }
        class Ut {
          draw(t, e, i) {
            Dt(t, i, Bt.diamond);
          }
        }
        class $t {
          draw(t, e, i) {
            Dt(t, i, Bt.club);
          }
        }
        class qt {
          afterEffect(t, e, i) {
            if (
              void 0 === e.cogHoleRadius ||
              void 0 === e.cogInnerRadius ||
              void 0 === e.cogInnerTaper ||
              void 0 === e.cogNotches ||
              void 0 === e.cogOuterTaper
            )
              return;
            const s = 2 * Math.PI,
              o = (i * e.cogHoleRadius) / 100;
            (t.globalCompositeOperation = "destination-out"),
              t.beginPath(),
              t.moveTo(o, 0),
              t.arc(0, 0, o, 0, s),
              t.closePath(),
              t.fill(),
              (t.globalCompositeOperation = "source-over");
          }
          draw(t, e, i) {
            if (
              void 0 === e.cogHoleRadius ||
              void 0 === e.cogInnerRadius ||
              void 0 === e.cogInnerTaper ||
              void 0 === e.cogNotches ||
              void 0 === e.cogOuterTaper
            )
              return;
            const s = 2 * Math.PI,
              o = s / (2 * e.cogNotches),
              n = o * e.cogInnerTaper * 0.005,
              a = o * e.cogOuterTaper * 0.005,
              r = (i * e.cogInnerRadius) / 100;
            let c = o,
              h = !1;
            for (t.moveTo(i * Math.cos(a), i * Math.sin(a)); c <= s; c += o)
              h
                ? (t.lineTo(r * Math.cos(c - n), r * Math.sin(c - n)),
                  t.lineTo(i * Math.cos(c + a), i * Math.sin(c + a)))
                : (t.lineTo(i * Math.cos(c - a), i * Math.sin(c - a)),
                  t.lineTo(r * Math.cos(c + n), r * Math.sin(c + n))),
                (h = !h);
          }
          particleInit(t, e) {
            const i = e.shapeData;
            (e.cogHoleRadius = ct(i?.holeRadius ?? 44)),
              (e.cogInnerRadius = ct(i?.innerRadius ?? 72)),
              (e.cogInnerTaper = ct(i?.innerTaper ?? 35)),
              (e.cogNotches = ct(i?.notches ?? 7)),
              (e.cogOuterTaper = ct(i?.outerTaper ?? 50));
          }
        }
        class jt {
          constructor() {
            this.options = {
              rndFunc: null,
              period: 100,
              nbHarmonics: 2,
              attenHarmonics: 0.8,
              lowValue: -0.03,
              highValue: 0.03,
            };
          }
          generate(t) {
            if (!t.pathGen) {
              const e = this.options;
              t.pathGen = (function (t, e, i, s, o = 0, n = 1) {
                const a = [],
                  r = [],
                  c = [],
                  h = [],
                  l = [],
                  d = t ?? ot;
                let u = 0;
                i < 1 && (i = 1);
                for (let t = 1; t <= i; ++t)
                  (a[t] = d()),
                    (r[t] = d()),
                    (c[t] = 1 === t ? 1 : c[t - 1] * s),
                    (u += c[t]),
                    (h[t] = t / e),
                    (l[t] = d());
                return (
                  c.forEach((t, e) => (c[e] = (t / u) * (n - o))),
                  () => {
                    let t,
                      e,
                      s = 0;
                    for (let o = i; o >= 1; --o)
                      (t = l[o] += h[o]),
                        l[o] >= 1 &&
                          ((t = l[o] -= 1), (a[o] = r[o]), (r[o] = d())),
                        (e = t ** 2 * (3 - 2 * t)),
                        (s += (a[o] * (1 - e) + r[o] * e) * c[o]);
                    return s + o;
                  }
                );
              })(
                e.rndFunc,
                e.period,
                e.nbHarmonics,
                e.attenHarmonics,
                e.lowValue,
                e.highValue
              );
            }
            return (
              t.curveVelocity
                ? ((t.curveVelocity.length += 0.01),
                  (t.curveVelocity.angle =
                    (t.curveVelocity.angle + t.pathGen()) % (2 * Math.PI)))
                : ((t.curveVelocity = y.origin),
                  (t.curveVelocity.length = 0.6 * ot() + 0.8),
                  (t.curveVelocity.angle = ot() * Math.PI * 2)),
              (t.velocity.x = 0),
              (t.velocity.y = 0),
              t.curveVelocity
            );
          }
          init(t) {
            const e = t.actualOptions.particles.move.path.options,
              { options: i } = this;
            X(e.rndFunc)
              ? (i.rndFunc = e.rndFunc)
              : W(e.rndFunc) &&
                (i.rndFunc = window[e.rndFunc] || this.options.rndFunc),
              (i.period = e.period ?? i.period),
              (i.nbHarmonics = e.nbHarmonics ?? i.nbHarmonics),
              (i.attenHarmonics = e.attenHarmonics ?? i.attenHarmonics),
              (i.lowValue = e.lowValue ?? i.lowValue),
              (i.highValue = e.highValue ?? i.highValue);
          }
          reset(t) {
            delete t.pathGen, delete t.curveVelocity;
          }
          update() {}
        }
        const Qt = "curvesPathGenerator";
        class Wt {
          constructor(t, e) {
            (this._exportImage = async (t) => {
              const e = this._container.canvas.element;
              if (e)
                return new Promise((i) => {
                  e.toBlob(
                    (t) => {
                      i(t || void 0);
                    },
                    t.type ?? "image/png",
                    t.quality
                  );
                });
            }),
              (this._container = t),
              (this._engine = e);
          }
          async export(t, e) {
            const i = { supported: !1 };
            if ("image" === t)
              (i.supported = !0), (i.blob = await this._exportImage(e));
            return i;
          }
        }
        class Zt {
          constructor(t) {
            (this.id = "export-image"), (this._engine = t);
          }
          getPlugin(t) {
            return new Wt(t, this._engine);
          }
          loadOptions() {}
          needsPlugin() {
            return !0;
          }
        }
        class Xt {
          constructor(t, e) {
            (this._exportJSON = async () => {
              const t = JSON.stringify(
                this._container.actualOptions,
                (t, e) => {
                  if (!t.startsWith("_")) return e;
                },
                2
              );
              return new Blob([t], { type: "application/json" });
            }),
              (this._container = t),
              (this._engine = e);
          }
          async export(t) {
            const e = { supported: !1 };
            if ("json" === t)
              (e.supported = !0), (e.blob = await this._exportJSON());
            return e;
          }
        }
        class Yt {
          constructor(t) {
            (this.id = "export-json"), (this._engine = t);
          }
          getPlugin(t) {
            return new Xt(t, this._engine);
          }
          loadOptions() {}
          needsPlugin() {
            return !0;
          }
        }
        const Jt = ["webm", "ogg", "mp4", "x-matroska"],
          Kt = [
            "vp9",
            "vp9.0",
            "vp8",
            "vp8.0",
            "avc1",
            "av1",
            "h265",
            "h.265",
            "h264",
            "h.264",
            "opus",
            "pcm",
            "aac",
            "mpeg",
            "mp4a",
          ];
        class te {
          constructor(t, e) {
            (this._supportedTypes = []),
              (this._exportVideo = async (t) => {
                const e = this._container.canvas.element;
                if (e)
                  return new Promise((i) => {
                    const s = e.captureStream(
                        t.fps ?? this._container.actualOptions.fpsLimit
                      ),
                      o = t.mimeType ?? this._supportedTypes[0],
                      n = new MediaRecorder(s, { mimeType: o }),
                      a = [];
                    n.addEventListener("dataavailable", (t) => {
                      a.push(t.data);
                    }),
                      n.addEventListener("stop", () => {
                        i(new Blob(a, { type: o }));
                      }),
                      n.start(),
                      setTimeout(() => {
                        n.stop();
                      }, t.duration ?? 5e3);
                  });
              }),
              (this._container = t),
              (this._engine = e),
              (this._supportedTypes = (function () {
                const t = MediaRecorder.isTypeSupported,
                  e = [];
                return (
                  Jt.forEach((i) => {
                    const s = `video/${i}`;
                    Kt.forEach((i) =>
                      [
                        `${s};codecs=${i}`,
                        `${s};codecs=${i.toUpperCase()}`,
                      ].forEach((i) => {
                        t(i) && e.push(i);
                      })
                    ),
                      t(s) && e.push(s);
                  }),
                  e
                );
              })());
          }
          async export(t, e) {
            const i = { supported: !1 };
            if ("video" === t)
              (i.supported = !0), (i.blob = await this._exportVideo(e));
            return i;
          }
        }
        class ee {
          constructor(t) {
            (this.id = "export-video"), (this._engine = t);
          }
          getPlugin(t) {
            return new te(t, this._engine);
          }
          loadOptions() {}
          needsPlugin() {
            return !0;
          }
        }
        class ie {
          constructor() {
            this.value = "";
          }
          static create(t, e) {
            const i = new ie();
            return (
              i.load(t),
              void 0 !== e && (W(e) || J(e) ? i.load({ value: e }) : i.load(e)),
              i
            );
          }
          load(t) {
            void 0 !== t?.value && (this.value = t.value);
          }
        }
        class se {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.speed = 1),
              (this.decay = 0),
              (this.delay = 0),
              (this.sync = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.count && (this.count = dt(t.count)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.speed && (this.speed = dt(t.speed)),
              void 0 !== t.decay && (this.decay = dt(t.decay)),
              void 0 !== t.delay && (this.delay = dt(t.delay)),
              void 0 !== t.sync && (this.sync = t.sync));
          }
        }
        class oe extends se {
          constructor() {
            super(), (this.mode = "auto"), (this.startValue = "random");
          }
          load(t) {
            super.load(t),
              t &&
                (void 0 !== t.minimumValue &&
                  (this.minimumValue = t.minimumValue),
                void 0 !== t.mode && (this.mode = t.mode),
                void 0 !== t.startValue && (this.startValue = t.startValue));
          }
        }
        class ne {
          constructor() {
            (this.enable = !1), (this.minimumValue = 0);
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.minimumValue &&
                (this.minimumValue = t.minimumValue));
          }
        }
        class ae {
          constructor() {
            (this.random = new ne()), (this.value = 0);
          }
          load(t) {
            t &&
              (Q(t.random)
                ? (this.random.enable = t.random)
                : this.random.load(t.random),
              void 0 !== t.value &&
                (this.value = dt(
                  t.value,
                  this.random.enable ? this.random.minimumValue : void 0
                )));
          }
        }
        class re extends ae {
          constructor() {
            super(), (this.animation = new se());
          }
          get anim() {
            return this.animation;
          }
          set anim(t) {
            this.animation = t;
          }
          load(t) {
            if ((super.load(t), !t)) return;
            const e = t.animation ?? t.anim;
            void 0 !== e && this.animation.load(e);
          }
        }
        class ce extends re {
          constructor() {
            super(), (this.animation = new oe());
          }
          load(t) {
            if ((super.load(t), !t)) return;
            void 0 !== (t.animation ?? t.anim) &&
              (this.value = dt(
                this.value,
                this.animation.enable ? this.animation.minimumValue : void 0
              ));
          }
        }
        class he {
          constructor() {
            (this.radius = 0), (this.mass = 0);
          }
          load(t) {
            t &&
              (void 0 !== t.mass && (this.mass = t.mass),
              void 0 !== t.radius && (this.radius = t.radius));
          }
        }
        class le extends ae {
          constructor() {
            super(),
              (this.density = 5),
              (this.value = 50),
              (this.limit = new he());
          }
          load(t) {
            t &&
              (super.load(t),
              void 0 !== t.density && (this.density = t.density),
              Z(t.limit)
                ? (this.limit.radius = t.limit)
                : this.limit.load(t.limit));
          }
        }
        class de {
          constructor() {
            (this.color = new ie()),
              (this.color.value = "#000000"),
              (this.draggable = !1),
              (this.opacity = 1),
              (this.destroy = !0),
              (this.orbits = !1),
              (this.size = new le());
          }
          load(t) {
            void 0 !== t &&
              (void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              void 0 !== t.draggable && (this.draggable = t.draggable),
              (this.name = t.name),
              void 0 !== t.opacity && (this.opacity = t.opacity),
              void 0 !== t.position &&
                ((this.position = {}),
                void 0 !== t.position.x && (this.position.x = dt(t.position.x)),
                void 0 !== t.position.y &&
                  (this.position.y = dt(t.position.y))),
              void 0 !== t.size && this.size.load(t.size),
              void 0 !== t.destroy && (this.destroy = t.destroy),
              void 0 !== t.orbits && (this.orbits = t.orbits));
          }
        }
        const ue = "random",
          pe = "mid",
          ge = new Map();
        function fe(t) {
          ge.set(t.key, t);
        }
        function ye(t, e, i) {
          return (
            i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6
              ? t + 6 * (e - t) * i
              : i < 0.5
              ? e
              : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t
          );
        }
        function ve(t) {
          for (const [, e] of ge)
            if (t.startsWith(e.stringPrefix)) return e.parseString(t);
          const e = t.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
              (t, e, i, s, o) =>
                e + e + i + i + s + s + (void 0 !== o ? o + o : "")
            ),
            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
              e
            );
          return i
            ? {
                a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                b: parseInt(i[3], 16),
                g: parseInt(i[2], 16),
                r: parseInt(i[1], 16),
              }
            : void 0;
        }
        function we(t, e, i = !0) {
          if (!t) return;
          const s = W(t) ? { value: t } : t;
          if (W(s.value)) return me(s.value, e, i);
          if (J(s.value)) return we({ value: V(s.value, e, i) });
          for (const [, t] of ge) {
            const e = t.handleRangeColor(s);
            if (e) return e;
          }
        }
        function me(t, e, i = !0) {
          if (!t) return;
          const s = W(t) ? { value: t } : t;
          if (W(s.value)) return s.value === ue ? Te() : Pe(s.value);
          if (J(s.value)) return me({ value: V(s.value, e, i) });
          for (const [, t] of ge) {
            const e = t.handleColor(s);
            if (e) return e;
          }
        }
        function be(t, e, i = !0) {
          const s = me(t, e, i);
          return s ? Se(s) : void 0;
        }
        function _e(t, e, i = !0) {
          const s = we(t, e, i);
          return s ? Se(s) : void 0;
        }
        function Se(t) {
          const e = t.r / 255,
            i = t.g / 255,
            s = t.b / 255,
            o = Math.max(e, i, s),
            n = Math.min(e, i, s),
            a = { h: 0, l: (o + n) / 2, s: 0 };
          return (
            o !== n &&
              ((a.s = a.l < 0.5 ? (o - n) / (o + n) : (o - n) / (2 - o - n)),
              (a.h =
                e === o
                  ? (i - s) / (o - n)
                  : (a.h =
                      i === o
                        ? 2 + (s - e) / (o - n)
                        : 4 + (e - i) / (o - n)))),
            (a.l *= 100),
            (a.s *= 100),
            (a.h *= 60),
            a.h < 0 && (a.h += 360),
            a.h >= 360 && (a.h -= 360),
            a
          );
        }
        function xe(t) {
          return ve(t)?.a;
        }
        function Pe(t) {
          return ve(t);
        }
        function Ce(t) {
          const e = { b: 0, g: 0, r: 0 },
            i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
          if (i.s) {
            const t = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
              s = 2 * i.l - t;
            (e.r = ye(s, t, i.h + 1 / 3)),
              (e.g = ye(s, t, i.h)),
              (e.b = ye(s, t, i.h - 1 / 3));
          } else e.r = e.g = e.b = i.l;
          return (
            (e.r = Math.floor(255 * e.r)),
            (e.g = Math.floor(255 * e.g)),
            (e.b = Math.floor(255 * e.b)),
            e
          );
        }
        function Oe(t) {
          const e = Ce(t);
          return { a: t.a, b: e.b, g: e.g, r: e.r };
        }
        function Te(t) {
          const e = t ?? 0;
          return {
            b: Math.floor(rt(dt(e, 256))),
            g: Math.floor(rt(dt(e, 256))),
            r: Math.floor(rt(dt(e, 256))),
          };
        }
        function Ve(t, e) {
          return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
        }
        function Ae(t, e) {
          return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
        }
        function Me(t, e, i, s) {
          let o = t,
            n = e;
          return (
            void 0 === o.r && (o = Ce(t)),
            void 0 === n.r && (n = Ce(e)),
            {
              b: at(o.b, n.b, i, s),
              g: at(o.g, n.g, i, s),
              r: at(o.r, n.r, i, s),
            }
          );
        }
        function Ge(t, e, i) {
          if (i === ue) return Te();
          if (i !== pe) return i;
          {
            const i = t.getFillColor() ?? t.getStrokeColor(),
              s = e?.getFillColor() ?? e?.getStrokeColor();
            if (i && s && e) return Me(i, s, t.getRadius(), e.getRadius());
            {
              const t = i ?? s;
              if (t) return Ce(t);
            }
          }
        }
        function Ee(t, e, i) {
          const s = W(t) ? t : t.value;
          return s === ue
            ? i
              ? we({ value: s })
              : e
              ? ue
              : pe
            : s === pe
            ? pe
            : we({ value: s });
        }
        function ke(t) {
          return void 0 !== t
            ? { h: t.h.value, s: t.s.value, l: t.l.value }
            : void 0;
        }
        function Re(t, e, i) {
          const s = {
            h: { enable: !1, value: t.h },
            s: { enable: !1, value: t.s },
            l: { enable: !1, value: t.l },
          };
          return e && (Ie(s.h, e.h, i), Ie(s.s, e.s, i), Ie(s.l, e.l, i)), s;
        }
        function Ie(t, e, i) {
          (t.enable = e.enable),
            t.enable
              ? ((t.velocity = (ct(e.speed) / 100) * i),
                (t.decay = 1 - ct(e.decay)),
                (t.status = "increasing"),
                (t.loops = 0),
                (t.maxLoops = ct(e.count)),
                (t.time = 0),
                (t.delayTime = 1e3 * ct(e.delay)),
                e.sync || ((t.velocity *= ot()), (t.value *= ot())),
                (t.initialValue = t.value))
              : (t.velocity = 0);
        }
        class ze {
          constructor(t, e, i, s) {
            (this.absorbers = t),
              (this.container = e),
              (this._calcPosition = () => {
                const t = bt({
                  size: this.container.canvas.size,
                  position: this.options.position,
                });
                return y.create(t.x, t.y);
              }),
              (this._updateParticlePosition = (t, e) => {
                if (t.destroyed) return;
                const i = this.container,
                  s = i.canvas.size;
                if (t.needsNewPosition) {
                  const e = mt({ size: s });
                  t.position.setTo(e),
                    t.velocity.setTo(t.initialVelocity),
                    (t.absorberOrbit = void 0),
                    (t.needsNewPosition = !1);
                }
                if (this.options.orbits) {
                  if (
                    (void 0 === t.absorberOrbit &&
                      ((t.absorberOrbit = y.create(0, 0)),
                      (t.absorberOrbit.length = gt(
                        t.getPosition(),
                        this.position
                      )),
                      (t.absorberOrbit.angle = ot() * Math.PI * 2)),
                    t.absorberOrbit.length <= this.size &&
                      !this.options.destroy)
                  ) {
                    const e = Math.min(s.width, s.height);
                    t.absorberOrbit.length = e * (0.2 * ot() - 0.1 + 1);
                  }
                  void 0 === t.absorberOrbitDirection &&
                    (t.absorberOrbitDirection =
                      t.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
                  const o = t.absorberOrbit.length,
                    n = t.absorberOrbit.angle,
                    a = t.absorberOrbitDirection;
                  t.velocity.setTo(y.origin);
                  const r = {
                    x: "clockwise" === a ? Math.cos : Math.sin,
                    y: "clockwise" === a ? Math.sin : Math.cos,
                  };
                  (t.position.x = this.position.x + o * r.x(n)),
                    (t.position.y = this.position.y + o * r.y(n)),
                    (t.absorberOrbit.length -= e.length),
                    (t.absorberOrbit.angle +=
                      (((t.retina.moveSpeed ?? 0) * i.retina.pixelRatio) /
                        100) *
                      i.retina.reduceFactor);
                } else {
                  const i = y.origin;
                  (i.length = e.length),
                    (i.angle = e.angle),
                    t.velocity.addTo(i);
                }
              }),
              (this.initialPosition = s ? y.create(s.x, s.y) : void 0),
              i instanceof de
                ? (this.options = i)
                : ((this.options = new de()), this.options.load(i)),
              (this.dragging = !1),
              (this.name = this.options.name),
              (this.opacity = this.options.opacity),
              (this.size = ct(this.options.size.value) * e.retina.pixelRatio),
              (this.mass =
                this.size * this.options.size.density * e.retina.reduceFactor);
            const o = this.options.size.limit;
            (this.limit = {
              radius: o.radius * e.retina.pixelRatio * e.retina.reduceFactor,
              mass: o.mass,
            }),
              (this.color = we(this.options.color) ?? { b: 0, g: 0, r: 0 }),
              (this.position =
                this.initialPosition?.copy() ?? this._calcPosition());
          }
          attract(t) {
            const e = this.container,
              i = this.options;
            if (i.draggable) {
              const t = e.interactivity.mouse;
              if (t.clicking && t.downPosition) {
                gt(this.position, t.downPosition) <= this.size &&
                  (this.dragging = !0);
              } else this.dragging = !1;
              this.dragging &&
                t.position &&
                ((this.position.x = t.position.x),
                (this.position.y = t.position.y));
            }
            const s = t.getPosition(),
              { dx: o, dy: n, distance: a } = pt(this.position, s),
              r = y.create(o, n);
            if (
              ((r.length =
                (this.mass / Math.pow(a, 2)) * e.retina.reduceFactor),
              a < this.size + t.getRadius())
            ) {
              const s = 0.033 * t.getRadius() * e.retina.pixelRatio;
              (this.size > t.getRadius() && a < this.size - t.getRadius()) ||
              (void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0)
                ? i.destroy
                  ? t.destroy()
                  : ((t.needsNewPosition = !0),
                    this._updateParticlePosition(t, r))
                : (i.destroy && (t.size.value -= s),
                  this._updateParticlePosition(t, r)),
                (this.limit.radius <= 0 || this.size < this.limit.radius) &&
                  (this.size += s),
                (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
                  (this.mass +=
                    s * this.options.size.density * e.retina.reduceFactor);
            } else this._updateParticlePosition(t, r);
          }
          draw(t) {
            t.translate(this.position.x, this.position.y),
              t.beginPath(),
              t.arc(0, 0, this.size, 0, 2 * Math.PI, !1),
              t.closePath(),
              (t.fillStyle = Ve(this.color, this.opacity)),
              t.fill();
          }
          resize() {
            const t = this.initialPosition;
            this.position =
              t && A(t, this.container.canvas.size, y.origin)
                ? t
                : this._calcPosition();
          }
        }
        class Le {
          constructor(t) {
            (this.container = t),
              (this.array = []),
              (this.absorbers = []),
              (this.interactivityAbsorbers = []),
              (t.getAbsorber = (t) =>
                void 0 === t || Z(t)
                  ? this.array[t || 0]
                  : this.array.find((e) => e.name === t)),
              (t.addAbsorber = (t, e) => this.addAbsorber(t, e));
          }
          addAbsorber(t, e) {
            const i = new ze(this, this.container, t, e);
            return this.array.push(i), i;
          }
          draw(t) {
            for (const e of this.array) e.draw(t);
          }
          handleClickMode(t) {
            const e = this.absorbers,
              i = this.interactivityAbsorbers;
            if ("absorber" === t) {
              const t = F(i) ?? F(e),
                s = this.container.interactivity.mouse.clickPosition;
              this.addAbsorber(t, s);
            }
          }
          async init() {
            (this.absorbers = this.container.actualOptions.absorbers),
              (this.interactivityAbsorbers =
                this.container.actualOptions.interactivity.modes.absorbers),
              B(this.absorbers, (t) => {
                this.addAbsorber(t);
              });
          }
          particleUpdate(t) {
            for (const e of this.array) if ((e.attract(t), t.destroyed)) break;
          }
          removeAbsorber(t) {
            const e = this.array.indexOf(t);
            e >= 0 && this.array.splice(e, 1);
          }
          resize() {
            for (const t of this.array) t.resize();
          }
          stop() {
            this.array = [];
          }
        }
        class De {
          constructor() {
            this.id = "absorbers";
          }
          getPlugin(t) {
            return new Le(t);
          }
          loadOptions(t, e) {
            (this.needsPlugin(t) || this.needsPlugin(e)) &&
              (e?.absorbers &&
                (t.absorbers = B(e.absorbers, (t) => {
                  const e = new de();
                  return e.load(t), e;
                })),
              (t.interactivity.modes.absorbers = B(
                e?.interactivity?.modes?.absorbers,
                (t) => {
                  const e = new de();
                  return e.load(t), e;
                }
              )));
          }
          needsPlugin(t) {
            if (!t) return !1;
            const e = t.absorbers;
            return J(e)
              ? !!e.length
              : !!e ||
                  !(
                    !t.interactivity?.events?.onClick?.mode ||
                    !C("absorber", t.interactivity.events.onClick.mode)
                  );
          }
        }
        class He {
          load(t) {
            t &&
              (void 0 !== t.bottom && (this.bottom = dt(t.bottom)),
              void 0 !== t.left && (this.left = dt(t.left)),
              void 0 !== t.right && (this.right = dt(t.right)),
              void 0 !== t.top && (this.top = dt(t.top)));
          }
        }
        class Be extends ae {
          constructor() {
            super(), (this.value = 3);
          }
        }
        class Fe extends ae {
          constructor() {
            super(), (this.value = { min: 4, max: 9 });
          }
        }
        class Ne {
          constructor() {
            (this.count = 1),
              (this.factor = new Be()),
              (this.rate = new Fe()),
              (this.sizeOffset = !0);
          }
          load(t) {
            t &&
              (void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              void 0 !== t.count && (this.count = t.count),
              this.factor.load(t.factor),
              this.rate.load(t.rate),
              (this.particles = B(t.particles, (t) => E({}, t))),
              void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset),
              t.colorOffset &&
                ((this.colorOffset = this.colorOffset ?? {}),
                void 0 !== t.colorOffset.h &&
                  (this.colorOffset.h = t.colorOffset.h),
                void 0 !== t.colorOffset.s &&
                  (this.colorOffset.s = t.colorOffset.s),
                void 0 !== t.colorOffset.l &&
                  (this.colorOffset.l = t.colorOffset.l)));
          }
        }
        class Ue {
          constructor() {
            (this.bounds = new He()),
              (this.mode = "none"),
              (this.split = new Ne());
          }
          load(t) {
            t &&
              (t.mode && (this.mode = t.mode),
              t.bounds && this.bounds.load(t.bounds),
              this.split.load(t.split));
          }
        }
        class $e {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.offset = 0),
              (this.speed = 1),
              (this.delay = 0),
              (this.decay = 0),
              (this.sync = !0);
          }
          load(t) {
            t &&
              (void 0 !== t.count && (this.count = dt(t.count)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.offset && (this.offset = dt(t.offset)),
              void 0 !== t.speed && (this.speed = dt(t.speed)),
              void 0 !== t.decay && (this.decay = dt(t.decay)),
              void 0 !== t.delay && (this.delay = dt(t.delay)),
              void 0 !== t.sync && (this.sync = t.sync));
          }
        }
        class qe {
          constructor() {
            (this.h = new $e()), (this.s = new $e()), (this.l = new $e());
          }
          load(t) {
            t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
          }
        }
        class je extends ie {
          constructor() {
            super(), (this.animation = new qe());
          }
          static create(t, e) {
            const i = new je();
            return (
              i.load(t),
              void 0 !== e && (W(e) || J(e) ? i.load({ value: e }) : i.load(e)),
              i
            );
          }
          load(t) {
            if ((super.load(t), !t)) return;
            const e = t.animation;
            void 0 !== e &&
              (void 0 !== e.enable
                ? this.animation.h.load(e)
                : this.animation.load(t.animation));
          }
        }
        class Qe {
          constructor() {
            this.speed = 2;
          }
          load(t) {
            t && void 0 !== t.speed && (this.speed = t.speed);
          }
        }
        class We {
          constructor() {
            (this.enable = !0), (this.retries = 0);
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.retries && (this.retries = t.retries));
          }
        }
        class Ze extends ae {
          constructor() {
            super(), (this.random.minimumValue = 0.1), (this.value = 1);
          }
        }
        class Xe {
          constructor() {
            (this.horizontal = new Ze()), (this.vertical = new Ze());
          }
          load(t) {
            t &&
              (this.horizontal.load(t.horizontal),
              this.vertical.load(t.vertical));
          }
        }
        class Ye {
          constructor() {
            (this.absorb = new Qe()),
              (this.bounce = new Xe()),
              (this.enable = !1),
              (this.maxSpeed = 50),
              (this.mode = "bounce"),
              (this.overlap = new We());
          }
          load(t) {
            t &&
              (this.absorb.load(t.absorb),
              this.bounce.load(t.bounce),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.maxSpeed && (this.maxSpeed = dt(t.maxSpeed)),
              void 0 !== t.mode && (this.mode = t.mode),
              this.overlap.load(t.overlap));
          }
        }
        class Je {
          constructor() {
            (this.offset = 0), (this.value = 90);
          }
          load(t) {
            t &&
              (void 0 !== t.offset && (this.offset = dt(t.offset)),
              void 0 !== t.value && (this.value = dt(t.value)));
          }
        }
        class Ke {
          constructor() {
            (this.distance = 200),
              (this.enable = !1),
              (this.rotate = { x: 3e3, y: 3e3 });
          }
          get rotateX() {
            return this.rotate.x;
          }
          set rotateX(t) {
            this.rotate.x = t;
          }
          get rotateY() {
            return this.rotate.y;
          }
          set rotateY(t) {
            this.rotate.y = t;
          }
          load(t) {
            if (!t) return;
            void 0 !== t.distance && (this.distance = dt(t.distance)),
              void 0 !== t.enable && (this.enable = t.enable);
            const e = t.rotate?.x ?? t.rotateX;
            void 0 !== e && (this.rotate.x = e);
            const i = t.rotate?.y ?? t.rotateY;
            void 0 !== i && (this.rotate.y = i);
          }
        }
        class ti {
          constructor() {
            (this.x = 50),
              (this.y = 50),
              (this.mode = "percent"),
              (this.radius = 0);
          }
          load(t) {
            t &&
              (void 0 !== t.x && (this.x = t.x),
              void 0 !== t.y && (this.y = t.y),
              void 0 !== t.mode && (this.mode = t.mode),
              void 0 !== t.radius && (this.radius = t.radius));
          }
        }
        class ei {
          constructor() {
            (this.acceleration = 9.81),
              (this.enable = !1),
              (this.inverse = !1),
              (this.maxSpeed = 50);
          }
          load(t) {
            t &&
              (void 0 !== t.acceleration &&
                (this.acceleration = dt(t.acceleration)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.inverse && (this.inverse = t.inverse),
              void 0 !== t.maxSpeed && (this.maxSpeed = dt(t.maxSpeed)));
          }
        }
        class ii {
          constructor() {
            (this.clamp = !0),
              (this.delay = new ae()),
              (this.enable = !1),
              (this.options = {});
          }
          load(t) {
            t &&
              (void 0 !== t.clamp && (this.clamp = t.clamp),
              this.delay.load(t.delay),
              void 0 !== t.enable && (this.enable = t.enable),
              (this.generator = t.generator),
              t.options && (this.options = E(this.options, t.options)));
          }
        }
        class si {
          load(t) {
            t &&
              (void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              void 0 !== t.image && (this.image = t.image));
          }
        }
        class oi {
          constructor() {
            (this.enable = !1), (this.length = 10), (this.fill = new si());
          }
          get fillColor() {
            return this.fill.color;
          }
          set fillColor(t) {
            this.fill.load({ color: t });
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              (void 0 === t.fill && void 0 === t.fillColor) ||
                this.fill.load(t.fill || { color: t.fillColor }),
              void 0 !== t.length && (this.length = t.length));
          }
        }
        class ni {
          constructor() {
            this.default = "out";
          }
          load(t) {
            t &&
              (void 0 !== t.default && (this.default = t.default),
              (this.bottom = t.bottom ?? t.default),
              (this.left = t.left ?? t.default),
              (this.right = t.right ?? t.default),
              (this.top = t.top ?? t.default));
          }
        }
        class ai {
          constructor() {
            (this.acceleration = 0), (this.enable = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.acceleration &&
                (this.acceleration = dt(t.acceleration)),
              void 0 !== t.enable && (this.enable = t.enable),
              t.position && (this.position = E({}, t.position)));
          }
        }
        class ri {
          constructor() {
            (this.angle = new Je()),
              (this.attract = new Ke()),
              (this.center = new ti()),
              (this.decay = 0),
              (this.distance = {}),
              (this.direction = "none"),
              (this.drift = 0),
              (this.enable = !1),
              (this.gravity = new ei()),
              (this.path = new ii()),
              (this.outModes = new ni()),
              (this.random = !1),
              (this.size = !1),
              (this.speed = 2),
              (this.spin = new ai()),
              (this.straight = !1),
              (this.trail = new oi()),
              (this.vibrate = !1),
              (this.warp = !1);
          }
          get bounce() {
            return this.collisions;
          }
          set bounce(t) {
            this.collisions = t;
          }
          get collisions() {
            return !1;
          }
          set collisions(t) {}
          get noise() {
            return this.path;
          }
          set noise(t) {
            this.path = t;
          }
          get outMode() {
            return this.outModes.default;
          }
          set outMode(t) {
            this.outModes.default = t;
          }
          get out_mode() {
            return this.outMode;
          }
          set out_mode(t) {
            this.outMode = t;
          }
          load(t) {
            if (!t) return;
            this.angle.load(Z(t.angle) ? { value: t.angle } : t.angle),
              this.attract.load(t.attract),
              this.center.load(t.center),
              void 0 !== t.decay && (this.decay = dt(t.decay)),
              void 0 !== t.direction && (this.direction = t.direction),
              void 0 !== t.distance &&
                (this.distance = Z(t.distance)
                  ? { horizontal: t.distance, vertical: t.distance }
                  : { ...t.distance }),
              void 0 !== t.drift && (this.drift = dt(t.drift)),
              void 0 !== t.enable && (this.enable = t.enable),
              this.gravity.load(t.gravity);
            const e = t.outModes ?? t.outMode ?? t.out_mode;
            void 0 !== e &&
              (Y(e)
                ? this.outModes.load(e)
                : this.outModes.load({ default: e })),
              this.path.load(t.path ?? t.noise),
              void 0 !== t.random && (this.random = t.random),
              void 0 !== t.size && (this.size = t.size),
              void 0 !== t.speed && (this.speed = dt(t.speed)),
              this.spin.load(t.spin),
              void 0 !== t.straight && (this.straight = t.straight),
              this.trail.load(t.trail),
              void 0 !== t.vibrate && (this.vibrate = t.vibrate),
              void 0 !== t.warp && (this.warp = t.warp);
          }
        }
        class ci extends oe {
          constructor() {
            super(), (this.destroy = "none"), (this.speed = 2);
          }
          get opacity_min() {
            return this.minimumValue;
          }
          set opacity_min(t) {
            this.minimumValue = t;
          }
          load(t) {
            void 0 !== t?.opacity_min &&
              void 0 === t.minimumValue &&
              (t.minimumValue = t.opacity_min),
              super.load(t),
              t && void 0 !== t.destroy && (this.destroy = t.destroy);
          }
        }
        class hi extends ae {
          constructor() {
            super(),
              (this.animation = new ci()),
              (this.random.minimumValue = 0.1),
              (this.value = 1);
          }
          get anim() {
            return this.animation;
          }
          set anim(t) {
            this.animation = t;
          }
          load(t) {
            if (!t) return;
            super.load(t);
            const e = t.animation ?? t.anim;
            void 0 !== e &&
              (this.animation.load(e),
              (this.value = dt(
                this.value,
                this.animation.enable ? this.animation.minimumValue : void 0
              )));
          }
        }
        class li {
          constructor() {
            (this.enable = !1), (this.width = 1920), (this.height = 1080);
          }
          get area() {
            return this.width;
          }
          set area(t) {
            this.width = t;
          }
          get factor() {
            return this.height;
          }
          set factor(t) {
            this.height = t;
          }
          get value_area() {
            return this.area;
          }
          set value_area(t) {
            this.area = t;
          }
          load(t) {
            if (!t) return;
            void 0 !== t.enable && (this.enable = t.enable);
            const e = t.width ?? t.area ?? t.value_area;
            void 0 !== e && (this.width = e);
            const i = t.height ?? t.factor;
            void 0 !== i && (this.height = i);
          }
        }
        class di {
          constructor() {
            (this.density = new li()), (this.limit = 0), (this.value = 0);
          }
          get max() {
            return this.limit;
          }
          set max(t) {
            this.limit = t;
          }
          load(t) {
            if (!t) return;
            this.density.load(t.density);
            const e = t.limit ?? t.max;
            void 0 !== e && (this.limit = e),
              void 0 !== t.value && (this.value = t.value);
          }
        }
        class ui {
          constructor() {
            (this.blur = 0),
              (this.color = new ie()),
              (this.enable = !1),
              (this.offset = { x: 0, y: 0 }),
              (this.color.value = "#000");
          }
          load(t) {
            t &&
              (void 0 !== t.blur && (this.blur = t.blur),
              (this.color = ie.create(this.color, t.color)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.offset &&
                (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
                void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
          }
        }
        const pi = "character",
          gi = "char",
          fi = "image",
          yi = "images",
          vi = "polygon",
          wi = "star";
        class mi {
          constructor() {
            (this.loadShape = (t, e, i, s) => {
              if (!t) return;
              const o = J(t),
                n = o ? [] : {},
                a = o !== J(this.options[e]),
                r = o !== J(this.options[i]);
              a && (this.options[e] = n),
                r && s && (this.options[i] = n),
                (this.options[e] = E(this.options[e] ?? n, t)),
                (this.options[i] && !s) ||
                  (this.options[i] = E(this.options[i] ?? n, t));
            }),
              (this.close = !0),
              (this.fill = !0),
              (this.options = {}),
              (this.type = "circle");
          }
          get character() {
            return this.options[pi] ?? this.options[gi];
          }
          set character(t) {
            this.options[gi] = this.options[pi] = t;
          }
          get custom() {
            return this.options;
          }
          set custom(t) {
            this.options = t;
          }
          get image() {
            return this.options[fi] ?? this.options[yi];
          }
          set image(t) {
            this.options[yi] = this.options[fi] = t;
          }
          get images() {
            return this.image;
          }
          set images(t) {
            this.image = t;
          }
          get polygon() {
            return this.options[vi] ?? this.options[wi];
          }
          set polygon(t) {
            this.options[wi] = this.options[vi] = t;
          }
          get stroke() {
            return [];
          }
          set stroke(t) {}
          load(t) {
            if (!t) return;
            const e = t.options ?? t.custom;
            if (void 0 !== e)
              for (const t in e) {
                const i = e[t];
                i && (this.options[t] = E(this.options[t] ?? {}, i));
              }
            this.loadShape(t.character, pi, gi, !0),
              this.loadShape(t.polygon, vi, wi, !1),
              this.loadShape(t.image ?? t.images, fi, yi, !0),
              void 0 !== t.close && (this.close = t.close),
              void 0 !== t.fill && (this.fill = t.fill),
              void 0 !== t.type && (this.type = t.type);
          }
        }
        class bi extends oe {
          constructor() {
            super(), (this.destroy = "none"), (this.speed = 5);
          }
          get size_min() {
            return this.minimumValue;
          }
          set size_min(t) {
            this.minimumValue = t;
          }
          load(t) {
            void 0 !== t?.size_min &&
              void 0 === t.minimumValue &&
              (t.minimumValue = t.size_min),
              super.load(t),
              t && void 0 !== t.destroy && (this.destroy = t.destroy);
          }
        }
        class _i extends ae {
          constructor() {
            super(),
              (this.animation = new bi()),
              (this.random.minimumValue = 1),
              (this.value = 3);
          }
          get anim() {
            return this.animation;
          }
          set anim(t) {
            this.animation = t;
          }
          load(t) {
            if ((super.load(t), !t)) return;
            const e = t.animation ?? t.anim;
            void 0 !== e &&
              (this.animation.load(e),
              (this.value = dt(
                this.value,
                this.animation.enable ? this.animation.minimumValue : void 0
              )));
          }
        }
        class Si {
          constructor() {
            this.width = 0;
          }
          load(t) {
            t &&
              (void 0 !== t.color &&
                (this.color = je.create(this.color, t.color)),
              void 0 !== t.width && (this.width = dt(t.width)),
              void 0 !== t.opacity && (this.opacity = dt(t.opacity)));
          }
        }
        class xi extends ae {
          constructor() {
            super(),
              (this.opacityRate = 1),
              (this.sizeRate = 1),
              (this.velocityRate = 1);
          }
          load(t) {
            super.load(t),
              t &&
                (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
                void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
                void 0 !== t.velocityRate &&
                  (this.velocityRate = t.velocityRate));
          }
        }
        class Pi {
          constructor(t, e) {
            (this._engine = t),
              (this._container = e),
              (this.bounce = new Xe()),
              (this.collisions = new Ye()),
              (this.color = new je()),
              (this.color.value = "#fff"),
              (this.groups = {}),
              (this.move = new ri()),
              (this.number = new di()),
              (this.opacity = new hi()),
              (this.reduceDuplicates = !1),
              (this.shadow = new ui()),
              (this.shape = new mi()),
              (this.size = new _i()),
              (this.stroke = new Si()),
              (this.zIndex = new xi());
          }
          load(t) {
            if (!t) return;
            if (
              (this.bounce.load(t.bounce),
              this.color.load(je.create(this.color, t.color)),
              void 0 !== t.groups)
            )
              for (const e in t.groups) {
                const i = t.groups[e];
                void 0 !== i && (this.groups[e] = E(this.groups[e] ?? {}, i));
              }
            this.move.load(t.move),
              this.number.load(t.number),
              this.opacity.load(t.opacity),
              void 0 !== t.reduceDuplicates &&
                (this.reduceDuplicates = t.reduceDuplicates),
              this.shape.load(t.shape),
              this.size.load(t.size),
              this.shadow.load(t.shadow),
              this.zIndex.load(t.zIndex);
            const e = t.move?.collisions ?? t.move?.bounce;
            void 0 !== e && (this.collisions.enable = e),
              this.collisions.load(t.collisions),
              void 0 !== t.interactivity &&
                (this.interactivity = E({}, t.interactivity));
            const i = t.stroke ?? t.shape?.stroke;
            if (
              (i &&
                (this.stroke = B(i, (t) => {
                  const e = new Si();
                  return e.load(t), e;
                })),
              this._container)
            ) {
              const e = this._engine.plugins.updaters.get(this._container);
              if (e) for (const i of e) i.loadOptions && i.loadOptions(this, t);
              const i = this._engine.plugins.interactors.get(this._container);
              if (i)
                for (const e of i)
                  e.loadParticlesOptions && e.loadParticlesOptions(this, t);
            }
          }
        }
        function Ci(t, ...e) {
          for (const i of e) t.load(i);
        }
        function Oi(t, e, ...i) {
          const s = new Pi(t, e);
          return Ci(s, ...i), s;
        }
        function Ti(t, e, i, s) {
          const o = i.options.destroy;
          if (!o) return;
          const n = o.split,
            a = Oi(t, e, i.options),
            r = ut(n.factor),
            c = i.getFillColor();
          n.color
            ? a.color.load(n.color)
            : n.colorOffset && c
            ? a.color.load({
                value: {
                  hsl: {
                    h: c.h + ct(n.colorOffset.h ?? 0),
                    s: c.s + ct(n.colorOffset.s ?? 0),
                    l: c.l + ct(n.colorOffset.l ?? 0),
                  },
                },
              })
            : a.color.load({ value: { hsl: i.getFillColor() } }),
            a.move.load({
              center: { x: i.position.x, y: i.position.y, mode: "precise" },
            }),
            Z(a.size.value)
              ? (a.size.value /= r)
              : ((a.size.value.min /= r), (a.size.value.max /= r)),
            a.load(s);
          const h = n.sizeOffset ? dt(-i.size.value, i.size.value) : 0,
            l = { x: i.position.x + rt(h), y: i.position.y + rt(h) };
          return e.particles.addParticle(
            l,
            a,
            i.group,
            (t) =>
              !(t.size.value < 0.5) &&
              ((t.velocity.length = rt(
                dt(i.velocity.length, t.velocity.length)
              )),
              (t.splitCount = (i.splitCount ?? 0) + 1),
              (t.unbreakable = !0),
              setTimeout(() => {
                t.unbreakable = !1;
              }, 500),
              !0)
          );
        }
        class Vi {
          constructor(t, e) {
            (this.engine = t), (this.container = e);
          }
          init(t) {
            const e = this.container,
              i = t.options.destroy;
            if (!i) return;
            t.splitCount = 0;
            const s = i.bounds;
            t.destroyBounds || (t.destroyBounds = {});
            const { bottom: o, left: n, right: a, top: r } = s,
              { destroyBounds: c } = t,
              h = e.canvas.size;
            o && (c.bottom = (ct(o) * h.height) / 100),
              n && (c.left = (ct(n) * h.width) / 100),
              a && (c.right = (ct(a) * h.width) / 100),
              r && (c.top = (ct(r) * h.height) / 100);
          }
          isEnabled(t) {
            return !t.destroyed;
          }
          loadOptions(t, ...e) {
            t.destroy || (t.destroy = new Ue());
            for (const i of e) t.destroy.load(i?.destroy);
          }
          particleDestroyed(t, e) {
            if (e) return;
            const i = t.options.destroy;
            i &&
              "split" === i.mode &&
              (function (t, e, i) {
                const s = i.options.destroy;
                if (!s) return;
                const o = s.split;
                if (
                  o.count >= 0 &&
                  (void 0 === i.splitCount || i.splitCount++ > o.count)
                )
                  return;
                const n = ut(o.rate),
                  a = F(o.particles);
                for (let s = 0; s < n; s++) Ti(t, e, i, a);
              })(this.engine, this.container, t);
          }
          update(t) {
            if (!this.isEnabled(t)) return;
            const e = t.getPosition(),
              i = t.destroyBounds;
            i &&
              ((void 0 !== i.bottom && e.y >= i.bottom) ||
                (void 0 !== i.left && e.x <= i.left) ||
                (void 0 !== i.right && e.x >= i.right) ||
                (void 0 !== i.top && e.y <= i.top)) &&
              t.destroy();
          }
        }
        class Ai {
          randomPosition(t, e, i) {
            const [s, o] = [e.width / 2, e.height / 2],
              n = ((t, e) => {
                const i = ot() / 4,
                  s = Math.atan((e / t) * Math.tan(2 * Math.PI * i)),
                  o = ot();
                return o < 0.25
                  ? s
                  : o < 0.5
                  ? Math.PI - s
                  : o < 0.75
                  ? Math.PI + s
                  : -s;
              })(s, o),
              a =
                ((l = n),
                ((c = s) * (h = o)) /
                  Math.sqrt((h * Math.cos(l)) ** 2 + (c * Math.sin(l)) ** 2)),
              r = i ? a * Math.sqrt(ot()) : a;
            var c, h, l;
            return { x: t.x + r * Math.cos(n), y: t.y + r * Math.sin(n) };
          }
        }
        class Mi {
          constructor() {
            this.wait = !1;
          }
          load(t) {
            t &&
              (void 0 !== t.count && (this.count = t.count),
              void 0 !== t.delay && (this.delay = dt(t.delay)),
              void 0 !== t.duration && (this.duration = dt(t.duration)),
              void 0 !== t.wait && (this.wait = t.wait));
          }
        }
        class Gi {
          constructor() {
            (this.quantity = 1), (this.delay = 0.1);
          }
          load(t) {
            void 0 !== t &&
              (void 0 !== t.quantity && (this.quantity = dt(t.quantity)),
              void 0 !== t.delay && (this.delay = dt(t.delay)));
          }
        }
        class Ei {
          constructor() {
            (this.mode = "percent"), (this.height = 0), (this.width = 0);
          }
          load(t) {
            void 0 !== t &&
              (void 0 !== t.mode && (this.mode = t.mode),
              void 0 !== t.height && (this.height = t.height),
              void 0 !== t.width && (this.width = t.width));
          }
        }
        class ki {
          constructor() {
            (this.autoPlay = !0),
              (this.fill = !0),
              (this.life = new Mi()),
              (this.rate = new Gi()),
              (this.shape = "square"),
              (this.startCount = 0);
          }
          load(t) {
            t &&
              (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
              void 0 !== t.size &&
                (this.size || (this.size = new Ei()), this.size.load(t.size)),
              void 0 !== t.direction && (this.direction = t.direction),
              (this.domId = t.domId),
              void 0 !== t.fill && (this.fill = t.fill),
              this.life.load(t.life),
              (this.name = t.name),
              (this.particles = B(t.particles, (t) => E({}, t))),
              this.rate.load(t.rate),
              void 0 !== t.shape && (this.shape = t.shape),
              void 0 !== t.position &&
                ((this.position = {}),
                void 0 !== t.position.x && (this.position.x = dt(t.position.x)),
                void 0 !== t.position.y &&
                  (this.position.y = dt(t.position.y))),
              void 0 !== t.spawnColor &&
                (void 0 === this.spawnColor && (this.spawnColor = new je()),
                this.spawnColor.load(t.spawnColor)),
              void 0 !== t.startCount && (this.startCount = t.startCount));
          }
        }
        class Ri {
          constructor(t, e, i, s, o) {
            (this.emitters = e),
              (this.container = i),
              (this._calcPosition = () =>
                bt({
                  size: this.container.canvas.size,
                  position: this.options.position,
                })),
              (this._destroy = () => {
                this.emitters.removeEmitter(this),
                  this._engine.dispatchEvent("emitterDestroyed", {
                    container: this.container,
                    data: { emitter: this },
                  });
              }),
              (this._emit = () => {
                if (this._paused) return;
                const t = ct(this.options.rate.quantity);
                this._emitParticles(t);
              }),
              (this._emitParticles = (t) => {
                const e = this.getPosition(),
                  i = this.getSize(),
                  s = F(this._particlesOptions);
                for (let o = 0; o < t; o++) {
                  const t = E({}, s);
                  if (this.spawnColor) {
                    const e = this.options.spawnColor?.animation;
                    e &&
                      ((this.spawnColor.h = this._setColorAnimation(
                        e.h,
                        this.spawnColor.h,
                        360
                      )),
                      (this.spawnColor.s = this._setColorAnimation(
                        e.s,
                        this.spawnColor.s,
                        100
                      )),
                      (this.spawnColor.l = this._setColorAnimation(
                        e.l,
                        this.spawnColor.l,
                        100
                      ))),
                      t.color
                        ? (t.color.value = this.spawnColor)
                        : (t.color = { value: this.spawnColor });
                  }
                  if (!e) return;
                  const o = this._shape?.randomPosition(e, i, this.fill) ?? e;
                  this.container.particles.addParticle(o, t);
                }
              }),
              (this._prepareToDie = () => {
                if (this._paused) return;
                const t =
                  void 0 !== this.options.life?.duration
                    ? ct(this.options.life.duration)
                    : void 0;
                this.container.retina.reduceFactor &&
                  (this._lifeCount > 0 || this._immortal) &&
                  void 0 !== t &&
                  t > 0 &&
                  (this._duration = 1e3 * t);
              }),
              (this._setColorAnimation = (t, e, i) => {
                const s = this.container;
                if (!t.enable) return e;
                const o = rt(t.offset),
                  n =
                    (1e3 * ct(this.options.rate.delay)) / s.retina.reduceFactor;
                return (e + (ct(t.speed ?? 0) * s.fpsLimit) / n + 3.6 * o) % i;
              }),
              (this._engine = t),
              (this._currentDuration = 0),
              (this._currentEmitDelay = 0),
              (this._currentSpawnDelay = 0),
              (this._initialPosition = o),
              s instanceof ki
                ? (this.options = s)
                : ((this.options = new ki()), this.options.load(s)),
              (this._spawnDelay =
                (1e3 * ct(this.options.life.delay ?? 0)) /
                this.container.retina.reduceFactor),
              (this.position = this._initialPosition ?? this._calcPosition()),
              (this.name = this.options.name),
              (this._shape = this._engine.emitterShapeManager?.getShape(
                this.options.shape
              )),
              (this.fill = this.options.fill),
              (this._firstSpawn = !this.options.life.wait),
              (this._startParticlesAdded = !1);
            let n = E({}, this.options.particles);
            (n ??= {}),
              (n.move ??= {}),
              (n.move.direction ??= this.options.direction),
              this.options.spawnColor &&
                (this.spawnColor = _e(this.options.spawnColor)),
              (this._paused = !this.options.autoPlay),
              (this._particlesOptions = n),
              (this.size =
                this.options.size ??
                (() => {
                  const t = new Ei();
                  return t.load({ height: 0, mode: "percent", width: 0 }), t;
                })()),
              (this._lifeCount = this.options.life.count ?? -1),
              (this._immortal = this._lifeCount <= 0),
              this._engine.dispatchEvent("emitterCreated", {
                container: i,
                data: { emitter: this },
              }),
              this.play();
          }
          externalPause() {
            (this._paused = !0), this.pause();
          }
          externalPlay() {
            (this._paused = !1), this.play();
          }
          getPosition() {
            if (this.options.domId) {
              const t = this.container,
                e = document.getElementById(this.options.domId);
              if (e) {
                const i = e.getBoundingClientRect();
                return {
                  x: (i.x + i.width / 2) * t.retina.pixelRatio,
                  y: (i.y + i.height / 2) * t.retina.pixelRatio,
                };
              }
            }
            return this.position;
          }
          getSize() {
            const t = this.container;
            if (this.options.domId) {
              const e = document.getElementById(this.options.domId);
              if (e) {
                const i = e.getBoundingClientRect();
                return {
                  width: i.width * t.retina.pixelRatio,
                  height: i.height * t.retina.pixelRatio,
                };
              }
            }
            return j(this.size, t.canvas.size);
          }
          pause() {
            this._paused || delete this._emitDelay;
          }
          play() {
            if (
              !this._paused &&
              this.container.retina.reduceFactor &&
              (this._lifeCount > 0 ||
                this._immortal ||
                !this.options.life.count) &&
              (this._firstSpawn ||
                this._currentSpawnDelay >= (this._spawnDelay ?? 0))
            ) {
              if (void 0 === this._emitDelay) {
                const t = ct(this.options.rate.delay);
                this._emitDelay =
                  (1e3 * t) / this.container.retina.reduceFactor;
              }
              (this._lifeCount > 0 || this._immortal) && this._prepareToDie();
            }
          }
          resize() {
            const t = this._initialPosition;
            this.position =
              t && A(t, this.container.canvas.size, y.origin)
                ? t
                : this._calcPosition();
          }
          update(t) {
            this._paused ||
              (this._firstSpawn &&
                ((this._firstSpawn = !1),
                (this._currentSpawnDelay = this._spawnDelay ?? 0),
                (this._currentEmitDelay = this._emitDelay ?? 0)),
              this._startParticlesAdded ||
                ((this._startParticlesAdded = !0),
                this._emitParticles(this.options.startCount)),
              void 0 !== this._duration &&
                ((this._currentDuration += t.value),
                this._currentDuration >= this._duration &&
                  (this.pause(),
                  void 0 !== this._spawnDelay && delete this._spawnDelay,
                  this._immortal || this._lifeCount--,
                  this._lifeCount > 0 || this._immortal
                    ? ((this.position = this._calcPosition()),
                      (this._spawnDelay =
                        (1e3 * ct(this.options.life.delay ?? 0)) /
                        this.container.retina.reduceFactor))
                    : this._destroy(),
                  (this._currentDuration -= this._duration),
                  delete this._duration)),
              void 0 !== this._spawnDelay &&
                ((this._currentSpawnDelay += t.value),
                this._currentSpawnDelay >= this._spawnDelay &&
                  (this._engine.dispatchEvent("emitterPlay", {
                    container: this.container,
                  }),
                  this.play(),
                  (this._currentSpawnDelay -= this._currentSpawnDelay),
                  delete this._spawnDelay)),
              void 0 !== this._emitDelay &&
                ((this._currentEmitDelay += t.value),
                this._currentEmitDelay >= this._emitDelay &&
                  (this._emit(), (this._currentEmitDelay -= this._emitDelay))));
          }
        }
        class Ii {
          constructor(t, e) {
            (this.container = e),
              (this._engine = t),
              (this.array = []),
              (this.emitters = []),
              (this.interactivityEmitters = {
                random: { count: 1, enable: !1 },
                value: [],
              }),
              (e.getEmitter = (t) =>
                void 0 === t || Z(t)
                  ? this.array[t || 0]
                  : this.array.find((e) => e.name === t)),
              (e.addEmitter = (t, e) => this.addEmitter(t, e)),
              (e.removeEmitter = (t) => {
                const i = e.getEmitter(t);
                i && this.removeEmitter(i);
              }),
              (e.playEmitter = (t) => {
                const i = e.getEmitter(t);
                i && i.externalPlay();
              }),
              (e.pauseEmitter = (t) => {
                const i = e.getEmitter(t);
                i && i.externalPause();
              });
          }
          addEmitter(t, e) {
            const i = new ki();
            i.load(t);
            const s = new Ri(this._engine, this, this.container, i, e);
            return this.array.push(s), s;
          }
          handleClickMode(t) {
            const e = this.emitters,
              i = this.interactivityEmitters;
            if ("emitter" !== t) return;
            let s;
            if (i && J(i.value))
              if (i.value.length > 0 && i.random.enable) {
                s = [];
                const t = [];
                for (let e = 0; e < i.random.count; e++) {
                  const o = T(i.value);
                  t.includes(o) && t.length < i.value.length
                    ? e--
                    : (t.push(o), s.push(V(i.value, o)));
                }
              } else s = i.value;
            else s = i?.value;
            const o = s ?? e,
              n = this.container.interactivity.mouse.clickPosition;
            B(o, (t) => {
              this.addEmitter(t, n);
            });
          }
          async init() {
            if (
              ((this.emitters = this.container.actualOptions.emitters),
              (this.interactivityEmitters =
                this.container.actualOptions.interactivity.modes.emitters),
              this.emitters)
            )
              if (J(this.emitters))
                for (const t of this.emitters) this.addEmitter(t);
              else this.addEmitter(this.emitters);
          }
          pause() {
            for (const t of this.array) t.pause();
          }
          play() {
            for (const t of this.array) t.play();
          }
          removeEmitter(t) {
            const e = this.array.indexOf(t);
            e >= 0 && this.array.splice(e, 1);
          }
          resize() {
            for (const t of this.array) t.resize();
          }
          stop() {
            this.array = [];
          }
          update(t) {
            for (const e of this.array) e.update(t);
          }
        }
        const zi = new Map();
        class Li {
          constructor(t) {
            this._engine = t;
          }
          addShape(t, e) {
            this.getShape(t) || zi.set(t, e);
          }
          getShape(t) {
            return zi.get(t);
          }
          getSupportedShapes() {
            return zi.keys();
          }
        }
        function Di(t, e) {
          return t + e * (ot() - 0.5);
        }
        class Hi {
          randomPosition(t, e, i) {
            if (i) return { x: Di(t.x, e.width), y: Di(t.y, e.height) };
            {
              const i = e.width / 2,
                s = e.height / 2,
                o = Math.floor(4 * ot()),
                n = 2 * (ot() - 0.5);
              switch (o) {
                case 0:
                  return { x: t.x + n * i, y: t.y - s };
                case 1:
                  return { x: t.x - i, y: t.y + n * s };
                case 2:
                  return { x: t.x + n * i, y: t.y + s };
                default:
                  return { x: t.x + i, y: t.y + n * s };
              }
            }
          }
        }
        class Bi {
          constructor(t) {
            (this._engine = t), (this.id = "emitters");
          }
          getPlugin(t) {
            return new Ii(this._engine, t);
          }
          loadOptions(t, e) {
            if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
            e?.emitters &&
              (t.emitters = B(e.emitters, (t) => {
                const e = new ki();
                return e.load(t), e;
              }));
            const i = e?.interactivity?.modes?.emitters;
            if (i)
              if (J(i))
                t.interactivity.modes.emitters = {
                  random: { count: 1, enable: !0 },
                  value: i.map((t) => {
                    const e = new ki();
                    return e.load(t), e;
                  }),
                };
              else {
                const e = i;
                if (void 0 !== e.value)
                  if (J(e.value))
                    t.interactivity.modes.emitters = {
                      random: {
                        count: e.random.count ?? 1,
                        enable: e.random.enable ?? !1,
                      },
                      value: e.value.map((t) => {
                        const e = new ki();
                        return e.load(t), e;
                      }),
                    };
                  else {
                    const i = new ki();
                    i.load(e.value),
                      (t.interactivity.modes.emitters = {
                        random: {
                          count: e.random.count ?? 1,
                          enable: e.random.enable ?? !1,
                        },
                        value: i,
                      });
                  }
                else {
                  (t.interactivity.modes.emitters = {
                    random: { count: 1, enable: !1 },
                    value: new ki(),
                  }).value.load(i);
                }
              }
          }
          needsPlugin(t) {
            if (!t) return !1;
            const e = t.emitters;
            return (
              (J(e) && !!e.length) ||
              void 0 !== e ||
              (!!t.interactivity?.events?.onClick?.mode &&
                C("emitter", t.interactivity.events.onClick.mode))
            );
          }
        }
        class Fi {
          constructor(t) {
            (this.container = t), (this.type = "external");
          }
        }
        class Ni {
          constructor() {
            (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
          }
          load(t) {
            t &&
              (void 0 !== t.delay && (this.delay = t.delay),
              void 0 !== t.quantity && (this.quantity = t.quantity),
              void 0 !== t.particles && (this.particles = E({}, t.particles)),
              void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop));
          }
        }
        class Ui extends Fi {
          constructor(t) {
            super(t), (this._delay = 0);
          }
          clear() {}
          init() {}
          async interact(t) {
            const e = this.container,
              { interactivity: i } = e;
            if (!e.retina.reduceFactor) return;
            const s = e.actualOptions.interactivity.modes.trail;
            if (!s) return;
            const o = (1e3 * s.delay) / this.container.retina.reduceFactor;
            if ((this._delay < o && (this._delay += t.value), this._delay < o))
              return;
            const n = !(
                s.pauseOnStop &&
                (i.mouse.position === this._lastPosition ||
                  (i.mouse.position?.x === this._lastPosition?.x &&
                    i.mouse.position?.y === this._lastPosition?.y))
              ),
              a = e.interactivity.mouse.position;
            a ? (this._lastPosition = { ...a }) : delete this._lastPosition,
              n &&
                e.particles.push(
                  s.quantity,
                  e.interactivity.mouse,
                  s.particles
                ),
              (this._delay -= o);
          }
          isEnabled(t) {
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity.mouse,
              o = (t?.interactivity ?? i.interactivity).events;
            return (
              (s.clicking &&
                s.inside &&
                !!s.position &&
                C("trail", o.onClick.mode)) ||
              (s.inside && !!s.position && C("trail", o.onHover.mode))
            );
          }
          loadModeOptions(t, ...e) {
            t.trail || (t.trail = new Ni());
            for (const i of e) t.trail.load(i?.trail);
          }
          reset() {}
        }
        class $i {
          constructor() {
            (this.enable = !1), (this.value = 0);
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.value && (this.value = dt(t.value)));
          }
        }
        class qi {
          constructor() {
            (this.darken = new $i()),
              (this.enable = !1),
              (this.enlighten = new $i()),
              (this.mode = "vertical"),
              (this.speed = 25);
          }
          load(t) {
            t &&
              (void 0 !== t.backColor &&
                (this.backColor = ie.create(this.backColor, t.backColor)),
              this.darken.load(t.darken),
              void 0 !== t.enable && (this.enable = t.enable),
              this.enlighten.load(t.enlighten),
              void 0 !== t.mode && (this.mode = t.mode),
              void 0 !== t.speed && (this.speed = dt(t.speed)));
          }
        }
        class ji {
          getTransformValues(t) {
            const e = t.roll?.enable && t.roll,
              i = e && e.horizontal,
              s = e && e.vertical;
            return {
              a: i ? Math.cos(e.angle) : void 0,
              d: s ? Math.sin(e.angle) : void 0,
            };
          }
          init(t) {
            !(function (t) {
              const e = t.options.roll;
              if (e?.enable)
                if (
                  ((t.roll = {
                    enable: e.enable,
                    horizontal: "horizontal" === e.mode || "both" === e.mode,
                    vertical: "vertical" === e.mode || "both" === e.mode,
                    angle: ot() * Math.PI * 2,
                    speed: ct(e.speed) / 360,
                  }),
                  e.backColor)
                )
                  t.backColor = _e(e.backColor);
                else if (e.darken.enable && e.enlighten.enable) {
                  const i = ot() >= 0.5 ? "darken" : "enlighten";
                  t.roll.alter = {
                    type: i,
                    value: ct(
                      "darken" === i ? e.darken.value : e.enlighten.value
                    ),
                  };
                } else
                  e.darken.enable
                    ? (t.roll.alter = {
                        type: "darken",
                        value: ct(e.darken.value),
                      })
                    : e.enlighten.enable &&
                      (t.roll.alter = {
                        type: "enlighten",
                        value: ct(e.enlighten.value),
                      });
              else
                t.roll = {
                  enable: !1,
                  horizontal: !1,
                  vertical: !1,
                  angle: 0,
                  speed: 0,
                };
            })(t);
          }
          isEnabled(t) {
            const e = t.options.roll;
            return !t.destroyed && !t.spawning && !!e?.enable;
          }
          loadOptions(t, ...e) {
            t.roll || (t.roll = new qi());
            for (const i of e) t.roll.load(i?.roll);
          }
          update(t, e) {
            this.isEnabled(t) &&
              (function (t, e) {
                const i = t.options.roll,
                  s = t.roll;
                if (!s || !i?.enable) return;
                const o = s.speed * e.factor,
                  n = 2 * Math.PI;
                (s.angle += o), s.angle > n && (s.angle -= n);
              })(t, e);
          }
        }
        function Qi(t, e, i) {
          t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
        }
        function Wi(t, e, i, s) {
          t.beginPath(),
            t.moveTo(e.x, e.y),
            t.lineTo(i.x, i.y),
            t.lineTo(s.x, s.y),
            t.closePath();
        }
        function Zi(t, e, i) {
          (t.fillStyle = i ?? "rgba(0,0,0,0)"),
            t.fillRect(0, 0, e.width, e.height);
        }
        function Xi(t, e, i, s) {
          i &&
            ((t.globalAlpha = s),
            t.drawImage(i, 0, 0, e.width, e.height),
            (t.globalAlpha = 1));
        }
        function Yi(t, e) {
          t.clearRect(0, 0, e.width, e.height);
        }
        function Ji(t) {
          const {
              container: e,
              context: i,
              particle: s,
              delta: o,
              colorStyles: n,
              backgroundMask: a,
              composite: r,
              radius: c,
              opacity: h,
              shadow: l,
              transform: d,
            } = t,
            u = s.getPosition(),
            p = s.rotation + (s.pathRotation ? s.velocity.angle : 0),
            g = Math.sin(p),
            f = Math.cos(p),
            y = {
              a: f * (d.a ?? 1),
              b: g * (d.b ?? 1),
              c: -g * (d.c ?? 1),
              d: f * (d.d ?? 1),
            };
          i.setTransform(y.a, y.b, y.c, y.d, u.x, u.y),
            i.beginPath(),
            a && (i.globalCompositeOperation = r);
          const v = s.shadowColor;
          l.enable &&
            v &&
            ((i.shadowBlur = l.blur),
            (i.shadowColor = Ve(v)),
            (i.shadowOffsetX = l.offset.x),
            (i.shadowOffsetY = l.offset.y)),
            n.fill && (i.fillStyle = n.fill);
          const w = s.strokeWidth ?? 0;
          (i.lineWidth = w),
            n.stroke && (i.strokeStyle = n.stroke),
            Ki(e, i, s, c, h, o),
            w > 0 && i.stroke(),
            s.close && i.closePath(),
            s.fill && i.fill(),
            ts(e, i, s, c, h, o),
            (i.globalCompositeOperation = "source-over"),
            i.setTransform(1, 0, 0, 1, 0, 0);
        }
        function Ki(t, e, i, s, o, n) {
          if (!i.shape) return;
          const a = t.drawers.get(i.shape);
          a && a.draw(e, i, s, o, n, t.retina.pixelRatio);
        }
        function ts(t, e, i, s, o, n) {
          if (!i.shape) return;
          const a = t.drawers.get(i.shape);
          a &&
            a.afterEffect &&
            a.afterEffect(e, i, s, o, n, t.retina.pixelRatio);
        }
        function es(t, e, i) {
          e.draw && e.draw(t, i);
        }
        function is(t, e, i, s) {
          e.drawParticle && e.drawParticle(t, i, s);
        }
        function ss(t, e, i) {
          return { h: t.h, s: t.s, l: t.l + ("darken" === e ? -1 : 1) * i };
        }
        function os(t, e, i) {
          const s = e[i];
          void 0 !== s && (t[i] = (t[i] ?? 1) * s);
        }
        class ns {
          constructor(t) {
            (this.container = t),
              (this._applyPostDrawUpdaters = (t) => {
                for (const e of this._postDrawUpdaters)
                  e.afterDraw && e.afterDraw(t);
              }),
              (this._applyPreDrawUpdaters = (t, e, i, s, o, n) => {
                for (const a of this._preDrawUpdaters) {
                  if (a.getColorStyles) {
                    const { fill: n, stroke: r } = a.getColorStyles(e, t, i, s);
                    n && (o.fill = n), r && (o.stroke = r);
                  }
                  if (a.getTransformValues) {
                    const t = a.getTransformValues(e);
                    for (const e in t) os(n, t, e);
                  }
                  a.beforeDraw && a.beforeDraw(e);
                }
              }),
              (this._applyResizePlugins = () => {
                for (const t of this._resizePlugins) t.resize && t.resize();
              }),
              (this._getPluginParticleColors = (t) => {
                let e, i;
                for (const s of this._colorPlugins)
                  if (
                    (!e &&
                      s.particleFillColor &&
                      (e = _e(s.particleFillColor(t))),
                    !i &&
                      s.particleStrokeColor &&
                      (i = _e(s.particleStrokeColor(t))),
                    e && i)
                  )
                    break;
                return [e, i];
              }),
              (this._initCover = () => {
                const t = this.container.actualOptions.backgroundMask.cover,
                  e = we(t.color);
                if (e) {
                  const i = { ...e, a: t.opacity };
                  this._coverColorStyle = Ve(i, i.a);
                }
              }),
              (this._initStyle = () => {
                const t = this.element,
                  e = this.container.actualOptions;
                if (t) {
                  this._fullScreen
                    ? ((this._originalStyle = E({}, t.style)),
                      this._setFullScreenStyle())
                    : this._resetOriginalStyle();
                  for (const i in e.style) {
                    if (!i || !e.style) continue;
                    const s = e.style[i];
                    s && t.style.setProperty(i, s, "important");
                  }
                }
              }),
              (this._initTrail = async () => {
                const t = this.container.actualOptions,
                  e = t.particles.move.trail,
                  i = e.fill;
                if (e.enable)
                  if (i.color) {
                    const e = we(i.color);
                    if (!e) return;
                    const s = t.particles.move.trail;
                    this._trailFill = {
                      color: { ...e },
                      opacity: 1 / s.length,
                    };
                  } else
                    await new Promise((t, s) => {
                      if (!i.image) return;
                      const o = document.createElement("img");
                      o.addEventListener("load", () => {
                        (this._trailFill = { image: o, opacity: 1 / e.length }),
                          t();
                      }),
                        o.addEventListener("error", (t) => {
                          s(t.error);
                        }),
                        (o.src = i.image);
                    });
              }),
              (this._paintBase = (t) => {
                this.draw((e) => Zi(e, this.size, t));
              }),
              (this._paintImage = (t, e) => {
                this.draw((i) => Xi(i, this.size, t, e));
              }),
              (this._repairStyle = () => {
                const t = this.element;
                t &&
                  (this._safeMutationObserver((t) => t.disconnect()),
                  this._initStyle(),
                  this.initBackground(),
                  this._safeMutationObserver((e) =>
                    e.observe(t, { attributes: !0 })
                  ));
              }),
              (this._resetOriginalStyle = () => {
                const t = this.element,
                  e = this._originalStyle;
                if (!t || !e) return;
                const i = t.style;
                (i.position = e.position),
                  (i.zIndex = e.zIndex),
                  (i.top = e.top),
                  (i.left = e.left),
                  (i.width = e.width),
                  (i.height = e.height);
              }),
              (this._safeMutationObserver = (t) => {
                this._mutationObserver && t(this._mutationObserver);
              }),
              (this._setFullScreenStyle = () => {
                const t = this.element;
                if (!t) return;
                const e = "important",
                  i = t.style;
                i.setProperty("position", "absolute", e),
                  i.setProperty(
                    "z-index",
                    this.container.actualOptions.fullScreen.zIndex.toString(10),
                    e
                  ),
                  i.setProperty("top", "0", e),
                  i.setProperty("left", "0", e),
                  i.setProperty("width", "100%", e),
                  i.setProperty("height", "100%", e);
              }),
              (this.size = { height: 0, width: 0 }),
              (this._context = null),
              (this._generated = !1),
              (this._preDrawUpdaters = []),
              (this._postDrawUpdaters = []),
              (this._resizePlugins = []),
              (this._colorPlugins = []);
          }
          get _fullScreen() {
            return this.container.actualOptions.fullScreen.enable;
          }
          clear() {
            const t = this.container.actualOptions,
              e = t.particles.move.trail,
              i = this._trailFill;
            t.backgroundMask.enable
              ? this.paint()
              : e.enable && e.length > 0 && i
              ? i.color
                ? this._paintBase(Ve(i.color, i.opacity))
                : i.image && this._paintImage(i.image, i.opacity)
              : this.draw((t) => {
                  Yi(t, this.size);
                });
          }
          destroy() {
            if ((this.stop(), this._generated)) {
              const t = this.element;
              t && t.remove();
            } else this._resetOriginalStyle();
            (this._preDrawUpdaters = []),
              (this._postDrawUpdaters = []),
              (this._resizePlugins = []),
              (this._colorPlugins = []);
          }
          draw(t) {
            const e = this._context;
            if (e) return t(e);
          }
          drawParticle(t, e) {
            if (t.spawning || t.destroyed) return;
            const i = t.getRadius();
            if (i <= 0) return;
            const s = t.getFillColor(),
              o = t.getStrokeColor() ?? s;
            let [n, a] = this._getPluginParticleColors(t);
            n || (n = s),
              a || (a = o),
              (n || a) &&
                this.draw((s) => {
                  const o = this.container,
                    r = o.actualOptions,
                    c = t.options.zIndex,
                    h = (1 - t.zIndexFactor) ** c.opacityRate,
                    l = t.bubble.opacity ?? t.opacity?.value ?? 1,
                    d = l * h,
                    u = (t.strokeOpacity ?? l) * h,
                    p = {},
                    g = { fill: n ? Ae(n, d) : void 0 };
                  (g.stroke = a ? Ae(a, u) : g.fill),
                    this._applyPreDrawUpdaters(s, t, i, d, g, p),
                    Ji({
                      container: o,
                      context: s,
                      particle: t,
                      delta: e,
                      colorStyles: g,
                      backgroundMask: r.backgroundMask.enable,
                      composite: r.backgroundMask.composite,
                      radius: i * (1 - t.zIndexFactor) ** c.sizeRate,
                      opacity: d,
                      shadow: t.options.shadow,
                      transform: p,
                    }),
                    this._applyPostDrawUpdaters(t);
                });
          }
          drawParticlePlugin(t, e, i) {
            this.draw((s) => is(s, t, e, i));
          }
          drawPlugin(t, e) {
            this.draw((i) => es(i, t, e));
          }
          async init() {
            this._safeMutationObserver((t) => t.disconnect()),
              (this._mutationObserver = P((t) => {
                for (const e of t)
                  "attributes" === e.type &&
                    "style" === e.attributeName &&
                    this._repairStyle();
              })),
              this.resize(),
              this._initStyle(),
              this._initCover();
            try {
              await this._initTrail();
            } catch (t) {
              m().error(t);
            }
            this.initBackground(),
              this._safeMutationObserver((t) => {
                this.element && t.observe(this.element, { attributes: !0 });
              }),
              this.initUpdaters(),
              this.initPlugins(),
              this.paint();
          }
          initBackground() {
            const t = this.container.actualOptions.background,
              e = this.element;
            if (!e) return;
            const i = e.style;
            if (i) {
              if (t.color) {
                const e = we(t.color);
                i.backgroundColor = e ? Ve(e, t.opacity) : "";
              } else i.backgroundColor = "";
              (i.backgroundImage = t.image || ""),
                (i.backgroundPosition = t.position || ""),
                (i.backgroundRepeat = t.repeat || ""),
                (i.backgroundSize = t.size || "");
            }
          }
          initPlugins() {
            this._resizePlugins = [];
            for (const [, t] of this.container.plugins)
              t.resize && this._resizePlugins.push(t),
                (t.particleFillColor || t.particleStrokeColor) &&
                  this._colorPlugins.push(t);
          }
          initUpdaters() {
            (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
            for (const t of this.container.particles.updaters)
              t.afterDraw && this._postDrawUpdaters.push(t),
                (t.getColorStyles || t.getTransformValues || t.beforeDraw) &&
                  this._preDrawUpdaters.push(t);
          }
          loadCanvas(e) {
            this._generated && this.element && this.element.remove(),
              (this._generated =
                e.dataset && t in e.dataset
                  ? "true" === e.dataset[t]
                  : this._generated),
              (this.element = e),
              (this.element.ariaHidden = "true"),
              (this._originalStyle = E({}, this.element.style)),
              (this.size.height = e.offsetHeight),
              (this.size.width = e.offsetWidth),
              (this._context = this.element.getContext("2d")),
              this._safeMutationObserver((t) => {
                this.element && t.observe(this.element, { attributes: !0 });
              }),
              this.container.retina.init(),
              this.initBackground();
          }
          paint() {
            const t = this.container.actualOptions;
            this.draw((e) => {
              t.backgroundMask.enable && t.backgroundMask.cover
                ? (Yi(e, this.size), this._paintBase(this._coverColorStyle))
                : this._paintBase();
            });
          }
          resize() {
            if (!this.element) return !1;
            const t = this.container,
              e = t.retina.pixelRatio,
              i = t.canvas.size,
              s = this.element.offsetWidth * e,
              o = this.element.offsetHeight * e;
            if (
              o === i.height &&
              s === i.width &&
              o === this.element.height &&
              s === this.element.width
            )
              return !1;
            const n = { ...i };
            return (
              (this.element.width = i.width = this.element.offsetWidth * e),
              (this.element.height = i.height = this.element.offsetHeight * e),
              this.container.started &&
                (this.resizeFactor = {
                  width: i.width / n.width,
                  height: i.height / n.height,
                }),
              !0
            );
          }
          stop() {
            this._safeMutationObserver((t) => t.disconnect()),
              (this._mutationObserver = void 0),
              this.draw((t) => Yi(t, this.size));
          }
          async windowResize() {
            if (!this.element || !this.resize()) return;
            const t = this.container,
              e = t.updateActualOptions();
            t.particles.setDensity(),
              this._applyResizePlugins(),
              e && (await t.refresh());
          }
        }
        function as(t, e, i, s, o) {
          if (s) {
            let s = { passive: !0 };
            Q(o) ? (s.capture = o) : void 0 !== o && (s = o),
              t.addEventListener(e, i, s);
          } else {
            const s = o;
            t.removeEventListener(e, i, s);
          }
        }
        class rs {
          constructor(t) {
            (this.container = t),
              (this._doMouseTouchClick = (t) => {
                const e = this.container,
                  i = e.actualOptions;
                if (this._canPush) {
                  const t = e.interactivity.mouse,
                    s = t.position;
                  if (!s) return;
                  (t.clickPosition = { ...s }),
                    (t.clickTime = new Date().getTime());
                  B(i.interactivity.events.onClick.mode, (t) =>
                    this.container.handleClickMode(t)
                  );
                }
                "touchend" === t.type &&
                  setTimeout(() => this._mouseTouchFinish(), 500);
              }),
              (this._handleThemeChange = (t) => {
                const e = t,
                  i = this.container,
                  s = i.options,
                  o = s.defaultThemes,
                  n = e.matches ? o.dark : o.light,
                  a = s.themes.find((t) => t.name === n);
                a && a.default.auto && i.loadTheme(n);
              }),
              (this._handleVisibilityChange = () => {
                const t = this.container,
                  e = t.actualOptions;
                this._mouseTouchFinish(),
                  e.pauseOnBlur &&
                    (document && document.hidden
                      ? ((t.pageHidden = !0), t.pause())
                      : ((t.pageHidden = !1),
                        t.getAnimationStatus() ? t.play(!0) : t.draw(!0)));
              }),
              (this._handleWindowResize = async () => {
                this._resizeTimeout &&
                  (clearTimeout(this._resizeTimeout),
                  delete this._resizeTimeout),
                  (this._resizeTimeout = setTimeout(async () => {
                    const t = this.container.canvas;
                    t && (await t.windowResize());
                  }, 1e3 * this.container.actualOptions.interactivity.events.resize.delay));
              }),
              (this._manageInteractivityListeners = (t, i) => {
                const s = this._handlers,
                  n = this.container,
                  a = n.actualOptions,
                  u = n.interactivity.element;
                if (!u) return;
                const p = u,
                  g = n.canvas.element;
                g && (g.style.pointerEvents = p === g ? "initial" : "none"),
                  (a.interactivity.events.onHover.enable ||
                    a.interactivity.events.onClick.enable) &&
                    (as(u, r, s.mouseMove, i),
                    as(u, c, s.touchStart, i),
                    as(u, l, s.touchMove, i),
                    a.interactivity.events.onClick.enable
                      ? (as(u, h, s.touchEndClick, i),
                        as(u, o, s.mouseUp, i),
                        as(u, e, s.mouseDown, i))
                      : as(u, h, s.touchEnd, i),
                    as(u, t, s.mouseLeave, i),
                    as(u, d, s.touchCancel, i));
              }),
              (this._manageListeners = (t) => {
                const e = this._handlers,
                  i = this.container,
                  s = i.actualOptions.interactivity.detectsOn,
                  o = i.canvas.element;
                let r = n;
                "window" === s
                  ? ((i.interactivity.element = window), (r = a))
                  : (i.interactivity.element =
                      "parent" === s && o
                        ? o.parentElement ?? o.parentNode
                        : o),
                  this._manageMediaMatch(t),
                  this._manageResize(t),
                  this._manageInteractivityListeners(r, t),
                  document && as(document, p, e.visibilityChange, t, !1);
              }),
              (this._manageMediaMatch = (t) => {
                const e = this._handlers,
                  i = x("(prefers-color-scheme: dark)");
                i &&
                  (void 0 === i.addEventListener
                    ? void 0 !== i.addListener &&
                      (t
                        ? i.addListener(e.oldThemeChange)
                        : i.removeListener(e.oldThemeChange))
                    : as(i, "change", e.themeChange, t));
              }),
              (this._manageResize = (t) => {
                const e = this._handlers,
                  i = this.container;
                if (!i.actualOptions.interactivity.events.resize) return;
                if ("undefined" == typeof ResizeObserver)
                  return void as(window, u, e.resize, t);
                const s = i.canvas.element;
                this._resizeObserver && !t
                  ? (s && this._resizeObserver.unobserve(s),
                    this._resizeObserver.disconnect(),
                    delete this._resizeObserver)
                  : !this._resizeObserver &&
                    t &&
                    s &&
                    ((this._resizeObserver = new ResizeObserver(async (t) => {
                      t.find((t) => t.target === s) &&
                        (await this._handleWindowResize());
                    })),
                    this._resizeObserver.observe(s));
              }),
              (this._mouseDown = () => {
                const { interactivity: t } = this.container;
                if (!t) return;
                const { mouse: e } = t;
                (e.clicking = !0), (e.downPosition = e.position);
              }),
              (this._mouseTouchClick = (t) => {
                const e = this.container,
                  i = e.actualOptions,
                  { mouse: s } = e.interactivity;
                s.inside = !0;
                let o = !1;
                const n = s.position;
                if (n && i.interactivity.events.onClick.enable) {
                  for (const [, t] of e.plugins)
                    if (
                      t.clickPositionValid &&
                      ((o = t.clickPositionValid(n)), o)
                    )
                      break;
                  o || this._doMouseTouchClick(t), (s.clicking = !1);
                }
              }),
              (this._mouseTouchFinish = () => {
                const t = this.container.interactivity;
                if (!t) return;
                const e = t.mouse;
                delete e.position,
                  delete e.clickPosition,
                  delete e.downPosition,
                  (t.status = n),
                  (e.inside = !1),
                  (e.clicking = !1);
              }),
              (this._mouseTouchMove = (t) => {
                const e = this.container,
                  i = e.actualOptions,
                  s = e.interactivity,
                  o = e.canvas.element;
                if (!s || !s.element) return;
                let n;
                if (((s.mouse.inside = !0), t.type.startsWith("pointer"))) {
                  this._canPush = !0;
                  const e = t;
                  if (s.element === window) {
                    if (o) {
                      const t = o.getBoundingClientRect();
                      n = { x: e.clientX - t.left, y: e.clientY - t.top };
                    }
                  } else if ("parent" === i.interactivity.detectsOn) {
                    const t = e.target,
                      i = e.currentTarget;
                    if (t && i && o) {
                      const s = t.getBoundingClientRect(),
                        a = i.getBoundingClientRect(),
                        r = o.getBoundingClientRect();
                      n = {
                        x: e.offsetX + 2 * s.left - (a.left + r.left),
                        y: e.offsetY + 2 * s.top - (a.top + r.top),
                      };
                    } else
                      n = {
                        x: e.offsetX ?? e.clientX,
                        y: e.offsetY ?? e.clientY,
                      };
                  } else
                    e.target === o &&
                      (n = {
                        x: e.offsetX ?? e.clientX,
                        y: e.offsetY ?? e.clientY,
                      });
                } else if (((this._canPush = "touchmove" !== t.type), o)) {
                  const e = t,
                    i = e.touches[e.touches.length - 1],
                    s = o.getBoundingClientRect();
                  n = {
                    x: i.clientX - (s.left ?? 0),
                    y: i.clientY - (s.top ?? 0),
                  };
                }
                const a = e.retina.pixelRatio;
                n && ((n.x *= a), (n.y *= a)),
                  (s.mouse.position = n),
                  (s.status = r);
              }),
              (this._touchEnd = (t) => {
                const e = t,
                  i = Array.from(e.changedTouches);
                for (const t of i) this._touches.delete(t.identifier);
                this._mouseTouchFinish();
              }),
              (this._touchEndClick = (t) => {
                const e = t,
                  i = Array.from(e.changedTouches);
                for (const t of i) this._touches.delete(t.identifier);
                this._mouseTouchClick(t);
              }),
              (this._touchStart = (t) => {
                const e = t,
                  i = Array.from(e.changedTouches);
                for (const t of i)
                  this._touches.set(t.identifier, performance.now());
                this._mouseTouchMove(t);
              }),
              (this._canPush = !0),
              (this._touches = new Map()),
              (this._handlers = {
                mouseDown: () => this._mouseDown(),
                mouseLeave: () => this._mouseTouchFinish(),
                mouseMove: (t) => this._mouseTouchMove(t),
                mouseUp: (t) => this._mouseTouchClick(t),
                touchStart: (t) => this._touchStart(t),
                touchMove: (t) => this._mouseTouchMove(t),
                touchEnd: (t) => this._touchEnd(t),
                touchCancel: (t) => this._touchEnd(t),
                touchEndClick: (t) => this._touchEndClick(t),
                visibilityChange: () => this._handleVisibilityChange(),
                themeChange: (t) => this._handleThemeChange(t),
                oldThemeChange: (t) => this._handleThemeChange(t),
                resize: () => {
                  this._handleWindowResize();
                },
              });
          }
          addListeners() {
            this._manageListeners(!0);
          }
          removeListeners() {
            this._manageListeners(!1);
          }
        }
        class cs {
          constructor() {
            (this.color = new ie()),
              (this.color.value = ""),
              (this.image = ""),
              (this.position = ""),
              (this.repeat = ""),
              (this.size = ""),
              (this.opacity = 1);
          }
          load(t) {
            t &&
              (void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              void 0 !== t.image && (this.image = t.image),
              void 0 !== t.position && (this.position = t.position),
              void 0 !== t.repeat && (this.repeat = t.repeat),
              void 0 !== t.size && (this.size = t.size),
              void 0 !== t.opacity && (this.opacity = t.opacity));
          }
        }
        class hs {
          constructor() {
            (this.color = new ie()),
              (this.color.value = "#fff"),
              (this.opacity = 1);
          }
          load(t) {
            t &&
              (void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              void 0 !== t.opacity && (this.opacity = t.opacity));
          }
        }
        class ls {
          constructor() {
            (this.composite = "destination-out"),
              (this.cover = new hs()),
              (this.enable = !1);
          }
          load(t) {
            if (t) {
              if (
                (void 0 !== t.composite && (this.composite = t.composite),
                void 0 !== t.cover)
              ) {
                const e = t.cover,
                  i = W(t.cover) ? { color: t.cover } : t.cover;
                this.cover.load(void 0 !== e.color ? e : { color: i });
              }
              void 0 !== t.enable && (this.enable = t.enable);
            }
          }
        }
        class ds {
          constructor() {
            (this.enable = !0), (this.zIndex = 0);
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.zIndex && (this.zIndex = t.zIndex));
          }
        }
        class us {
          constructor() {
            (this.enable = !1), (this.mode = []);
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.mode && (this.mode = t.mode));
          }
        }
        class ps {
          constructor() {
            (this.selectors = []),
              (this.enable = !1),
              (this.mode = []),
              (this.type = "circle");
          }
          get el() {
            return this.elementId;
          }
          set el(t) {
            this.elementId = t;
          }
          get elementId() {
            return this.ids;
          }
          set elementId(t) {
            this.ids = t;
          }
          get ids() {
            return B(this.selectors, (t) => t.replace("#", ""));
          }
          set ids(t) {
            this.selectors = B(t, (t) => `#${t}`);
          }
          load(t) {
            if (!t) return;
            const e = t.ids ?? t.elementId ?? t.el;
            void 0 !== e && (this.ids = e),
              void 0 !== t.selectors && (this.selectors = t.selectors),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.mode && (this.mode = t.mode),
              void 0 !== t.type && (this.type = t.type);
          }
        }
        class gs {
          constructor() {
            (this.enable = !1), (this.force = 2), (this.smooth = 10);
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.force && (this.force = t.force),
              void 0 !== t.smooth && (this.smooth = t.smooth));
          }
        }
        class fs {
          constructor() {
            (this.enable = !1), (this.mode = []), (this.parallax = new gs());
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.mode && (this.mode = t.mode),
              this.parallax.load(t.parallax));
          }
        }
        class ys {
          constructor() {
            (this.delay = 0.5), (this.enable = !0);
          }
          load(t) {
            void 0 !== t &&
              (void 0 !== t.delay && (this.delay = t.delay),
              void 0 !== t.enable && (this.enable = t.enable));
          }
        }
        class vs {
          constructor() {
            (this.onClick = new us()),
              (this.onDiv = new ps()),
              (this.onHover = new fs()),
              (this.resize = new ys());
          }
          get onclick() {
            return this.onClick;
          }
          set onclick(t) {
            this.onClick = t;
          }
          get ondiv() {
            return this.onDiv;
          }
          set ondiv(t) {
            this.onDiv = t;
          }
          get onhover() {
            return this.onHover;
          }
          set onhover(t) {
            this.onHover = t;
          }
          load(t) {
            if (!t) return;
            this.onClick.load(t.onClick ?? t.onclick);
            const e = t.onDiv ?? t.ondiv;
            void 0 !== e &&
              (this.onDiv = B(e, (t) => {
                const e = new ps();
                return e.load(t), e;
              })),
              this.onHover.load(t.onHover ?? t.onhover),
              Q(t.resize)
                ? (this.resize.enable = t.resize)
                : this.resize.load(t.resize);
          }
        }
        class ws {
          constructor(t, e) {
            (this._engine = t), (this._container = e);
          }
          load(t) {
            if (!t) return;
            if (!this._container) return;
            const e = this._engine.plugins.interactors.get(this._container);
            if (e)
              for (const i of e)
                i.loadModeOptions && i.loadModeOptions(this, t);
          }
        }
        class ms {
          constructor(t, e) {
            (this.detectsOn = "window"),
              (this.events = new vs()),
              (this.modes = new ws(t, e));
          }
          get detect_on() {
            return this.detectsOn;
          }
          set detect_on(t) {
            this.detectsOn = t;
          }
          load(t) {
            if (!t) return;
            const e = t.detectsOn ?? t.detect_on;
            void 0 !== e && (this.detectsOn = e),
              this.events.load(t.events),
              this.modes.load(t.modes);
          }
        }
        class bs {
          load(t) {
            t &&
              (t.position &&
                (this.position = {
                  x: t.position.x ?? 50,
                  y: t.position.y ?? 50,
                  mode: t.position.mode ?? "percent",
                }),
              t.options && (this.options = E({}, t.options)));
          }
        }
        class _s {
          constructor() {
            (this.maxWidth = 1 / 0),
              (this.options = {}),
              (this.mode = "canvas");
          }
          load(t) {
            t &&
              (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
              void 0 !== t.mode &&
                ("screen" === t.mode
                  ? (this.mode = "screen")
                  : (this.mode = "canvas")),
              void 0 !== t.options && (this.options = E({}, t.options)));
          }
        }
        class Ss {
          constructor() {
            (this.auto = !1), (this.mode = "any"), (this.value = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.auto && (this.auto = t.auto),
              void 0 !== t.mode && (this.mode = t.mode),
              void 0 !== t.value && (this.value = t.value));
          }
        }
        class xs {
          constructor() {
            (this.name = ""), (this.default = new Ss());
          }
          load(t) {
            t &&
              (void 0 !== t.name && (this.name = t.name),
              this.default.load(t.default),
              void 0 !== t.options && (this.options = E({}, t.options)));
          }
        }
        class Ps {
          constructor(t, e) {
            (this._findDefaultTheme = (t) =>
              this.themes.find(
                (e) => e.default.value && e.default.mode === t
              ) ??
              this.themes.find(
                (t) => t.default.value && "any" === t.default.mode
              )),
              (this._importPreset = (t) => {
                this.load(this._engine.plugins.getPreset(t));
              }),
              (this._engine = t),
              (this._container = e),
              (this.autoPlay = !0),
              (this.background = new cs()),
              (this.backgroundMask = new ls()),
              (this.defaultThemes = {}),
              (this.delay = 0),
              (this.fullScreen = new ds()),
              (this.detectRetina = !0),
              (this.duration = 0),
              (this.fpsLimit = 120),
              (this.interactivity = new ms(t, e)),
              (this.manualParticles = []),
              (this.particles = Oi(this._engine, this._container)),
              (this.pauseOnBlur = !0),
              (this.pauseOnOutsideViewport = !0),
              (this.responsive = []),
              (this.smooth = !1),
              (this.style = {}),
              (this.themes = []),
              (this.zLayers = 100);
          }
          get backgroundMode() {
            return this.fullScreen;
          }
          set backgroundMode(t) {
            this.fullScreen.load(t);
          }
          get fps_limit() {
            return this.fpsLimit;
          }
          set fps_limit(t) {
            this.fpsLimit = t;
          }
          get retina_detect() {
            return this.detectRetina;
          }
          set retina_detect(t) {
            this.detectRetina = t;
          }
          load(t) {
            if (!t) return;
            void 0 !== t.preset && B(t.preset, (t) => this._importPreset(t)),
              void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
              void 0 !== t.delay && (this.delay = dt(t.delay));
            const e = t.detectRetina ?? t.retina_detect;
            void 0 !== e && (this.detectRetina = e),
              void 0 !== t.duration && (this.duration = dt(t.duration));
            const i = t.fpsLimit ?? t.fps_limit;
            void 0 !== i && (this.fpsLimit = i),
              void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
              void 0 !== t.pauseOnOutsideViewport &&
                (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
              void 0 !== t.zLayers && (this.zLayers = t.zLayers),
              this.background.load(t.background);
            const s = t.fullScreen ?? t.backgroundMode;
            Q(s) ? (this.fullScreen.enable = s) : this.fullScreen.load(s),
              this.backgroundMask.load(t.backgroundMask),
              this.interactivity.load(t.interactivity),
              t.manualParticles &&
                (this.manualParticles = t.manualParticles.map((t) => {
                  const e = new bs();
                  return e.load(t), e;
                })),
              this.particles.load(t.particles),
              (this.style = E(this.style, t.style)),
              this._engine.plugins.loadOptions(this, t),
              void 0 !== t.smooth && (this.smooth = t.smooth);
            const o = this._engine.plugins.interactors.get(this._container);
            if (o) for (const e of o) e.loadOptions && e.loadOptions(this, t);
            if (void 0 !== t.responsive)
              for (const e of t.responsive) {
                const t = new _s();
                t.load(e), this.responsive.push(t);
              }
            if (
              (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
              void 0 !== t.themes)
            )
              for (const e of t.themes) {
                const t = this.themes.find((t) => t.name === e.name);
                if (t) t.load(e);
                else {
                  const t = new xs();
                  t.load(e), this.themes.push(t);
                }
              }
            (this.defaultThemes.dark = this._findDefaultTheme("dark")?.name),
              (this.defaultThemes.light =
                this._findDefaultTheme("light")?.name);
          }
          setResponsive(t, e, i) {
            this.load(i);
            const s = this.responsive.find((i) =>
              "screen" === i.mode && screen
                ? i.maxWidth > screen.availWidth
                : i.maxWidth * e > t
            );
            return this.load(s?.options), s?.maxWidth;
          }
          setTheme(t) {
            if (t) {
              const e = this.themes.find((e) => e.name === t);
              e && this.load(e.options);
            } else {
              const t = x("(prefers-color-scheme: dark)"),
                e = t && t.matches,
                i = this._findDefaultTheme(e ? "dark" : "light");
              i && this.load(i.options);
            }
          }
        }
        class Cs {
          constructor(t, e) {
            (this.container = e),
              (this._engine = t),
              (this._interactors = t.plugins.getInteractors(
                this.container,
                !0
              )),
              (this._externalInteractors = []),
              (this._particleInteractors = []);
          }
          async externalInteract(t) {
            for (const e of this._externalInteractors)
              e.isEnabled() && (await e.interact(t));
          }
          handleClickMode(t) {
            for (const e of this._externalInteractors)
              e.handleClickMode && e.handleClickMode(t);
          }
          init() {
            (this._externalInteractors = []), (this._particleInteractors = []);
            for (const t of this._interactors) {
              switch (t.type) {
                case "external":
                  this._externalInteractors.push(t);
                  break;
                case "particles":
                  this._particleInteractors.push(t);
              }
              t.init();
            }
          }
          async particlesInteract(t, e) {
            for (const i of this._externalInteractors) i.clear(t, e);
            for (const i of this._particleInteractors)
              i.isEnabled(t) && (await i.interact(t, e));
          }
          async reset(t) {
            for (const e of this._externalInteractors)
              e.isEnabled() && e.reset(t);
            for (const e of this._particleInteractors)
              e.isEnabled(t) && e.reset(t);
          }
        }
        const Os = (t) => {
          if (!C(t.outMode, t.checkModes)) return;
          const e = 2 * t.radius;
          t.coord > t.maxCoord - e
            ? t.setCb(-t.radius)
            : t.coord < e && t.setCb(t.radius);
        };
        class Ts {
          constructor(t, e, i, s, o, n) {
            (this.container = i),
              (this._calcPosition = (t, e, i, s = 0) => {
                for (const [, s] of t.plugins) {
                  const t =
                    void 0 !== s.particlePosition
                      ? s.particlePosition(e, this)
                      : void 0;
                  if (t) return f.create(t.x, t.y, i);
                }
                const o = _t({ size: t.canvas.size, position: e }),
                  n = f.create(o.x, o.y, i),
                  a = this.getRadius(),
                  r = this.options.move.outModes,
                  c = (e) => {
                    Os({
                      outMode: e,
                      checkModes: ["bounce", "bounce-horizontal"],
                      coord: n.x,
                      maxCoord: t.canvas.size.width,
                      setCb: (t) => (n.x += t),
                      radius: a,
                    });
                  },
                  h = (e) => {
                    Os({
                      outMode: e,
                      checkModes: ["bounce", "bounce-vertical"],
                      coord: n.y,
                      maxCoord: t.canvas.size.height,
                      setCb: (t) => (n.y += t),
                      radius: a,
                    });
                  };
                return (
                  c(r.left ?? r.default),
                  c(r.right ?? r.default),
                  h(r.top ?? r.default),
                  h(r.bottom ?? r.default),
                  this._checkOverlap(n, s)
                    ? this._calcPosition(t, void 0, i, s + 1)
                    : n
                );
              }),
              (this._calculateVelocity = () => {
                const t = yt(this.direction).copy(),
                  e = this.options.move;
                if ("inside" === e.direction || "outside" === e.direction)
                  return t;
                const i = (Math.PI / 180) * ct(e.angle.value),
                  s = (Math.PI / 180) * ct(e.angle.offset),
                  o = { left: s - i / 2, right: s + i / 2 };
                return (
                  e.straight || (t.angle += rt(dt(o.left, o.right))),
                  e.random && "number" == typeof e.speed && (t.length *= ot()),
                  t
                );
              }),
              (this._checkOverlap = (t, e = 0) => {
                const i = this.options.collisions,
                  s = this.getRadius();
                if (!i.enable) return !1;
                const o = i.overlap;
                if (o.enable) return !1;
                const n = o.retries;
                if (n >= 0 && e > n)
                  throw new Error(
                    `${g} particle is overlapping and can't be placed`
                  );
                return !!this.container.particles.find(
                  (e) => gt(t, e.position) < s + e.getRadius()
                );
              }),
              (this._getRollColor = (t) => {
                if (!t || !this.roll || (!this.backColor && !this.roll.alter))
                  return t;
                const e = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                  i = this.roll.horizontal ? Math.PI / 2 : 0;
                return Math.floor(
                  ((this.roll.angle ?? 0) + i) / (Math.PI / e)
                ) % 2
                  ? this.backColor
                    ? this.backColor
                    : this.roll.alter
                    ? ss(t, this.roll.alter.type, this.roll.alter.value)
                    : t
                  : t;
              }),
              (this._initPosition = (t) => {
                const e = this.container,
                  i = ct(this.options.zIndex.value);
                (this.position = this._calcPosition(e, t, nt(i, 0, e.zLayers))),
                  (this.initialPosition = this.position.copy());
                const s = e.canvas.size;
                switch (
                  ((this.moveCenter = {
                    ...q(this.options.move.center, s),
                    radius: this.options.move.center.radius ?? 0,
                    mode: this.options.move.center.mode ?? "percent",
                  }),
                  (this.direction = ft(
                    this.options.move.direction,
                    this.position,
                    this.moveCenter
                  )),
                  this.options.move.direction)
                ) {
                  case "inside":
                    this.outType = "inside";
                    break;
                  case "outside":
                    this.outType = "outside";
                }
                this.offset = y.origin;
              }),
              (this._loadShapeData = (t, e) => {
                const i = t.options[this.shape];
                if (i)
                  return E({ close: t.close, fill: t.fill }, F(i, this.id, e));
              }),
              (this._engine = t),
              this.init(e, s, o, n);
          }
          destroy(t) {
            if (this.unbreakable || this.destroyed) return;
            (this.destroyed = !0),
              (this.bubble.inRange = !1),
              (this.slow.inRange = !1);
            const e = this.container,
              i = this.pathGenerator;
            for (const [, i] of e.plugins)
              i.particleDestroyed && i.particleDestroyed(this, t);
            for (const i of e.particles.updaters)
              i.particleDestroyed && i.particleDestroyed(this, t);
            i && i.reset(this);
          }
          draw(t) {
            const e = this.container;
            for (const [, i] of e.plugins)
              e.canvas.drawParticlePlugin(i, this, t);
            e.canvas.drawParticle(this, t);
          }
          getFillColor() {
            return this._getRollColor(this.bubble.color ?? ke(this.color));
          }
          getMass() {
            return (this.getRadius() ** 2 * Math.PI) / 2;
          }
          getPosition() {
            return {
              x: this.position.x + this.offset.x,
              y: this.position.y + this.offset.y,
              z: this.position.z,
            };
          }
          getRadius() {
            return this.bubble.radius ?? this.size.value;
          }
          getStrokeColor() {
            return this._getRollColor(
              this.bubble.color ?? ke(this.strokeColor)
            );
          }
          init(t, e, i, s) {
            const o = this.container,
              n = this._engine;
            (this.id = t),
              (this.group = s),
              (this.fill = !0),
              (this.pathRotation = !1),
              (this.close = !0),
              (this.lastPathTime = 0),
              (this.destroyed = !1),
              (this.unbreakable = !1),
              (this.rotation = 0),
              (this.misplaced = !1),
              (this.retina = { maxDistance: {} }),
              (this.outType = "normal"),
              (this.ignoresResizeRatio = !0);
            const a = o.retina.pixelRatio,
              r = o.actualOptions,
              c = Oi(this._engine, o, r.particles),
              h = c.shape.type,
              { reduceDuplicates: l } = c;
            this.shape = F(h, this.id, l);
            const d = c.shape;
            if (i && i.shape && i.shape.type) {
              const t = F(i.shape.type, this.id, l);
              t && ((this.shape = t), d.load(i.shape));
            }
            (this.shapeData = this._loadShapeData(d, l)), c.load(i);
            const u = this.shapeData;
            u && c.load(u.particles);
            const p = new ms(n, o);
            p.load(o.actualOptions.interactivity),
              p.load(c.interactivity),
              (this.interactivity = p),
              (this.fill = u?.fill ?? c.shape.fill),
              (this.close = u?.close ?? c.shape.close),
              (this.options = c);
            const g = this.options.move.path;
            (this.pathDelay = 1e3 * ut(g.delay)),
              g.generator &&
                ((this.pathGenerator = this._engine.plugins.getPathGenerator(
                  g.generator
                )),
                this.pathGenerator &&
                  o.addPath(g.generator, this.pathGenerator) &&
                  this.pathGenerator.init(o)),
              o.retina.initParticle(this),
              (this.size = U(this.options.size, a)),
              (this.bubble = { inRange: !1 }),
              (this.slow = { inRange: !1, factor: 1 }),
              this._initPosition(e),
              (this.initialVelocity = this._calculateVelocity()),
              (this.velocity = this.initialVelocity.copy()),
              (this.moveDecay = 1 - ct(this.options.move.decay));
            const f = o.particles;
            (f.needsSort = f.needsSort || f.lastZIndex < this.position.z),
              (f.lastZIndex = this.position.z),
              (this.zIndexFactor = this.position.z / o.zLayers),
              (this.sides = 24);
            let y = o.drawers.get(this.shape);
            y ||
              ((y = this._engine.plugins.getShapeDrawer(this.shape)),
              y && o.drawers.set(this.shape, y)),
              y && y.loadShape && y.loadShape(this);
            const v = y?.getSidesCount;
            v && (this.sides = v(this)),
              (this.spawning = !1),
              (this.shadowColor = we(this.options.shadow.color));
            for (const t of o.particles.updaters) t.init(this);
            for (const t of o.particles.movers) t.init && t.init(this);
            y && y.particleInit && y.particleInit(o, this);
            for (const [, t] of o.plugins)
              t.particleCreated && t.particleCreated(this);
          }
          isInsideCanvas() {
            const t = this.getRadius(),
              e = this.container.canvas.size,
              i = this.position;
            return (
              i.x >= -t &&
              i.y >= -t &&
              i.y <= e.height + t &&
              i.x <= e.width + t
            );
          }
          isVisible() {
            return !this.destroyed && !this.spawning && this.isInsideCanvas();
          }
          reset() {
            for (const t of this.container.particles.updaters)
              t.reset && t.reset(this);
          }
        }
        class Vs {
          constructor(t, e) {
            (this.position = t), (this.particle = e);
          }
        }
        class As {
          constructor(t, e) {
            this.position = { x: t, y: e };
          }
        }
        class Ms extends As {
          constructor(t, e, i, s) {
            super(t, e), (this.size = { height: s, width: i });
          }
          contains(t) {
            const e = this.size.width,
              i = this.size.height,
              s = this.position;
            return t.x >= s.x && t.x <= s.x + e && t.y >= s.y && t.y <= s.y + i;
          }
          intersects(t) {
            t instanceof Gs && t.intersects(this);
            const e = this.size.width,
              i = this.size.height,
              s = this.position,
              o = t.position,
              n = t instanceof Ms ? t.size : { width: 0, height: 0 },
              a = n.width,
              r = n.height;
            return (
              o.x < s.x + e && o.x + a > s.x && o.y < s.y + i && o.y + r > s.y
            );
          }
        }
        class Gs extends As {
          constructor(t, e, i) {
            super(t, e), (this.radius = i);
          }
          contains(t) {
            return gt(t, this.position) <= this.radius;
          }
          intersects(t) {
            const e = this.position,
              i = t.position,
              s = Math.abs(i.x - e.x),
              o = Math.abs(i.y - e.y),
              n = this.radius;
            if (t instanceof Gs) {
              return n + t.radius > Math.sqrt(s ** 2 + o ** 2);
            }
            if (t instanceof Ms) {
              const { width: e, height: i } = t.size;
              return (
                Math.pow(s - e, 2) + Math.pow(o - i, 2) <= n ** 2 ||
                (s <= n + e && o <= n + i) ||
                s <= e ||
                o <= i
              );
            }
            return !1;
          }
        }
        class Es {
          constructor(t, e) {
            (this.rectangle = t),
              (this.capacity = e),
              (this._subdivide = () => {
                const { x: t, y: e } = this.rectangle.position,
                  { width: i, height: s } = this.rectangle.size,
                  { capacity: o } = this;
                for (let n = 0; n < 4; n++)
                  this._subs.push(
                    new Es(
                      new Ms(
                        t + (i / 2) * (n % 2),
                        e + (s / 2) * (Math.round(n / 2) - (n % 2)),
                        i / 2,
                        s / 2
                      ),
                      o
                    )
                  );
                this._divided = !0;
              }),
              (this._points = []),
              (this._divided = !1),
              (this._subs = []);
          }
          insert(t) {
            return (
              !!this.rectangle.contains(t.position) &&
              (this._points.length < this.capacity
                ? (this._points.push(t), !0)
                : (this._divided || this._subdivide(),
                  this._subs.some((e) => e.insert(t))))
            );
          }
          query(t, e, i) {
            const s = i || [];
            if (!t.intersects(this.rectangle)) return [];
            for (const i of this._points)
              (!t.contains(i.position) &&
                gt(t.position, i.position) > i.particle.getRadius() &&
                (!e || e(i.particle))) ||
                s.push(i.particle);
            if (this._divided) for (const i of this._subs) i.query(t, e, s);
            return s;
          }
          queryCircle(t, e, i) {
            return this.query(new Gs(t.x, t.y, e), i);
          }
          queryRectangle(t, e, i) {
            return this.query(new Ms(t.x, t.y, e.width, e.height), i);
          }
        }
        const ks = (t) =>
          new Ms(
            -t.width / 4,
            -t.height / 4,
            (3 * t.width) / 2,
            (3 * t.height) / 2
          );
        class Rs {
          constructor(t, e) {
            (this._applyDensity = (t, e, i) => {
              if (!t.number.density?.enable) return;
              const s = t.number,
                o = this._initDensityFactor(s.density),
                n = s.value,
                a = s.limit > 0 ? s.limit : n,
                r = Math.min(n, a) * o + e,
                c = Math.min(
                  this.count,
                  this.filter((t) => t.group === i).length
                );
              (this.limit = s.limit * o),
                c < r
                  ? this.push(Math.abs(r - c), void 0, t, i)
                  : c > r && this.removeQuantity(c - r, i);
            }),
              (this._initDensityFactor = (t) => {
                const e = this._container;
                if (!e.canvas.element || !t.enable) return 1;
                const i = e.canvas.element,
                  s = e.retina.pixelRatio;
                return (i.width * i.height) / (t.factor * s ** 2 * t.area);
              }),
              (this._pushParticle = (t, e, i, s) => {
                try {
                  let o = this.pool.pop();
                  o
                    ? o.init(this._nextId, t, e, i)
                    : (o = new Ts(
                        this._engine,
                        this._nextId,
                        this._container,
                        t,
                        e,
                        i
                      ));
                  let n = !0;
                  if ((s && (n = s(o)), !n)) return;
                  return (
                    this._array.push(o),
                    this._zArray.push(o),
                    this._nextId++,
                    this._engine.dispatchEvent("particleAdded", {
                      container: this._container,
                      data: { particle: o },
                    }),
                    o
                  );
                } catch (t) {
                  return void m().warning(`${g} adding particle: ${t}`);
                }
              }),
              (this._removeParticle = (t, e, i) => {
                const s = this._array[t];
                if (!s || s.group !== e) return !1;
                s.destroy(i);
                const o = this._zArray.indexOf(s);
                return (
                  this._array.splice(t, 1),
                  this._zArray.splice(o, 1),
                  this.pool.push(s),
                  this._engine.dispatchEvent("particleRemoved", {
                    container: this._container,
                    data: { particle: s },
                  }),
                  !0
                );
              }),
              (this._engine = t),
              (this._container = e),
              (this._nextId = 0),
              (this._array = []),
              (this._zArray = []),
              (this.pool = []),
              (this.limit = 0),
              (this.needsSort = !1),
              (this.lastZIndex = 0),
              (this._interactionManager = new Cs(t, e));
            const i = e.canvas.size;
            (this.quadTree = new Es(ks(i), 4)),
              (this.movers = this._engine.plugins.getMovers(e, !0)),
              (this.updaters = this._engine.plugins.getUpdaters(e, !0));
          }
          get count() {
            return this._array.length;
          }
          addManualParticles() {
            const t = this._container,
              e = t.actualOptions;
            for (const i of e.manualParticles)
              this.addParticle(
                i.position ? q(i.position, t.canvas.size) : void 0,
                i.options
              );
          }
          addParticle(t, e, i, s) {
            const o = this._container.actualOptions.particles.number.limit;
            if (o > 0) {
              const t = this.count + 1 - o;
              t > 0 && this.removeQuantity(t);
            }
            return this._pushParticle(t, e, i, s);
          }
          clear() {
            (this._array = []), (this._zArray = []);
          }
          destroy() {
            (this._array = []),
              (this._zArray = []),
              (this.movers = []),
              (this.updaters = []);
          }
          async draw(t) {
            const e = this._container;
            e.canvas.clear(), await this.update(t);
            for (const [, i] of e.plugins) e.canvas.drawPlugin(i, t);
            for (const e of this._zArray) e.draw(t);
          }
          filter(t) {
            return this._array.filter(t);
          }
          find(t) {
            return this._array.find(t);
          }
          handleClickMode(t) {
            this._interactionManager.handleClickMode(t);
          }
          init() {
            const t = this._container,
              e = t.actualOptions;
            (this.lastZIndex = 0), (this.needsSort = !1);
            let i = !1;
            (this.updaters = this._engine.plugins.getUpdaters(t, !0)),
              this._interactionManager.init();
            for (const [, e] of t.plugins)
              if (
                (void 0 !== e.particlesInitialization &&
                  (i = e.particlesInitialization()),
                i)
              )
                break;
            this._interactionManager.init();
            for (const [, e] of t.pathGenerators) e.init(t);
            if ((this.addManualParticles(), !i)) {
              for (const t in e.particles.groups) {
                const i = e.particles.groups[t];
                for (
                  let s = this.count, o = 0;
                  o < i.number?.value && s < e.particles.number.value;
                  s++, o++
                )
                  this.addParticle(void 0, i, t);
              }
              for (let t = this.count; t < e.particles.number.value; t++)
                this.addParticle();
            }
          }
          push(t, e, i, s) {
            this.pushing = !0;
            for (let o = 0; o < t; o++) this.addParticle(e?.position, i, s);
            this.pushing = !1;
          }
          async redraw() {
            this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
          }
          remove(t, e, i) {
            this.removeAt(this._array.indexOf(t), void 0, e, i);
          }
          removeAt(t, e = 1, i, s) {
            if (t < 0 || t > this.count) return;
            let o = 0;
            for (let n = t; o < e && n < this.count; n++)
              this._removeParticle(n--, i, s) && o++;
          }
          removeQuantity(t, e) {
            this.removeAt(0, t, e);
          }
          setDensity() {
            const t = this._container.actualOptions,
              e = t.particles.groups;
            for (const t in e) this._applyDensity(e[t], 0, t);
            this._applyDensity(t.particles, t.manualParticles.length);
          }
          async update(t) {
            const e = this._container,
              i = new Set();
            this.quadTree = new Es(ks(e.canvas.size), 4);
            for (const [, t] of e.pathGenerators) t.update();
            for (const [, i] of e.plugins) i.update && i.update(t);
            for (const s of this._array) {
              const o = e.canvas.resizeFactor;
              o &&
                !s.ignoresResizeRatio &&
                ((s.position.x *= o.width),
                (s.position.y *= o.height),
                (s.initialPosition.x *= o.width),
                (s.initialPosition.y *= o.height)),
                (s.ignoresResizeRatio = !1),
                await this._interactionManager.reset(s);
              for (const [, e] of this._container.plugins) {
                if (s.destroyed) break;
                e.particleUpdate && e.particleUpdate(s, t);
              }
              for (const e of this.movers) e.isEnabled(s) && e.move(s, t);
              s.destroyed
                ? i.add(s)
                : this.quadTree.insert(new Vs(s.getPosition(), s));
            }
            if (i.size) {
              const t = (t) => !i.has(t);
              (this._array = this.filter(t)),
                (this._zArray = this._zArray.filter(t)),
                this.pool.push(...i);
            }
            await this._interactionManager.externalInteract(t);
            for (const e of this._array) {
              for (const i of this.updaters) i.update(e, t);
              e.destroyed ||
                e.spawning ||
                (await this._interactionManager.particlesInteract(e, t));
            }
            if ((delete e.canvas.resizeFactor, this.needsSort)) {
              const t = this._zArray;
              t.sort((t, e) => e.position.z - t.position.z || t.id - e.id),
                (this.lastZIndex = t[t.length - 1].position.z),
                (this.needsSort = !1);
            }
          }
        }
        class Is {
          constructor(t) {
            (this.container = t),
              (this.pixelRatio = 1),
              (this.reduceFactor = 1);
          }
          init() {
            const t = this.container,
              e = t.actualOptions;
            (this.pixelRatio =
              !e.detectRetina || _() ? 1 : window.devicePixelRatio),
              (this.reduceFactor = 1);
            const i = this.pixelRatio;
            if (t.canvas.element) {
              const e = t.canvas.element;
              (t.canvas.size.width = e.offsetWidth * i),
                (t.canvas.size.height = e.offsetHeight * i);
            }
            const s = e.particles,
              o = s.move;
            (this.attractDistance = ct(o.attract.distance) * i),
              (this.maxSpeed = ct(o.gravity.maxSpeed) * i),
              (this.sizeAnimationSpeed = ct(s.size.animation.speed) * i);
          }
          initParticle(t) {
            const e = t.options,
              i = this.pixelRatio,
              s = e.move,
              o = s.distance,
              n = t.retina;
            (n.attractDistance = ct(s.attract.distance) * i),
              (n.moveDrift = ct(s.drift) * i),
              (n.moveSpeed = ct(s.speed) * i),
              (n.sizeAnimationSpeed = ct(e.size.animation.speed) * i);
            const a = n.maxDistance;
            (a.horizontal =
              void 0 !== o.horizontal ? o.horizontal * i : void 0),
              (a.vertical = void 0 !== o.vertical ? o.vertical * i : void 0),
              (n.maxSpeed = ct(s.gravity.maxSpeed) * i);
          }
        }
        function zs(t) {
          return t && !t.destroyed;
        }
        function Ls(t, e, ...i) {
          const s = new Ps(t, e);
          return Ci(s, ...i), s;
        }
        const Ds = {
          generate: (t) => t.velocity,
          init: () => {},
          update: () => {},
          reset: () => {},
        };
        class Hs {
          constructor(t, e, i) {
            (this.id = e),
              (this._intersectionManager = (t) => {
                if (zs(this) && this.actualOptions.pauseOnOutsideViewport)
                  for (const e of t)
                    e.target === this.interactivity.element &&
                      (e.isIntersecting ? this.play : this.pause)();
              }),
              (this._nextFrame = async (t) => {
                try {
                  if (
                    !this.smooth &&
                    void 0 !== this.lastFrameTime &&
                    t < this.lastFrameTime + 1e3 / this.fpsLimit
                  )
                    return void this.draw(!1);
                  this.lastFrameTime ??= t;
                  const e = (function (t, e = 60, i = !1) {
                    return { value: t, factor: i ? 60 / e : (60 * t) / 1e3 };
                  })(t - this.lastFrameTime, this.fpsLimit, this.smooth);
                  if (
                    (this.addLifeTime(e.value),
                    (this.lastFrameTime = t),
                    e.value > 1e3)
                  )
                    return void this.draw(!1);
                  if ((await this.particles.draw(e), !this.alive()))
                    return void this.destroy();
                  this.getAnimationStatus() && this.draw(!1);
                } catch (t) {
                  m().error(`${g} in animation loop`, t);
                }
              }),
              (this._engine = t),
              (this.fpsLimit = 120),
              (this.smooth = !1),
              (this._delay = 0),
              (this._duration = 0),
              (this._lifeTime = 0),
              (this._firstStart = !0),
              (this.started = !1),
              (this.destroyed = !1),
              (this._paused = !0),
              (this.lastFrameTime = 0),
              (this.zLayers = 100),
              (this.pageHidden = !1),
              (this._sourceOptions = i),
              (this._initialSourceOptions = i),
              (this.retina = new Is(this)),
              (this.canvas = new ns(this)),
              (this.particles = new Rs(this._engine, this)),
              (this.pathGenerators = new Map()),
              (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
              (this.plugins = new Map()),
              (this.drawers = new Map()),
              (this._options = Ls(this._engine, this)),
              (this.actualOptions = Ls(this._engine, this)),
              (this._eventListeners = new rs(this)),
              "undefined" != typeof IntersectionObserver &&
                IntersectionObserver &&
                (this._intersectionObserver = new IntersectionObserver((t) =>
                  this._intersectionManager(t)
                )),
              this._engine.dispatchEvent("containerBuilt", { container: this });
          }
          get options() {
            return this._options;
          }
          get sourceOptions() {
            return this._sourceOptions;
          }
          addClickHandler(t) {
            if (!zs(this)) return;
            const e = this.interactivity.element;
            if (!e) return;
            const i = (e, i, s) => {
              if (!zs(this)) return;
              const o = this.retina.pixelRatio,
                n = { x: i.x * o, y: i.y * o },
                a = this.particles.quadTree.queryCircle(n, s * o);
              t(e, a);
            };
            let s = !1,
              o = !1;
            e.addEventListener("click", (t) => {
              if (!zs(this)) return;
              const e = t,
                s = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY };
              i(t, s, 1);
            }),
              e.addEventListener("touchstart", () => {
                zs(this) && ((s = !0), (o = !1));
              }),
              e.addEventListener("touchmove", () => {
                zs(this) && (o = !0);
              }),
              e.addEventListener("touchend", (t) => {
                if (zs(this)) {
                  if (s && !o) {
                    const e = t;
                    let s = e.touches[e.touches.length - 1];
                    if (
                      !s &&
                      ((s = e.changedTouches[e.changedTouches.length - 1]), !s)
                    )
                      return;
                    const o = this.canvas.element,
                      n = o ? o.getBoundingClientRect() : void 0,
                      a = {
                        x: s.clientX - (n ? n.left : 0),
                        y: s.clientY - (n ? n.top : 0),
                      };
                    i(t, a, Math.max(s.radiusX, s.radiusY));
                  }
                  (s = !1), (o = !1);
                }
              }),
              e.addEventListener("touchcancel", () => {
                zs(this) && ((s = !1), (o = !1));
              });
          }
          addLifeTime(t) {
            this._lifeTime += t;
          }
          addPath(t, e, i = !1) {
            return (
              !(!zs(this) || (!i && this.pathGenerators.has(t))) &&
              (this.pathGenerators.set(t, e ?? Ds), !0)
            );
          }
          alive() {
            return !this._duration || this._lifeTime <= this._duration;
          }
          destroy() {
            if (!zs(this)) return;
            this.stop(), this.particles.destroy(), this.canvas.destroy();
            for (const [, t] of this.drawers) t.destroy && t.destroy(this);
            for (const t of this.drawers.keys()) this.drawers.delete(t);
            this._engine.plugins.destroy(this), (this.destroyed = !0);
            const t = this._engine.dom(),
              e = t.findIndex((t) => t === this);
            e >= 0 && t.splice(e, 1),
              this._engine.dispatchEvent("containerDestroyed", {
                container: this,
              });
          }
          draw(t) {
            if (!zs(this)) return;
            let e = t;
            this._drawAnimationFrame = requestAnimationFrame(async (t) => {
              e && ((this.lastFrameTime = void 0), (e = !1)),
                await this._nextFrame(t);
            });
          }
          async export(t, e = {}) {
            for (const [, i] of this.plugins) {
              if (!i.export) continue;
              const s = await i.export(t, e);
              if (s.supported) return s.blob;
            }
            m().error(`${g} - Export plugin with type ${t} not found`);
          }
          getAnimationStatus() {
            return !this._paused && !this.pageHidden && zs(this);
          }
          handleClickMode(t) {
            if (zs(this)) {
              this.particles.handleClickMode(t);
              for (const [, e] of this.plugins)
                e.handleClickMode && e.handleClickMode(t);
            }
          }
          async init() {
            if (!zs(this)) return;
            const t = this._engine.plugins.getSupportedShapes();
            for (const e of t) {
              const t = this._engine.plugins.getShapeDrawer(e);
              t && this.drawers.set(e, t);
            }
            (this._options = Ls(
              this._engine,
              this,
              this._initialSourceOptions,
              this.sourceOptions
            )),
              (this.actualOptions = Ls(this._engine, this, this._options));
            const e = this._engine.plugins.getAvailablePlugins(this);
            for (const [t, i] of e) this.plugins.set(t, i);
            this.retina.init(),
              await this.canvas.init(),
              this.updateActualOptions(),
              this.canvas.initBackground(),
              this.canvas.resize(),
              (this.zLayers = this.actualOptions.zLayers),
              (this._duration = 1e3 * ct(this.actualOptions.duration)),
              (this._delay = 1e3 * ct(this.actualOptions.delay)),
              (this._lifeTime = 0),
              (this.fpsLimit =
                this.actualOptions.fpsLimit > 0
                  ? this.actualOptions.fpsLimit
                  : 120),
              (this.smooth = this.actualOptions.smooth);
            for (const [, t] of this.drawers) t.init && (await t.init(this));
            for (const [, t] of this.plugins) t.init && (await t.init());
            this._engine.dispatchEvent("containerInit", { container: this }),
              this.particles.init(),
              this.particles.setDensity();
            for (const [, t] of this.plugins)
              t.particlesSetup && t.particlesSetup();
            this._engine.dispatchEvent("particlesSetup", { container: this });
          }
          async loadTheme(t) {
            zs(this) && ((this._currentTheme = t), await this.refresh());
          }
          pause() {
            if (
              zs(this) &&
              (void 0 !== this._drawAnimationFrame &&
                (cancelAnimationFrame(this._drawAnimationFrame),
                delete this._drawAnimationFrame),
              !this._paused)
            ) {
              for (const [, t] of this.plugins) t.pause && t.pause();
              this.pageHidden || (this._paused = !0),
                this._engine.dispatchEvent("containerPaused", {
                  container: this,
                });
            }
          }
          play(t) {
            if (!zs(this)) return;
            const e = this._paused || t;
            if (!this._firstStart || this.actualOptions.autoPlay) {
              if ((this._paused && (this._paused = !1), e))
                for (const [, t] of this.plugins) t.play && t.play();
              this._engine.dispatchEvent("containerPlay", { container: this }),
                this.draw(e || !1);
            } else this._firstStart = !1;
          }
          async refresh() {
            if (zs(this)) return this.stop(), this.start();
          }
          async reset() {
            if (zs(this))
              return (
                (this._initialSourceOptions = void 0),
                (this._options = Ls(this._engine, this)),
                (this.actualOptions = Ls(this._engine, this, this._options)),
                this.refresh()
              );
          }
          setNoise(t, e, i) {
            zs(this) && this.setPath(t, e, i);
          }
          setPath(t, e, i) {
            if (!t || !zs(this)) return;
            const s = { ...Ds };
            if (X(t)) (s.generate = t), e && (s.init = e), i && (s.update = i);
            else {
              const e = s;
              (s.generate = t.generate || e.generate),
                (s.init = t.init || e.init),
                (s.update = t.update || e.update);
            }
            this.addPath("default", s, !0);
          }
          async start() {
            zs(this) &&
              !this.started &&
              (await this.init(),
              (this.started = !0),
              await new Promise((t) => {
                this._delayTimeout = setTimeout(async () => {
                  this._eventListeners.addListeners(),
                    this.interactivity.element instanceof HTMLElement &&
                      this._intersectionObserver &&
                      this._intersectionObserver.observe(
                        this.interactivity.element
                      );
                  for (const [, t] of this.plugins)
                    t.start && (await t.start());
                  this._engine.dispatchEvent("containerStarted", {
                    container: this,
                  }),
                    this.play(),
                    t();
                }, this._delay);
              }));
          }
          stop() {
            if (zs(this) && this.started) {
              this._delayTimeout &&
                (clearTimeout(this._delayTimeout), delete this._delayTimeout),
                (this._firstStart = !0),
                (this.started = !1),
                this._eventListeners.removeListeners(),
                this.pause(),
                this.particles.clear(),
                this.canvas.stop(),
                this.interactivity.element instanceof HTMLElement &&
                  this._intersectionObserver &&
                  this._intersectionObserver.unobserve(
                    this.interactivity.element
                  );
              for (const [, t] of this.plugins) t.stop && t.stop();
              for (const t of this.plugins.keys()) this.plugins.delete(t);
              (this._sourceOptions = this._options),
                this._engine.dispatchEvent("containerStopped", {
                  container: this,
                });
            }
          }
          updateActualOptions() {
            this.actualOptions.responsive = [];
            const t = this.actualOptions.setResponsive(
              this.canvas.size.width,
              this.retina.pixelRatio,
              this._options
            );
            return (
              this.actualOptions.setTheme(this._currentTheme),
              this.responsiveMaxWidth !== t &&
                ((this.responsiveMaxWidth = t), !0)
            );
          }
        }
        class Bs {
          constructor() {
            this._listeners = new Map();
          }
          addEventListener(t, e) {
            this.removeEventListener(t, e);
            let i = this._listeners.get(t);
            i || ((i = []), this._listeners.set(t, i)), i.push(e);
          }
          dispatchEvent(t, e) {
            const i = this._listeners.get(t);
            i && i.forEach((t) => t(e));
          }
          hasEventListener(t) {
            return !!this._listeners.get(t);
          }
          removeAllEventListeners(t) {
            t ? this._listeners.delete(t) : (this._listeners = new Map());
          }
          removeEventListener(t, e) {
            const i = this._listeners.get(t);
            if (!i) return;
            const s = i.length,
              o = i.indexOf(e);
            o < 0 || (1 === s ? this._listeners.delete(t) : i.splice(o, 1));
          }
        }
        function Fs(t, e, i, s = !1) {
          let o = e.get(t);
          return (
            (o && !s) || ((o = [...i.values()].map((e) => e(t))), e.set(t, o)),
            o
          );
        }
        class Ns {
          constructor(t) {
            (this._engine = t),
              (this.plugins = []),
              (this._initializers = {
                interactors: new Map(),
                movers: new Map(),
                updaters: new Map(),
              }),
              (this.interactors = new Map()),
              (this.movers = new Map()),
              (this.updaters = new Map()),
              (this.presets = new Map()),
              (this.drawers = new Map()),
              (this.pathGenerators = new Map());
          }
          addInteractor(t, e) {
            this._initializers.interactors.set(t, e);
          }
          addParticleMover(t, e) {
            this._initializers.movers.set(t, e);
          }
          addParticleUpdater(t, e) {
            this._initializers.updaters.set(t, e);
          }
          addPathGenerator(t, e) {
            !this.getPathGenerator(t) && this.pathGenerators.set(t, e);
          }
          addPlugin(t) {
            !this.getPlugin(t.id) && this.plugins.push(t);
          }
          addPreset(t, e, i = !1) {
            (i || !this.getPreset(t)) && this.presets.set(t, e);
          }
          addShapeDrawer(t, e) {
            B(t, (t) => {
              !this.getShapeDrawer(t) && this.drawers.set(t, e);
            });
          }
          destroy(t) {
            this.updaters.delete(t),
              this.movers.delete(t),
              this.interactors.delete(t);
          }
          getAvailablePlugins(t) {
            const e = new Map();
            for (const i of this.plugins)
              i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
            return e;
          }
          getInteractors(t, e = !1) {
            return Fs(t, this.interactors, this._initializers.interactors, e);
          }
          getMovers(t, e = !1) {
            return Fs(t, this.movers, this._initializers.movers, e);
          }
          getPathGenerator(t) {
            return this.pathGenerators.get(t);
          }
          getPlugin(t) {
            return this.plugins.find((e) => e.id === t);
          }
          getPreset(t) {
            return this.presets.get(t);
          }
          getShapeDrawer(t) {
            return this.drawers.get(t);
          }
          getSupportedShapes() {
            return this.drawers.keys();
          }
          getUpdaters(t, e = !1) {
            return Fs(t, this.updaters, this._initializers.updaters, e);
          }
          loadOptions(t, e) {
            for (const i of this.plugins) i.loadOptions(t, e);
          }
          loadParticlesOptions(t, e, ...i) {
            const s = this.updaters.get(t);
            if (s) for (const t of s) t.loadOptions && t.loadOptions(e, ...i);
          }
        }
        class Us {
          constructor() {
            (this._configs = new Map()),
              (this._domArray = []),
              (this._eventDispatcher = new Bs()),
              (this._initialized = !1),
              (this.plugins = new Ns(this));
          }
          get configs() {
            const t = {};
            for (const [e, i] of this._configs) t[e] = i;
            return t;
          }
          get version() {
            return "2.12.0";
          }
          addConfig(t, e) {
            W(t)
              ? e && ((e.name = t), this._configs.set(t, e))
              : this._configs.set(t.name ?? "default", t);
          }
          addEventListener(t, e) {
            this._eventDispatcher.addEventListener(t, e);
          }
          async addInteractor(t, e, i = !0) {
            this.plugins.addInteractor(t, e), await this.refresh(i);
          }
          async addMover(t, e, i = !0) {
            this.plugins.addParticleMover(t, e), await this.refresh(i);
          }
          async addParticleUpdater(t, e, i = !0) {
            this.plugins.addParticleUpdater(t, e), await this.refresh(i);
          }
          async addPathGenerator(t, e, i = !0) {
            this.plugins.addPathGenerator(t, e), await this.refresh(i);
          }
          async addPlugin(t, e = !0) {
            this.plugins.addPlugin(t), await this.refresh(e);
          }
          async addPreset(t, e, i = !1, s = !0) {
            this.plugins.addPreset(t, e, i), await this.refresh(s);
          }
          async addShape(t, e, i, s, o, n = !0) {
            let a,
              r,
              c,
              h,
              l = n;
            Q(i) ? ((l = i), (r = void 0)) : (r = i),
              Q(s) ? ((l = s), (c = void 0)) : (c = s),
              Q(o) ? ((l = o), (h = void 0)) : (h = o),
              (a = X(e) ? { afterEffect: c, destroy: h, draw: e, init: r } : e),
              this.plugins.addShapeDrawer(t, a),
              await this.refresh(l);
          }
          dispatchEvent(t, e) {
            this._eventDispatcher.dispatchEvent(t, e);
          }
          dom() {
            return this._domArray;
          }
          domItem(t) {
            const e = this.dom(),
              i = e[t];
            if (i && !i.destroyed) return i;
            e.splice(t, 1);
          }
          init() {
            this._initialized || (this._initialized = !0);
          }
          async load(t, e) {
            return this.loadFromArray(t, e);
          }
          async loadFromArray(t, e, i) {
            let s;
            return (
              !(function (t) {
                return !!((e = t).id || e.element || e.url || e.options);
                var e;
              })(t)
                ? ((s = {}),
                  W(t) ? (s.id = t) : (s.options = t),
                  Z(e) ? (s.index = e) : (s.options = e ?? s.options),
                  (s.index = i ?? s.index))
                : (s = t),
              this._loadParams(s)
            );
          }
          async loadJSON(t, e, i) {
            let s, o;
            return (
              Z(e) || void 0 === e ? (s = t) : ((o = t), (s = e)),
              this._loadParams({ id: o, url: s, index: i })
            );
          }
          async refresh(t = !0) {
            t && this.dom().forEach((t) => t.refresh());
          }
          removeEventListener(t, e) {
            this._eventDispatcher.removeEventListener(t, e);
          }
          async set(t, e, i, s) {
            const o = { index: s };
            return (
              W(t) ? (o.id = t) : (o.element = t),
              e instanceof HTMLElement ? (o.element = e) : (o.options = e),
              Z(i) ? (o.index = i) : (o.options = i ?? o.options),
              this._loadParams(o)
            );
          }
          async setJSON(t, e, i, s) {
            const o = {};
            return (
              t instanceof HTMLElement
                ? ((o.element = t), (o.url = e), (o.index = i))
                : ((o.id = t), (o.element = e), (o.url = i), (o.index = s)),
              this._loadParams(o)
            );
          }
          setOnClickHandler(t) {
            const e = this.dom();
            if (!e.length)
              throw new Error(
                `${g} can only set click handlers after calling tsParticles.load()`
              );
            for (const i of e) i.addClickHandler(t);
          }
          async _loadParams(e) {
            const i = e.id ?? `tsparticles${Math.floor(1e4 * ot())}`,
              { index: s, url: o } = e,
              n = o
                ? await (async function (t) {
                    const e = F(t.url, t.index);
                    if (!e) return t.fallback;
                    const i = await fetch(e);
                    return i.ok
                      ? i.json()
                      : (m().error(
                          `${g} ${i.status} while retrieving config file`
                        ),
                        t.fallback);
                  })({ fallback: e.options, url: o, index: s })
                : e.options;
            let a = e.element ?? document.getElementById(i);
            a ||
              ((a = document.createElement("div")),
              (a.id = i),
              document.body.append(a));
            const r = F(n, s),
              c = this.dom(),
              h = c.findIndex((t) => t.id === i);
            if (h >= 0) {
              const t = this.domItem(h);
              t && !t.destroyed && (t.destroy(), c.splice(h, 1));
            }
            let l;
            if ("canvas" === a.tagName.toLowerCase())
              (l = a), (l.dataset[t] = "false");
            else {
              const e = a.getElementsByTagName("canvas");
              e.length
                ? ((l = e[0]), (l.dataset[t] = "false"))
                : ((l = document.createElement("canvas")),
                  (l.dataset[t] = "true"),
                  a.appendChild(l));
            }
            l.style.width || (l.style.width = "100%"),
              l.style.height || (l.style.height = "100%");
            const d = new Hs(this, i, r);
            return (
              h >= 0 ? c.splice(h, 0, d) : c.push(d),
              d.canvas.loadCanvas(l),
              await d.start(),
              d
            );
          }
        }
        class $s {
          constructor() {
            (this.key = "hsl"), (this.stringPrefix = "hsl");
          }
          handleColor(t) {
            const e = t.value.hsl ?? t.value;
            if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l)
              return Ce(e);
          }
          handleRangeColor(t) {
            const e = t.value.hsl ?? t.value;
            if (void 0 !== e.h && void 0 !== e.l)
              return Ce({ h: ct(e.h), l: ct(e.l), s: ct(e.s) });
          }
          parseString(t) {
            if (!t.startsWith("hsl")) return;
            const e =
              /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
                t
              );
            return e
              ? Oe({
                  a: e.length > 4 ? xt(e[5]) : 1,
                  h: parseInt(e[1], 10),
                  l: parseInt(e[3], 10),
                  s: parseInt(e[2], 10),
                })
              : void 0;
          }
        }
        class qs {
          constructor() {
            (this.key = "rgb"), (this.stringPrefix = "rgb");
          }
          handleColor(t) {
            const e = t.value.rgb ?? t.value;
            if (void 0 !== e.r) return e;
          }
          handleRangeColor(t) {
            const e = t.value.rgb ?? t.value;
            if (void 0 !== e.r) return { r: ct(e.r), g: ct(e.g), b: ct(e.b) };
          }
          parseString(t) {
            if (!t.startsWith(this.stringPrefix)) return;
            const e =
              /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
                t
              );
            return e
              ? {
                  a: e.length > 4 ? xt(e[5]) : 1,
                  b: parseInt(e[3], 10),
                  g: parseInt(e[2], 10),
                  r: parseInt(e[1], 10),
                }
              : void 0;
          }
        }
        class js {
          constructor(t) {
            (this.container = t), (this.type = "particles");
          }
        }
        const Qs = (function () {
          const t = new qs(),
            e = new $s();
          fe(t), fe(e);
          const i = new Us();
          return i.init(), i;
        })();
        _() || (window.tsParticles = Qs);
        class Ws {
          static init(t) {
            const e = new Ws(),
              i = t.selector;
            if (!i) throw new Error("No selector provided");
            const s = document.querySelector(i);
            if (!s) throw new Error("No element found for selector");
            return (
              Qs.set(i.replace(".", "").replace("!", ""), s, {
                fullScreen: { enable: !1 },
                particles: {
                  color: { value: t.color ?? "!000000" },
                  links: {
                    color: "random",
                    distance: t.minDistance ?? 120,
                    enable: t.connectParticles ?? !1,
                  },
                  move: { enable: !0, speed: t.speed ?? 0.5 },
                  number: { value: t.maxParticles ?? 100 },
                  size: { value: { min: 1, max: t.sizeVariations ?? 3 } },
                },
                responsive: t.responsive?.map((e) => ({
                  maxWidth: e.breakpoint,
                  options: {
                    particles: {
                      color: { value: e.options?.color },
                      links: {
                        distance: e.options?.minDistance,
                        enable: e.options?.connectParticles,
                      },
                      number: { value: t.maxParticles },
                      move: { enable: !0, speed: e.options?.speed },
                      size: { value: e.options?.sizeVariations },
                    },
                  },
                })),
              }).then((t) => {
                e._container = t;
              }),
              e
            );
          }
          destroy() {
            const t = this._container;
            t && t.destroy();
          }
          pauseAnimation() {
            const t = this._container;
            t && t.pause();
          }
          resumeAnimation() {
            const t = this._container;
            t && t.play();
          }
        }
        const Zs = (t) => {
          const { particlesJS: e, pJSDom: i } = ((t) => {
            const e = (e, i) => t.load(e, i);
            return (
              (e.load = (e, i, s) => {
                t.loadJSON(e, i)
                  .then((t) => {
                    t && s(t);
                  })
                  .catch(() => {
                    s(void 0);
                  });
              }),
              (e.setOnClickHandler = (e) => {
                t.setOnClickHandler(e);
              }),
              { particlesJS: e, pJSDom: t.dom() }
            );
          })(t);
          return (
            (window.particlesJS = e),
            (window.pJSDom = i),
            (window.Particles = Ws),
            { particlesJS: e, pJSDom: i, Particles: Ws }
          );
        };
        function Xs(t, e, i, s, o, n) {
          !(function (t, e) {
            const i = t.options,
              s = i.move.path;
            if (!s.enable) return;
            if (t.lastPathTime <= t.pathDelay)
              return void (t.lastPathTime += e.value);
            const o = t.pathGenerator?.generate(t, e);
            o && t.velocity.addTo(o);
            s.clamp &&
              ((t.velocity.x = nt(t.velocity.x, -1, 1)),
              (t.velocity.y = nt(t.velocity.y, -1, 1)));
            t.lastPathTime -= t.pathDelay;
          })(t, n);
          const a = t.gravity,
            r = a?.enable && a.inverse ? -1 : 1;
          o && i && (t.velocity.x += (o * n.factor) / (60 * i)),
            a?.enable &&
              i &&
              (t.velocity.y += (r * (a.acceleration * n.factor)) / (60 * i));
          const c = t.moveDecay;
          t.velocity.multTo(c);
          const h = t.velocity.mult(i);
          a?.enable &&
            s > 0 &&
            ((!a.inverse && h.y >= 0 && h.y >= s) ||
              (a.inverse && h.y <= 0 && h.y <= -s)) &&
            ((h.y = r * s), i && (t.velocity.y = h.y / i));
          const l = t.options.zIndex,
            d = (1 - t.zIndexFactor) ** l.velocityRate;
          h.multTo(d);
          const { position: u } = t;
          u.addTo(h),
            e.vibrate &&
              ((u.x += Math.sin(u.x * Math.cos(u.y))),
              (u.y += Math.cos(u.y * Math.sin(u.x))));
        }
        class Ys {
          constructor() {
            this._initSpin = (t) => {
              const e = t.container,
                i = t.options.move.spin;
              if (!i.enable) return;
              const s = i.position ?? { x: 50, y: 50 },
                o = {
                  x: (s.x / 100) * e.canvas.size.width,
                  y: (s.y / 100) * e.canvas.size.height,
                },
                n = gt(t.getPosition(), o),
                a = ct(i.acceleration);
              (t.retina.spinAcceleration = a * e.retina.pixelRatio),
                (t.spin = {
                  center: o,
                  direction:
                    t.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                  angle: t.velocity.angle,
                  radius: n,
                  acceleration: t.retina.spinAcceleration,
                });
            };
          }
          init(t) {
            const e = t.options.move.gravity;
            (t.gravity = {
              enable: e.enable,
              acceleration: ct(e.acceleration),
              inverse: e.inverse,
            }),
              this._initSpin(t);
          }
          isEnabled(t) {
            return !t.destroyed && t.options.move.enable;
          }
          move(t, e) {
            const i = t.options,
              s = i.move;
            if (!s.enable) return;
            const o = t.container,
              n = o.retina.pixelRatio,
              a = (function (t) {
                return t.slow.inRange ? t.slow.factor : 1;
              })(t),
              r =
                (t.retina.moveSpeed ??= ct(s.speed) * n) *
                o.retina.reduceFactor,
              c = (t.retina.moveDrift ??= ct(t.options.move.drift) * n),
              h = lt(i.size.value) * n,
              l =
                (r * (s.size ? t.getRadius() / h : 1) * a * (e.factor || 1)) /
                2,
              d = t.retina.maxSpeed ?? o.retina.maxSpeed;
            s.spin.enable
              ? (function (t, e) {
                  const i = t.container;
                  if (!t.spin) return;
                  const s = {
                    x: "clockwise" === t.spin.direction ? Math.cos : Math.sin,
                    y: "clockwise" === t.spin.direction ? Math.sin : Math.cos,
                  };
                  (t.position.x =
                    t.spin.center.x + t.spin.radius * s.x(t.spin.angle)),
                    (t.position.y =
                      t.spin.center.y + t.spin.radius * s.y(t.spin.angle)),
                    (t.spin.radius += t.spin.acceleration);
                  const o = Math.max(i.canvas.size.width, i.canvas.size.height);
                  t.spin.radius > o / 2
                    ? ((t.spin.radius = o / 2), (t.spin.acceleration *= -1))
                    : t.spin.radius < 0 &&
                      ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
                    (t.spin.angle += (e / 100) * (1 - t.spin.radius / o));
                })(t, l)
              : Xs(t, s, l, d, c, e),
              (function (t) {
                const e = t.initialPosition,
                  { dx: i, dy: s } = pt(e, t.position),
                  o = Math.abs(i),
                  n = Math.abs(s),
                  { maxDistance: a } = t.retina,
                  r = a.horizontal,
                  c = a.vertical;
                if (r || c)
                  if (((r && o >= r) || (c && n >= c)) && !t.misplaced)
                    (t.misplaced = (!!r && o > r) || (!!c && n > c)),
                      r && (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
                      c && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
                  else if ((!r || o < r) && (!c || n < c) && t.misplaced)
                    t.misplaced = !1;
                  else if (t.misplaced) {
                    const i = t.position,
                      s = t.velocity;
                    r &&
                      ((i.x < e.x && s.x < 0) || (i.x > e.x && s.x > 0)) &&
                      (s.x *= -ot()),
                      c &&
                        ((i.y < e.y && s.y < 0) || (i.y > e.y && s.y > 0)) &&
                        (s.y *= -ot());
                  }
              })(t);
          }
        }
        class Js {
          draw(t, e, i) {
            e.circleRange || (e.circleRange = { min: 0, max: 2 * Math.PI });
            const s = e.circleRange;
            t.arc(0, 0, i, s.min, s.max, !1);
          }
          getSidesCount() {
            return 12;
          }
          particleInit(t, e) {
            const i = e.shapeData,
              s = i?.angle ?? { max: 360, min: 0 };
            e.circleRange = Y(s)
              ? { min: (s.min * Math.PI) / 180, max: (s.max * Math.PI) / 180 }
              : { min: 0, max: (s * Math.PI) / 180 };
          }
        }
        function Ks(t, e, i, s, o) {
          if (
            !e ||
            !i.enable ||
            ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))
          )
            return;
          if (
            (e.time || (e.time = 0),
            (e.delayTime ?? 0) > 0 &&
              e.time < (e.delayTime ?? 0) &&
              (e.time += t.value),
            (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
          )
            return;
          const n = rt(i.offset),
            a = (e.velocity ?? 0) * t.factor + 3.6 * n,
            r = e.decay ?? 1;
          o && "increasing" !== e.status
            ? ((e.value -= a),
              e.value < 0 &&
                (e.loops || (e.loops = 0),
                e.loops++,
                (e.status = "increasing"),
                (e.value += e.value)))
            : ((e.value += a),
              e.value > s &&
                (e.loops || (e.loops = 0),
                e.loops++,
                o && ((e.status = "decreasing"), (e.value -= e.value % s)))),
            e.velocity && 1 !== r && (e.velocity *= r),
            e.value > s && (e.value %= s);
        }
        class to {
          constructor(t) {
            this.container = t;
          }
          init(t) {
            const e = _e(t.options.color, t.id, t.options.reduceDuplicates);
            e &&
              (t.color = Re(
                e,
                t.options.color.animation,
                this.container.retina.reduceFactor
              ));
          }
          isEnabled(t) {
            const { h: e, s: i, l: s } = t.options.color.animation,
              { color: o } = t;
            return (
              !t.destroyed &&
              !t.spawning &&
              ((void 0 !== o?.h.value && e.enable) ||
                (void 0 !== o?.s.value && i.enable) ||
                (void 0 !== o?.l.value && s.enable))
            );
          }
          update(t, e) {
            !(function (t, e) {
              const { h: i, s, l: o } = t.options.color.animation,
                { color: n } = t;
              if (!n) return;
              const { h: a, s: r, l: c } = n;
              a && Ks(e, a, i, 360, !1),
                r && Ks(e, r, s, 100, !0),
                c && Ks(e, c, o, 100, !0);
            })(t, e);
          }
        }
        class eo {
          constructor(t) {
            this.container = t;
          }
          init(t) {
            const e = t.options.opacity;
            t.opacity = U(e, 1);
            const i = e.animation;
            i.enable &&
              ((t.opacity.velocity =
                (ct(i.speed) / 100) * this.container.retina.reduceFactor),
              i.sync || (t.opacity.velocity *= ot()));
          }
          isEnabled(t) {
            return (
              !t.destroyed &&
              !t.spawning &&
              !!t.opacity &&
              t.opacity.enable &&
              ((t.opacity.maxLoops ?? 0) <= 0 ||
                ((t.opacity.maxLoops ?? 0) > 0 &&
                  (t.opacity.loops ?? 0) < (t.opacity.maxLoops ?? 0)))
            );
          }
          reset(t) {
            t.opacity && ((t.opacity.time = 0), (t.opacity.loops = 0));
          }
          update(t, e) {
            this.isEnabled(t) &&
              (function (t, e) {
                const i = t.opacity;
                if (
                  t.destroyed ||
                  !i?.enable ||
                  ((i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
                )
                  return;
                const s = i.min,
                  o = i.max,
                  n = i.decay ?? 1;
                if (
                  (i.time || (i.time = 0),
                  (i.delayTime ?? 0) > 0 &&
                    i.time < (i.delayTime ?? 0) &&
                    (i.time += e.value),
                  !((i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0)))
                ) {
                  switch (i.status) {
                    case "increasing":
                      i.value >= o
                        ? ((i.status = "decreasing"),
                          i.loops || (i.loops = 0),
                          i.loops++)
                        : (i.value += (i.velocity ?? 0) * e.factor);
                      break;
                    case "decreasing":
                      i.value <= s
                        ? ((i.status = "increasing"),
                          i.loops || (i.loops = 0),
                          i.loops++)
                        : (i.value -= (i.velocity ?? 0) * e.factor);
                  }
                  i.velocity && 1 !== i.decay && (i.velocity *= n),
                    (function (t, e, i, s) {
                      switch (t.options.opacity.animation.destroy) {
                        case "max":
                          e >= s && t.destroy();
                          break;
                        case "min":
                          e <= i && t.destroy();
                      }
                    })(t, i.value, s, o),
                    t.destroyed || (i.value = nt(i.value, s, o));
                }
              })(t, e);
          }
        }
        class io {
          constructor(t) {
            (this.container = t),
              (this.modes = [
                "bounce",
                "bounce-vertical",
                "bounce-horizontal",
                "bounceVertical",
                "bounceHorizontal",
                "split",
              ]);
          }
          update(t, e, i, s) {
            if (!this.modes.includes(s)) return;
            const o = this.container;
            let n = !1;
            for (const [, s] of o.plugins)
              if (
                (void 0 !== s.particleBounce && (n = s.particleBounce(t, i, e)),
                n)
              )
                break;
            if (n) return;
            const a = t.getPosition(),
              r = t.offset,
              c = t.getRadius(),
              h = G(a, c),
              l = o.canvas.size;
            !(function (t) {
              if (
                ("bounce" !== t.outMode &&
                  "bounce-horizontal" !== t.outMode &&
                  "bounceHorizontal" !== t.outMode &&
                  "split" !== t.outMode) ||
                ("left" !== t.direction && "right" !== t.direction)
              )
                return;
              t.bounds.right < 0 && "left" === t.direction
                ? (t.particle.position.x = t.size + t.offset.x)
                : t.bounds.left > t.canvasSize.width &&
                  "right" === t.direction &&
                  (t.particle.position.x =
                    t.canvasSize.width - t.size - t.offset.x);
              const e = t.particle.velocity.x;
              let i = !1;
              if (
                ("right" === t.direction &&
                  t.bounds.right >= t.canvasSize.width &&
                  e > 0) ||
                ("left" === t.direction && t.bounds.left <= 0 && e < 0)
              ) {
                const e = ut(t.particle.options.bounce.horizontal);
                (t.particle.velocity.x *= -e), (i = !0);
              }
              if (!i) return;
              const s = t.offset.x + t.size;
              t.bounds.right >= t.canvasSize.width && "right" === t.direction
                ? (t.particle.position.x = t.canvasSize.width - s)
                : t.bounds.left <= 0 &&
                  "left" === t.direction &&
                  (t.particle.position.x = s),
                "split" === t.outMode && t.particle.destroy();
            })({
              particle: t,
              outMode: s,
              direction: e,
              bounds: h,
              canvasSize: l,
              offset: r,
              size: c,
            }),
              (function (t) {
                if (
                  ("bounce" !== t.outMode &&
                    "bounce-vertical" !== t.outMode &&
                    "bounceVertical" !== t.outMode &&
                    "split" !== t.outMode) ||
                  ("bottom" !== t.direction && "top" !== t.direction)
                )
                  return;
                t.bounds.bottom < 0 && "top" === t.direction
                  ? (t.particle.position.y = t.size + t.offset.y)
                  : t.bounds.top > t.canvasSize.height &&
                    "bottom" === t.direction &&
                    (t.particle.position.y =
                      t.canvasSize.height - t.size - t.offset.y);
                const e = t.particle.velocity.y;
                let i = !1;
                if (
                  ("bottom" === t.direction &&
                    t.bounds.bottom >= t.canvasSize.height &&
                    e > 0) ||
                  ("top" === t.direction && t.bounds.top <= 0 && e < 0)
                ) {
                  const e = ut(t.particle.options.bounce.vertical);
                  (t.particle.velocity.y *= -e), (i = !0);
                }
                if (!i) return;
                const s = t.offset.y + t.size;
                t.bounds.bottom >= t.canvasSize.height &&
                "bottom" === t.direction
                  ? (t.particle.position.y = t.canvasSize.height - s)
                  : t.bounds.top <= 0 &&
                    "top" === t.direction &&
                    (t.particle.position.y = s),
                  "split" === t.outMode && t.particle.destroy();
              })({
                particle: t,
                outMode: s,
                direction: e,
                bounds: h,
                canvasSize: l,
                offset: r,
                size: c,
              });
          }
        }
        class so {
          constructor(t) {
            (this.container = t), (this.modes = ["destroy"]);
          }
          update(t, e, i, s) {
            if (!this.modes.includes(s)) return;
            const o = this.container;
            switch (t.outType) {
              case "normal":
              case "outside":
                if (A(t.position, o.canvas.size, y.origin, t.getRadius(), e))
                  return;
                break;
              case "inside": {
                const { dx: e, dy: i } = pt(t.position, t.moveCenter),
                  { x: s, y: o } = t.velocity;
                if (
                  (s < 0 && e > t.moveCenter.radius) ||
                  (o < 0 && i > t.moveCenter.radius) ||
                  (s >= 0 && e < -t.moveCenter.radius) ||
                  (o >= 0 && i < -t.moveCenter.radius)
                )
                  return;
                break;
              }
            }
            o.particles.remove(t, void 0, !0);
          }
        }
        class oo {
          constructor(t) {
            (this.container = t), (this.modes = ["none"]);
          }
          update(t, e, i, s) {
            if (!this.modes.includes(s)) return;
            if (
              (t.options.move.distance.horizontal &&
                ("left" === e || "right" === e)) ||
              (t.options.move.distance.vertical &&
                ("top" === e || "bottom" === e))
            )
              return;
            const o = t.options.move.gravity,
              n = this.container,
              a = n.canvas.size,
              r = t.getRadius();
            if (o.enable) {
              const i = t.position;
              ((!o.inverse && i.y > a.height + r && "bottom" === e) ||
                (o.inverse && i.y < -r && "top" === e)) &&
                n.particles.remove(t);
            } else {
              if (
                (t.velocity.y > 0 && t.position.y <= a.height + r) ||
                (t.velocity.y < 0 && t.position.y >= -r) ||
                (t.velocity.x > 0 && t.position.x <= a.width + r) ||
                (t.velocity.x < 0 && t.position.x >= -r)
              )
                return;
              A(t.position, n.canvas.size, y.origin, r, e) ||
                n.particles.remove(t);
            }
          }
        }
        class no {
          constructor(t) {
            (this.container = t), (this.modes = ["out"]);
          }
          update(t, e, i, s) {
            if (!this.modes.includes(s)) return;
            const o = this.container;
            switch (t.outType) {
              case "inside": {
                const { x: e, y: i } = t.velocity,
                  s = y.origin;
                (s.length = t.moveCenter.radius),
                  (s.angle = t.velocity.angle + Math.PI),
                  s.addTo(y.create(t.moveCenter));
                const { dx: n, dy: a } = pt(t.position, s);
                if (
                  (e <= 0 && n >= 0) ||
                  (i <= 0 && a >= 0) ||
                  (e >= 0 && n <= 0) ||
                  (i >= 0 && a <= 0)
                )
                  return;
                (t.position.x = Math.floor(
                  rt({ min: 0, max: o.canvas.size.width })
                )),
                  (t.position.y = Math.floor(
                    rt({ min: 0, max: o.canvas.size.height })
                  ));
                const { dx: r, dy: c } = pt(t.position, t.moveCenter);
                (t.direction = Math.atan2(-c, -r)),
                  (t.velocity.angle = t.direction);
                break;
              }
              default:
                if (A(t.position, o.canvas.size, y.origin, t.getRadius(), e))
                  return;
                switch (t.outType) {
                  case "outside": {
                    (t.position.x =
                      Math.floor(
                        rt({
                          min: -t.moveCenter.radius,
                          max: t.moveCenter.radius,
                        })
                      ) + t.moveCenter.x),
                      (t.position.y =
                        Math.floor(
                          rt({
                            min: -t.moveCenter.radius,
                            max: t.moveCenter.radius,
                          })
                        ) + t.moveCenter.y);
                    const { dx: e, dy: i } = pt(t.position, t.moveCenter);
                    t.moveCenter.radius &&
                      ((t.direction = Math.atan2(i, e)),
                      (t.velocity.angle = t.direction));
                    break;
                  }
                  case "normal": {
                    const i = t.options.move.warp,
                      s = o.canvas.size,
                      n = {
                        bottom: s.height + t.getRadius() + t.offset.y,
                        left: -t.getRadius() - t.offset.x,
                        right: s.width + t.getRadius() + t.offset.x,
                        top: -t.getRadius() - t.offset.y,
                      },
                      a = t.getRadius(),
                      r = G(t.position, a);
                    "right" === e && r.left > s.width + t.offset.x
                      ? ((t.position.x = n.left),
                        (t.initialPosition.x = t.position.x),
                        i ||
                          ((t.position.y = ot() * s.height),
                          (t.initialPosition.y = t.position.y)))
                      : "left" === e &&
                        r.right < -t.offset.x &&
                        ((t.position.x = n.right),
                        (t.initialPosition.x = t.position.x),
                        i ||
                          ((t.position.y = ot() * s.height),
                          (t.initialPosition.y = t.position.y))),
                      "bottom" === e && r.top > s.height + t.offset.y
                        ? (i ||
                            ((t.position.x = ot() * s.width),
                            (t.initialPosition.x = t.position.x)),
                          (t.position.y = n.top),
                          (t.initialPosition.y = t.position.y))
                        : "top" === e &&
                          r.bottom < -t.offset.y &&
                          (i ||
                            ((t.position.x = ot() * s.width),
                            (t.initialPosition.x = t.position.x)),
                          (t.position.y = n.bottom),
                          (t.initialPosition.y = t.position.y));
                    break;
                  }
                }
            }
          }
        }
        class ao {
          constructor(t) {
            (this.container = t),
              (this._updateOutMode = (t, e, i, s) => {
                for (const o of this.updaters) o.update(t, s, e, i);
              }),
              (this.updaters = [new io(t), new so(t), new no(t), new oo(t)]);
          }
          init() {}
          isEnabled(t) {
            return !t.destroyed && !t.spawning;
          }
          update(t, e) {
            const i = t.options.move.outModes;
            this._updateOutMode(t, e, i.bottom ?? i.default, "bottom"),
              this._updateOutMode(t, e, i.left ?? i.default, "left"),
              this._updateOutMode(t, e, i.right ?? i.default, "right"),
              this._updateOutMode(t, e, i.top ?? i.default, "top");
          }
        }
        class ro {
          init(t) {
            const e = t.container,
              i = t.options.size.animation;
            i.enable &&
              ((t.size.velocity =
                ((t.retina.sizeAnimationSpeed ?? e.retina.sizeAnimationSpeed) /
                  100) *
                e.retina.reduceFactor),
              i.sync || (t.size.velocity *= ot()));
          }
          isEnabled(t) {
            return (
              !t.destroyed &&
              !t.spawning &&
              t.size.enable &&
              ((t.size.maxLoops ?? 0) <= 0 ||
                ((t.size.maxLoops ?? 0) > 0 &&
                  (t.size.loops ?? 0) < (t.size.maxLoops ?? 0)))
            );
          }
          reset(t) {
            t.size.loops = 0;
          }
          update(t, e) {
            this.isEnabled(t) &&
              (function (t, e) {
                const i = t.size;
                if (
                  t.destroyed ||
                  !i ||
                  !i.enable ||
                  ((i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
                )
                  return;
                const s = (i.velocity ?? 0) * e.factor,
                  o = i.min,
                  n = i.max,
                  a = i.decay ?? 1;
                if (
                  (i.time || (i.time = 0),
                  (i.delayTime ?? 0) > 0 &&
                    i.time < (i.delayTime ?? 0) &&
                    (i.time += e.value),
                  !((i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0)))
                ) {
                  switch (i.status) {
                    case "increasing":
                      i.value >= n
                        ? ((i.status = "decreasing"),
                          i.loops || (i.loops = 0),
                          i.loops++)
                        : (i.value += s);
                      break;
                    case "decreasing":
                      i.value <= o
                        ? ((i.status = "increasing"),
                          i.loops || (i.loops = 0),
                          i.loops++)
                        : (i.value -= s);
                  }
                  i.velocity && 1 !== a && (i.velocity *= a),
                    (function (t, e, i, s) {
                      switch (t.options.size.animation.destroy) {
                        case "max":
                          e >= s && t.destroy();
                          break;
                        case "min":
                          e <= i && t.destroy();
                      }
                    })(t, i.value, o, n),
                    t.destroyed || (i.value = nt(i.value, o, n));
                }
              })(t, e);
          }
        }
        async function co(t, e = !0) {
          await (async function (t, e = !0) {
            await t.addMover("base", () => new Ys(), e);
          })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("circle", new Js(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("color", (t) => new to(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("opacity", (t) => new eo(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("outModes", (t) => new ao(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("size", () => new ro(), e);
            })(t, !1),
            await t.refresh(e);
        }
        class ho {
          constructor() {
            (this.distance = 200),
              (this.duration = 0.4),
              (this.easing = "ease-out-quad"),
              (this.factor = 1),
              (this.maxSpeed = 50),
              (this.speed = 1);
          }
          load(t) {
            t &&
              (void 0 !== t.distance && (this.distance = t.distance),
              void 0 !== t.duration && (this.duration = t.duration),
              void 0 !== t.easing && (this.easing = t.easing),
              void 0 !== t.factor && (this.factor = t.factor),
              void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
              void 0 !== t.speed && (this.speed = t.speed));
          }
        }
        class lo extends Fi {
          constructor(t, e) {
            super(e),
              (this._clickAttract = () => {
                const t = this.container;
                t.attract || (t.attract = { particles: [] });
                const { attract: e } = t;
                if (
                  (e.finish ||
                    (e.count || (e.count = 0),
                    e.count++,
                    e.count === t.particles.count && (e.finish = !0)),
                  e.clicking)
                ) {
                  const e = t.interactivity.mouse.clickPosition,
                    i = t.retina.attractModeDistance;
                  if (!i || i < 0 || !e) return;
                  this._processAttract(e, i, new Gs(e.x, e.y, i));
                } else !1 === e.clicking && (e.particles = []);
              }),
              (this._hoverAttract = () => {
                const t = this.container,
                  e = t.interactivity.mouse.position,
                  i = t.retina.attractModeDistance;
                !i ||
                  i < 0 ||
                  !e ||
                  this._processAttract(e, i, new Gs(e.x, e.y, i));
              }),
              (this._processAttract = (t, e, i) => {
                const s = this.container,
                  o = s.actualOptions.interactivity.modes.attract;
                if (!o) return;
                const n = s.particles.quadTree.query(i, (t) =>
                  this.isEnabled(t)
                );
                for (const i of n) {
                  const { dx: s, dy: n, distance: a } = pt(i.position, t),
                    r = o.speed * o.factor,
                    c = nt(it(o.easing)(1 - a / e) * r, 0, o.maxSpeed),
                    h = y.create(
                      0 === a ? r : (s / a) * c,
                      0 === a ? r : (n / a) * c
                    );
                  i.position.subFrom(h);
                }
              }),
              (this._engine = t),
              e.attract || (e.attract = { particles: [] }),
              (this.handleClickMode = (t) => {
                const i =
                  this.container.actualOptions.interactivity.modes.attract;
                if (i && "attract" === t) {
                  e.attract || (e.attract = { particles: [] }),
                    (e.attract.clicking = !0),
                    (e.attract.count = 0);
                  for (const t of e.attract.particles)
                    this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                  (e.attract.particles = []),
                    (e.attract.finish = !1),
                    setTimeout(() => {
                      e.destroyed ||
                        (e.attract || (e.attract = { particles: [] }),
                        (e.attract.clicking = !1));
                    }, 1e3 * i.duration);
                }
              });
          }
          clear() {}
          init() {
            const t = this.container,
              e = t.actualOptions.interactivity.modes.attract;
            e &&
              (t.retina.attractModeDistance = e.distance * t.retina.pixelRatio);
          }
          async interact() {
            const t = this.container,
              e = t.actualOptions,
              i = t.interactivity.status === r,
              s = e.interactivity.events,
              o = s.onHover.enable,
              n = s.onHover.mode,
              a = s.onClick.enable,
              c = s.onClick.mode;
            i && o && C("attract", n)
              ? this._hoverAttract()
              : a && C("attract", c) && this._clickAttract();
          }
          isEnabled(t) {
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity.mouse,
              o = (t?.interactivity ?? i.interactivity).events;
            if (
              !(
                (s.position && o.onHover.enable) ||
                (s.clickPosition && o.onClick.enable)
              )
            )
              return !1;
            const n = o.onHover.mode,
              a = o.onClick.mode;
            return C("attract", n) || C("attract", a);
          }
          loadModeOptions(t, ...e) {
            t.attract || (t.attract = new ho());
            for (const i of e) t.attract.load(i?.attract);
          }
          reset() {}
        }
        class uo {
          constructor() {
            this.distance = 200;
          }
          load(t) {
            t && void 0 !== t.distance && (this.distance = t.distance);
          }
        }
        class po extends Fi {
          constructor(t) {
            super(t),
              (this._processBounce = (t, e, i) => {
                const s = this.container.particles.quadTree.query(i, (t) =>
                  this.isEnabled(t)
                );
                for (const o of s)
                  i instanceof Gs
                    ? D(L(o), {
                        position: t,
                        radius: e,
                        mass: (e ** 2 * Math.PI) / 2,
                        velocity: y.origin,
                        factor: y.origin,
                      })
                    : i instanceof Ms && H(o, G(t, e));
              }),
              (this._processMouseBounce = () => {
                const t = this.container,
                  e = 10 * t.retina.pixelRatio,
                  i = t.interactivity.mouse.position,
                  s = t.retina.bounceModeDistance;
                !s ||
                  s < 0 ||
                  !i ||
                  this._processBounce(i, s, new Gs(i.x, i.y, s + e));
              }),
              (this._singleSelectorBounce = (t, e) => {
                const i = this.container,
                  s = document.querySelectorAll(t);
                s.length &&
                  s.forEach((t) => {
                    const s = t,
                      o = i.retina.pixelRatio,
                      n = {
                        x: (s.offsetLeft + s.offsetWidth / 2) * o,
                        y: (s.offsetTop + s.offsetHeight / 2) * o,
                      },
                      a = (s.offsetWidth / 2) * o,
                      r = 10 * o,
                      c =
                        "circle" === e.type
                          ? new Gs(n.x, n.y, a + r)
                          : new Ms(
                              s.offsetLeft * o - r,
                              s.offsetTop * o - r,
                              s.offsetWidth * o + 2 * r,
                              s.offsetHeight * o + 2 * r
                            );
                    this._processBounce(n, a, c);
                  });
              });
          }
          clear() {}
          init() {
            const t = this.container,
              e = t.actualOptions.interactivity.modes.bounce;
            e &&
              (t.retina.bounceModeDistance = e.distance * t.retina.pixelRatio);
          }
          async interact() {
            const t = this.container,
              e = t.actualOptions.interactivity.events,
              i = t.interactivity.status === r,
              s = e.onHover.enable,
              o = e.onHover.mode,
              n = e.onDiv;
            i && s && C("bounce", o)
              ? this._processMouseBounce()
              : R("bounce", n, (t, e) => this._singleSelectorBounce(t, e));
          }
          isEnabled(t) {
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity.mouse,
              o = (t?.interactivity ?? i.interactivity).events,
              n = o.onDiv;
            return (
              (s.position && o.onHover.enable && C("bounce", o.onHover.mode)) ||
              k("bounce", n)
            );
          }
          loadModeOptions(t, ...e) {
            t.bounce || (t.bounce = new uo());
            for (const i of e) t.bounce.load(i?.bounce);
          }
          reset() {}
        }
        class go {
          constructor() {
            (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
          }
          load(t) {
            if (t) {
              if (
                (void 0 !== t.distance && (this.distance = t.distance),
                void 0 !== t.duration && (this.duration = t.duration),
                void 0 !== t.mix && (this.mix = t.mix),
                void 0 !== t.opacity && (this.opacity = t.opacity),
                void 0 !== t.color)
              ) {
                const e = J(this.color) ? void 0 : this.color;
                this.color = B(t.color, (t) => ie.create(e, t));
              }
              void 0 !== t.size && (this.size = t.size);
            }
          }
        }
        class fo extends go {
          constructor() {
            super(), (this.selectors = []);
          }
          get ids() {
            return B(this.selectors, (t) => t.replace("#", ""));
          }
          set ids(t) {
            this.selectors = B(t, (t) => `#${t}`);
          }
          load(t) {
            super.load(t),
              t &&
                (void 0 !== t.ids && (this.ids = t.ids),
                void 0 !== t.selectors && (this.selectors = t.selectors));
          }
        }
        class yo extends go {
          load(t) {
            super.load(t),
              t &&
                (this.divs = B(t.divs, (t) => {
                  const e = new fo();
                  return e.load(t), e;
                }));
          }
        }
        function vo(t, e, i, s) {
          if (e >= i) {
            return nt(t + (e - i) * s, t, e);
          }
          if (e < i) {
            return nt(t - (i - e) * s, e, t);
          }
        }
        class wo extends Fi {
          constructor(t) {
            super(t),
              (this._clickBubble = () => {
                const t = this.container,
                  e = t.actualOptions,
                  i = t.interactivity.mouse.clickPosition,
                  s = e.interactivity.modes.bubble;
                if (!s || !i) return;
                t.bubble || (t.bubble = {});
                const o = t.retina.bubbleModeDistance;
                if (!o || o < 0) return;
                const n = t.particles.quadTree.queryCircle(i, o, (t) =>
                    this.isEnabled(t)
                  ),
                  { bubble: a } = t;
                for (const e of n) {
                  if (!a.clicking) continue;
                  e.bubble.inRange = !a.durationEnd;
                  const n = gt(e.getPosition(), i),
                    r =
                      (new Date().getTime() -
                        (t.interactivity.mouse.clickTime || 0)) /
                      1e3;
                  r > s.duration && (a.durationEnd = !0),
                    r > 2 * s.duration &&
                      ((a.clicking = !1), (a.durationEnd = !1));
                  const c = {
                    bubbleObj: {
                      optValue: t.retina.bubbleModeSize,
                      value: e.bubble.radius,
                    },
                    particlesObj: {
                      optValue: lt(e.options.size.value) * t.retina.pixelRatio,
                      value: e.size.value,
                    },
                    type: "size",
                  };
                  this._process(e, n, r, c);
                  const h = {
                    bubbleObj: { optValue: s.opacity, value: e.bubble.opacity },
                    particlesObj: {
                      optValue: lt(e.options.opacity.value),
                      value: e.opacity?.value ?? 1,
                    },
                    type: "opacity",
                  };
                  this._process(e, n, r, h),
                    !a.durationEnd && n <= o
                      ? this._hoverBubbleColor(e, n)
                      : delete e.bubble.color;
                }
              }),
              (this._hoverBubble = () => {
                const t = this.container,
                  e = t.interactivity.mouse.position,
                  i = t.retina.bubbleModeDistance;
                if (!i || i < 0 || void 0 === e) return;
                const s = t.particles.quadTree.queryCircle(e, i, (t) =>
                  this.isEnabled(t)
                );
                for (const o of s) {
                  o.bubble.inRange = !0;
                  const s = gt(o.getPosition(), e),
                    a = 1 - s / i;
                  s <= i
                    ? a >= 0 &&
                      t.interactivity.status === r &&
                      (this._hoverBubbleSize(o, a),
                      this._hoverBubbleOpacity(o, a),
                      this._hoverBubbleColor(o, a))
                    : this.reset(o),
                    t.interactivity.status === n && this.reset(o);
                }
              }),
              (this._hoverBubbleColor = (t, e, i) => {
                const s = this.container.actualOptions,
                  o = i ?? s.interactivity.modes.bubble;
                if (o) {
                  if (!t.bubble.finalColor) {
                    const e = o.color;
                    if (!e) return;
                    const i = F(e);
                    t.bubble.finalColor = _e(i);
                  }
                  if (t.bubble.finalColor)
                    if (o.mix) {
                      t.bubble.color = void 0;
                      const i = t.getFillColor();
                      t.bubble.color = i
                        ? Se(Me(i, t.bubble.finalColor, 1 - e, e))
                        : t.bubble.finalColor;
                    } else t.bubble.color = t.bubble.finalColor;
                }
              }),
              (this._hoverBubbleOpacity = (t, e, i) => {
                const s = this.container.actualOptions,
                  o = i?.opacity ?? s.interactivity.modes.bubble?.opacity;
                if (!o) return;
                const n = t.options.opacity.value,
                  a = vo(t.opacity?.value ?? 1, o, lt(n), e);
                void 0 !== a && (t.bubble.opacity = a);
              }),
              (this._hoverBubbleSize = (t, e, i) => {
                const s = this.container,
                  o = i?.size
                    ? i.size * s.retina.pixelRatio
                    : s.retina.bubbleModeSize;
                if (void 0 === o) return;
                const n = lt(t.options.size.value) * s.retina.pixelRatio,
                  a = vo(t.size.value, o, n, e);
                void 0 !== a && (t.bubble.radius = a);
              }),
              (this._process = (t, e, i, s) => {
                const o = this.container,
                  n = s.bubbleObj.optValue,
                  a = o.actualOptions.interactivity.modes.bubble;
                if (!a || void 0 === n) return;
                const r = a.duration,
                  c = o.retina.bubbleModeDistance,
                  h = s.particlesObj.optValue,
                  l = s.bubbleObj.value,
                  d = s.particlesObj.value || 0,
                  u = s.type;
                if (c && !(c < 0) && n !== h)
                  if ((o.bubble || (o.bubble = {}), o.bubble.durationEnd))
                    l &&
                      ("size" === u && delete t.bubble.radius,
                      "opacity" === u && delete t.bubble.opacity);
                  else if (e <= c) {
                    if ((l ?? d) !== n) {
                      const e = d - (i * (d - n)) / r;
                      "size" === u && (t.bubble.radius = e),
                        "opacity" === u && (t.bubble.opacity = e);
                    }
                  } else
                    "size" === u && delete t.bubble.radius,
                      "opacity" === u && delete t.bubble.opacity;
              }),
              (this._singleSelectorHover = (t, e, i) => {
                const s = this.container,
                  o = document.querySelectorAll(e),
                  n = s.actualOptions.interactivity.modes.bubble;
                n &&
                  o.length &&
                  o.forEach((e) => {
                    const o = e,
                      a = s.retina.pixelRatio,
                      r = {
                        x: (o.offsetLeft + o.offsetWidth / 2) * a,
                        y: (o.offsetTop + o.offsetHeight / 2) * a,
                      },
                      c = (o.offsetWidth / 2) * a,
                      h =
                        "circle" === i.type
                          ? new Gs(r.x, r.y, c)
                          : new Ms(
                              o.offsetLeft * a,
                              o.offsetTop * a,
                              o.offsetWidth * a,
                              o.offsetHeight * a
                            ),
                      l = s.particles.quadTree.query(h, (t) =>
                        this.isEnabled(t)
                      );
                    for (const e of l) {
                      if (!h.contains(e.getPosition())) continue;
                      e.bubble.inRange = !0;
                      const i = z(n.divs, o);
                      (e.bubble.div && e.bubble.div === o) ||
                        (this.clear(e, t, !0), (e.bubble.div = o)),
                        this._hoverBubbleSize(e, 1, i),
                        this._hoverBubbleOpacity(e, 1, i),
                        this._hoverBubbleColor(e, 1, i);
                    }
                  });
              }),
              t.bubble || (t.bubble = {}),
              (this.handleClickMode = (e) => {
                "bubble" === e &&
                  (t.bubble || (t.bubble = {}), (t.bubble.clicking = !0));
              });
          }
          clear(t, e, i) {
            (t.bubble.inRange && !i) ||
              (delete t.bubble.div,
              delete t.bubble.opacity,
              delete t.bubble.radius,
              delete t.bubble.color);
          }
          init() {
            const t = this.container,
              e = t.actualOptions.interactivity.modes.bubble;
            e &&
              ((t.retina.bubbleModeDistance = e.distance * t.retina.pixelRatio),
              void 0 !== e.size &&
                (t.retina.bubbleModeSize = e.size * t.retina.pixelRatio));
          }
          async interact(t) {
            const e = this.container.actualOptions.interactivity.events,
              i = e.onHover,
              s = e.onClick,
              o = i.enable,
              n = i.mode,
              a = s.enable,
              r = s.mode,
              c = e.onDiv;
            o && C("bubble", n)
              ? this._hoverBubble()
              : a && C("bubble", r)
              ? this._clickBubble()
              : R("bubble", c, (e, i) => this._singleSelectorHover(t, e, i));
          }
          isEnabled(t) {
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity.mouse,
              o = (t?.interactivity ?? i.interactivity).events,
              { onClick: n, onDiv: a, onHover: r } = o,
              c = k("bubble", a);
            return (
              !!(
                c ||
                (r.enable && s.position) ||
                (n.enable && s.clickPosition)
              ) &&
              (C("bubble", r.mode) || C("bubble", n.mode) || c)
            );
          }
          loadModeOptions(t, ...e) {
            t.bubble || (t.bubble = new yo());
            for (const i of e) t.bubble.load(i?.bubble);
          }
          reset(t) {
            t.bubble.inRange = !1;
          }
        }
        class mo {
          constructor() {
            this.opacity = 0.5;
          }
          load(t) {
            t && void 0 !== t.opacity && (this.opacity = t.opacity);
          }
        }
        class bo {
          constructor() {
            (this.distance = 80), (this.links = new mo()), (this.radius = 60);
          }
          get lineLinked() {
            return this.links;
          }
          set lineLinked(t) {
            this.links = t;
          }
          get line_linked() {
            return this.links;
          }
          set line_linked(t) {
            this.links = t;
          }
          load(t) {
            t &&
              (void 0 !== t.distance && (this.distance = t.distance),
              this.links.load(t.links ?? t.lineLinked ?? t.line_linked),
              void 0 !== t.radius && (this.radius = t.radius));
          }
        }
        function _o(t, e, i, s) {
          const o = t.actualOptions.interactivity.modes.connect;
          if (o)
            return (function (t, e, i, s) {
              const o = Math.floor(i.getRadius() / e.getRadius()),
                n = e.getFillColor(),
                a = i.getFillColor();
              if (!n || !a) return;
              const r = e.getPosition(),
                c = i.getPosition(),
                h = Me(n, a, e.getRadius(), i.getRadius()),
                l = t.createLinearGradient(r.x, r.y, c.x, c.y);
              return (
                l.addColorStop(0, Ae(n, s)),
                l.addColorStop(o > 1 ? 1 : o, Ve(h, s)),
                l.addColorStop(1, Ae(a, s)),
                l
              );
            })(e, i, s, o.links.opacity);
        }
        function So(t, e, i) {
          t.canvas.draw((s) => {
            const o = _o(t, s, e, i);
            if (!o) return;
            const n = e.getPosition(),
              a = i.getPosition();
            !(function (t, e, i, s, o) {
              Qi(t, s, o), (t.lineWidth = e), (t.strokeStyle = i), t.stroke();
            })(s, e.retina.linksWidth ?? 0, o, n, a);
          });
        }
        class xo extends Fi {
          constructor(t) {
            super(t);
          }
          clear() {}
          init() {
            const t = this.container,
              e = t.actualOptions.interactivity.modes.connect;
            e &&
              ((t.retina.connectModeDistance =
                e.distance * t.retina.pixelRatio),
              (t.retina.connectModeRadius = e.radius * t.retina.pixelRatio));
          }
          async interact() {
            const t = this.container;
            if (
              t.actualOptions.interactivity.events.onHover.enable &&
              "pointermove" === t.interactivity.status
            ) {
              const e = t.interactivity.mouse.position;
              if (
                !t.retina.connectModeDistance ||
                t.retina.connectModeDistance < 0 ||
                !t.retina.connectModeRadius ||
                t.retina.connectModeRadius < 0 ||
                !e
              )
                return;
              const i = Math.abs(t.retina.connectModeRadius),
                s = t.particles.quadTree.queryCircle(e, i, (t) =>
                  this.isEnabled(t)
                );
              let o = 0;
              for (const e of s) {
                const i = e.getPosition();
                for (const n of s.slice(o + 1)) {
                  const s = n.getPosition(),
                    o = Math.abs(t.retina.connectModeDistance),
                    a = Math.abs(i.x - s.x),
                    r = Math.abs(i.y - s.y);
                  a < o && r < o && So(t, e, n);
                }
                ++o;
              }
            }
          }
          isEnabled(t) {
            const e = this.container,
              i = e.interactivity.mouse,
              s = (t?.interactivity ?? e.actualOptions.interactivity).events;
            return (
              !(!s.onHover.enable || !i.position) &&
              C("connect", s.onHover.mode)
            );
          }
          loadModeOptions(t, ...e) {
            t.connect || (t.connect = new bo());
            for (const i of e) t.connect.load(i?.connect);
          }
          reset() {}
        }
        class Po {
          constructor() {
            (this.blink = !1), (this.consent = !1), (this.opacity = 1);
          }
          load(t) {
            t &&
              (void 0 !== t.blink && (this.blink = t.blink),
              void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              void 0 !== t.consent && (this.consent = t.consent),
              void 0 !== t.opacity && (this.opacity = t.opacity));
          }
        }
        class Co {
          constructor() {
            (this.distance = 100), (this.links = new Po());
          }
          get lineLinked() {
            return this.links;
          }
          set lineLinked(t) {
            this.links = t;
          }
          get line_linked() {
            return this.links;
          }
          set line_linked(t) {
            this.links = t;
          }
          load(t) {
            t &&
              (void 0 !== t.distance && (this.distance = t.distance),
              this.links.load(t.links ?? t.lineLinked ?? t.line_linked));
          }
        }
        function Oo(t, e, i, s, o) {
          t.canvas.draw((t) => {
            const n = e.getPosition();
            !(function (t, e, i, s, o, n) {
              Qi(t, i, s),
                (t.strokeStyle = Ve(o, n)),
                (t.lineWidth = e),
                t.stroke();
            })(t, e.retina.linksWidth ?? 0, n, o, i, s);
          });
        }
        class To extends Fi {
          constructor(t) {
            super(t);
          }
          clear() {}
          init() {
            const t = this.container,
              e = t.actualOptions.interactivity.modes.grab;
            e && (t.retina.grabModeDistance = e.distance * t.retina.pixelRatio);
          }
          async interact() {
            const t = this.container,
              e = t.actualOptions.interactivity;
            if (
              !e.modes.grab ||
              !e.events.onHover.enable ||
              t.interactivity.status !== r
            )
              return;
            const i = t.interactivity.mouse.position;
            if (!i) return;
            const s = t.retina.grabModeDistance;
            if (!s || s < 0) return;
            const o = t.particles.quadTree.queryCircle(i, s, (t) =>
              this.isEnabled(t)
            );
            for (const n of o) {
              const o = gt(n.getPosition(), i);
              if (o > s) continue;
              const a = e.modes.grab.links,
                r = a.opacity,
                c = r - (o * r) / s;
              if (c <= 0) continue;
              const h = a.color ?? n.options.links?.color;
              if (!t.particles.grabLineColor && h) {
                const i = e.modes.grab.links;
                t.particles.grabLineColor = Ee(h, i.blink, i.consent);
              }
              const l = Ge(n, void 0, t.particles.grabLineColor);
              l && Oo(t, n, l, c, i);
            }
          }
          isEnabled(t) {
            const e = this.container,
              i = e.interactivity.mouse,
              s = (t?.interactivity ?? e.actualOptions.interactivity).events;
            return (
              s.onHover.enable && !!i.position && C("grab", s.onHover.mode)
            );
          }
          loadModeOptions(t, ...e) {
            t.grab || (t.grab = new Co());
            for (const i of e) t.grab.load(i?.grab);
          }
          reset() {}
        }
        class Vo extends Fi {
          constructor(t) {
            super(t),
              (this.handleClickMode = (t) => {
                if ("pause" !== t) return;
                const e = this.container;
                e.getAnimationStatus() ? e.pause() : e.play();
              });
          }
          clear() {}
          init() {}
          async interact() {}
          isEnabled() {
            return !0;
          }
          reset() {}
        }
        class Ao {
          constructor() {
            (this.default = !0), (this.groups = []), (this.quantity = 4);
          }
          get particles_nb() {
            return this.quantity;
          }
          set particles_nb(t) {
            this.quantity = dt(t);
          }
          load(t) {
            if (!t) return;
            void 0 !== t.default && (this.default = t.default),
              void 0 !== t.groups && (this.groups = t.groups.map((t) => t)),
              this.groups.length || (this.default = !0);
            const e = t.quantity ?? t.particles_nb;
            void 0 !== e && (this.quantity = dt(e));
          }
        }
        class Mo extends Fi {
          constructor(t) {
            super(t),
              (this.handleClickMode = (t) => {
                if ("push" !== t) return;
                const e = this.container,
                  i = e.actualOptions.interactivity.modes.push;
                if (!i) return;
                const s = ct(i.quantity);
                if (s <= 0) return;
                const o = V([void 0, ...i.groups]),
                  n =
                    void 0 !== o ? e.actualOptions.particles.groups[o] : void 0;
                e.particles.push(s, e.interactivity.mouse, n, o);
              });
          }
          clear() {}
          init() {}
          async interact() {}
          isEnabled() {
            return !0;
          }
          loadModeOptions(t, ...e) {
            t.push || (t.push = new Ao());
            for (const i of e) t.push.load(i?.push);
          }
          reset() {}
        }
        class Go {
          constructor() {
            this.quantity = 2;
          }
          get particles_nb() {
            return this.quantity;
          }
          set particles_nb(t) {
            this.quantity = dt(t);
          }
          load(t) {
            if (!t) return;
            const e = t.quantity ?? t.particles_nb;
            void 0 !== e && (this.quantity = dt(e));
          }
        }
        class Eo extends Fi {
          constructor(t) {
            super(t),
              (this.handleClickMode = (t) => {
                const e = this.container,
                  i = e.actualOptions;
                if (!i.interactivity.modes.remove || "remove" !== t) return;
                const s = ct(i.interactivity.modes.remove.quantity);
                e.particles.removeQuantity(s);
              });
          }
          clear() {}
          init() {}
          async interact() {}
          isEnabled() {
            return !0;
          }
          loadModeOptions(t, ...e) {
            t.remove || (t.remove = new Go());
            for (const i of e) t.remove.load(i?.remove);
          }
          reset() {}
        }
        class ko {
          constructor() {
            (this.distance = 200),
              (this.duration = 0.4),
              (this.factor = 100),
              (this.speed = 1),
              (this.maxSpeed = 50),
              (this.easing = "ease-out-quad");
          }
          load(t) {
            t &&
              (void 0 !== t.distance && (this.distance = t.distance),
              void 0 !== t.duration && (this.duration = t.duration),
              void 0 !== t.easing && (this.easing = t.easing),
              void 0 !== t.factor && (this.factor = t.factor),
              void 0 !== t.speed && (this.speed = t.speed),
              void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
          }
        }
        class Ro extends ko {
          constructor() {
            super(), (this.selectors = []);
          }
          get ids() {
            return B(this.selectors, (t) => t.replace("#", ""));
          }
          set ids(t) {
            this.selectors = B(t, (t) => `#${t}`);
          }
          load(t) {
            super.load(t),
              t &&
                (void 0 !== t.ids && (this.ids = t.ids),
                void 0 !== t.selectors && (this.selectors = t.selectors));
          }
        }
        class Io extends ko {
          load(t) {
            super.load(t),
              t &&
                (this.divs = B(t.divs, (t) => {
                  const e = new Ro();
                  return e.load(t), e;
                }));
          }
        }
        class zo extends Fi {
          constructor(t, e) {
            super(e),
              (this._clickRepulse = () => {
                const t = this.container,
                  e = t.actualOptions.interactivity.modes.repulse;
                if (!e) return;
                const i = t.repulse || { particles: [] };
                if (
                  (i.finish ||
                    (i.count || (i.count = 0),
                    i.count++,
                    i.count === t.particles.count && (i.finish = !0)),
                  i.clicking)
                ) {
                  const s = t.retina.repulseModeDistance;
                  if (!s || s < 0) return;
                  const o = Math.pow(s / 6, 3),
                    n = t.interactivity.mouse.clickPosition;
                  if (void 0 === n) return;
                  const a = new Gs(n.x, n.y, o),
                    r = t.particles.quadTree.query(a, (t) => this.isEnabled(t));
                  for (const t of r) {
                    const { dx: s, dy: a, distance: r } = pt(n, t.position),
                      c = r ** 2,
                      h = (-o * e.speed) / c;
                    if (c <= o) {
                      i.particles.push(t);
                      const e = y.create(s, a);
                      (e.length = h), t.velocity.setTo(e);
                    }
                  }
                } else if (!1 === i.clicking) {
                  for (const t of i.particles)
                    t.velocity.setTo(t.initialVelocity);
                  i.particles = [];
                }
              }),
              (this._hoverRepulse = () => {
                const t = this.container,
                  e = t.interactivity.mouse.position,
                  i = t.retina.repulseModeDistance;
                !i ||
                  i < 0 ||
                  !e ||
                  this._processRepulse(e, i, new Gs(e.x, e.y, i));
              }),
              (this._processRepulse = (t, e, i, s) => {
                const o = this.container,
                  n = o.particles.quadTree.query(i, (t) => this.isEnabled(t)),
                  a = o.actualOptions.interactivity.modes.repulse;
                if (a)
                  for (const i of n) {
                    const { dx: o, dy: n, distance: r } = pt(i.position, t),
                      c = (s?.speed ?? a.speed) * a.factor,
                      h = nt(it(a.easing)(1 - r / e) * c, 0, a.maxSpeed),
                      l = y.create(
                        0 === r ? c : (o / r) * h,
                        0 === r ? c : (n / r) * h
                      );
                    i.position.addTo(l);
                  }
              }),
              (this._singleSelectorRepulse = (t, e) => {
                const i = this.container,
                  s = i.actualOptions.interactivity.modes.repulse;
                if (!s) return;
                const o = document.querySelectorAll(t);
                o.length &&
                  o.forEach((t) => {
                    const o = t,
                      n = i.retina.pixelRatio,
                      a = {
                        x: (o.offsetLeft + o.offsetWidth / 2) * n,
                        y: (o.offsetTop + o.offsetHeight / 2) * n,
                      },
                      r = (o.offsetWidth / 2) * n,
                      c =
                        "circle" === e.type
                          ? new Gs(a.x, a.y, r)
                          : new Ms(
                              o.offsetLeft * n,
                              o.offsetTop * n,
                              o.offsetWidth * n,
                              o.offsetHeight * n
                            ),
                      h = z(s.divs, o);
                    this._processRepulse(a, r, c, h);
                  });
              }),
              (this._engine = t),
              e.repulse || (e.repulse = { particles: [] }),
              (this.handleClickMode = (t) => {
                const i =
                  this.container.actualOptions.interactivity.modes.repulse;
                if (!i || "repulse" !== t) return;
                e.repulse || (e.repulse = { particles: [] });
                const s = e.repulse;
                (s.clicking = !0), (s.count = 0);
                for (const t of e.repulse.particles)
                  this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                (s.particles = []),
                  (s.finish = !1),
                  setTimeout(() => {
                    e.destroyed || (s.clicking = !1);
                  }, 1e3 * i.duration);
              });
          }
          clear() {}
          init() {
            const t = this.container,
              e = t.actualOptions.interactivity.modes.repulse;
            e &&
              (t.retina.repulseModeDistance = e.distance * t.retina.pixelRatio);
          }
          async interact() {
            const t = this.container,
              e = t.actualOptions,
              i = t.interactivity.status === r,
              s = e.interactivity.events,
              o = s.onHover,
              n = o.enable,
              a = o.mode,
              c = s.onClick,
              h = c.enable,
              l = c.mode,
              d = s.onDiv;
            i && n && C("repulse", a)
              ? this._hoverRepulse()
              : h && C("repulse", l)
              ? this._clickRepulse()
              : R("repulse", d, (t, e) => this._singleSelectorRepulse(t, e));
          }
          isEnabled(t) {
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity.mouse,
              o = (t?.interactivity ?? i.interactivity).events,
              n = o.onDiv,
              a = o.onHover,
              r = o.onClick,
              c = k("repulse", n);
            if (
              !(c || (a.enable && s.position) || (r.enable && s.clickPosition))
            )
              return !1;
            const h = a.mode,
              l = r.mode;
            return C("repulse", h) || C("repulse", l) || c;
          }
          loadModeOptions(t, ...e) {
            t.repulse || (t.repulse = new Io());
            for (const i of e) t.repulse.load(i?.repulse);
          }
          reset() {}
        }
        class Lo {
          constructor() {
            (this.factor = 3), (this.radius = 200);
          }
          load(t) {
            t &&
              (void 0 !== t.factor && (this.factor = t.factor),
              void 0 !== t.radius && (this.radius = t.radius));
          }
        }
        class Do extends Fi {
          constructor(t) {
            super(t);
          }
          clear(t, e, i) {
            (t.slow.inRange && !i) || (t.slow.factor = 1);
          }
          init() {
            const t = this.container,
              e = t.actualOptions.interactivity.modes.slow;
            e && (t.retina.slowModeRadius = e.radius * t.retina.pixelRatio);
          }
          async interact() {}
          isEnabled(t) {
            const e = this.container,
              i = e.interactivity.mouse,
              s = (t?.interactivity ?? e.actualOptions.interactivity).events;
            return (
              s.onHover.enable && !!i.position && C("slow", s.onHover.mode)
            );
          }
          loadModeOptions(t, ...e) {
            t.slow || (t.slow = new Lo());
            for (const i of e) t.slow.load(i?.slow);
          }
          reset(t) {
            t.slow.inRange = !1;
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity.mouse.position,
              o = e.retina.slowModeRadius,
              n = i.interactivity.modes.slow;
            if (!n || !o || o < 0 || !s) return;
            const a = gt(s, t.getPosition()),
              r = a / o,
              c = n.factor,
              { slow: h } = t;
            a > o || ((h.inRange = !0), (h.factor = r / c));
          }
        }
        const Ho = [0, 4, 2, 1],
          Bo = [8, 8, 4, 2];
        class Fo {
          constructor(t) {
            (this.pos = 0), (this.data = new Uint8ClampedArray(t));
          }
          getString(t) {
            const e = this.data.slice(this.pos, this.pos + t);
            return (
              (this.pos += e.length),
              e.reduce((t, e) => t + String.fromCharCode(e), "")
            );
          }
          nextByte() {
            return this.data[this.pos++];
          }
          nextTwoBytes() {
            return (
              (this.pos += 2),
              this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
            );
          }
          readSubBlocks() {
            let t = "",
              e = 0;
            do {
              e = this.data[this.pos++];
              for (
                let i = e;
                --i >= 0;
                t += String.fromCharCode(this.data[this.pos++])
              );
            } while (0 !== e);
            return t;
          }
          readSubBlocksBin() {
            let t = 0,
              e = 0;
            for (let i = 0; 0 !== (t = this.data[this.pos + i]); i += t + 1)
              e += t;
            const i = new Uint8Array(e);
            for (let e = 0; 0 !== (t = this.data[this.pos++]); )
              for (let s = t; --s >= 0; i[e++] = this.data[this.pos++]);
            return i;
          }
          skipSubBlocks() {
            for (
              ;
              0 !== this.data[this.pos];
              this.pos += this.data[this.pos] + 1
            );
            this.pos++;
          }
        }
        function No(t, e) {
          const i = [];
          for (let s = 0; s < e; s++)
            i.push({
              r: t.data[t.pos],
              g: t.data[t.pos + 1],
              b: t.data[t.pos + 2],
            }),
              (t.pos += 3);
          return i;
        }
        async function Uo(t, e, i, s, o, n) {
          switch (t.nextByte()) {
            case 59:
              return !0;
            case 44:
              await (async function (t, e, i, s, o, n) {
                const a = e.frames[s(!0)];
                (a.left = t.nextTwoBytes()),
                  (a.top = t.nextTwoBytes()),
                  (a.width = t.nextTwoBytes()),
                  (a.height = t.nextTwoBytes());
                const r = t.nextByte(),
                  c = 128 == (128 & r),
                  h = 64 == (64 & r);
                (a.sortFlag = 32 == (32 & r)), (a.reserved = (24 & r) >>> 3);
                const l = 1 << (1 + (7 & r));
                c && (a.localColorTable = No(t, l));
                const d = (t) => {
                    const {
                      r: s,
                      g: n,
                      b: r,
                    } = (c ? a.localColorTable : e.globalColorTable)[t];
                    return {
                      r: s,
                      g: n,
                      b: r,
                      a: t === o(null) ? (i ? ~~((s + n + r) / 3) : 0) : 255,
                    };
                  },
                  u = (() => {
                    try {
                      return new ImageData(a.width, a.height, {
                        colorSpace: "srgb",
                      });
                    } catch (t) {
                      if (
                        t instanceof DOMException &&
                        "IndexSizeError" === t.name
                      )
                        return null;
                      throw t;
                    }
                  })();
                if (null == u)
                  throw new EvalError("GIF frame size is to large");
                const p = t.nextByte(),
                  g = t.readSubBlocksBin(),
                  f = 1 << p,
                  y = (t, e) => {
                    const i = t >>> 3,
                      s = 7 & t;
                    return (
                      ((g[i] + (g[i + 1] << 8) + (g[i + 2] << 16)) &
                        (((1 << e) - 1) << s)) >>>
                      s
                    );
                  };
                if (h) {
                  for (
                    let i = 0, o = p + 1, r = 0, c = [[0]], h = 0;
                    h < 4;
                    h++
                  ) {
                    if (Ho[h] < a.height)
                      for (let t = 0, e = 0; ; ) {
                        const s = i;
                        if (((i = y(r, o)), (r += o + 1), i === f)) {
                          (o = p + 1), (c.length = f + 2);
                          for (let t = 0; t < c.length; t++)
                            c[t] = t < f ? [t] : [];
                        } else {
                          i >= c.length
                            ? c.push(c[s].concat(c[s][0]))
                            : s !== f && c.push(c[s].concat(c[i][0]));
                          for (let s = 0; s < c[i].length; s++) {
                            const { r: o, g: n, b: r, a: l } = d(c[i][s]);
                            u.data.set(
                              [o, n, r, l],
                              Ho[h] * a.width + Bo[h] * e + (t % (4 * a.width))
                            ),
                              (t += 4);
                          }
                          c.length === 1 << o && o < 12 && o++;
                        }
                        if (
                          t === 4 * a.width * (e + 1) &&
                          (e++, Ho[h] + Bo[h] * e >= a.height)
                        )
                          break;
                      }
                    n?.(
                      t.pos / (t.data.length - 1),
                      s(!1) + 1,
                      u,
                      { x: a.left, y: a.top },
                      { width: e.width, height: e.height }
                    );
                  }
                  (a.image = u), (a.bitmap = await createImageBitmap(u));
                } else {
                  for (let t = 0, e = p + 1, i = 0, s = [[0]], o = -4; ; ) {
                    const n = t;
                    if (((t = y(i, e)), (i += e), t === f)) {
                      (e = p + 1), (s.length = f + 2);
                      for (let t = 0; t < s.length; t++)
                        s[t] = t < f ? [t] : [];
                    } else {
                      if (t === f + 1) break;
                      t >= s.length
                        ? s.push(s[n].concat(s[n][0]))
                        : n !== f && s.push(s[n].concat(s[t][0]));
                      for (let e = 0; e < s[t].length; e++) {
                        const { r: i, g: n, b: a, a: r } = d(s[t][e]);
                        u.data.set([i, n, a, r], (o += 4));
                      }
                      s.length >= 1 << e && e < 12 && e++;
                    }
                  }
                  (a.image = u),
                    (a.bitmap = await createImageBitmap(u)),
                    n?.(
                      (t.pos + 1) / t.data.length,
                      s(!1) + 1,
                      a.image,
                      { x: a.left, y: a.top },
                      { width: e.width, height: e.height }
                    );
                }
              })(t, e, i, s, o, n);
              break;
            case 33:
              await (async function (t, e, i, s) {
                switch (t.nextByte()) {
                  case 249: {
                    const o = e.frames[i(!1)];
                    t.pos++;
                    const n = t.nextByte();
                    (o.GCreserved = (224 & n) >>> 5),
                      (o.disposalMethod = (28 & n) >>> 2),
                      (o.userInputDelayFlag = 2 == (2 & n));
                    const a = 1 == (1 & n);
                    o.delayTime = 10 * t.nextTwoBytes();
                    const r = t.nextByte();
                    a && s(r), t.pos++;
                    break;
                  }
                  case 255: {
                    t.pos++;
                    const i = {
                      identifier: t.getString(8),
                      authenticationCode: t.getString(3),
                      data: t.readSubBlocksBin(),
                    };
                    e.applicationExtensions.push(i);
                    break;
                  }
                  case 254:
                    e.comments.push([i(!1), t.readSubBlocks()]);
                    break;
                  case 1:
                    if (0 === e.globalColorTable.length)
                      throw new EvalError(
                        "plain text extension without global color table"
                      );
                    t.pos++,
                      (e.frames[i(!1)].plainTextData = {
                        left: t.nextTwoBytes(),
                        top: t.nextTwoBytes(),
                        width: t.nextTwoBytes(),
                        height: t.nextTwoBytes(),
                        charSize: {
                          width: t.nextTwoBytes(),
                          height: t.nextTwoBytes(),
                        },
                        foregroundColor: t.nextByte(),
                        backgroundColor: t.nextByte(),
                        text: t.readSubBlocks(),
                      });
                    break;
                  default:
                    t.skipSubBlocks();
                }
              })(t, e, s, o);
              break;
            default:
              throw new EvalError("undefined block found");
          }
          return !1;
        }
        const $o =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
        async function qo(t) {
          return new Promise((e) => {
            t.loading = !0;
            const i = new Image();
            (t.element = i),
              i.addEventListener("load", () => {
                (t.loading = !1), e();
              }),
              i.addEventListener("error", () => {
                (t.element = void 0),
                  (t.error = !0),
                  (t.loading = !1),
                  m().error(`${g} loading image: ${t.source}`),
                  e();
              }),
              (i.src = t.source);
          });
        }
        async function jo(t) {
          if ("gif" === t.type) {
            t.loading = !0;
            try {
              (t.gifData = await (async function (t, e, i) {
                i || (i = !1);
                const s = await fetch(t);
                if (!s.ok && 404 === s.status)
                  throw new EvalError("file not found");
                const o = await s.arrayBuffer(),
                  n = {
                    width: 0,
                    height: 0,
                    totalTime: 0,
                    colorRes: 0,
                    pixelAspectRatio: 0,
                    frames: [],
                    sortFlag: !1,
                    globalColorTable: [],
                    backgroundImage: new ImageData(1, 1, {
                      colorSpace: "srgb",
                    }),
                    comments: [],
                    applicationExtensions: [],
                  },
                  a = new Fo(new Uint8ClampedArray(o));
                if ("GIF89a" !== a.getString(6))
                  throw new Error("not a supported GIF file");
                (n.width = a.nextTwoBytes()), (n.height = a.nextTwoBytes());
                const r = a.nextByte(),
                  c = 128 == (128 & r);
                (n.colorRes = (112 & r) >>> 4), (n.sortFlag = 8 == (8 & r));
                const h = 1 << (1 + (7 & r)),
                  l = a.nextByte();
                (n.pixelAspectRatio = a.nextByte()),
                  0 !== n.pixelAspectRatio &&
                    (n.pixelAspectRatio = (n.pixelAspectRatio + 15) / 64),
                  c && (n.globalColorTable = No(a, h));
                const d = (() => {
                  try {
                    return new ImageData(n.width, n.height, {
                      colorSpace: "srgb",
                    });
                  } catch (t) {
                    if (
                      t instanceof DOMException &&
                      "IndexSizeError" === t.name
                    )
                      return null;
                    throw t;
                  }
                })();
                if (null == d) throw new Error("GIF frame size is to large");
                const { r: u, g: p, b: g } = n.globalColorTable[l];
                d.data.set(c ? [u, p, g, 255] : [0, 0, 0, 0]);
                for (let t = 4; t < d.data.length; t *= 2)
                  d.data.copyWithin(t, 0, t);
                n.backgroundImage = d;
                let f = -1,
                  y = !0,
                  v = -1;
                const w = (t) => (t && (y = !0), f),
                  m = (t) => (null != t && (v = t), v);
                try {
                  do {
                    y &&
                      (n.frames.push({
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        disposalMethod: 0,
                        image: new ImageData(1, 1, { colorSpace: "srgb" }),
                        plainTextData: null,
                        userInputDelayFlag: !1,
                        delayTime: 0,
                        sortFlag: !1,
                        localColorTable: [],
                        reserved: 0,
                        GCreserved: 0,
                      }),
                      f++,
                      (v = -1),
                      (y = !1));
                  } while (!(await Uo(a, n, i, w, m, e)));
                  n.frames.length--;
                  for (const t of n.frames) {
                    if (t.userInputDelayFlag && 0 === t.delayTime) {
                      n.totalTime = 1 / 0;
                      break;
                    }
                    n.totalTime += t.delayTime;
                  }
                  return n;
                } catch (t) {
                  if (t instanceof EvalError)
                    throw new Error(
                      `error while parsing frame ${f} "${t.message}"`
                    );
                  throw t;
                }
              })(t.source)),
                (t.gifLoopCount =
                  (function (t) {
                    for (const e of t.applicationExtensions)
                      if (e.identifier + e.authenticationCode === "NETSCAPE2.0")
                        return e.data[1] + (e.data[2] << 8);
                    return NaN;
                  })(t.gifData) ?? 0),
                0 === t.gifLoopCount && (t.gifLoopCount = 1 / 0);
            } catch {
              t.error = !0;
            }
            t.loading = !1;
          } else await qo(t);
        }
        async function Qo(t) {
          if ("svg" !== t.type) return void (await qo(t));
          t.loading = !0;
          const e = await fetch(t.source);
          e.ok
            ? (t.svgData = await e.text())
            : (m().error(`${g} Image not found`), (t.error = !0)),
            (t.loading = !1);
        }
        function Wo(t, e, i, s) {
          const o = (function (t, e, i) {
              const { svgData: s } = t;
              if (!s) return "";
              const o = Ae(e, i);
              if (s.includes("fill")) return s.replace($o, () => o);
              const n = s.indexOf(">");
              return `${s.substring(0, n)} fill="${o}"${s.substring(n)}`;
            })(t, i, s.opacity?.value ?? 1),
            n = {
              color: i,
              gif: e.gif,
              data: { ...t, svgData: o },
              loaded: !1,
              ratio: e.width / e.height,
              replaceColor: e.replaceColor ?? e.replace_color,
              source: e.src,
            };
          return new Promise((e) => {
            const i = new Blob([o], { type: "image/svg+xml" }),
              s = URL || window.URL || window.webkitURL || window,
              a = s.createObjectURL(i),
              r = new Image();
            r.addEventListener("load", () => {
              (n.loaded = !0), (n.element = r), e(n), s.revokeObjectURL(a);
            }),
              r.addEventListener("error", async () => {
                s.revokeObjectURL(a);
                const i = { ...t, error: !1, loading: !0 };
                await qo(i), (n.loaded = !0), (n.element = i.element), e(n);
              }),
              (r.src = a);
          });
        }
        class Zo {
          constructor(t) {
            (this.loadImageShape = async (t) => {
              if (!this._engine.loadImage)
                throw new Error(`${g} image shape not initialized`);
              await this._engine.loadImage({
                gif: t.gif,
                name: t.name,
                replaceColor: t.replaceColor ?? t.replace_color ?? !1,
                src: t.src,
              });
            }),
              (this._engine = t);
          }
          addImage(t) {
            this._engine.images || (this._engine.images = []),
              this._engine.images.push(t);
          }
          draw(t, e, i, s, o) {
            const n = e.image,
              a = n?.element;
            if (n) {
              if (((t.globalAlpha = s), n.gif && n.gifData)) {
                const s = new OffscreenCanvas(
                    n.gifData.width,
                    n.gifData.height
                  ),
                  a = s.getContext("2d");
                if (!a)
                  throw new Error("could not create offscreen canvas context");
                (a.imageSmoothingQuality = "low"),
                  (a.imageSmoothingEnabled = !1),
                  a.clearRect(0, 0, s.width, s.height),
                  void 0 === e.gifLoopCount &&
                    (e.gifLoopCount = n.gifLoopCount ?? 0);
                let r = e.gifFrame ?? 0;
                const c = {
                    x: 0.5 * -n.gifData.width,
                    y: 0.5 * -n.gifData.height,
                  },
                  h = n.gifData.frames[r];
                if ((void 0 === e.gifTime && (e.gifTime = 0), !h.bitmap))
                  return;
                switch (
                  (t.scale(i / n.gifData.width, i / n.gifData.height),
                  h.disposalMethod)
                ) {
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                  case 0:
                    a.drawImage(h.bitmap, h.left, h.top),
                      t.drawImage(s, c.x, c.y),
                      a.clearRect(0, 0, s.width, s.height);
                    break;
                  case 1:
                    a.drawImage(h.bitmap, h.left, h.top),
                      t.drawImage(s, c.x, c.y);
                    break;
                  case 2:
                    a.drawImage(h.bitmap, h.left, h.top),
                      t.drawImage(s, c.x, c.y),
                      a.clearRect(0, 0, s.width, s.height),
                      0 === n.gifData.globalColorTable.length
                        ? a.putImageData(
                            n.gifData.frames[0].image,
                            c.x + h.left,
                            c.y + h.top
                          )
                        : a.putImageData(n.gifData.backgroundImage, c.x, c.y);
                    break;
                  case 3: {
                    const e = a.getImageData(0, 0, s.width, s.height);
                    a.drawImage(h.bitmap, h.left, h.top),
                      t.drawImage(s, c.x, c.y),
                      a.clearRect(0, 0, s.width, s.height),
                      a.putImageData(e, 0, 0);
                  }
                }
                if (((e.gifTime += o.value), e.gifTime > h.delayTime)) {
                  if (
                    ((e.gifTime -= h.delayTime), ++r >= n.gifData.frames.length)
                  ) {
                    if (--e.gifLoopCount <= 0) return;
                    (r = 0), a.clearRect(0, 0, s.width, s.height);
                  }
                  e.gifFrame = r;
                }
                t.scale(n.gifData.width / i, n.gifData.height / i);
              } else if (a) {
                const e = n.ratio,
                  s = { x: -i, y: -i };
                t.drawImage(a, s.x, s.y, 2 * i, (2 * i) / e);
              }
              t.globalAlpha = 1;
            }
          }
          getSidesCount() {
            return 12;
          }
          async init(t) {
            const e = t.actualOptions;
            if (e.preload && this._engine.loadImage)
              for (const t of e.preload) await this._engine.loadImage(t);
          }
          loadShape(t) {
            if ("image" !== t.shape && "images" !== t.shape) return;
            this._engine.images || (this._engine.images = []);
            const e = t.shapeData;
            this._engine.images.find(
              (t) => t.name === e.name || t.source === e.src
            ) ||
              this.loadImageShape(e).then(() => {
                this.loadShape(t);
              });
          }
          particleInit(t, e) {
            if ("image" !== e.shape && "images" !== e.shape) return;
            this._engine.images || (this._engine.images = []);
            const i = this._engine.images,
              s = e.shapeData,
              o = e.getFillColor(),
              n = i.find((t) => t.name === s.name || t.source === s.src);
            if (!n) return;
            const a = s.replaceColor ?? s.replace_color ?? n.replaceColor;
            n.loading
              ? setTimeout(() => {
                  this.particleInit(t, e);
                })
              : (async () => {
                  let t;
                  (t =
                    n.svgData && o
                      ? await Wo(n, s, o, e)
                      : {
                          color: o,
                          data: n,
                          element: n.element,
                          gif: n.gif,
                          gifData: n.gifData,
                          gifLoopCount: n.gifLoopCount,
                          loaded: !0,
                          ratio:
                            s.width && s.height
                              ? s.width / s.height
                              : n.ratio ?? 1,
                          replaceColor: a,
                          source: s.src,
                        }),
                    t.ratio || (t.ratio = 1);
                  const i = {
                    image: t,
                    fill: s.fill ?? e.fill,
                    close: s.close ?? e.close,
                  };
                  (e.image = i.image), (e.fill = i.fill), (e.close = i.close);
                })();
          }
        }
        class Xo {
          constructor() {
            (this.src = ""), (this.gif = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.gif && (this.gif = t.gif),
              void 0 !== t.height && (this.height = t.height),
              void 0 !== t.name && (this.name = t.name),
              void 0 !== t.replaceColor && (this.replaceColor = t.replaceColor),
              void 0 !== t.src && (this.src = t.src),
              void 0 !== t.width && (this.width = t.width));
          }
        }
        class Yo {
          constructor(t) {
            (this.id = "imagePreloader"), (this._engine = t);
          }
          getPlugin() {
            return {};
          }
          loadOptions(t, e) {
            if (!e || !e.preload) return;
            t.preload || (t.preload = []);
            const i = t.preload;
            for (const t of e.preload) {
              const e = i.find((e) => e.name === t.name || e.src === t.src);
              if (e) e.load(t);
              else {
                const e = new Xo();
                e.load(t), i.push(e);
              }
            }
          }
          needsPlugin() {
            return !0;
          }
        }
        async function Jo(t, e = !0) {
          !(function (t) {
            t.loadImage ||
              (t.loadImage = async (e) => {
                if (!e.name && !e.src)
                  throw new Error(`${g} no image source provided`);
                if (
                  (t.images || (t.images = []),
                  !t.images.find(
                    (t) => t.name === e.name || t.source === e.src
                  ))
                )
                  try {
                    const i = {
                      gif: e.gif ?? !1,
                      name: e.name ?? e.src,
                      source: e.src,
                      type: e.src.substring(e.src.length - 3),
                      error: !1,
                      loading: !0,
                      replaceColor: e.replaceColor,
                      ratio: e.width && e.height ? e.width / e.height : void 0,
                    };
                    t.images.push(i);
                    const s = e.gif ? jo : e.replaceColor ? Qo : qo;
                    await s(i);
                  } catch {
                    throw new Error(`${g} ${e.name ?? e.src} not found`);
                  }
              });
          })(t);
          const i = new Yo(t);
          await t.addPlugin(i, e),
            await t.addShape(["image", "images"], new Zo(t), e);
        }
        class Ko extends ae {
          constructor() {
            super(), (this.sync = !1);
          }
          load(t) {
            t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
          }
        }
        class tn extends ae {
          constructor() {
            super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
          }
          load(t) {
            t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
          }
        }
        class en {
          constructor() {
            (this.count = 0),
              (this.delay = new Ko()),
              (this.duration = new tn());
          }
          load(t) {
            t &&
              (void 0 !== t.count && (this.count = t.count),
              this.delay.load(t.delay),
              this.duration.load(t.duration));
          }
        }
        class sn {
          constructor(t) {
            this.container = t;
          }
          init(t) {
            const e = this.container,
              i = t.options.life;
            i &&
              ((t.life = {
                delay: e.retina.reduceFactor
                  ? ((ct(i.delay.value) * (i.delay.sync ? 1 : ot())) /
                      e.retina.reduceFactor) *
                    1e3
                  : 0,
                delayTime: 0,
                duration: e.retina.reduceFactor
                  ? ((ct(i.duration.value) * (i.duration.sync ? 1 : ot())) /
                      e.retina.reduceFactor) *
                    1e3
                  : 0,
                time: 0,
                count: i.count,
              }),
              t.life.duration <= 0 && (t.life.duration = -1),
              t.life.count <= 0 && (t.life.count = -1),
              t.life && (t.spawning = t.life.delay > 0));
          }
          isEnabled(t) {
            return !t.destroyed;
          }
          loadOptions(t, ...e) {
            t.life || (t.life = new en());
            for (const i of e) t.life.load(i?.life);
          }
          update(t, e) {
            if (!this.isEnabled(t) || !t.life) return;
            const i = t.life;
            let s = !1;
            if (t.spawning) {
              if (((i.delayTime += e.value), !(i.delayTime >= t.life.delay)))
                return;
              (s = !0), (t.spawning = !1), (i.delayTime = 0), (i.time = 0);
            }
            if (-1 === i.duration) return;
            if (t.spawning) return;
            if ((s ? (i.time = 0) : (i.time += e.value), i.time < i.duration))
              return;
            if (
              ((i.time = 0),
              t.life.count > 0 && t.life.count--,
              0 === t.life.count)
            )
              return void t.destroy();
            const o = this.container.canvas.size,
              n = dt(0, o.width),
              a = dt(0, o.width);
            (t.position.x = rt(n)),
              (t.position.y = rt(a)),
              (t.spawning = !0),
              (i.delayTime = 0),
              (i.time = 0),
              t.reset();
            const r = t.options.life;
            r &&
              ((i.delay = 1e3 * ct(r.delay.value)),
              (i.duration = 1e3 * ct(r.duration.value)));
          }
        }
        class on {
          draw(t, e, i) {
            const s = e.shapeData;
            t.moveTo(-i / 2, 0),
              t.lineTo(i / 2, 0),
              (t.lineCap = s?.cap ?? "butt");
          }
          getSidesCount() {
            return 1;
          }
        }
        class nn {
          init() {}
          isEnabled(t) {
            return (
              !_() &&
              !t.destroyed &&
              t.container.actualOptions.interactivity.events.onHover.parallax
                .enable
            );
          }
          move(t) {
            const e = t.container,
              i = e.actualOptions.interactivity.events.onHover.parallax;
            if (_() || !i.enable) return;
            const s = i.force,
              o = e.interactivity.mouse.position;
            if (!o) return;
            const n = e.canvas.size,
              a = n.width / 2,
              r = n.height / 2,
              c = i.smooth,
              h = t.getRadius() / s,
              l = (o.x - a) * h,
              d = (o.y - r) * h,
              { offset: u } = t;
            (u.x += (l - u.x) / c), (u.y += (d - u.y) / c);
          }
        }
        class an extends js {
          constructor(t) {
            super(t);
          }
          clear() {}
          init() {}
          async interact(t) {
            const e = this.container,
              i = t.retina.attractDistance ?? e.retina.attractDistance,
              s = t.getPosition(),
              o = e.particles.quadTree.queryCircle(s, i);
            for (const e of o) {
              if (
                t === e ||
                !e.options.move.attract.enable ||
                e.destroyed ||
                e.spawning
              )
                continue;
              const i = e.getPosition(),
                { dx: o, dy: n } = pt(s, i),
                a = t.options.move.attract.rotate,
                r = o / (1e3 * a.x),
                c = n / (1e3 * a.y),
                h = e.size.value / t.size.value,
                l = 1 / h;
              (t.velocity.x -= r * h),
                (t.velocity.y -= c * h),
                (e.velocity.x += r * l),
                (e.velocity.y += c * l);
            }
          }
          isEnabled(t) {
            return t.options.move.attract.enable;
          }
          reset() {}
        }
        function rn(t, e, i, s, o, n) {
          const a = nt(
            (t.options.collisions.absorb.speed * o.factor) / 10,
            0,
            s
          );
          (t.size.value += a / 2),
            (i.size.value -= a),
            s <= n && ((i.size.value = 0), i.destroy());
        }
        const cn = (t) => {
          void 0 === t.collisionMaxSpeed &&
            (t.collisionMaxSpeed = ct(t.options.collisions.maxSpeed)),
            t.velocity.length > t.collisionMaxSpeed &&
              (t.velocity.length = t.collisionMaxSpeed);
        };
        function hn(t, e) {
          D(L(t), L(e)), cn(t), cn(e);
        }
        function ln(t, e, i, s) {
          switch (t.options.collisions.mode) {
            case "absorb":
              !(function (t, e, i, s) {
                const o = t.getRadius(),
                  n = e.getRadius();
                void 0 === o && void 0 !== n
                  ? t.destroy()
                  : void 0 !== o && void 0 === n
                  ? e.destroy()
                  : void 0 !== o &&
                    void 0 !== n &&
                    (o >= n ? rn(t, 0, e, n, i, s) : rn(e, 0, t, o, i, s));
              })(t, e, i, s);
              break;
            case "bounce":
              hn(t, e);
              break;
            case "destroy":
              !(function (t, e) {
                t.unbreakable || e.unbreakable || hn(t, e),
                  void 0 === t.getRadius() && void 0 !== e.getRadius()
                    ? t.destroy()
                    : void 0 !== t.getRadius() && void 0 === e.getRadius()
                    ? e.destroy()
                    : void 0 !== t.getRadius() &&
                      void 0 !== e.getRadius() &&
                      (t.getRadius() >= e.getRadius() ? e : t).destroy();
              })(t, e);
          }
        }
        class dn extends js {
          constructor(t) {
            super(t);
          }
          clear() {}
          init() {}
          async interact(t, e) {
            if (t.destroyed || t.spawning) return;
            const i = this.container,
              s = t.getPosition(),
              o = t.getRadius(),
              n = i.particles.quadTree.queryCircle(s, 2 * o);
            for (const a of n) {
              if (
                t === a ||
                !a.options.collisions.enable ||
                t.options.collisions.mode !== a.options.collisions.mode ||
                a.destroyed ||
                a.spawning
              )
                continue;
              const n = a.getPosition(),
                r = a.getRadius();
              if (Math.abs(Math.round(s.z) - Math.round(n.z)) > o + r) continue;
              gt(s, n) > o + r || ln(t, a, e, i.retina.pixelRatio);
            }
          }
          isEnabled(t) {
            return t.options.collisions.enable;
          }
          reset() {}
        }
        class un extends Gs {
          constructor(t, e, i, s) {
            super(t, e, i), (this.canvasSize = s), (this.canvasSize = { ...s });
          }
          contains(t) {
            const { width: e, height: i } = this.canvasSize,
              { x: s, y: o } = t;
            return (
              super.contains(t) ||
              super.contains({ x: s - e, y: o }) ||
              super.contains({ x: s - e, y: o - i }) ||
              super.contains({ x: s, y: o - i })
            );
          }
          intersects(t) {
            if (super.intersects(t)) return !0;
            const e = t,
              i = t,
              s = {
                x: t.position.x - this.canvasSize.width,
                y: t.position.y - this.canvasSize.height,
              };
            if (void 0 !== i.radius) {
              const t = new Gs(s.x, s.y, 2 * i.radius);
              return super.intersects(t);
            }
            if (void 0 !== e.size) {
              const t = new Ms(s.x, s.y, 2 * e.size.width, 2 * e.size.height);
              return super.intersects(t);
            }
            return !1;
          }
        }
        class pn {
          constructor() {
            (this.blur = 5),
              (this.color = new ie()),
              (this.color.value = "#000"),
              (this.enable = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.blur && (this.blur = t.blur),
              (this.color = ie.create(this.color, t.color)),
              void 0 !== t.enable && (this.enable = t.enable));
          }
        }
        class gn {
          constructor() {
            (this.enable = !1), (this.frequency = 1);
          }
          load(t) {
            t &&
              (void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.frequency && (this.frequency = t.frequency),
              void 0 !== t.opacity && (this.opacity = t.opacity));
          }
        }
        class fn {
          constructor() {
            (this.blink = !1),
              (this.color = new ie()),
              (this.color.value = "#fff"),
              (this.consent = !1),
              (this.distance = 100),
              (this.enable = !1),
              (this.frequency = 1),
              (this.opacity = 1),
              (this.shadow = new pn()),
              (this.triangles = new gn()),
              (this.width = 1),
              (this.warp = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.id && (this.id = t.id),
              void 0 !== t.blink && (this.blink = t.blink),
              (this.color = ie.create(this.color, t.color)),
              void 0 !== t.consent && (this.consent = t.consent),
              void 0 !== t.distance && (this.distance = t.distance),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.frequency && (this.frequency = t.frequency),
              void 0 !== t.opacity && (this.opacity = t.opacity),
              this.shadow.load(t.shadow),
              this.triangles.load(t.triangles),
              void 0 !== t.width && (this.width = t.width),
              void 0 !== t.warp && (this.warp = t.warp));
          }
        }
        function yn(t, e, i, s, o) {
          const { dx: n, dy: a, distance: r } = pt(t, e);
          if (!o || r <= i) return r;
          const c = { x: Math.abs(n), y: Math.abs(a) },
            h = Math.min(c.x, s.width - c.x),
            l = Math.min(c.y, s.height - c.y);
          return Math.sqrt(h ** 2 + l ** 2);
        }
        class vn extends js {
          constructor(t) {
            super(t),
              (this._setColor = (t) => {
                if (!t.options.links) return;
                const e = this.linkContainer,
                  i = t.options.links;
                let s =
                  void 0 === i.id
                    ? e.particles.linksColor
                    : e.particles.linksColors.get(i.id);
                if (s) return;
                (s = Ee(i.color, i.blink, i.consent)),
                  void 0 === i.id
                    ? (e.particles.linksColor = s)
                    : e.particles.linksColors.set(i.id, s);
              }),
              (this.linkContainer = t);
          }
          clear() {}
          init() {
            (this.linkContainer.particles.linksColor = void 0),
              (this.linkContainer.particles.linksColors = new Map());
          }
          async interact(t) {
            if (!t.options.links) return;
            t.links = [];
            const e = t.getPosition(),
              i = this.container,
              s = i.canvas.size;
            if (e.x < 0 || e.y < 0 || e.x > s.width || e.y > s.height) return;
            const o = t.options.links,
              n = o.opacity,
              a = t.retina.linksDistance ?? 0,
              r = o.warp,
              c = r ? new un(e.x, e.y, a, s) : new Gs(e.x, e.y, a),
              h = i.particles.quadTree.query(c);
            for (const i of h) {
              const c = i.options.links;
              if (
                t === i ||
                !c?.enable ||
                o.id !== c.id ||
                i.spawning ||
                i.destroyed ||
                !i.links ||
                t.links.some((t) => t.destination === i) ||
                i.links.some((e) => e.destination === t)
              )
                continue;
              const h = i.getPosition();
              if (h.x < 0 || h.y < 0 || h.x > s.width || h.y > s.height)
                continue;
              const l = yn(e, h, a, s, r && c.warp);
              if (l > a) continue;
              const d = (1 - l / a) * n;
              this._setColor(t), t.links.push({ destination: i, opacity: d });
            }
          }
          isEnabled(t) {
            return !!t.options.links?.enable;
          }
          loadParticlesOptions(t, ...e) {
            t.links || (t.links = new fn());
            for (const i of e)
              t.links.load(i?.links ?? i?.lineLinked ?? i?.line_linked);
          }
          reset() {}
        }
        function wn(t, e) {
          const i =
            ((s = t.map((t) => t.id)).sort((t, e) => t - e), s.join("_"));
          var s;
          let o = e.get(i);
          return void 0 === o && ((o = ot()), e.set(i, o)), o;
        }
        class mn {
          constructor(t) {
            (this.container = t),
              (this._drawLinkLine = (t, e) => {
                const i = t.options.links;
                if (!i?.enable) return;
                const s = this.container,
                  o = s.actualOptions,
                  n = e.destination,
                  a = t.getPosition(),
                  r = n.getPosition();
                let c = e.opacity;
                s.canvas.draw((e) => {
                  let h;
                  const l = t.options.twinkle?.lines;
                  if (l?.enable) {
                    const t = l.frequency,
                      e = we(l.color);
                    ot() < t && e && ((h = e), (c = ct(l.opacity)));
                  }
                  if (!h) {
                    const e =
                      void 0 !== i.id
                        ? s.particles.linksColors.get(i.id)
                        : s.particles.linksColor;
                    h = Ge(t, n, e);
                  }
                  if (!h) return;
                  const d = t.retina.linksWidth ?? 0,
                    u = t.retina.linksDistance ?? 0,
                    { backgroundMask: p } = o;
                  !(function (t) {
                    let e = !1;
                    const {
                      begin: i,
                      end: s,
                      maxDistance: o,
                      context: n,
                      canvasSize: a,
                      width: r,
                      backgroundMask: c,
                      colorLine: h,
                      opacity: l,
                      links: d,
                    } = t;
                    if (gt(i, s) <= o) Qi(n, i, s), (e = !0);
                    else if (d.warp) {
                      let t, r;
                      const c = pt(i, { x: s.x - a.width, y: s.y });
                      if (c.distance <= o) {
                        const e = i.y - (c.dy / c.dx) * i.x;
                        (t = { x: 0, y: e }), (r = { x: a.width, y: e });
                      } else {
                        const e = pt(i, { x: s.x, y: s.y - a.height });
                        if (e.distance <= o) {
                          const s =
                            -(i.y - (e.dy / e.dx) * i.x) / (e.dy / e.dx);
                          (t = { x: s, y: 0 }), (r = { x: s, y: a.height });
                        } else {
                          const e = pt(i, {
                            x: s.x - a.width,
                            y: s.y - a.height,
                          });
                          if (e.distance <= o) {
                            const s = i.y - (e.dy / e.dx) * i.x;
                            (t = { x: -s / (e.dy / e.dx), y: s }),
                              (r = { x: t.x + a.width, y: t.y + a.height });
                          }
                        }
                      }
                      t && r && (Qi(n, i, t), Qi(n, s, r), (e = !0));
                    }
                    if (!e) return;
                    (n.lineWidth = r),
                      c.enable && (n.globalCompositeOperation = c.composite),
                      (n.strokeStyle = Ve(h, l));
                    const { shadow: u } = d;
                    if (u.enable) {
                      const t = we(u.color);
                      t && ((n.shadowBlur = u.blur), (n.shadowColor = Ve(t)));
                    }
                    n.stroke();
                  })({
                    context: e,
                    width: d,
                    begin: a,
                    end: r,
                    maxDistance: u,
                    canvasSize: s.canvas.size,
                    links: i,
                    backgroundMask: p,
                    colorLine: h,
                    opacity: c,
                  });
                });
              }),
              (this._drawLinkTriangle = (t, e, i) => {
                const s = t.options.links;
                if (!s?.enable) return;
                const o = s.triangles;
                if (!o.enable) return;
                const n = this.container,
                  a = n.actualOptions,
                  r = e.destination,
                  c = i.destination,
                  h = o.opacity ?? (e.opacity + i.opacity) / 2;
                h <= 0 ||
                  n.canvas.draw((e) => {
                    const i = t.getPosition(),
                      l = r.getPosition(),
                      d = c.getPosition(),
                      u = t.retina.linksDistance ?? 0;
                    if (gt(i, l) > u || gt(d, l) > u || gt(d, i) > u) return;
                    let p = we(o.color);
                    if (!p) {
                      const e =
                        void 0 !== s.id
                          ? n.particles.linksColors.get(s.id)
                          : n.particles.linksColor;
                      p = Ge(t, r, e);
                    }
                    p &&
                      (function (t) {
                        const {
                          context: e,
                          pos1: i,
                          pos2: s,
                          pos3: o,
                          backgroundMask: n,
                          colorTriangle: a,
                          opacityTriangle: r,
                        } = t;
                        Wi(e, i, s, o),
                          n.enable &&
                            (e.globalCompositeOperation = n.composite),
                          (e.fillStyle = Ve(a, r)),
                          e.fill();
                      })({
                        context: e,
                        pos1: i,
                        pos2: l,
                        pos3: d,
                        backgroundMask: a.backgroundMask,
                        colorTriangle: p,
                        opacityTriangle: h,
                      });
                  });
              }),
              (this._drawTriangles = (t, e, i, s) => {
                const o = i.destination;
                if (
                  !t.links?.triangles.enable ||
                  !o.options.links?.triangles.enable
                )
                  return;
                const n = o.links?.filter((t) => {
                  const e = this._getLinkFrequency(o, t.destination);
                  return (
                    o.options.links &&
                    e <= o.options.links.frequency &&
                    s.findIndex((e) => e.destination === t.destination) >= 0
                  );
                });
                if (n?.length)
                  for (const s of n) {
                    const n = s.destination;
                    this._getTriangleFrequency(e, o, n) >
                      t.links.triangles.frequency ||
                      this._drawLinkTriangle(e, i, s);
                  }
              }),
              (this._getLinkFrequency = (t, e) =>
                wn([t, e], this._freqs.links)),
              (this._getTriangleFrequency = (t, e, i) =>
                wn([t, e, i], this._freqs.triangles)),
              (this._freqs = { links: new Map(), triangles: new Map() });
          }
          drawParticle(t, e) {
            const { links: i, options: s } = e;
            if (!i || i.length <= 0) return;
            const o = i.filter(
              (t) =>
                s.links &&
                this._getLinkFrequency(e, t.destination) <= s.links.frequency
            );
            for (const t of o)
              this._drawTriangles(s, e, t, o),
                t.opacity > 0 &&
                  (e.retina.linksWidth ?? 0) > 0 &&
                  this._drawLinkLine(e, t);
          }
          async init() {
            (this._freqs.links = new Map()),
              (this._freqs.triangles = new Map());
          }
          particleCreated(t) {
            if (((t.links = []), !t.options.links)) return;
            const e = this.container.retina.pixelRatio,
              { retina: i } = t,
              { distance: s, width: o } = t.options.links;
            (i.linksDistance = s * e), (i.linksWidth = o * e);
          }
          particleDestroyed(t) {
            t.links = [];
          }
        }
        class bn {
          constructor() {
            this.id = "links";
          }
          getPlugin(t) {
            return new mn(t);
          }
          loadOptions() {}
          needsPlugin() {
            return !0;
          }
        }
        async function _n(t, e = !0) {
          await (async function (t, e = !0) {
            await t.addInteractor("particlesLinks", (t) => new vn(t), e);
          })(t, e),
            await (async function (t, e = !0) {
              const i = new bn();
              await t.addPlugin(i, e);
            })(t, e);
        }
        class Sn {
          draw(t, e, i) {
            const s = this.getCenter(e, i),
              o = this.getSidesData(e, i),
              n = o.count.numerator * o.count.denominator,
              a = o.count.numerator / o.count.denominator,
              r = (180 * (a - 2)) / a,
              c = Math.PI - (Math.PI * r) / 180;
            if (t) {
              t.beginPath(), t.translate(s.x, s.y), t.moveTo(0, 0);
              for (let e = 0; e < n; e++)
                t.lineTo(o.length, 0), t.translate(o.length, 0), t.rotate(c);
            }
          }
          getSidesCount(t) {
            const e = t.shapeData;
            return Math.round(ct(e?.sides ?? e?.nb_sides ?? 5));
          }
        }
        class xn extends Sn {
          getCenter(t, e) {
            return { x: -e / (t.sides / 3.5), y: -e / 0.76 };
          }
          getSidesData(t, e) {
            const i = t.sides;
            return {
              count: { denominator: 1, numerator: i },
              length: (2.66 * e) / (i / 3),
            };
          }
        }
        class Pn extends Sn {
          getCenter(t, e) {
            return { x: -e, y: e / 1.66 };
          }
          getSidesCount() {
            return 3;
          }
          getSidesData(t, e) {
            return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
          }
        }
        async function Cn(t, e = !0) {
          await (async function (t, e = !0) {
            await t.addShape("polygon", new xn(), e);
          })(t, e),
            await (async function (t, e = !0) {
              await t.addShape("triangle", new Pn(), e);
            })(t, e);
        }
        class On {
          constructor() {
            (this.enable = !1),
              (this.speed = 0),
              (this.decay = 0),
              (this.sync = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.speed && (this.speed = dt(t.speed)),
              void 0 !== t.decay && (this.decay = dt(t.decay)),
              void 0 !== t.sync && (this.sync = t.sync));
          }
        }
        class Tn extends ae {
          constructor() {
            super(),
              (this.animation = new On()),
              (this.direction = "clockwise"),
              (this.path = !1),
              (this.value = 0);
          }
          load(t) {
            t &&
              (super.load(t),
              void 0 !== t.direction && (this.direction = t.direction),
              this.animation.load(t.animation),
              void 0 !== t.path && (this.path = t.path));
          }
        }
        class Vn {
          constructor(t) {
            this.container = t;
          }
          init(t) {
            const e = t.options.rotate;
            if (!e) return;
            (t.rotate = {
              enable: e.animation.enable,
              value: (ct(e.value) * Math.PI) / 180,
            }),
              (t.pathRotation = e.path);
            let i = e.direction;
            if ("random" === i) {
              i = Math.floor(2 * ot()) > 0 ? "counter-clockwise" : "clockwise";
            }
            switch (i) {
              case "counter-clockwise":
              case "counterClockwise":
                t.rotate.status = "decreasing";
                break;
              case "clockwise":
                t.rotate.status = "increasing";
            }
            const s = e.animation;
            s.enable &&
              ((t.rotate.decay = 1 - ct(s.decay)),
              (t.rotate.velocity =
                (ct(s.speed) / 360) * this.container.retina.reduceFactor),
              s.sync || (t.rotate.velocity *= ot())),
              (t.rotation = t.rotate.value);
          }
          isEnabled(t) {
            const e = t.options.rotate;
            return (
              !!e &&
              !t.destroyed &&
              !t.spawning &&
              e.animation.enable &&
              !e.path
            );
          }
          loadOptions(t, ...e) {
            t.rotate || (t.rotate = new Tn());
            for (const i of e) t.rotate.load(i?.rotate);
          }
          update(t, e) {
            this.isEnabled(t) &&
              (!(function (t, e) {
                const i = t.rotate,
                  s = t.options.rotate;
                if (!i || !s) return;
                const o = s.animation,
                  n = (i.velocity ?? 0) * e.factor,
                  a = 2 * Math.PI,
                  r = i.decay ?? 1;
                o.enable &&
                  ("increasing" === i.status
                    ? ((i.value += n), i.value > a && (i.value -= a))
                    : ((i.value -= n), i.value < 0 && (i.value += a)),
                  i.velocity && 1 !== r && (i.velocity *= r));
              })(t, e),
              (t.rotation = t.rotate?.value ?? 0));
          }
        }
        const An = Math.sqrt(2);
        class Mn {
          draw(t, e, i) {
            const s = i / An,
              o = 2 * s;
            t.rect(-s, -s, o, o);
          }
          getSidesCount() {
            return 4;
          }
        }
        class Gn {
          draw(t, e, i) {
            const s = e.sides,
              o = e.starInset ?? 2;
            t.moveTo(0, 0 - i);
            for (let e = 0; e < s; e++)
              t.rotate(Math.PI / s),
                t.lineTo(0, 0 - i * o),
                t.rotate(Math.PI / s),
                t.lineTo(0, 0 - i);
          }
          getSidesCount(t) {
            const e = t.shapeData;
            return Math.round(ct(e?.sides ?? e?.nb_sides ?? 5));
          }
          particleInit(t, e) {
            const i = e.shapeData,
              s = ct(i?.inset ?? 2);
            e.starInset = s;
          }
        }
        function En(t, e, i, s, o) {
          if (
            !e ||
            !i.enable ||
            ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))
          )
            return;
          if (
            (e.time || (e.time = 0),
            (e.delayTime ?? 0) > 0 &&
              e.time < (e.delayTime ?? 0) &&
              (e.time += t.value),
            (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
          )
            return;
          const n = rt(i.offset),
            a = (e.velocity ?? 0) * t.factor + 3.6 * n,
            r = e.decay ?? 1;
          o && "increasing" !== e.status
            ? ((e.value -= a),
              e.value < 0 &&
                (e.loops || (e.loops = 0),
                e.loops++,
                (e.status = "increasing"),
                (e.value += e.value)))
            : ((e.value += a),
              e.value > s &&
                (e.loops || (e.loops = 0),
                e.loops++,
                o && ((e.status = "decreasing"), (e.value -= e.value % s)))),
            e.velocity && 1 !== r && (e.velocity *= r),
            e.value > s && (e.value %= s);
        }
        class kn {
          constructor(t) {
            this.container = t;
          }
          init(t) {
            const e = this.container,
              i = t.options,
              s = F(i.stroke, t.id, i.reduceDuplicates);
            (t.strokeWidth = ct(s.width) * e.retina.pixelRatio),
              (t.strokeOpacity = ct(s.opacity ?? 1)),
              (t.strokeAnimation = s.color?.animation);
            const o = _e(s.color) ?? t.getFillColor();
            o &&
              (t.strokeColor = Re(o, t.strokeAnimation, e.retina.reduceFactor));
          }
          isEnabled(t) {
            const e = t.strokeAnimation,
              { strokeColor: i } = t;
            return (
              !t.destroyed &&
              !t.spawning &&
              !!e &&
              ((void 0 !== i?.h.value && i.h.enable) ||
                (void 0 !== i?.s.value && i.s.enable) ||
                (void 0 !== i?.l.value && i.l.enable))
            );
          }
          update(t, e) {
            this.isEnabled(t) &&
              (function (t, e) {
                if (!t.strokeColor || !t.strokeAnimation) return;
                const { h: i, s, l: o } = t.strokeColor,
                  { h: n, s: a, l: r } = t.strokeAnimation;
                i && En(e, i, n, 360, !1),
                  s && En(e, s, a, 100, !0),
                  o && En(e, o, r, 100, !0);
              })(t, e);
          }
        }
        const Rn = ["text", "character", "char"];
        class In {
          draw(t, e, i, s) {
            const o = e.shapeData;
            if (void 0 === o) return;
            const n = o.value;
            if (void 0 === n) return;
            void 0 === e.text && (e.text = F(n, e.randomIndexData));
            const a = e.text,
              r = o.style ?? "",
              c = o.weight ?? "400",
              h = 2 * Math.round(i),
              l = o.font ?? "Verdana",
              d = e.fill,
              u = (a.length * i) / 2;
            t.font = `${r} ${c} ${h}px "${l}"`;
            const p = { x: -u, y: i / 2 };
            (t.globalAlpha = s),
              d ? t.fillText(a, p.x, p.y) : t.strokeText(a, p.x, p.y),
              (t.globalAlpha = 1);
          }
          getSidesCount() {
            return 12;
          }
          async init(t) {
            const e = t.actualOptions;
            if (Rn.find((t) => C(t, e.particles.shape.type))) {
              const t = Rn.map((t) => e.particles.shape.options[t]).find(
                  (t) => !!t
                ),
                i = [];
              B(t, (t) => {
                i.push(O(t.font, t.weight));
              }),
                await Promise.all(i);
            }
          }
          particleInit(t, e) {
            if (!e.shape || !Rn.includes(e.shape)) return;
            const i = e.shapeData;
            if (void 0 === i) return;
            const s = i.value;
            void 0 !== s && (e.text = F(s, e.randomIndexData));
          }
        }
        async function zn(t, e = !0) {
          Zs(t),
            await (async function (t, e = !0) {
              await t.addMover("parallax", () => new nn(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalAttract", (e) => new lo(t, e), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalBounce", (t) => new po(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalBubble", (t) => new wo(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalConnect", (t) => new xo(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalGrab", (t) => new To(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalPause", (t) => new Vo(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalPush", (t) => new Mo(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalRemove", (t) => new Eo(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalRepulse", (e) => new zo(t, e), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalSlow", (t) => new Do(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("particlesAttract", (t) => new an(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("particlesCollisions", (t) => new dn(t), e);
            })(t, !1),
            await _n(t, !1),
            await (async function () {
              et("ease-in-quad", (t) => t ** 2),
                et("ease-out-quad", (t) => 1 - (1 - t) ** 2),
                et("ease-in-out-quad", (t) =>
                  t < 0.5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2
                );
            })(),
            await Jo(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("line", new on(), e);
            })(t, !1),
            await Cn(t, !1),
            await (async function (t, e = !0) {
              await t.addShape(["edge", "square"], new Mn(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("star", new Gn(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape(Rn, new In(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("life", (t) => new sn(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("rotate", (t) => new Vn(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("strokeColor", (t) => new kn(t), e);
            })(t, !1),
            await co(t, e);
        }
        class Ln {
          constructor() {
            (this.enable = !1),
              (this.speed = 0),
              (this.decay = 0),
              (this.sync = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.speed && (this.speed = dt(t.speed)),
              void 0 !== t.decay && (this.decay = dt(t.decay)),
              void 0 !== t.sync && (this.sync = t.sync));
          }
        }
        class Dn extends ae {
          constructor() {
            super(),
              (this.animation = new Ln()),
              (this.direction = "clockwise"),
              (this.enable = !1),
              (this.value = 0);
          }
          load(t) {
            super.load(t),
              t &&
                (this.animation.load(t.animation),
                void 0 !== t.direction && (this.direction = t.direction),
                void 0 !== t.enable && (this.enable = t.enable));
          }
        }
        class Hn {
          constructor(t) {
            this.container = t;
          }
          getTransformValues(t) {
            const e = t.tilt?.enable && t.tilt;
            return {
              b: e ? Math.cos(e.value) * e.cosDirection : void 0,
              c: e ? Math.sin(e.value) * e.sinDirection : void 0,
            };
          }
          init(t) {
            const e = t.options.tilt;
            if (!e) return;
            t.tilt = {
              enable: e.enable,
              value: (ct(e.value) * Math.PI) / 180,
              sinDirection: ot() >= 0.5 ? 1 : -1,
              cosDirection: ot() >= 0.5 ? 1 : -1,
            };
            let i = e.direction;
            if ("random" === i) {
              i = Math.floor(2 * ot()) > 0 ? "counter-clockwise" : "clockwise";
            }
            switch (i) {
              case "counter-clockwise":
              case "counterClockwise":
                t.tilt.status = "decreasing";
                break;
              case "clockwise":
                t.tilt.status = "increasing";
            }
            const s = t.options.tilt?.animation;
            s?.enable &&
              ((t.tilt.decay = 1 - ct(s.decay)),
              (t.tilt.velocity =
                (ct(s.speed) / 360) * this.container.retina.reduceFactor),
              s.sync || (t.tilt.velocity *= ot()));
          }
          isEnabled(t) {
            const e = t.options.tilt?.animation;
            return !t.destroyed && !t.spawning && !!e?.enable;
          }
          loadOptions(t, ...e) {
            t.tilt || (t.tilt = new Dn());
            for (const i of e) t.tilt.load(i?.tilt);
          }
          update(t, e) {
            this.isEnabled(t) &&
              (function (t, e) {
                if (!t.tilt || !t.options.tilt) return;
                const i = t.options.tilt.animation,
                  s = (t.tilt.velocity ?? 0) * e.factor,
                  o = 2 * Math.PI,
                  n = t.tilt.decay ?? 1;
                i.enable &&
                  ("increasing" === t.tilt.status
                    ? ((t.tilt.value += s),
                      t.tilt.value > o && (t.tilt.value -= o))
                    : ((t.tilt.value -= s),
                      t.tilt.value < 0 && (t.tilt.value += o)),
                  t.tilt.velocity && 1 !== n && (t.tilt.velocity *= n));
              })(t, e);
          }
        }
        class Bn {
          constructor() {
            (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
          }
          load(t) {
            t &&
              (void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.frequency && (this.frequency = t.frequency),
              void 0 !== t.opacity && (this.opacity = dt(t.opacity)));
          }
        }
        class Fn {
          constructor() {
            (this.lines = new Bn()), (this.particles = new Bn());
          }
          load(t) {
            t && (this.lines.load(t.lines), this.particles.load(t.particles));
          }
        }
        class Nn {
          getColorStyles(t, e, i, s) {
            const o = t.options.twinkle;
            if (!o) return {};
            const n = o.particles,
              a = n.enable && ot() < n.frequency,
              r = t.options.zIndex,
              c = (1 - t.zIndexFactor) ** r.opacityRate,
              h = a ? ct(n.opacity) * c : s,
              l = _e(n.color),
              d = l ? Ae(l, h) : void 0,
              u = {},
              p = a && d;
            return (u.fill = p ? d : void 0), (u.stroke = p ? d : void 0), u;
          }
          init() {}
          isEnabled(t) {
            const e = t.options.twinkle;
            return !!e && e.particles.enable;
          }
          loadOptions(t, ...e) {
            t.twinkle || (t.twinkle = new Fn());
            for (const i of e) t.twinkle.load(i?.twinkle);
          }
          update() {}
        }
        class Un {
          constructor() {
            (this.angle = 50), (this.move = 10);
          }
          load(t) {
            t &&
              (void 0 !== t.angle && (this.angle = dt(t.angle)),
              void 0 !== t.move && (this.move = dt(t.move)));
          }
        }
        class $n {
          constructor() {
            (this.distance = 5), (this.enable = !1), (this.speed = new Un());
          }
          load(t) {
            if (
              t &&
              (void 0 !== t.distance && (this.distance = dt(t.distance)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.speed)
            )
              if (Z(t.speed)) this.speed.load({ angle: t.speed });
              else {
                const e = t.speed;
                void 0 !== e.min
                  ? this.speed.load({ angle: e })
                  : this.speed.load(t.speed);
              }
          }
        }
        class qn {
          constructor(t) {
            this.container = t;
          }
          init(t) {
            const e = t.options.wobble;
            (t.wobble = e?.enable
              ? {
                  angle: ot() * Math.PI * 2,
                  angleSpeed: ct(e.speed.angle) / 360,
                  moveSpeed: ct(e.speed.move) / 10,
                }
              : { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
              (t.retina.wobbleDistance =
                ct(e?.distance ?? 0) * this.container.retina.pixelRatio);
          }
          isEnabled(t) {
            return !t.destroyed && !t.spawning && !!t.options.wobble?.enable;
          }
          loadOptions(t, ...e) {
            t.wobble || (t.wobble = new $n());
            for (const i of e) t.wobble.load(i?.wobble);
          }
          update(t, e) {
            this.isEnabled(t) &&
              (function (t, e) {
                const { wobble: i } = t.options,
                  { wobble: s } = t;
                if (!i?.enable || !s) return;
                const o = s.angleSpeed * e.factor,
                  n =
                    (s.moveSpeed *
                      e.factor *
                      ((t.retina.wobbleDistance ?? 0) * e.factor)) /
                    (1e3 / 60),
                  a = 2 * Math.PI,
                  { position: r } = t;
                (s.angle += o),
                  s.angle > a && (s.angle -= a),
                  (r.x += n * Math.cos(s.angle)),
                  (r.y += n * Math.abs(Math.sin(s.angle)));
              })(t, e);
          }
        }
        async function jn(t, e = !0) {
          await (async function (t, e = !0) {
            await t.addParticleUpdater("destroy", (e) => new Vi(t, e), e);
          })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("roll", () => new ji(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("tilt", (t) => new Hn(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("twinkle", () => new Nn(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("wobble", (t) => new qn(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalTrail", (t) => new Ui(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPlugin(new De(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              t.emitterShapeManager || (t.emitterShapeManager = new Li(t)),
                t.addEmitterShape ||
                  (t.addEmitterShape = (e, i) => {
                    t.emitterShapeManager?.addShape(e, i);
                  });
              const i = new Bi(t);
              await t.addPlugin(i, e),
                t.addEmitterShape("circle", new Ai()),
                t.addEmitterShape("square", new Hi());
            })(t, !1),
            await zn(t, e);
        }
        class Qn {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.speed = 0),
              (this.decay = 0),
              (this.delay = 0),
              (this.sync = !1),
              (this.startValue = "random");
          }
          load(t) {
            t &&
              (void 0 !== t.count && (this.count = dt(t.count)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.speed && (this.speed = dt(t.speed)),
              void 0 !== t.sync && (this.sync = t.sync),
              void 0 !== t.startValue && (this.startValue = t.startValue),
              void 0 !== t.decay && (this.decay = dt(t.decay)),
              void 0 !== t.delay && (this.delay = dt(t.delay)));
          }
        }
        class Wn {
          constructor() {
            (this.value = 0), (this.animation = new Qn());
          }
          load(t) {
            t &&
              (this.animation.load(t.animation),
              void 0 !== t.value && (this.value = dt(t.value)));
          }
        }
        class Zn {
          constructor() {
            (this.stop = 0), (this.value = new je());
          }
          load(t) {
            t &&
              (void 0 !== t.stop && (this.stop = t.stop),
              (this.value = je.create(this.value, t.value)),
              void 0 !== t.opacity &&
                ((this.opacity = new Wn()),
                Z(t.opacity)
                  ? (this.opacity.value = t.opacity)
                  : this.opacity.load(t.opacity)));
          }
        }
        class Xn {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.speed = 0),
              (this.decay = 0),
              (this.delay = 0),
              (this.sync = !1);
          }
          load(t) {
            t &&
              (void 0 !== t.count && (this.count = dt(t.count)),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.speed && (this.speed = dt(t.speed)),
              void 0 !== t.decay && (this.decay = dt(t.decay)),
              void 0 !== t.delay && (this.delay = dt(t.delay)),
              void 0 !== t.sync && (this.sync = t.sync));
          }
        }
        class Yn {
          constructor() {
            (this.value = 0),
              (this.animation = new Xn()),
              (this.direction = "clockwise");
          }
          load(t) {
            t &&
              (this.animation.load(t.animation),
              void 0 !== t.value && (this.value = dt(t.value)),
              void 0 !== t.direction && (this.direction = t.direction));
          }
        }
        class Jn {
          constructor() {
            (this.angle = new Yn()), (this.colors = []), (this.type = "random");
          }
          load(t) {
            t &&
              (this.angle.load(t.angle),
              void 0 !== t.colors &&
                (this.colors = t.colors.map((t) => {
                  const e = new Zn();
                  return e.load(t), e;
                })),
              void 0 !== t.type && (this.type = t.type));
          }
        }
        function Kn(t, e) {
          if (!e.enable) return;
          const i = e.decay ?? 1;
          switch (e.status) {
            case "increasing":
              e.value >= e.max
                ? (e.status = "decreasing")
                : (e.value += (e.velocity ?? 0) * t.factor);
              break;
            case "decreasing":
              e.value <= e.min
                ? (e.status = "increasing")
                : (e.value -= (e.velocity ?? 0) * t.factor);
          }
          e.velocity && 1 !== i && (e.velocity *= i);
        }
        function ta(t, e, i, s) {
          if (!e || !e.enable) return;
          if (
            (e.time || (e.time = 0),
            (e.delayTime ?? 0) > 0 &&
              e.time < (e.delayTime ?? 0) &&
              (e.time += t.value),
            (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
          )
            return;
          const o = (e.velocity ?? 0) * t.factor,
            n = e.decay ?? 1;
          s && "increasing" !== e.status
            ? ((e.value -= o),
              e.value < 0 && ((e.status = "increasing"), (e.value += e.value)))
            : ((e.value += o),
              s &&
                e.value > i &&
                ((e.status = "decreasing"), (e.value -= e.value % i))),
            e.value > i && (e.value %= i),
            e.velocity && 1 !== n && (e.velocity *= n);
        }
        function ea(t, e) {
          const { gradient: i } = t;
          if (i) {
            !(function (t, e) {
              const i = (e.velocity ?? 0) * t.factor,
                s = 2 * Math.PI,
                o = e.decay ?? 1;
              e.enable &&
                ("increasing" === e.status
                  ? ((e.value += i), e.value > s && (e.value -= s))
                  : ((e.value -= i), e.value < 0 && (e.value += s)),
                e.velocity && 1 !== o && (e.velocity *= o));
            })(e, i.angle);
            for (const s of i.colors)
              void 0 !== t.color?.h && ta(e, s.value.h, 360, !1),
                void 0 !== t.color?.s && ta(e, s.value.s, 100, !0),
                void 0 !== t.color?.l && ta(e, s.value.l, 100, !0),
                s.opacity && Kn(e, s.opacity);
          }
        }
        class ia {
          getColorStyles(t, e, i, s) {
            const o = t.gradient;
            if (!o) return {};
            const n = o.angle.value,
              a =
                "radial" === o.type
                  ? e.createRadialGradient(0, 0, 0, 0, 0, i)
                  : e.createLinearGradient(
                      Math.cos(n) * -i,
                      Math.sin(n) * -i,
                      Math.cos(n) * i,
                      Math.sin(n) * i
                    );
            for (const { stop: t, value: e, opacity: i } of o.colors)
              a.addColorStop(
                t,
                Ae({ h: e.h.value, s: e.s.value, l: e.l.value }, i?.value ?? s)
              );
            return { fill: a };
          }
          init(t) {
            const e = F(t.options.gradient);
            if (!e) return;
            const { angle: i } = e;
            t.gradient = {
              angle: {
                value: ct(i.value),
                enable: i.animation.enable,
                velocity:
                  (ct(i.animation.speed) / 360) *
                  t.container.retina.reduceFactor,
                decay: 1 - ct(i.animation.decay),
                delayTime: 1e3 * ct(i.animation.delay),
                time: 0,
              },
              type: e.type,
              colors: [],
            };
            let s = e.angle.direction;
            switch (
              ("random" === s &&
                (s = ot() > 0.5 ? "counter-clockwise" : "clockwise"),
              s)
            ) {
              case "counter-clockwise":
              case "counterClockwise":
                t.gradient.angle.status = "decreasing";
                break;
              case "clockwise":
                t.gradient.angle.status = "increasing";
            }
            const o = t.options.reduceDuplicates;
            for (const i of e.colors) {
              const e = _e(i.value, t.id, o);
              if (!e) continue;
              const s = Re(
                  e,
                  i.value.animation,
                  t.container.retina.reduceFactor
                ),
                n = {
                  stop: i.stop,
                  value: s,
                  opacity: i.opacity
                    ? {
                        enable: i.opacity.animation.enable,
                        max: lt(i.opacity.value),
                        min: ht(i.opacity.value),
                        status: "increasing",
                        value: ct(i.opacity.value),
                        velocity:
                          (ct(i.opacity.animation.speed) / 100) *
                          t.container.retina.reduceFactor,
                        decay: 1 - ct(i.opacity.animation.decay),
                        delayTime: 1e3 * ct(i.opacity.animation.delay),
                        time: 0,
                      }
                    : void 0,
                },
                { opacity: a } = n;
              if (i.opacity && a) {
                const t = i.opacity.value;
                (a.min = ht(t)), (a.max = lt(t));
                switch (i.opacity.animation.startValue) {
                  case "min":
                    (a.value = a.min), (a.status = "increasing");
                    break;
                  case "max":
                    (a.value = a.max), (a.status = "decreasing");
                    break;
                  default:
                    (a.value = rt(a)),
                      (a.status = ot() >= 0.5 ? "increasing" : "decreasing");
                }
              }
              t.gradient.colors.push(n);
            }
          }
          isEnabled(t) {
            return (
              !t.destroyed &&
              !t.spawning &&
              (t.gradient?.angle.enable ||
                (t.gradient?.colors.some(
                  (t) =>
                    t.value.h.enable || t.value.s.enable || t.value.l.enable
                ) ??
                  !1))
            );
          }
          loadOptions(t, ...e) {
            for (const i of e) {
              if (!i?.gradient) continue;
              const e = i.gradient;
              e &&
                (t.gradient = B(e, (t) => {
                  const e = new Jn();
                  return e.load(t), e;
                }));
            }
          }
          update(t, e) {
            ea(t, e);
          }
        }
        class sa {
          draw(t, e, i) {
            const s = -i,
              o = -i;
            t.moveTo(s, o + i / 2),
              t.quadraticCurveTo(s, o, s + i / 2, o),
              t.quadraticCurveTo(s + i, o, s + i, o + i / 2),
              t.quadraticCurveTo(s + i, o, s + (3 * i) / 2, o),
              t.quadraticCurveTo(s + 2 * i, o, s + 2 * i, o + i / 2),
              t.quadraticCurveTo(
                s + 2 * i,
                o + i,
                s + (3 * i) / 2,
                o + (3 * i) / 2
              ),
              t.lineTo(s + i, o + 2 * i),
              t.lineTo(s + i / 2, o + (3 * i) / 2),
              t.quadraticCurveTo(s, o + i, s, o + i / 2);
          }
        }
        function oa(t) {
          const e = { b: 0, g: 0, r: 0 },
            i = t.h / 60,
            s = t.s / 100,
            o = t.v / 100,
            n = o * s,
            a = n * (1 - Math.abs((i % 2) - 1));
          let r;
          if (
            (i >= 0 && i <= 1
              ? (r = { r: n, g: a, b: 0 })
              : i > 1 && i <= 2
              ? (r = { r: a, g: n, b: 0 })
              : i > 2 && i <= 3
              ? (r = { r: 0, g: n, b: a })
              : i > 3 && i <= 4
              ? (r = { r: 0, g: a, b: n })
              : i > 4 && i <= 5
              ? (r = { r: a, g: 0, b: n })
              : i > 5 && i <= 6 && (r = { r: n, g: 0, b: a }),
            r)
          ) {
            const t = o - n;
            (e.r = Math.floor(255 * (r.r + t))),
              (e.g = Math.floor(255 * (r.g + t))),
              (e.b = Math.floor(255 * (r.b + t)));
          }
          return e;
        }
        class na {
          constructor() {
            (this.key = "hsv"), (this.stringPrefix = "hsv");
          }
          handleColor(t) {
            const e = t.value.hsv ?? t.value;
            if (void 0 !== e.h && void 0 !== e.v) return oa(e);
          }
          handleRangeColor(t) {
            const e = t.value.hsv ?? t.value;
            if (void 0 !== e.h && void 0 !== e.v)
              return oa({ h: ct(e.h), s: ct(e.s), v: ct(e.v) });
          }
          parseString(t) {
            if (!t.startsWith("hsv")) return;
            const e =
              /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
                t
              );
            return e
              ? {
                  a: (i = {
                    a: e.length > 4 ? xt(e[5]) : 1,
                    h: parseInt(e[1], 10),
                    s: parseInt(e[2], 10),
                    v: parseInt(e[3], 10),
                  }).a,
                  ...oa(i),
                }
              : void 0;
            var i;
          }
        }
        async function aa() {
          fe(new na());
        }
        class ra {
          constructor() {
            (this.color = new ie()),
              (this.color.value = "#ff0000"),
              (this.radius = 0),
              (this.rate = 1);
          }
          load(t) {
            void 0 !== t &&
              (void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)),
              (this.duration = t.duration),
              (this.infectedStage = t.infectedStage),
              void 0 !== t.radius && (this.radius = t.radius),
              void 0 !== t.rate && (this.rate = t.rate));
          }
        }
        class ca {
          constructor() {
            (this.cure = !1),
              (this.delay = 0),
              (this.enable = !1),
              (this.infections = 0),
              (this.stages = []);
          }
          load(t) {
            void 0 !== t &&
              (void 0 !== t.cure && (this.cure = t.cure),
              void 0 !== t.delay && (this.delay = t.delay),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.infections && (this.infections = t.infections),
              void 0 !== t.stages &&
                (this.stages = t.stages.map((t) => {
                  const e = new ra();
                  return e.load(t), e;
                })));
          }
        }
        class ha {
          constructor(t) {
            (this._nextInfectionStage = (t) => {
              const e = this._container.actualOptions.infection,
                { infection: i } = t;
              if (!e || !i) return;
              const s = e.stages.length;
              if (
                !(s <= 0 || void 0 === i.stage) &&
                ((i.time = 0), s <= ++i.stage)
              ) {
                if (e.cure) return delete i.stage, void delete i.time;
                (i.stage = 0), (i.time = 0);
              }
            }),
              (this._container = t);
          }
          startInfection(t, e) {
            const i = this._container.actualOptions.infection,
              { infection: s } = t;
            if (!i || !s) return;
            e > i.stages.length || e < 0 || ((s.delay = 0), (s.delayStage = e));
          }
          updateInfection(t, e) {
            const i = this._container.actualOptions.infection,
              { infection: s } = t;
            if (!i || !s) return;
            const o = i.stages,
              n = o.length;
            if (void 0 !== s.delay && void 0 !== s.delayStage) {
              const t = s.delayStage;
              if (t > n || t < 0) return;
              s.delay >= 1e3 * i.delay
                ? ((s.stage = t),
                  (s.time = 0),
                  delete s.delay,
                  delete s.delayStage)
                : (s.delay += e);
            } else delete s.delay, delete s.delayStage;
            if (void 0 !== s.stage && void 0 !== s.time) {
              const i = o[s.stage];
              void 0 !== i.duration &&
              i.duration >= 0 &&
              s.time > 1e3 * i.duration
                ? this._nextInfectionStage(t)
                : (s.time += e);
            } else delete s.stage, delete s.time;
          }
          updateInfectionStage(t, e) {
            const i = this._container.actualOptions,
              { infection: s } = t;
            if (!i.infection || !s) return;
            e > i.infection.stages.length ||
              e < 0 ||
              (void 0 !== s.stage && s.stage > e) ||
              ((s.stage = e), (s.time = 0));
          }
        }
        class la {
          constructor(t) {
            (this._container = t),
              (this._container.infecter = new ha(this._container));
          }
          particleFillColor(t) {
            const e = this._container.actualOptions;
            if (!t.infection || !e.infection) return;
            const i = t.infection.stage,
              s = e.infection.stages;
            return void 0 !== i ? s[i].color : void 0;
          }
          particleStrokeColor(t) {
            return this.particleFillColor(t);
          }
          particlesSetup() {
            const t = this._container.actualOptions;
            if (t.infection)
              for (let e = 0; e < t.infection.infections; e++) {
                const t = this._container.particles.filter((t) => {
                    const e = t;
                    return (
                      e.infection || (e.infection = {}),
                      void 0 === e.infection.stage
                    );
                  }),
                  e = V(t);
                this._container.infecter?.startInfection(e, 0);
              }
          }
        }
        class da extends js {
          constructor(t) {
            super(t);
          }
          clear() {}
          init() {}
          async interact(t, e) {
            const i = this.container.infecter;
            if (!i) return;
            if ((i.updateInfection(t, e.value), void 0 === t.infection?.stage))
              return;
            const s = this.container,
              o = s.actualOptions.infection;
            if (!o?.enable || o.stages.length < 1) return;
            const n = o.stages[t.infection.stage],
              a = s.retina.pixelRatio,
              r = 2 * t.getRadius() + n.radius * a,
              c = t.getPosition(),
              h = n.infectedStage ?? t.infection.stage,
              l = s.particles.quadTree.queryCircle(c, r),
              d = n.rate,
              u = l.length;
            for (const e of l) {
              const s = e;
              if (
                !(
                  s === t ||
                  s.destroyed ||
                  s.spawning ||
                  (void 0 !== s.infection?.stage &&
                    s.infection.stage === t.infection.stage) ||
                  ot() >= d / u
                )
              )
                if (void 0 === s.infection?.stage) i.startInfection(s, h);
                else if (s.infection.stage < t.infection.stage)
                  i.updateInfectionStage(s, h);
                else if (s.infection.stage > t.infection.stage) {
                  const e = o.stages[s.infection.stage],
                    n = e?.infectedStage ?? s.infection.stage;
                  i.updateInfectionStage(t, n);
                }
            }
          }
          isEnabled() {
            return this.container.actualOptions?.infection?.enable ?? !1;
          }
          reset() {}
        }
        class ua {
          constructor() {
            this.id = "infection";
          }
          getPlugin(t) {
            return new la(t);
          }
          loadOptions(t, e) {
            if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
            let i = t.infection;
            void 0 === i?.load && (t.infection = i = new ca()),
              i.load(e?.infection);
          }
          needsPlugin(t) {
            return t?.infection?.enable ?? !1;
          }
        }
        class pa {
          constructor() {
            (this.start = new ie()),
              (this.stop = new ie()),
              (this.start.value = "#ffffff"),
              (this.stop.value = "#000000");
          }
          load(t) {
            t &&
              ((this.start = ie.create(this.start, t.start)),
              (this.stop = ie.create(this.stop, t.stop)));
          }
        }
        class ga {
          constructor() {
            (this.gradient = new pa()), (this.radius = 1e3);
          }
          load(t) {
            t &&
              (this.gradient.load(t.gradient),
              void 0 !== t.radius && (this.radius = t.radius));
          }
        }
        class fa {
          constructor() {
            (this.color = new ie()),
              (this.color.value = "#000000"),
              (this.length = 2e3);
          }
          load(t) {
            t &&
              ((this.color = ie.create(this.color, t.color)),
              void 0 !== t.length && (this.length = t.length));
          }
        }
        class ya {
          constructor() {
            (this.area = new ga()), (this.shadow = new fa());
          }
          load(t) {
            t && (this.area.load(t.area), this.shadow.load(t.shadow));
          }
        }
        class va extends Fi {
          constructor(t) {
            super(t);
          }
          clear() {}
          init() {}
          async interact() {
            const t = this.container,
              e = t.actualOptions,
              i = t.interactivity;
            if (
              !e.interactivity.events.onHover.enable ||
              "pointermove" !== i.status
            )
              return;
            const s = i.mouse.position;
            s &&
              t.canvas.draw((e) => {
                !(function (t, e, i) {
                  const s = t.actualOptions.interactivity.modes.light?.area;
                  if (!s) return;
                  e.beginPath(), e.arc(i.x, i.y, s.radius, 0, 2 * Math.PI);
                  const o = e.createRadialGradient(
                      i.x,
                      i.y,
                      0,
                      i.x,
                      i.y,
                      s.radius
                    ),
                    n = t.canvas.mouseLight;
                  n &&
                    n.start &&
                    n.stop &&
                    (o.addColorStop(0, Ve(n.start)),
                    o.addColorStop(1, Ve(n.stop)),
                    (e.fillStyle = o),
                    e.fill());
                })(t, e, s);
              });
          }
          isEnabled(t) {
            const e = this.container,
              i = e.interactivity.mouse,
              s = t?.interactivity ?? e.actualOptions.interactivity,
              o = s.events;
            if (!o.onHover.enable || !i.position) return !1;
            const n = C("light", o.onHover.mode);
            if (n && s.modes.light) {
              const t = s.modes.light.area.gradient;
              e.canvas.mouseLight = { start: we(t.start), stop: we(t.stop) };
            }
            return n;
          }
          loadModeOptions(t, ...e) {
            t.light || (t.light = new ya());
            for (const i of e) t.light.load(i?.light);
          }
          reset() {}
        }
        class wa extends js {
          constructor(t) {
            super(t);
          }
          clear() {}
          init() {}
          async interact(t) {
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity;
            if (
              !i.interactivity.events.onHover.enable ||
              "pointermove" !== s.status
            )
              return;
            const o = s.mouse.position;
            o &&
              e.canvas.draw((i) => {
                !(function (t, e, i, s) {
                  const o = i.getPosition(),
                    n = t.actualOptions.interactivity.modes.light?.shadow;
                  if (!n) return;
                  const a = i.lightShadow;
                  if (!a) return;
                  const r = i.getRadius(),
                    c = i.sides,
                    h = (2 * Math.PI) / c,
                    l = -i.rotation + Math.PI / 4,
                    d = [];
                  for (let t = 0; t < c; t++)
                    d.push({
                      x: o.x + r * Math.sin(l + h * t) * 1,
                      y: o.y + r * Math.cos(l + h * t) * 1,
                    });
                  const u = [],
                    p = n.length;
                  for (const t of d) {
                    const e = Math.atan2(s.y - t.y, s.x - t.x),
                      i = {
                        x: t.x + p * Math.sin(-e - Math.PI / 2),
                        y: t.y + p * Math.cos(-e - Math.PI / 2),
                      };
                    u.push({ end: i, start: t });
                  }
                  const g = Ve(a);
                  for (let t = u.length - 1, i = 0; t >= 0; i = t--)
                    e.beginPath(),
                      e.moveTo(u[t].start.x, u[t].start.y),
                      e.lineTo(u[i].start.x, u[i].start.y),
                      e.lineTo(u[i].end.x, u[i].end.y),
                      e.lineTo(u[t].end.x, u[t].end.y),
                      (e.fillStyle = g),
                      e.fill();
                })(e, i, t, o);
              });
          }
          isEnabled(t) {
            const e = this.container,
              i = t.interactivity ?? e.actualOptions.interactivity,
              s = e.interactivity.mouse,
              o = i.events;
            if (!o.onHover.enable || !s.position) return !1;
            const n = C("light", o.onHover.mode);
            if (n && i.modes.light) {
              const e = i.modes.light.shadow;
              t.lightShadow = we(e.color);
            }
            return n;
          }
          reset() {}
        }
        class ma {
          constructor() {
            (this.factor = 4), (this.value = !0);
          }
          load(t) {
            t &&
              (void 0 !== t.factor && (this.factor = t.factor),
              void 0 !== t.value && (this.value = t.value));
          }
        }
        class ba {
          constructor() {
            (this.disable = !1), (this.reduce = new ma());
          }
          load(t) {
            t &&
              (void 0 !== t.disable && (this.disable = t.disable),
              this.reduce.load(t.reduce));
          }
        }
        class _a {
          constructor(t, e) {
            (this._handleMotionChange = (t) => {
              const e = this._container,
                i = e.actualOptions.motion;
              i &&
                (e.retina.reduceFactor = t.matches
                  ? i.disable
                    ? 0
                    : i.reduce.value
                    ? 1 / i.reduce.factor
                    : 1
                  : 1);
            }),
              (this._container = t),
              (this._engine = e);
          }
          async init() {
            const t = this._container,
              e = t.actualOptions.motion;
            if (!e || (!e.disable && !e.reduce.value))
              return void (t.retina.reduceFactor = 1);
            const i = x("(prefers-reduced-motion: reduce)");
            if (!i) return void (t.retina.reduceFactor = 1);
            this._handleMotionChange(i);
            const s = async () => {
              this._handleMotionChange(i);
              try {
                await t.refresh();
              } catch {}
            };
            void 0 !== i.addEventListener
              ? i.addEventListener("change", s)
              : void 0 !== i.addListener && i.addListener(s);
          }
        }
        class Sa {
          constructor(t) {
            (this.id = "motion"), (this._engine = t);
          }
          getPlugin(t) {
            return new _a(t, this._engine);
          }
          loadOptions(t, e) {
            if (!this.needsPlugin()) return;
            let i = t.motion;
            i?.load || (t.motion = i = new ba()), i.load(e?.motion);
          }
          needsPlugin() {
            return !0;
          }
        }
        class xa {
          constructor() {
            this._drawLine = (t, e, i, s, o, n) => {
              const a = { x: -((e.length * i) / 2), y: i / 2 };
              n
                ? t.fillText(e, a.x, a.y + 2 * i * o)
                : t.strokeText(e, a.x, a.y + 2 * i * o);
            };
          }
          draw(t, e, i, s) {
            const o = e.shapeData;
            if (void 0 === o) return;
            const n = o.value;
            if (void 0 === n) return;
            void 0 === e.text && (e.text = F(n, e.randomIndexData));
            const a = e.text,
              r = o.style ?? "",
              c = o.weight ?? "400",
              h = 2 * Math.round(i),
              l = o.font ?? "Verdana",
              d = e.fill;
            t.font = `${r} ${c} ${h}px "${l}"`;
            const u = a?.split("\n");
            if (u) {
              t.globalAlpha = s;
              for (let e = 0; e < u.length; e++)
                this._drawLine(t, u[e], i, s, e, d);
              t.globalAlpha = 1;
            }
          }
          async init(t) {
            const e = t.options,
              i = "multiline-text";
            if (C(i, e.particles.shape.type)) {
              const t = e.particles.shape.options[i],
                s = [];
              B(t, (t) => {
                s.push(O(t.font, t.weight));
              }),
                await Promise.all(s);
            }
          }
          particleInit(t, e) {
            if ("multiline-text" !== e.shape) return;
            const i = e.shapeData;
            if (void 0 === i) return;
            const s = i.value;
            void 0 !== s && (e.text = F(s, e.randomIndexData));
          }
        }
        class Pa extends ae {
          constructor() {
            super(),
              (this.value = 45),
              (this.random.enable = !1),
              (this.random.minimumValue = 0);
          }
          load(t) {
            void 0 !== t && super.load(t);
          }
        }
        class Ca {
          constructor() {
            (this.animation = new se()),
              (this.enable = !1),
              (this.opacity = 1),
              (this.rotation = new Pa()),
              (this.width = 1);
          }
          load(t) {
            t &&
              (this.animation.load(t.animation),
              this.rotation.load(t.rotation),
              void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.opacity && (this.opacity = dt(t.opacity)),
              void 0 !== t.width && (this.width = dt(t.width)),
              void 0 !== t.radius && (this.radius = dt(t.radius)),
              void 0 !== t.color &&
                (this.color = ie.create(this.color, t.color)));
          }
        }
        class Oa {
          constructor(t) {
            this.container = t;
          }
          afterDraw(t) {
            const e = t.options.orbit;
            e?.enable && this.drawOrbit(t, "front");
          }
          beforeDraw(t) {
            const e = t.options.orbit;
            e?.enable && this.drawOrbit(t, "back");
          }
          drawOrbit(t, e) {
            const i = this.container;
            let s, o;
            switch (e) {
              case "back":
                (s = Math.PI / 2), (o = (3 * Math.PI) / 2);
                break;
              case "front":
                (s = (3 * Math.PI) / 2), (o = Math.PI / 2);
                break;
              default:
                (s = 0), (o = 2 * Math.PI);
            }
            i.canvas.draw((e) => {
              !(function (t, e, i, s, o, n, a, r, c) {
                if (n <= 0) return;
                const h = e.getPosition();
                i && (t.strokeStyle = Ae(i, o)), (t.lineWidth = n);
                const l = (a * Math.PI) / 180;
                t.beginPath(),
                  t.ellipse(h.x, h.y, s / 2, 2 * s, l, r, c),
                  t.stroke();
              })(
                e,
                t,
                t.orbitColor ?? t.getFillColor(),
                t.retina.orbitRadius ?? i.retina.orbitRadius ?? t.getRadius(),
                t.orbitOpacity ?? 1,
                t.orbitWidth ?? 1,
                (t.orbitRotation ?? 0) * i.retina.pixelRatio,
                s,
                o
              );
            });
          }
          init(t) {
            const e = this.container,
              i = t.options.orbit;
            i?.enable &&
              ((t.orbitRotation = ct(i.rotation.value)),
              (t.orbitColor = _e(i.color)),
              (t.retina.orbitRadius =
                void 0 !== i.radius
                  ? ct(i.radius) * e.retina.pixelRatio
                  : void 0),
              (e.retina.orbitRadius = t.retina.orbitRadius),
              (t.orbitAnimationSpeed = i.animation.enable
                ? ct(i.animation.speed)
                : 0),
              (t.orbitWidth = ct(i.width)),
              (t.orbitOpacity = ct(i.opacity)));
          }
          isEnabled(t) {
            const e = t.options.orbit?.animation;
            return !t.destroyed && !t.spawning && !!e?.enable;
          }
          loadOptions(t, ...e) {
            t.orbit || (t.orbit = new Ca());
            for (const i of e) t.orbit.load(i?.orbit);
          }
          update(t, e) {
            this.isEnabled(t) &&
              (void 0 === t.orbitRotation && (t.orbitRotation = 0),
              (t.orbitRotation +=
                (t.orbitAnimationSpeed ?? 0 / (2 * Math.PI)) * e.factor));
          }
        }
        class Ta extends ae {
          constructor() {
            super(),
              (this.enabled = !1),
              (this.distance = 1),
              (this.duration = 1),
              (this.factor = 1),
              (this.speed = 1);
          }
          load(t) {
            super.load(t),
              t &&
                (void 0 !== t.enabled && (this.enabled = t.enabled),
                void 0 !== t.distance && (this.distance = dt(t.distance)),
                void 0 !== t.duration && (this.duration = dt(t.duration)),
                void 0 !== t.factor && (this.factor = dt(t.factor)),
                void 0 !== t.speed && (this.speed = dt(t.speed)));
          }
        }
        class Va extends js {
          constructor(t) {
            super(t);
          }
          clear() {}
          init() {}
          async interact(t) {
            const e = this.container;
            if (!t.repulse) {
              const i = t.options.repulse;
              if (!i) return;
              t.repulse = {
                distance: ct(i.distance) * e.retina.pixelRatio,
                speed: ct(i.speed),
                factor: ct(i.factor),
              };
            }
            const i = t.getPosition(),
              s = e.particles.quadTree.queryCircle(i, t.repulse.distance);
            for (const e of s) {
              if (t === e || e.destroyed) continue;
              const s = e.getPosition(),
                { dx: o, dy: n, distance: a } = pt(s, i),
                r = t.repulse.speed * t.repulse.factor;
              if (a > 0) {
                const i = nt(
                    (1 - Math.pow(a / t.repulse.distance, 2)) * r,
                    0,
                    r
                  ),
                  s = y.create((o / a) * i, (n / a) * i);
                e.position.addTo(s);
              } else {
                const t = y.create(r, r);
                e.position.addTo(t);
              }
            }
          }
          isEnabled(t) {
            return t.options.repulse?.enabled ?? !1;
          }
          loadParticlesOptions(t, ...e) {
            t.repulse || (t.repulse = new Ta());
            for (const i of e) t.repulse.load(i?.repulse);
          }
          reset() {}
        }
        class Aa {
          draw(t, e, i) {
            e.pathData &&
              (function (t, e, i) {
                t.moveTo(
                  i.segments[0].values[0].x * e,
                  i.segments[0].values[0].y * e
                );
                for (let s = 0; s < i.segments.length; s++) {
                  const o = i.segments[s];
                  switch (o.type) {
                    case "line":
                      t.lineTo(o.values[0].x * e, o.values[0].y * e);
                      break;
                    case "bezier":
                      t.bezierCurveTo(
                        o.values[1].x * e,
                        o.values[1].y * e,
                        o.values[2].x * e,
                        o.values[2].y * e,
                        o.values[3].x * e,
                        o.values[3].y * e
                      );
                      break;
                    case "quadratic":
                      t.quadraticCurveTo(
                        o.values[1].x * e,
                        o.values[1].y * e,
                        o.values[2].x * e,
                        o.values[2].y * e
                      );
                      break;
                    case "arc":
                      t.arc(
                        o.values[0].x * e,
                        o.values[0].y * e,
                        o.values[1].x * e,
                        o.values[2].x,
                        o.values[2].y
                      );
                      break;
                    case "ellipse":
                      t.ellipse(
                        o.values[0].x * e,
                        o.values[0].y * e,
                        o.values[1].x * e,
                        o.values[1].y * e,
                        o.values[2].x,
                        o.values[3].x,
                        o.values[3].y
                      );
                  }
                }
                if (i.half)
                  for (let s = i.segments.length - 1; s >= 0; s--) {
                    const o = i.segments[s];
                    switch (o.type) {
                      case "line":
                        t.lineTo(o.values[0].x * -e, o.values[0].y * e);
                        break;
                      case "bezier":
                        t.bezierCurveTo(
                          -o.values[2].x * e,
                          o.values[2].y * e,
                          -o.values[1].x * e,
                          o.values[1].y * e,
                          -o.values[0].x * e,
                          o.values[0].y * e
                        );
                        break;
                      case "quadratic":
                        t.quadraticCurveTo(
                          -o.values[1].x * e,
                          o.values[1].y * e,
                          -o.values[2].x * e,
                          o.values[2].y * e
                        );
                    }
                  }
              })(t, i, e.pathData);
          }
          particleInit(t, e) {
            const i = e.shapeData;
            i && (e.pathData = E({}, i));
          }
        }
        class Ma {
          constructor(t, e, i) {
            (this.x = t), (this.y = e), (this.z = i);
          }
          dot2(t, e) {
            return this.x * t + this.y * e;
          }
          dot3(t, e, i) {
            return this.dot2(t, e) + this.z * i;
          }
        }
        const Ga = [
            new Ma(1, 1, 0),
            new Ma(-1, 1, 0),
            new Ma(1, -1, 0),
            new Ma(-1, -1, 0),
            new Ma(1, 0, 1),
            new Ma(-1, 0, 1),
            new Ma(1, 0, -1),
            new Ma(-1, 0, -1),
            new Ma(0, 1, 1),
            new Ma(0, -1, 1),
            new Ma(0, 1, -1),
            new Ma(0, -1, -1),
          ],
          Ea = [
            151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7,
            225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6,
            148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35,
            11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171,
            168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231,
            83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245,
            40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76,
            132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86,
            164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5,
            202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16,
            58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
            154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253,
            19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246,
            97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
            81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199,
            106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
            138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78,
            66, 215, 61, 156, 180,
          ],
          ka = new Array(512),
          Ra = new Array(512);
        function Ia(t) {
          return t * t * t * (t * (6 * t - 15) + 10);
        }
        function za(t, e, i) {
          return (1 - i) * t + i * e;
        }
        class La {
          noise(t, e, i) {
            let s = Math.floor(t),
              o = Math.floor(e),
              n = Math.floor(i);
            (t -= s), (e -= o), (i -= n), (s &= 255), (o &= 255), (n &= 255);
            const a = Ra[s + ka[o + ka[n]]].dot3(t, e, i),
              r = Ra[s + ka[o + ka[n + 1]]].dot3(t, e, i - 1),
              c = Ra[s + ka[o + 1 + ka[n]]].dot3(t, e - 1, i),
              h = Ra[s + ka[o + 1 + ka[n + 1]]].dot3(t, e - 1, i - 1),
              l = Ra[s + 1 + ka[o + ka[n]]].dot3(t - 1, e, i),
              d = Ra[s + 1 + ka[o + ka[n + 1]]].dot3(t - 1, e, i - 1),
              u = Ra[s + 1 + ka[o + 1 + ka[n]]].dot3(t - 1, e - 1, i),
              p = Ra[s + 1 + ka[o + 1 + ka[n + 1]]].dot3(t - 1, e - 1, i - 1),
              g = Ia(t),
              f = Ia(e),
              y = Ia(i);
            return za(
              za(za(a, l, g), za(r, d, g), y),
              za(za(c, u, g), za(h, p, g), y),
              f
            );
          }
          seed(t) {
            let e = t;
            e > 0 && e < 1 && (e *= 65536),
              (e = Math.floor(e)),
              e < 256 && (e |= e << 8);
            for (let t = 0; t < 256; t++) {
              const i = 1 & t ? Ea[t] ^ (255 & e) : Ea[t] ^ ((e >> 8) & 255);
              (ka[t] = ka[t + 256] = i), (Ra[t] = Ra[t + 256] = Ga[i % 12]);
            }
          }
        }
        class Da {
          constructor() {
            (this._calculateField = () => {
              const { field: t, noiseGen: e, options: i } = this;
              for (let s = 0; s < i.columns; s++) {
                const o = t[s];
                for (let t = 0; t < i.rows; t++) {
                  const i = o[t];
                  (i.length = e.noise(
                    s / 100 + 4e4,
                    t / 100 + 4e4,
                    this.noiseZ
                  )),
                    (i.angle =
                      e.noise(s / 50, t / 50, this.noiseZ) * Math.PI * 2);
                }
              }
            }),
              (this._drawField = (t) => {
                const { field: e, options: i } = this;
                for (let s = 0; s < i.columns; s++) {
                  const o = e[s];
                  for (let e = 0; e < i.rows; e++) {
                    const i = o[e],
                      { angle: n, length: a } = i;
                    t.setTransform(
                      1,
                      0,
                      0,
                      1,
                      s * this.options.size,
                      e * this.options.size
                    ),
                      t.rotate(n),
                      (t.strokeStyle = "white"),
                      t.beginPath(),
                      t.moveTo(0, 0),
                      t.lineTo(0, this.options.size * a),
                      t.stroke(),
                      t.setTransform(1, 0, 0, 1, 0, 0);
                  }
                }
              }),
              (this._initField = () => {
                const { columns: t, rows: e } = this.options;
                this.field = new Array(t);
                for (let i = 0; i < t; i++) {
                  this.field[i] = new Array(e);
                  for (let t = 0; t < e; t++) this.field[i][t] = y.origin;
                }
              }),
              (this._resetField = (t) => {
                const e = t.actualOptions.particles.move.path.options,
                  { options: i } = this;
                (i.size = e.size > 0 ? e.size : 20),
                  (i.increment = e.increment > 0 ? e.increment : 0.004),
                  (i.draw = !!e.draw),
                  (i.width = t.canvas.size.width),
                  (i.height = t.canvas.size.height),
                  this.noiseGen.seed(e.seed ?? ot()),
                  (i.columns =
                    Math.floor(this.options.width / this.options.size) + 1),
                  (i.rows =
                    Math.floor(this.options.height / this.options.size) + 1),
                  this._initField();
              }),
              (this._setup = (t) => {
                (this.noiseZ = 0),
                  this._resetField(t),
                  window.addEventListener("resize", () => this._resetField(t));
              }),
              (this.noiseGen = new La()),
              (this.field = []),
              (this.noiseZ = 0),
              (this.options = {
                draw: !1,
                size: 20,
                increment: 0.004,
                columns: 0,
                rows: 0,
                width: 0,
                height: 0,
              });
          }
          generate(t) {
            const e = t.getPosition(),
              { size: i } = this.options,
              s = Math.max(Math.floor(e.x / i), 0),
              o = Math.max(Math.floor(e.y / i), 0),
              { field: n } = this;
            return n && n[s] && n[s][o] ? n[s][o].copy() : y.origin;
          }
          init(t) {
            (this.container = t), this._setup(t);
          }
          reset() {}
          update() {
            this.container &&
              (this._calculateField(),
              (this.noiseZ += this.options.increment),
              this.options.draw &&
                this.container.canvas.draw((t) => this._drawField(t)));
          }
        }
        const Ha = "perlinNoise";
        i(442);
        class Ba {
          constructor() {
            (this.color = new ie()), (this.width = 0.5), (this.opacity = 1);
          }
          load(t) {
            t &&
              ((this.color = ie.create(this.color, t.color)),
              W(this.color.value) &&
                (this.opacity = xe(this.color.value) ?? this.opacity),
              void 0 !== t.opacity && (this.opacity = t.opacity),
              void 0 !== t.width && (this.width = t.width));
          }
        }
        class Fa {
          constructor() {
            (this.enable = !1), (this.stroke = new Ba());
          }
          get lineColor() {
            return this.stroke.color;
          }
          set lineColor(t) {
            this.stroke.color = ie.create(this.stroke.color, t);
          }
          get lineWidth() {
            return this.stroke.width;
          }
          set lineWidth(t) {
            this.stroke.width = t;
          }
          load(t) {
            if (!t) return;
            void 0 !== t.enable && (this.enable = t.enable);
            const e = t.stroke ?? { color: t.lineColor, width: t.lineWidth };
            this.stroke.load(e);
          }
        }
        class Na {
          constructor() {
            this.arrangement = "one-per-point";
          }
          load(t) {
            t && void 0 !== t.arrangement && (this.arrangement = t.arrangement);
          }
        }
        class Ua {
          constructor() {
            (this.path = []), (this.size = { height: 0, width: 0 });
          }
          load(t) {
            t &&
              (void 0 !== t.path && (this.path = t.path),
              void 0 !== t.size &&
                (void 0 !== t.size.width && (this.size.width = t.size.width),
                void 0 !== t.size.height &&
                  (this.size.height = t.size.height)));
          }
        }
        class $a {
          constructor() {
            (this.radius = 10), (this.type = "path");
          }
          load(t) {
            t &&
              (void 0 !== t.radius && (this.radius = t.radius),
              void 0 !== t.type && (this.type = t.type));
          }
        }
        class qa {
          constructor() {
            (this.draw = new Fa()),
              (this.enable = !1),
              (this.inline = new Na()),
              (this.move = new $a()),
              (this.scale = 1),
              (this.type = "none");
          }
          get inlineArrangement() {
            return this.inline.arrangement;
          }
          set inlineArrangement(t) {
            this.inline.arrangement = t;
          }
          load(t) {
            t &&
              (this.draw.load(t.draw),
              this.inline.load(t.inline),
              this.move.load(t.move),
              void 0 !== t.scale && (this.scale = t.scale),
              void 0 !== t.type && (this.type = t.type),
              void 0 !== t.enable
                ? (this.enable = t.enable)
                : (this.enable = "none" !== this.type),
              void 0 !== t.url && (this.url = t.url),
              void 0 !== t.data &&
                (W(t.data)
                  ? (this.data = t.data)
                  : ((this.data = new Ua()), this.data.load(t.data))),
              void 0 !== t.position && (this.position = E({}, t.position)));
          }
        }
        function ja(t, e, i) {
          const s = we(i.color);
          if (s) {
            t.beginPath(), t.moveTo(e[0].x, e[0].y);
            for (const i of e) t.lineTo(i.x, i.y);
            t.closePath(),
              (t.strokeStyle = Ve(s)),
              (t.lineWidth = i.width),
              t.stroke();
          }
        }
        function Qa(t, e, i, s) {
          t.setTransform(1, 0, 0, 1, s.x, s.y);
          const o = we(i.color);
          o &&
            ((t.strokeStyle = Ve(o, i.opacity)),
            (t.lineWidth = i.width),
            t.stroke(e),
            t.setTransform(1, 0, 0, 1, 0, 0));
        }
        function Wa(t, e, i) {
          const { dx: s, dy: o } = pt(i, t),
            { dx: n, dy: a } = pt(e, t),
            r = (s * n + o * a) / (n ** 2 + a ** 2),
            c = {
              x: t.x + n * r,
              y: t.y + a * r,
              isOnSegment: r >= 0 && r <= 1,
            };
          return (
            r < 0
              ? ((c.x = t.x), (c.y = t.y))
              : r > 1 && ((c.x = e.x), (c.y = e.y)),
            c
          );
        }
        function Za(t, e, i) {
          const { dx: s, dy: o } = pt(t, e),
            n = Math.atan2(o, s),
            a = y.create(Math.sin(n), -Math.cos(n)),
            r = 2 * (i.x * a.x + i.y * a.y);
          a.multTo(r), i.subFrom(a);
        }
        const Xa = `${g} No polygon data loaded.`,
          Ya = `${g} No polygon found, you need to specify SVG url in config.`;
        class Ja {
          constructor(t, e) {
            (this._checkInsidePolygon = (t) => {
              const e = this._container,
                i = e.actualOptions.polygon;
              if (!i?.enable || "none" === i.type || "inline" === i.type)
                return !0;
              if (!this.raw) throw new Error(Ya);
              const s = e.canvas.size,
                o = t?.x ?? ot() * s.width,
                n = t?.y ?? ot() * s.height;
              let a = !1;
              for (
                let t = 0, e = this.raw.length - 1;
                t < this.raw.length;
                e = t++
              ) {
                const i = this.raw[t],
                  s = this.raw[e];
                i.y > n != s.y > n &&
                  o < ((s.x - i.x) * (n - i.y)) / (s.y - i.y) + i.x &&
                  (a = !a);
              }
              return "inside" === i.type ? a : "outside" === i.type && !a;
            }),
              (this._createPath2D = () => {
                if (this._container.actualOptions.polygon && this.paths?.length)
                  for (const t of this.paths) {
                    const e = t.element?.getAttribute("d");
                    if (e) {
                      const i = new Path2D(e),
                        s = document
                          .createElementNS("http://www.w3.org/2000/svg", "svg")
                          .createSVGMatrix(),
                        o = new Path2D(),
                        n = s.scale(this._scale);
                      o.addPath
                        ? (o.addPath(i, n), (t.path2d = o))
                        : delete t.path2d;
                    } else delete t.path2d;
                    !t.path2d &&
                      this.raw &&
                      ((t.path2d = new Path2D()),
                      t.path2d.moveTo(this.raw[0].x, this.raw[0].y),
                      this.raw.forEach((e, i) => {
                        i > 0 && t.path2d?.lineTo(e.x, e.y);
                      }),
                      t.path2d.closePath());
                  }
              }),
              (this._downloadSvgPath = async (t, e) => {
                const i = this._container.actualOptions.polygon;
                if (!i) return;
                const s = t || i.url,
                  o = e ?? !1;
                if (!s || (void 0 !== this.paths && !o)) return this.raw;
                const n = await fetch(s);
                if (!n.ok)
                  throw new Error(`${g} occurred during polygon mask download`);
                return this._parseSvgPath(await n.text(), e);
              }),
              (this._drawPoints = () => {
                if (this.raw)
                  for (const t of this.raw)
                    this._container.particles.addParticle({ x: t.x, y: t.y });
              }),
              (this._getEquidistantPointByIndex = (t) => {
                const e = this._container.actualOptions;
                if (!e.polygon) return;
                if (!this.raw || !this.raw.length || !this.paths?.length)
                  throw new Error(Xa);
                let i,
                  s = 0;
                const o =
                  this.paths.reduce((t, e) => t + e.length, 0) /
                  e.particles.number.value;
                for (const e of this.paths) {
                  const n = o * t - s;
                  if (n <= e.length) {
                    i = e.element.getPointAtLength(n);
                    break;
                  }
                  s += e.length;
                }
                const n = this._scale;
                return {
                  x: (i?.x ?? 0) * n + (this.offset?.x ?? 0),
                  y: (i?.y ?? 0) * n + (this.offset?.y ?? 0),
                };
              }),
              (this._getPointByIndex = (t) => {
                if (!this.raw || !this.raw.length) throw new Error(Xa);
                const e = this.raw[t % this.raw.length];
                return { x: e.x, y: e.y };
              }),
              (this._getRandomPoint = () => {
                if (!this.raw || !this.raw.length) throw new Error(Xa);
                const t = V(this.raw);
                return { x: t.x, y: t.y };
              }),
              (this._getRandomPointByLength = () => {
                if (!this._container.actualOptions.polygon) return;
                if (!this.raw || !this.raw.length || !this.paths?.length)
                  throw new Error(Xa);
                const t = V(this.paths),
                  e = Math.floor(ot() * t.length) + 1,
                  i = t.element.getPointAtLength(e),
                  s = this._scale;
                return {
                  x: i.x * s + (this.offset?.x || 0),
                  y: i.y * s + (this.offset?.y || 0),
                };
              }),
              (this._initRawData = async (t) => {
                const e = this._container.actualOptions.polygon;
                if (e) {
                  if (e.url) this.raw = await this._downloadSvgPath(e.url, t);
                  else if (e.data) {
                    const i = e.data;
                    let s;
                    if (W(i)) s = i;
                    else {
                      const t = (t) => `<path d="${t}" />`,
                        e = J(i.path) ? i.path.map(t).join("") : t(i.path);
                      s = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${
                        i.size.width
                      }" height="${i.size.height}">${e}</svg>`;
                    }
                    this.raw = this._parseSvgPath(s, t);
                  }
                  this._createPath2D(),
                    this._engine.dispatchEvent("polygonMaskLoaded", {
                      container: this._container,
                    });
                }
              }),
              (this._parseSvgPath = (t, e) => {
                const i = e ?? !1;
                if (void 0 !== this.paths && !i) return this.raw;
                const s = this._container,
                  o = s.actualOptions.polygon;
                if (!o) return;
                const n = new DOMParser().parseFromString(t, "image/svg+xml"),
                  a = n.getElementsByTagName("svg")[0];
                let r = a.getElementsByTagName("path");
                r.length || (r = n.getElementsByTagName("path")),
                  (this.paths = []);
                for (let t = 0; t < r.length; t++) {
                  const e = r.item(t);
                  e &&
                    this.paths.push({ element: e, length: e.getTotalLength() });
                }
                const c = this._scale;
                (this.dimension.width =
                  parseFloat(a.getAttribute("width") ?? "0") * c),
                  (this.dimension.height =
                    parseFloat(a.getAttribute("height") ?? "0") * c);
                const h = o.position ?? { x: 50, y: 50 },
                  l = s.canvas.size;
                return (
                  (this.offset = {
                    x: (l.width * h.x) / 100 - this.dimension.width / 2,
                    y: (l.height * h.y) / 100 - this.dimension.height / 2,
                  }),
                  (function (t, e, i) {
                    const s = [];
                    for (const o of t) {
                      const t = o.element.pathSegList,
                        n = t?.numberOfItems ?? 0,
                        a = { x: 0, y: 0 };
                      for (let o = 0; o < n; o++) {
                        const n = t?.getItem(o),
                          r = window.SVGPathSeg;
                        switch (n?.pathSegType) {
                          case r.PATHSEG_MOVETO_ABS:
                          case r.PATHSEG_LINETO_ABS:
                          case r.PATHSEG_CURVETO_CUBIC_ABS:
                          case r.PATHSEG_CURVETO_QUADRATIC_ABS:
                          case r.PATHSEG_ARC_ABS:
                          case r.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                          case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                            const t = n;
                            (a.x = t.x), (a.y = t.y);
                            break;
                          }
                          case r.PATHSEG_LINETO_HORIZONTAL_ABS:
                            a.x = n.x;
                            break;
                          case r.PATHSEG_LINETO_VERTICAL_ABS:
                            a.y = n.y;
                            break;
                          case r.PATHSEG_LINETO_REL:
                          case r.PATHSEG_MOVETO_REL:
                          case r.PATHSEG_CURVETO_CUBIC_REL:
                          case r.PATHSEG_CURVETO_QUADRATIC_REL:
                          case r.PATHSEG_ARC_REL:
                          case r.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                          case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                            const t = n;
                            (a.x += t.x), (a.y += t.y);
                            break;
                          }
                          case r.PATHSEG_LINETO_HORIZONTAL_REL:
                            a.x += n.x;
                            break;
                          case r.PATHSEG_LINETO_VERTICAL_REL:
                            a.y += n.y;
                            break;
                          case r.PATHSEG_UNKNOWN:
                          case r.PATHSEG_CLOSEPATH:
                            continue;
                        }
                        s.push({ x: a.x * e + i.x, y: a.y * e + i.y });
                      }
                    }
                    return s;
                  })(this.paths, c, this.offset)
                );
              }),
              (this._polygonBounce = (t, e, i) => {
                const s = this._container.actualOptions.polygon;
                if (!this.raw || !s?.enable || "top" !== i) return !1;
                if ("inside" === s.type || "outside" === s.type) {
                  let e, i, s;
                  const o = t.getPosition(),
                    n = t.getRadius();
                  for (
                    let a = 0, r = this.raw.length - 1;
                    a < this.raw.length;
                    r = a++
                  ) {
                    const c = this.raw[a],
                      h = this.raw[r];
                    e = Wa(c, h, o);
                    const l = pt(o, e);
                    if ((([i, s] = [l.dx, l.dy]), l.distance < n))
                      return Za(c, h, t.velocity), !0;
                  }
                  if (
                    e &&
                    void 0 !== i &&
                    void 0 !== s &&
                    !this._checkInsidePolygon(o)
                  ) {
                    const i = { x: 1, y: 1 },
                      s = 2 * n;
                    return (
                      o.x >= e.x && (i.x = -1),
                      o.y >= e.y && (i.y = -1),
                      (t.position.x = e.x + s * i.x),
                      (t.position.y = e.y + s * i.y),
                      t.velocity.mult(-1),
                      !0
                    );
                  }
                } else if ("inline" === s.type && t.initialPosition) {
                  const e = gt(t.initialPosition, t.getPosition()),
                    { velocity: i } = t;
                  if (e > this._moveRadius)
                    return (i.x = i.y / 2 - i.x), (i.y = i.x / 2 - i.y), !0;
                }
                return !1;
              }),
              (this._randomPoint = () => {
                const t = this._container,
                  e = t.actualOptions.polygon;
                if (!e) return;
                let i;
                if ("inline" === e.type)
                  switch (e.inline.arrangement) {
                    case "random-point":
                      i = this._getRandomPoint();
                      break;
                    case "random-length":
                      i = this._getRandomPointByLength();
                      break;
                    case "equidistant":
                      i = this._getEquidistantPointByIndex(t.particles.count);
                      break;
                    default:
                      i = this._getPointByIndex(t.particles.count);
                  }
                else {
                  const e = t.canvas.size;
                  i = { x: ot() * e.width, y: ot() * e.height };
                }
                return this._checkInsidePolygon(i) ? i : this._randomPoint();
              }),
              (this._container = t),
              (this._engine = e),
              (this.dimension = { height: 0, width: 0 }),
              (this._moveRadius = 0),
              (this._scale = 1);
          }
          clickPositionValid(t) {
            const e = this._container.actualOptions.polygon;
            return (
              !!e?.enable &&
              "none" !== e.type &&
              "inline" !== e.type &&
              this._checkInsidePolygon(t)
            );
          }
          draw(t) {
            if (!this.paths?.length) return;
            const e = this._container.actualOptions.polygon;
            if (!e?.enable) return;
            const i = e.draw;
            if (!i.enable) return;
            const s = this.raw;
            for (const e of this.paths) {
              const o = e.path2d;
              t &&
                (o && this.offset
                  ? Qa(t, o, i.stroke, this.offset)
                  : s && ja(t, s, i.stroke));
            }
          }
          async init() {
            const t = this._container,
              e = t.actualOptions.polygon,
              i = t.retina.pixelRatio;
            e &&
              ((this._moveRadius = e.move.radius * i),
              (this._scale = e.scale * i),
              e.enable && (await this._initRawData()));
          }
          particleBounce(t, e, i) {
            return this._polygonBounce(t, e, i);
          }
          particlePosition(t) {
            const e = this._container.actualOptions.polygon;
            if (e?.enable && (this.raw?.length ?? 0) > 0)
              return E({}, t || this._randomPoint());
          }
          particlesInitialization() {
            const t = this._container.actualOptions.polygon;
            return (
              !(
                !t?.enable ||
                "inline" !== t.type ||
                ("one-per-point" !== t.inline.arrangement &&
                  "per-point" !== t.inline.arrangement)
              ) && (this._drawPoints(), !0)
            );
          }
          resize() {
            const t = this._container,
              e = t.actualOptions.polygon;
            e?.enable &&
              "none" !== e.type &&
              (this.redrawTimeout && clearTimeout(this.redrawTimeout),
              (this.redrawTimeout = window.setTimeout(async () => {
                await this._initRawData(!0), await t.particles.redraw();
              }, 250)));
          }
          stop() {
            delete this.raw, delete this.paths;
          }
        }
        class Ka {
          constructor(t) {
            (this.id = "polygonMask"), (this._engine = t);
          }
          getPlugin(t) {
            return new Ja(t, this._engine);
          }
          loadOptions(t, e) {
            if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
            let i = t.polygon;
            void 0 === i?.load && (t.polygon = i = new qa()),
              i.load(e?.polygon);
          }
          needsPlugin(t) {
            return (
              t?.polygon?.enable ??
              (void 0 !== t?.polygon?.type && "none" !== t.polygon.type)
            );
          }
        }
        class tr {
          constructor() {
            (this._createDirs = () => {
              this.dirsList = [];
              for (let t = 0; t < 360; t += 360 / this.options.sides) {
                const e = this.options.angle + t;
                this.dirsList.push(
                  y.create(
                    Math.cos((e * Math.PI) / 180),
                    Math.sin((e * Math.PI) / 180)
                  )
                );
              }
            }),
              (this.dirsList = []),
              (this.options = { sides: 6, turnSteps: 20, angle: 30 });
          }
          generate(t) {
            const { sides: e } = this.options;
            void 0 === t.hexStep && (t.hexStep = 0),
              void 0 === t.hexDirection &&
                (t.hexDirection =
                  6 === e ? 2 * ((3 * ot()) | 0) : (ot() * e) | 0),
              void 0 === t.hexSpeed && (t.hexSpeed = t.velocity.length),
              t.hexStep % this.options.turnSteps == 0 &&
                (t.hexDirection =
                  ot() > 0.5
                    ? (t.hexDirection + 1) % e
                    : (t.hexDirection + e - 1) % e),
              (t.velocity.x = 0),
              (t.velocity.y = 0),
              t.hexStep++;
            const i = this.dirsList[t.hexDirection];
            return y.create(i.x * t.hexSpeed, i.y * t.hexSpeed);
          }
          init(t) {
            const e = t.actualOptions.particles.move.path.options;
            (this.options.sides = e.sides > 0 ? e.sides : 6),
              (this.options.angle = e.angle ?? 30),
              (this.options.turnSteps = e.turnSteps >= 0 ? e.turnSteps : 20),
              this._createDirs();
          }
          reset(t) {
            delete t.hexStep, delete t.hexDirection, delete t.hexSpeed;
          }
          update() {}
        }
        const er = "polygonPathGenerator";
        class ir {
          draw(t, e, i) {
            !(function (t, e, i) {
              let s = e[0],
                o = e[1];
              const n = e.length;
              t.moveTo((s.x + o.x) / 2, (s.y + o.y) / 2);
              for (let a = 1; a <= n; a++)
                (s = o),
                  (o = e[(a + 1) % n]),
                  t.arcTo(s.x, s.y, (s.x + o.x) / 2, (s.y + o.y) / 2, i);
            })(
              t,
              (function (t, e, i = 0) {
                const s = (2 * Math.PI) / t,
                  o = [];
                for (let n = 0; n < t; n++)
                  o.push({
                    x: Math.cos(n * s + i) * e,
                    y: Math.sin(n * s + i) * e,
                  });
                return o;
              })(e.sides, i),
              e.borderRadius ?? 5
            );
          }
          getSidesCount(t) {
            const e = t.shapeData;
            return Math.round(ct(e?.sides ?? 5));
          }
          particleInit(t, e) {
            const i = e.shapeData;
            e.borderRadius =
              Math.round(ct(i?.radius ?? 5)) * t.retina.pixelRatio;
          }
        }
        const sr = Math.sqrt(2);
        class or {
          draw(t, e, i) {
            const s = i / sr,
              o = 2 * s,
              n = e.borderRadius ?? 5;
            "roundRect" in t
              ? t.roundRect(-s, -s, o, o, n)
              : ((
                  t,
                  e,
                  i = { topRight: 4, bottomRight: 4, bottomLeft: 4, topLeft: 4 }
                ) => {
                  const { x: s, y: o, width: n, height: a } = e,
                    r = s + n,
                    c = o + a;
                  t.moveTo(s + i.topLeft, o),
                    t.lineTo(r - i.topRight, o),
                    t.quadraticCurveTo(r, o, r, o + i.topRight),
                    t.lineTo(r, o + a - i.bottomRight),
                    t.quadraticCurveTo(r, c, r - i.bottomRight, c),
                    t.lineTo(s + i.bottomLeft, c),
                    t.quadraticCurveTo(s, c, s, c - i.bottomLeft),
                    t.lineTo(s, o + i.topLeft),
                    t.quadraticCurveTo(s, o, s + i.topLeft, o);
                })(
                  t,
                  { x: -s, y: -s, height: o, width: o },
                  { topLeft: n, topRight: n, bottomLeft: n, bottomRight: n }
                );
          }
          particleInit(t, e) {
            const i = e.shapeData;
            e.borderRadius = ct(i?.radius ?? 5) * t.retina.pixelRatio;
          }
        }
        class nr {
          constructor() {
            (this._paths = []),
              (this._reverse = !1),
              (this._size = { width: 0, height: 0 }),
              (this._scale = 1),
              (this._offset = { x: 0, y: 0, mode: "percent" }),
              (this._width = 0);
          }
          generate(t, e) {
            const i = t.container.retina.pixelRatio;
            void 0 === t.svgDirection && (t.svgDirection = ot() > 0.5 ? 0 : 1),
              void 0 === t.svgPathIndex &&
                (t.svgPathIndex = Math.floor(
                  Math.random() * this._paths.length
                )),
              void 0 === t.svgSpeed &&
                (t.svgSpeed = t.velocity.mult(
                  (t.retina.moveSpeed ?? 1) / 2
                ).length),
              void 0 === t.svgStep &&
                (t.svgStep =
                  rt({ min: 0, max: this._paths[t.svgPathIndex].length }) * i),
              void 0 === t.svgOffset &&
                (t.svgOffset = {
                  width:
                    rt({ min: -this._width / 2, max: this._width / 2 }) * i,
                  height:
                    rt({ min: -this._width / 2, max: this._width / 2 }) * i,
                }),
              void 0 === t.svgInitialPosition &&
                (t.svgInitialPosition = { ...t.position }),
              (t.velocity.x = 0),
              (t.velocity.y = 0),
              0 === t.svgDirection
                ? (t.svgStep += t.svgSpeed * e.factor)
                : (t.svgStep -= t.svgSpeed * e.factor);
            let s = this._paths[t.svgPathIndex];
            if (s) {
              const e = s.length;
              t.svgStep >= e
                ? ((t.svgPathIndex = t.svgPathIndex + 1),
                  t.svgPathIndex >= this._paths.length &&
                    (this._reverse
                      ? ((t.svgPathIndex = this._paths.length - 1),
                        (t.svgDirection = 1))
                      : ((t.svgPathIndex = 0), (t.svgStep = 0))))
                : t.svgStep <= 0 &&
                  ((t.svgPathIndex = t.svgPathIndex - 1),
                  t.svgPathIndex < 0 &&
                    (this._reverse
                      ? ((t.svgPathIndex = 0), (t.svgDirection = 0))
                      : ((t.svgPathIndex = this._paths.length - 1),
                        (s = this._paths[t.svgPathIndex]),
                        (t.svgStep = s.length)))),
                (s = this._paths[t.svgPathIndex]);
            }
            if (s) {
              const e = s.element.getPointAtLength(t.svgStep),
                o = t.container.canvas.size,
                n = q(this._offset, o),
                a = this._scale * i;
              (t.position.x =
                (e.x - this._size.width / 2) * a +
                t.svgInitialPosition.x +
                n.x +
                t.svgOffset.width),
                (t.position.y =
                  (e.y - this._size.height / 2) * a +
                  t.svgInitialPosition.y +
                  n.y +
                  t.svgOffset.height);
            }
            return y.origin;
          }
          init(t) {
            const e = t.actualOptions.particles.move.path.options,
              i = e.position ?? this._offset;
            if (
              ((this._reverse = e.reverse ?? this._reverse),
              (this._scale = e.scale ?? 1),
              (this._offset.x = i.x),
              (this._offset.y = i.y),
              (this._offset.mode = i.mode),
              (this._width = e.width ?? 0),
              e.url && !e.path)
            ) {
              const t = e.url;
              (async () => {
                const e = await fetch(t),
                  i = await e.text(),
                  s = new DOMParser().parseFromString(i, "image/svg+xml"),
                  o = s.getElementsByTagName("svg")[0];
                let n = o.getElementsByTagName("path");
                n.length || (n = s.getElementsByTagName("path")),
                  (this._paths = []);
                for (let t = 0; t < n.length; t++) {
                  const e = n.item(t);
                  e &&
                    this._paths.push({
                      element: e,
                      length: e.getTotalLength(),
                    });
                }
                (this._size.height = parseFloat(
                  o.getAttribute("height") ?? "0"
                )),
                  (this._size.width = parseFloat(
                    o.getAttribute("width") ?? "0"
                  ));
              })();
            } else if (e.path) {
              const t = e.path;
              this._paths = [];
              for (const e of t.data) {
                const t = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path"
                );
                t.setAttribute("d", e),
                  this._paths.push({ element: t, length: t.getTotalLength() });
              }
              (this._size.height = t.size.height),
                (this._size.width = t.size.width);
            }
          }
          reset() {}
          update() {}
        }
        const ar = "svgPathGenerator";
        function rr(t) {
          const e = new Uint32Array(1);
          return (e[0] = 1664525 * t[0] + 1013904223), e;
        }
        const cr = (Math.sqrt(5) - 1) / 4,
          hr = (1 / Math.sqrt(5) - 1) / 4;
        function lr(t, e, i, s, o) {
          return {
            dx: -e - t * cr,
            dy: -i - t * cr,
            dz: -s - t * cr,
            dw: -o - t * cr,
            xsb: e,
            ysb: i,
            zsb: s,
            wsb: o,
          };
        }
        function dr(t) {
          const e = [];
          for (let t = 0; t < fr.length; t += 16) {
            const i = ur[fr[t]];
            let s = null,
              o = null;
            for (let n = 0; n < i.length; n += 5)
              (o = lr(i[n], i[n + 1], i[n + 2], i[n + 3], i[n + 4])),
                null === s ? (e[t / 16] = o) : (s.next = o),
                (s = o);
            o &&
              ((o.next = lr(
                fr[t + 1],
                fr[t + 2],
                fr[t + 3],
                fr[t + 4],
                fr[t + 5]
              )),
              (o.next.next = lr(
                fr[t + 6],
                fr[t + 7],
                fr[t + 8],
                fr[t + 9],
                fr[t + 10]
              )),
              (o.next.next.next = lr(
                fr[t + 11],
                fr[t + 12],
                fr[t + 13],
                fr[t + 14],
                fr[t + 15]
              )));
          }
          const i = [];
          for (let t = 0; t < gr.length; t += 2) i[gr[t]] = e[gr[t + 1]];
          const s = new Uint8Array(256),
            o = new Uint8Array(256),
            n = new Uint8Array(256);
          for (let t = 0; t < 256; t++) n[t] = t;
          let a = new Uint32Array(1);
          (a[0] = t), (a = rr(rr(rr(a))));
          for (let t = 255; t >= 0; t--) {
            a = rr(a);
            const e = new Uint32Array(1);
            (e[0] = (a[0] + 31) % (t + 1)),
              e[0] < 0 && (e[0] += t + 1),
              (s[t] = n[e[0]]),
              (o[t] = 252 & s[t]),
              (n[e[0]] = n[t]);
          }
          return (t, e, n, a) => {
            const r = (t + e + n + a) * hr,
              c = t + r,
              h = e + r,
              l = n + r,
              d = a + r,
              u = Math.floor(c),
              p = Math.floor(h),
              g = Math.floor(l),
              f = Math.floor(d),
              y = (u + p + g + f) * cr,
              v = t - (u + y),
              w = e - (p + y),
              m = n - (g + y),
              b = a - (f + y),
              _ = c - u,
              S = h - p,
              x = l - g,
              P = d - f,
              C = _ + S + x + P;
            let O = 0;
            for (
              let t =
                i[
                  (x - P + 1) |
                    ((S - x + 1) << 1) |
                    ((S - P + 1) << 2) |
                    ((_ - S + 1) << 3) |
                    ((_ - x + 1) << 4) |
                    ((_ - P + 1) << 5) |
                    (C << 6) |
                    ((C + P) << 8) |
                    ((C + x) << 11) |
                    ((C + S) << 14) |
                    ((C + _) << 17)
                ];
              void 0 !== t;
              t = t.next
            ) {
              const e = v + t.dx,
                i = w + t.dy,
                n = m + t.dz,
                a = b + t.dw,
                r = 2 - e * e - i * i - n * n - a * a;
              if (r > 0) {
                const c = u + t.xsb,
                  h = p + t.ysb,
                  l = g + t.zsb,
                  d = f + t.wsb,
                  y = s[255 & c],
                  v = s[(y + h) & 255],
                  w = s[(v + l) & 255],
                  m = o[(w + d) & 255];
                O +=
                  r *
                  r *
                  r *
                  r *
                  (pr[m] * e + pr[m + 1] * i + pr[m + 2] * n + pr[m + 3] * a);
              }
            }
            return 0.03333333333333333 * O;
          };
        }
        const ur = [
            [
              0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0,
              0, 0, 1,
            ],
            [
              3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 4, 1,
              1, 1, 1,
            ],
            [
              1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 1,
              1, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0,
              1, 2, 0, 0, 1, 1,
            ],
            [
              3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 2, 1,
              1, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0,
              1, 2, 0, 0, 1, 1,
            ],
          ],
          pr = [
            3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, -3, 1, 1, 1, -1, 3,
            1, 1, -1, 1, 3, 1, -1, 1, 1, 3, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3,
            1, 1, -1, 1, 3, -3, -1, 1, 1, -1, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1,
            3, 3, 1, -1, 1, 1, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, -3, 1, -1, 1,
            -1, 3, -1, 1, -1, 1, -3, 1, -1, 1, -1, 3, 3, -1, -1, 1, 1, -3, -1,
            1, 1, -1, -3, 1, 1, -1, -1, 3, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1,
            -3, 1, -1, -1, -1, 3, 3, 1, 1, -1, 1, 3, 1, -1, 1, 1, 3, -1, 1, 1,
            1, -3, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, 3,
            -1, 1, -1, 1, -3, 1, -1, 1, -1, 3, -1, 1, -1, 1, -3, -3, -1, 1, -1,
            -1, -3, 1, -1, -1, -1, 3, -1, -1, -1, 1, -3, 3, 1, -1, -1, 1, 3, -1,
            -1, 1, 1, -3, -1, 1, 1, -1, -3, -3, 1, -1, -1, -1, 3, -1, -1, -1, 1,
            -3, -1, -1, 1, -1, -3, 3, -1, -1, -1, 1, -3, -1, -1, 1, -1, -3, -1,
            1, -1, -1, -3, -3, -1, -1, -1, -1, -3, -1, -1, -1, -1, -3, -1, -1,
            -1, -1, -3,
          ],
          gr = [
            0, 3, 1, 2, 2, 3, 5, 2, 6, 1, 7, 1, 8, 3, 9, 2, 10, 3, 13, 2, 16, 3,
            18, 3, 22, 1, 23, 1, 24, 3, 26, 3, 33, 2, 37, 2, 38, 1, 39, 1, 41,
            2, 45, 2, 54, 1, 55, 1, 56, 0, 57, 0, 58, 0, 59, 0, 60, 0, 61, 0,
            62, 0, 63, 0, 256, 3, 258, 3, 264, 3, 266, 3, 272, 3, 274, 3, 280,
            3, 282, 3, 2049, 2, 2053, 2, 2057, 2, 2061, 2, 2081, 2, 2085, 2,
            2089, 2, 2093, 2, 2304, 9, 2305, 9, 2312, 9, 2313, 9, 16390, 1,
            16391, 1, 16406, 1, 16407, 1, 16422, 1, 16423, 1, 16438, 1, 16439,
            1, 16642, 8, 16646, 8, 16658, 8, 16662, 8, 18437, 6, 18439, 6,
            18469, 6, 18471, 6, 18688, 9, 18689, 9, 18690, 8, 18693, 6, 18694,
            8, 18695, 6, 18696, 9, 18697, 9, 18706, 8, 18710, 8, 18725, 6,
            18727, 6, 131128, 0, 131129, 0, 131130, 0, 131131, 0, 131132, 0,
            131133, 0, 131134, 0, 131135, 0, 131352, 7, 131354, 7, 131384, 7,
            131386, 7, 133161, 5, 133165, 5, 133177, 5, 133181, 5, 133376, 9,
            133377, 9, 133384, 9, 133385, 9, 133400, 7, 133402, 7, 133417, 5,
            133421, 5, 133432, 7, 133433, 5, 133434, 7, 133437, 5, 147510, 4,
            147511, 4, 147518, 4, 147519, 4, 147714, 8, 147718, 8, 147730, 8,
            147734, 8, 147736, 7, 147738, 7, 147766, 4, 147767, 4, 147768, 7,
            147770, 7, 147774, 4, 147775, 4, 149509, 6, 149511, 6, 149541, 6,
            149543, 6, 149545, 5, 149549, 5, 149558, 4, 149559, 4, 149561, 5,
            149565, 5, 149566, 4, 149567, 4, 149760, 9, 149761, 9, 149762, 8,
            149765, 6, 149766, 8, 149767, 6, 149768, 9, 149769, 9, 149778, 8,
            149782, 8, 149784, 7, 149786, 7, 149797, 6, 149799, 6, 149801, 5,
            149805, 5, 149814, 4, 149815, 4, 149816, 7, 149817, 5, 149818, 7,
            149821, 5, 149822, 4, 149823, 4, 149824, 37, 149825, 37, 149826, 36,
            149829, 34, 149830, 36, 149831, 34, 149832, 37, 149833, 37, 149842,
            36, 149846, 36, 149848, 35, 149850, 35, 149861, 34, 149863, 34,
            149865, 33, 149869, 33, 149878, 32, 149879, 32, 149880, 35, 149881,
            33, 149882, 35, 149885, 33, 149886, 32, 149887, 32, 150080, 49,
            150082, 48, 150088, 49, 150098, 48, 150104, 47, 150106, 47, 151873,
            46, 151877, 45, 151881, 46, 151909, 45, 151913, 44, 151917, 44,
            152128, 49, 152129, 46, 152136, 49, 152137, 46, 166214, 43, 166215,
            42, 166230, 43, 166247, 42, 166262, 41, 166263, 41, 166466, 48,
            166470, 43, 166482, 48, 166486, 43, 168261, 45, 168263, 42, 168293,
            45, 168295, 42, 168512, 31, 168513, 28, 168514, 31, 168517, 28,
            168518, 25, 168519, 25, 280952, 40, 280953, 39, 280954, 40, 280957,
            39, 280958, 38, 280959, 38, 281176, 47, 281178, 47, 281208, 40,
            281210, 40, 282985, 44, 282989, 44, 283001, 39, 283005, 39, 283208,
            30, 283209, 27, 283224, 30, 283241, 27, 283256, 22, 283257, 22,
            297334, 41, 297335, 41, 297342, 38, 297343, 38, 297554, 29, 297558,
            24, 297562, 29, 297590, 24, 297594, 21, 297598, 21, 299365, 26,
            299367, 23, 299373, 26, 299383, 23, 299389, 20, 299391, 20, 299584,
            31, 299585, 28, 299586, 31, 299589, 28, 299590, 25, 299591, 25,
            299592, 30, 299593, 27, 299602, 29, 299606, 24, 299608, 30, 299610,
            29, 299621, 26, 299623, 23, 299625, 27, 299629, 26, 299638, 24,
            299639, 23, 299640, 22, 299641, 22, 299642, 21, 299645, 20, 299646,
            21, 299647, 20, 299648, 61, 299649, 60, 299650, 61, 299653, 60,
            299654, 59, 299655, 59, 299656, 58, 299657, 57, 299666, 55, 299670,
            54, 299672, 58, 299674, 55, 299685, 52, 299687, 51, 299689, 57,
            299693, 52, 299702, 54, 299703, 51, 299704, 56, 299705, 56, 299706,
            53, 299709, 50, 299710, 53, 299711, 50, 299904, 61, 299906, 61,
            299912, 58, 299922, 55, 299928, 58, 299930, 55, 301697, 60, 301701,
            60, 301705, 57, 301733, 52, 301737, 57, 301741, 52, 301952, 79,
            301953, 79, 301960, 76, 301961, 76, 316038, 59, 316039, 59, 316054,
            54, 316071, 51, 316086, 54, 316087, 51, 316290, 78, 316294, 78,
            316306, 73, 316310, 73, 318085, 77, 318087, 77, 318117, 70, 318119,
            70, 318336, 79, 318337, 79, 318338, 78, 318341, 77, 318342, 78,
            318343, 77, 430776, 56, 430777, 56, 430778, 53, 430781, 50, 430782,
            53, 430783, 50, 431e3, 75, 431002, 72, 431032, 75, 431034, 72,
            432809, 74, 432813, 69, 432825, 74, 432829, 69, 433032, 76, 433033,
            76, 433048, 75, 433065, 74, 433080, 75, 433081, 74, 447158, 71,
            447159, 68, 447166, 71, 447167, 68, 447378, 73, 447382, 73, 447386,
            72, 447414, 71, 447418, 72, 447422, 71, 449189, 70, 449191, 70,
            449197, 69, 449207, 68, 449213, 69, 449215, 68, 449408, 67, 449409,
            67, 449410, 66, 449413, 64, 449414, 66, 449415, 64, 449416, 67,
            449417, 67, 449426, 66, 449430, 66, 449432, 65, 449434, 65, 449445,
            64, 449447, 64, 449449, 63, 449453, 63, 449462, 62, 449463, 62,
            449464, 65, 449465, 63, 449466, 65, 449469, 63, 449470, 62, 449471,
            62, 449472, 19, 449473, 19, 449474, 18, 449477, 16, 449478, 18,
            449479, 16, 449480, 19, 449481, 19, 449490, 18, 449494, 18, 449496,
            17, 449498, 17, 449509, 16, 449511, 16, 449513, 15, 449517, 15,
            449526, 14, 449527, 14, 449528, 17, 449529, 15, 449530, 17, 449533,
            15, 449534, 14, 449535, 14, 449728, 19, 449729, 19, 449730, 18,
            449734, 18, 449736, 19, 449737, 19, 449746, 18, 449750, 18, 449752,
            17, 449754, 17, 449784, 17, 449786, 17, 451520, 19, 451521, 19,
            451525, 16, 451527, 16, 451528, 19, 451529, 19, 451557, 16, 451559,
            16, 451561, 15, 451565, 15, 451577, 15, 451581, 15, 451776, 19,
            451777, 19, 451784, 19, 451785, 19, 465858, 18, 465861, 16, 465862,
            18, 465863, 16, 465874, 18, 465878, 18, 465893, 16, 465895, 16,
            465910, 14, 465911, 14, 465918, 14, 465919, 14, 466114, 18, 466118,
            18, 466130, 18, 466134, 18, 467909, 16, 467911, 16, 467941, 16,
            467943, 16, 468160, 13, 468161, 13, 468162, 13, 468163, 13, 468164,
            13, 468165, 13, 468166, 13, 468167, 13, 580568, 17, 580570, 17,
            580585, 15, 580589, 15, 580598, 14, 580599, 14, 580600, 17, 580601,
            15, 580602, 17, 580605, 15, 580606, 14, 580607, 14, 580824, 17,
            580826, 17, 580856, 17, 580858, 17, 582633, 15, 582637, 15, 582649,
            15, 582653, 15, 582856, 12, 582857, 12, 582872, 12, 582873, 12,
            582888, 12, 582889, 12, 582904, 12, 582905, 12, 596982, 14, 596983,
            14, 596990, 14, 596991, 14, 597202, 11, 597206, 11, 597210, 11,
            597214, 11, 597234, 11, 597238, 11, 597242, 11, 597246, 11, 599013,
            10, 599015, 10, 599021, 10, 599023, 10, 599029, 10, 599031, 10,
            599037, 10, 599039, 10, 599232, 13, 599233, 13, 599234, 13, 599235,
            13, 599236, 13, 599237, 13, 599238, 13, 599239, 13, 599240, 12,
            599241, 12, 599250, 11, 599254, 11, 599256, 12, 599257, 12, 599258,
            11, 599262, 11, 599269, 10, 599271, 10, 599272, 12, 599273, 12,
            599277, 10, 599279, 10, 599282, 11, 599285, 10, 599286, 11, 599287,
            10, 599288, 12, 599289, 12, 599290, 11, 599293, 10, 599294, 11,
            599295, 10,
          ],
          fr = [
            0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 1, 0,
            0, 0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1,
            0, 0, 0, 0, 1, -1, 0, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1,
            1, 0, 2, 1, 1, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 2, 1, 0, 1,
            0, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 0, 2, 0, 1, 1, 0, 1, -1, 1, 1, 0,
            1, 0, 1, 1, -1, 0, 2, 1, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0,
            2, 0, 1, 0, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 0, 2, 0, 0, 1, 1, 1,
            -1, 0, 1, 1, 1, 0, -1, 1, 1, 1, 4, 2, 1, 1, 0, 4, 1, 2, 1, 0, 4, 1,
            1, 2, 0, 1, 4, 2, 1, 0, 1, 4, 1, 2, 0, 1, 4, 1, 1, 0, 2, 1, 4, 2, 0,
            1, 1, 4, 1, 0, 2, 1, 4, 1, 0, 1, 2, 1, 4, 0, 2, 1, 1, 4, 0, 1, 2, 1,
            4, 0, 1, 1, 2, 1, 2, 1, 1, 0, 0, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 1, 2,
            1, 0, 1, 0, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 1, 2, 0, 1, 1, 0, 3, 0, 2,
            1, 0, 3, 0, 1, 2, 0, 1, 2, 1, 0, 0, 1, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2,
            1, 2, 0, 1, 0, 1, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 1, 2, 0, 0, 1, 1, 3,
            0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 2,
            0, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 2, 0, 0, 0, 2, 3, 1,
            0, 1, 1, 2, 1, -1, 1, 1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 1, 0, 2, 1, 1,
            1, -1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 2, 0,
            0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 1,
            0, 2, 1, 1, 1, -1, 2, 0, 0, 2, 0, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1,
            2, 0, 0, 2, 0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 2, 0, 2,
            3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 0, 0, 2, 2, 3, 1, 0, 1, 1, 2,
            1, -1, 1, 1, 2, 0, 0, 0, 2, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0,
            0, 0, 2, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 0, 0, 0, 0, 2, 1, 1,
            -1, 1, 0, 1, 1, 0, 1, -1, 0, 0, 0, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1,
            1, -1, 0, 0, 0, 0, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 0, 0, 0,
            0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 0, 1,
            1, 1, 0, -1, 1, 1, 0, 0, 0, 0, 0, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1,
            2, 2, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 2, 2, 0, 0, 0, 2,
            1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 2, 0, 0, 0, 2, 1, 1, 1, -1, 0, 1,
            1, 1, 0, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 2, 0,
            2, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2, 0, 2, 0, 0, 2, 1, 1,
            -1, 1, 0, 1, 1, 0, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1,
            1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 2, 0, 0, 2,
            0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 0,
            1, 1, 0, 1, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1,
            2, 0, 0, 0, 2, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1, 1, -1, 3,
            1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, 1, -1, 3, 1, 0, 0, 1, 0, 2,
            0, 0, 2, 0, 2, 1, 1, 1, -1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1,
            1, -1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, -1, 1, 3, 1, 0,
            0, 0, 1, 2, 0, 0, 0, 2, 2, 1, 1, -1, 1, 3, 1, 1, 0, 0, 0, 2, 2, 0,
            0, 0, 2, 1, -1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, -1, 1,
            1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 1, 3, 1, 0, 1, 0,
            0, 2, 0, 2, 0, 0, 2, -1, 1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0,
            2, -1, 1, 1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, -1, 1, 1, 1, 3,
            3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 4, 1, 1, 1, 1, 3, 3, 2, 0, 1, 0, 3, 1,
            0, 2, 0, 4, 1, 1, 1, 1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 4, 1, 1, 1,
            1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0, 2, 0, 1,
            3, 0, 1, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 4, 1,
            1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 2, 1, 1, 1, -1, 3, 3, 2,
            0, 1, 0, 3, 1, 0, 2, 0, 2, 1, 1, 1, -1, 3, 3, 0, 2, 1, 0, 3, 0, 1,
            2, 0, 2, 1, 1, 1, -1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 2, 1, 1, -1,
            1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, 1, -1, 1, 3, 3, 0, 2, 0,
            1, 3, 0, 1, 0, 2, 2, 1, 1, -1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0,
            2, 1, -1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, -1, 1, 1, 3,
            3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 1, -1, 1, 1, 3, 3, 0, 2, 1, 0, 3,
            0, 1, 2, 0, 2, -1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, -1,
            1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, -1, 1, 1, 1,
          ];
        class yr {
          constructor() {
            (this._calculateField = () => {
              for (let t = 0; t < this.options.columns; t++)
                for (let e = 0; e < this.options.rows; e++)
                  for (let i = 0; i < this.options.layers; i++)
                    (this.field[t][e][i][0] =
                      this.noiseFunc(t / 50, e / 50, i / 50, this.noiseW) *
                      Math.PI *
                      2),
                      (this.field[t][e][i][1] = this.noiseFunc(
                        t / 100 + 4e4,
                        e / 100 + 4e4,
                        i / 100 + 4e4,
                        this.noiseW
                      ));
            }),
              (this._initField = () => {
                this.field = new Array(this.options.columns);
                for (let t = 0; t < this.options.columns; t++) {
                  this.field[t] = new Array(this.options.rows);
                  for (let e = 0; e < this.options.rows; e++) {
                    this.field[t][e] = new Array(this.options.layers);
                    for (let i = 0; i < this.options.layers; i++)
                      this.field[t][e][i] = [0, 0];
                  }
                }
              }),
              (this._resetField = (t) => {
                const e = t.actualOptions.particles.move.path.options;
                (this.options.size = e.size > 0 ? e.size : 20),
                  (this.options.increment =
                    e.increment > 0 ? e.increment : 0.004),
                  (this.options.width = t.canvas.size.width),
                  (this.options.height = t.canvas.size.height),
                  (this.noiseFunc = dr(e.seed ?? ot())),
                  (this.options.columns =
                    Math.floor(this.options.width / this.options.size) + 1),
                  (this.options.rows =
                    Math.floor(this.options.height / this.options.size) + 1),
                  (this.options.layers =
                    Math.floor(t.zLayers / this.options.size) + 1),
                  this._initField();
              }),
              (this._setup = (t) => {
                (this.noiseW = 0),
                  this._resetField(t),
                  addEventListener("resize", () => this._resetField(t));
              }),
              (this.field = []),
              (this.noiseFunc = dr(ot())),
              (this.noiseW = 0),
              (this.options = {
                size: 20,
                increment: 0.004,
                columns: 0,
                rows: 0,
                layers: 0,
                width: 0,
                height: 0,
              });
          }
          generate(t) {
            const e = t.getPosition(),
              i = Math.max(Math.floor(e.x / this.options.size), 0),
              s = Math.max(Math.floor(e.y / this.options.size), 0),
              o = Math.max(Math.floor(e.z / this.options.size), 0),
              n = y.origin;
            return this.field &&
              this.field[i] &&
              this.field[i][s] &&
              this.field[i][s][o]
              ? ((n.length = this.field[i][s][o][1]),
                (n.angle = this.field[i][s][o][0]),
                n)
              : n;
          }
          init(t) {
            (this.container = t), this._setup(this.container);
          }
          reset() {}
          update() {
            this.container &&
              (this._calculateField(), (this.noiseW += this.options.increment));
          }
        }
        const vr = "simplexNoise";
        class wr {
          constructor() {
            (this.loop = !1), (this.source = "");
          }
          load(t) {
            void 0 !== t &&
              (Y(t)
                ? (void 0 !== t.loop && (this.loop = t.loop),
                  void 0 !== t.source && (this.source = t.source))
                : (this.source = t));
          }
        }
        class mr {
          constructor() {
            (this.duration = 500), (this.value = []);
          }
          load(t) {
            t &&
              (void 0 !== t.duration && (this.duration = t.duration),
              void 0 !== t.value && (this.value = t.value));
          }
        }
        class br {
          constructor() {
            (this.loop = !1), (this.melodies = []), (this.notes = []);
          }
          load(t) {
            void 0 !== t &&
              (void 0 !== t.loop && (this.loop = t.loop),
              void 0 !== t.melodies &&
                (this.melodies = t.melodies.map((t) => {
                  const e = new br();
                  return e.load(t), e;
                })),
              void 0 !== t.notes &&
                (this.notes = t.notes.map((t) => {
                  const e = new mr();
                  return e.load(t), e;
                })));
          }
        }
        class _r {
          constructor() {
            (this.event = []), (this.notes = []);
          }
          load(t) {
            t &&
              (void 0 !== t.event && (this.event = t.event),
              void 0 !== t.audio &&
                (J(t.audio)
                  ? (this.audio = t.audio.map((t) => {
                      const e = new wr();
                      return e.load(t), e;
                    }))
                  : ((this.audio = new wr()), this.audio.load(t.audio))),
              void 0 !== t.notes &&
                (this.notes = t.notes.map((t) => {
                  const e = new mr();
                  return e.load(t), e;
                })),
              void 0 !== t.melodies &&
                (this.melodies = t.melodies.map((t) => {
                  const e = new br();
                  return e.load(t), e;
                })),
              void 0 !== t.filter &&
                (W(t.filter)
                  ? X(window[t.filter]) && (this.filter = window[t.filter])
                  : (this.filter = t.filter)));
          }
        }
        class Sr {
          constructor() {
            (this.width = 24), (this.height = 24);
          }
          load(t) {
            t &&
              (void 0 !== t.path && (this.path = t.path),
              void 0 !== t.svg && (this.svg = t.svg),
              void 0 !== t.width && (this.width = t.width),
              void 0 !== t.height && (this.height = t.height));
          }
        }
        class xr {
          constructor() {
            (this.mute = new Sr()),
              (this.unmute = new Sr()),
              (this.volumeDown = new Sr()),
              (this.volumeUp = new Sr()),
              (this.mute.svg =
                '<?xml version="1.0"?>\n<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Layer_1">\n        <path fill="#fff" d="M19.707,5.293c-0.391-0.391-1.023-0.391-1.414,0l-1.551,1.551c-0.345-0.688-0.987-1.02-1.604-1.02c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C10.357,8.561,8.904,9,8,9c-1.654,0-3,1.346-3,3v2c0,1.237,0.754,2.302,1.826,2.76l-1.533,1.533c-0.391,0.391-0.391,1.023,0,1.414C5.488,19.902,5.744,20,6,20s0.512-0.098,0.707-0.293l2.527-2.527c0.697,0.174,1.416,0.455,1.875,0.762l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C16.035,20.176,17,19.495,17,18V9.414l2.707-2.707C20.098,6.316,20.098,5.684,19.707,5.293z M14.891,7.941c0.038-0.025,0.073-0.046,0.104-0.062C14.998,7.914,15,7.954,15,8v1.293l-2,2V9.202L14.891,7.941z M7,12c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v2.439l-2.83,2.83C8.757,15.046,8.356,15,8,15c-0.552,0-1-0.448-1-1V12z M10.301,15.406L12,13.707v2.439C11.519,15.859,10.925,15.604,10.301,15.406z M14.994,18.12c-0.03-0.016-0.065-0.036-0.104-0.062L13,16.798v-4.091l2-2V18C15,18.046,14.998,18.086,14.994,18.12z"/>\n    </g>\n</svg>'),
              (this.unmute.svg =
                '<?xml version="1.0"?>\n<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Layer_1">\n        <path fill="#fff" d="M17.138,5.824c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C12.357,8.561,10.904,9,10,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C18.035,20.176,19,19.495,19,18V8C19,6.505,18.035,5.824,17.138,5.824z M14,16.146C12.907,15.495,11.211,15,10,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146V16.146z M17,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L15,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C16.998,7.914,17,7.954,17,8V18z"/>\n    </g>\n</svg>'),
              (this.volumeDown.svg =
                '<?xml version="1.0"?>\n<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Layer_1">\n        <path fill="#fff" d="M15.138,5.824c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C10.357,8.561,8.904,9,8,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C16.035,20.176,17,19.495,17,18V8C17,6.505,16.035,5.824,15.138,5.824z M8,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v6.293C10.907,15.495,9.211,15,8,15z M15,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L13,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C14.998,7.914,15,7.954,15,8V18z"/>\n        <path fill="#fff" d="M18.292,10.294c-0.39,0.391-0.39,1.023,0.002,1.414c0.345,0.345,0.535,0.803,0.535,1.291c0,0.489-0.19,0.948-0.536,1.294c-0.391,0.39-0.391,1.023,0,1.414C18.488,15.902,18.744,16,19,16s0.512-0.098,0.707-0.293c0.724-0.723,1.122-1.685,1.122-2.708s-0.398-1.984-1.123-2.707C19.317,9.903,18.683,9.901,18.292,10.294z"/>\n    </g>\n</svg>'),
              (this.volumeUp.svg =
                '<?xml version="1.0"?>\n<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Layer_1">\n        <path fill="#fff" d="M16.706,10.292c-0.389-0.389-1.023-0.391-1.414,0.002c-0.39,0.391-0.39,1.023,0.002,1.414c0.345,0.345,0.535,0.803,0.535,1.291c0,0.489-0.19,0.948-0.536,1.294c-0.391,0.39-0.391,1.023,0,1.414C15.488,15.902,15.744,16,16,16s0.512-0.098,0.707-0.293c0.724-0.723,1.122-1.685,1.122-2.708S17.431,11.015,16.706,10.292z"/>\n        <path fill="#fff" d="M18.706,8.292c-0.391-0.389-1.023-0.39-1.414,0.002c-0.39,0.391-0.39,1.024,0.002,1.414c0.879,0.877,1.363,2.044,1.364,3.287c0.001,1.246-0.484,2.417-1.365,3.298c-0.391,0.391-0.391,1.023,0,1.414C17.488,17.902,17.744,18,18,18s0.512-0.098,0.707-0.293c1.259-1.259,1.952-2.933,1.951-4.713C20.657,11.217,19.964,9.547,18.706,8.292z"/>\n        <path fill="#fff" d="M20.706,6.292c-0.391-0.389-1.023-0.39-1.414,0.002c-0.39,0.391-0.39,1.024,0.002,1.414c1.412,1.409,2.191,3.285,2.192,5.284c0.002,2.002-0.777,3.885-2.193,5.301c-0.391,0.391-0.391,1.023,0,1.414C19.488,19.902,19.744,20,20,20s0.512-0.098,0.707-0.293c1.794-1.794,2.781-4.18,2.779-6.717C23.485,10.457,22.497,8.078,20.706,6.292z"/>\n        <path fill="#fff" d="M12.138,5.824c-0.449,0-0.905,0.152-1.356,0.453L8.109,8.059C7.357,8.561,5.904,9,5,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C13.035,20.176,14,19.495,14,18V8C14,6.505,13.035,5.824,12.138,5.824z M5,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v6.293C7.907,15.495,6.211,15,5,15z M12,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L10,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C11.998,7.914,12,7.954,12,8V18z"/>\n    </g>\n</svg>');
          }
          load(t) {
            t &&
              (this.mute.load(t.mute),
              this.unmute.load(t.unmute),
              this.volumeDown.load(t.volumeDown),
              this.volumeUp.load(t.volumeUp));
          }
        }
        class Pr {
          constructor() {
            (this.value = 100),
              (this.max = 100),
              (this.min = 0),
              (this.step = 10);
          }
          load(t) {
            void 0 !== t &&
              (Y(t)
                ? (void 0 !== t.max && (this.max = t.max),
                  void 0 !== t.min && (this.min = t.min),
                  void 0 !== t.step && (this.step = t.step),
                  void 0 !== t.value && (this.value = t.value))
                : (this.value = t));
          }
        }
        class Cr {
          constructor() {
            (this.enable = !1),
              (this.events = []),
              (this.icons = new xr()),
              (this.volume = new Pr());
          }
          load(t) {
            t &&
              (void 0 !== t.enable && (this.enable = t.enable),
              void 0 !== t.events &&
                (this.events = t.events.map((t) => {
                  const e = new _r();
                  return e.load(t), e;
                })),
              this.icons.load(t.icons),
              void 0 !== t.volume && this.volume.load(t.volume));
          }
        }
        const Or = new Map();
        function Tr(t) {
          const e = /(([A-G]b?)(\d))|pause/i.exec(t);
          if (!e || !e.length) return;
          const i = e[2] || e[0],
            s = Or.get(i);
          return s ? s[parseInt(e[3] || "0")] : void 0;
        }
        function Vr(t) {
          const e = document.createElement("img"),
            {
              clickCb: i,
              container: s,
              display: o,
              iconOptions: n,
              margin: a,
              options: r,
              pos: c,
              rightOffsets: h,
            } = t,
            { width: l, path: d, svg: u } = n;
          !(function (t, e, i, s, o, n, a) {
            (t.style.userSelect = "none"),
              (t.style.webkitUserSelect = "none"),
              (t.style.position = "absolute"),
              (t.style.top = `${e + a}px`),
              (t.style.left = i - a - n + "px"),
              (t.style.display = s),
              (t.style.zIndex = `${o + 1}`);
          })(
            e,
            c.top + a,
            c.right - (a * (h.length + 1) + l + h.reduce((t, e) => t + e, 0)),
            o,
            r.fullScreen.zIndex + 1,
            l,
            a
          ),
            (e.src = d ?? (u ? `data:image/svg+xml;base64,${btoa(u)}` : ""));
          return (
            (s.canvas.element?.parentNode || document.body).append(e),
            e.addEventListener("click", i),
            e
          );
        }
        function Ar(t) {
          t && t.remove();
        }
        Or.set(
          "C",
          [16.35, 32.7, 65.41, 130.81, 261.63, 523.25, 1046.5, 2093, 4186.01]
        ),
          Or.set(
            "Db",
            [
              17.32, 34.65, 69.3, 138.59, 277.18, 554.37, 1108.73, 2217.46,
              4434.92,
            ]
          ),
          Or.set(
            "D",
            [
              18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32,
              4698.63,
            ]
          ),
          Or.set(
            "Eb",
            [
              19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02,
              4978.03,
            ]
          ),
          Or.set(
            "E",
            [
              20.6, 41.2, 82.41, 164.81, 329.63, 659.25, 1318.51, 2637.02,
              5274.04,
            ]
          ),
          Or.set(
            "F",
            [
              21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83,
              5587.65,
            ]
          ),
          Or.set(
            "Gb",
            [23.12, 46.25, 92.5, 185, 369.99, 739.99, 1479.98, 2959.96, 5919.91]
          ),
          Or.set(
            "G",
            [24.5, 49, 98, 196, 392, 783.99, 1567.98, 3135.96, 6271.93]
          ),
          Or.set(
            "Ab",
            [
              25.96, 51.91, 103.83, 207.65, 415.3, 830.61, 1661.22, 3322.44,
              6644.88,
            ]
          ),
          Or.set("A", [27.5, 55, 110, 220, 440, 880, 1760, 3520, 7040]),
          Or.set(
            "Bb",
            [
              29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31,
              7458.62,
            ]
          ),
          Or.set(
            "B",
            [
              30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07,
              7902.13,
            ]
          ),
          Or.set("pause", [0]);
        class Mr {
          constructor(t, e) {
            (this._addBuffer = (t) => {
              const e = t.createBufferSource();
              return this._audioSources.push(e), e;
            }),
              (this._addOscillator = (t) => {
                const e = t.createOscillator();
                return this._audioSources.push(e), e;
              }),
              (this._initEvents = () => {
                const t = this._container,
                  e = t.actualOptions.sounds;
                if (e?.enable && t.canvas.element)
                  for (const t of e.events) {
                    const e = async (i) => {
                      if (this._container === i.container)
                        if (
                          !this._container ||
                          this._container.muted ||
                          this._container.destroyed
                        )
                          B(t.event, (t) => {
                            this._engine.removeEventListener(t, e);
                          });
                        else if (!t.filter || t.filter(i))
                          if (t.audio) this._playBuffer(F(t.audio));
                          else if (t.melodies) {
                            const e = V(t.melodies);
                            e.melodies.length
                              ? await Promise.allSettled(
                                  e.melodies.map((t) =>
                                    this._playNote(t.notes, 0, e.loop)
                                  )
                                )
                              : await this._playNote(e.notes, 0, e.loop);
                          } else if (t.notes) {
                            const e = V(t.notes);
                            await this._playNote([e], 0, !1);
                          }
                    };
                    B(t.event, (t) => {
                      this._engine.addEventListener(t, e);
                    });
                  }
              }),
              (this._mute = () => {
                const t = this._container;
                if (t.audioContext) {
                  for (const t of this._audioSources)
                    this._removeAudioSource(t);
                  this._gain && this._gain.disconnect(),
                    t.audioContext.close(),
                    (t.audioContext = void 0),
                    this._engine.dispatchEvent("soundsMuted", {
                      container: this._container,
                    });
                }
              }),
              (this._playBuffer = (t) => {
                const e = this._audioMap.get(t.source);
                if (!e) return;
                const i = this._container.audioContext;
                if (!i) return;
                const s = this._addBuffer(i);
                (s.loop = t.loop),
                  (s.buffer = e),
                  s.connect(this._gain ?? i.destination),
                  s.start();
              }),
              (this._playFrequency = async (t, e) => {
                if (!this._container.audioContext || !this._gain) return;
                const i = this._addOscillator(this._container.audioContext);
                return (
                  i.connect(this._gain),
                  (i.type = "sine"),
                  (i.frequency.value = t),
                  i.start(),
                  new Promise((t) => {
                    setTimeout(() => {
                      this._removeAudioSource(i), t();
                    }, e);
                  })
                );
              }),
              (this._playMuteSound = () => {
                const t = this._container;
                if (!t.audioContext) return;
                const e = t.audioContext.createGain();
                e.connect(t.audioContext.destination), (e.gain.value = 0);
                const i = t.audioContext.createOscillator();
                i.connect(e),
                  (i.type = "sine"),
                  (i.frequency.value = 1),
                  i.start(),
                  setTimeout(() => {
                    i.stop(), i.disconnect(), e.disconnect();
                  });
              }),
              (this._playNote = async (t, e, i) => {
                if (this._container.muted) return;
                const s = t[e];
                if (!s) return;
                const o = B(s.value, async (i, s) =>
                  this._playNoteValue(t, e, s)
                );
                await (J(o) ? Promise.allSettled(o) : o);
                let n = e + 1;
                i && n >= t.length && (n %= t.length),
                  this._container.muted || (await this._playNote(t, n, i));
              }),
              (this._playNoteValue = async (t, e, i) => {
                const s = t[e];
                if (!s) return;
                const o = F(s.value, i, !0);
                try {
                  const t = Tr(o);
                  if (!Z(t)) return;
                  await this._playFrequency(t, s.duration);
                } catch (t) {
                  m().error(t);
                }
              }),
              (this._removeAudioSource = (t) => {
                t.stop(),
                  t.disconnect(),
                  this._audioSources.splice(this._audioSources.indexOf(t), 1);
              }),
              (this._unmute = () => {
                const t = this._container,
                  e = t.actualOptions.sounds;
                if (!e) return;
                t.audioContext || (t.audioContext = new AudioContext());
                const { audioContext: i } = t;
                this._audioSources || (this._audioSources = []);
                const s = i.createGain();
                s.connect(i.destination),
                  (s.gain.value = e.volume.value / 100),
                  (this._gain = s),
                  this._initEvents(),
                  this._engine.dispatchEvent("soundsUnmuted", {
                    container: this._container,
                  });
              }),
              (this._updateMuteIcons = () => {
                const t = this._container,
                  e = this._muteImg,
                  i = this._unmuteImg;
                e && (e.style.display = t.muted ? "block" : "none"),
                  i && (i.style.display = t.muted ? "none" : "block");
              }),
              (this._updateMuteStatus = () => {
                this._container.muted
                  ? this._mute()
                  : (this._unmute(), this._playMuteSound());
              }),
              (this._updateVolume = () => {
                const t = this._container,
                  e = t.actualOptions.sounds;
                if (!e?.enable) return;
                nt(this._volume, e.volume.min, e.volume.max);
                let i = !1;
                this._volume <= 0 && !t.muted
                  ? ((this._volume = 0), (t.muted = !0), (i = !0))
                  : this._volume > 0 && t.muted && ((t.muted = !1), (i = !0)),
                  i && (this._updateMuteIcons(), this._updateMuteStatus()),
                  this._gain?.gain &&
                    (this._gain.gain.value = this._volume / 100);
              }),
              (this._container = t),
              (this._engine = e),
              (this._volume = 0),
              (this._audioSources = []),
              (this._audioMap = new Map());
          }
          async init() {
            const t = this._container,
              e = t.actualOptions.sounds;
            if (!e?.enable) return;
            this._volume = e.volume.value;
            const i = e.events;
            this._audioMap = new Map();
            for (const e of i)
              e.audio &&
                B(e.audio, async (e) => {
                  const i = await fetch(e.source);
                  if (!i.ok) return;
                  const s = await i.arrayBuffer();
                  t.audioContext = new AudioContext();
                  const o = await t.audioContext.decodeAudioData(s);
                  this._audioMap.set(e.source, o);
                });
          }
          async start() {
            const t = this._container,
              e = t.actualOptions,
              i = e.sounds;
            if (!i?.enable || !t.canvas.element) return;
            t.muted = !0;
            const s = t.canvas.element,
              o = { top: s.offsetTop, right: s.offsetLeft + s.offsetWidth },
              { mute: n, unmute: a, volumeDown: r, volumeUp: c } = i.icons,
              h = () => {
                (t.muted = !t.muted),
                  this._updateMuteIcons(),
                  this._updateMuteStatus();
              };
            (this._muteImg = Vr({
              container: t,
              options: e,
              pos: o,
              display: "block",
              iconOptions: n,
              margin: 10,
              rightOffsets: [r.width, c.width],
              clickCb: h,
            })),
              (this._unmuteImg = Vr({
                container: t,
                options: e,
                pos: o,
                display: "none",
                iconOptions: a,
                margin: 10,
                rightOffsets: [r.width, c.width],
                clickCb: h,
              })),
              (this._volumeDownImg = Vr({
                container: t,
                options: e,
                pos: o,
                display: "block",
                iconOptions: r,
                margin: 10,
                rightOffsets: [c.width],
                clickCb: () => {
                  t.muted && (this._volume = 0),
                    (this._volume -= i.volume.step),
                    this._updateVolume();
                },
              })),
              (this._volumeUpImg = Vr({
                container: t,
                options: e,
                pos: o,
                display: "block",
                iconOptions: c,
                margin: 10,
                rightOffsets: [],
                clickCb: () => {
                  t.muted && (this._volume = 0),
                    (this._volume += i.volume.step),
                    this._updateVolume();
                },
              }));
          }
          stop() {
            (this._container.muted = !0),
              this._mute(),
              Ar(this._muteImg),
              Ar(this._unmuteImg),
              Ar(this._volumeDownImg),
              Ar(this._volumeUpImg);
          }
        }
        class Gr {
          constructor(t) {
            (this.id = "sounds"), (this._engine = t);
          }
          getPlugin(t) {
            return new Mr(t, this._engine);
          }
          loadOptions(t, e) {
            if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
            let i = t.sounds;
            void 0 === i?.load && (t.sounds = i = new Cr()), i.load(e?.sounds);
          }
          needsPlugin(t) {
            return t?.sounds?.enable ?? !1;
          }
        }
        class Er {
          draw(t, e, i) {
            if (
              void 0 === e.spiralInnerRadius ||
              void 0 === e.spiralLineSpacing ||
              void 0 === e.spiralWidthFactor
            )
              return;
            const s = (i - e.spiralInnerRadius) / e.spiralLineSpacing;
            for (let i = 0; i < 10 * s; i++) {
              const s = i / 10,
                o = e.spiralInnerRadius + e.spiralLineSpacing * s,
                n = { x: o * Math.cos(s), y: o * Math.sin(s) };
              t.lineTo(n.x, n.y);
            }
          }
          particleInit(t, e) {
            const i = t.retina.pixelRatio,
              s = e.shapeData;
            (e.spiralInnerRadius = ct(s.innerRadius ?? 1) * i),
              (e.spiralLineSpacing = ct(s.lineSpacing ?? 1) * i),
              (e.spiralWidthFactor = ct(s.widthFactor ?? 10));
          }
        }
        async function kr(t, e = !0) {
          await jn(t, !1),
            await aa(),
            await (async function () {
              et("ease-in-back", (t) => 2.70158 * t ** 3 - 1.70158 * t ** 2),
                et("ease-out-back", (t) => {
                  const e = 1.70158;
                  return (
                    1 + 2.70158 * Math.pow(t - 1, 3) + e * Math.pow(t - 1, 2)
                  );
                }),
                et("ease-in-out-back", (t) => {
                  const e = 2.5949095;
                  return t < 0.5
                    ? ((2 * t) ** 2 * (7.189819 * t - e)) / 2
                    : ((2 * t - 2) ** 2 * ((e + 1) * (2 * t - 2) + e) + 2) / 2;
                });
            })(),
            await (async function () {
              et("ease-in-circ", (t) => 1 - Math.sqrt(1 - t ** 2)),
                et("ease-out-circ", (t) => Math.sqrt(1 - (t - 1) ** 2)),
                et("ease-in-out-circ", (t) =>
                  t < 0.5
                    ? (1 - Math.sqrt(1 - (2 * t) ** 2)) / 2
                    : (Math.sqrt(1 - (-2 * t + 2) ** 2) + 1) / 2
                );
            })(),
            await (async function () {
              et("ease-in-cubic", (t) => t ** 3),
                et("ease-out-cubic", (t) => 1 - (1 - t) ** 3),
                et("ease-in-out-cubic", (t) =>
                  t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2
                );
            })(),
            await (async function () {
              et("ease-in-expo", (t) => (t ? 2 ** (10 * t - 10) : 0)),
                et("ease-out-expo", (t) =>
                  1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                ),
                et("ease-in-out-expo", (t) =>
                  t
                    ? 1 === t
                      ? 1
                      : t < 0.5
                      ? 2 ** (20 * t - 10) / 2
                      : (2 - 2 ** (-20 * t + 10)) / 2
                    : 0
                );
            })(),
            await (async function () {
              et("ease-in-quart", (t) => t ** 4),
                et("ease-out-quart", (t) => 1 - (1 - t) ** 4),
                et("ease-in-out-quart", (t) =>
                  t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2
                );
            })(),
            await (async function () {
              et("ease-in-quint", (t) => t ** 5),
                et("ease-out-quint", (t) => 1 - (1 - t) ** 5),
                et("ease-in-out-quint", (t) =>
                  t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2
                );
            })(),
            await (async function () {
              et("ease-in-sine", (t) => 1 - Math.cos((t * Math.PI) / 2)),
                et("ease-out-sine", (t) => Math.sin((t * Math.PI) / 2)),
                et("ease-in-out-sine", (t) => -(Math.cos(Math.PI * t) - 1) / 2);
            })(),
            await aa(),
            await (async function (t, e = !0) {
              await t.addPlugin(new Lt(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              const i = new ua();
              await t.addPlugin(i, e),
                await t.addInteractor(
                  "particlesInfection",
                  (t) => new da(t),
                  e
                );
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPlugin(new Sa(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPlugin(new Ka(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPlugin(new Gr(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPlugin(new Zt(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPlugin(new Yt(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPlugin(new ee(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("externalLight", (t) => new va(t), e),
                await t.addInteractor("particlesLight", (t) => new wa(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addInteractor("particlesRepulse", (t) => new Va(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("gradient", () => new ia(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addParticleUpdater("orbit", (t) => new Oa(t), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPathGenerator(Qt, new jt(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPathGenerator(Ha, new Da(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPathGenerator(er, new tr(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPathGenerator(ar, new nr(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addPathGenerator(vr, new yr(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("arrow", new Pt(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("bubble", new Ct(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape(["spade", "spades"], new Ft(), e),
                await t.addShape(["heart", "hearts"], new Nt(), e),
                await t.addShape(["diamond", "diamonds"], new Ut(), e),
                await t.addShape(["club", "clubs"], new $t(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("cog", new qt(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("heart", new sa(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("multiline-text", new xa(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("path", new Aa(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("rounded-polygon", new ir(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("rounded-rect", new or(), e);
            })(t, !1),
            await (async function (t, e = !0) {
              await t.addShape("spiral", new Er(), e);
            })(t, !1),
            await t.refresh(e);
        }
        kr(Qs);
      })(),
      s
    );
  })()
);
