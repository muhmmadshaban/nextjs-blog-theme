import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from Next.js

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      {/* Use the Image component for optimized image loading */}
      <Image 
        src="/LG1.png" // Path to your image
        alt={`${name} Logo`} 
        width={80} // Set the width of the image
        height={80} // Set the height of the image
        className="block mx-auto mb-4 rounded-full" // Add any additional classes you need
      />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
