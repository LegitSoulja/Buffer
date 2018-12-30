# Buffer

#### Writer

```js
var writer = new Buffer.Writer(1024);
var littleEndian = true; 
writer.writeInt8(-1);
writer.writeUInt8(1);
writer.writeInt16(-20, littleEndian);  // by default, bigEndian is wrote unless 2nd argument is true
writer.writeUInt16(20, littleEndian);
writer.writeInt32(-1000, littleEndian);
writer.writeUInt32(1000, littleEndian);
writer.writeFloat32(1.1, littleEndian);
writer.writeString8("Hello World", littleEndian);
writer.writeString16("Hello World", littleEndian);
writer.writeString32("Hello World", littleEndian)

// unsupported
writer.writeInt64(0, littleEndian);
writer.writeUInt64(0, littleEndian);
writer.writeFloat64(0, littleEndian);
```

#### Reader

```js
var reader = new Buffer.Writer(writer.toBuffer());

console.log(reader.readInt8()); // -1
console.log(reader.readUInt8()); // 1
console.log(reader.readInt16(true)); // -20
console.log(reader.readUInt16(true)); // 20
console.log(reader.readInt32(true)); // -1000
console.log(reader.readUInt32(true)); // 1000
console.log(reader.readFloat32(true)); // 1.1..
console.log(reader.readString8(true)); // Hello World
console.log(reader.readString16(true)); // Hello World
console.log(reader.readString32(true)); // Hello World

// unsupported
console.log(reader.readInt64(true));
console.log(reader.readUInt64(true));
console.log(reader.readFloat64(true));
```
