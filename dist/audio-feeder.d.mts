export declare class AudioFeeder {
    #private;
    private readonly sampleRate;
    private readonly channels;
    private readonly framesPerChunk;
    private readonly onChunk;
    private readonly source;
    droppedChunks: number;
    underflowChunks: number;
    bytesProduced: number;
    chunksEmitted: number;
    constructor(sampleRate: number, channels: number, framesPerChunk: number, onChunk: (chunk: Float32Array) => void, source?: string);
    /**
     * Push live PCM (only meaningful with `source === "live"`). Frames are
     * re-chunked to the metering size, so the uplink is fed at the same cadence
     * and in the same frame size as an ffmpeg source would feed it.
     */
    write: (pcm: Float32Array) => void;
    start: () => void;
    stop: () => void;
}
