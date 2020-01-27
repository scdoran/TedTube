const formattedVideo = class Video {
  constructor(video) {
    this.name = video.name;
    this.id = video.youTubeID;
    this.embeddedLink = video.embeddedLink.replace(/\\/g, '');
    this.favorite = false;
    this.watchlist = false;
    this.thumbnail_url = video.thumbnail_url;
    this.speaker = {
      name: video.speaker,
      bio: video.speakerBio.replace(/\\/g, ''),
      description: video.speakersDesc,
      link: video.speaker_url,
    };
    this.viewCount = video.viewCount;
  }
};

export const formatting = { formattedVideo };
