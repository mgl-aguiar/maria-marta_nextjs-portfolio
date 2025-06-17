import Image from 'next/image';

const Thumbnails = () => {
  return (
    <div>
      <Image src="/assets/thumb01.png" alt="Image 1" width={500} height={500} />
    </div>
  );
};

export default Thumbnails;
