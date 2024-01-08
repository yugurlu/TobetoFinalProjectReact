import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://enocta-mn360.mncdn.com/p/132/sp/13200/playManifest/entryId/0_tz585tol/format/applehttp/protocol/https/a.m3u8?st=msOR3bZGd1EIbW3lgg9jYg&e=1704743837"
      width="100%"
      height="auto"
      controls={true}
    />
  );
}

export default VideoPlayer;
