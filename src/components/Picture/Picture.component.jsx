export const Picture = ({ source, alt }) => {
  return (
    <div className='flex h-52 max-w-xs items-center  '>
      <img
        src={source}
        className='mx-auto max-h-52 rounded shadow-xl'
        alt={alt}
      />
    </div>
  );
};
