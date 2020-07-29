import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';

const CATEGORY_DEFAULT_COLOR_TITLE = '#2d2d63';
const VIDEO_CARD_DEFAULT_COLOR_TITLE = '#2d2d63';

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor || CATEGORY_DEFAULT_COLOR_TITLE;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={VIDEO_CARD_DEFAULT_COLOR_TITLE}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
