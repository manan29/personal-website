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

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  body: string;
  category: string;
  hero?: string;
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  tag: string;
  body: string;
}

function getContentByType<T>(type: 'deals' | 'playbooks' | 'hiring' | 'books' | 'notes'): T[] {
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

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const categoryDirectory = path.join(contentDirectory, 'blog', category);

  if (!fs.existsSync(categoryDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoryDirectory);
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(categoryDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        tag: data.tag,
        summary: data.summary,
        body: content.trim(),
        category,
        hero: data.hero,
      };
    });

  return posts;
}

export function getBlogPostBySlug(category: string, slug: string): BlogPost | null {
  const posts = getBlogPostsByCategory(category);
  return posts.find(p => p.slug === slug) || null;
}

export function getAllBlogPosts(): BlogPost[] {
  const categories = ['large-deal-learnings', 'hiring-top-talent', 'sales-systems'];
  const allPosts: BlogPost[] = [];

  categories.forEach(category => {
    const posts = getBlogPostsByCategory(category);
    allPosts.push(...posts);
  });

  return allPosts;
}

export function getAllNotes(): Note[] {
  return getContentByType<Note>('notes');
}

export function getNoteBySlug(slug: string): Note | null {
  const notes = getAllNotes();
  return notes.find(n => n.slug === slug) || null;
}
