# @tchomb/shared-types

Shared TypeScript types and DTOs for the [Tchomb](https://tchomb.com) video platform ecosystem.

## Installation

```bash
npm install @tchomb/shared-types
```

## Types

| Type | Description |
|------|-------------|
| `FeedVideo` | Video/image in the feed with creator info and stats |
| `FeedResponse` | Paginated feed (videos + cursor) |
| `ProfileSummary` | Compact profile for search results and suggestions |
| `ProfileFull` | Full profile with stats |
| `TrendingTag` | Hashtag with post count |
| `UploadResult` | Upload response (video ID + message) |
| `PlayerSource` | Media asset descriptor for the player |

## Usage

```typescript
import type { FeedVideo, FeedResponse } from '@tchomb/shared-types';

const response: FeedResponse = await fetchFeed();
const video: FeedVideo = response.videos[0];
```

## Part of Tchomb

This package is part of the [Tchomb open-source ecosystem](https://github.com/yaamwebsolutions/tchomb):

| Package | Description |
|---------|-------------|
| **@tchomb/shared-types** | Shared TypeScript types and DTOs |
| [@tchomb/ui](https://github.com/yaamwebsolutions/tchomb-ui) | Design system — components + tokens |
| [@tchomb/api-client](https://github.com/yaamwebsolutions/tchomb-api-client) | Typed HTTP client |
| [@tchomb/upload](https://github.com/yaamwebsolutions/tchomb-upload) | Upload state machine |
| [@tchomb/player](https://github.com/yaamwebsolutions/tchomb-player) | Vertical video player |

## License

MIT
