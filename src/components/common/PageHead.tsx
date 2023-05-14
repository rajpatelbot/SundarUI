import Head from 'next/head';
interface PageHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export default function PageHead({ title, description, ogTitle, ogUrl, ogImage, ogType }: PageHeadProps) {
  if (!title) {
    title = 'Sundar UI - Prebuilt Tailwind & Mobile Components Collection';
  }

  if (!description) {
    description =
      "Explore Sundar UI's vast collection of prebuilt Tailwind and mobile components for seamless UI design.";
  }

  if (!ogTitle) {
    ogTitle = 'Sundar UI - Prebuilt Tailwind & Mobile Components Collection';
  }

  if (!ogUrl) {
    ogUrl = 'https://sundar-ui.netlify.app/';
  }

  if (!ogImage) {
    ogImage = '/sundarui.svg';
  }

  if (!ogType) {
    ogType = 'image/png';
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/sundarui.svg" />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
}
