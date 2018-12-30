(function() {
    class Reader {

        constructor(buffer) {
            this.index = 0;
            this.buffer = new DataView(buffer);
        }

        readInt8() {
            return this.buffer.getInt8(this.index++);
        }

        readUInt8() {
            return this.buffer.getUint8(this.index++)
        }

        readInt16(le) {
            this.index += 2;
            return this.buffer.getInt16(this.index - 2, le || false);
        }

        readUInt16(le) {
            this.index += 2;
            return this.buffer.getUint16(this.index - 2, le || false);
        }

        readInt32(le) {
            this.index += 4;
            return this.buffer.getInt32(this.index - 4, le || false)
        }

        readUInt32(le) {
            this.index += 4;
            return this.buffer.getUint32(this.index - 4, le || false);
        }

        readInt64(le) {
            this.index += 8;
            return this.buffer.getBigInt64(this.index - 8, le || false);
        }

        readUInt64(le) {
            this.index += 8;
            return this.buffer.getBigUint64(this.index - 8, le || false);
        }

        readFloat32(le) {
            this.index += 4;
            return this.buffer.getFloat32(this.index - 4, le || false);
        }

        readFloat64(le) {
            this.index += 8;
            return this.buffer.getFloat64(this.index - 8, le || false);
        }

        readString8() {
            var data = "";
            while (true) {
                var char = this.readUInt8();
                if (char == 0) break;
                data += String.fromCharCode(char);
            }
            return data;
        }

        readString16(le) {
            var data = "";
            le = le || false;
            while (true) {
                var char = this.readUInt16(le);
                if (char == 0) break;
                data += String.fromCharCode(char);
            }
            return data;
        }

        readString32(length, le) {
            var data = "";
            le = le || false;
            while (true) {
                var char = this.readUInt32(le);
                if (char == 0) break;
                data += String.fromCharCode(char);
            }
            return data;
        }

    }

    class Writer {

        constructor(size) {
            this.index = 0;
            this.buffer = new DataView(new ArrayBuffer(size));
        }

        toBuffer() {
            return this.buffer.buffer;
        }

        reset() {
            this.index = 0
        }

        writeInt8(n) {
            this.buffer.setInt8(this.index++, n);
        }

        writeUInt8(n) {
            this.buffer.setUint8(this.index++, n);
        }

        writeInt16(n, le) {
            this.buffer.setInt16(this.index, n, le || false);
            this.index += 2;
        }

        writeUInt16(n, le) {
            this.buffer.setUint16(this.index, n, le || false);
            this.index += 2;
        }

        writeInt32(n, le) {
            this.buffer.setInt32(this.index, n, le || false);
            this.index += 4;
        }

        writeUInt32(n, le) {
            this.buffer.setUint32(this.index, n, le || false);
            this.index += 4;
        }

        writeInt64(n, le) {
            this.buffer.setBigInt64(this.index, n, le || false);
            this.index += 8;
        }

        writeUInt64(n, le) {
            this.buffer.setBitUint64(this.index, n, le || false);
            this.index += 8;
        }

        writeFloat32(n, le) {
            this.buffer.setFloat32(this.index, n, le || false);
            this.index += 4;
        }

        writeFloat64(n, le) {
            this.buffer.setFloat64(this.index, n, le || false)
        }

        writeString8(n) {
            if (typeof n !== 'string') return;
            for (var i in n) {
                this.writeUInt8(n.charCodeAt(i))
            }
            this.writeUInt8(0);
        }

        writeString16(n, le) {
            if (typeof n !== 'string') return;
            le = le || false;
            for (var i in n) {
                this.writeUInt16(n.charCodeAt(i), le)
            }
            this.writeUInt16(0);
        }

        writeString32(n, le) {
            if (typeof n !== 'string') return;
            le = le || false;
            for (var i in n) {
                this.writeUInt32(n.charCodeAt(i), le)
            }
            this.writeUInt32(0);
        }

    }

    window.Buffer = {
        Writer: Writer,
        Reader: Reader
    }
})();
