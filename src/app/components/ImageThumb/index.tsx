import Image from 'next/image';

const ImageThumb = () => {
  return (
    <div>
      <Image src="/assets/thumb01.png" alt="Image 1" width={500} height={500} />
    </div>
  );
};

export default ImageThumb;
