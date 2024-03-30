import { getHomepage } from '@/lib/sanity.query';
import HomeHero from '@/stories/Components/HomeHero/HomeHero';
import { Homepage } from '@sanity/sanity.types';
import styles from './page.module.css';

export default async function Home() {
  const props: Homepage[] = await getHomepage();

  return (
    <main className={styles.main}>
      {props[0].homeHero && <HomeHero {...props[0].homeHero} />}
    </main>
  );
}
