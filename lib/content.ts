import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Deal {
  slug: string;
  title: string;
  date: string;
  tag: string;
  outcome: 'win' | 'loss';
  body: string;
}

export interface Playbook {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  body: string;
}

export interface HiringPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  body: string;
}

export interface Book {
  slug: string;
  title: string;
  author: string;
  tag: string;
  why: string;
}

function getContentByType<T>(type: 'deals' | 'playbooks' | 'hiring' | 'books'): T[] {
  const typeDirectory = path.join(contentDirectory, type);

  if (!fs.existsSync(typeDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDirectory);
  const allContent = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(typeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      if (type === 'books') {
        return {
          slug,
          title: data.title,
          author: data.author,
          tag: data.tag,
          why: content.trim(),
        };
      }

      if (type === 'deals') {
        return {
          slug,
          title: data.title,
          date: data.date,
          tag: data.tag,
          outcome: data.outcome,
          body: content.trim(),
        };
      }

      // playbooks and hiring
      return {
        slug,
        title: data.title,
        date: data.date,
        tag: data.tag,
        summary: data.summary,
        body: content.trim(),
      };
    });

  return allContent as T[];
}

export function getAllDeals(): Deal[] {
  return getContentByType<Deal>('deals');
}

export function getAllPlaybooks(): Playbook[] {
  return getContentByType<Playbook>('playbooks');
}

export function getAllHiring(): HiringPost[] {
  return getContentByType<HiringPost>('hiring');
}

export function getAllBooks(): Book[] {
  return getContentByType<Book>('books');
}

export function getPlaybookBySlug(slug: string): Playbook | null {
  const playbooks = getAllPlaybooks();
  return playbooks.find(p => p.slug === slug) || null;
}

export function getHiringBySlug(slug: string): HiringPost | null {
  const hiring = getAllHiring();
  return hiring.find(h => h.slug === slug) || null;
}
