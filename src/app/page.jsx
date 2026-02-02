import { inter, poppins } from "./layout";

export default function Home() {
  return (
    <>
      <h1 className={`text-5xl font-black ${poppins.className}`}>Hello, world!</h1>
      <p className={`text-lg font-bold ${inter.className}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ut iste praesentium, facilis fugit quis perspiciatis natus molestiae necessitatibus quibusdam enim. Iure aliquid possimus ab distinctio doloremque quas eius ipsa.</p>
    </>
  );
}
