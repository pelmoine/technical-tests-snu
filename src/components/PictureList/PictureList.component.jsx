import { Picture } from '../index';

export const PictureList = ({ pictures }) => {
  return (
    <div className='grid gap-4 grid-cols-3 gird-rows-3'>
      {pictures.map((picture) => (
        <Picture
          key={picture.id}
          source={picture.largeImageURL}
          alt={picture.tags}
        />
      ))}
    </div>
  );
};
