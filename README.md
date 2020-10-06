# node-buffer

a nodejs buffer polyfill for deno using the [buffer](https://github.com/feross/buffer) npm package

## Usage

```ts
import { Buffer } from "http://deno.land/x/node_buffer/mod.ts";
// or
import { Buffer } from "https://x.nest.land/node_buffer@1.0.1/mod.ts";

console.log(
  Buffer.from([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]).toString()
); // => hello world
```
