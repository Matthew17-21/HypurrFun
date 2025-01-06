# HypurrFun

A tool for interacting with hypurr.fun

## Overview

This project allows you to monitor and interact releases on HypurrFun by reverse engineering and decoding the binary gRPC data used in their client-server communication. Since the platform doesn't provide official documentation for their `.protobuf` files or enable gRPC reflection, I've made a quick package to help decode their protocol.

## Features

- Hypurr Protobuf file
- Streaming support
- New project monitor
  - Lightning quick
  - Discord webhook notification

## How to use

### Docker

To use the new project monitor, you can simply use Docker to build and run the image. To do so, use:

Build the image:

```bash
docker build -t hypurr-project-monitor:latest .
```

Run the image:

```bash
docker run -d -i \
-e NEW_LAUNCHES_WEBHOOK=<your-webhook-url> \
--name hypurr-new-releases hypurr-project-monitor:latest
```

Replace `<your-webhook-url>` with your actual webhook URL for notifications.

### Manually

Alternatively, you can do:

```bash
go run cmd/new-project-monitor/main.go
```

### Integration

#### Go Integration

To use this library in your own Go program, simply follow these steps:

1. Install the package:

```bash
go get -u github.com/Matthew17-21/HypurrFun
```

2. Use in your code:

```go
package main

import (
  "log"
  hypurrutils "github.com/Matthew17-21/HypurrFun/hypurr_utils"
)

func main() {
    userAgent := "<user-agent>" // Replace with your user agent

    // Initialize the client
    client, err := hypurrutils.NewStaticClient(userAgent)
    if err != nil {
        log.Fatalln(err)
    }

    // Your implementation here
}
```

#### Other Languages

The project supports integration with multiple programming languages through Protocol Buffers:

1. Locate the Proto file at [`pb/hypurr.proto`](/pb/hypurr.proto)
2. Generate code for your target language using `protoc`:

```bash
protoc --<language>_out=. pb/hypurr.proto
```

Replace `<language>` with your desired language (e.g., python, java, cpp).

## TODOs

- [ ] Tests
  - [ ] Tests for the `hypurr_utils` package
