// Public DTOs — shared across mobile, api-client, player, upload packages

/** A video or image in the feed */
export type FeedVideo = {
  id: string;
  creator_id: string;
  video_url: string;
  thumbnail_url: string | null;
  caption: string;
  hashtags: string[];
  language: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  share_count: number;
  duration: number | null;
  subtitles_url: string | null;
  translated_caption: string | null;
  media_type: 'video' | 'image';
  created_at: string;
  creator_username: string;
  creator_display_name: string | null;
  creator_avatar_url: string | null;
  creator_is_creator: boolean;
  is_liked: boolean;
};

/** Paginated feed response */
export type FeedResponse = {
  videos: FeedVideo[];
  next_cursor: string | null;
};

/** Public profile summary (search results, suggestions) */
export type ProfileSummary = {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  is_creator: boolean;
  follower_count: number;
};

/** Full profile */
export type ProfileFull = {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  country: string;
  is_creator: boolean;
  follower_count: number;
  following_count: number;
  total_likes: number;
  video_count: number;
};

/** Trending hashtag */
export type TrendingTag = {
  tag: string;
  count: number;
};

/** Upload result */
export type UploadResult = {
  video: { id: string };
  message: string;
};

/** Generic media asset for player */
export type PlayerSource = {
  uri: string;
  type: 'video' | 'image';
  subtitlesUri?: string | null;
  posterUri?: string | null;
};
