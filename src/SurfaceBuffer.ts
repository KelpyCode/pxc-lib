export interface ISurfaceBuffer {
    width: number;
    height: number;
    colors: Buffer;
}

export function SurfaceBuffer(data: Buffer): ISurfaceBuffer {
    const OFFSET_PXC = 0

    const OFFSET_WIDTH = 4
    const OFFSET_HEIGHT = 6
    const OFFSET_FORMAT = 8
    const OFFSET_DATA = 24

    // d.readInt16LE(6);

    function readString(offset: number, length: number) {
        let str = ''

        for (let i = offset; i < offset + length; i++) {
            str += String.fromCharCode(data.readUInt8(i))
        }
        return str
    }

    const pxcString = readString(OFFSET_PXC, 4)

    if (pxcString !== 'PXCS') {
        throw new Error('Invalid PXC Buffer')
    }

    const width = data.readUInt16LE(OFFSET_WIDTH)
    const height = data.readUInt16LE(OFFSET_HEIGHT)
    const colors = data.subarray(OFFSET_DATA)

    // for (let i = OFFSET_DATA; i < data.length; i += 4) {
    //     const format = data.readUInt32BE(i)
    //     colors.push(format)
    // }

    return {
        width,
        height,
        colors,
    }
}