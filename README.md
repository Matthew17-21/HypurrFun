# HypurrFun

A tool for interacting with hypurr.fun

## Overview

This project allows you to monitor and interact releases on HypurrFun by reverse engineering and decoding the binary gRPC data used in their client-server communication. Since the platform doesn't provide official documentation for their `.protobuf` files or enable gRPC reflection, I've made a quick package to help decode their protocol.

## Reverse Engineering Methods

### 1. JavaScript Source Analysis

We can extract the protobuf schema by analyzing the site's JavaScript source code at hypurr.fun's index file. The file contains protobuf class definitions that can be converted to proper protobuf definitions. An example of it can be found in [main.js](/reverse_engineering/main.js)

For example, the `Wv` class definition:

```javascript
class Wv extends Z {
    constructor() {
        super("hypurr.HyperliquidLaunch", [
            { no: 1, name: "id", kind: "scalar", T: 3, L: 2 },
            { no: 2, name: "telegram_id", kind: "scalar", T: 3, L: 2 },
            // ... additional fields
        ])
    }
    // ... methods
}
```

Can be converted to this protobuf schema:

```protobuf
syntax = "proto3";

package hypurr;

message HyperliquidLaunch {
    int64 id = 1;
    int64 telegram_id = 2;
    // ... additional fields
}
```

### 2. Console Debugging

The site logs network responses which can be captured for analysis:

1. Open browser developer tools
2. Set a breakpoint on the following console log:

```javascript
Ie(e.launches, (h, d) => {
    console.log(r.value.length, h.length, d.length)
    // ...
})
```

3. Capture the complete JSON response
4. Use tools like [json-to-proto](https://json-to-proto.github.io/) to generate protobuf definitions

### 3. gRPC Web Pentest Suite

The [gRPC Web Pentest Suite](https://github.com/nxenon/grpc-pentest-suite) provides two approaches:

> 1. **Burp Suite Integration**: Automatically decode gRPC requests and responses
> 2. **gRPC-Coder**: Manually decode responses (recommended approach)
>
   - Results can be found in [stream_response_raw_gRPC_Coder.txt](/reverse_engineering/stream_response_raw_gRPC_Coder.txt)


### 4. Protobuf Decoders

Another, more direct, approach is to use a protobuf decoders such as [this one](https://protobuf-decoder.netlify.app/). Using a decoder like this will easily allow you to input the payload or responses and get the schema, including the field number

## Generating Protobuf Files

To generate the final `.proto` files:

1. Identify all classes that extend the base protobuf class (As of 1/2/25, the class is `Z`) in the JavaScript source
2. Extract these classes to a single file
    - An example can be found in [proto_classes.js](/reverse_engineering/proto_classes.js)
3. Convert the JavaScript class definitions to protobuf format using an AI agent
4. The resulting definitions can be found in [hypurr.proto](/hypurr/hypurr.proto)

### Important Note

When using AI tools to convert the JavaScript classes to protobuf format, they may include unnecessary message definitions for Google protocol buffer types (e.g., `google.protobuf.Int64Value`). Make sure to:

1. Remove these auto-generated Google type messages
2. Add the correct Google protobuf imports instead:

```protobuf
import "google/protobuf/wrappers.proto";
// Add other required imports
```

## TODOs

- [ ] Tests
  - [ ] Tests for the `hypurr_utils` package
