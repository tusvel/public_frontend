import { type User } from 'entities/User';
import {
  type ArticleBlockType,
  type ArticleType,
} from '../consts/articleConsts';

export type ArticleBlockBase = {
  id: string;
  type: ArticleBlockType;
};

export type ArticleCodeBlock = {
  type: ArticleBlockType.CODE;
  code: string;
} & ArticleBlockBase;

export type ArticleImageBlock = {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
} & ArticleBlockBase;

export type ArticleTextBlock = {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
} & ArticleBlockBase;

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
};
