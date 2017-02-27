function getPlayerOpts({ aspectRatio, playlist, isMuted, generatePrerollUrl, file }) {
  const hasAdvertising = !!generatePrerollUrl;

  const playerOpts = {
    mute: !!isMuted,
  };

  if (playlist) {
    playerOpts.playlist = playlist;
  } else if (file) {
    playerOpts.file = file;
  }

  if (aspectRatio !== 'inherit') {
    playerOpts.aspectratio = aspectRatio;
  }

  if (hasAdvertising) {
    playerOpts.advertising = {
      client: 'googima',
      admessage: 'Ad — xxs left',
      autoplayadsmuted: true,
    };
  }

  return playerOpts;
}

export default getPlayerOpts;
