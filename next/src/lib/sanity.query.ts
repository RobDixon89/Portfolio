import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getHomepage() {
  return client.fetch(
    groq`
    *[_type == 'homepage']{ 
      _id, 
      title, 
      homeHero { intro, main }
    } `
  );
}

// https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs/
