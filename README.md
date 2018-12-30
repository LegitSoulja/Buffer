# Buffer

#### Writer

```js
var writer = new Buffer.Writer(1024);
var littleEndian = true; 
writer.writeInt8(0);
writer.writeUInt8(0);
writer.writeInt16(0, littleEndian);  // by default, bigEndian is wrote unless 2nd argument is true
writer.writeUInt16(0, littleEndian);
writer.writeInt32(0, littleEndian);
writer.writeUInt32(0, littleEndian);
writer.writeFloat32(0, littleEndian);

// unsupported
writer.writeInt64(0, littleEndian);
writer.writeUInt64(0, littleEndian);
writer.writeFloat64(0, littleEndian);
```

#### Reader

```js
var reader = new Buffer.Writer(writer.toBuffer());
console.log(reader.readInt8());
console.log(reader.readUInt8());
console.log(reader.readInt16(true)); // read little endian
console.log(reader.readUInt16(true));
console.log(reader.readInt32(true));
console.log(reader.readUInt32(true));
console.log(reader.readFloat32(true));

// unsupported
console.log(reader.readInt64(true));
console.log(reader.readUInt64(true));
console.log(reader.readFloat64(true));
```
