export const metadata = {
  title: 'SAYAP TAWON - SISTEM LAYANAN TERPADU RUTAN WONOSOBO',
};

export default async function TwitterImage () {
  const imageBuffer = await fetch('https://sayaptawon.vercel.app/thumbnail.png').then((res) => res.arrayBuffer());

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': `inline; filename="${metadata.title}-twitter.png"`,
    },
  });
}
