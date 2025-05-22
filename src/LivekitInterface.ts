

export enum Kind {
  Audio = 'audio',
  Video = 'video',
  Unknown = 'unknown',
}
/**
 * @experimental
 */
export type ProcessorOptions<T extends Kind> = {
  kind: T;
  track: MediaStreamTrack;
  element?: HTMLMediaElement;
  audioContext?: AudioContext;
};

/**
 * @experimental
 */
export interface AudioProcessorOptions extends ProcessorOptions<Kind.Audio> {
  audioContext: AudioContext;
}

/**
 * @experimental
 */
export interface VideoProcessorOptions extends ProcessorOptions<Kind.Video> {}

/**
 * @experimental
 */
export interface TrackProcessor<
  T extends Kind,
  U extends ProcessorOptions<T> = ProcessorOptions<T>,
> {
  name: string;
  init: (opts: U) => Promise<void>;
  restart: (opts: U) => Promise<void>;
  destroy: () => Promise<void>;
  processedTrack?: MediaStreamTrack;
  onPublish?: (room: any) => Promise<void>;
  onUnpublish?: () => Promise<void>;
}
