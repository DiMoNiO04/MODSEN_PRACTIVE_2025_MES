import { photos } from './dataPhotos';

export const RenderList = () => {
  return (
    <>
      {photos.map(({id, title, thumbnailUrl, url}) => (
        <div key={id}>
          <h3>{title}</h3>
          <a href={url}>
            <img src={thumbnailUrl} alt={title}  loading="lazy" />
          </a>
        </div>
      ))}
    </>
  );
};
