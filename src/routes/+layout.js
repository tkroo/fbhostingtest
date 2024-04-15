export const prerender = true;

import { mysite } from '$lib/data.js';

export const load = async({ fetch, params }) => {
  return {
    mysite
  };
}