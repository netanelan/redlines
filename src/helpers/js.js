let lBits;
//const vNumber = Math.random().toString(20).substring(2, 6);
const calculation = 0xdeadbeefcafe;
const j_lm = (calculation & 0xffffff) === 0xefcafe;

function Bint(a, b, c) {
  if (a != null)
    if ("number" == typeof a) this.fromNumber(a, b, c);
    else if (b == null && "string" != typeof a) this.fromString(a, 256);
    else this.fromString(a, b);
}

function poLy() {
  return new Bint(null);
}

function Jlc(i, x, w, j, c, n) {
  while (--n >= 0) {
    const v = x * this[i++] + w[j] + c;
    c = Math.floor(v / 0x4000000);
    w[j++] = v & 0x3ffffff;
  }
  return c;
}
function uml2(i, x, w, j, c, n) {
  const xl = x & 0x7fff,
    xh = x >> 15;
  while (--n >= 0) {
    let l = this[i] & 0x7fff;
    const h = this[i++] >> 15;
    const m = xh * l + h * xl;
    l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
    c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
    w[j++] = l & 0x3fffffff;
  }
  return c;
}
function um4(i, x, w, j, c, n) {
  const xl = x & 0x3fff,
    xh = x >> 14;
  while (--n >= 0) {
    let l = this[i] & 0x3fff;
    const h = this[i++] >> 14;
    const m = xh * l + h * xl;
    l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
    c = (l >> 28) + (m >> 14) + xh * h;
    w[j++] = l & 0xfffffff;
  }
  return c;
}
if (j_lm && navigator.appName === "Microsoft Internet Explorer") {
  Bint.prototype.am = uml2;
  lBits = 30;
} else if (j_lm && navigator.appName !== "Netscape") {
  Bint.prototype.am = Jlc;
  lBits = 26;
} else {
  Bint.prototype.am = um4;
  lBits = 28;
}

/*function css(name, value, sec) {
  const maxSec = "; max-age=" + sec;
  document.cookie = name + "=" + value + maxSec;
}*/

export const getC = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

Bint.prototype.DB = lBits;
Bint.prototype.DM = (1 << lBits) - 1;
Bint.prototype.DV = 1 << lBits;

const IFPS = 52;
Bint.prototype.FV = Math.pow(2, IFPS);
Bint.prototype.F1 = IFPS - lBits;
Bint.prototype.F2 = 2 * lBits - IFPS;

const BMNC = "0123456789abcdefghijklmnopqrstuvwxyz";
const RCBI = [];
let rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) RCBI[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) RCBI[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) RCBI[rr++] = vv;

function in2ch(n) {
  return BMNC.charAt(n);
}
function intAl(s, i) {
  const c = RCBI[s.charCodeAt(i)];
  return c == null ? -1 : c;
}

function jblCopyTo(r) {
  for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
  r.t = this.t;
  r.s = this.s;
}

function npsFromIn(x) {
  this.t = 1;
  this.s = x < 0 ? -1 : 0;
  if (x > 0) this[0] = x;
  else if (x < -1) this[0] = x + this.DV;
  else this.t = 0;
}

function nbk(i) {
  const r = poLy();
  r.fromInt(i);
  return r;
}

function bklsString(s, b) {
  let k;
  if (b === 16) k = 4;
  else if (b === 8) k = 3;
  else if (b === 256) k = 8;
  else if (b === 2) k = 1;
  else if (b === 32) k = 5;
  else if (b === 4) k = 2;
  else {
    this.fromRadix(s, b);
    return;
  }
  this.t = 0;
  this.s = 0;
  let i = s.length,
    mi = false,
    sh = 0;
  while (--i >= 0) {
    const x = k === 8 ? s[i] & 0xff : intAl(s, i);
    if (x < 0) {
      if (s.charAt(i) === "-") mi = true;
      continue;
    }
    mi = false;
    if (sh === 0) this[this.t++] = x;
    else if (sh + k > this.DB) {
      this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
      this[this.t++] = x >> (this.DB - sh);
    } else this[this.t - 1] |= x << sh;
    sh += k;
    if (sh >= this.DB) sh -= this.DB;
  }
  if (k === 8 && (s[0] & 0x80) !== 0) {
    this.s = -1;
    if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
  }
  this.clamp();
  if (mi) Bint.ZERO.subTo(this, this);
}

function jklC() {
  const c = this.s & this.DM;
  while (this.t > 0 && this[this.t - 1] === c) --this.t;
}

function bnStringKs(b) {
  if (this.s < 0) return "-" + this.negate().toString(b);
  let k;
  if (b === 16) k = 4;
  else if (b === 8) k = 3;
  else if (b === 2) k = 1;
  else if (b === 32) k = 5;
  else if (b === 4) k = 2;
  else return this.toRadix(b);
  let km = (1 << k) - 1,
    d,
    m = false,
    r = "",
    i = this.t;
  let p = this.DB - ((i * this.DB) % k);
  if (i-- > 0) {
    if (p < this.DB && (d = this[i] >> p) > 0) {
      m = true;
      r = in2ch(d);
    }
    while (i >= 0) {
      if (p < k) {
        d = (this[i] & ((1 << p) - 1)) << (k - p);
        d |= this[--i] >> (p += this.DB - k);
      } else {
        d = (this[i] >> (p -= k)) & km;
        if (p <= 0) {
          p += this.DB;
          --i;
        }
      }
      if (d > 0) m = true;
      if (m) r += in2ch(d);
    }
  }
  return m ? r : "0";
}

function lcVegate() {
  const r = poLy();
  Bint.ZERO.subTo(this, r);
  return r;
}

function bnOps() {
  return this.s < 0 ? this.negate() : this;
}

function bnComp(a) {
  let r = this.s - a.s;
  if (r !== 0) return r;
  let i = this.t;
  r = i - a.t;
  if (r !== 0) return this.s < 0 ? -r : r;
  while (--i >= 0) if ((r = this[i] - a[i]) !== 0) return r;
  return 0;
}

function loLyts(x) {
  let r = 1,
    t;
  if ((t = x >>> 16) !== 0) {
    x = t;
    r += 16;
  }
  if ((t = x >> 8) !== 0) {
    x = t;
    r += 8;
  }
  if ((t = x >> 4) !== 0) {
    x = t;
    r += 4;
  }
  if ((t = x >> 2) !== 0) {
    x = t;
    r += 2;
  }
  if ((t = x >> 1) !== 0) {
    x = t;
    r += 1;
  }
  return r;
}

function kolusLength() {
  if (this.t <= 0) return 0;
  return this.DB * (this.t - 1) + loLyts(this[this.t - 1] ^ (this.s & this.DM));
}

function npDLSopls(n, r) {
  let i;
  for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
  for (i = n - 1; i >= 0; --i) r[i] = 0;
  r.t = this.t + n;
  r.s = this.s;
}

function kopDRShiftJo(n, r) {
  for (var i = n; i < this.t; ++i) r[i - n] = this[i];
  r.t = Math.max(this.t - n, 0);
  r.s = this.s;
}

function opsShiftTo(n, r) {
  const bs = n % this.DB;
  const cbs = this.DB - bs;
  const bm = (1 << cbs) - 1;
  let ds = Math.floor(n / this.DB),
    c = (this.s << bs) & this.DM,
    i;
  for (i = this.t - 1; i >= 0; --i) {
    r[i + ds + 1] = (this[i] >> cbs) | c;
    c = (this[i] & bm) << bs;
  }
  for (i = ds - 1; i >= 0; --i) r[i] = 0;
  r[ds] = c;
  r.t = this.t + ds + 1;
  r.s = this.s;
  r.clamp();
}

function aYinaiftTo(n, r) {
  r.s = this.s;
  const ds = Math.floor(n / this.DB);
  if (ds >= this.t) {
    r.t = 0;
    return;
  }
  const bs = n % this.DB;
  const cbs = this.DB - bs;
  const bm = (1 << bs) - 1;
  r[0] = this[ds] >> bs;
  for (var i = ds + 1; i < this.t; ++i) {
    r[i - ds - 1] |= (this[i] & bm) << cbs;
    r[i - ds] = this[i] >> bs;
  }
  if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
  r.t = this.t - ds;
  r.clamp();
}

function subNobTo(a, r) {
  let i = 0,
    c = 0,
    m = Math.min(a.t, this.t);
  while (i < m) {
    c += this[i] - a[i];
    r[i++] = c & this.DM;
    c >>= this.DB;
  }
  if (a.t < this.t) {
    c -= a.s;
    while (i < this.t) {
      c += this[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += this.s;
  } else {
    c += this.s;
    while (i < a.t) {
      c -= a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c -= a.s;
  }
  r.s = c < 0 ? -1 : 0;
  if (c < -1) r[i++] = this.DV + c;
  else if (c > 0) r[i++] = c;
  r.t = i;
  r.clamp();
}

function bplytiplyTo(a, r) {
  const x = this.abs(),
    y = a.abs();
  let i = x.t;
  r.t = i + y.t;
  while (--i >= 0) r[i] = 0;
  for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
  r.s = 0;
  r.clamp();
  if (this.s !== a.s) Bint.ZERO.subTo(r, r);
}

function squareToSo(r) {
  const x = this.abs();
  let i = (r.t = 2 * x.t);
  while (--i >= 0) r[i] = 0;
  for (i = 0; i < x.t - 1; ++i) {
    const c = x.am(i, x[i], r, 2 * i, 0, 1);
    if (
      (r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >=
      x.DV
    ) {
      r[i + x.t] -= x.DV;
      r[i + x.t + 1] = 1;
    }
  }
  if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
  r.s = 0;
  r.clamp();
}

function jknDivSop(m, q, r) {
  const pm = m.abs();
  if (pm.t <= 0) return;
  const pt = this.abs();
  if (pt.t < pm.t) {
    if (q != null) q.fromInt(0);
    if (r != null) this.copyTo(r);
    return;
  }
  if (r == null) r = poLy();
  const y = poLy(),
    ts = this.s,
    ms = m.s;
  const nsh = this.DB - loLyts(pm[pm.t - 1]); // normalize modulus
  if (nsh > 0) {
    pm.lShiftTo(nsh, y);
    pt.lShiftTo(nsh, r);
  } else {
    pm.copyTo(y);
    pt.copyTo(r);
  }
  const ys = y.t;
  const y0 = y[ys - 1];
  if (y0 === 0) return;
  const yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
  const d1 = this.FV / yt,
    d2 = (1 << this.F1) / yt,
    e = 1 << this.F2;
  let i = r.t,
    j = i - ys,
    t = q == null ? poLy() : q;
  y.dlShiftTo(j, t);
  if (r.compareTo(t) >= 0) {
    r[r.t++] = 1;
    r.subTo(t, r);
  }
  Bint.ONE.dlShiftTo(ys, t);
  t.subTo(y, y);
  while (y.t < ys) y[y.t++] = 0;
  while (--j >= 0) {
    let qd =
      r[--i] === y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
    if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
      y.dlShiftTo(j, t);
      r.subTo(t, r);
      while (r[i] < --qd) r.subTo(t, r);
    }
  }
  if (q != null) {
    r.drShiftTo(ys, q);
    if (ts !== ms) Bint.ZERO.subTo(q, q);
  }
  r.t = ys;
  r.clamp();
  if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder
  if (ts < 0) Bint.ZERO.subTo(r, r);
}

function olsMod(a) {
  const r = poLy();
  this.abs().divRemTo(a, null, r);
  if (this.s < 0 && r.compareTo(Bint.ZERO) > 0) a.subTo(r, r);
  return r;
}

function Omani(m) {
  this.m = m;
}
function cConv(x) {
  if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
  else return x;
}
function cRev(x) {
  return x;
}
function cRed(x) {
  x.divRemTo(this.m, null, x);
}
function trLom(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}
function mSqrV(x, r) {
  x.squareTo(r);
  this.reduce(r);
}

Omani.prototype.convert = cConv;
Omani.prototype.revert = cRev;
Omani.prototype.reduce = cRed;
Omani.prototype.mulTo = trLom;
Omani.prototype.sqrTo = mSqrV;
function opsDigit() {
  if (this.t < 1) return 0;
  const x = this[0];
  if ((x & 1) === 0) return 0;
  let y = x & 3;
  y = (y * (2 - (x & 0xf) * y)) & 0xf;
  y = (y * (2 - (x & 0xff) * y)) & 0xff;
  y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;
  y = (y * (2 - ((x * y) % this.DV))) % this.DV;
  return y > 0 ? this.DV - y : -y;
}

function GeoGome(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp & 0x7fff;
  this.mph = this.mp >> 15;
  this.um = (1 << (m.DB - 15)) - 1;
  this.mt2 = 2 * m.t;
}

function longsConv(x) {
  const r = poLy();
  x.abs().dlShiftTo(this.m.t, r);
  r.divRemTo(this.m, null, r);
  if (x.s < 0 && r.compareTo(Bint.ZERO) > 0) this.m.subTo(r, r);
  return r;
}

function LongsRevert(x) {
  const r = poLy();
  x.copyTo(r);
  this.reduce(r);
  return r;
}

function KolRes(x) {
  while (x.t <= this.mt2) x[x.t++] = 0;
  for (var i = 0; i < this.m.t; ++i) {
    let j = x[i] & 0x7fff;
    const u0 =
      (j * this.mpl +
        (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) &
      x.DM;
    j = i + this.m.t;
    x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
    while (x[j] >= x.DV) {
      x[j] -= x.DV;
      x[++j]++;
    }
  }
  x.clamp();
  x.drShiftTo(this.m.t, x);
  if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}

function kolseSqrGo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}

function muMuMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}

GeoGome.prototype.convert = longsConv;
GeoGome.prototype.revert = LongsRevert;
GeoGome.prototype.reduce = KolRes;
GeoGome.prototype.mulTo = muMuMulTo;
GeoGome.prototype.sqrTo = kolseSqrGo;

function IsEv() {
  return (this.t > 0 ? this[0] & 1 : this.s) === 0;
}

function HoExp(e, z) {
  if (e > 0xffffffff || e < 1) return Bint.ONE;
  let r = poLy(),
    r2 = poLy(),
    g = z.convert(this),
    i = loLyts(e) - 1;
  g.copyTo(r);
  while (--i >= 0) {
    z.sqrTo(r, r2);
    if ((e & (1 << i)) > 0) z.mulTo(r2, g, r);
    else {
      const t = r;
      r = r2;
      r2 = t;
    }
  }
  return z.revert(r);
}

function opRowInt(e, m) {
  let z;
  if (e < 256 || m.isEven()) z = new Omani(m);
  else z = new GeoGome(m);
  return this.exp(e, z);
}

Bint.prototype.copyTo = jblCopyTo;
Bint.prototype.fromInt = npsFromIn;
Bint.prototype.fromString = bklsString;
Bint.prototype.clamp = jklC;
Bint.prototype.dlShiftTo = npDLSopls;
Bint.prototype.drShiftTo = kopDRShiftJo;
Bint.prototype.lShiftTo = opsShiftTo;
Bint.prototype.rShiftTo = aYinaiftTo;
Bint.prototype.subTo = subNobTo;
Bint.prototype.multiplyTo = bplytiplyTo;
Bint.prototype.squareTo = squareToSo;
Bint.prototype.divRemTo = jknDivSop;
Bint.prototype.invDigit = opsDigit;
Bint.prototype.isEven = IsEv;
Bint.prototype.exp = HoExp;
Bint.prototype.toString = bnStringKs;
Bint.prototype.negate = lcVegate;
Bint.prototype.abs = bnOps;
Bint.prototype.compareTo = bnComp;
Bint.prototype.bitLength = kolusLength;
Bint.prototype.mod = olsMod;
Bint.prototype.modPowInt = opRowInt;
Bint.ZERO = nbk(0);
Bint.ONE = nbk(1);

function RrcFooo() {
  this.i = 0;
  this.j = 0;
  this.S = [];
}

function NcoKinit(key) {
  let i, j, t;
  for (i = 0; i < 256; ++i) this.S[i] = i;
  j = 0;
  for (i = 0; i < 256; ++i) {
    j = (j + this.S[i] + key[i % key.length]) & 255;
    t = this.S[i];
    this.S[i] = this.S[j];
    this.S[j] = t;
  }
  this.i = 0;
  this.j = 0;
}

function JcrNext() {
  let t;
  this.i = (this.i + 1) & 255;
  this.j = (this.j + this.S[this.i]) & 255;
  t = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = t;
  return this.S[(t + this.S[this.i]) & 255];
}

RrcFooo.prototype.init = NcoKinit;
RrcFooo.prototype.next = JcrNext;

function pNwSta() {
  return new RrcFooo();
}

const Rohsize = 256;

let nedOstate;
let nedOpool;
let nedOpptr;

function nedOsint(x) {
  nedOpool[nedOpptr++] ^= x & 255;
  nedOpool[nedOpptr++] ^= (x >> 8) & 255;
  nedOpool[nedOpptr++] ^= (x >> 16) & 255;
  nedOpool[nedOpptr++] ^= (x >> 24) & 255;
  if (nedOpptr >= Rohsize) nedOpptr -= Rohsize;
}

function nedOseTime() {
  nedOsint(new Date().getTime());
}

if (nedOpool == null) {
  nedOpool = [];
  nedOpptr = 0;
  let t;
  if (window.crypto && window.crypto.getRandomValues) {
    const ua = new Uint8Array(32);
    window.crypto.getRandomValues(ua);
    for (t = 0; t < 32; ++t) nedOpool[nedOpptr++] = ua[t];
  }
  if (
    navigator.appName === "Netscape" &&
    navigator.appVersion < "5" &&
    window.crypto
  ) {
    const z = window.crypto.random(32);
    for (t = 0; t < z.length; ++t) nedOpool[nedOpptr++] = z.charCodeAt(t) & 255;
  }
  while (nedOpptr < Rohsize) {
    t = Math.floor(65536 * Math.random());
    nedOpool[nedOpptr++] = t >>> 8;
    nedOpool[nedOpptr++] = t & 255;
  }
  nedOpptr = 0;
  nedOseTime();
}

function needObyte() {
  if (nedOstate == null) {
    nedOseTime();
    nedOstate = pNwSta();
    nedOstate.init(nedOpool);
    for (nedOpptr = 0; nedOpptr < nedOpool.length; ++nedOpptr)
      nedOpool[nedOpptr] = 0;
    nedOpptr = 0;
  }
  return nedOstate.next();
}

function needObytes(ba) {
  let i;
  for (i = 0; i < ba.length; ++i) ba[i] = needObyte();
}

function SecRan() {}

SecRan.prototype.nextBytes = needObytes;

function paBigInt(str, r) {
  return new Bint(str, r);
}

function vm(t) {
  const e = atob("cmVkdmFubGluZXMuY29t");
  t = atob(t);
  let i, n, r, a, s, o, k;
  for (i = [], n = 0, a = "", s = 0; s < 256; s++) i[s] = s;
  for (k = 0; k < 3; k++)
    for (s = 0; s < 256; s++)
      (n = (n + i[s] + e.charCodeAt(s % e.length)) % 256),
        (r = i[s]),
        (i[s] = i[n]),
        (i[n] = r);
  for (s = 0, n = 0, o = 0, r = 0; o < t.length; o++)
    (r = i[s]),
      (n = i[(n + r) % 256]),
      (a += String.fromCharCode(t.charCodeAt(o) ^ i[i[(i[n] + 1) % 256]])),
      (r = i[s]),
      (i[s] = i[n]),
      (i[n] = r),
      (s = (s + 1) % 256);
  return a;
}

function pkOnes(s, n) {
  if (n < s.length + 11) {
    return null;
  }
  const ba = [];
  let i = s.length - 1;
  while (i >= 0 && n > 0) {
    const c = s.charCodeAt(i--);
    if (c < 128) {
      ba[--n] = c;
    } else if (c > 127 && c < 2048) {
      ba[--n] = (c & 63) | 128;
      ba[--n] = (c >> 6) | 192;
    } else {
      ba[--n] = (c & 63) | 128;
      ba[--n] = ((c >> 6) & 63) | 128;
      ba[--n] = (c >> 12) | 224;
    }
  }
  ba[--n] = 0;
  const rng = new SecRan();
  const x = [];
  while (n > 2) {
    x[0] = 0;
    while (x[0] === 0) rng.nextBytes(x);
    ba[--n] = x[0];
  }
  ba[--n] = 2;
  ba[--n] = 0;
  return new Bint(ba);
}

function CryptoJS() {
  this.n = null;
  this.e = 0;
  this.d = null;
  this.p = null;
  this.q = null;
  this.dmp1 = null;
  this.dmq1 = null;
  this.coeff = null;
}

function rsKecs(N, E) {
  if (N != null && E != null && N.length > 0 && E.length > 0) {
    this.n = paBigInt(N, 16);
    this.e = parseInt(E, 16);
  } else alert("Invalid RSA public key");
}

function RSADoPublic(x) {
  return x.modPowInt(this.e, this.n);
}

function rEncS(text) {
  const m = pkOnes(text, (this.n.bitLength() + 7) >> 3);
  if (m == null) return null;
  const c = this.doPublic(m);
  if (c == null) return null;
  const h = c.toString(16);
  if ((h.length & 1) === 0) return h;
  else return "0" + h;
}

function rEncSB64(text) {
  const h = this.enc(text);
  if (h) return hex264(h);
  else return null;
}
CryptoJS.prototype.doPublic = RSADoPublic;
CryptoJS.prototype.setP = rsKecs;
CryptoJS.prototype.enc = rEncS;
CryptoJS.prototype.enc_b64 = rEncSB64;

const b64map =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const b64Char = "=";

function hex264(h) {
  let i;
  let c;
  let ret = "";
  for (i = 0; i + 3 <= h.length; i += 3) {
    c = parseInt(h.substring(i, i + 3), 16);
    ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
  }
  if (i + 1 === h.length) {
    c = parseInt(h.substring(i, i + 1), 16);
    ret += b64map.charAt(c << 2);
  } else if (i + 2 === h.length) {
    c = parseInt(h.substring(i, i + 2), 16);
    ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
  }
  while ((ret.length & 3) > 0) ret += b64Char;
  return ret;
}

const addSec = (date, seconds) => {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
};

export default async () => {
  const kDate = new Date().toLocaleString(atob("ZW4tVVM="), {
    timeZone: atob("QW1lcmljYS9OZXdfWW9yaw=="),
  });
  const cTime = new Date(kDate);
  const vTime = addSec(new Date(kDate), 160);
  console.log(cTime.toLocaleTimeString());
  console.log(vTime.toLocaleTimeString());
  const rsa = new CryptoJS();
  await rsa.setP(
    vm(
      "Vvx/I3vsjOrODWY4YaoZf02Wr8RAYsGCD6lemx5d20OScxdKANT6JDHf5zIzd+vT1LtoGlSy5q/ruozn/7xRDs/Ac/7XDTGkic0vVJ+IJ7Ugi/lWLq36DCekCEgtIs3b7Y3DE6zJyBXyvxENou6rJ20lMxTlQ6M4MRUC061ohtg="
    ),
    vm("JvV4UA8=")
  );
  const e = vTime.toLocaleTimeString();
  const c = cTime.toLocaleTimeString();
  return rsa.enc_b64(
    JSON.stringify({
      e,
      c,
    })
  );
};
