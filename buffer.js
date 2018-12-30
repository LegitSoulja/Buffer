"use strict";
class Reader {

    constructor(buffer) {
        this.index = 0;
        this.buffer = buffer;
    }

    readInt8() {
        return this.buffer.readInt8(this.index++);
    }

    readUInt8() {
        return this.buffer.readUInt8(this.index++)
    }

    readInt16(le) {
        this.index += 2;
        return ((le || false) ? this.buffer.readInt16LE(this.index - 2) : this.buffer.readInt16BE(this.index - 2));
    }

    readUInt16(le) {
        this.index += 2;
        return ((le || false) ? this.buffer.readUInt16LE(this.index - 2) : this.buffer.readUInt16BE(this.index - 2));
    }

    readInt32(le) {
        this.index += 4;
        return ((le || false) ? this.buffer.readInt32LE(this.index - 4) : this.buffer.readInt32BE(this.index - 4))
    }

    readUInt32(le) {
        this.index += 4;
        return ((le || false) ? this.buffer.readUInt32LE(this.index - 4) : this.buffer.readUInt32BE(this.index - 4));
    }

    readInt64(le) {
        this.index += 8;
        return ((le || false) ? this.buffer.readBigInt64LE(this.index - 8) : this.buffer.readBigInt64BE(this.index - 8));
    }

    readUInt64(le) {
        this.index += 8;
        return ((le || false) ? this.buffer.readBigUInt64LE(this.index - 8) : this.buffer.readBigUInt64BE(this.index - 8));
    }

    readFloat32(le) {
        this.index += 4;
        return ((le || false) ? this.buffer.readFloatLE(this.index - 4) : this.buffer.readFloatBE(this.index - 4));
    }

    readFloat64(le) {
        this.index += 8;
        return ((le || false) ? this.buffer.readFloat64LE(this.index - 8) : this.buffer.readFloat64BE(this.index - 8));
    }

    readString8() {
        var data = "";
        while(true){
          var char = this.readUInt8();
          if(char == 0) break;
          data += String.fromCharCode(char);
        }
        return data;
    }

    readString16(le) {
        var data = "";
        le = le || false;
        while(true){
          var char = this.readUInt16(le);
          if(char == 0) break;
          data += String.fromCharCode(char);
        }
        return data;
    }

    readString32(le) {
        var data = "";
        le = le || false;
        while(true){
          var char = this.readUInt32(le);
          if(char == 0) break;
          data += String.fromCharCode(char);
        }
        return data;
    }



}

class Writer {

    constructor(size) {
        this.index = 0;
        this.buffer = Buffer.alloc(size)
    }

    toBuffer() {
        return this.buffer;
    }

    writeInt8(n) {
        this.buffer.writeInt8(n, this.index++);
    }

    writeUInt8(n) {
        this.buffer.writeUInt8(n, this.index++);
    }

    writeInt16(n, le) {
        ((le || false) ? this.buffer.writeInt16LE(n, this.index) : this.buffer.writeInt16BE(n, this.index));
        this.index += 2;
    }

    writeUInt16(n, le) {
        ((le || false) ? this.buffer.writeUInt16LE(n, this.index) : this.buffer.writeUInt16BE(n, this.index))
        this.index += 2;
    }

    writeInt32(n, le) {
        ((le || false) ? this.buffer.writeInt32LE(n, this.index) : this.buffer.writeInt32BE(n, this.index));
        this.index += 4;
    }

    writeUInt32(n, le) {
        ((le || false) ? this.buffer.writeUInt32LE(n, this.index) : this.buffer.writeUInt32BE(n, this.index));
        this.index += 4;
    }

    writeInt64(n, le) {
        ((le || false) ? this.buffer.writeBigInt64LE(n, this.index) : this.buffer.writeBigInt64BE(n, this.index));
        this.index += 8;
    }

    writeUInt64(n, le) {
        ((le || false) ? this.buffer.writeBigUInt64LE(n, this.index) : this.buffer.writeBigUInt64BE(n, this.index));
        this.index += 8;
    }

    writeFloat32(n, le) {
        ((le || false) ? this.buffer.writeFloatLE(n, this.index) : this.buffer.writeFloatBE(n, this.index));
        this.index += 4;
    }

    writeFloat64(n, le) {
        ((le || false) ? this.buffer.writeFloat64LE(n, this.index) : this.buffer.writeFloat64BE(n, this.index))
        this.index += 8
    }

    writeString8(n, le) {
        if (typeof n !== 'string') return;
        le = le || false;
        for (var i in n) {
            this.writeUInt8(n.charCodeAt(i), le);
        }
        this.writeUInt8(0);
    }

    writeString16(n, le) {
        if (typeof n !== 'string') return;
        le = le || false;
        for (var i in n) {
            this.writeUInt16(n.charCodeAt(i), le);
        }
        this.writeUInt16(0);
    }

    writeString32(n, le) {
        if (typeof n !== 'string') return;
        le = le || false;
        for (var i in n) {
            this.writeUInt32(n.charCodeAt(i), le);
        }
        this.writeUInt32(0);
    }

}

module.exports = {
  Writer: Writer,
  Reader: Reader
}
