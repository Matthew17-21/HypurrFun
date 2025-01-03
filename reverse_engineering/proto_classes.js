class mv extends Z {
    constructor() {
        super("google.protobuf.DoubleValue", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }])
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(2, e.value, "value", !1, !0)
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, 1, void 0, "value"),
        n
    }
    create(e) {
        const t = {
            value: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value !== 0 && t.tag(1, v.Bit64).double(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const wn = new mv;
class gv extends Z {
    constructor() {
        super("google.protobuf.FloatValue", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }])
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(1, e.value, "value", !1, !0)
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, 1, void 0, "value"),
        n
    }
    create(e) {
        const t = {
            value: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.float();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value !== 0 && t.tag(1, v.Bit32).float(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
new gv;
class yv extends Z {
    constructor() {
        super("google.protobuf.Int64Value", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(W.INT64, e.value, "value", !1, !0)
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, W.INT64, Wt.NUMBER, "value"),
        n
    }
    create(e) {
        const t = {
            value: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value !== 0 && t.tag(1, v.Varint).int64(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const be = new yv;
class vv extends Z {
    constructor() {
        super("google.protobuf.UInt64Value", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4,
            L: 2
        }])
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(W.UINT64, e.value, "value", !1, !0)
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, W.UINT64, Wt.NUMBER, "value"),
        n
    }
    create(e) {
        const t = {
            value: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.uint64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value !== 0 && t.tag(1, v.Varint).uint64(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
new vv;
class bv extends Z {
    constructor() {
        super("google.protobuf.Int32Value", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }])
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(5, e.value, "value", !1, !0)
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, 5, void 0, "value"),
        n
    }
    create(e) {
        const t = {
            value: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.int32();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value !== 0 && t.tag(1, v.Varint).int32(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
new bv;
class wv extends Z {
    constructor() {
        super("google.protobuf.UInt32Value", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }])
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(13, e.value, "value", !1, !0)
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, 13, void 0, "value"),
        n
    }
    create(e) {
        const t = {
            value: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.uint32();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value !== 0 && t.tag(1, v.Varint).uint32(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
new wv;
class kv extends Z {
    constructor() {
        super("google.protobuf.BoolValue", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }])
    }
    internalJsonWrite(e, t) {
        return e.value
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, 8, void 0, "value"),
        n
    }
    create(e) {
        const t = {
            value: !1
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.bool();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value !== !1 && t.tag(1, v.Varint).bool(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
new kv;
class _v extends Z {
    constructor() {
        super("google.protobuf.StringValue", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }])
    }
    internalJsonWrite(e, t) {
        return e.value
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, 9, void 0, "value"),
        n
    }
    create(e) {
        const t = {
            value: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value !== "" && t.tag(1, v.LengthDelimited).string(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ut = new _v;
class xv extends Z {
    constructor() {
        super("google.protobuf.BytesValue", [{
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }])
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(12, e.value, "value", !1, !0)
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()),
        n.value = this.refJsonReader.scalar(e, 12, void 0, "value"),
        n
    }
    create(e) {
        const t = {
            value: new Uint8Array(0)
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.value = e.bytes();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.value.length && t.tag(1, v.LengthDelimited).bytes(e.value);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
new xv;
var Gt = (i => (i[i.Quadratic = 0] = "Quadratic",
i[i.QuadraticV2 = 1] = "QuadraticV2",
i[i.Linear = 2] = "Linear",
i[i.Fixed = 3] = "Fixed",
i))(Gt || {})
  , Hr = (i => (i[i.BUY = 0] = "BUY",
i[i.SELL = 1] = "SELL",
i))(Hr || {});
class Tv extends Z {
    constructor() {
        super("hypurr.HyperliquidToken", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "index",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "sz_decimals",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 5,
            name: "wei_decimals",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 6,
            name: "token_id",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "circulating_supply",
            kind: "scalar",
            T: 1
        }, {
            no: 8,
            name: "deploy_info",
            kind: "message",
            T: () => Ha
        }, {
            no: 9,
            name: "geneses",
            kind: "message",
            repeat: 1,
            T: () => qa
        }, {
            no: 10,
            name: "hlq_balance",
            kind: "scalar",
            T: 1
        }, {
            no: 11,
            name: "full_name",
            kind: "scalar",
            T: 9
        }, {
            no: 12,
            name: "statistics",
            kind: "message",
            T: () => ja
        }])
    }
    create(e) {
        const t = {
            id: 0,
            name: "",
            index: 0,
            szDecimals: 0,
            weiDecimals: 0,
            tokenId: "",
            circulatingSupply: 0,
            geneses: [],
            hlqBalance: 0,
            fullName: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.name = e.string();
                break;
            case 3:
                r.index = e.int64().toNumber();
                break;
            case 4:
                r.szDecimals = e.int64().toNumber();
                break;
            case 5:
                r.weiDecimals = e.int64().toNumber();
                break;
            case 6:
                r.tokenId = e.string();
                break;
            case 7:
                r.circulatingSupply = e.double();
                break;
            case 8:
                r.deployInfo = Ha.internalBinaryRead(e, e.uint32(), n, r.deployInfo);
                break;
            case 9:
                r.geneses.push(qa.internalBinaryRead(e, e.uint32(), n));
                break;
            case 10:
                r.hlqBalance = e.double();
                break;
            case 11:
                r.fullName = e.string();
                break;
            case 12:
                r.statistics = ja.internalBinaryRead(e, e.uint32(), n, r.statistics);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.name !== "" && t.tag(2, v.LengthDelimited).string(e.name),
        e.index !== 0 && t.tag(3, v.Varint).int64(e.index),
        e.szDecimals !== 0 && t.tag(4, v.Varint).int64(e.szDecimals),
        e.weiDecimals !== 0 && t.tag(5, v.Varint).int64(e.weiDecimals),
        e.tokenId !== "" && t.tag(6, v.LengthDelimited).string(e.tokenId),
        e.circulatingSupply !== 0 && t.tag(7, v.Bit64).double(e.circulatingSupply),
        e.deployInfo && Ha.internalBinaryWrite(e.deployInfo, t.tag(8, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.geneses.length; r++)
            qa.internalBinaryWrite(e.geneses[r], t.tag(9, v.LengthDelimited).fork(), n).join();
        e.hlqBalance !== 0 && t.tag(10, v.Bit64).double(e.hlqBalance),
        e.fullName !== "" && t.tag(11, v.LengthDelimited).string(e.fullName),
        e.statistics && ja.internalBinaryWrite(e.statistics, t.tag(12, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const lt = new Tv;
class Sv extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenHolder", [{
            no: 1,
            name: "balance",
            kind: "scalar",
            T: 1
        }, {
            no: 2,
            name: "address",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            balance: 0,
            address: "",
            type: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.balance = e.double();
                break;
            case 2:
                r.address = e.string();
                break;
            case 3:
                r.type = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.balance !== 0 && t.tag(1, v.Bit64).double(e.balance),
        e.address !== "" && t.tag(2, v.LengthDelimited).string(e.address),
        e.type !== "" && t.tag(3, v.LengthDelimited).string(e.type);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ua = new Sv;
class Ev extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenHoldersRequest", [{
            no: 1,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            tokenId: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.tokenId = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.tokenId !== 0 && t.tag(1, v.Varint).int64(e.tokenId);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Cv = new Ev;
class $v extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenHoldersResponse", [{
            no: 1,
            name: "holders",
            kind: "message",
            repeat: 1,
            T: () => Ua
        }])
    }
    create(e) {
        const t = {
            holders: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.holders.push(Ua.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.holders.length; r++)
            Ua.internalBinaryWrite(e.holders[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Lv = new $v;
class Pv extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenStatistics", [{
            no: 1,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "holder_count",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "concentration_coefficient",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            tokenId: 0,
            holderCount: 0,
            concentrationCoefficient: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.tokenId = e.int64().toNumber();
                break;
            case 2:
                r.holderCount = e.int64().toNumber();
                break;
            case 3:
                r.concentrationCoefficient = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.tokenId !== 0 && t.tag(1, v.Varint).int64(e.tokenId),
        e.holderCount !== 0 && t.tag(2, v.Varint).int64(e.holderCount),
        e.concentrationCoefficient !== 0 && t.tag(3, v.Bit64).double(e.concentrationCoefficient);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ja = new Pv;
class Iv extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenDeployInfo", [{
            no: 1,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "deployer",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "register_tx",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "register_spot_tx",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "genesis_tx",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "hyperliquidity_tx",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "hip2_price",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "hip2_order_count",
            kind: "scalar",
            T: 5
        }, {
            no: 10,
            name: "hip2_order_size",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            tokenId: 0,
            height: 0,
            deployer: "",
            registerTx: "",
            registerSpotTx: "",
            genesisTx: "",
            hyperliquidityTx: "",
            hip2Price: 0,
            hip2OrderCount: 0,
            hip2OrderSize: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.tokenId = e.int64().toNumber();
                break;
            case 2:
                r.height = e.int64().toNumber();
                break;
            case 3:
                r.deployer = e.string();
                break;
            case 4:
                r.registerTx = e.string();
                break;
            case 5:
                r.registerSpotTx = e.string();
                break;
            case 6:
                r.genesisTx = e.string();
                break;
            case 7:
                r.hyperliquidityTx = e.string();
                break;
            case 8:
                r.hip2Price = e.double();
                break;
            case 9:
                r.hip2OrderCount = e.int32();
                break;
            case 10:
                r.hip2OrderSize = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.tokenId !== 0 && t.tag(1, v.Varint).int64(e.tokenId),
        e.height !== 0 && t.tag(2, v.Varint).int64(e.height),
        e.deployer !== "" && t.tag(3, v.LengthDelimited).string(e.deployer),
        e.registerTx !== "" && t.tag(4, v.LengthDelimited).string(e.registerTx),
        e.registerSpotTx !== "" && t.tag(5, v.LengthDelimited).string(e.registerSpotTx),
        e.genesisTx !== "" && t.tag(6, v.LengthDelimited).string(e.genesisTx),
        e.hyperliquidityTx !== "" && t.tag(7, v.LengthDelimited).string(e.hyperliquidityTx),
        e.hip2Price !== 0 && t.tag(8, v.Bit64).double(e.hip2Price),
        e.hip2OrderCount !== 0 && t.tag(9, v.Varint).int32(e.hip2OrderCount),
        e.hip2OrderSize !== 0 && t.tag(10, v.Bit64).double(e.hip2OrderSize);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ha = new Iv;
class Nv extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenGenesis", [{
            no: 1,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "target",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "amount",
            kind: "scalar",
            T: 1
        }, {
            no: 4,
            name: "type",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "target_token_id",
            kind: "message",
            T: () => be
        }])
    }
    create(e) {
        const t = {
            tokenId: 0,
            target: "",
            amount: 0,
            type: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.tokenId = e.int64().toNumber();
                break;
            case 2:
                r.target = e.string();
                break;
            case 3:
                r.amount = e.double();
                break;
            case 4:
                r.type = e.string();
                break;
            case 5:
                r.targetTokenId = be.internalBinaryRead(e, e.uint32(), n, r.targetTokenId);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.tokenId !== 0 && t.tag(1, v.Varint).int64(e.tokenId),
        e.target !== "" && t.tag(2, v.LengthDelimited).string(e.target),
        e.amount !== 0 && t.tag(3, v.Bit64).double(e.amount),
        e.type !== "" && t.tag(4, v.LengthDelimited).string(e.type),
        e.targetTokenId && be.internalBinaryWrite(e.targetTokenId, t.tag(5, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const qa = new Nv;
class Mv extends Z {
    constructor() {
        super("hypurr.HyperliquidSpotPair", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "base_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "base",
            kind: "message",
            T: () => lt
        }, {
            no: 5,
            name: "quote_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 6,
            name: "quote",
            kind: "message",
            T: () => lt
        }, {
            no: 7,
            name: "index",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 8,
            name: "mid_price",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "mark_price",
            kind: "scalar",
            T: 1
        }, {
            no: 10,
            name: "daily_ntl_volume",
            kind: "scalar",
            T: 1
        }, {
            no: 11,
            name: "previous_day_px",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            id: 0,
            name: "",
            baseId: 0,
            quoteId: 0,
            index: 0,
            midPrice: 0,
            markPrice: 0,
            dailyNtlVolume: 0,
            previousDayPx: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.name = e.string();
                break;
            case 3:
                r.baseId = e.int64().toNumber();
                break;
            case 4:
                r.base = lt.internalBinaryRead(e, e.uint32(), n, r.base);
                break;
            case 5:
                r.quoteId = e.int64().toNumber();
                break;
            case 6:
                r.quote = lt.internalBinaryRead(e, e.uint32(), n, r.quote);
                break;
            case 7:
                r.index = e.int64().toNumber();
                break;
            case 8:
                r.midPrice = e.double();
                break;
            case 9:
                r.markPrice = e.double();
                break;
            case 10:
                r.dailyNtlVolume = e.double();
                break;
            case 11:
                r.previousDayPx = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.name !== "" && t.tag(2, v.LengthDelimited).string(e.name),
        e.baseId !== 0 && t.tag(3, v.Varint).int64(e.baseId),
        e.base && lt.internalBinaryWrite(e.base, t.tag(4, v.LengthDelimited).fork(), n).join(),
        e.quoteId !== 0 && t.tag(5, v.Varint).int64(e.quoteId),
        e.quote && lt.internalBinaryWrite(e.quote, t.tag(6, v.LengthDelimited).fork(), n).join(),
        e.index !== 0 && t.tag(7, v.Varint).int64(e.index),
        e.midPrice !== 0 && t.tag(8, v.Bit64).double(e.midPrice),
        e.markPrice !== 0 && t.tag(9, v.Bit64).double(e.markPrice),
        e.dailyNtlVolume !== 0 && t.tag(10, v.Bit64).double(e.dailyNtlVolume),
        e.previousDayPx !== 0 && t.tag(11, v.Bit64).double(e.previousDayPx);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Mn = new Mv;
class Rv extends Z {
    constructor() {
        super("hypurr.HyperliquidPerpPair", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "index",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "mid_price",
            kind: "scalar",
            T: 1
        }, {
            no: 5,
            name: "mark_price",
            kind: "scalar",
            T: 1
        }, {
            no: 6,
            name: "daily_ntl_volume",
            kind: "scalar",
            T: 1
        }, {
            no: 7,
            name: "previous_day_px",
            kind: "scalar",
            T: 1
        }, {
            no: 8,
            name: "funding",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "open_interest",
            kind: "scalar",
            T: 1
        }, {
            no: 10,
            name: "premium",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            id: 0,
            name: "",
            index: 0,
            midPrice: 0,
            markPrice: 0,
            dailyNtlVolume: 0,
            previousDayPx: 0,
            funding: 0,
            openInterest: 0,
            premium: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.name = e.string();
                break;
            case 3:
                r.index = e.int64().toNumber();
                break;
            case 4:
                r.midPrice = e.double();
                break;
            case 5:
                r.markPrice = e.double();
                break;
            case 6:
                r.dailyNtlVolume = e.double();
                break;
            case 7:
                r.previousDayPx = e.double();
                break;
            case 8:
                r.funding = e.double();
                break;
            case 9:
                r.openInterest = e.double();
                break;
            case 10:
                r.premium = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.name !== "" && t.tag(2, v.LengthDelimited).string(e.name),
        e.index !== 0 && t.tag(3, v.Varint).int64(e.index),
        e.midPrice !== 0 && t.tag(4, v.Bit64).double(e.midPrice),
        e.markPrice !== 0 && t.tag(5, v.Bit64).double(e.markPrice),
        e.dailyNtlVolume !== 0 && t.tag(6, v.Bit64).double(e.dailyNtlVolume),
        e.previousDayPx !== 0 && t.tag(7, v.Bit64).double(e.previousDayPx),
        e.funding !== 0 && t.tag(8, v.Bit64).double(e.funding),
        e.openInterest !== 0 && t.tag(9, v.Bit64).double(e.openInterest),
        e.premium !== 0 && t.tag(10, v.Bit64).double(e.premium);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ga = new Rv;
class Bv extends Z {
    constructor() {
        super("hypurr.HyperliquidWallet", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "telegram_id",
            kind: "message",
            T: () => be
        }, {
            no: 4,
            name: "ethereum_address",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "points",
            kind: "scalar",
            T: 5
        }, {
            no: 6,
            name: "movements",
            kind: "message",
            repeat: 1,
            T: () => Rn
        }, {
            no: 7,
            name: "spot_balances",
            kind: "message",
            repeat: 1,
            T: () => Bn
        }, {
            no: 8,
            name: "launch_balances",
            kind: "message",
            repeat: 1,
            T: () => Ka
        }, {
            no: 9,
            name: "is_agent",
            kind: "scalar",
            T: 8
        }, {
            no: 10,
            name: "is_read_only",
            kind: "scalar",
            T: 8
        }])
    }
    create(e) {
        const t = {
            id: 0,
            name: "",
            ethereumAddress: "",
            points: 0,
            movements: [],
            spotBalances: [],
            launchBalances: [],
            isAgent: !1,
            isReadOnly: !1
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.name = e.string();
                break;
            case 3:
                r.telegramId = be.internalBinaryRead(e, e.uint32(), n, r.telegramId);
                break;
            case 4:
                r.ethereumAddress = e.string();
                break;
            case 5:
                r.points = e.int32();
                break;
            case 6:
                r.movements.push(Rn.internalBinaryRead(e, e.uint32(), n));
                break;
            case 7:
                r.spotBalances.push(Bn.internalBinaryRead(e, e.uint32(), n));
                break;
            case 8:
                r.launchBalances.push(Ka.internalBinaryRead(e, e.uint32(), n));
                break;
            case 9:
                r.isAgent = e.bool();
                break;
            case 10:
                r.isReadOnly = e.bool();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.name !== "" && t.tag(2, v.LengthDelimited).string(e.name),
        e.telegramId && be.internalBinaryWrite(e.telegramId, t.tag(3, v.LengthDelimited).fork(), n).join(),
        e.ethereumAddress !== "" && t.tag(4, v.LengthDelimited).string(e.ethereumAddress),
        e.points !== 0 && t.tag(5, v.Varint).int32(e.points);
        for (let r = 0; r < e.movements.length; r++)
            Rn.internalBinaryWrite(e.movements[r], t.tag(6, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.spotBalances.length; r++)
            Bn.internalBinaryWrite(e.spotBalances[r], t.tag(7, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.launchBalances.length; r++)
            Ka.internalBinaryWrite(e.launchBalances[r], t.tag(8, v.LengthDelimited).fork(), n).join();
        e.isAgent !== !1 && t.tag(9, v.Varint).bool(e.isAgent),
        e.isReadOnly !== !1 && t.tag(10, v.Varint).bool(e.isReadOnly);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ve = new Bv;
class Ov extends Z {
    constructor() {
        super("hypurr.HyperliquidPublicWallet", [{
            no: 1,
            name: "ethereum_address",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            ethereumAddress: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.ethereumAddress = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.ethereumAddress !== "" && t.tag(1, v.LengthDelimited).string(e.ethereumAddress);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const bi = new Ov;
class Dv extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletMovement", [{
            no: 1,
            name: "telegram_id",
            kind: "message",
            T: () => be
        }, {
            no: 2,
            name: "wallet",
            kind: "message",
            T: () => Ve
        }, {
            no: 3,
            name: "wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "hash",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "type",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 7,
            name: "token",
            kind: "message",
            T: () => lt
        }, {
            no: 8,
            name: "amount",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "usdc_value",
            kind: "scalar",
            T: 1
        }, {
            no: 10,
            name: "destination",
            kind: "scalar",
            T: 9
        }, {
            no: 11,
            name: "fee",
            kind: "scalar",
            T: 1
        }, {
            no: 12,
            name: "timestamp",
            kind: "message",
            T: () => be
        }])
    }
    create(e) {
        const t = {
            walletId: 0,
            hash: "",
            type: "",
            tokenId: 0,
            amount: 0,
            usdcValue: 0,
            destination: "",
            fee: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.telegramId = be.internalBinaryRead(e, e.uint32(), n, r.telegramId);
                break;
            case 2:
                r.wallet = Ve.internalBinaryRead(e, e.uint32(), n, r.wallet);
                break;
            case 3:
                r.walletId = e.int64().toNumber();
                break;
            case 4:
                r.hash = e.string();
                break;
            case 5:
                r.type = e.string();
                break;
            case 6:
                r.tokenId = e.int64().toNumber();
                break;
            case 7:
                r.token = lt.internalBinaryRead(e, e.uint32(), n, r.token);
                break;
            case 8:
                r.amount = e.double();
                break;
            case 9:
                r.usdcValue = e.double();
                break;
            case 10:
                r.destination = e.string();
                break;
            case 11:
                r.fee = e.double();
                break;
            case 12:
                r.timestamp = be.internalBinaryRead(e, e.uint32(), n, r.timestamp);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.telegramId && be.internalBinaryWrite(e.telegramId, t.tag(1, v.LengthDelimited).fork(), n).join(),
        e.wallet && Ve.internalBinaryWrite(e.wallet, t.tag(2, v.LengthDelimited).fork(), n).join(),
        e.walletId !== 0 && t.tag(3, v.Varint).int64(e.walletId),
        e.hash !== "" && t.tag(4, v.LengthDelimited).string(e.hash),
        e.type !== "" && t.tag(5, v.LengthDelimited).string(e.type),
        e.tokenId !== 0 && t.tag(6, v.Varint).int64(e.tokenId),
        e.token && lt.internalBinaryWrite(e.token, t.tag(7, v.LengthDelimited).fork(), n).join(),
        e.amount !== 0 && t.tag(8, v.Bit64).double(e.amount),
        e.usdcValue !== 0 && t.tag(9, v.Bit64).double(e.usdcValue),
        e.destination !== "" && t.tag(10, v.LengthDelimited).string(e.destination),
        e.fee !== 0 && t.tag(11, v.Bit64).double(e.fee),
        e.timestamp && be.internalBinaryWrite(e.timestamp, t.tag(12, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Rn = new Dv;
class Fv extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletBalance", [{
            no: 1,
            name: "telegram_id",
            kind: "message",
            T: () => be
        }, {
            no: 2,
            name: "wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "balance",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            walletId: 0,
            tokenId: 0,
            balance: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.telegramId = be.internalBinaryRead(e, e.uint32(), n, r.telegramId);
                break;
            case 2:
                r.walletId = e.int64().toNumber();
                break;
            case 3:
                r.tokenId = e.int64().toNumber();
                break;
            case 4:
                r.balance = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.telegramId && be.internalBinaryWrite(e.telegramId, t.tag(1, v.LengthDelimited).fork(), n).join(),
        e.walletId !== 0 && t.tag(2, v.Varint).int64(e.walletId),
        e.tokenId !== 0 && t.tag(3, v.Varint).int64(e.tokenId),
        e.balance !== 0 && t.tag(4, v.Bit64).double(e.balance);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Bn = new Fv;
class Av extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchBalance", [{
            no: 1,
            name: "telegram_id",
            kind: "message",
            T: () => be
        }, {
            no: 2,
            name: "wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "launch_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "balance",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            walletId: 0,
            launchId: 0,
            balance: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.telegramId = be.internalBinaryRead(e, e.uint32(), n, r.telegramId);
                break;
            case 2:
                r.walletId = e.int64().toNumber();
                break;
            case 3:
                r.launchId = e.int64().toNumber();
                break;
            case 4:
                r.balance = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.telegramId && be.internalBinaryWrite(e.telegramId, t.tag(1, v.LengthDelimited).fork(), n).join(),
        e.walletId !== 0 && t.tag(2, v.Varint).int64(e.walletId),
        e.launchId !== 0 && t.tag(3, v.Varint).int64(e.launchId),
        e.balance !== 0 && t.tag(4, v.Varint).int64(e.balance);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ka = new Av;
class Vv extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletDeploySession", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "telegram_id",
            kind: "message",
            T: () => be
        }, {
            no: 3,
            name: "step",
            kind: "scalar",
            T: 5
        }, {
            no: 4,
            name: "token_name",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "full_name",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "token_decimals",
            kind: "scalar",
            T: 5
        }, {
            no: 7,
            name: "token_wei",
            kind: "scalar",
            T: 5
        }, {
            no: 8,
            name: "token_supply",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "start_market_cap",
            kind: "scalar",
            T: 5
        }, {
            no: 10,
            name: "anchor1_token_id",
            kind: "message",
            T: () => be
        }, {
            no: 11,
            name: "anchor1_token",
            kind: "message",
            T: () => lt
        }, {
            no: 12,
            name: "anchor2_token_id",
            kind: "message",
            T: () => be
        }, {
            no: 13,
            name: "anchor2_token",
            kind: "message",
            T: () => lt
        }, {
            no: 14,
            name: "token_id",
            kind: "message",
            T: () => be
        }, {
            no: 15,
            name: "spot_pair_id",
            kind: "scalar",
            T: 5
        }, {
            no: 16,
            name: "deploy_threshold",
            kind: "scalar",
            T: 1
        }, {
            no: 17,
            name: "geneses",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: () => lr
            }
        }])
    }
    create(e) {
        const t = {
            id: 0,
            step: 0,
            tokenName: "",
            fullName: "",
            tokenDecimals: 0,
            tokenWei: 0,
            tokenSupply: 0,
            startMarketCap: 0,
            spotPairId: 0,
            deployThreshold: 0,
            geneses: {}
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.telegramId = be.internalBinaryRead(e, e.uint32(), n, r.telegramId);
                break;
            case 3:
                r.step = e.int32();
                break;
            case 4:
                r.tokenName = e.string();
                break;
            case 5:
                r.fullName = e.string();
                break;
            case 6:
                r.tokenDecimals = e.int32();
                break;
            case 7:
                r.tokenWei = e.int32();
                break;
            case 8:
                r.tokenSupply = e.double();
                break;
            case 9:
                r.startMarketCap = e.int32();
                break;
            case 10:
                r.anchor1TokenId = be.internalBinaryRead(e, e.uint32(), n, r.anchor1TokenId);
                break;
            case 11:
                r.anchor1Token = lt.internalBinaryRead(e, e.uint32(), n, r.anchor1Token);
                break;
            case 12:
                r.anchor2TokenId = be.internalBinaryRead(e, e.uint32(), n, r.anchor2TokenId);
                break;
            case 13:
                r.anchor2Token = lt.internalBinaryRead(e, e.uint32(), n, r.anchor2Token);
                break;
            case 14:
                r.tokenId = be.internalBinaryRead(e, e.uint32(), n, r.tokenId);
                break;
            case 15:
                r.spotPairId = e.int32();
                break;
            case 16:
                r.deployThreshold = e.double();
                break;
            case 17:
                this.binaryReadMap17(r.geneses, e, n);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    binaryReadMap17(e, t, n) {
        let s = t.uint32(), r = t.pos + s, a, l;
        for (; t.pos < r; ) {
            let[o,u] = t.tag();
            switch (o) {
            case 1:
                a = t.string();
                break;
            case 2:
                l = lr.internalBinaryRead(t, t.uint32(), n);
                break;
            default:
                throw new globalThis.Error("unknown map entry field for field hypurr.HyperliquidWalletDeploySession.geneses")
            }
        }
        e[a ?? ""] = l ?? lr.create()
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.telegramId && be.internalBinaryWrite(e.telegramId, t.tag(2, v.LengthDelimited).fork(), n).join(),
        e.step !== 0 && t.tag(3, v.Varint).int32(e.step),
        e.tokenName !== "" && t.tag(4, v.LengthDelimited).string(e.tokenName),
        e.fullName !== "" && t.tag(5, v.LengthDelimited).string(e.fullName),
        e.tokenDecimals !== 0 && t.tag(6, v.Varint).int32(e.tokenDecimals),
        e.tokenWei !== 0 && t.tag(7, v.Varint).int32(e.tokenWei),
        e.tokenSupply !== 0 && t.tag(8, v.Bit64).double(e.tokenSupply),
        e.startMarketCap !== 0 && t.tag(9, v.Varint).int32(e.startMarketCap),
        e.anchor1TokenId && be.internalBinaryWrite(e.anchor1TokenId, t.tag(10, v.LengthDelimited).fork(), n).join(),
        e.anchor1Token && lt.internalBinaryWrite(e.anchor1Token, t.tag(11, v.LengthDelimited).fork(), n).join(),
        e.anchor2TokenId && be.internalBinaryWrite(e.anchor2TokenId, t.tag(12, v.LengthDelimited).fork(), n).join(),
        e.anchor2Token && lt.internalBinaryWrite(e.anchor2Token, t.tag(13, v.LengthDelimited).fork(), n).join(),
        e.tokenId && be.internalBinaryWrite(e.tokenId, t.tag(14, v.LengthDelimited).fork(), n).join(),
        e.spotPairId !== 0 && t.tag(15, v.Varint).int32(e.spotPairId),
        e.deployThreshold !== 0 && t.tag(16, v.Bit64).double(e.deployThreshold);
        for (let r of Object.keys(e.geneses))
            t.tag(17, v.LengthDelimited).fork().tag(1, v.LengthDelimited).string(r),
            t.tag(2, v.LengthDelimited).fork(),
            lr.internalBinaryWrite(e.geneses[r], t, n),
            t.join().join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ut = new Vv;
class zv extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletDeploySessionGenesis", [{
            no: 1,
            name: "target",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "share",
            kind: "scalar",
            T: 5
        }])
    }
    create(e) {
        const t = {
            target: "",
            share: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.target = e.string();
                break;
            case 2:
                r.share = e.int32();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.target !== "" && t.tag(1, v.LengthDelimited).string(e.target),
        e.share !== 0 && t.tag(2, v.Varint).int32(e.share);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const lr = new zv;
class Wv extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunch", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "telegram_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "telegram_user",
            kind: "message",
            T: () => Ht
        }, {
            no: 4,
            name: "description",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "listed",
            kind: "scalar",
            T: 8
        }, {
            no: 6,
            name: "settled",
            kind: "scalar",
            T: 8
        }, {
            no: 7,
            name: "x0",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 8,
            name: "session_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 9,
            name: "session",
            kind: "message",
            T: () => Ut
        }, {
            no: 10,
            name: "media_file_id",
            kind: "scalar",
            T: 9
        }, {
            no: 11,
            name: "topic_id",
            kind: "message",
            T: () => be
        }, {
            no: 12,
            name: "x",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 13,
            name: "y",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 14,
            name: "k",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 15,
            name: "fills",
            kind: "message",
            repeat: 1,
            T: () => Ei
        }, {
            no: 16,
            name: "daily_ntl_volume",
            kind: "scalar",
            T: 1
        }, {
            no: 17,
            name: "previous_day_px",
            kind: "scalar",
            T: 1
        }, {
            no: 18,
            name: "last_event_timestamp",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 19,
            name: "pool_type",
            kind: "enum",
            T: () => ["hypurr.HyperliquidLaunchPoolType", Gt]
        }, {
            no: 20,
            name: "decimals",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 21,
            name: "session_wallet",
            kind: "message",
            T: () => bi
        }, {
            no: 22,
            name: "media_type",
            kind: "scalar",
            T: 9
        }, {
            no: 23,
            name: "listed_timestamp",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 24,
            name: "dev_wallet",
            kind: "message",
            T: () => bi
        }])
    }
    create(e) {
        const t = {
            id: 0,
            telegramId: 0,
            description: "",
            listed: !1,
            settled: !1,
            x0: 0,
            sessionId: 0,
            mediaFileId: "",
            x: 0,
            y: 0,
            k: 0,
            fills: [],
            dailyNtlVolume: 0,
            previousDayPx: 0,
            lastEventTimestamp: 0,
            poolType: 0,
            decimals: 0,
            mediaType: "",
            listedTimestamp: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.telegramId = e.int64().toNumber();
                break;
            case 3:
                r.telegramUser = Ht.internalBinaryRead(e, e.uint32(), n, r.telegramUser);
                break;
            case 4:
                r.description = e.string();
                break;
            case 5:
                r.listed = e.bool();
                break;
            case 6:
                r.settled = e.bool();
                break;
            case 7:
                r.x0 = e.int64().toNumber();
                break;
            case 8:
                r.sessionId = e.int64().toNumber();
                break;
            case 9:
                r.session = Ut.internalBinaryRead(e, e.uint32(), n, r.session);
                break;
            case 10:
                r.mediaFileId = e.string();
                break;
            case 11:
                r.topicId = be.internalBinaryRead(e, e.uint32(), n, r.topicId);
                break;
            case 12:
                r.x = e.int64().toNumber();
                break;
            case 13:
                r.y = e.int64().toNumber();
                break;
            case 14:
                r.k = e.int64().toNumber();
                break;
            case 15:
                r.fills.push(Ei.internalBinaryRead(e, e.uint32(), n));
                break;
            case 16:
                r.dailyNtlVolume = e.double();
                break;
            case 17:
                r.previousDayPx = e.double();
                break;
            case 18:
                r.lastEventTimestamp = e.int64().toNumber();
                break;
            case 19:
                r.poolType = e.int32();
                break;
            case 20:
                r.decimals = e.int64().toNumber();
                break;
            case 21:
                r.sessionWallet = bi.internalBinaryRead(e, e.uint32(), n, r.sessionWallet);
                break;
            case 22:
                r.mediaType = e.string();
                break;
            case 23:
                r.listedTimestamp = e.int64().toNumber();
                break;
            case 24:
                r.devWallet = bi.internalBinaryRead(e, e.uint32(), n, r.devWallet);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.telegramId !== 0 && t.tag(2, v.Varint).int64(e.telegramId),
        e.telegramUser && Ht.internalBinaryWrite(e.telegramUser, t.tag(3, v.LengthDelimited).fork(), n).join(),
        e.description !== "" && t.tag(4, v.LengthDelimited).string(e.description),
        e.listed !== !1 && t.tag(5, v.Varint).bool(e.listed),
        e.settled !== !1 && t.tag(6, v.Varint).bool(e.settled),
        e.x0 !== 0 && t.tag(7, v.Varint).int64(e.x0),
        e.sessionId !== 0 && t.tag(8, v.Varint).int64(e.sessionId),
        e.session && Ut.internalBinaryWrite(e.session, t.tag(9, v.LengthDelimited).fork(), n).join(),
        e.mediaFileId !== "" && t.tag(10, v.LengthDelimited).string(e.mediaFileId),
        e.topicId && be.internalBinaryWrite(e.topicId, t.tag(11, v.LengthDelimited).fork(), n).join(),
        e.x !== 0 && t.tag(12, v.Varint).int64(e.x),
        e.y !== 0 && t.tag(13, v.Varint).int64(e.y),
        e.k !== 0 && t.tag(14, v.Varint).int64(e.k);
        for (let r = 0; r < e.fills.length; r++)
            Ei.internalBinaryWrite(e.fills[r], t.tag(15, v.LengthDelimited).fork(), n).join();
        e.dailyNtlVolume !== 0 && t.tag(16, v.Bit64).double(e.dailyNtlVolume),
        e.previousDayPx !== 0 && t.tag(17, v.Bit64).double(e.previousDayPx),
        e.lastEventTimestamp !== 0 && t.tag(18, v.Varint).int64(e.lastEventTimestamp),
        e.poolType !== 0 && t.tag(19, v.Varint).int32(e.poolType),
        e.decimals !== 0 && t.tag(20, v.Varint).int64(e.decimals),
        e.sessionWallet && bi.internalBinaryWrite(e.sessionWallet, t.tag(21, v.LengthDelimited).fork(), n).join(),
        e.mediaType !== "" && t.tag(22, v.LengthDelimited).string(e.mediaType),
        e.listedTimestamp !== 0 && t.tag(23, v.Varint).int64(e.listedTimestamp),
        e.devWallet && bi.internalBinaryWrite(e.devWallet, t.tag(24, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const jt = new Wv;
class Uv extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchFill", [{
            no: 1,
            name: "launch_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "telegram_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "telegram",
            kind: "message",
            T: () => Ht
        }, {
            no: 4,
            name: "wallet",
            kind: "message",
            T: () => bi
        }, {
            no: 5,
            name: "usdc_delta",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 6,
            name: "launch_delta",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 7,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 8,
            name: "movement_hash",
            kind: "message",
            T: () => ut
        }, {
            no: 9,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            launchId: 0,
            telegramId: 0,
            usdcDelta: 0,
            launchDelta: 0,
            timestamp: 0,
            id: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launchId = e.int64().toNumber();
                break;
            case 2:
                r.telegramId = e.int64().toNumber();
                break;
            case 3:
                r.telegram = Ht.internalBinaryRead(e, e.uint32(), n, r.telegram);
                break;
            case 4:
                r.wallet = bi.internalBinaryRead(e, e.uint32(), n, r.wallet);
                break;
            case 5:
                r.usdcDelta = e.int64().toNumber();
                break;
            case 6:
                r.launchDelta = e.int64().toNumber();
                break;
            case 7:
                r.timestamp = e.int64().toNumber();
                break;
            case 8:
                r.movementHash = ut.internalBinaryRead(e, e.uint32(), n, r.movementHash);
                break;
            case 9:
                r.id = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.launchId !== 0 && t.tag(1, v.Varint).int64(e.launchId),
        e.telegramId !== 0 && t.tag(2, v.Varint).int64(e.telegramId),
        e.telegram && Ht.internalBinaryWrite(e.telegram, t.tag(3, v.LengthDelimited).fork(), n).join(),
        e.wallet && bi.internalBinaryWrite(e.wallet, t.tag(4, v.LengthDelimited).fork(), n).join(),
        e.usdcDelta !== 0 && t.tag(5, v.Varint).int64(e.usdcDelta),
        e.launchDelta !== 0 && t.tag(6, v.Varint).int64(e.launchDelta),
        e.timestamp !== 0 && t.tag(7, v.Varint).int64(e.timestamp),
        e.movementHash && ut.internalBinaryWrite(e.movementHash, t.tag(8, v.LengthDelimited).fork(), n).join(),
        e.id !== 0 && t.tag(9, v.Varint).int64(e.id);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ei = new Uv;
class jv extends Z {
    constructor() {
        super("hypurr.TelegramUserPublic", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "username",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "picture_file_id",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "reputation_score",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            id: 0,
            username: "",
            pictureFileId: "",
            reputationScore: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.username = e.string();
                break;
            case 3:
                r.pictureFileId = e.string();
                break;
            case 4:
                r.reputationScore = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.username !== "" && t.tag(2, v.LengthDelimited).string(e.username),
        e.pictureFileId !== "" && t.tag(3, v.LengthDelimited).string(e.pictureFileId),
        e.reputationScore !== 0 && t.tag(4, v.Varint).int64(e.reputationScore);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ht = new jv;
class Hv extends Z {
    constructor() {
        super("hypurr.HyperliquidDeployAuction", [{
            no: 1,
            name: "start_time",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "duration",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "start_gas",
            kind: "scalar",
            T: 1
        }, {
            no: 4,
            name: "current_gas",
            kind: "message",
            T: () => wn
        }, {
            no: 5,
            name: "end_gas",
            kind: "message",
            T: () => wn
        }])
    }
    create(e) {
        const t = {
            startTime: 0,
            duration: 0,
            startGas: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.startTime = e.int64().toNumber();
                break;
            case 2:
                r.duration = e.int64().toNumber();
                break;
            case 3:
                r.startGas = e.double();
                break;
            case 4:
                r.currentGas = wn.internalBinaryRead(e, e.uint32(), n, r.currentGas);
                break;
            case 5:
                r.endGas = wn.internalBinaryRead(e, e.uint32(), n, r.endGas);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.startTime !== 0 && t.tag(1, v.Varint).int64(e.startTime),
        e.duration !== 0 && t.tag(2, v.Varint).int64(e.duration),
        e.startGas !== 0 && t.tag(3, v.Bit64).double(e.startGas),
        e.currentGas && wn.internalBinaryWrite(e.currentGas, t.tag(4, v.LengthDelimited).fork(), n).join(),
        e.endGas && wn.internalBinaryWrite(e.endGas, t.tag(5, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Xa = new Hv;
class qv extends Z {
    constructor() {
        super("hypurr.HyperliquidDeployAuctionRequest", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Gv = new qv;
class Kv extends Z {
    constructor() {
        super("hypurr.HyperliquidDeployAuctionResponse", [{
            no: 1,
            name: "auction",
            kind: "message",
            T: () => Xa
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.auction = Xa.internalBinaryRead(e, e.uint32(), n, r.auction);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.auction && Xa.internalBinaryWrite(e.auction, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Xv = new Kv;
class Jv extends Z {
    constructor() {
        super("hypurr.HyperliquidTokensRequest", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Yv = new Jv;
class Qv extends Z {
    constructor() {
        super("hypurr.HyperliquidTokensResponse", [{
            no: 1,
            name: "tokens",
            kind: "message",
            repeat: 1,
            T: () => lt
        }])
    }
    create(e) {
        const t = {
            tokens: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.tokens.push(lt.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.tokens.length; r++)
            lt.internalBinaryWrite(e.tokens[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Zv = new Qv;
class eb extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenMessage", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "telegram_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 5,
            name: "author",
            kind: "message",
            T: () => Ht
        }, {
            no: 6,
            name: "chat_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 7,
            name: "topic_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 8,
            name: "message",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            id: 0,
            timestamp: 0,
            tokenId: 0,
            telegramId: 0,
            chatId: 0,
            topicId: 0,
            message: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.timestamp = e.int64().toNumber();
                break;
            case 3:
                r.tokenId = e.int64().toNumber();
                break;
            case 4:
                r.telegramId = e.int64().toNumber();
                break;
            case 5:
                r.author = Ht.internalBinaryRead(e, e.uint32(), n, r.author);
                break;
            case 6:
                r.chatId = e.int64().toNumber();
                break;
            case 7:
                r.topicId = e.int64().toNumber();
                break;
            case 8:
                r.message = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.timestamp !== 0 && t.tag(2, v.Varint).int64(e.timestamp),
        e.tokenId !== 0 && t.tag(3, v.Varint).int64(e.tokenId),
        e.telegramId !== 0 && t.tag(4, v.Varint).int64(e.telegramId),
        e.author && Ht.internalBinaryWrite(e.author, t.tag(5, v.LengthDelimited).fork(), n).join(),
        e.chatId !== 0 && t.tag(6, v.Varint).int64(e.chatId),
        e.topicId !== 0 && t.tag(7, v.Varint).int64(e.topicId),
        e.message !== "" && t.tag(8, v.LengthDelimited).string(e.message);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ja = new eb;
class tb extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenMessagesRequest", [{
            no: 1,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            tokenId: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.tokenId = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.tokenId !== 0 && t.tag(1, v.Varint).int64(e.tokenId);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ib = new tb;
class nb extends Z {
    constructor() {
        super("hypurr.HyperliquidTokenMessagesResponse", [{
            no: 1,
            name: "messages",
            kind: "message",
            repeat: 1,
            T: () => Ja
        }])
    }
    create(e) {
        const t = {
            messages: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.messages.push(Ja.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.messages.length; r++)
            Ja.internalBinaryWrite(e.messages[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const sb = new nb;
class rb extends Z {
    constructor() {
        super("hypurr.HyperliquidSpotPairRequest", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            id: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ab = new rb;
class lb extends Z {
    constructor() {
        super("hypurr.HyperliquidSpotPairResponse", [{
            no: 1,
            name: "pair",
            kind: "message",
            T: () => Mn
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.pair = Mn.internalBinaryRead(e, e.uint32(), n, r.pair);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.pair && Mn.internalBinaryWrite(e.pair, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ob = new lb;
class ub extends Z {
    constructor() {
        super("hypurr.HyperliquidSpotPairsRequest", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const cb = new ub;
class hb extends Z {
    constructor() {
        super("hypurr.HyperliquidSpotPairsResponse", [{
            no: 1,
            name: "pairs",
            kind: "message",
            repeat: 1,
            T: () => Mn
        }])
    }
    create(e) {
        const t = {
            pairs: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.pairs.push(Mn.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.pairs.length; r++)
            Mn.internalBinaryWrite(e.pairs[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const db = new hb;
class fb extends Z {
    constructor() {
        super("hypurr.HyperliquidPerpPairsRequest", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const pb = new fb;
class mb extends Z {
    constructor() {
        super("hypurr.HyperliquidPerpPairsResponse", [{
            no: 1,
            name: "pairs",
            kind: "message",
            repeat: 1,
            T: () => Ga
        }])
    }
    create(e) {
        const t = {
            pairs: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.pairs.push(Ga.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.pairs.length; r++)
            Ga.internalBinaryWrite(e.pairs[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const gb = new mb;
class yb extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletRequest", [{
            no: 1,
            name: "ethereum_address",
            kind: "message",
            T: () => ut
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.ethereumAddress = ut.internalBinaryRead(e, e.uint32(), n, r.ethereumAddress);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.ethereumAddress && ut.internalBinaryWrite(e.ethereumAddress, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const vb = new yb;
class bb extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletResponse", [{
            no: 1,
            name: "wallet",
            kind: "message",
            T: () => Ve
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.wallet = Ve.internalBinaryRead(e, e.uint32(), n, r.wallet);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.wallet && Ve.internalBinaryWrite(e.wallet, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const wb = new bb;
class kb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchesRequest", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const _b = new kb;
class xb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchesResponse", [{
            no: 1,
            name: "launches",
            kind: "message",
            repeat: 1,
            T: () => jt
        }])
    }
    create(e) {
        const t = {
            launches: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launches.push(jt.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.launches.length; r++)
            jt.internalBinaryWrite(e.launches[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Tb = new xb;
class Sb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchStreamRequest", [{
            no: 1,
            name: "launch_id",
            kind: "message",
            T: () => be
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launchId = be.internalBinaryRead(e, e.uint32(), n, r.launchId);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.launchId && be.internalBinaryWrite(e.launchId, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Eb = new Sb;
class Cb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchStreamResponse", [{
            no: 1,
            name: "launches",
            kind: "message",
            repeat: 1,
            T: () => jt
        }])
    }
    create(e) {
        const t = {
            launches: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launches.push(jt.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.launches.length; r++)
            jt.internalBinaryWrite(e.launches[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const $b = new Cb;
class Lb extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletDeploySessionsRequest", [{
            no: 1,
            name: "telegram_id",
            kind: "message",
            T: () => be
        }, {
            no: 2,
            name: "wallet_id",
            kind: "message",
            T: () => be
        }, {
            no: 3,
            name: "session_id",
            kind: "message",
            T: () => be
        }, {
            no: 4,
            name: "ethereum_address",
            kind: "message",
            T: () => ut
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.telegramId = be.internalBinaryRead(e, e.uint32(), n, r.telegramId);
                break;
            case 2:
                r.walletId = be.internalBinaryRead(e, e.uint32(), n, r.walletId);
                break;
            case 3:
                r.sessionId = be.internalBinaryRead(e, e.uint32(), n, r.sessionId);
                break;
            case 4:
                r.ethereumAddress = ut.internalBinaryRead(e, e.uint32(), n, r.ethereumAddress);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.telegramId && be.internalBinaryWrite(e.telegramId, t.tag(1, v.LengthDelimited).fork(), n).join(),
        e.walletId && be.internalBinaryWrite(e.walletId, t.tag(2, v.LengthDelimited).fork(), n).join(),
        e.sessionId && be.internalBinaryWrite(e.sessionId, t.tag(3, v.LengthDelimited).fork(), n).join(),
        e.ethereumAddress && ut.internalBinaryWrite(e.ethereumAddress, t.tag(4, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Pb = new Lb;
class Ib extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletDeploySessionsResponse", [{
            no: 1,
            name: "sessions",
            kind: "message",
            repeat: 1,
            T: () => Ut
        }])
    }
    create(e) {
        const t = {
            sessions: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.sessions.push(Ut.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.sessions.length; r++)
            Ut.internalBinaryWrite(e.sessions[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Nb = new Ib;
class Mb extends Z {
    constructor() {
        super("hypurr.SetHyperliquidWalletDeploySessionTargetRequest", [{
            no: 1,
            name: "ethereum_address",
            kind: "message",
            T: () => ut
        }, {
            no: 2,
            name: "session_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "target",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "share",
            kind: "scalar",
            T: 5
        }])
    }
    create(e) {
        const t = {
            sessionId: 0,
            name: "",
            target: "",
            share: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.ethereumAddress = ut.internalBinaryRead(e, e.uint32(), n, r.ethereumAddress);
                break;
            case 2:
                r.sessionId = e.int64().toNumber();
                break;
            case 3:
                r.name = e.string();
                break;
            case 4:
                r.target = e.string();
                break;
            case 5:
                r.share = e.int32();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.ethereumAddress && ut.internalBinaryWrite(e.ethereumAddress, t.tag(1, v.LengthDelimited).fork(), n).join(),
        e.sessionId !== 0 && t.tag(2, v.Varint).int64(e.sessionId),
        e.name !== "" && t.tag(3, v.LengthDelimited).string(e.name),
        e.target !== "" && t.tag(4, v.LengthDelimited).string(e.target),
        e.share !== 0 && t.tag(5, v.Varint).int32(e.share);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Rb = new Mb;
class Bb extends Z {
    constructor() {
        super("hypurr.SetHyperliquidWalletDeploySessionTargetResponse", [{
            no: 1,
            name: "session",
            kind: "message",
            T: () => Ut
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.session = Ut.internalBinaryRead(e, e.uint32(), n, r.session);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.session && Ut.internalBinaryWrite(e.session, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ob = new Bb;
class Db extends Z {
    constructor() {
        super("hypurr.DeleteHyperliquidWalletDeploySessionTargetRequest", [{
            no: 1,
            name: "ethereum_address",
            kind: "message",
            T: () => ut
        }, {
            no: 2,
            name: "session_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            sessionId: 0,
            name: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.ethereumAddress = ut.internalBinaryRead(e, e.uint32(), n, r.ethereumAddress);
                break;
            case 2:
                r.sessionId = e.int64().toNumber();
                break;
            case 3:
                r.name = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.ethereumAddress && ut.internalBinaryWrite(e.ethereumAddress, t.tag(1, v.LengthDelimited).fork(), n).join(),
        e.sessionId !== 0 && t.tag(2, v.Varint).int64(e.sessionId),
        e.name !== "" && t.tag(3, v.LengthDelimited).string(e.name);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Fb = new Db;
class Ab extends Z {
    constructor() {
        super("hypurr.DeleteHyperliquidWalletDeploySessionTargetResponse", [{
            no: 1,
            name: "session",
            kind: "message",
            T: () => Ut
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.session = Ut.internalBinaryRead(e, e.uint32(), n, r.session);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.session && Ut.internalBinaryWrite(e.session, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Vb = new Ab;
class zb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchFillsRequest", [{
            no: 1,
            name: "launch_id",
            kind: "message",
            T: () => be
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launchId = be.internalBinaryRead(e, e.uint32(), n, r.launchId);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.launchId && be.internalBinaryWrite(e.launchId, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Wb = new zb;
class Ub extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchFillsResponse", [{
            no: 1,
            name: "fills",
            kind: "message",
            repeat: 1,
            T: () => Ei
        }, {
            no: 2,
            name: "positions",
            kind: "message",
            repeat: 1,
            T: () => Ya
        }])
    }
    create(e) {
        const t = {
            fills: [],
            positions: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.fills.push(Ei.internalBinaryRead(e, e.uint32(), n));
                break;
            case 2:
                r.positions.push(Ya.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.fills.length; r++)
            Ei.internalBinaryWrite(e.fills[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.positions.length; r++)
            Ya.internalBinaryWrite(e.positions[r], t.tag(2, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Nc = new Ub;
class jb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchPosition", [{
            no: 1,
            name: "address",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "balance",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "cost",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            address: "",
            balance: 0,
            cost: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.address = e.string();
                break;
            case 2:
                r.balance = e.int64().toNumber();
                break;
            case 3:
                r.cost = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.address !== "" && t.tag(1, v.LengthDelimited).string(e.address),
        e.balance !== 0 && t.tag(2, v.Varint).int64(e.balance),
        e.cost !== 0 && t.tag(3, v.Varint).int64(e.cost);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ya = new jb;
class Hb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchCandlesRequest", [{
            no: 1,
            name: "launch_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "interval",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            launchId: 0,
            interval: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launchId = e.int64().toNumber();
                break;
            case 2:
                r.interval = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.launchId !== 0 && t.tag(1, v.Varint).int64(e.launchId),
        e.interval !== "" && t.tag(2, v.LengthDelimited).string(e.interval);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Mc = new Hb;
class qb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchCandle", [{
            no: 1,
            name: "time",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "open",
            kind: "scalar",
            T: 2
        }, {
            no: 3,
            name: "high",
            kind: "scalar",
            T: 2
        }, {
            no: 4,
            name: "low",
            kind: "scalar",
            T: 2
        }, {
            no: 5,
            name: "close",
            kind: "scalar",
            T: 2
        }, {
            no: 6,
            name: "volume",
            kind: "scalar",
            T: 2
        }])
    }
    create(e) {
        const t = {
            time: 0,
            open: 0,
            high: 0,
            low: 0,
            close: 0,
            volume: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.time = e.int64().toNumber();
                break;
            case 2:
                r.open = e.float();
                break;
            case 3:
                r.high = e.float();
                break;
            case 4:
                r.low = e.float();
                break;
            case 5:
                r.close = e.float();
                break;
            case 6:
                r.volume = e.float();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.time !== 0 && t.tag(1, v.Varint).int64(e.time),
        e.open !== 0 && t.tag(2, v.Bit32).float(e.open),
        e.high !== 0 && t.tag(3, v.Bit32).float(e.high),
        e.low !== 0 && t.tag(4, v.Bit32).float(e.low),
        e.close !== 0 && t.tag(5, v.Bit32).float(e.close),
        e.volume !== 0 && t.tag(6, v.Bit32).float(e.volume);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Qa = new qb;
class Gb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchCandlesResponse", [{
            no: 1,
            name: "candles",
            kind: "message",
            repeat: 1,
            T: () => Qa
        }])
    }
    create(e) {
        const t = {
            candles: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.candles.push(Qa.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.candles.length; r++)
            Qa.internalBinaryWrite(e.candles[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Rc = new Gb;
class Kb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchRequest", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            id: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Xb = new Kb;
class Jb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchResponse", [{
            no: 1,
            name: "launch",
            kind: "message",
            T: () => jt
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launch = jt.internalBinaryRead(e, e.uint32(), n, r.launch);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.launch && jt.internalBinaryWrite(e.launch, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Yb = new Jb;
class Qb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchMessage", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "launch_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "telegram_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 5,
            name: "author",
            kind: "message",
            T: () => Ht
        }, {
            no: 6,
            name: "chat_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 7,
            name: "topic_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 8,
            name: "message",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            id: 0,
            timestamp: 0,
            launchId: 0,
            telegramId: 0,
            chatId: 0,
            topicId: 0,
            message: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.timestamp = e.int64().toNumber();
                break;
            case 3:
                r.launchId = e.int64().toNumber();
                break;
            case 4:
                r.telegramId = e.int64().toNumber();
                break;
            case 5:
                r.author = Ht.internalBinaryRead(e, e.uint32(), n, r.author);
                break;
            case 6:
                r.chatId = e.int64().toNumber();
                break;
            case 7:
                r.topicId = e.int64().toNumber();
                break;
            case 8:
                r.message = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.timestamp !== 0 && t.tag(2, v.Varint).int64(e.timestamp),
        e.launchId !== 0 && t.tag(3, v.Varint).int64(e.launchId),
        e.telegramId !== 0 && t.tag(4, v.Varint).int64(e.telegramId),
        e.author && Ht.internalBinaryWrite(e.author, t.tag(5, v.LengthDelimited).fork(), n).join(),
        e.chatId !== 0 && t.tag(6, v.Varint).int64(e.chatId),
        e.topicId !== 0 && t.tag(7, v.Varint).int64(e.topicId),
        e.message !== "" && t.tag(8, v.LengthDelimited).string(e.message);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Za = new Qb;
class Zb extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchMessagesRequest", [{
            no: 1,
            name: "launch_id",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            launchId: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launchId = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.launchId !== 0 && t.tag(1, v.Varint).int64(e.launchId);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ew = new Zb;
class tw extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchMessagesResponse", [{
            no: 1,
            name: "messages",
            kind: "message",
            repeat: 1,
            T: () => Za
        }])
    }
    create(e) {
        const t = {
            messages: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.messages.push(Za.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.messages.length; r++)
            Za.internalBinaryWrite(e.messages[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const iw = new tw;
class nw extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchHolder", [{
            no: 1,
            name: "balance",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "address",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            balance: 0,
            address: "",
            type: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.balance = e.int64().toNumber();
                break;
            case 2:
                r.address = e.string();
                break;
            case 3:
                r.type = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.balance !== 0 && t.tag(1, v.Varint).int64(e.balance),
        e.address !== "" && t.tag(2, v.LengthDelimited).string(e.address),
        e.type !== "" && t.tag(3, v.LengthDelimited).string(e.type);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const el = new nw;
class sw extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchHoldersRequest", [{
            no: 1,
            name: "launch_id",
            kind: "scalar",
            T: 3,
            L: 2
        }])
    }
    create(e) {
        const t = {
            launchId: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.launchId = e.int64().toNumber();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.launchId !== 0 && t.tag(1, v.Varint).int64(e.launchId);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const rw = new sw;
class aw extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchHoldersResponse", [{
            no: 1,
            name: "holders",
            kind: "message",
            repeat: 1,
            T: () => el
        }])
    }
    create(e) {
        const t = {
            holders: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.holders.push(el.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.holders.length; r++)
            el.internalBinaryWrite(e.holders[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const lw = new aw;
class ow extends Z {
    constructor() {
        super("hypurr.LatestHyperliquidLaunchFillsRequest", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const uw = new ow;
class cw extends Z {
    constructor() {
        super("hypurr.TelegramUser", [{
            no: 1,
            name: "telegram_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "telegram_username",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "pending_fees",
            kind: "scalar",
            T: 1
        }, {
            no: 4,
            name: "referral_rewards",
            kind: "scalar",
            T: 1
        }, {
            no: 5,
            name: "referral_code",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "referral_score",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 7,
            name: "referrer_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 8,
            name: "settings",
            kind: "message",
            T: () => il
        }, {
            no: 9,
            name: "wallet",
            kind: "message",
            T: () => Ve
        }, {
            no: 10,
            name: "wallets",
            kind: "message",
            repeat: 1,
            T: () => Ve
        }, {
            no: 11,
            name: "wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 12,
            name: "sniper_wallet",
            kind: "message",
            T: () => Ve
        }, {
            no: 13,
            name: "sniper_wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 14,
            name: "dumper_wallet",
            kind: "message",
            T: () => Ve
        }, {
            no: 15,
            name: "dumper_wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 16,
            name: "reputation_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 17,
            name: "reputation",
            kind: "message",
            T: () => nl
        }, {
            no: 18,
            name: "launches",
            kind: "message",
            repeat: 1,
            T: () => jt
        }, {
            no: 19,
            name: "balances",
            kind: "message",
            repeat: 1,
            T: () => Bn
        }, {
            no: 20,
            name: "movements",
            kind: "message",
            repeat: 1,
            T: () => Rn
        }, {
            no: 21,
            name: "launch_fills",
            kind: "message",
            repeat: 1,
            T: () => Ei
        }, {
            no: 22,
            name: "labels",
            kind: "message",
            repeat: 1,
            T: () => sl
        }])
    }
    create(e) {
        const t = {
            telegramId: 0,
            telegramUsername: "",
            pendingFees: 0,
            referralRewards: 0,
            referralCode: "",
            referralScore: 0,
            referrerId: 0,
            wallets: [],
            walletId: 0,
            sniperWalletId: 0,
            dumperWalletId: 0,
            reputationId: 0,
            launches: [],
            balances: [],
            movements: [],
            launchFills: [],
            labels: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.telegramId = e.int64().toNumber();
                break;
            case 2:
                r.telegramUsername = e.string();
                break;
            case 3:
                r.pendingFees = e.double();
                break;
            case 4:
                r.referralRewards = e.double();
                break;
            case 5:
                r.referralCode = e.string();
                break;
            case 6:
                r.referralScore = e.int64().toNumber();
                break;
            case 7:
                r.referrerId = e.int64().toNumber();
                break;
            case 8:
                r.settings = il.internalBinaryRead(e, e.uint32(), n, r.settings);
                break;
            case 9:
                r.wallet = Ve.internalBinaryRead(e, e.uint32(), n, r.wallet);
                break;
            case 10:
                r.wallets.push(Ve.internalBinaryRead(e, e.uint32(), n));
                break;
            case 11:
                r.walletId = e.int64().toNumber();
                break;
            case 12:
                r.sniperWallet = Ve.internalBinaryRead(e, e.uint32(), n, r.sniperWallet);
                break;
            case 13:
                r.sniperWalletId = e.int64().toNumber();
                break;
            case 14:
                r.dumperWallet = Ve.internalBinaryRead(e, e.uint32(), n, r.dumperWallet);
                break;
            case 15:
                r.dumperWalletId = e.int64().toNumber();
                break;
            case 16:
                r.reputationId = e.int64().toNumber();
                break;
            case 17:
                r.reputation = nl.internalBinaryRead(e, e.uint32(), n, r.reputation);
                break;
            case 18:
                r.launches.push(jt.internalBinaryRead(e, e.uint32(), n));
                break;
            case 19:
                r.balances.push(Bn.internalBinaryRead(e, e.uint32(), n));
                break;
            case 20:
                r.movements.push(Rn.internalBinaryRead(e, e.uint32(), n));
                break;
            case 21:
                r.launchFills.push(Ei.internalBinaryRead(e, e.uint32(), n));
                break;
            case 22:
                r.labels.push(sl.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.telegramId !== 0 && t.tag(1, v.Varint).int64(e.telegramId),
        e.telegramUsername !== "" && t.tag(2, v.LengthDelimited).string(e.telegramUsername),
        e.pendingFees !== 0 && t.tag(3, v.Bit64).double(e.pendingFees),
        e.referralRewards !== 0 && t.tag(4, v.Bit64).double(e.referralRewards),
        e.referralCode !== "" && t.tag(5, v.LengthDelimited).string(e.referralCode),
        e.referralScore !== 0 && t.tag(6, v.Varint).int64(e.referralScore),
        e.referrerId !== 0 && t.tag(7, v.Varint).int64(e.referrerId),
        e.settings && il.internalBinaryWrite(e.settings, t.tag(8, v.LengthDelimited).fork(), n).join(),
        e.wallet && Ve.internalBinaryWrite(e.wallet, t.tag(9, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.wallets.length; r++)
            Ve.internalBinaryWrite(e.wallets[r], t.tag(10, v.LengthDelimited).fork(), n).join();
        e.walletId !== 0 && t.tag(11, v.Varint).int64(e.walletId),
        e.sniperWallet && Ve.internalBinaryWrite(e.sniperWallet, t.tag(12, v.LengthDelimited).fork(), n).join(),
        e.sniperWalletId !== 0 && t.tag(13, v.Varint).int64(e.sniperWalletId),
        e.dumperWallet && Ve.internalBinaryWrite(e.dumperWallet, t.tag(14, v.LengthDelimited).fork(), n).join(),
        e.dumperWalletId !== 0 && t.tag(15, v.Varint).int64(e.dumperWalletId),
        e.reputationId !== 0 && t.tag(16, v.Varint).int64(e.reputationId),
        e.reputation && nl.internalBinaryWrite(e.reputation, t.tag(17, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.launches.length; r++)
            jt.internalBinaryWrite(e.launches[r], t.tag(18, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.balances.length; r++)
            Bn.internalBinaryWrite(e.balances[r], t.tag(19, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.movements.length; r++)
            Rn.internalBinaryWrite(e.movements[r], t.tag(20, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.launchFills.length; r++)
            Ei.internalBinaryWrite(e.launchFills[r], t.tag(21, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.labels.length; r++)
            sl.internalBinaryWrite(e.labels[r], t.tag(22, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const tl = new cw;
class hw extends Z {
    constructor() {
        super("hypurr.TelegramUserSettings", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const il = new hw;
class dw extends Z {
    constructor() {
        super("hypurr.TelegramUserReputation", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const nl = new dw;
class fw extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletLabel", [{
            no: 1,
            name: "ethereum_address",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            ethereumAddress: "",
            label: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.ethereumAddress = e.string();
                break;
            case 2:
                r.label = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.ethereumAddress !== "" && t.tag(1, v.LengthDelimited).string(e.ethereumAddress),
        e.label !== "" && t.tag(2, v.LengthDelimited).string(e.label);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const sl = new fw;
class pw extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletPerformanceRequest", [{
            no: 1,
            name: "ethereum_address",
            kind: "message",
            T: () => ut
        }, {
            no: 2,
            name: "account_type",
            kind: "scalar",
            T: 9
        }])
    }
    create(e) {
        const t = {
            accountType: ""
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.ethereumAddress = ut.internalBinaryRead(e, e.uint32(), n, r.ethereumAddress);
                break;
            case 2:
                r.accountType = e.string();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.ethereumAddress && ut.internalBinaryWrite(e.ethereumAddress, t.tag(1, v.LengthDelimited).fork(), n).join(),
        e.accountType !== "" && t.tag(2, v.LengthDelimited).string(e.accountType);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const mw = new pw;
class gw extends Z {
    constructor() {
        super("hypurr.PerformancePoint", [{
            no: 1,
            name: "time",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "notional",
            kind: "scalar",
            T: 2
        }, {
            no: 3,
            name: "pnl",
            kind: "scalar",
            T: 2
        }])
    }
    create(e) {
        const t = {
            time: 0,
            notional: 0,
            pnl: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.time = e.int64().toNumber();
                break;
            case 2:
                r.notional = e.float();
                break;
            case 3:
                r.pnl = e.float();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.time !== 0 && t.tag(1, v.Varint).int64(e.time),
        e.notional !== 0 && t.tag(2, v.Bit32).float(e.notional),
        e.pnl !== 0 && t.tag(3, v.Bit32).float(e.pnl);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const rl = new gw;
class yw extends Z {
    constructor() {
        super("hypurr.PerformanceReport", [{
            no: 1,
            name: "token_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "total_pnl",
            kind: "scalar",
            T: 2
        }, {
            no: 3,
            name: "running_pnl",
            kind: "scalar",
            T: 2
        }, {
            no: 4,
            name: "size",
            kind: "scalar",
            T: 2
        }, {
            no: 5,
            name: "price",
            kind: "scalar",
            T: 2
        }, {
            no: 6,
            name: "entry_price",
            kind: "scalar",
            T: 2
        }, {
            no: 7,
            name: "total_cost",
            kind: "scalar",
            T: 2
        }, {
            no: 8,
            name: "running_cost",
            kind: "scalar",
            T: 2
        }])
    }
    create(e) {
        const t = {
            tokenId: 0,
            totalPnl: 0,
            runningPnl: 0,
            size: 0,
            price: 0,
            entryPrice: 0,
            totalCost: 0,
            runningCost: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.tokenId = e.int64().toNumber();
                break;
            case 2:
                r.totalPnl = e.float();
                break;
            case 3:
                r.runningPnl = e.float();
                break;
            case 4:
                r.size = e.float();
                break;
            case 5:
                r.price = e.float();
                break;
            case 6:
                r.entryPrice = e.float();
                break;
            case 7:
                r.totalCost = e.float();
                break;
            case 8:
                r.runningCost = e.float();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.tokenId !== 0 && t.tag(1, v.Varint).int64(e.tokenId),
        e.totalPnl !== 0 && t.tag(2, v.Bit32).float(e.totalPnl),
        e.runningPnl !== 0 && t.tag(3, v.Bit32).float(e.runningPnl),
        e.size !== 0 && t.tag(4, v.Bit32).float(e.size),
        e.price !== 0 && t.tag(5, v.Bit32).float(e.price),
        e.entryPrice !== 0 && t.tag(6, v.Bit32).float(e.entryPrice),
        e.totalCost !== 0 && t.tag(7, v.Bit32).float(e.totalCost),
        e.runningCost !== 0 && t.tag(8, v.Bit32).float(e.runningCost);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const al = new yw;
class vw extends Z {
    constructor() {
        super("hypurr.Performance", [{
            no: 1,
            name: "net_cash",
            kind: "scalar",
            T: 2
        }, {
            no: 2,
            name: "notional",
            kind: "scalar",
            T: 2
        }, {
            no: 3,
            name: "reports",
            kind: "message",
            repeat: 1,
            T: () => al
        }, {
            no: 4,
            name: "points",
            kind: "message",
            repeat: 1,
            T: () => rl
        }])
    }
    create(e) {
        const t = {
            netCash: 0,
            notional: 0,
            reports: [],
            points: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.netCash = e.float();
                break;
            case 2:
                r.notional = e.float();
                break;
            case 3:
                r.reports.push(al.internalBinaryRead(e, e.uint32(), n));
                break;
            case 4:
                r.points.push(rl.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.netCash !== 0 && t.tag(1, v.Bit32).float(e.netCash),
        e.notional !== 0 && t.tag(2, v.Bit32).float(e.notional);
        for (let r = 0; r < e.reports.length; r++)
            al.internalBinaryWrite(e.reports[r], t.tag(3, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.points.length; r++)
            rl.internalBinaryWrite(e.points[r], t.tag(4, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const gi = new vw;
class bw extends Z {
    constructor() {
        super("hypurr.HyperliquidWalletPerformanceResponse", [{
            no: 1,
            name: "spot",
            kind: "message",
            T: () => gi
        }, {
            no: 2,
            name: "perp",
            kind: "message",
            T: () => gi
        }, {
            no: 3,
            name: "launch",
            kind: "message",
            T: () => gi
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.spot = gi.internalBinaryRead(e, e.uint32(), n, r.spot);
                break;
            case 2:
                r.perp = gi.internalBinaryRead(e, e.uint32(), n, r.perp);
                break;
            case 3:
                r.launch = gi.internalBinaryRead(e, e.uint32(), n, r.launch);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.spot && gi.internalBinaryWrite(e.spot, t.tag(1, v.LengthDelimited).fork(), n).join(),
        e.perp && gi.internalBinaryWrite(e.perp, t.tag(2, v.LengthDelimited).fork(), n).join(),
        e.launch && gi.internalBinaryWrite(e.launch, t.tag(3, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ww = new bw;
class kw extends Z {
    constructor() {
        super("hypurr.HypurrFunCabal", [{
            no: 1,
            name: "telegram_chat_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "picture_file_id",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "users",
            kind: "message",
            repeat: 1,
            T: () => ol
        }, {
            no: 5,
            name: "tracked_wallets",
            kind: "message",
            repeat: 1,
            T: () => ul
        }, {
            no: 6,
            name: "user_seasons",
            kind: "message",
            repeat: 1,
            T: () => Dn
        }, {
            no: 7,
            name: "summary",
            kind: "message",
            T: () => ll
        }])
    }
    create(e) {
        const t = {
            telegramChatId: 0,
            name: "",
            pictureFileId: "",
            users: [],
            trackedWallets: [],
            userSeasons: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.telegramChatId = e.int64().toNumber();
                break;
            case 2:
                r.name = e.string();
                break;
            case 3:
                r.pictureFileId = e.string();
                break;
            case 4:
                r.users.push(ol.internalBinaryRead(e, e.uint32(), n));
                break;
            case 5:
                r.trackedWallets.push(ul.internalBinaryRead(e, e.uint32(), n));
                break;
            case 6:
                r.userSeasons.push(Dn.internalBinaryRead(e, e.uint32(), n));
                break;
            case 7:
                r.summary = ll.internalBinaryRead(e, e.uint32(), n, r.summary);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.telegramChatId !== 0 && t.tag(1, v.Varint).int64(e.telegramChatId),
        e.name !== "" && t.tag(2, v.LengthDelimited).string(e.name),
        e.pictureFileId !== "" && t.tag(3, v.LengthDelimited).string(e.pictureFileId);
        for (let r = 0; r < e.users.length; r++)
            ol.internalBinaryWrite(e.users[r], t.tag(4, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.trackedWallets.length; r++)
            ul.internalBinaryWrite(e.trackedWallets[r], t.tag(5, v.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.userSeasons.length; r++)
            Dn.internalBinaryWrite(e.userSeasons[r], t.tag(6, v.LengthDelimited).fork(), n).join();
        e.summary && ll.internalBinaryWrite(e.summary, t.tag(7, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const On = new kw;
class _w extends Z {
    constructor() {
        super("hypurr.HypurrFunCabalSummary", [{
            no: 1,
            name: "user_count",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "season_spot_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 3,
            name: "season_perp_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 4,
            name: "season_launch_pnl",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            userCount: 0,
            seasonSpotPnl: 0,
            seasonPerpPnl: 0,
            seasonLaunchPnl: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.userCount = e.int64().toNumber();
                break;
            case 2:
                r.seasonSpotPnl = e.double();
                break;
            case 3:
                r.seasonPerpPnl = e.double();
                break;
            case 4:
                r.seasonLaunchPnl = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.userCount !== 0 && t.tag(1, v.Varint).int64(e.userCount),
        e.seasonSpotPnl !== 0 && t.tag(2, v.Bit64).double(e.seasonSpotPnl),
        e.seasonPerpPnl !== 0 && t.tag(3, v.Bit64).double(e.seasonPerpPnl),
        e.seasonLaunchPnl !== 0 && t.tag(4, v.Bit64).double(e.seasonLaunchPnl);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ll = new _w;
class xw extends Z {
    constructor() {
        super("hypurr.HypurrFunCabalUser", [{
            no: 1,
            name: "telegram_chat_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "telegram_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "wallet",
            kind: "message",
            T: () => Ve
        }, {
            no: 4,
            name: "wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 5,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "spot_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 7,
            name: "spot_equity",
            kind: "scalar",
            T: 1
        }, {
            no: 8,
            name: "launch_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "launch_equity",
            kind: "scalar",
            T: 1
        }, {
            no: 10,
            name: "perp_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 11,
            name: "perp_equity",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            telegramChatId: 0,
            telegramId: 0,
            walletId: 0,
            name: "",
            spotPnl: 0,
            spotEquity: 0,
            launchPnl: 0,
            launchEquity: 0,
            perpPnl: 0,
            perpEquity: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.telegramChatId = e.int64().toNumber();
                break;
            case 2:
                r.telegramId = e.int64().toNumber();
                break;
            case 3:
                r.wallet = Ve.internalBinaryRead(e, e.uint32(), n, r.wallet);
                break;
            case 4:
                r.walletId = e.int64().toNumber();
                break;
            case 5:
                r.name = e.string();
                break;
            case 6:
                r.spotPnl = e.double();
                break;
            case 7:
                r.spotEquity = e.double();
                break;
            case 8:
                r.launchPnl = e.double();
                break;
            case 9:
                r.launchEquity = e.double();
                break;
            case 10:
                r.perpPnl = e.double();
                break;
            case 11:
                r.perpEquity = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.telegramChatId !== 0 && t.tag(1, v.Varint).int64(e.telegramChatId),
        e.telegramId !== 0 && t.tag(2, v.Varint).int64(e.telegramId),
        e.wallet && Ve.internalBinaryWrite(e.wallet, t.tag(3, v.LengthDelimited).fork(), n).join(),
        e.walletId !== 0 && t.tag(4, v.Varint).int64(e.walletId),
        e.name !== "" && t.tag(5, v.LengthDelimited).string(e.name),
        e.spotPnl !== 0 && t.tag(6, v.Bit64).double(e.spotPnl),
        e.spotEquity !== 0 && t.tag(7, v.Bit64).double(e.spotEquity),
        e.launchPnl !== 0 && t.tag(8, v.Bit64).double(e.launchPnl),
        e.launchEquity !== 0 && t.tag(9, v.Bit64).double(e.launchEquity),
        e.perpPnl !== 0 && t.tag(10, v.Bit64).double(e.perpPnl),
        e.perpEquity !== 0 && t.tag(11, v.Bit64).double(e.perpEquity);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ol = new xw;
class Tw extends Z {
    constructor() {
        super("hypurr.HypurrFunCabalTrackedWallet", [{
            no: 1,
            name: "telegram_chat_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "wallet",
            kind: "message",
            T: () => Ve
        }, {
            no: 4,
            name: "label",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "alert_spot",
            kind: "scalar",
            T: 8
        }, {
            no: 6,
            name: "alert_perp",
            kind: "scalar",
            T: 8
        }])
    }
    create(e) {
        const t = {
            telegramChatId: 0,
            walletId: 0,
            label: "",
            alertSpot: !1,
            alertPerp: !1
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.telegramChatId = e.int64().toNumber();
                break;
            case 2:
                r.walletId = e.int64().toNumber();
                break;
            case 3:
                r.wallet = Ve.internalBinaryRead(e, e.uint32(), n, r.wallet);
                break;
            case 4:
                r.label = e.string();
                break;
            case 5:
                r.alertSpot = e.bool();
                break;
            case 6:
                r.alertPerp = e.bool();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.telegramChatId !== 0 && t.tag(1, v.Varint).int64(e.telegramChatId),
        e.walletId !== 0 && t.tag(2, v.Varint).int64(e.walletId),
        e.wallet && Ve.internalBinaryWrite(e.wallet, t.tag(3, v.LengthDelimited).fork(), n).join(),
        e.label !== "" && t.tag(4, v.LengthDelimited).string(e.label),
        e.alertSpot !== !1 && t.tag(5, v.Varint).bool(e.alertSpot),
        e.alertPerp !== !1 && t.tag(6, v.Varint).bool(e.alertPerp);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const ul = new Tw;
class Sw extends Z {
    constructor() {
        super("hypurr.HypurrFunCabalSeason", [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "start_time",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "end_time",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "user_seasons",
            kind: "message",
            repeat: 1,
            T: () => Dn
        }, {
            no: 6,
            name: "winner_id",
            kind: "message",
            T: () => be
        }, {
            no: 7,
            name: "winner",
            kind: "message",
            T: () => On
        }])
    }
    create(e) {
        const t = {
            id: 0,
            startTime: 0,
            endTime: 0,
            name: "",
            userSeasons: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.id = e.int64().toNumber();
                break;
            case 2:
                r.startTime = e.int64().toNumber();
                break;
            case 3:
                r.endTime = e.int64().toNumber();
                break;
            case 4:
                r.name = e.string();
                break;
            case 5:
                r.userSeasons.push(Dn.internalBinaryRead(e, e.uint32(), n));
                break;
            case 6:
                r.winnerId = be.internalBinaryRead(e, e.uint32(), n, r.winnerId);
                break;
            case 7:
                r.winner = On.internalBinaryRead(e, e.uint32(), n, r.winner);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, v.Varint).int64(e.id),
        e.startTime !== 0 && t.tag(2, v.Varint).int64(e.startTime),
        e.endTime !== 0 && t.tag(3, v.Varint).int64(e.endTime),
        e.name !== "" && t.tag(4, v.LengthDelimited).string(e.name);
        for (let r = 0; r < e.userSeasons.length; r++)
            Dn.internalBinaryWrite(e.userSeasons[r], t.tag(5, v.LengthDelimited).fork(), n).join();
        e.winnerId && be.internalBinaryWrite(e.winnerId, t.tag(6, v.LengthDelimited).fork(), n).join(),
        e.winner && On.internalBinaryWrite(e.winner, t.tag(7, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
new Sw;
class Ew extends Z {
    constructor() {
        super("hypurr.HypurrFunCabalUserSeason", [{
            no: 1,
            name: "cabal_season_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 2,
            name: "telegram_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "telegram_chat_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 5,
            name: "spot_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 6,
            name: "launch_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 7,
            name: "perp_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 8,
            name: "last_spot_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "last_launch_pnl",
            kind: "scalar",
            T: 1
        }, {
            no: 10,
            name: "last_perp_pnl",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            cabalSeasonId: 0,
            telegramId: 0,
            walletId: 0,
            telegramChatId: 0,
            spotPnl: 0,
            launchPnl: 0,
            perpPnl: 0,
            lastSpotPnl: 0,
            lastLaunchPnl: 0,
            lastPerpPnl: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.cabalSeasonId = e.int64().toNumber();
                break;
            case 2:
                r.telegramId = e.int64().toNumber();
                break;
            case 3:
                r.walletId = e.int64().toNumber();
                break;
            case 4:
                r.telegramChatId = e.int64().toNumber();
                break;
            case 5:
                r.spotPnl = e.double();
                break;
            case 6:
                r.launchPnl = e.double();
                break;
            case 7:
                r.perpPnl = e.double();
                break;
            case 8:
                r.lastSpotPnl = e.double();
                break;
            case 9:
                r.lastLaunchPnl = e.double();
                break;
            case 10:
                r.lastPerpPnl = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.cabalSeasonId !== 0 && t.tag(1, v.Varint).int64(e.cabalSeasonId),
        e.telegramId !== 0 && t.tag(2, v.Varint).int64(e.telegramId),
        e.walletId !== 0 && t.tag(3, v.Varint).int64(e.walletId),
        e.telegramChatId !== 0 && t.tag(4, v.Varint).int64(e.telegramChatId),
        e.spotPnl !== 0 && t.tag(5, v.Bit64).double(e.spotPnl),
        e.launchPnl !== 0 && t.tag(6, v.Bit64).double(e.launchPnl),
        e.perpPnl !== 0 && t.tag(7, v.Bit64).double(e.perpPnl),
        e.lastSpotPnl !== 0 && t.tag(8, v.Bit64).double(e.lastSpotPnl),
        e.lastLaunchPnl !== 0 && t.tag(9, v.Bit64).double(e.lastLaunchPnl),
        e.lastPerpPnl !== 0 && t.tag(10, v.Bit64).double(e.lastPerpPnl);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Dn = new Ew;
class Cw extends Z {
    constructor() {
        super("hypurr.HypurrFunCabalsRequest", [])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        return s ?? this.create()
    }
    internalBinaryWrite(e, t, n) {
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const $w = new Cw;
class Lw extends Z {
    constructor() {
        super("hypurr.HypurrFunCabalsResponse", [{
            no: 1,
            name: "cabals",
            kind: "message",
            repeat: 1,
            T: () => On
        }])
    }
    create(e) {
        const t = {
            cabals: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.cabals.push(On.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.cabals.length; r++)
            On.internalBinaryWrite(e.cabals[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Pw = new Lw;
class Iw extends Z {
    constructor() {
        super("hypurr.TelegramUserRequest", [{
            no: 1,
            name: "auth_data",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }])
    }
    create(e) {
        const t = {
            authData: {}
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                this.binaryReadMap1(r.authData, e, n);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    binaryReadMap1(e, t, n) {
        let s = t.uint32(), r = t.pos + s, a, l;
        for (; t.pos < r; ) {
            let[o,u] = t.tag();
            switch (o) {
            case 1:
                a = t.string();
                break;
            case 2:
                l = t.string();
                break;
            default:
                throw new globalThis.Error("unknown map entry field for field hypurr.TelegramUserRequest.auth_data")
            }
        }
        e[a ?? ""] = l ?? ""
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.authData))
            t.tag(1, v.LengthDelimited).fork().tag(1, v.LengthDelimited).string(r).tag(2, v.LengthDelimited).string(e.authData[r]).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Nw = new Iw;
class Mw extends Z {
    constructor() {
        super("hypurr.TelegramUserResponse", [{
            no: 1,
            name: "user",
            kind: "message",
            T: () => tl
        }])
    }
    create(e) {
        const t = {};
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.user = tl.internalBinaryRead(e, e.uint32(), n, r.user);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.user && tl.internalBinaryWrite(e.user, t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Rw = new Mw;
class Bw extends Z {
    constructor() {
        super("hypurr.TelegramUserWalletsRequest", [{
            no: 1,
            name: "auth_data",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }])
    }
    create(e) {
        const t = {
            authData: {}
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                this.binaryReadMap1(r.authData, e, n);
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    binaryReadMap1(e, t, n) {
        let s = t.uint32(), r = t.pos + s, a, l;
        for (; t.pos < r; ) {
            let[o,u] = t.tag();
            switch (o) {
            case 1:
                a = t.string();
                break;
            case 2:
                l = t.string();
                break;
            default:
                throw new globalThis.Error("unknown map entry field for field hypurr.TelegramUserWalletsRequest.auth_data")
            }
        }
        e[a ?? ""] = l ?? ""
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.authData))
            t.tag(1, v.LengthDelimited).fork().tag(1, v.LengthDelimited).string(r).tag(2, v.LengthDelimited).string(e.authData[r]).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Ow = new Bw;
class Dw extends Z {
    constructor() {
        super("hypurr.TelegramUserWalletsResponse", [{
            no: 1,
            name: "wallets",
            kind: "message",
            repeat: 1,
            T: () => Ve
        }])
    }
    create(e) {
        const t = {
            wallets: []
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.wallets.push(Ve.internalBinaryRead(e, e.uint32(), n));
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.wallets.length; r++)
            Ve.internalBinaryWrite(e.wallets[r], t.tag(1, v.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Fw = new Dw;
class Aw extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchTradeRequest", [{
            no: 1,
            name: "auth_data",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }, {
            no: 2,
            name: "launch_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 3,
            name: "wallet_id",
            kind: "scalar",
            T: 3,
            L: 2
        }, {
            no: 4,
            name: "direction",
            kind: "enum",
            T: () => ["hypurr.HyperliquidLaunchTradeDirection", Hr]
        }, {
            no: 5,
            name: "amount",
            kind: "scalar",
            T: 1
        }])
    }
    create(e) {
        const t = {
            authData: {},
            launchId: 0,
            walletId: 0,
            direction: 0,
            amount: 0
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                this.binaryReadMap1(r.authData, e, n);
                break;
            case 2:
                r.launchId = e.int64().toNumber();
                break;
            case 3:
                r.walletId = e.int64().toNumber();
                break;
            case 4:
                r.direction = e.int32();
                break;
            case 5:
                r.amount = e.double();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    binaryReadMap1(e, t, n) {
        let s = t.uint32(), r = t.pos + s, a, l;
        for (; t.pos < r; ) {
            let[o,u] = t.tag();
            switch (o) {
            case 1:
                a = t.string();
                break;
            case 2:
                l = t.string();
                break;
            default:
                throw new globalThis.Error("unknown map entry field for field hypurr.HyperliquidLaunchTradeRequest.auth_data")
            }
        }
        e[a ?? ""] = l ?? ""
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.authData))
            t.tag(1, v.LengthDelimited).fork().tag(1, v.LengthDelimited).string(r).tag(2, v.LengthDelimited).string(e.authData[r]).join();
        e.launchId !== 0 && t.tag(2, v.Varint).int64(e.launchId),
        e.walletId !== 0 && t.tag(3, v.Varint).int64(e.walletId),
        e.direction !== 0 && t.tag(4, v.Varint).int32(e.direction),
        e.amount !== 0 && t.tag(5, v.Bit64).double(e.amount);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}
const Vw = new Aw;
class zw extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunchTradeResponse", [{
            no: 1,
            name: "base_amount",
            kind: "scalar",
            T: 1
        }, {
            no: 2,
            name: "quote_amount",
            kind: "scalar",
            T: 1
        }, {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "success",
            kind: "scalar",
            T: 8
        }])
    }
    create(e) {
        const t = {
            baseAmount: 0,
            quoteAmount: 0,
            message: "",
            success: !1
        };
        return globalThis.Object.defineProperty(t, J, {
            enumerable: !1,
            value: this
        }),
        e !== void 0 && X(this, t, e),
        t
    }
    internalBinaryRead(e, t, n, s) {
        let r = s ?? this.create()
          , a = e.pos + t;
        for (; e.pos < a; ) {
            let[l,o] = e.tag();
            switch (l) {
            case 1:
                r.baseAmount = e.double();
                break;
            case 2:
                r.quoteAmount = e.double();
                break;
            case 3:
                r.message = e.string();
                break;
            case 4:
                r.success = e.bool();
                break;
            default:
                let u = n.readUnknownField;
                if (u === "throw")
                    throw new globalThis.Error(`Unknown field ${l} (wire type ${o}) for ${this.typeName}`);
                let c = e.skip(o);
                u !== !1 && (u === !0 ? P.onRead : u)(this.typeName, r, l, o, c)
            }
        }
        return r
    }
    internalBinaryWrite(e, t, n) {
        e.baseAmount !== 0 && t.tag(1, v.Bit64).double(e.baseAmount),
        e.quoteAmount !== 0 && t.tag(2, v.Bit64).double(e.quoteAmount),
        e.message !== "" && t.tag(3, v.LengthDelimited).string(e.message),
        e.success !== !1 && t.tag(4, v.Varint).bool(e.success);
        let s = n.writeUnknownFields;
        return s !== !1 && (s == !0 ? P.onWrite : s)(this.typeName, e, t),
        t
    }
}