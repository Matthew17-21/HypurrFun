# HypurrFun

Program to monitor HypurrFun releases

## Decoding gRPC

In order to monitor new releases, we need to decode binary data since the website communicates with the server with gRPC. Although the site does not provide any documentation on the `.protobuf` files nor does it allow for gRPC reflection, there are a few ways we can reverse engineer it.

### Source file

We can use clues about found inside the [javascript file](https://app.hypurr.fun/assets/index.83fa9bca.js) of the site to get an idea of the protobuf schema. For example, the following class

```javascript
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
                    throw new globalThis.Error(Unknown field ${l} (wire type ${o}) for ${this.typeName});
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
```

can be converted to the following proto file with the use of Claude or ChatGPT:

```proto
syntax = "proto3";

package hypurr;

import "google/protobuf/timestamp.proto";

message HyperliquidLaunch {
  int64 id = 1;
  int64 telegram_id = 2;
  TelegramUser telegram_user = 3;
  string description = 4;
  bool listed = 5;
  bool settled = 6;
  int64 x0 = 7;
  int64 session_id = 8;
  Session session = 9;
  string media_file_id = 10;
  Topic topic_id = 11;
  int64 x = 12;
  int64 y = 13;
  int64 k = 14;
  repeated Fill fills = 15;
  double daily_ntl_volume = 16;
  double previous_day_px = 17;
  int64 last_event_timestamp = 18;
  HyperliquidLaunchPoolType pool_type = 19;
  int64 decimals = 20;
  Wallet session_wallet = 21;
  string media_type = 22;
  int64 listed_timestamp = 23;
  Wallet dev_wallet = 24;
}

message TelegramUser {
  // Define fields for the TelegramUser message.
}

message Session {
  // Define fields for the Session message.
}

message Topic {
  // Define fields for the Topic message.
}

message Fill {
  // Define fields for the Fill message.
}

message Wallet {
  // Define fields for the Wallet message.
}

enum HyperliquidLaunchPoolType {
  // Define enum values for HyperliquidLaunchPoolType.
  UNKNOWN = 0;
  // Add other values as needed.
}

```

### Console

When initially playing around with the site, I noticed the site had making some weird console.logs. Upon further inspection, the function that was logging to console was the following:

```javascript
Ie(e.launches, (h, d) => {
            console.log(r.value.length, h.length, d.length),
            !(s.value && r.value.length > 0 && h.length === d.length) && u()
        }
```

After setting a breakpoint on it, the entire response (in JSON) was being logged to console. As example of this looked like the response in [launches.json](/reverse_engineering/launches.json). From there, we could simply use a tool to like <https://json-to-proto.github.io/> to convert the JSON data to appropriate protobuf files.

### gRPC Web Pentest Suite

Another way to get potential protobuf files is to use [gRPC Web Pentest Suite](https://github.com/nxenon/grpc-pentest-suite). Following the detailed steps, you can use burp suite to automatically decode the requests and responses. What I found to be easier was to use and was more successful was the [gRPC-Coder](https://github.com/nxenon/grpc-pentest-suite?tab=readme-ov-file#grpc-coder-usage). Manually passing in the responses yielded results found in the [stream_response_raw_gRPC_Coder.txt](/reverse_engineering/stream_response_raw_gRPC_Coder.txt)