import {
  Buffer as _Buffer,
  kMaxLength,
  SlowBuffer as _SlowBuffer,
} from "./src/buffer.js";

type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array;

type BufferConstructor = (length: number) => BufferType;

interface BufferClass extends BufferConstructor {
  poolSize: number;
  constants: {
    MAX_LENGTH: number;
    MAX_STRING_LENGTH: number;
  };
  from(string: string, encoding?: string): BufferType;
  from(
    arrayBuffer: ArrayBuffer,
    byteOffset?: number,
    length?: number,
  ): BufferType;
  from(array: number[]): BufferType;
  from(buffer: BufferType): BufferType;
  alloc(size: number, fill?: ArrayBuffer | Uint8Array | number): BufferType;
  alloc(size: number, fill: string, encoding?: string): BufferType;
  allocUnsafe(size: number): BufferType;
  allocUnsafeSlow(size: number): BufferType;
  isBuffer(buff: any): buff is BufferType;
  byteLength(
    thing:
      | string
      | BufferType
      | TypedArray
      | DataView
      | ArrayBuffer
      | SharedArrayBuffer,
    encoding?: string,
  ): number;
  compare(buf1: BufferType, buf2: BufferType): -1 | 0 | 1;
  concat(buffers: BufferType[] | Uint8Array[], totalLen: number): BufferType;
  isEncoding(): boolean;
}

interface BufferType extends Uint8Array {
  buffer: ArrayBuffer;
  equals(otherBuffer: BufferType): boolean;
  fill(value: string, encoding: string): this;
  fill(
    value: number | Uint8Array | BufferType,
    offset?: number,
    end?: number,
  ): this;
  includes(thing: string, encoding?: string): boolean;
  includes(
    thing: BufferType | Uint8Array | number,
    byteOffset?: number,
  ): boolean;
  indexOf(thing: string, encoding?: string): number;
  indexOf(thing: BufferType | Uint8Array | number, byteOffset?: number): number;
  lastIndexOf(thing: string, encoding?: string): number;
  lastIndexOf(
    thing: BufferType | Uint8Array | number,
    byteOffset?: number,
  ): number;
  toJSON(): {
    type: "Buffer";
    data: number[];
  };
  toString(encoding?: string, start?: number, end?: number): string;
  write(string: string, encoding?: string): number;
  write(string: string, offset?: number, length?: number): number;
  swap16(): this;
  swap32(): this;
  swap64(): this;
  readInt8(offset?: number): number;
  readUInt8(offset?: number): number;
  readIntBE(offset: number, byteLength: number): number;
  readIntLE(offset: number, byteLength: number): number;
  readInt16BE(offset?: number): number;
  readInt16LE(offset?: number): number;
  readInt32BE(offset?: number): number;
  readInt32LE(offset?: number): number;
  readUIntBE(offset: number, byteLength: number): number;
  readUIntLE(offset: number, byteLength: number): number;
  readUInt16BE(offset?: number): number;
  readUInt16LE(offset?: number): number;
  readUInt32BE(offset?: number): number;
  readUInt32LE(offset?: number): number;
  readBigInt64BE(offset?: number): bigint;
  readBigInt64LE(offset?: number): bigint;
  readBigUInt64BE(offset?: number): bigint;
  readBigUInt64LE(offset?: number): bigint;
  readDoubleBE(offset?: number): number;
  readDoubleLE(offset?: number): number;
  readFloatBE(offset?: number): number;
  readFloatLE(offset?: number): number;
  writeInt8(value: number, offset?: number): number;
  writeUInt8(value: number, offset?: number): number;
  writeIntBE(value: number, offset: number, byteLength: number): number;
  writeIntLE(value: number, offset: number, byteLength: number): number;
  writeInt16BE(value: number, offset?: number): number;
  writeInt16LE(value: number, offset?: number): number;
  writeInt32BE(value: number, offset?: number): number;
  writeInt32LE(value: number, offset?: number): number;
  writeUIntBE(value: number, offset: number, byteLength: number): number;
  writeUIntLE(value: number, offset: number, byteLength: number): number;
  writeUInt16BE(value: number, offset?: number): number;
  writeUInt16LE(value: number, offset?: number): number;
  writeUInt32BE(value: number, offset?: number): number;
  writeUInt32LE(value: number, offset?: number): number;
  writeBigInt64BE(value: bigint, offset?: number): number;
  writeBigInt64LE(value: bigint, offset?: number): number;
  writeBigUInt64BE(value: bigint, offset?: number): number;
  writeBigUInt64LE(value: bigint, offset?: number): number;
  writeDoubleBE(value: number, offset?: number): number;
  writeDoubleLE(value: number, offset?: number): number;
  writeFloatBE(value: number, offset?: number): number;
  writeFloatLE(value: number, offset?: number): number;
}

// @ts-ignore
export const Buffer: BufferClass = _Buffer;

Buffer.constants = {
  MAX_LENGTH: kMaxLength,
  MAX_STRING_LENGTH: 1900000000,
};

// @ts-ignore
export const SlowBuffer: (size: number) => Buffer = _SlowBuffer;
